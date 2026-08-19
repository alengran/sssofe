/**
 * 软件数据统一管理文件
 * 数据来源：software.md
 * 最后更新：2026-08-15
 *
 * 包含软件信息和对应的网盘下载链接
 * 支持数据导出、缓存管理、分页加载等功能
 */

// 主数据数组
const softwareData = [
    // 笔记软件
    {
        id: 1,
        name: "久伴笔记",
        category: "办公软件",
        description: "免费绿色Markdown笔记软件，支持富文本编辑和云同步",
        icon: "📝",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1N2h3UR7-jZkIyKtlogBMcw?pwd=7h5x",
                code: "7h5x"
            }
        }
    },

    // 系统工具
    {
        id: 2,
        name: "微软运行库合集",
        category: "系统工具",
        description: "包含VC++、.NET等Windows系统必备运行库组件集合",
        icon: "🔧",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1NNdXNKCXXQqAokAiI0EZ6w?pwd=rgq9",
                code: "rgq9"
            }
        }
    },

    {
        id: 3,
        name: "DirectX修复工具",
        category: "系统工具",
        description: "修复DirectX组件，解决游戏和程序运行报错问题",
        icon: "🔧",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1909j4XGRRA8uH7pumA1XAg?pwd=d1qw",
                code: "d1qw"
            }
        }
    },

    {
        id: 4,
        name: "Geek卸载工具",
        category: "系统工具",
        description: "轻量级软件卸载工具，彻底清理注册表和残留文件",
        icon: "🗑️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/12MK4QFwC7c_AVulwygjZKw?pwd=undb",
                code: "undb"
            }
        }
    },

    {
        id: 5,
        name: "微PE工具箱",
        category: "系统工具",
        description: "Windows PE系统维护工具箱，支持分区引导修复",
        icon: "🛠️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/127MaK2PUajq9f_7nToFUbQ?pwd=skuq",
                code: "skuq"
            }
        }
    },

    {
        id: 6,
        name: "Win10更新禁用工具",
        category: "系统工具",
        description: "Windows10系统更新禁用工具，阻止自动更新重启",
        icon: "🚫",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1I4b8ezHGwWq8nNnL-8m_sA?pwd=fy73",
                code: "fy73"
            }
        }
    },

    // 硬件检测
    {
        id: 7,
        name: "CrystalDiskInfo",
        category: "硬件检测",
        description: "硬盘健康检测工具，监控温度和SMART信息",
        icon: "💾",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1JNAnGlCChS6RENlssEyCrQ?pwd=3qnm",
                code: "3qnm"
            }
        }
    },

    {
        id: 8,
        name: "AS SSD Benchmark",
        category: "硬件检测",
        description: "SSD固态硬盘性能测试工具，检测读写速度",
        icon: "⚡",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1HANHcT4r_GfdWtUtYJdwJg?pwd=h7ew",
                code: "h7ew"
            }
        }
    },

    // 安全工具
    {
        id: 9,
        name: "麦克菲卸载工具",
        category: "安全工具",
        description: "麦克菲杀毒软件专用卸载工具，彻底清除残留",
        icon: "🛡️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1YmOcOaey-Uwp0dkWT4H0Nw?pwd=mq58",
                code: "mq58"
            }
        }
    },

    // 备用链接 - 麦克菲卸载工具版本2（已删除，使用主版本即可）

    // 显卡工具
    {
        id: 10,
        name: "MSI Afterburner",
        category: "硬件工具",
        description: "显卡超频监控工具，支持温度频率和风扇调节",
        icon: "🎮",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1PCwp1x48Z_OO38NpJSqMiA?pwd=455z",
                code: "455z"
            }
        }
    },

    // 下载工具
    {
        id: 11,
        name: "NDM下载器",
        category: "网络工具",
        description: "轻量级网络下载管理器，支持多线程加速下载",
        icon: "📥",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1Jpi-uXxUHAXJi4-W6aXAHQ?pwd=7yp7",
                code: "7yp7"
            }
        }
    },

    {
        id: 12,
        name: "NeatDM下载器",
        category: "网络工具",
        description: "简洁高效的网络下载管理器，支持多线程和断点续传",
        icon: "📥",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1nVwyvp3T_Wu3zJ-qf9PX1A?pwd=c3tn",
                code: "c3tn"
            }
        }
    },

    // 磁盘工具
    {
        id: 13,
        name: "WizTree",
        category: "系统工具",
        description: "磁盘空间分析工具，快速找出大文件和占用空间",
        icon: "📊",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1g6JJhYQZSFjnXm-6rDjZAQ?pwd=6x84",
                code: "6x84"
            }
        }
    },

    // 操作系统
    {
        id: 14,
        name: "Windows 10 专业版",
        category: "操作系统",
        description: "Windows10专业版22H2，企业级办公开发系统",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2hhhQ4mQzlkk3Eir0FpDrA1?pwd=jg5d",
                code: "jg5d"
            }
        }
    },

    {
        id: 15,
        name: "Windows 10 家庭版",
        category: "操作系统",
        description: "Windows10家庭版22H2，适合个人日常使用",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2i2gP7IbH_A4mtQTqysSNA1?pwd=h5sc",
                code: "h5sc"
            }
        }
    },

    {
        id: 16,
        name: "Windows 11 专业版",
        category: "操作系统",
        description: "Windows11专业版25H2，最新企业级办公系统",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2iWAHAqjXAzkP2dEz0tJxA1?pwd=6qyy",
                code: "6qyy"
            }
        }
    },

    {
        id: 17,
        name: "Windows 11 家庭版",
        category: "操作系统",
        description: "Windows11家庭版25H2，最新个人用户系统",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2ii9f05nq69AH1-6wMyeeA1?pwd=bqhj",
                code: "bqhj"
            }
        }
    },

    // 新增软件
    {
        id: 18,
        name: "Intel RST VMD驱动",
        category: "系统工具",
        description: "Intel快速存储技术驱动，支持VMD控制器",
        icon: "⚙️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1Qs0Onh8F3CSZejnLlhZv7w?pwd=4nuh",
                code: "4nuh"
            }
        }
    },

    {
        id: 19,
        name: "向日葵远程控制",
        category: "网络工具",
        description: "远程桌面控制软件，支持文件传输和屏幕共享",
        icon: "🌐",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1ji63jQ2jc8CYW-jivMbapg?pwd=zvfi",
                code: "zvfi"
            }
        }
    },

    {
        id: 20,
        name: "驱动总裁",
        category: "系统工具",
        description: "硬件驱动安装工具，自动检测安装更新驱动",
        icon: "🔧",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/199L3zLP5yNtV6KVwICJ4Yw?pwd=ga5k",
                code: "ga5k"
            }
        }
    },

    {
        id: 21,
        name: "Windows系统安装工具",
        category: "系统工具",
        description: "微软官方Windows系统安装/重装媒体创建工具",
        icon: "🛠️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/142tRqVork7Q2nJOW7eKShg?pwd=cdmc",
                code: "cdmc"
            }
        }
    },

    {
        id: 22,
        name: "Geek卸载工具新版",
        category: "系统工具",
        description: "轻量级软件卸载工具，彻底清理注册表和残留文件",
        icon: "🗑️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1L9Fnc_QbSNroqr5DMdxS9Q?pwd=91ji",
                code: "91ji"
            }
        }
    },

    {
        id: 23,
        name: "DiskGenius分区工具",
        category: "系统工具",
        description: "专业磁盘分区管理工具，支持数据恢复和备份",
        icon: "💾",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1KV8oFJJ2nA2LFDkrMNEMlw?pwd=78i6",
                code: "78i6"
            }
        }
    },

    // 最新补充软件
    {
        id: 24,
        name: "FirPE工具箱",
        category: "系统工具",
        description: "Windows PE系统维护工具箱，支持分区引导修复",
        icon: "🛠️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/18arfIJw3bsjfnRzwwJBmeQ?pwd=j4du",
                code: "j4du"
            }
        }
    },

    {
        id: 25,
        name: "极客狗装机大师",
        category: "系统工具",
        description: "一键系统装机工具，自动安装驱动和常用软件",
        icon: "💿",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1ER6sZxoZajztHQN0zbEE0A?pwd=p7qp",
                code: "p7qp"
            }
        }
    },

    {
        id: 26,
        name: "MemTest64内存检测",
        category: "硬件检测",
        description: "内存条故障检测工具，测试内存稳定性和错误",
        icon: "🔬",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1Iv88Zm1P0zEQvhXieozpWQ?pwd=9ihp",
                code: "9ihp"
            }
        }
    },

    // 最后一款补充软件
    {
        id: 27,
        name: "Watt Toolkit Steam++",
        category: "网络工具",
        description: "Steam平台加速工具，解决下载和联机游戏问题",
        icon: "🎮",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1--Ot8a1jQvYUiHA--4p8nA?pwd=8c11",
                code: "8c11"
            }
        }
    },

    // 硬件检测工具
    {
        id: 28,
        name: "图吧工具箱",
        category: "硬件检测",
        description: "专业电脑硬件检测工具箱，集成多种硬件信息查看",
        icon: "🔬",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1NC3_OAUe307UAUx-4z5nPA?pwd=qcz2",
                code: "qcz2"
            }
        }
    },

    // 操作系统
    {
        id: 29,
        name: "Windows 7 专业版",
        category: "操作系统",
        description: "经典Windows7专业版系统镜像，稳定可靠的企业系统",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-4qB_CWZXgKNS2qNL8PcDJA1?pwd=397x",
                code: "397x"
            }
        }
    },

    // 系统启动管理
    {
        id: 30,
        name: "Autoruns",
        category: "系统工具",
        description: "系统启动项管理工具，查看和禁用自动启动程序",
        icon: "🚀",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1iAgFiVla5-LBvUh0K-lXtw?pwd=ny7e",
                code: "ny7e"
            }
        }
    }
];

