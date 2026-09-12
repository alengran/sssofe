/* ============================================================
 *  常用网站导航 —— 顶栏"常用网站"下拉菜单与"网站导航"页(nav.html)共用
 *  quick: true 的站点会同时出现在顶栏下拉菜单中
 *  增删站点只改 NAV_SITES 即可，页面无需改动
 * ============================================================ */
window.NAV_SITES = [
  {
    cat: "常用工具 · 站点推荐",
    sites: [
      { name: "视频封面在线生成", url: "https://Ps.weget.site/", desc: "B站抖音等视频封面图片在线制作", badge: "推荐", quick: true },
      { name: "笔记卡片生成", url: "https://Ps.weget.site/note.html", desc: "笔记卡片在线制作生成", badge: "推荐", quick: true },
      { name: "常用软件下载", url: "https://sofe.weget.site/", desc: "小百科电脑常用软件一站下载", badge: "推荐", quick: true },
      { name: "2026 海外 VPS 推荐", url: "https://1000.vps.cd/", desc: "海外 VPS 测评与推荐", badge: "推荐", quick: true }
    ]
  },
  {
    cat: "微软官方 · Windows",
    sites: [
      { name: "Windows 11 下载", url: "https://www.microsoft.com/zh-cn/software-download/windows11", desc: "官方镜像与安装助手", badge: "官方" },
      { name: "Windows 10 下载", url: "https://www.microsoft.com/zh-cn/software-download/windows10", desc: "官方镜像与媒体创建工具", badge: "官方" },
      { name: "Microsoft 更新目录", url: "https://www.catalog.update.microsoft.com/", desc: "累积更新 / 驱动离线包", badge: "官方" },
      { name: "Microsoft 支持", url: "https://support.microsoft.com/zh-cn", desc: "官方帮助与故障排查", badge: "官方" },
      { name: "Windows 生命周期", url: "https://learn.microsoft.com/lifecycle/", desc: "产品支持周期查询", badge: "官方" }
    ]
  },
  {
    cat: "微软官方 · 办公与开发",
    sites: [
      { name: "Microsoft 365", url: "https://www.microsoft.com/zh-cn/microsoft-365", desc: "Office / 365 官方页面", badge: "官方" },
      { name: "Microsoft 账户", url: "https://account.microsoft.com/", desc: "账户、设备与密钥管理", badge: "官方" },
      { name: "Visual Studio 下载", url: "https://visualstudio.microsoft.com/zh-hans/downloads/", desc: "IDE 与生成工具", badge: "官方" },
      { name: ".NET 下载", url: "https://dotnet.microsoft.com/download", desc: ".NET 运行时与 SDK", badge: "官方" },
      { name: "Edge 浏览器", url: "https://www.microsoft.com/edge/download", desc: "官方下载", badge: "官方" }
    ]
  },
  {
    cat: "启动盘与刻录工具",
    sites: [
      { name: "Rufus", url: "https://rufus.ie/zh/", desc: "轻量 U 盘启动盘制作" },
      { name: "Ventoy", url: "https://www.ventoy.net/cn/", desc: "多系统 U 盘，拷入 ISO 即用" },
      { name: "UltraISO 软碟通", url: "https://cn.ezbsystems.com/ultraiso/", desc: "ISO 编辑与刻录" },
      { name: "7-Zip", url: "https://www.7-zip.org/", desc: "免费压缩工具，可直接解压 ISO" }
    ]
  },
  {
    cat: "硬件检测与校验",
    sites: [
      { name: "CPU-Z", url: "https://www.cpuid.com/softwares/cpu-z.html", desc: "CPU / 内存 / 主板信息" },
      { name: "CrystalDiskInfo", url: "https://crystalmark.info/", desc: "硬盘健康状态监测" },
      { name: "HashTab", url: "http://implbits.com/HashTab/", desc: "右键菜单 SHA-1 / MD5 校验" }
    ]
  },
  {
    cat: "显卡与芯片组驱动",
    sites: [
      { name: "NVIDIA 驱动", url: "https://www.nvidia.cn/Download/", desc: "GeForce / Studio 驱动", badge: "官方" },
      { name: "AMD 驱动", url: "https://www.amd.com/zh-hans/support", desc: " Radeon 显卡与芯片组", badge: "官方" },
      { name: "Intel 下载中心", url: "https://www.intel.com/content/www/cn/zh/download-center/home.html", desc: "核显 / 无线网卡驱动", badge: "官方" }
    ]
  },
  {
    cat: "社区与镜像资源",
    sites: [
      { name: "Microsoft Learn", url: "https://learn.microsoft.com/zh-cn/", desc: "官方文档与教程", badge: "官方" },
      { name: "Answers 微软社区", url: "https://answers.microsoft.com/zh-hans", desc: "官方问答社区", badge: "官方" },
      { name: "MSDN, i tell you", url: "https://next.itellyou.cn/", desc: "知名原版镜像索引站" }
    ]
  }
];

