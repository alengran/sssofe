# ============================================================
#  网站同步脚本：虚拟主机 -> 本仓库 -> GitHub（自动发布 Pages）
#
#  用法：网站更新后，双击仓库根目录的「同步网站到GitHub.bat」
#  流程：1) WinSCP 从虚拟主机增量下载整站到 _remote_site/
#        2) 白名单过滤 + robocopy 镜像同步到仓库根目录
#        3) 检测到变化才 git commit + push，GitHub 随后自动重新发布
# ============================================================

# ---------------- 配置区（按需修改这里） ----------------
# WinSCP 中保存的站点名（建议用英文，如 myhost）
$WinSCPSite = "myhost"
# 虚拟主机上的网站根目录（以 / 开头结尾，常见值：/wwwroot/ /public_html/ /htdocs/ /web/）
$RemoteDir  = "/wwwroot/"
# 提交信息前缀
$CommitPrefix = "sync: 同步虚拟主机网站内容"

# PHP 管理后台目录：含配置和 admin.css/js，绝不能同步进仓库
$AdminDir = "ad34_min_dm4bjf34g"

# 仓库专属文件/目录：虚拟主机上没有、必须保留在仓库里的内容
$ExcludeDirs  = @(".git", ".github", ".claude", "tools", "_remote_site", $AdminDir)
$ExcludeFiles = @("CNAME", ".gitignore", "*.md", "generate-pages.js", "googlea8fb23f79120abdc.html")

# 白名单：只有这些扩展名的文件允许进入 GitHub 仓库（静态网页和资源）。
# php、数据库配置、打包备份等敏感文件一律被挡在仓库之外。
$IncludeExts = @(
    ".html",".htm",".shtml",                                            # 网页
    ".css",".js",".mjs",".map",".json",".xml",".txt",                   # 样式/脚本/数据
    ".jpg",".jpeg",".png",".gif",".webp",".svg",".ico",".bmp",".avif",  # 图片
    ".woff",".woff2",".ttf",".otf",".eot",                              # 字体
    ".mp4",".webm",".mp3",".ogg",".wav",".m4a",                         # 音视频
    ".pdf",".csv"
)
# ---------------------------------------------------------

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$RepoDir   = Split-Path -Parent $PSScriptRoot
$MirrorDir = Join-Path $RepoDir "_remote_site"

function Fail($msg) {
    Write-Host ""
    Write-Host "[失败] $msg" -ForegroundColor Red
    exit 1
}
function Ok($msg) {
    Write-Host "[OK] $msg" -ForegroundColor Green
}

Write-Host "=== 网站同步开始 $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ==="
Write-Host "仓库目录: $RepoDir"