// 数据分类统计
const dataStats = {
    total: softwareData.length,
    byCategory: {
        "办公软件": 1,
        "系统工具": 13,
        "硬件检测": 4,
        "安全工具": 1,
        "硬件工具": 1,
        "网络工具": 4,
        "操作系统": 5
    },
    byPlatform: {
        "baidu": 24,
        "xunlei": 5
    }
};

/**
 * 软件数据管理器类
 * 提供数据加载、缓存、分页、搜索等功能
 */
class SoftwareDataManager {
    constructor() {
        this.cacheKey = 'software_data_cache';
        this.cacheExpiry = 24 * 60 * 60 * 1000; // 24小时缓存
        this.pageSize = 20; // 每页显示数量
        this.currentPage = 1;
        this.loadedData = [];
        this.isLoading = false;
        this.processedData = null; // 内存级缓存
    }

    // 异步加载数据（带缓存）
    // 快速加载数据，优化性能
    async loadData() {
        // 检查内存缓存
        if (this.processedData) {
            return this.processedData;
        }

        // 检查localStorage缓存
        const cached = this.getCachedData();
        if (cached) {
            this.processedData = cached;
            return cached;
        }

        // 处理数据
        const data = softwareData.map(item => ({
            ...item,
            index: item.id
        }));

        // 内存缓存
        this.processedData = data;

        // 同步缓存到localStorage
        this.setCachedData(data);

        return data;
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
        const term = query.toLowerCase().trim();

        return allData.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term) ||
            item.id.toString() === term
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

// 创建数据管理器实例
const dataManager = new SoftwareDataManager();

// 导出数据和工具（支持多种模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        softwareData,
        dataStats,
        SoftwareDataManager,
        dataManager
    };
}

// 浏览器环境支持
if (typeof window !== 'undefined') {
    // 直接暴露到全局作用域，方便HTML页面使用
    window.softwareData = softwareData;
    window.dataStats = dataStats;
    window.dataManager = dataManager;
    window.SoftwareDataManager = SoftwareDataManager;

    // 同时也放在命名空间下
    window.SoftwareData = {
        data: softwareData,
        stats: dataStats,
        manager: dataManager,
        Manager: SoftwareDataManager
    };
}