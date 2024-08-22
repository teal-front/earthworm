const { log } = require('console');
const path = require('node:path');
const fs = require('node:fs');

// 输入的文本
const text = `
vice /vars/
m恶习；缺点：邪恶；罪行；生理缺陷ad），副的；代理的
Sleeping late is a vice.
睡懒觉是一种恶习。

rely /rtlai/
区 依赖，依靠；信赖
I often rely on ready-made food, because I am so bad at cooking!
我经常依赖于现成的食物，因为我不擅长做饭！

ingredient /In'gri:diant/
n.（烹调的）原料；（构成的）要素
Flour is the main ingredient of bread.
面粉是面包的主要原料。

militant / militant/
adj好战的，好暴力的m.激进分子，
The two militant puppies love to fight.
这两只好斗的小狗喜欢打架。

suspension /sa'spenfn/
n 悬浮；暂停
A suspension bridge is so named because the road is supported by cables.
“吊桥”之所以得名，是因为桥上的道路由钢索

presentation /pri:zn'ter/n/
n.演讲；报告；介绍；颁奖仪式
The student is giving a presentation about how to roll the dough scientifically.
这个学生正在做一个关于如何擀面的报告。论如何科学地擀面

denote /di'nout/
U.指出；代表（或表示）
The red color is usually used to denote error.
红色一般用于指出错误。

indifference /in'difrans/
n，冷淡，不关心
He rolled his eyes to show his indifference.
他翻了翻白眼来显示他的冷淡。

murmur /mairmar/
2低声抱怨；低声说，低语 几低语；喃喃说话声
He murmured something in his sleep.
他在睡梦中喃喃自语。

Olympic /alimpik/
adj.奥林匹克运动会的
The Rio Summer Olympic Games were held in 2016.
2016年举行了里约夏季奥运会。

agony lagani/
1. 极大的痛苦
The man is in agony when hearing the bad news.
当听到这个坏消息时，这个人陷入了极大的痛

necessity /na'sesati/
n.必需品
Air conditioner is an absolute necessity in this climate.
在这种气候下，空调是绝对的必需品。

flatter / flatar/
V 阿谀，使高兴；（肖像等）胜过（真人真物）
Thank you for your kind words, I'm flattered.
“谢谢你的赞美之词。我感到很荣幸。”

mansion /man/n/
1.官邸，巨宅，大厦
Look at how huge that mansion is
你看这座宅邸多宏伟！

negligent /neglidzant/
cd）疏忽的，粗心大意的
The worker was negligent in smoking cigarette with barrels of oil around him.
還个工人很粗心，在周围都是油桶的情况下抽

perseverance / pairsa virans/
n. 坚持不懈
Perseverance is an important trait to have when learning English.
在学习英语的过程中，坚持不懈是一项很重要的特质。
`;

// 将文本转换为行的数组
const lines = text.trim().split('\n');

// 创建一个空数组来存储对象
const data = [];

// 遍历行的数组，每次取两行
for (let i = 0; i < lines.length; i += 5) {
    // 创建一个对象，其中 chinese 是第 i+1 行，english 是第 i 行，soundmark 是空字符串
    const item1 = {
        chinese: lines[i + 1],
        english: lines[i + 0].split(' ')[0],
        soundmark: lines[i + 0].split(' ')[1],
    };
    const item2 = {
        chinese: lines[i + 3],
        english: lines[i + 2].replace(/\.$/, ''),
        soundmark: '',
    };

    // 将对象添加到数组中
    data.push(item1, item2);
}

// 将数组转换为 JSON 格式
const json_data = JSON.stringify(data, null, 4);

// 写入 JSON 数据到文件
const targetPath = path.resolve(__dirname, './data/courses/65.json');
fs.writeFileSync(targetPath, json_data);