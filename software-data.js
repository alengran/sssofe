// 从 software.md 分析生成的软件数据
// 包含软件描述和对应的网盘链接

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
        description: "Win10专业版22H2",
        icon: "🪟",
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
        description: "Win10家庭版22H2",
        icon: "🪟",
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
        description: "Win11专业版25H2",
        icon: "🪟",
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
        description: "Win11家庭版25H2",
        icon: "🪟",
        downloadLinks: {
            xunlei: {
                url: "https://pan.xunlei.com/s/VP-2ii9f05nq69AH1-6wMyeeA1?pwd=bqhj",
                code: "bqhj"
            }
        }
    }
];

// 数据分类统计
const dataStats = {
    total: softwareData.length,
    byCategory: {
        "办公软件": 1,
        "系统工具": 6,
        "硬件检测": 2,
        "安全工具": 2,
        "硬件工具": 1,
        "网络工具": 2,
        "操作系统": 4
    },
    byPlatform: {
        "baidu": 14,
        "xunlei": 4
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { softwareData, dataStats };
}