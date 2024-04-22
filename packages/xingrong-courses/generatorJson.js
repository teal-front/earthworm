const { log } = require('console');
const path = require('node:path');
const fs = require('node:fs');

// 输入的文本
const text = `
00:00:39,671 --> 00:00:41,631
和其他数百万人一样
Like millions of others,
00:00:41,713 --> 00:00:45,463
我听说齐马宣布将要公开自己的最后一件作品
I'd heard Zima announce the unveiling of his final work of art.
00:00:46,630 --> 00:00:49,529
这些年 我多次申请采访他
Over the years, I'd asked many times for interviews
00:00:49,529 --> 00:00:51,144
但是每次都遭到了拒绝
and was always rejected.
00:00:51,463 --> 00:00:54,423
现在 不知是什么原因
Now, for whatever reason,
00:00:54,546 --> 00:00:58,506
齐马·蓝要求和我谈谈
Zima Blue had requested to speak with me.
00:00:59,671 --> 00:01:01,872
我无法确定这个蓝色
I couldn't decide whether the blue
00:01:01,873 --> 00:01:05,591
是更接近天空 还是海洋的颜色
was a closer match to the sky or to the sea.
00:01:06,380 --> 00:01:07,630
其实都不是
Neither, really.
00:01:08,380 --> 00:01:12,630
齐马蓝 是一个很精确的颜色
Zima Blue, it was a precise thing.
00:01:14,505 --> 00:01:17,005
人们对齐马的过去知之甚少
Little is known about Zima's history.
00:01:17,546 --> 00:01:21,126
据说他的艺术事业是从肖像画开始的
It was said that he started his art career in portraiture,
00:01:22,255 --> 00:01:26,255
但对于齐马来说 人类形态这个主题太过渺小
but for Zima, the human form was too small a subject.
00:01:27,046 --> 00:01:30,666
追寻更深入的真相 促使他走向更深处
The search for deeper meaning caused him to look further...
00:01:32,380 --> 00:01:34,340
走向宇宙本身
to the cosmos itself.
00:01:36,880 --> 00:01:39,590
他的壁画事业就是这么开始的
That's how the mural work started.
00:01:43,171 --> 00:01:45,961
那些作品毫无疑问显示出他的才华横溢
They were undeniably brilliant.
00:01:48,588 --> 00:01:53,102
有天 齐马公开了一幅有些与众不同的壁画
One day, Zima unveiled a mural that had something different about it.
00:01:54,546 --> 00:01:59,336
在画布中心 是一个小小的蓝色方块
In the middle of the canvas was a tiny blue square.
00:02:00,046 --> 00:02:02,166
那个方块只是一切的开始
The square was just the beginning.
00:02:02,505 --> 00:02:04,545
在接下来几十年里
Over the next several decades,
00:02:04,630 --> 00:02:08,210
那个抽象的形状开始改变 并变得越来越明显
the abstract shapes changed and became more dominant.
00:02:08,796 --> 00:02:11,956
但是一直以来 那抹蓝色从未改变
But, always, the shade of blue was the same.
00:02:13,088 --> 00:02:14,708
那就是齐马蓝
It was Zima Blue.
00:02:15,380 --> 00:02:17,175
很久以前 齐马
Before very long, Zima
00:02:17,176 --> 00:02:21,010
公开了他第一幅纯蓝色的壁画
unveiled the first of his entirely blue murals.
00:02:21,755 --> 00:02:25,665
很多人认为这是齐马能力的极限了
It was considered by many to be as far as Zima could take things.
00:02:26,755 --> 00:02:28,705
他们大错特错
They couldn't have been more wrong.
00:02:31,255 --> 00:02:34,255
当大多人提到他的蓝色时期时
When most people speak about his Blue Period,
00:02:34,338 --> 00:02:39,008
他们指的是那些巨大的壁画...
they mean the era of the truly huge murals...
00:02:40,213 --> 00:02:43,133
但齐马才刚刚开始
but Zima was just getting started.
00:02:48,963 --> 00:02:54,463
是某种程度的奇观 让齐马真正成名
It was a certain level of spectacle that made Zima truly famous,
00:02:54,880 --> 00:02:57,460
即使是那些对艺术不感兴趣的人也知道他
even to those with no interest in art.
00:03:00,713 --> 00:03:02,843
但是名气不是他的目的
But fame was never the point.
00:03:06,588 --> 00:03:11,088
尽管他已经声名鹊起 齐马仍然不满足
In spite of all his success, Zima was still dissatisfied
00:03:12,546 --> 00:03:15,402
他接下来所做的事情 对很多人来说
and what he did next was, for many,
00:03:15,403 --> 00:03:18,666
太过偏激 不仅仅是为艺术奉献那么简单了
too extreme a sacrifice to make for art.
00:03:27,380 --> 00:03:29,340
很高兴你来了 克莱儿
Glad you could make it, Claire.
00:03:30,630 --> 00:03:31,630
飞行旅程怎么样
How was the flight?
00:03:33,963 --> 00:03:35,213
放松 克莱儿
Relax, Claire.
00:03:36,421 --> 00:03:37,511
嗨
Hi.
00:03:38,546 --> 00:03:41,756
有些人认为我很可怕 但他们很快就不畏惧我了
Some people find me intimidating, but they quickly get over it.
00:03:42,463 --> 00:03:46,513
距离我上次和媒体交流 已经有一百多年了
It's been over 100 years since I've spoken to the press.
00:03:46,588 --> 00:03:48,350
我邀请你来 是因为
I've invited you here because
00:03:48,350 --> 00:03:51,048
我想让你帮我讲述我的故事
I want you to help me tell my story.
00:03:52,130 --> 00:03:54,210
我们来四处走走吧
Shall we take a little walk?
00:03:56,130 --> 00:04:00,210
他是个很帅气的男人 即使他进行了那些改造
He was a handsome man, even after all his transformations.
00:04:00,921 --> 00:04:03,381
有一个星球叫做哈尔科夫八号
There was a planet called Kharkov Eight.
00:04:03,880 --> 00:04:07,460
那里专攻一种非法的机能修改技术
It specialized in illicit cybernetic modifications.
00:04:09,255 --> 00:04:13,085
他进行了激进的生物改造
He underwent radical biological procedures
00:04:13,171 --> 00:04:16,631
让他能够承受极端环境
that enabled him to tolerate extreme environments
00:04:16,713 --> 00:04:19,383
却不需要任何保护服
without the burden of a protective suit.
00:04:20,546 --> 00:04:23,626
他的眼睛能够看到所有频谱
His eyes could see in any known spectrum.
00:04:24,546 --> 00:04:27,046
他不再呼吸氧气
He no longer breathed oxygen.
00:04:27,130 --> 00:04:31,090
他的皮肤被压力聚合物所代替
His skin was replaced with pressurized polymer
00:04:31,171 --> 00:04:36,211
所以他前去探险 与宇宙交流
and so he ventured forth to commune with the cosmos.
00:04:39,421 --> 00:04:42,171
但齐马最终意识到
But what Zima eventually realized
00:04:42,255 --> 00:04:45,705
宇宙早已用他无法企及的方式
is that the cosmos was already speaking its own truth
00:04:46,088 --> 00:04:48,508
说出了真相
far better than he ever could.
00:04:53,921 --> 00:04:56,761
我对真相的搜索让我来到了这里
My search for truth has led me here,
00:04:58,046 --> 00:05:01,086
也是我最终的终点
to what will be my final piece.
00:05:02,421 --> 00:05:06,461
终于 我理解自己通过艺术所寻找的东西了
At last, I understand the thing I sought through my art.
00:05:07,005 --> 00:05:10,835
那和这个游泳池有什么关系吗
And what does this swimming pool have to do with that?
00:05:11,088 --> 00:05:13,798
这不仅仅是一个游泳池
It's not just any swimming pool.
00:05:14,713 --> 00:05:18,303
很久以前 它属于一个富有天赋的年轻女性
Long ago, it belonged to a talented young woman
00:05:18,380 --> 00:05:21,010
她对实用型机器人有着执着的兴趣
with a keen interest in practical robotics.
00:05:21,296 --> 00:05:25,416
她创造了几十个机器人在家中进行各种工作
She created dozens of robots to do odd jobs around her house,
00:05:25,505 --> 00:05:27,464
但她最喜爱的一个机器人
but she was especially fond of
00:05:27,465 --> 00:05:30,665
是为她清扫游泳池的那一个
the one she'd created to clean her swimming pool.
00:05:31,171 --> 00:05:33,421
那个小机器人没完没了地辛苦工作
The little machine toiled endlessly,
00:05:33,422 --> 00:05:35,921
清扫着泳池的每一个角落
scrubbing the ceramic sides of the pool.
00:05:37,088 --> 00:05:40,548
但是年轻女孩对它的工作仍不满意
But the young woman wasn't satisfied with the job it did.
00:05:41,005 --> 00:05:43,505
所以她给予了它有色的视觉系统
So she gave it a full color vision system
00:05:43,588 --> 00:05:46,708
以及足够将分析的视觉数据
and a brain large enough to process the visual data
00:05:46,796 --> 00:05:48,836
转换成周围的环境模板的大脑
into a model of its surroundings.
00:05:48,921 --> 00:05:52,381
她给予了它自主决定的能力
She gave it the ability to make its own decisions,
00:05:52,463 --> 00:05:55,213
来设计清理泳池的不同方案
to design different strategies for cleaning the pool.
00:05:55,838 --> 00:05:57,732
她继续把那个机器
She continued to use the machine
00:05:57,733 --> 00:06:00,338
作为新硬件以及软件的测试品
as a test-bed for new hardware and software.
00:06:01,130 --> 00:06:04,090
渐渐地 它变得越来越有意识
And by stages, it became more aware.
00:06:04,171 --> 00:06:06,761
最后 那个女人死了
Eventually, the woman died.
00:06:07,005 --> 00:06:08,705
那个小机器人
The little machine was passed
00:06:08,796 --> 00:06:11,046
被传给了一个又一个主人
from one owner to the next.
00:06:11,588 --> 00:06:15,271
它被添加了许多功能 不断地被改良
They added things, made modifications here and there
00:06:16,003 --> 00:06:19,548
每次迭代 它都变得越来越清醒
and with every iteration, it became more alive.
00:06:20,272 --> 00:06:22,312
变得更加...
Became more...
00:06:23,155 --> 00:06:24,155
像我
me.
00:06:25,733 --> 00:06:27,904
这是同一个泳池
This is that same pool.
00:06:28,077 --> 00:06:30,632
我把它挖了起来 搬到了这里
I had it dug up. Moved here.
00:06:31,044 --> 00:06:34,783
但你是一个机器零件组成的人类啊
But you're a man with machine parts,
00:06:34,783 --> 00:06:37,103
不是认为自己是人类的机器人
not a machine that thinks it's a man.
00:06:37,309 --> 00:06:41,165
有时 我也很难理解自己成为了什么
Sometimes, it's difficult even for me to understand what I've become.
00:06:41,692 --> 00:06:45,359
更加难以记起我曾经是什么
And harder still to remember what I once was.
00:06:47,442 --> 00:06:49,812
那个蓝色的方块...
The blue of the tiles...
00:06:50,317 --> 00:06:53,447
齐马蓝 厂商是这么叫它的
Zima Blue, the manufacturer called it.
00:06:54,276 --> 00:06:56,526
是我看见的第一个东西
The first thing I ever saw.
00:06:57,026 --> 00:06:58,986
这是我开始的地方
This was where I began.
00:06:59,192 --> 00:07:00,734
一个粗糙的
A crude little machine with
00:07:00,735 --> 00:07:03,192
不够智能 无法自控的小机器人
barely enough intelligence to steer itself.
00:07:04,026 --> 00:07:05,696
但那曾是我的世界
But it was my world.
00:07:05,984 --> 00:07:10,234
那是我知道的一切 我只需知道的一切
It was all I knew, all I needed to know.
00:07:11,401 --> 00:07:12,521
那现在呢
And now?
00:07:45,942 --> 00:07:47,692
我会全身心投入
I will immerse myself.
00:07:55,317 --> 00:07:59,857
这么做的同时 我会慢慢关闭我的高级大脑功能
And as I do, I will slowly shut down my higher brain functions...
00:08:09,734 --> 00:08:11,734
毁掉我自己...
un-making myself...
00:08:19,192 --> 00:08:22,522
只留下一小部分让我享受周围的环境...
leaving just enough to appreciate my surroundings...
00:08:30,317 --> 00:08:35,697
来感受完成那简单的任务所带来的快乐
to extract some simple pleasure from the execution of a task well done.
00:08:36,901 --> 00:08:39,771
我对真相的搜索终于结束了
My search for truth is finished at last.
00:08:44,065 --> 00:08:45,685
我要回家了
I am going home.
`;

// 将文本转换为行的数组
const lines = text.trim().split('\n');

// 创建一个空数组来存储对象
const data = [];

// 遍历行的数组，每次取两行
for (let i = 0; i < lines.length; i += 3) {
    // 创建一个对象，其中 chinese 是第 i+1 行，english 是第 i 行，soundmark 是空字符串
    const item = {
        chinese: lines[i+1],
        english: lines[i+2],
        soundmark: ""
    };
    // 将对象添加到数组中
    data.push(item);
}

// 将数组转换为 JSON 格式
const json_data = JSON.stringify(data, null, 4);

// 写入 JSON 数据到文件
const targetPath = path.resolve(__dirname, './data/courses/04.json');
fs.writeFileSync(targetPath, json_data);