const { log } = require('console');
const fs = require('fs');

// 输入的文本
const text = `
Look at the stars
抬头仰望繁星点点
Look how they shine for you
它们为妳散发出迷人光芒
And everything you do
你所作的每件事
Yeah they were all yellow
都闪耀着一种金黄色
I came along
我一路独自走来
I wrote a song for you
为你做了一首情歌
And all also the things you do
因为你所作的每件事
And it was called Yellow
都有着金黄色的回忆
So then I took my turn
我恣意的漫步游走
Oh what a thing to have done
是什么样的事情等待着实现呢？
And it was all Yellow
那是种金黄色的美好体验
Your skin
妳的肌肤
Oh yeah your skin and bones
妳的每一吋肌肤
Turn into something beautiful
都幻化为美丽的生活点滴
You know you know I love you so
妳明白我对妳的爱有多深
You know I love you so
相信我给妳的付出有多真
I swam across
我为妳穿越海洋
I jumped across for you
为妳跨越山谷
Oh what a thing to do
让我疯狂付出的原因为何？
Cos you were all Yellow
只因为妳在我的心中永远迷人脱俗
I drew a line
我画了一条线
I drew a line for you
为妳画出我俩唯一的界线 等着妳跨越
Oh what a thing to do
使我想像幸福的动机为何？
And it was all Yellow
只为了得到美丽如妳的重视
Your skin
妳的肌肤
Oh yeah your skin and bones
妳的每一吋肌肤
Turn into something beautiful
都幻化为美丽的生活点滴
And you know for you
妳知道我愿意为妳
I’d bleed myself dry for you
我愿意为了妳而牺牲自己
I’d bleed myself dry
纵使我的生命已不再留有任何痕迹
It’s true look how they shine for you
我对妳的表白是如此真实，星星的确为妳散​​发光芒
Look how they shine for you
看着它们为妳散发的迷人光芒
Look how they shine for
看着它们如何为妳散发光芒
Look how they shine for you
看着它们为妳散发着迷人光芒
Look how they shine for you
看着它们为妳散发着迷人光芒
Look how they shine
看着它们如何散发出迷人光芒
Look at the stars
抬头仰望繁星点点
Look how they shine for you
看着它们为妳散发的迷人光芒
And all the things that you do
就在妳的举手投足之间
`;

// 将文本转换为行的数组
const lines = text.trim().split('\n');

// 创建一个空数组来存储对象
const data = [];

// 遍历行的数组，每次取两行
for (let i = 0; i < lines.length; i += 2) {
    // 创建一个对象，其中 chinese 是第 i+1 行，english 是第 i 行，soundmark 是空字符串
    const item = {
        chinese: lines[i+1],
        english: lines[i],
        soundmark: ""
    };
    // 将对象添加到数组中
    data.push(item);
}

// 将数组转换为 JSON 格式
const json_data = JSON.stringify(data, null, 4);

// 写入 JSON 数据到文件
fs.writeFileSync('./data/courses/01.json', json_data);