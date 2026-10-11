// 性能监控工具
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            pageLoad: 0,
            dataLoad: 0,
            renderTime: 0,
            totalMemory: 0,
            cacheHit: false
        };
        this.startTime = performance.now();
    }

    // 开始监控
    start() {
        this.startTime = performance.now();
        console.log('🚀 性能监控开始...');
    }

    // 记录数据加载时间
    recordDataLoad(duration, cacheHit) {
        this.metrics.dataLoad = duration;
        this.metrics.cacheHit = cacheHit;
        console.log(`📊 数据加载: ${duration.toFixed(2)}ms ${cacheHit ? '(缓存命中)' : '(首次加载)'}`);
    }

    // 记录渲染时间
    recordRenderTime(duration) {
        this.metrics.renderTime = duration;
        console.log(`🎨 页面渲染: ${duration.toFixed(2)}ms`);
    }

    // 完成监控
    complete() {
        this.metrics.pageLoad = performance.now() - this.startTime;

        // 获取内存信息（如果支持）
        if (performance.memory) {
            this.metrics.totalMemory = performance.memory.usedJSHeapSize / 1024 / 1024;
        }

        this.showReport();
    }

    // 显示性能报告
    showReport() {
        console.log('📈 性能监控报告:');
        console.log('='.repeat(30));

        const report = {
            '页面总加载时间': `${this.metrics.pageLoad.toFixed(2)}ms`,
            '数据加载时间': `${this.metrics.dataLoad.toFixed(2)}ms ${this.metrics.cacheHit ? '✅缓存命中' : '⏱️首次加载'}`,
            '页面渲染时间': `${this.metrics.renderTime.toFixed(2)}ms`,
            '内存使用': this.metrics.totalMemory ? `${this.metrics.totalMemory.toFixed(2)}MB` : '不支持检测',
            '性能评分': this.getPerformanceScore()
        };

        Object.entries(report).forEach(([key, value]) => {
            console.log(`${key.padEnd(20)}: ${value}`);
        });

        console.log('='.repeat(30));

        // 在页面上显示性能信息（开发模式）
        this.showPageStats();
    }

    // 获取性能评分
    getPerformanceScore() {
        const score = 100 - (this.metrics.pageLoad / 100); // 简单算法
        return Math.max(0, Math.min(100, score)).toFixed(0) + '分';
    }

    // 在页面上显示统计信息
    showPageStats() {
        // 创建性能指示器
        const perfIndicator = document.createElement('div');
        perfIndicator.id = 'perf-indicator';
        perfIndicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: #00ff00;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 12px;
            font-family: monospace;
            z-index: 10000;
            border: 1px solid rgba(0, 255, 0, 0.3);
            cursor: pointer;
            transition: all 0.3s;
        `;
        perfIndicator.innerHTML = `
            <div>⚡ ${this.metrics.pageLoad.toFixed(0)}ms</div>
            <div style="font-size: 10px; color: #86868b;">${this.metrics.cacheHit ? '缓存' : '首次'}</div>
        `;

        // 点击展开详细信息
        perfIndicator.onclick = () => this.toggleDetailedStats();

        document.body.appendChild(perfIndicator);

        // 5秒后自动隐藏
        setTimeout(() => {
            perfIndicator.style.opacity = '0.7';
            perfIndicator.style.transform = 'translateY(10px)';
        }, 5000);
    }

    // 切换详细统计信息
    toggleDetailedStats() {
        let detailStats = document.getElementById('detail-stats');
        if (detailStats) {
            detailStats.remove();
            return;
        }

        detailStats = document.createElement('div');
        detailStats.id = 'detail-stats';
        detailStats.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: rgba(0, 0, 0, 0.95);
            color: #d1d1d6;
            padding: 20px;
            border-radius: 12px;
            font-size: 13px;
            font-family: monospace;
            z-index: 10000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            min-width: 280px;
            backdrop-filter: blur(20px);
        `;

        detailStats.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 15px; color: #ffffff;">📊 性能详情</div>
            <div style="line-height: 1.8;">
                <div>页面加载: <span style="color: #00ff00;">${this.metrics.pageLoad.toFixed(2)}ms</span></div>
                <div>数据加载: <span style="color: #00ff00;">${this.metrics.dataLoad.toFixed(2)}ms</span> ${this.metrics.cacheHit ? '✅' : '⏱️'}</div>
                <div>页面渲染: <span style="color: #00ff00;">${this.metrics.renderTime.toFixed(2)}ms</span></div>
                <div>内存使用: <span style="color: #00ff00;">${this.metrics.totalMemory.toFixed(2)}MB</span></div>
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <strong>评分: ${this.getPerformanceScore()}</strong>
                </div>
                <div style="font-size: 11px; color: #86868b; margin-top: 8px;">点击任意处关闭</div>
            </div>
        `;

        document.body.appendChild(detailStats);

        // 点击关闭
        setTimeout(() => {
            document.addEventListener('click', function closeStats(e) {
                if (!detailStats.contains(e.target)) {
                    detailStats.remove();
                    document.removeEventListener('click', closeStats);
                }
            });
        }, 100);
    }
}

// 性能优化建议
class PerformanceOptimizer {
    static getRecommendations() {
        return {
            data: '建议使用异步加载+缓存机制',
            render: '建议实现虚拟滚动或分页',
            images: '建议图片懒加载和压缩',
            cache: '建议使用 localStorage 缓存数据',
            network: '建议使用 CDN 加速静态资源'
        };
    }

    static showOptimizationTips() {
        console.log('🔧 性能优化建议:');
        const tips = this.getRecommendations();
        Object.entries(tips).forEach(([category, tip]) => {
            console.log(`${category.padEnd(10)}: ${tip}`);
        });
    }
}

// 导出监控工具
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PerformanceMonitor, PerformanceOptimizer };
}