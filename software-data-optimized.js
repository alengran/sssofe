// 软件数据文件 - 优化版本
// 支持分页加载和懒加载

// 模拟数据（实际使用时替换为真实数据）
const softwareData = [
    {
        id: "1",
        name: "Google Chrome",
        category: "浏览器",
        description: "极速、稳定、安全，占据全球主导地位的现代浏览器，开发者工具强大。",
        icon: "🌐",
        downloadLinks: {
            baidu: { url: "https://pan.baidu.com/s/123xyz", code: "abcd" },
            aliyun: { url: "https://www.aliyundrive.com/s/xyz", code: "" }
        }
    },
    {
        id: "2",
        name: "Mozilla Firefox",
        category: "浏览器",
        description: "开源隐私浏览器，定制性强，追踪保护功能出色。",
        icon: "🦊",
        officialUrl: "https://www.mozilla.org/firefox/",
        downloadLinks: {
            lanzou: { url: "https://www.lanzou.com/xyz", code: "" }
        }
    },
    {
        id: "3",
        name: "LibreOffice",
        category: "办公软件",
        description: "完全免费开源的办公套件，兼容MS Office格式，包含Writer, Calc等。",
        icon: "📝",
        officialUrl: "https://www.libreoffice.org/download/",
        downloadLinks: {
            quark: { url: "https://pan.quark.cn/s/xyz", code: "1234" }
        }
    },
    {
        id: "4",
        name: "WPS Office",
        category: "办公软件",
        description: "国民级办公软件，轻巧高效，支持云端协作。",
        icon: "📄",
        officialUrl: "https://www.wps.cn/",
        downloadLinks: {}
    },
    {
        id: "5",
        name: "Visual Studio Code",
        category: "开发工具",
        description: "微软出品，轻量但功能强大的代码编辑器，海量插件。",
        icon: "💻",
        officialUrl: "https://code.visualstudio.com/",
        downloadLinks: {
            baidu: { url: "https://pan.baidu.com/s/vscode", code: "vscode" },
            aliyun: { url: "https://www.aliyundrive.com/s/vscode", code: "" }
        }
    },
    {
        id: "6",
        name: "Git",
        category: "开发工具",
        description: "分布式版本控制系统，协作开发必备。",
        icon: "🔧",
        officialUrl: "https://git-scm.com/downloads",
        downloadLinks: {}
    },
    {
        id: "7",
        name: "VLC Media Player",
        category: "媒体播放",
        description: "万能播放器，支持一切音视频格式，开源免费。",
        icon: "🎵",
        officialUrl: "https://www.videolan.org/vlc/",
        downloadLinks: {}
    },
    {
        id: "8",
        name: "7-Zip",
        category: "实用工具",
        description: "高压缩比的文件压缩工具，支持多种压缩格式，免费开源。",
        icon: "📦",
        officialUrl: "https://www.7-zip.org/",
        downloadLinks: {
            baidu: { url: "https://pan.baidu.com/s/7zip", code: "7zip" }
        }
    },
    {
        id: "9",
        name: "Notepad++",
        category: "开发工具",
        description: "轻量级文本编辑器，支持语法高亮，适合编程和日常文本编辑。",
        icon: "📝",
        officialUrl: "https://notepad-plus-plus.org/",
        downloadLinks: {
            lanzou: { url: "https://www.lanzou.com/notepad", code: "npp" }
        }
    },
    {
        id: "10",
        name: "OBS Studio",
        category: "媒体播放",
        description: "免费开源的视频录制和直播软件，功能强大，支持多平台。",
        icon: "🎬",
        officialUrl: "https://obsproject.com/",
        downloadLinks: {}
    },
    {
        id: "1786585872040",
        name: "久伴笔记",
        category: "办公软件",
        description: "一款完全免费绿色的 本地Markdown笔记软件",
        icon: "📦",
        downloadLinks: {
            baidu: { url: "https://pan.baidu.com/s/1sCtktzWBPsyzo82IFP5_Ag?pwd=stef", code: "stef" }
        }
    }
];

// 数据加载优化类
class SoftwareDataManager {
    constructor() {
        this.cacheKey = 'software_data_cache';
        this.cacheExpiry = 24 * 60 * 60 * 1000; // 24小时缓存
        this.pageSize = 20; // 每页显示数量
        this.currentPage = 1;
        this.loadedData = [];
        this.isLoading = false;
    }

    // 异步加载数据（带缓存）
    async loadData() {
        // 检查缓存
        const cached = this.getCachedData();
        if (cached) {
            console.log('使用缓存数据');
            return cached;
        }

        // 模拟异步加载（实际项目中替换为API调用）
        return new Promise((resolve) => {
            setTimeout(() => {
                // 这里直接使用本地的softwareData
                // 实际项目中可能从API获取: fetch('/api/software')
                const data = softwareData;

                // 缓存数据
                this.setCachedData(data);
                resolve(data);
            }, 100); // 模拟网络延迟
        });
    }

    // 分页加载数据
    async loadPage(page = 1, pageSize = this.pageSize) {
        if (this.isLoading) return [];

        this.isLoading = true;

        try {
            const allData = await this.loadData();
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const pageData = allData.slice(start, end);

            this.currentPage = page;
            return {
                data: pageData,
                total: allData.length,
                hasMore: end < allData.length,
                currentPage: page
            };
        } finally {
            this.isLoading = false;
        }
    }

    // 获取缓存数据
    getCachedData() {
        try {
            const cached = localStorage.getItem(this.cacheKey);
            if (!cached) return null;

            const { data, timestamp } = JSON.parse(cached);
            const isExpired = Date.now() - timestamp > this.cacheExpiry;

            if (isExpired) {
                localStorage.removeItem(this.cacheKey);
                return null;
            }

            return data;
        } catch (error) {
            console.error('读取缓存失败:', error);
            return null;
        }
    }

    // 设置缓存数据
    setCachedData(data) {
        try {
            const cacheData = {
                data: data,
                timestamp: Date.now()
            };
            localStorage.setItem(this.cacheKey, JSON.stringify(cacheData));
        } catch (error) {
            console.error('缓存数据失败:', error);
        }
    }

    // 清除缓存
    clearCache() {
        localStorage.removeItem(this.cacheKey);
    }

    // 搜索功能
    async search(query) {
        const allData = await this.loadData();
        const term = query.toLowerCase();

        return allData.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
    }

    // 按分类获取数据
    async getByCategory(category) {
        const allData = await this.loadData();
        if (category === '全部') return allData;
        return allData.filter(item => item.category === category);
    }

    // 获取所有分类
    async getCategories() {
        const allData = await this.loadData();
        const categories = new Set(allData.map(item => item.category));
        return ['全部', ...Array.from(categories)];
    }
}

// 导出数据管理器实例
const dataManager = new SoftwareDataManager();