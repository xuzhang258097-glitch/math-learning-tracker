/* ============================================================
   学习资源数据库
   包含教材、辅导书、视频课程、在线工具等详细信息
   ============================================================ */

const RESOURCES_DATA = {
  // 核心教材
  textbooks: [
    {
      name: "同济《高等数学》第七版（上册）",
      cover: "📘",
      author: "同济大学数学系",
      publisher: "高等教育出版社",
      isbn: "978-7-04-039663-8",
      desc: "国内最经典的高数教材，体系完整、推导严谨。上册覆盖函数极限、导数微分、不定积分与定积分，是自学高数的首选教材。",
      tags: ["必读", "核心教材"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=高等数学第七版上册同济" },
        { name: "当当", url: "https://search.dangdang.com/?key=高等数学第七版上册同济" },
        { name: "电子版", url: null }
      ],
      usage: "主教材，每天对照学习计划精读对应章节"
    },
    {
      name: "同济《高等数学》第七版（下册）",
      cover: "📗",
      author: "同济大学数学系",
      publisher: "高等教育出版社",
      isbn: "978-7-04-039664-5",
      desc: "下册覆盖空间解析几何、多元函数微分、重积分、曲线曲面积分、级数与微分方程。第三、四阶段的核心教材。",
      tags: ["必读", "核心教材"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=高等数学第七版下册同济" },
        { name: "当当", url: "https://search.dangdang.com/?key=高等数学第七版下册同济" }
      ],
      usage: "第三阶段起每天配合学习计划使用"
    },
    {
      name: "同济《线性代数》第六版",
      cover: "📙",
      author: "同济大学数学系",
      publisher: "高等教育出版社",
      isbn: "978-7-04-039661-4",
      desc: "国内线代经典教材，从行列式到二次型逐步深入。第五阶段 35 天的学习全部基于此书。",
      tags: ["必读", "第五阶段"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=线性代数第六版同济" },
        { name: "当当", url: "https://search.dangdang.com/?key=线性代数第六版同济" }
      ],
      usage: "第五阶段每天按计划精读"
    },
    {
      name: "《高等数学习题全解指南》（同济第七版配套）",
      cover: "📕",
      author: "同济大学数学系",
      publisher: "高等教育出版社",
      isbn: "978-7-04-039688-3",
      desc: "同济教材官方配套习题解答，每道课后习题都有完整解答过程。做课后练习必备，用于自检和对比解题思路。",
      tags: ["工具书", "必备"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=高等数学习题全解指南同济第七版" },
        { name: "当当", url: "https://search.dangdang.com/?key=高等数学习题全解指南同济第七版" }
      ],
      usage: "做完课后习题后对照检查，学习标准解题写法"
    }
  ],

  // 辅导书与习题集
  supplements: [
    {
      name: "《高等数学辅导》张宇 著",
      cover: "📓",
      author: "张宇",
      publisher: "北京理工大学出版社",
      desc: "考研数学名师张宇的辅导书，用通俗语言重新讲解高数核心概念，大量例题加讲解，适合与教材搭配使用加深理解。",
      tags: ["辅导书", "拔高"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=张宇高等数学辅导" },
        { name: "当当", url: "https://search.dangdang.com/?key=张宇高等数学辅导" }
      ],
      usage: "学完一个章节后，用本书中的例题巩固理解"
    },
    {
      name: "《考研数学复习全书》（基础篇）",
      cover: "📔",
      author: "李永乐 / 王式安 / 武忠祥",
      publisher: "西安交通大学出版社",
      desc: "考研数学三巨头合著的经典复习全书，知识点梳理极其系统，例题覆盖全面。虽为考研书，但基础篇非常适合高数初学阶段的知识串联。",
      tags: ["辅导书", "系统复习"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=考研数学复习全书基础篇李永乐" },
        { name: "当当", url: "https://search.dangdang.com/?key=考研数学复习全书基础篇李永乐" }
      ],
      usage: "各阶段结束后用本书进行系统回顾和知识串联"
    },
    {
      name: "《普林斯顿微积分读本》（中文修订版）",
      cover: "📖",
      author: "Adrian Banner 著 / 李馨 译",
      publisher: "人民邮电出版社",
      isbn: "978-7-115-43559-0",
      desc: "豆瓣 9.1 分的神作，用大白话讲微积分。从最基础的函数概念开始，循序渐进，适合当入门读物建立直觉。",
      tags: ["入门", "直觉培养"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=普林斯顿微积分读本修订版" },
        { name: "当当", url: "https://search.dangdang.com/?key=普林斯顿微积分读本修订版" }
      ],
      usage: "每周抽 1-2 小时阅读，帮助建立数学直觉"
    },
    {
      name: "《不定积分100题》/ 《定积分计算100题》",
      cover: "📝",
      author: "各考研辅导机构整理",
      desc: "经典积分计算题集，涵盖换元、分部、有理函数、三角有理式等各类题型。反复刷题是掌握积分技巧的唯一途径。",
      tags: ["习题集", "刷题"],
      buyLinks: [
        { name: "百度网盘", url: null },
        { name: "考研论坛", url: null }
      ],
      usage: "第二阶段积分学习期间集中刷题"
    },
    {
      name: "《数学分析习题课讲义》谢惠民 等",
      cover: "📚",
      author: "谢惠民 / 恽自求 / 易法槐 / 钱定边",
      publisher: "高等教育出版社",
      isbn: "978-7-04-022555-6",
      desc: "比同济教材难度高一个层次，适合学有余力时做证明题训练。每道题都有提示和解答，对培养数学思维极有帮助。",
      tags: ["拔高", "证明训练"],
      buyLinks: [
        { name: "京东", url: "https://search.jd.com/Search?keyword=数学分析习题课讲义谢惠民" },
        { name: "当当", url: "https://search.dangdang.com/?key=数学分析习题课讲义谢惠民" }
      ],
      usage: "每个阶段结束后的证明专题训练参考"
    }
  ],

  // 视频课程
  videos: [
    {
      name: "宋浩老师《高等数学》全集",
      cover: "🎬",
      platform: "B站",
      author: "宋浩（山东财经大学）",
      desc: "B站播放量过亿的神级高数课。讲解极其细致，语速适中，板书清晰，适合零基础系统学习。每个概念都有充足的例题演示。",
      tags: ["主视频", "零基础"],
      url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369",
      usage: "每天先看视频建立直观理解，再读教材深入"
    },
    {
      name: "张宇考研数学基础班",
      cover: "🎬",
      platform: "B站",
      author: "张宇",
      desc: "考研数学名师，风格幽默，善用口诀和技巧。基础班覆盖高数核心内容，适合有一定基础后提升理解深度。",
      tags: ["拔高", "技巧"],
      url: "https://space.bilibili.com/52118504",
      usage: "学完同济对应章节后，用张宇视频查漏补缺"
    },
    {
      name: "3Blue1Brown《微积分的本质》",
      cover: "🎬",
      platform: "B站 / YouTube",
      author: "Grant Sanderson (3Blue1Brown)",
      desc: "动画演示微积分核心思想的殿堂级视频。不是教你做题，而是让你真正'看到'极限、导数、积分是什么。英文配音+中文字幕。",
      tags: ["直觉", "可视化"],
      url: "https://www.bilibili.com/video/BV1qW411N7FU",
      usage: "每学完一个核心概念后观看对应视频，建立几何直觉"
    },
    {
      name: "MIT 18.01 单变量微积分（中字）",
      cover: "🎬",
      platform: "B站 / MIT OCW",
      author: "Prof. David Jerison",
      desc: "MIT 经典公开课，从不同于国内教材的视角讲解微积分。英文授课带中文字幕，适合想拓展国际视野的学习者。",
      tags: ["进阶", "国际视野"],
      url: "https://www.bilibili.com/video/BV1LE411h7M6",
      usage: "选学内容，每周抽时间看 1-2 讲拓宽思路"
    },
    {
      name: "李永乐线代考研基础班",
      cover: "🎬",
      platform: "B站",
      author: "李永乐（清华大学）",
      desc: "线代考研第一人，讲解极其清晰有条理。从行列式到二次型，逻辑严密，例题精辟。第五阶段的绝佳配套视频。",
      tags: ["线代", "第五阶段"],
      url: "https://search.bilibili.com/all?keyword=李永乐线性代数基础",
      usage: "第五阶段每天看完同济线代后，配合李永乐视频巩固"
    }
  ],

  // 在线工具
  tools: [
    {
      name: "GeoGebra",
      cover: "🧮",
      type: "web",
      desc: "免费在线数学工具，可画函数图像、3D 曲面、动态演示极限过程。支持 web 端和手机 App。",
      tags: ["免费", "可视化"],
      url: "https://www.geogebra.org/calculator",
      usage: "画出题目中的函数图像，直观观察单调性、极值、渐近线"
    },
    {
      name: "Desmos",
      cover: "📊",
      type: "web",
      desc: "极简风格的在线图形计算器，画函数图像体验极佳。支持滑块参数，可以动态观察参数变化对函数图像的影响。",
      tags: ["免费", "极简"],
      url: "https://www.desmos.com/calculator?lang=zh-CN",
      usage: "快速画函数图像，用滑块参数理解参数变化"
    },
    {
      name: "Wolfram Alpha",
      cover: "🔍",
      type: "web",
      desc: "计算知识引擎，能求解极限、导数、积分、微分方程，并给出分步解答。像数学界的搜索引擎。",
      tags: ["计算", "验证"],
      url: "https://www.wolframalpha.com/",
      usage: "做完题后用 Wolfram Alpha 验证结果，查看分步解答"
    },
    {
      name: "Symbolab",
      cover: "✖️",
      type: "web",
      desc: "专门用于数学解题的在线工具，提供详细的分步求解过程。支持中文界面，对极限、求导、积分支持特别好。",
      tags: ["解题", "免费"],
      url: "https://zs.symbolab.com/",
      usage: "遇到卡住的题，用 Symbolab 看完整解题过程"
    },
    {
      name: "考研数学公式速查手册",
      cover: "📋",
      type: "pdf",
      desc: "高数+线代核心公式汇总，建议打印随身携带。每天背 5 个公式，日积月累。",
      tags: ["公式", "必背"],
      url: null,
      usage: "打印放在书桌旁，随时查阅"
    }
  ],

  // 公式手册与速查
  formulas: [
    {
      name: "三角函数公式大全",
      desc: "和差化积、积化和差、倍角、半角、诱导公式一网打尽",
      tags: ["三角"],
      usage: "预备阶段必背，贴在书桌前每天看一遍"
    },
    {
      name: "导数公式表",
      desc: "基本初等函数求导公式 + 求导法则汇总",
      tags: ["求导"],
      usage: "第一阶段学习导数时打印贴墙"
    },
    {
      name: "积分公式表",
      desc: "基本积分表 + 换元 + 分部积分常用套路",
      tags: ["积分"],
      usage: "第二阶段学习积分时打印贴墙"
    },
    {
      name: "级数收敛判别法汇总",
      desc: "正项级数、交错级数、任意项级数的判别法对比表",
      tags: ["级数"],
      usage: "第四阶段学习级数时使用"
    },
    {
      name: "线性代数公式速查",
      desc: "行列式、矩阵、特征值、二次型核心公式",
      tags: ["线代"],
      usage: "第五阶段学习线代时使用"
    }
  ]
};
