/**
 * 为每个软件生成独立的下载页面
 * 运行此脚本会在 /software 目录下生成独立的HTML文件
 */

const fs = require('fs');
const path = require('path');

// 引入软件数据
const softwareData = require('./software-data.js').softwareData;

// 读取模板文件
const templatePath = path.join(__dirname, 'download-template.html');
let template = '';
if (fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf8');
} else {
    console.error('找不到模板文件，请先创建 download-template.html');
    process.exit(1);
}

// 创建输出目录
const outputDir = path.join(__dirname, 'software');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 为每个软件生成页面
softwareData.forEach(software => {
    // 生成页面内容
    let pageContent = template
        .replace(/\{\{SOFTWARE_ID\}\}/g, software.id)
        .replace(/\{\{SOFTWARE_NAME\}\}/g, software.name)
        .replace(/\{\{SOFTWARE_CATEGORY\}\}/g, software.category)
        .replace(/\{\{SOFTWARE_DESCRIPTION\}\}/g, software.description)
        .replace(/\{\{SOFTWARE_ICON\}\}/g, software.icon || '📦');

    // 生成文件名（使用软件ID和拼音/简化的名称）
    const fileName = `${software.id}-${encodeURIComponent(software.name.replace(/[^a-zA-Z0-9一-龥]/g, ''))}.html`;
    const outputPath = path.join(outputDir, fileName);

    // 写入文件
    fs.writeFileSync(outputPath, pageContent, 'utf8');

    console.log(`已生成: ${fileName}`);
});

console.log(`\n✅ 成功生成 ${softwareData.length} 个软件下载页面！`);
console.log(`📁 页面保存在: ${outputDir}`);
console.log(`\n💡 使用说明:`);
console.log(`1. 将生成的页面部署到服务器`);
console.log(`2. 软件卡片链接改为: software/${fileName}`);
console.log(`3. 每个页面都有独特的SEO meta标签`);