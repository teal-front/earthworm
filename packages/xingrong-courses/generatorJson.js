const { log } = require('console');
const path = require('node:path');
const fs = require('node:fs');

// 输入的文本
const text = `
`;

// 将文本转换为行的数组
const lines = text.trim().split('\n');

// 创建一个空数组来存储对象
const data = [];

// 遍历行的数组，每次取两行
for (let i = 0; i < lines.length; i += 2) {
    // 创建一个对象，其中 chinese 是第 i+1 行，english 是第 i 行，soundmark 是空字符串
    const item = {
        chinese: lines[i + 1],
        english: lines[i + 0],
        soundmark: ""
    };
    // 将对象添加到数组中
    data.push(item);
}

// 将数组转换为 JSON 格式
const json_data = JSON.stringify(data, null, 4);

// 写入 JSON 数据到文件
const targetPath = path.resolve(__dirname, './data/courses/19.json');
fs.writeFileSync(targetPath, json_data);