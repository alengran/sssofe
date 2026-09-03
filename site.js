/* 站点通用脚本：左侧软件分类导航 + 移动端侧边栏开关 */
(function () {
    // 软件分类目录（与 software-data.js 中的分类保持一致）
    var SITE_CATEGORIES = ['系统工具', '办公软件', '硬件检测', '网络工具', '操作系统', '安全工具', '媒体工具'];

    // 当前站点根目录（site.js 所在目录，兼容子目录页面）
    var SITE_ROOT = (function () {
        try {
            var s = document.currentScript.src;
            return s.substring(0, s.lastIndexOf('/'));
        } catch (e) { return '.'; }
    })();

    // 渲染左侧分类导航
    var holder = document.getElementById('sideCats');
    if (holder) {
        var items = [{ cat: '全部', label: '全部软件', href: SITE_ROOT + '/index.html' }];
        SITE_CATEGORIES.forEach(function (c) {
            items.push({
                cat: c,
                label: c,
                href: SITE_ROOT + '/index.html?cat=' + encodeURIComponent(c)
            });
        });
        holder.innerHTML = items.map(function (it) {
            return '<li data-cat="' + it.cat + '"><a href="' + it.href + '">' + it.label + '</a></li>';
        }).join('');
    }

    // 移动端侧边栏开关
    var btn = document.querySelector('.menu-btn');
    var side = document.querySelector('.side');
    if (!btn || !side) return;

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        side.classList.toggle('open');
    });

    // 点击侧栏链接后自动收起
    side.addEventListener('click', function (e) {
        if (e.target.closest('a')) side.classList.remove('open');
    });

    // 点击遮罩区域收起
    document.addEventListener('click', function (e) {
        if (side.classList.contains('open') && !side.contains(e.target) && e.target !== btn) {
            side.classList.remove('open');
        }
    });
})();
