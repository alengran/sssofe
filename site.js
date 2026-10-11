/* 站点通用脚本：左侧软件分类导航 + 移动端侧边栏开关 */
(function () {
    // 软件分类目录（优先读取后台生成的 site-data.js；缺失时使用内置默认，保持稳定）
    var SITE_CATEGORIES = (window.SITE_CATEGORIES && window.SITE_CATEGORIES.length)
        ? window.SITE_CATEGORIES
        : ['系统工具', '办公软件', '硬件检测', '网络工具', '操作系统', '安全工具', '媒体工具'];

    // 当前站点根目录（site.js 所在目录，兼容子目录页面）
    var SITE_ROOT = (function () {
        try {
            var s = document.currentScript.src;
            return s.substring(0, s.lastIndexOf('/'));
        } catch (e) { return '.'; }
    })();

    // 顶栏默认菜单（site-data.js 缺失时兜底，与站内页面一致）
    var DEFAULT_MENU = [
        { label: '首页', url: 'index.html', hide_mobile: false },
        { label: '论坛', url: 'https://weget.site/', hide_mobile: true },
        { label: '封面生成', url: 'https://ps.weget.site/', hide_mobile: true },
        { label: '电源计算', url: 'power.html', hide_mobile: false },
        { label: '系统下载', url: 'https://win.weget.site/', hide_mobile: true },
        { label: '久伴笔记', url: 'jiuban-notes.html', hide_mobile: false },
        { label: '联系', url: 'contact.html', hide_mobile: true }
    ];

    function escAttr(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    }

    // 完整 HTML 转义（用于 innerHTML 拼接的文本/属性值）
    function escHtml(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    // 站点级 SEO 动态应用（后台 SEO 设置 → site-data.js 的 SITE_SEO）
    // 软件详情页（/soft/）与下载页（download.html）有自己的软件级 SEO，不覆盖
    function applySiteSEO() {
        try {
            var seo = window.SITE_SEO;
            if (!seo) return;
            var path = location.pathname;
            if (/\/soft\//.test(path) || /\/download\.html/.test(path)) return;
            if (seo.title) document.title = seo.title;
            function setMeta(name, content) {
                if (!content) return;
                var m = document.querySelector('meta[name="' + name + '"]');
                if (m) {
                    m.setAttribute('content', content);
                } else {
                    m = document.createElement('meta');
                    m.setAttribute('name', name);
                    m.setAttribute('content', content);
                    document.head.appendChild(m);
                }
            }
            setMeta('keywords', seo.keywords);
            setMeta('description', seo.description);
        } catch (e) { /* SEO 设置失败不影响页面功能 */ }
    }
    applySiteSEO();

    // 渲染顶栏导航菜单（数据由后台生成的 site-data.js 提供）
    function renderTopMenu() {
        var list = document.getElementById('topMenu');
        if (!list) return;
        var items = (window.NAV_MENU && window.NAV_MENU.length) ? window.NAV_MENU : DEFAULT_MENU;

        // 子目录页面自动加 ../ 前缀
        var depth = (location.pathname.match(/\//g) || []).length - 1;
        var prefix = depth > 0 ? new Array(depth + 1).join('../') : '';
        var currentFile = location.pathname.split('/').pop() || 'index.html';

        var html = items.map(function (m) {
            var external = /^https?:\/\//i.test(m.url);
            var href = external ? m.url : prefix + m.url;
            var cls = [];
            if (m.hide_mobile) cls.push('hide-mobile');
            var targetFile = external ? '' : String(m.url).split('?')[0].split('#')[0];
            if (targetFile && targetFile === currentFile) cls.push('active');
            return '<li' + (cls.length ? ' class="' + cls.join(' ') + '"' : '') + '>' +
                '<a href="' + escAttr(href) + '"' + (external ? ' target="_blank" rel="noopener"' : '') + '>' +
                escAttr(m.label) + '</a></li>';
        }).join('');
        list.innerHTML = html;
    }

    renderTopMenu();

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
            return '<li data-cat="' + escAttr(it.cat) + '"><a href="' + escAttr(it.href) + '">' + escHtml(it.label) + '</a></li>';
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
