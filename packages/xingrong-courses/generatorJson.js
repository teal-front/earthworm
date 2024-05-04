const { log } = require('console');
const path = require('node:path');
const fs = require('node:fs');

// 输入的文本
const text = `
A Current Account 
经常账户
A Current Account suits business owners and those with frequent transactions
经常账户适合企业主和交易频繁的人士
offering unlimited transactions
提供无限交易
and an overdraft facility for flexibility
以及灵活的透支机制
Conversely
相反地
a Savings Account caters to personal savings
储蓄账户是为个人储蓄服务的
with interest on your balance
余额上还有利息
though limited transactions encourage consistent saving
虽然有限的交易鼓励持续的储蓄
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
const targetPath = path.resolve(__dirname, './data/courses/08.json');
fs.writeFileSync(targetPath, json_data);