const { log } = require('console');
const path = require('node:path');
const fs = require('node:fs');

// 输入的文本
const text = `
distribute
分发、分配
the company's resources have benn unevenly distributed
该公司的资源分配得并不平均
glamor
魅力
this beautiful blonde girl has so much style and glamor
这个金发美女很有风格，魅力十足
revelation
揭露
the revelation that he stole from his company was exposed
他盗窃公司财物的事情被揭露了
fan
风扇
income
收入
liveihood
生活、生计
this family's liveihood depends on the produce from the farm
这个家庭靠农场的农产品为生
default
默认、违约
i used the default profile photo for a long time
我用了很长一段时间的默认头像
raise
举起
she raised her hand to answer the teacher's question
collide
互撞
the cars collided because the road was slippery
embark
开始、着手
she embarked on a new career as a writer after quitting as a doctor
她放弃当医生后，开始了新的作家生涯
glare
炫目的光、努目而视
the sun's glare made it hard to see
太阳强烈的光线让它无法直视
steep
陡峭的
don't go too close to the edge of the steep cliff
别站得离陡峭的悬崖太近了
brew
酝酿、酿造
trouble was brewing outside the stadium as rival fans were gathering
球场外对立的粉丝们开始聚集，一场冲突正在酝酿之中
fraudulent
欺诈的
the fraudulent call is to get money by deception
这通诈骗电话的目的是骗取钱财
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
const targetPath = path.resolve(__dirname, './data/courses/11.json');
fs.writeFileSync(targetPath, json_data);