(function () {
    // 当前站点根目录（nav.js 所在目录，兼容子目录页面）
    var SITE_ROOT = (function () {
        try {
            var s = document.currentScript.src;
            return s.substring(0, s.lastIndexOf('/'));
        } catch (e) { return '.'; }
    })();

    // 渲染顶栏"常用网站"下拉菜单（页面顶栏存在 #favDD 时生效）
    function renderQuickMenu() {
        var dd = document.getElementById('favDD');
        if (!dd) return;
        var panel = dd.querySelector('.dd-panel');
        if (!panel) return;
        var quick = [];
        (window.NAV_SITES || []).forEach(function (c) {
            c.sites.forEach(function (s) { if (s.quick) quick.push(s); });
        });
        var html = quick.map(function (s) {
            return '<a class="dd-item" href="' + s.url + '" target="_blank" rel="noopener">' +
                '<b>' + s.name + (s.badge ? ' <i class="dd-badge">' + s.badge + '</i>' : '') + '</b>' +
                '<span>' + s.desc + '</span></a>';
        }).join('');
        html += '<a class="dd-item dd-more" href="' + SITE_ROOT + '/nav.html">进入网站导航页 →</a>';
        panel.innerHTML = html;
    }

    // 渲染"网站导航"页分类卡片（nav.html 存在 #navGrid 时生效）
    function renderNavPage() {
        var grid = document.getElementById('navGrid');
        if (!grid) return;
        (window.NAV_SITES || []).forEach(function (cat) {
            var cards = cat.sites.map(function (s) {
                return '<a class="link-card" href="' + s.url + '" target="_blank" rel="noopener">' +
                    '<div class="lc-name">' + s.name + (s.badge ? ' <i class="dd-badge">' + s.badge + '</i>' : '') + '</div>' +
                    '<div class="lc-desc">' + s.desc + '</div>' +
                    '<div class="lc-url">' + String(s.url).replace(/^https?:\/\//, '').replace(/\/$/, '') + '</div></a>';
            }).join('');
            var sec = document.createElement('div');
            sec.className = 'link-cat';
            sec.innerHTML = '<div class="title"><h1>' + cat.cat + '</h1></div><div class="link-grid">' + cards + '</div>';
            grid.appendChild(sec);
        });
    }

    // 下拉菜单交互：点击开关，点击外部或 Esc 收起
    function bindDropdown() {
        var dd = document.getElementById('favDD');
        if (!dd) return;
        var toggle = document.getElementById('ddToggle');
        document.addEventListener('click', function (e) {
            if (toggle && toggle.contains(e.target)) {
                e.preventDefault();
                dd.classList.toggle('open');
            } else if (!dd.contains(e.target)) {
                dd.classList.remove('open');
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') dd.classList.remove('open');
        });
    }

    renderQuickMenu();
    renderNavPage();
    bindDropdown();
})();
