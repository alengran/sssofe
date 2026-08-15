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
        id: "generated_001",
        name: "久伴笔记",
        category: "办公软件",
        description: "免费绿色Markdown笔记软件",
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
        id: "generated_002",
        name: "微软运行库合集",
        category: "系统工具",
        description: "必备运行环境组件集合",
        icon: "🔧",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1NNdXNKCXXQqAokAiI0EZ6w?pwd=rgq9",
                code: "rgq9"
            }
        }
    },

    {
        id: "generated_003",
        name: "DirectX修复工具",
        category: "系统工具",
        description: "DirectX组件修复工具",
        icon: "🔧",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1909j4XGRRA8uH7pumA1XAg?pwd=d1qw",
                code: "d1qw"
            }
        }
    },

    {
        id: "generated_004",
        name: "Geek卸载工具",
        category: "系统工具",
        description: "强力软件卸载清理工具",
        icon: "🗑️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/12MK4QFwC7c_AVulwygjZKw?pwd=undb",
                code: "undb"
            }
        }
    },

    {
        id: "generated_005",
        name: "微PE工具箱",
        category: "系统工具",
        description: "Windows系统维护工具箱",
        icon: "🛠️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/127MaK2PUajq9f_7nToFUbQ?pwd=skuq",
                code: "skuq"
            }
        }
    },

    {
        id: "generated_006",
        name: "Win10更新禁用工具",
        category: "系统工具",
        description: "禁用Windows10系统更新",
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
        id: "generated_007",
        name: "CrystalDiskInfo",
        category: "硬件检测",
        description: "硬盘健康状态检测工具",
        icon: "💾",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1JNAnGlCChS6RENlssEyCrQ?pwd=3qnm",
                code: "3qnm"
            }
        }
    },

    {
        id: "generated_008",
        name: "AS SSD Benchmark",
        category: "硬件检测",
        description: "SSD性能测试工具",
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
        id: "generated_009",
        name: "麦克菲卸载工具",
        category: "安全工具",
        description: "彻底卸载杀毒软件工具",
        icon: "🛡️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1YmOcOaey-Uwp0dkWT4H0Nw?pwd=mq58",
                code: "mq58"
            }
        }
    },

    // 备用链接 - 麦克菲卸载工具版本2
    {
        id: "generated_009b",
        name: "麦克菲卸载工具V2",
        category: "安全工具",
        description: "麦克菲卸载工具备用版本",
        icon: "🛡️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1OmG6h1mFYDueS1sGSM0rJQ?pwd=14sw",
                code: "14sw"
            }
        }
    },

    // 显卡工具
    {
        id: "generated_010",
        name: "MSI Afterburner",
        category: "硬件工具",
        description: "显卡超频监控软件",
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
        id: "generated_011",
        name: "NDM下载器",
        category: "网络工具",
        description: "高速网络下载工具",
        icon: "📥",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1Jpi-uXxUHAXJi4-W6aXAHQ?pwd=7yp7",
                code: "7yp7"
            }
        }
    },

    {
        id: "generated_012",
        name: "NeatDM下载器",
        category: "网络工具",
        description: "简洁高效下载管理器",
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
        id: "generated_013",
        name: "WizTree",
        category: "系统工具",
        description: "快速磁盘空间分析工具",
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
        id: "generated_014",
        name: "Windows 10 专业版",
        category: "操作系统",
        description: "Win10专业版22H2，适合办公和开发环境",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2hhhQ4mQzlkk3Eir0FpDrA1?pwd=jg5d",
                code: "jg5d"
            }
        }
    },

    {
        id: "generated_015",
        name: "Windows 10 家庭版",
        category: "操作系统",
        description: "Win10家庭版22H2，适合日常使用",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2i2gP7IbH_A4mtQTqysSNA1?pwd=h5sc",
                code: "h5sc"
            }
        }
    },

    {
        id: "generated_016",
        name: "Windows 11 专业版",
        category: "操作系统",
        description: "Win11专业版25H2，最新专业系统",
        icon: "💻",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2iWAHAqjXAzkP2dEz0tJxA1?pwd=6qyy",
                code: "6qyy"
            }
        }
    },

    {
        id: "generated_017",
        name: "Windows 11 家庭版",
        category: "操作系统",
        description: "Win11家庭版25H2，最新家庭系统",
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
        id: "generated_018",
        name: "Intel RST VMD驱动",
        category: "系统工具",
        description: "一键安装注入Intel RST VMD快速存储驱动",
        icon: "⚙️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1Qs0Onh8F3CSZejnLlhZv7w?pwd=4nuh",
                code: "4nuh"
            }
        }
    },

    {
        id: "generated_019",
        name: "向日葵远程控制",
        category: "网络工具",
        description: "远程控制软件，支持多平台远程访问",
        icon: "🌐",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1ji63jQ2jc8CYW-jivMbapg?pwd=zvfi",
                code: "zvfi"
            }
        }
    },

    {
        id: "generated_020",
        name: "驱动总裁",
        category: "系统工具",
        description: "硬件驱动安装和更新工具",
        icon: "🔧",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/199L3zLP5yNtV6KVwICJ4Yw?pwd=ga5k",
                code: "ga5k"
            }
        }
    },

    {
        id: "generated_021",
        name: "Windows系统安装工具",
        category: "系统工具",
        description: "微软官方Windows系统安装媒体创建工具",
        icon: "🛠️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/142tRqVork7Q2nJOW7eKShg?pwd=cdmc",
                code: "cdmc"
            }
        }
    },

    {
        id: "generated_022",
        name: "Geek卸载工具新版",
        category: "系统工具",
        description: "强力软件卸载清理工具，新版本",
        icon: "🗑️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1L9Fnc_QbSNroqr5DMdxS9Q?pwd=91ji",
                code: "91ji"
            }
        }
    },

    {
        id: "generated_023",
        name: "DiskGenius分区工具",
        category: "系统工具",
        description: "专业磁盘分区管理和数据恢复工具",
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
        id: "generated_024",
        name: "FirPE工具箱",
        category: "系统工具",
        description: "FirPE-V2.1.1，专业Windows PE维护工具箱",
        icon: "🛠️",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/18arfIJw3bsjfnRzwwJBmeQ?pwd=j4du",
                code: "j4du"
            }
        }
    },

    {
        id: "generated_025",
        name: "极客狗装机大师",
        category: "系统工具",
        description: "一键装机软件，支持多种系统安装",
        icon: "💿",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1ER6sZxoZajztHQN0zbEE0A?pwd=p7qp",
                code: "p7qp"
            }
        }
    },

    {
        id: "generated_026",
        name: "MemTest64内存检测",
        category: "硬件检测",
        description: "专业内存条检测软件，检测内存故障",
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
        id: "generated_027",
        name: "Watt Toolkit Steam++",
        category: "网络工具",
        description: "Steam平台加速工具，支持Steam、Epic等游戏平台",
        icon: "🎮",
        downloadLinks: {
            baidu: {
                url: "https://pan.baidu.com/s/1--Ot8a1jQvYUiHA--4p8nA?pwd=8c11",
                code: "8c11"
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
        "硬件检测": 3,
        "安全工具": 2,
        "硬件工具": 1,
        "网络工具": 4,
        "操作系统": 4
    },
    byPlatform: {
        "baidu": 23,
        "xunlei": 4
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
    }

    // 异步加载数据（带缓存）
    async loadData() {
        // 检查缓存
        const cached = this.getCachedData();
        if (cached) {
            console.log('使用缓存数据');
            return cached;
        }

        // 直接返回数据，移除不必要的延迟
        const data = softwareData;
        this.setCachedData(data);
        return Promise.resolve(data);
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