# ---------- 第 0 步：定位 WinSCP ----------
$winscpCandidates = @(
    (Join-Path $env:ProgramFiles "WinSCP\winscp.com"),
    (Join-Path ${env:ProgramFiles(x86)} "WinSCP\winscp.com")
) | Where-Object { $_ }
$winscp = $winscpCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $winscp) {
    $cmd = Get-Command winscp.com -ErrorAction SilentlyContinue
    if ($cmd) { $winscp = $cmd.Source }
}
if (-not $winscp) {
    Fail (@"
未找到 WinSCP。请先安装（只需一次）：
    winget install WinSCP.WinSCP
或到官网 https://winscp.net 下载安装。
安装后：打开 WinSCP -> 新建站点 -> 填虚拟主机的 FTP/SFTP 地址和账号 -> 保存密码，
然后把本脚本顶部的 `$WinSCPSite 改成你保存的站点名。
"@)
}
Ok("找到 WinSCP: $winscp")

# ---------- 第 1 步：从虚拟主机增量下载整站 ----------
if (-not (Test-Path $MirrorDir)) { New-Item -ItemType Directory -Path $MirrorDir | Out-Null }

$tmpScript = Join-Path $env:TEMP ("winscp-sync-{0}.txt" -f $PID)
$lines = @(
    "open `"$WinSCPSite`"",
    "synchronize local -mirror -delete `"$MirrorDir`" `"$RemoteDir`"",
    "close",
    "exit"
)
[System.IO.File]::WriteAllLines($tmpScript, $lines, [System.Text.UTF8Encoding]::new($true))

Write-Host "正在从虚拟主机拉取 $RemoteDir ..."
& $winscp /iniid /script=$tmpScript /timeout=120
$scpExit = $LASTEXITCODE
Remove-Item $tmpScript -ErrorAction SilentlyContinue
if ($scpExit -ne 0) {
    Fail (@"
从虚拟主机拉取失败（WinSCP 退出码 $scpExit）。请检查：
  1. 脚本顶部的站点名 `"$WinSCPSite`" 是否与 WinSCP 中保存的站点一致
  2. 虚拟主机 FTP 是否可登录、`$RemoteDir 路径是否正确（当前: $RemoteDir）
"@)
}

# 安全阀：拉取结果为空说明 FTP 路径配错，绝不能继续镜像（否则会清空仓库并推送）
$remoteCount = (Get-ChildItem -LiteralPath $MirrorDir -Recurse -File -ErrorAction SilentlyContinue | Measure-Object).Count
if ($remoteCount -eq 0) {
    Fail ("从虚拟主机拉取到的内容为空：请检查站点名、`$RemoteDir 路径（当前: $RemoteDir）和 FTP 账号是否正确。仓库未被改动。")
}
Ok("整站已同步到本地镜像（$remoteCount 个文件）")

# ---------- 第 1.5 步：白名单过滤，只保留静态网页和资源 ----------
# php、数据库配置、打包备份、日志等敏感/无用文件一律删除，绝不进入 GitHub 仓库
$all = Get-ChildItem -LiteralPath $MirrorDir -Recurse -File
$removed = @($all | Where-Object { $IncludeExts -notcontains $_.Extension.ToLower() })
$removed | Remove-Item -Force
# 清掉因此变空的目录
Get-ChildItem -LiteralPath $MirrorDir -Recurse -Directory |
    Sort-Object { $_.FullName.Length } -Descending |
    Where-Object { -not (Get-ChildItem -LiteralPath $_.FullName -Force) } |
    Remove-Item -Force
$keptCount = @($all).Count - $removed.Count
if ($keptCount -eq 0) {
    Fail "白名单过滤后没有任何静态文件保留：请检查虚拟主机上的网站内容是否正常，仓库未被改动。"
}
Ok("白名单过滤：保留 $keptCount 个静态文件，剔除 $($removed.Count) 个非静态文件")

# ---------- 第 2 步：镜像同步到仓库根目录（排除仓库专属文件和后台目录） ----------
Write-Host "正在同步到仓库（排除: $($ExcludeDirs + $ExcludeFiles -join ', ')）..."
$xdArgs = $ExcludeDirs | ForEach-Object { "/XD", $_ }
$xfArgs = $ExcludeFiles | ForEach-Object { "/XF", $_ }
robocopy $MirrorDir $RepoDir /MIR @xdArgs @xfArgs /R:2 /W:2 /NFL /NDL /NP
$rc = $LASTEXITCODE
if ($rc -ge 8) { Fail("robocopy 同步失败（退出码 $rc）") }
Ok("仓库文件已更新（robocopy 退出码 $rc：0/1=有或无变化，均属正常）")

# ---------- 第 3 步：有变化才提交并推送 ----------
git -C $RepoDir add -A
git -C $RepoDir diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Ok("网站内容与 GitHub 仓库一致，无需更新。同步结束。")
    exit 0
}

$commitMsg = "$CommitPrefix $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git -C $RepoDir commit -m $commitMsg
if ($LASTEXITCODE -ne 0) { Fail("git commit 失败") }

git -C $RepoDir pull --rebase
if ($LASTEXITCODE -ne 0) { Fail("git pull --rebase 失败，请手动检查远端是否有新提交") }

git -C $RepoDir push
if ($LASTEXITCODE -ne 0) { Fail("git push 失败，请检查网络或 GitHub 凭据") }

Ok("已推送到 GitHub，Pages 会在一两分钟内自动发布：https://soft.weget.site")
Write-Host "=== 同步完成 ==="
