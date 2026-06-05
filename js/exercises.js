/* ============================================================
   每日习题与资源链接数据库
   182天每一天10道课后习题（题目+隐藏答案）
   按主题从题库中抽取，确保与当天内容匹配
   ============================================================ */

const EXERCISES_DB = {
  "0-0": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-1": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "0-2": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-3": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "0-4": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-5": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "0-6": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "【复习】设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "【复习】判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "【复习】设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "【复习】求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "【复习】已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "【复习】化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "【复习】已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "【复习】计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "【复习】求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-7": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "0-8": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-9": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "0-10": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-11": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "0-12": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 f(x)=√(5-x)+ln(x+1) 的定义域。", answer: "x+1>0 且 5-x≥0，即 -1<x≤5。定义域 (-1,5]。" },
      { question: "设 f(x)=x²+2x，求 f(x+1)-f(x)。", answer: "f(x+1)=(x+1)²+2(x+1)=x²+4x+3；f(x)=x²+2x；差为 2x+3。" },
      { question: "判断 f(x)=x·|x| 的奇偶性。", answer: "f(-x)=(-x)|-x|=-x|x|=-f(x)，奇函数。" },
      { question: "设 f(x)=(x-1)/(x+1)，求 f(f(x))。", answer: "f(f(x))=[(x-1)/(x+1)-1]/[(x-1)/(x+1)+1]=(-2)/(2x)=-1/x。" },
      { question: "求 y=2^√x 的定义域和值域。", answer: "定义域 [0,+∞)；√x≥0，所以 y≥2⁰=1，值域 [1,+∞)。" },
      { question: "已知 log₃x=2，求 x。", answer: "x=3²=9。" },
      { question: "化简 log₂48-log₂3。", answer: "=log₂(48/3)=log₂16=4。" },
      { question: "已知 sinα=5/13，α∈(0,π/2)，求 cosα。", answer: "cosα=√(1-25/169)=12/13。" },
      { question: "计算 tan(π/4)+cot(π/4)。", answer: "=1+1=2。" },
      { question: "求 y=sinx+cosx 的最大值。", answer: "=√2·sin(x+π/4)，最大值为 √2。" },
    ]
  },
  "0-13": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】解方程 cosx=1/2，x∈[0,2π]。", answer: "x=π/3 或 5π/3。" },
      { question: "【复习】求过点 (0,1) 和 (2,5) 的直线方程。", answer: "斜率 k=2，方程 y=2x+1。" },
      { question: "【复习】求圆 x²+y²=9 上点到直线 3x+4y-25=0 的最大距离。", answer: "圆心到直线距离 d=|0+0-25|/5=5，半径 r=3，最大距离=d+r=8。" },
      { question: "【复习】求椭圆 x²/16+y²/9=1 的离心率。", answer: "a=4,b=3,c=√7，e=c/a=√7/4。" },
      { question: "【复习】已知等差数列 a₁=2,d=3，求 S₅。", answer: "S₅=5×2+5×4×3/2=10+30=40。" },
      { question: "【复习】求等比数列 3,-6,12,-24,... 的第5项。", answer: "a₅=3×(-2)⁴=48。" },
      { question: "【复习】因式分解：x³+27。", answer: "=(x+3)(x²-3x+9)。" },
      { question: "【复习】已知 a²+b²=5, ab=2，求 (a+b)²。", answer: "=(a²+b²)+2ab=5+4=9。" },
      { question: "【复习】化简 (x²-4x+4)/(x²-4)。", answer: "=(x-2)²/[(x-2)(x+2)]=(x-2)/(x+2)。" },
      { question: "【复习】解不等式 x²-5x+6≤0。", answer: "(x-2)(x-3)≤0，所以 2≤x≤3。" },
    ]
  },
  "1-0": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-1": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-2": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-3": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-4": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-5": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-6": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "【复习】求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "【复习】求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "【复习】求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "【复习】求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "【复习】求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "【复习】求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "【复习】求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "【复习】求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "【复习】求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-7": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-8": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-9": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-10": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-11": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-12": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-13": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "【复习】求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "【复习】求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "【复习】求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "【复习】求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "【复习】求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "【复习】求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "【复习】求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "【复习】求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "【复习】求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-14": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-15": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) sin(5x)/x。", answer: "=5·lim sin(5x)/(5x)=5×1=5。" },
      { question: "求 lim(x→0) (1-cos3x)/x²。", answer: "1-cos3x~(3x)²/2=9x²/2，极限=(9x²/2)/x²=9/2。" },
      { question: "求 lim(x→0) (e^(2x)-1)/x。", answer: "e^(2x)-1~2x，极限=2x/x=2。" },
      { question: "求 lim(x→0) ln(1+3x)/x。", answer: "ln(1+3x)~3x，极限=3。" },
      { question: "求 lim(x→0) (tanx-x)/x³。", answer: "tanx=x+x³/3+o(x³)，所以 tanx-x~x³/3，极限=1/3。" },
      { question: "求 lim(x→0) (√(1+x)-1)/x。", answer: "有理化：=x/[x(√(1+x)+1)]=1/(√(1+x)+1)→1/2。" },
      { question: "求 lim(x→1) (x²-1)/(x²-3x+2)。", answer: "=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→-2。" },
      { question: "求 lim(x→∞) (3x²+2x-1)/(5x²-x+3)。", answer: "同除以 x²：=(3+2/x-1/x²)/(5-1/x+3/x²)→3/5。" },
      { question: "求 lim(x→∞) (√(x²+x)-x)。", answer: "有理化：=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2。" },
      { question: "求 lim(x→0) (sinx+sin2x+sin3x)/x。", answer: "=1+2+3=6。" },
    ]
  },
  "1-16": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 lim(x→0) (arcsinx-x)/x³。", answer: "arcsinx=x+x³/6+o(x³)，所以 arcsinx-x~x³/6，极限=1/6。" },
      { question: "求 lim(x→0) (a^x-b^x)/x (a,b>0)。", answer: "=lna-lnb=ln(a/b)。" },
      { question: "求 lim(n→∞) (1+2/n)^(3n)。", answer: "=[(1+2/n)^(n/2)]^6→e^6。" },
      { question: "求 lim(x→0) (1+tanx)^(1/x)。", answer: "ln=ln(1+tanx)/x~tanx/x~1，极限=e。" },
      { question: "求 lim(x→π/2) (sinx)^(tanx)。", answer: "令 t=π/2-x→0，=(cost)^(cott)=e^(cott·lncost)=e^(cost/sint·lncost)→e⁰=1。" },
      { question: "求 lim(x→0) [(1+x)/(1-x)]^(1/x)。", answer: "=lim [(1+x)^(1/x)]/[(1-x)^(-1/x)]^(-1)=e/e^(-1)=e²。" },
      { question: "求 lim(x→0) (cosx)^(1/sin²x)。", answer: "ln=ln(cosx)/sin²x~(-x²/2)/x²=-1/2，极限=e^(-1/2)。" },
      { question: "求 lim(x→1) (x^x-1)/(x-1)。", answer: "x^x=e^(xlnx)，xlnx→0，e^(xlnx)-1~xlnx~x(x-1)，极限=1。" },
      { question: "求 lim(x→0) (sinx·tanx)/x²。", answer: "sinx~x，tanx~x，极限=x²/x²=1。" },
      { question: "求 lim(x→0) [√(1+2x)-∛(1+3x)]/x²。", answer: "√(1+2x)=1+x-x²/2+o(x²)；∛(1+3x)=1+x-x²+o(x²)；差~x²/2，极限=1/2。" },
    ]
  },
  "1-17": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 y=x⁴-3x²+2x-1 的导数。", answer: "y'=4x³-6x+2。" },
      { question: "求 y=e^x·sinx 的导数。", answer: "y'=e^x·sinx+e^x·cosx=e^x(sinx+cosx)。" },
      { question: "求 y=ln(x²+1) 的导数。", answer: "y'=2x/(x²+1)。" },
      { question: "求 y=sin(x²) 的导数。", answer: "y'=cos(x²)·2x=2xcos(x²)。" },
      { question: "求 y=x^x (x>0) 的导数。", answer: "lny=xlnx，y'/y=lnx+1，y'=x^x(lnx+1)。" },
      { question: "求 y=arctan(x²) 的导数。", answer: "y'=2x/(1+x⁴)。" },
      { question: "求 y=√(x+√x) 的导数。", answer: "y'=(1+1/(2√x))/(2√(x+√x))。" },
      { question: "求 y=sin²x·cos³x 的导数。", answer: "y'=2sinxcosx·cos³x+sin²x·3cos²x(-sinx)=sinxcos²x(2cos²x-3sin²x)。" },
      { question: "设 x²+y²=1，求 dy/dx。", answer: "2x+2yy'=0，y'=-x/y。" },
      { question: "设 x=t², y=t³，求 dy/dx。", answer: "dy/dx=(dy/dt)/(dx/dt)=3t²/(2t)=3t/2。" },
    ]
  },
  "1-18": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 y=x·e^(-x) 的二阶导数。", answer: "y'=e^(-x)-xe^(-x)=(1-x)e^(-x)；y''=-e^(-x)-(1-x)e^(-x)=(x-2)e^(-x)。" },
      { question: "求 y=lnx 的 n 阶导数。", answer: "y'=1/x=x^(-1)；y''=-x^(-2)；y'''=2x^(-3)；y⁽ⁿ⁾=(-1)^(n-1)·(n-1)!·x^(-n)。" },
      { question: "求 y=sinx 的 n 阶导数。", answer: "y⁽ⁿ⁾=sin(x+nπ/2)。" },
      { question: "求 y=x·lnx 的微分 dy。", answer: "y'=lnx+1，dy=(lnx+1)dx。" },
      { question: "求 y=(x+1)/(x-1) 的导数。", answer: "y'=[(x-1)-(x+1)]/(x-1)²=-2/(x-1)²。" },
      { question: "求 y=ln|x| 的导数。", answer: "x>0 时 y'=1/x；x<0 时 y=ln(-x)，y'=(-1)/(-x)=1/x。所以 y'=1/x (x≠0)。" },
      { question: "设 y=f(x²)，求 y'。", answer: "y'=f'(x²)·2x。" },
      { question: "求 y=arcsin(2x) 的导数。", answer: "y'=2/√(1-4x²)。" },
      { question: "求 y=tan²x 的导数。", answer: "y'=2tanx·sec²x。" },
      { question: "求 y=ln(tan(x/2)) 的导数。", answer: "y'=[sec²(x/2)·(1/2)]/tan(x/2)=1/(2sin(x/2)cos(x/2))=1/sinx=cscx。" },
    ]
  },
  "1-19": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 y=x⁴-3x²+2x-1 的导数。", answer: "y'=4x³-6x+2。" },
      { question: "求 y=e^x·sinx 的导数。", answer: "y'=e^x·sinx+e^x·cosx=e^x(sinx+cosx)。" },
      { question: "求 y=ln(x²+1) 的导数。", answer: "y'=2x/(x²+1)。" },
      { question: "求 y=sin(x²) 的导数。", answer: "y'=cos(x²)·2x=2xcos(x²)。" },
      { question: "求 y=x^x (x>0) 的导数。", answer: "lny=xlnx，y'/y=lnx+1，y'=x^x(lnx+1)。" },
      { question: "求 y=arctan(x²) 的导数。", answer: "y'=2x/(1+x⁴)。" },
      { question: "求 y=√(x+√x) 的导数。", answer: "y'=(1+1/(2√x))/(2√(x+√x))。" },
      { question: "求 y=sin²x·cos³x 的导数。", answer: "y'=2sinxcosx·cos³x+sin²x·3cos²x(-sinx)=sinxcos²x(2cos²x-3sin²x)。" },
      { question: "设 x²+y²=1，求 dy/dx。", answer: "2x+2yy'=0，y'=-x/y。" },
      { question: "设 x=t², y=t³，求 dy/dx。", answer: "dy/dx=(dy/dt)/(dx/dt)=3t²/(2t)=3t/2。" },
    ]
  },
  "1-20": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 y=x·e^(-x) 的二阶导数。", answer: "y'=e^(-x)-xe^(-x)=(1-x)e^(-x)；y''=-e^(-x)-(1-x)e^(-x)=(x-2)e^(-x)。" },
      { question: "【复习】求 y=lnx 的 n 阶导数。", answer: "y'=1/x=x^(-1)；y''=-x^(-2)；y'''=2x^(-3)；y⁽ⁿ⁾=(-1)^(n-1)·(n-1)!·x^(-n)。" },
      { question: "【复习】求 y=sinx 的 n 阶导数。", answer: "y⁽ⁿ⁾=sin(x+nπ/2)。" },
      { question: "【复习】求 y=x·lnx 的微分 dy。", answer: "y'=lnx+1，dy=(lnx+1)dx。" },
      { question: "【复习】求 y=(x+1)/(x-1) 的导数。", answer: "y'=[(x-1)-(x+1)]/(x-1)²=-2/(x-1)²。" },
      { question: "【复习】求 y=ln|x| 的导数。", answer: "x>0 时 y'=1/x；x<0 时 y=ln(-x)，y'=(-1)/(-x)=1/x。所以 y'=1/x (x≠0)。" },
      { question: "【复习】设 y=f(x²)，求 y'。", answer: "y'=f'(x²)·2x。" },
      { question: "【复习】求 y=arcsin(2x) 的导数。", answer: "y'=2/√(1-4x²)。" },
      { question: "【复习】求 y=tan²x 的导数。", answer: "y'=2tanx·sec²x。" },
      { question: "【复习】求 y=ln(tan(x/2)) 的导数。", answer: "y'=[sec²(x/2)·(1/2)]/tan(x/2)=1/(2sin(x/2)cos(x/2))=1/sinx=cscx。" },
    ]
  },
  "1-21": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 y=x⁴-3x²+2x-1 的导数。", answer: "y'=4x³-6x+2。" },
      { question: "求 y=e^x·sinx 的导数。", answer: "y'=e^x·sinx+e^x·cosx=e^x(sinx+cosx)。" },
      { question: "求 y=ln(x²+1) 的导数。", answer: "y'=2x/(x²+1)。" },
      { question: "求 y=sin(x²) 的导数。", answer: "y'=cos(x²)·2x=2xcos(x²)。" },
      { question: "求 y=x^x (x>0) 的导数。", answer: "lny=xlnx，y'/y=lnx+1，y'=x^x(lnx+1)。" },
      { question: "求 y=arctan(x²) 的导数。", answer: "y'=2x/(1+x⁴)。" },
      { question: "求 y=√(x+√x) 的导数。", answer: "y'=(1+1/(2√x))/(2√(x+√x))。" },
      { question: "求 y=sin²x·cos³x 的导数。", answer: "y'=2sinxcosx·cos³x+sin²x·3cos²x(-sinx)=sinxcos²x(2cos²x-3sin²x)。" },
      { question: "设 x²+y²=1，求 dy/dx。", answer: "2x+2yy'=0，y'=-x/y。" },
      { question: "设 x=t², y=t³，求 dy/dx。", answer: "dy/dx=(dy/dt)/(dx/dt)=3t²/(2t)=3t/2。" },
    ]
  },
  "1-22": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 y=x·e^(-x) 的二阶导数。", answer: "y'=e^(-x)-xe^(-x)=(1-x)e^(-x)；y''=-e^(-x)-(1-x)e^(-x)=(x-2)e^(-x)。" },
      { question: "求 y=lnx 的 n 阶导数。", answer: "y'=1/x=x^(-1)；y''=-x^(-2)；y'''=2x^(-3)；y⁽ⁿ⁾=(-1)^(n-1)·(n-1)!·x^(-n)。" },
      { question: "求 y=sinx 的 n 阶导数。", answer: "y⁽ⁿ⁾=sin(x+nπ/2)。" },
      { question: "求 y=x·lnx 的微分 dy。", answer: "y'=lnx+1，dy=(lnx+1)dx。" },
      { question: "求 y=(x+1)/(x-1) 的导数。", answer: "y'=[(x-1)-(x+1)]/(x-1)²=-2/(x-1)²。" },
      { question: "求 y=ln|x| 的导数。", answer: "x>0 时 y'=1/x；x<0 时 y=ln(-x)，y'=(-1)/(-x)=1/x。所以 y'=1/x (x≠0)。" },
      { question: "设 y=f(x²)，求 y'。", answer: "y'=f'(x²)·2x。" },
      { question: "求 y=arcsin(2x) 的导数。", answer: "y'=2/√(1-4x²)。" },
      { question: "求 y=tan²x 的导数。", answer: "y'=2tanx·sec²x。" },
      { question: "求 y=ln(tan(x/2)) 的导数。", answer: "y'=[sec²(x/2)·(1/2)]/tan(x/2)=1/(2sin(x/2)cos(x/2))=1/sinx=cscx。" },
    ]
  },
  "1-23": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 y=x⁴-3x²+2x-1 的导数。", answer: "y'=4x³-6x+2。" },
      { question: "求 y=e^x·sinx 的导数。", answer: "y'=e^x·sinx+e^x·cosx=e^x(sinx+cosx)。" },
      { question: "求 y=ln(x²+1) 的导数。", answer: "y'=2x/(x²+1)。" },
      { question: "求 y=sin(x²) 的导数。", answer: "y'=cos(x²)·2x=2xcos(x²)。" },
      { question: "求 y=x^x (x>0) 的导数。", answer: "lny=xlnx，y'/y=lnx+1，y'=x^x(lnx+1)。" },
      { question: "求 y=arctan(x²) 的导数。", answer: "y'=2x/(1+x⁴)。" },
      { question: "求 y=√(x+√x) 的导数。", answer: "y'=(1+1/(2√x))/(2√(x+√x))。" },
      { question: "求 y=sin²x·cos³x 的导数。", answer: "y'=2sinxcosx·cos³x+sin²x·3cos²x(-sinx)=sinxcos²x(2cos²x-3sin²x)。" },
      { question: "设 x²+y²=1，求 dy/dx。", answer: "2x+2yy'=0，y'=-x/y。" },
      { question: "设 x=t², y=t³，求 dy/dx。", answer: "dy/dx=(dy/dt)/(dx/dt)=3t²/(2t)=3t/2。" },
    ]
  },
  "1-24": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "证明 f(x)=x³ 在 [0,1] 上满足罗尔定理的条件吗？", answer: "不满足。f(0)=0, f(1)=1≠0，不满足端点值相等的条件。" },
      { question: "设 f(x)=x(x-1)(x-2)，不求导证明 f'(x)=0 在 (0,1) 和 (1,2) 内各有一个根。", answer: "f(0)=f(1)=f(2)=0。在 [0,1] 和 [1,2] 上分别用罗尔定理，各存在 ξ₁∈(0,1) 和 ξ₂∈(1,2) 使 f'(ξ)=0。" },
      { question: "证明：当 x∈(0,π/2) 时，sinx>(2/π)x。", answer: "令 f(x)=sinx-(2/π)x。f(0)=f(π/2)=0。f''(x)=-sinx<0，f 在 (0,π/2) 上是凹函数，所以 f(x)>0。" },
      { question: "用柯西中值定理证明：若 f(0)=0 且 f' 递增，则 f(x)/x 也递增 (x>0)。", answer: "f(x)/x=(f(x)-f(0))/(x-0)=f'(ξ)（ξ∈(0,x)）。当 x 增大时，ξ 增大，f'(ξ) 增大。" },
      { question: "求 f(x)=e^x 的 n 阶麦克劳林展开。", answer: "e^x=1+x+x²/2!+x³/3!+...+xⁿ/n!+e^ξ·x^(n+1)/(n+1)!。" },
      { question: "用泰勒公式证明 e>1+1+1/2!+1/3!。", answer: "e=e¹=1+1+1/2+1/6+e^ξ/24>1+1+1/2+1/6=8/3≈2.667。" },
      { question: "证明：当 x→0 时，sinx=x-x³/6+O(x⁵)。", answer: "由泰勒公式 sinx=x-x³/3!+x⁵/5!-...，余项 R₅=x⁵/5!·sin(ξ+5π/2)=O(x⁵)。" },
      { question: "求 ln(1+x) 在 x=0 处的三阶泰勒展开。", answer: "ln(1+x)=x-x²/2+x³/3-x⁴/[4(1+ξ)⁴]，ξ∈(0,x)。" },
      { question: "用泰勒展开求 √e 的近似值（保留3位小数）。", answer: "e^(1/2)=1+1/2+(1/2)²/2+(1/2)³/6+...=1+0.5+0.125+0.0208+...≈1.646。" },
      { question: "证明：arctanx=x-x³/3+x⁵/5-... (|x|≤1)。", answer: "由 (arctanx)'=1/(1+x²)=1-x²+x⁴-...(|x|<1)，逐项积分得 arctanx=x-x³/3+x⁵/5-...。" },
    ]
  },
  "1-25": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "验证 f(x)=x²-2x+3 在 [0,3] 上满足拉格朗日中值定理，并求 ξ。", answer: "f(3)=6, f(0)=3，(f(3)-f(0))/(3-0)=1。f'(x)=2x-2=1，x=3/2∈(0,3)。所以 ξ=3/2。" },
      { question: "证明：当 x>0 时，ln(1+x)<x。", answer: "令 f(t)=ln(1+t)，在 [0,x] 上用拉格朗日中值定理：ln(1+x)-ln1=x/(1+ξ)，0<ξ<x。所以 ln(1+x)=x/(1+ξ)<x。" },
      { question: "证明：当 x>0 时，x-x²/2<ln(1+x)。", answer: "泰勒展开 ln(1+x)=x-x²/2+x³/[3(1+ξ)³]>x-x²/2（因为余项为正）。" },
      { question: "证明：|sinx-siny|≤|x-y|。", answer: "由拉格朗日中值定理，sinx-siny=cosξ·(x-y)，所以 |sinx-siny|=|cosξ||x-y|≤|x-y|。" },
      { question: "用洛必达法则求 lim(x→0) (sinx-x)/x³。", answer: "=lim (cosx-1)/(3x²)=lim (-sinx)/(6x)=lim (-cosx)/6=-1/6。" },
      { question: "用洛必达法则求 lim(x→0⁺) xlnx。", answer: "=lim lnx/(1/x)=lim (1/x)/(-1/x²)=lim (-x)=0。" },
      { question: "写出 e^x 在 x=0 处的带拉格朗日余项的泰勒公式（到 n=3）。", answer: "e^x=1+x+x²/2+x³/6+e^ξ·x⁴/24，ξ 在 0 和 x 之间。" },
      { question: "写出 sinx 在 x=0 处的泰勒展开（到 x⁵ 项）。", answer: "sinx=x-x³/6+x⁵/120+o(x⁵)。" },
      { question: "写出 cosx 在 x=0 处的泰勒展开（到 x⁴ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)。" },
      { question: "用泰勒公式求 lim(x→0) (cosx-e^(-x²/2))/x⁴。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)；e^(-x²/2)=1-x²/2+x⁴/8+o(x⁴)；差=-x⁴/12+o(x⁴)；极限=-1/12。" },
    ]
  },
  "1-26": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "证明 f(x)=x³ 在 [0,1] 上满足罗尔定理的条件吗？", answer: "不满足。f(0)=0, f(1)=1≠0，不满足端点值相等的条件。" },
      { question: "设 f(x)=x(x-1)(x-2)，不求导证明 f'(x)=0 在 (0,1) 和 (1,2) 内各有一个根。", answer: "f(0)=f(1)=f(2)=0。在 [0,1] 和 [1,2] 上分别用罗尔定理，各存在 ξ₁∈(0,1) 和 ξ₂∈(1,2) 使 f'(ξ)=0。" },
      { question: "证明：当 x∈(0,π/2) 时，sinx>(2/π)x。", answer: "令 f(x)=sinx-(2/π)x。f(0)=f(π/2)=0。f''(x)=-sinx<0，f 在 (0,π/2) 上是凹函数，所以 f(x)>0。" },
      { question: "用柯西中值定理证明：若 f(0)=0 且 f' 递增，则 f(x)/x 也递增 (x>0)。", answer: "f(x)/x=(f(x)-f(0))/(x-0)=f'(ξ)（ξ∈(0,x)）。当 x 增大时，ξ 增大，f'(ξ) 增大。" },
      { question: "求 f(x)=e^x 的 n 阶麦克劳林展开。", answer: "e^x=1+x+x²/2!+x³/3!+...+xⁿ/n!+e^ξ·x^(n+1)/(n+1)!。" },
      { question: "用泰勒公式证明 e>1+1+1/2!+1/3!。", answer: "e=e¹=1+1+1/2+1/6+e^ξ/24>1+1+1/2+1/6=8/3≈2.667。" },
      { question: "证明：当 x→0 时，sinx=x-x³/6+O(x⁵)。", answer: "由泰勒公式 sinx=x-x³/3!+x⁵/5!-...，余项 R₅=x⁵/5!·sin(ξ+5π/2)=O(x⁵)。" },
      { question: "求 ln(1+x) 在 x=0 处的三阶泰勒展开。", answer: "ln(1+x)=x-x²/2+x³/3-x⁴/[4(1+ξ)⁴]，ξ∈(0,x)。" },
      { question: "用泰勒展开求 √e 的近似值（保留3位小数）。", answer: "e^(1/2)=1+1/2+(1/2)²/2+(1/2)³/6+...=1+0.5+0.125+0.0208+...≈1.646。" },
      { question: "证明：arctanx=x-x³/3+x⁵/5-... (|x|≤1)。", answer: "由 (arctanx)'=1/(1+x²)=1-x²+x⁴-...(|x|<1)，逐项积分得 arctanx=x-x³/3+x⁵/5-...。" },
    ]
  },
  "1-27": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】验证 f(x)=x²-2x+3 在 [0,3] 上满足拉格朗日中值定理，并求 ξ。", answer: "f(3)=6, f(0)=3，(f(3)-f(0))/(3-0)=1。f'(x)=2x-2=1，x=3/2∈(0,3)。所以 ξ=3/2。" },
      { question: "【复习】证明：当 x>0 时，ln(1+x)<x。", answer: "令 f(t)=ln(1+t)，在 [0,x] 上用拉格朗日中值定理：ln(1+x)-ln1=x/(1+ξ)，0<ξ<x。所以 ln(1+x)=x/(1+ξ)<x。" },
      { question: "【复习】证明：当 x>0 时，x-x²/2<ln(1+x)。", answer: "泰勒展开 ln(1+x)=x-x²/2+x³/[3(1+ξ)³]>x-x²/2（因为余项为正）。" },
      { question: "【复习】证明：|sinx-siny|≤|x-y|。", answer: "由拉格朗日中值定理，sinx-siny=cosξ·(x-y)，所以 |sinx-siny|=|cosξ||x-y|≤|x-y|。" },
      { question: "【复习】用洛必达法则求 lim(x→0) (sinx-x)/x³。", answer: "=lim (cosx-1)/(3x²)=lim (-sinx)/(6x)=lim (-cosx)/6=-1/6。" },
      { question: "【复习】用洛必达法则求 lim(x→0⁺) xlnx。", answer: "=lim lnx/(1/x)=lim (1/x)/(-1/x²)=lim (-x)=0。" },
      { question: "【复习】写出 e^x 在 x=0 处的带拉格朗日余项的泰勒公式（到 n=3）。", answer: "e^x=1+x+x²/2+x³/6+e^ξ·x⁴/24，ξ 在 0 和 x 之间。" },
      { question: "【复习】写出 sinx 在 x=0 处的泰勒展开（到 x⁵ 项）。", answer: "sinx=x-x³/6+x⁵/120+o(x⁵)。" },
      { question: "【复习】写出 cosx 在 x=0 处的泰勒展开（到 x⁴ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)。" },
      { question: "【复习】用泰勒公式求 lim(x→0) (cosx-e^(-x²/2))/x⁴。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)；e^(-x²/2)=1-x²/2+x⁴/8+o(x⁴)；差=-x⁴/12+o(x⁴)；极限=-1/12。" },
    ]
  },
  "1-28": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "证明 f(x)=x³ 在 [0,1] 上满足罗尔定理的条件吗？", answer: "不满足。f(0)=0, f(1)=1≠0，不满足端点值相等的条件。" },
      { question: "设 f(x)=x(x-1)(x-2)，不求导证明 f'(x)=0 在 (0,1) 和 (1,2) 内各有一个根。", answer: "f(0)=f(1)=f(2)=0。在 [0,1] 和 [1,2] 上分别用罗尔定理，各存在 ξ₁∈(0,1) 和 ξ₂∈(1,2) 使 f'(ξ)=0。" },
      { question: "证明：当 x∈(0,π/2) 时，sinx>(2/π)x。", answer: "令 f(x)=sinx-(2/π)x。f(0)=f(π/2)=0。f''(x)=-sinx<0，f 在 (0,π/2) 上是凹函数，所以 f(x)>0。" },
      { question: "用柯西中值定理证明：若 f(0)=0 且 f' 递增，则 f(x)/x 也递增 (x>0)。", answer: "f(x)/x=(f(x)-f(0))/(x-0)=f'(ξ)（ξ∈(0,x)）。当 x 增大时，ξ 增大，f'(ξ) 增大。" },
      { question: "求 f(x)=e^x 的 n 阶麦克劳林展开。", answer: "e^x=1+x+x²/2!+x³/3!+...+xⁿ/n!+e^ξ·x^(n+1)/(n+1)!。" },
      { question: "用泰勒公式证明 e>1+1+1/2!+1/3!。", answer: "e=e¹=1+1+1/2+1/6+e^ξ/24>1+1+1/2+1/6=8/3≈2.667。" },
      { question: "证明：当 x→0 时，sinx=x-x³/6+O(x⁵)。", answer: "由泰勒公式 sinx=x-x³/3!+x⁵/5!-...，余项 R₅=x⁵/5!·sin(ξ+5π/2)=O(x⁵)。" },
      { question: "求 ln(1+x) 在 x=0 处的三阶泰勒展开。", answer: "ln(1+x)=x-x²/2+x³/3-x⁴/[4(1+ξ)⁴]，ξ∈(0,x)。" },
      { question: "用泰勒展开求 √e 的近似值（保留3位小数）。", answer: "e^(1/2)=1+1/2+(1/2)²/2+(1/2)³/6+...=1+0.5+0.125+0.0208+...≈1.646。" },
      { question: "证明：arctanx=x-x³/3+x⁵/5-... (|x|≤1)。", answer: "由 (arctanx)'=1/(1+x²)=1-x²+x⁴-...(|x|<1)，逐项积分得 arctanx=x-x³/3+x⁵/5-...。" },
    ]
  },
  "1-29": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "验证 f(x)=x²-2x+3 在 [0,3] 上满足拉格朗日中值定理，并求 ξ。", answer: "f(3)=6, f(0)=3，(f(3)-f(0))/(3-0)=1。f'(x)=2x-2=1，x=3/2∈(0,3)。所以 ξ=3/2。" },
      { question: "证明：当 x>0 时，ln(1+x)<x。", answer: "令 f(t)=ln(1+t)，在 [0,x] 上用拉格朗日中值定理：ln(1+x)-ln1=x/(1+ξ)，0<ξ<x。所以 ln(1+x)=x/(1+ξ)<x。" },
      { question: "证明：当 x>0 时，x-x²/2<ln(1+x)。", answer: "泰勒展开 ln(1+x)=x-x²/2+x³/[3(1+ξ)³]>x-x²/2（因为余项为正）。" },
      { question: "证明：|sinx-siny|≤|x-y|。", answer: "由拉格朗日中值定理，sinx-siny=cosξ·(x-y)，所以 |sinx-siny|=|cosξ||x-y|≤|x-y|。" },
      { question: "用洛必达法则求 lim(x→0) (sinx-x)/x³。", answer: "=lim (cosx-1)/(3x²)=lim (-sinx)/(6x)=lim (-cosx)/6=-1/6。" },
      { question: "用洛必达法则求 lim(x→0⁺) xlnx。", answer: "=lim lnx/(1/x)=lim (1/x)/(-1/x²)=lim (-x)=0。" },
      { question: "写出 e^x 在 x=0 处的带拉格朗日余项的泰勒公式（到 n=3）。", answer: "e^x=1+x+x²/2+x³/6+e^ξ·x⁴/24，ξ 在 0 和 x 之间。" },
      { question: "写出 sinx 在 x=0 处的泰勒展开（到 x⁵ 项）。", answer: "sinx=x-x³/6+x⁵/120+o(x⁵)。" },
      { question: "写出 cosx 在 x=0 处的泰勒展开（到 x⁴ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)。" },
      { question: "用泰勒公式求 lim(x→0) (cosx-e^(-x²/2))/x⁴。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)；e^(-x²/2)=1-x²/2+x⁴/8+o(x⁴)；差=-x⁴/12+o(x⁴)；极限=-1/12。" },
    ]
  },
  "1-30": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "证明 f(x)=x³ 在 [0,1] 上满足罗尔定理的条件吗？", answer: "不满足。f(0)=0, f(1)=1≠0，不满足端点值相等的条件。" },
      { question: "设 f(x)=x(x-1)(x-2)，不求导证明 f'(x)=0 在 (0,1) 和 (1,2) 内各有一个根。", answer: "f(0)=f(1)=f(2)=0。在 [0,1] 和 [1,2] 上分别用罗尔定理，各存在 ξ₁∈(0,1) 和 ξ₂∈(1,2) 使 f'(ξ)=0。" },
      { question: "证明：当 x∈(0,π/2) 时，sinx>(2/π)x。", answer: "令 f(x)=sinx-(2/π)x。f(0)=f(π/2)=0。f''(x)=-sinx<0，f 在 (0,π/2) 上是凹函数，所以 f(x)>0。" },
      { question: "用柯西中值定理证明：若 f(0)=0 且 f' 递增，则 f(x)/x 也递增 (x>0)。", answer: "f(x)/x=(f(x)-f(0))/(x-0)=f'(ξ)（ξ∈(0,x)）。当 x 增大时，ξ 增大，f'(ξ) 增大。" },
      { question: "求 f(x)=e^x 的 n 阶麦克劳林展开。", answer: "e^x=1+x+x²/2!+x³/3!+...+xⁿ/n!+e^ξ·x^(n+1)/(n+1)!。" },
      { question: "用泰勒公式证明 e>1+1+1/2!+1/3!。", answer: "e=e¹=1+1+1/2+1/6+e^ξ/24>1+1+1/2+1/6=8/3≈2.667。" },
      { question: "证明：当 x→0 时，sinx=x-x³/6+O(x⁵)。", answer: "由泰勒公式 sinx=x-x³/3!+x⁵/5!-...，余项 R₅=x⁵/5!·sin(ξ+5π/2)=O(x⁵)。" },
      { question: "求 ln(1+x) 在 x=0 处的三阶泰勒展开。", answer: "ln(1+x)=x-x²/2+x³/3-x⁴/[4(1+ξ)⁴]，ξ∈(0,x)。" },
      { question: "用泰勒展开求 √e 的近似值（保留3位小数）。", answer: "e^(1/2)=1+1/2+(1/2)²/2+(1/2)³/6+...=1+0.5+0.125+0.0208+...≈1.646。" },
      { question: "证明：arctanx=x-x³/3+x⁵/5-... (|x|≤1)。", answer: "由 (arctanx)'=1/(1+x²)=1-x²+x⁴-...(|x|<1)，逐项积分得 arctanx=x-x³/3+x⁵/5-...。" },
    ]
  },
  "1-31": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "验证 f(x)=x²-2x+3 在 [0,3] 上满足拉格朗日中值定理，并求 ξ。", answer: "f(3)=6, f(0)=3，(f(3)-f(0))/(3-0)=1。f'(x)=2x-2=1，x=3/2∈(0,3)。所以 ξ=3/2。" },
      { question: "证明：当 x>0 时，ln(1+x)<x。", answer: "令 f(t)=ln(1+t)，在 [0,x] 上用拉格朗日中值定理：ln(1+x)-ln1=x/(1+ξ)，0<ξ<x。所以 ln(1+x)=x/(1+ξ)<x。" },
      { question: "证明：当 x>0 时，x-x²/2<ln(1+x)。", answer: "泰勒展开 ln(1+x)=x-x²/2+x³/[3(1+ξ)³]>x-x²/2（因为余项为正）。" },
      { question: "证明：|sinx-siny|≤|x-y|。", answer: "由拉格朗日中值定理，sinx-siny=cosξ·(x-y)，所以 |sinx-siny|=|cosξ||x-y|≤|x-y|。" },
      { question: "用洛必达法则求 lim(x→0) (sinx-x)/x³。", answer: "=lim (cosx-1)/(3x²)=lim (-sinx)/(6x)=lim (-cosx)/6=-1/6。" },
      { question: "用洛必达法则求 lim(x→0⁺) xlnx。", answer: "=lim lnx/(1/x)=lim (1/x)/(-1/x²)=lim (-x)=0。" },
      { question: "写出 e^x 在 x=0 处的带拉格朗日余项的泰勒公式（到 n=3）。", answer: "e^x=1+x+x²/2+x³/6+e^ξ·x⁴/24，ξ 在 0 和 x 之间。" },
      { question: "写出 sinx 在 x=0 处的泰勒展开（到 x⁵ 项）。", answer: "sinx=x-x³/6+x⁵/120+o(x⁵)。" },
      { question: "写出 cosx 在 x=0 处的泰勒展开（到 x⁴ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)。" },
      { question: "用泰勒公式求 lim(x→0) (cosx-e^(-x²/2))/x⁴。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)；e^(-x²/2)=1-x²/2+x⁴/8+o(x⁴)；差=-x⁴/12+o(x⁴)；极限=-1/12。" },
    ]
  },
  "1-32": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "证明 f(x)=x³ 在 [0,1] 上满足罗尔定理的条件吗？", answer: "不满足。f(0)=0, f(1)=1≠0，不满足端点值相等的条件。" },
      { question: "设 f(x)=x(x-1)(x-2)，不求导证明 f'(x)=0 在 (0,1) 和 (1,2) 内各有一个根。", answer: "f(0)=f(1)=f(2)=0。在 [0,1] 和 [1,2] 上分别用罗尔定理，各存在 ξ₁∈(0,1) 和 ξ₂∈(1,2) 使 f'(ξ)=0。" },
      { question: "证明：当 x∈(0,π/2) 时，sinx>(2/π)x。", answer: "令 f(x)=sinx-(2/π)x。f(0)=f(π/2)=0。f''(x)=-sinx<0，f 在 (0,π/2) 上是凹函数，所以 f(x)>0。" },
      { question: "用柯西中值定理证明：若 f(0)=0 且 f' 递增，则 f(x)/x 也递增 (x>0)。", answer: "f(x)/x=(f(x)-f(0))/(x-0)=f'(ξ)（ξ∈(0,x)）。当 x 增大时，ξ 增大，f'(ξ) 增大。" },
      { question: "求 f(x)=e^x 的 n 阶麦克劳林展开。", answer: "e^x=1+x+x²/2!+x³/3!+...+xⁿ/n!+e^ξ·x^(n+1)/(n+1)!。" },
      { question: "用泰勒公式证明 e>1+1+1/2!+1/3!。", answer: "e=e¹=1+1+1/2+1/6+e^ξ/24>1+1+1/2+1/6=8/3≈2.667。" },
      { question: "证明：当 x→0 时，sinx=x-x³/6+O(x⁵)。", answer: "由泰勒公式 sinx=x-x³/3!+x⁵/5!-...，余项 R₅=x⁵/5!·sin(ξ+5π/2)=O(x⁵)。" },
      { question: "求 ln(1+x) 在 x=0 处的三阶泰勒展开。", answer: "ln(1+x)=x-x²/2+x³/3-x⁴/[4(1+ξ)⁴]，ξ∈(0,x)。" },
      { question: "用泰勒展开求 √e 的近似值（保留3位小数）。", answer: "e^(1/2)=1+1/2+(1/2)²/2+(1/2)³/6+...=1+0.5+0.125+0.0208+...≈1.646。" },
      { question: "证明：arctanx=x-x³/3+x⁵/5-... (|x|≤1)。", answer: "由 (arctanx)'=1/(1+x²)=1-x²+x⁴-...(|x|<1)，逐项积分得 arctanx=x-x³/3+x⁵/5-...。" },
    ]
  },
  "1-33": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "验证 f(x)=x²-2x+3 在 [0,3] 上满足拉格朗日中值定理，并求 ξ。", answer: "f(3)=6, f(0)=3，(f(3)-f(0))/(3-0)=1。f'(x)=2x-2=1，x=3/2∈(0,3)。所以 ξ=3/2。" },
      { question: "证明：当 x>0 时，ln(1+x)<x。", answer: "令 f(t)=ln(1+t)，在 [0,x] 上用拉格朗日中值定理：ln(1+x)-ln1=x/(1+ξ)，0<ξ<x。所以 ln(1+x)=x/(1+ξ)<x。" },
      { question: "证明：当 x>0 时，x-x²/2<ln(1+x)。", answer: "泰勒展开 ln(1+x)=x-x²/2+x³/[3(1+ξ)³]>x-x²/2（因为余项为正）。" },
      { question: "证明：|sinx-siny|≤|x-y|。", answer: "由拉格朗日中值定理，sinx-siny=cosξ·(x-y)，所以 |sinx-siny|=|cosξ||x-y|≤|x-y|。" },
      { question: "用洛必达法则求 lim(x→0) (sinx-x)/x³。", answer: "=lim (cosx-1)/(3x²)=lim (-sinx)/(6x)=lim (-cosx)/6=-1/6。" },
      { question: "用洛必达法则求 lim(x→0⁺) xlnx。", answer: "=lim lnx/(1/x)=lim (1/x)/(-1/x²)=lim (-x)=0。" },
      { question: "写出 e^x 在 x=0 处的带拉格朗日余项的泰勒公式（到 n=3）。", answer: "e^x=1+x+x²/2+x³/6+e^ξ·x⁴/24，ξ 在 0 和 x 之间。" },
      { question: "写出 sinx 在 x=0 处的泰勒展开（到 x⁵ 项）。", answer: "sinx=x-x³/6+x⁵/120+o(x⁵)。" },
      { question: "写出 cosx 在 x=0 处的泰勒展开（到 x⁴ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)。" },
      { question: "用泰勒公式求 lim(x→0) (cosx-e^(-x²/2))/x⁴。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)；e^(-x²/2)=1-x²/2+x⁴/8+o(x⁴)；差=-x⁴/12+o(x⁴)；极限=-1/12。" },
    ]
  },
  "1-34": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】证明 f(x)=x³ 在 [0,1] 上满足罗尔定理的条件吗？", answer: "不满足。f(0)=0, f(1)=1≠0，不满足端点值相等的条件。" },
      { question: "【复习】设 f(x)=x(x-1)(x-2)，不求导证明 f'(x)=0 在 (0,1) 和 (1,2) 内各有一个根。", answer: "f(0)=f(1)=f(2)=0。在 [0,1] 和 [1,2] 上分别用罗尔定理，各存在 ξ₁∈(0,1) 和 ξ₂∈(1,2) 使 f'(ξ)=0。" },
      { question: "【复习】证明：当 x∈(0,π/2) 时，sinx>(2/π)x。", answer: "令 f(x)=sinx-(2/π)x。f(0)=f(π/2)=0。f''(x)=-sinx<0，f 在 (0,π/2) 上是凹函数，所以 f(x)>0。" },
      { question: "【复习】用柯西中值定理证明：若 f(0)=0 且 f' 递增，则 f(x)/x 也递增 (x>0)。", answer: "f(x)/x=(f(x)-f(0))/(x-0)=f'(ξ)（ξ∈(0,x)）。当 x 增大时，ξ 增大，f'(ξ) 增大。" },
      { question: "【复习】求 f(x)=e^x 的 n 阶麦克劳林展开。", answer: "e^x=1+x+x²/2!+x³/3!+...+xⁿ/n!+e^ξ·x^(n+1)/(n+1)!。" },
      { question: "【复习】用泰勒公式证明 e>1+1+1/2!+1/3!。", answer: "e=e¹=1+1+1/2+1/6+e^ξ/24>1+1+1/2+1/6=8/3≈2.667。" },
      { question: "【复习】证明：当 x→0 时，sinx=x-x³/6+O(x⁵)。", answer: "由泰勒公式 sinx=x-x³/3!+x⁵/5!-...，余项 R₅=x⁵/5!·sin(ξ+5π/2)=O(x⁵)。" },
      { question: "【复习】求 ln(1+x) 在 x=0 处的三阶泰勒展开。", answer: "ln(1+x)=x-x²/2+x³/3-x⁴/[4(1+ξ)⁴]，ξ∈(0,x)。" },
      { question: "【复习】用泰勒展开求 √e 的近似值（保留3位小数）。", answer: "e^(1/2)=1+1/2+(1/2)²/2+(1/2)³/6+...=1+0.5+0.125+0.0208+...≈1.646。" },
      { question: "【复习】证明：arctanx=x-x³/3+x⁵/5-... (|x|≤1)。", answer: "由 (arctanx)'=1/(1+x²)=1-x²+x⁴-...(|x|<1)，逐项积分得 arctanx=x-x³/3+x⁵/5-...。" },
    ]
  },
  "2-0": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-1": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-2": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-3": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-4": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-5": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-6": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "【复习】求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "【复习】求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "【复习】求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "【复习】求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "【复习】求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "【复习】求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "【复习】求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "【复习】求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "【复习】求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-7": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-8": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-9": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-10": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-11": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-12": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-13": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "【复习】求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "【复习】求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "【复习】求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "【复习】求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "【复习】求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "【复习】求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "【复习】求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "【复习】求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "【复习】求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-14": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫x³dx。", answer: "=x⁴/4+C。" },
      { question: "求 ∫(1/x)dx。", answer: "=ln|x|+C。" },
      { question: "求 ∫e^(3x)dx。", answer: "=e^(3x)/3+C。" },
      { question: "求 ∫sin(2x)dx。", answer: "=-cos(2x)/2+C。" },
      { question: "求 ∫x·e^(x²)dx。", answer: "令 u=x²，du=2xdx，=∫e^u·du/2=e^u/2+C=e^(x²)/2+C。" },
      { question: "求 ∫lnx dx。", answer: "分部积分：=xlnx-∫x·(1/x)dx=xlnx-x+C。" },
      { question: "求 ∫x·sinx dx。", answer: "分部积分：=-xcosx+∫cosx dx=-xcosx+sinx+C。" },
      { question: "求 ∫e^x·sinx dx。", answer: "两次分部积分：=e^x(sinx-cosx)/2+C。" },
      { question: "求 ∫dx/√(1-x²)。", answer: "=arcsinx+C。" },
      { question: "求 ∫dx/(1+x²)。", answer: "=arctanx+C。" },
    ]
  },
  "2-15": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫dx/√(a²-x²) (a>0)。", answer: "=arcsin(x/a)+C。" },
      { question: "求 ∫x/√(1+x²) dx。", answer: "令 u=1+x²，=∫du/(2√u)=√u+C=√(1+x²)+C。" },
      { question: "求 ∫tanx dx。", answer: "=∫sinx/cosx dx=-ln|cosx|+C=ln|secx|+C。" },
      { question: "求 ∫secx dx。", answer: "=ln|secx+tanx|+C。" },
      { question: "求 ∫dx/(x²-a²)。", answer: "=1/(2a)·ln|(x-a)/(x+a)|+C。" },
      { question: "求 ∫√(a²-x²) dx。", answer: "令 x=asint，=a²/2·(t+sin2t/2)+C=x√(a²-x²)/2+a²/2·arcsin(x/a)+C。" },
      { question: "求 ∫x²·cosx dx。", answer: "分部积分两次：=x²sinx+2xcosx-2sinx+C。" },
      { question: "求 ∫dx/(x²+2x+5)。", answer: "=∫dx/[(x+1)²+4]=1/2·arctan[(x+1)/2]+C。" },
      { question: "求 ∫(2x+3)/(x²+1) dx。", answer: "=∫2x/(x²+1)dx+∫3/(x²+1)dx=ln(x²+1)+3arctanx+C。" },
      { question: "求 ∫sin³x dx。", answer: "=∫sinx(1-cos²x)dx=-cosx+cos³x/3+C。" },
    ]
  },
  "2-16": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-17": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-18": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-19": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-20": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "【复习】求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "【复习】求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "【复习】求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "【复习】求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "【复习】求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "【复习】求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "【复习】求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "【复习】求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "【复习】求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-21": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-22": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-23": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-24": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-25": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-26": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-27": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "【复习】求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "【复习】求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "【复习】求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "【复习】求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "【复习】求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "【复习】求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "【复习】求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "【复习】求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "【复习】求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-28": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-29": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-30": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-31": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-32": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "2-33": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∫₀^(π/4) tanx dx。", answer: "=[-ln|cosx|]₀^(π/4)=-ln(√2/2)+ln1=ln√2=1/2·ln2。" },
      { question: "求 ∫₋₂² √(4-x²) dx。", answer: "几何意义：上半圆面积，=π·2²/2=2π。" },
      { question: "求 ∫₀^(π/2) sin³x dx。", answer: "=2/3（Wallis 公式）。" },
      { question: "求 ∫₀^∞ e^(-x) dx。", answer: "=[-e^(-x)]₀^∞=0-(-1)=1。" },
      { question: "求 ∫₁^∞ dx/x²。", answer: "=[-1/x]₁^∞=0-(-1)=1。" },
      { question: "求 ∫₀¹ x·arctanx dx。", answer: "分部积分：=[x²/2·arctanx]₀¹-1/2∫₀¹x²/(1+x²)dx=π/8-1/2∫₀¹(1-1/(1+x²))dx=π/8-1/2+π/8=π/4-1/2。" },
      { question: "求 ∫₀^(2π) |sinx| dx。", answer: "=4∫₀^(π/2)sinx dx=4。" },
      { question: "求 ∫₀¹ x²/√(1-x²) dx。", answer: "令 x=sint，=∫₀^(π/2)sin²t dt=π/4。" },
      { question: "求 lim(n→∞) Σ(k=1 to n) k/n²。", answer: "=lim (1/n)Σ(k/n)·(1/n)=∫₀¹x dx=1/2。" },
      { question: "求 d/dx ∫₀^x sin(t²) dt。", answer: "由微积分基本定理，=sin(x²)。" },
    ]
  },
  "2-34": {
    links: [
      { name: "📖 同济《高等数学》第七版（上册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 ∫₀¹ x² dx。", answer: "=[x³/3]₀¹=1/3。" },
      { question: "【复习】求 ∫₀^(π/2) sinx dx。", answer: "=[-cosx]₀^(π/2)=0-(-1)=1。" },
      { question: "【复习】求 ∫₀¹ e^x dx。", answer: "=[e^x]₀¹=e-1。" },
      { question: "【复习】求 ∫₋₁¹ x³ dx。", answer: "x³ 是奇函数，对称区间积分为0。" },
      { question: "【复习】求 ∫₋₁¹ (x²+x³) dx。", answer: "x³ 部分为0，=∫₋₁¹ x²dx=[x³/3]₋₁¹=2/3。" },
      { question: "【复习】求 ∫₀^(π/2) sin²x dx。", answer: "=∫₀^(π/2)(1-cos2x)/2 dx=[x/2-sin2x/4]₀^(π/2)=π/4。" },
      { question: "【复习】求 ∫₀¹ x·e^x dx。", answer: "分部积分：=[xe^x]₀¹-∫₀¹e^xdx=e-(e-1)=1。" },
      { question: "【复习】求 ∫₀^(π/2) x·sinx dx。", answer: "=[-xcosx]₀^(π/2)+∫₀^(π/2)cosxdx=0+[sinx]₀^(π/2)=1。" },
      { question: "【复习】求 ∫₀¹ dx/(1+x²)。", answer: "=[arctanx]₀¹=π/4。" },
      { question: "【复习】求 ∫₀¹ x·ln(1+x) dx。", answer: "分部积分：=[x²/2·ln(1+x)]₀¹-∫₀¹x²/[2(1+x)]dx=1/2·ln2-1/2∫₀¹(x-1+1/(1+x))dx=...=1/4。" },
    ]
  },
  "3-0": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-1": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-2": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-3": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-4": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-5": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-6": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "【复习】设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "【复习】证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "【复习】设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "【复习】设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "【复习】求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "【复习】设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "【复习】求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "【复习】设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "【复习】设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-7": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-8": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-9": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-10": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-11": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-12": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-13": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "【复习】设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "【复习】设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "【复习】设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "【复习】设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "【复习】设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "【复习】设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "【复习】设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "【复习】设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "【复习】设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-14": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-15": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "设 z=x²y+xy²，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2xy+y²；∂z/∂y=x²+2xy。" },
      { question: "设 z=e^(xy)，求 ∂z/∂x。", answer: "∂z/∂x=y·e^(xy)。" },
      { question: "设 z=ln(x²+y²)，求 ∂z/∂x 和 ∂z/∂y。", answer: "∂z/∂x=2x/(x²+y²)；∂z/∂y=2y/(x²+y²)。" },
      { question: "设 u=x²+y²+z²，求 ∂u/∂x+∂u/∂y+∂u/∂z。", answer: "=2x+2y+2z=2(x+y+z)。" },
      { question: "设 z=f(x²+y²)，求 ∂z/∂x。", answer: "∂z/∂x=f'(x²+y²)·2x。" },
      { question: "设 z=f(x,y)，x=t², y=t³，求 dz/dt。", answer: "dz/dt=∂z/∂x·dx/dt+∂z/∂y·dy/dt=2t·∂z/∂x+3t²·∂z/∂y。" },
      { question: "设 x²+y²+z²=1，求 ∂z/∂x。", answer: "2x+2z·∂z/∂x=0，∂z/∂x=-x/z。" },
      { question: "设 z=x³+y³-3xy，求极值点。", answer: "∂z/∂x=3x²-3y=0；∂z/∂y=3y²-3x=0。解得 (0,0) 和 (1,1)。(1,1) 是极小值点，z=-1；(0,0) 不是极值点。" },
      { question: "设 z=xy 在点 (1,2) 处的全微分。", answer: "∂z/∂x=y=2；∂z/∂y=x=1。dz=2dx+dy。" },
      { question: "设 f(x,y)=x²y，求 f_xy。", answer: "f_x=2xy；f_xy=2x。" },
    ]
  },
  "3-16": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求函数 u=xyz 在点 (1,2,3) 沿方向 (1,1,1) 的方向导数。", answer: "∇u=(yz,xz,xy)=(6,3,2)。方向余弦 l=(1,1,1)/√3。∂u/∂l=(6+3+2)/√3=11/√3。" },
      { question: "设 z=sin(x²+y²)，求 ∂²z/∂x²。", answer: "∂z/∂x=2xcos(x²+y²)；∂²z/∂x²=2cos(x²+y²)-4x²sin(x²+y²)。" },
      { question: "证明：若 z=f(x+y)+g(x-y)，则 ∂²z/∂x²=∂²z/∂y²。", answer: "∂z/∂x=f'+g'；∂²z/∂x²=f''+g''；∂z/∂y=f'-g'；∂²z/∂y²=f''+g''。相等。" },
      { question: "设 u=f(x/y,y/z,z/x)，求 x∂u/∂x+y∂u/∂y+z∂u/∂z。", answer: "=0（齐次函数欧拉定理）。" },
      { question: "设 z=x²f(y/x)，求 x∂z/∂x+y∂z/∂y。", answer: "=2z（齐次函数，次数为2）。" },
      { question: "求曲面 z=x²+y² 在点 (1,1,2) 处的切平面方程。", answer: "n=(∂z/∂x,∂z/∂y,-1)=(2,2,-1)。切平面：2(x-1)+2(y-1)-(z-2)=0，即 2x+2y-z=2。" },
      { question: "设 z=f(u,v)，u=x+y，v=xy，求 ∂z/∂x。", answer: "∂z/∂x=∂z/∂u·∂u/∂x+∂z/∂v·∂v/∂x=f_u+y·f_v。" },
      { question: "求函数 f(x,y)=x³-3x+y² 的极值。", answer: "f_x=3x²-3=0，x=±1；f_y=2y=0，y=0。f_xx=6x，f_yy=2，f_xy=0。在 (1,0)：AC-B²=12>0,A>0，极小值 f=-2。在 (-1,0)：AC-B²=-12<0，不是极值点。" },
      { question: "设 x=u+v, y=uv, z=u²+v²，求 ∂z/∂x。", answer: "z=(u+v)²-2uv=x²-2y，∂z/∂x=2x。" },
      { question: "设 F(x,y,z)=0 确定 z=z(x,y)，证明 ∂x/∂y·∂y/∂z·∂z/∂x=-1。", answer: "由隐函数求导公式，∂x/∂y=-F_y/F_x，∂y/∂z=-F_z/F_y，∂z/∂x=-F_x/F_z。相乘得 -1。" },
    ]
  },
  "3-17": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
    ]
  },
  "3-18": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
    ]
  },
  "3-19": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
    ]
  },
  "3-20": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "【复习】求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "【复习】求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "【复习】求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "【复习】求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "【复习】求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "【复习】求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "【复习】改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "【复习】求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "【复习】求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
    ]
  },
  "3-21": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
    ]
  },
  "3-22": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
    ]
  },
  "3-23": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
    ]
  },
  "3-24": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
    ]
  },
  "3-25": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
    ]
  },
  "3-26": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
    ]
  },
  "3-27": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "【复习】求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "【复习】求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "【复习】改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "【复习】求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "【复习】求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "【复习】证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "【复习】求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "【复习】求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "【复习】求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
    ]
  },
  "3-28": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
    ]
  },
  "3-29": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
    ]
  },
  "3-30": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
    ]
  },
  "3-31": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
    ]
  },
  "3-32": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
      { question: "改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
    ]
  },
  "3-33": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
      { question: "求 ∬_D (x²/a²+y²/b²)dσ，D: x²/a²+y²/b²≤1。", answer: "广义极坐标：x=arcosθ,y=brsinθ，J=abr。=∫₀^(2π)∫₀¹ r²·abr dr dθ=2πab·1/4=πab/2。" },
      { question: "求 ∭_Ω √(x²+y²+z²)dV，Ω: x²+y²+z²≤R²。", answer: "球坐标：=∫₀^(2π)∫₀^π∫₀^R r·r²sinφ dr dφ dθ=2π·2·R⁴/4=πR⁴。" },
      { question: "证明 ∬_D f(x+y)dσ=∫₋₁¹ f(u)du，D: |x|+|y|≤1。", answer: "令 u=x+y，v=x-y，|J|=1/2。区域变为 |u|≤1,|v|≤1。=1/2∫₋₁¹∫₋₁¹f(u)dvdu=∫₋₁¹f(u)du。" },
      { question: "求 ∬_D (x+y)dσ，D=[0,1]×[0,1]。", answer: "=∫₀¹∫₀¹(x+y)dxdy=∫₀¹(1/2+y)dy=1/2+1/2=1。" },
      { question: "求 ∬_D xydσ，D 由 x=0,y=0,x+y=1 围成。", answer: "=∫₀¹∫₀^(1-x)xy dy dx=∫₀¹x·(1-x)²/2 dx=1/24。" },
      { question: "求 ∬_D √(x²+y²)dσ，D: x²+y²≤1。", answer: "极坐标：=∫₀^(2π)∫₀¹ r·r dr dθ=2π·[r³/3]₀¹=2π/3。" },
      { question: "求 ∬_D e^(x²+y²)dσ，D: x²+y²≤R²。", answer: "极坐标：=∫₀^(2π)∫₀^R e^(r²)·r dr dθ=2π·[e^(r²)/2]₀^R=π(e^(R²)-1)。" },
      { question: "求 ∭_Ω z dV，Ω 由 x²+y²+z²≤1, z≥0 围成。", answer: "球坐标：=∫₀^(2π)∫₀^(π/2)∫₀¹ rcosφ·r²sinφ dr dφ dθ=2π·[sin²φ/2]₀^(π/2)·[r⁴/4]₀¹=π/4。" },
      { question: "求 ∬_D (x²+y²)dσ，D: x²+y²≤2x。", answer: "极坐标：x²+y²=2x → r=2cosθ，θ∈[-π/2,π/2]。=∫₋π/2^π/2∫₀^(2cosθ) r²·r dr dθ=...=3π/2。" },
    ]
  },
  "3-34": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】改变积分次序：∫₀¹∫_x^1 f(x,y)dydx。", answer: "原区域：0≤x≤1，x≤y≤1。交换后：0≤y≤1，0≤x≤y。=∫₀¹∫₀^y f(x,y)dxdy。" },
      { question: "【复习】求 ∬_D |y-x²|dσ，D=[0,1]×[0,1]。", answer: "分区域：y<x² 时积分 -(y-x²)，y>x² 时积分 (y-x²)。=∫₀¹[∫₀^x²(x²-y)dy+∫_x²¹(y-x²)dy]dx=11/30。" },
      { question: "【复习】求 ∭_Ω (x²+y²)dV，Ω: x²+y²≤z≤1。", answer: "柱坐标：=∫₀^(2π)∫₀¹∫_r²¹ r²·r dz dr dθ=2π∫₀¹r³(1-r²)dr=2π(1/4-1/6)=π/6。" },
      { question: "【复习】求 ∬_D x dσ，D 由 y=x, y=2x, x=1 围成。", answer: "=∫₀¹∫_x^(2x) x dy dx=∫₀¹x²dx=1/3。" },
      { question: "【复习】用格林公式求 ∮_L (x²-y)dx+(y²+x)dy，L: x²+y²=1（逆时针）。", answer: "P=x²-y，Q=y²+x，∂Q/∂x-∂P/∂y=1-(-1)=2。=∬_D 2dσ=2π。" },
      { question: "【复习】用格林公式求 ∮_L xdy-ydx，L 为三角形 O(0,0),A(1,0),B(0,1) 边界（逆时针）。", answer: "P=-y，Q=x，∂Q/∂x-∂P/∂y=2。=∬_D 2dσ=2×(1/2)=1。" },
      { question: "【复习】求 ∬_D e^(-x²-y²)sin(x²+y²)dσ，D: x²+y²≤4。", answer: "极坐标：=∫₀^(2π)∫₀² e^(-r²)sin(r²)·r dr dθ。令 u=r²，=π∫₀⁴ e^(-u)sinu du=π(1-e⁻⁴(cos4+sin4))/2。" },
      { question: "【复习】求 ∭_Ω xdV，Ω 由 x+y+z≤1, x,y,z≥0 围成。", answer: "=∫₀¹∫₀^(1-x)∫₀^(1-x-y) x dz dy dx=1/24。" },
      { question: "【复习】求 ∬_D (x+y)dσ，D: (x-1)²+(y-1)²≤1。", answer: "平移：令 u=x-1,v=y-1。=∬_(u²+v²≤1)(u+v+2)dudv=0+0+2π=2π。" },
      { question: "【复习】改变积分次序：∫₀^π∫₀^sinx f(x,y)dydx。", answer: "=∫₀¹∫_arcsiny^(π-arcsiny) f(x,y)dxdy。" },
    ]
  },
  "4-0": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "判断 Σ 1/n² 的敛散性。", answer: "收敛。p-级数，p=2>1。" },
      { question: "判断 Σ 1/√n 的敛散性。", answer: "发散。p-级数，p=1/2<1。" },
      { question: "判断 Σ 1/(n²+1) 的敛散性。", answer: "收敛。1/(n²+1)<1/n²，比较判别法。" },
      { question: "判断 Σ n/2ⁿ 的敛散性。", answer: "收敛。比值判别法：lim (n+1)/2^(n+1) · 2ⁿ/n = lim (n+1)/(2n)=1/2<1。" },
      { question: "判断 Σ n!/nⁿ 的敛散性。", answer: "收敛。比值判别法或根值判别法。" },
      { question: "判断 Σ (-1)ⁿ/n 的敛散性（绝对/条件）。", answer: "由莱布尼茨判别法，交错级数收敛。但 Σ 1/n 发散，所以条件收敛。" },
      { question: "判断 Σ (-1)ⁿ/√n 的敛散性。", answer: "条件收敛。1/√n 递减趋于0，交错级数收敛；但 Σ 1/√n 发散。" },
      { question: "求幂级数 Σ xⁿ/n 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim (n+1)/n=1。" },
      { question: "求幂级数 Σ n!xⁿ 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim n!/(n+1)!=lim 1/(n+1)=0。仅在 x=0 收敛。" },
      { question: "求 Σ xⁿ/n! 的收敛域。", answer: "R=lim (n+1)!/n!=∞。收敛域为 (-∞,+∞)。" },
    ]
  },
  "4-1": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "将 f(x)=1/(1-x) 展开为幂级数。", answer: "=Σ xⁿ (n=0 到 ∞)，|x|<1。" },
      { question: "将 f(x)=ln(1+x) 展开为幂级数。", answer: "=Σ (-1)^(n-1)·xⁿ/n (n=1 到 ∞)，-1<x≤1。" },
      { question: "将 f(x)=e^x 展开为幂级数。", answer: "=Σ xⁿ/n! (n=0 到 ∞)，x∈R。" },
      { question: "将 f(x)=sinx 展开为幂级数。", answer: "=Σ (-1)ⁿ·x^(2n+1)/(2n+1)! (n=0 到 ∞)，x∈R。" },
      { question: "求 Σ xⁿ/n 的和函数 S(x)。", answer: "S'(x)=Σ x^(n-1)=1/(1-x)，S(x)=-ln(1-x)，|x|<1。" },
      { question: "求 Σ nxⁿ 的和函数。", answer: "=x/(1-x)²，|x|<1。" },
      { question: "判断 Σ (1+1/n)^(-n²) 的敛散性。", answer: "根值判别法：ⁿ√aₙ=(1+1/n)^(-n)→e^(-1)<1，收敛。" },
      { question: "证明：若 Σ aₙ² 和 Σ bₙ² 收敛，则 Σ aₙbₙ 绝对收敛。", answer: "由柯西不等式 |aₙbₙ|≤(aₙ²+bₙ²)/2，比较判别法。" },
      { question: "求 Σ 1/[n(n+1)] 的和。", answer: "=Σ (1/n-1/(n+1))=1。" },
      { question: "求 f(x)=x·cosx 的麦克劳林展开（到 x⁵ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)，xcosx=x-x³/2+x⁵/24+o(x⁵)。" },
    ]
  },
  "4-2": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "判断 Σ 1/n² 的敛散性。", answer: "收敛。p-级数，p=2>1。" },
      { question: "判断 Σ 1/√n 的敛散性。", answer: "发散。p-级数，p=1/2<1。" },
      { question: "判断 Σ 1/(n²+1) 的敛散性。", answer: "收敛。1/(n²+1)<1/n²，比较判别法。" },
      { question: "判断 Σ n/2ⁿ 的敛散性。", answer: "收敛。比值判别法：lim (n+1)/2^(n+1) · 2ⁿ/n = lim (n+1)/(2n)=1/2<1。" },
      { question: "判断 Σ n!/nⁿ 的敛散性。", answer: "收敛。比值判别法或根值判别法。" },
      { question: "判断 Σ (-1)ⁿ/n 的敛散性（绝对/条件）。", answer: "由莱布尼茨判别法，交错级数收敛。但 Σ 1/n 发散，所以条件收敛。" },
      { question: "判断 Σ (-1)ⁿ/√n 的敛散性。", answer: "条件收敛。1/√n 递减趋于0，交错级数收敛；但 Σ 1/√n 发散。" },
      { question: "求幂级数 Σ xⁿ/n 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim (n+1)/n=1。" },
      { question: "求幂级数 Σ n!xⁿ 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim n!/(n+1)!=lim 1/(n+1)=0。仅在 x=0 收敛。" },
      { question: "求 Σ xⁿ/n! 的收敛域。", answer: "R=lim (n+1)!/n!=∞。收敛域为 (-∞,+∞)。" },
    ]
  },
  "4-3": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "将 f(x)=1/(1-x) 展开为幂级数。", answer: "=Σ xⁿ (n=0 到 ∞)，|x|<1。" },
      { question: "将 f(x)=ln(1+x) 展开为幂级数。", answer: "=Σ (-1)^(n-1)·xⁿ/n (n=1 到 ∞)，-1<x≤1。" },
      { question: "将 f(x)=e^x 展开为幂级数。", answer: "=Σ xⁿ/n! (n=0 到 ∞)，x∈R。" },
      { question: "将 f(x)=sinx 展开为幂级数。", answer: "=Σ (-1)ⁿ·x^(2n+1)/(2n+1)! (n=0 到 ∞)，x∈R。" },
      { question: "求 Σ xⁿ/n 的和函数 S(x)。", answer: "S'(x)=Σ x^(n-1)=1/(1-x)，S(x)=-ln(1-x)，|x|<1。" },
      { question: "求 Σ nxⁿ 的和函数。", answer: "=x/(1-x)²，|x|<1。" },
      { question: "判断 Σ (1+1/n)^(-n²) 的敛散性。", answer: "根值判别法：ⁿ√aₙ=(1+1/n)^(-n)→e^(-1)<1，收敛。" },
      { question: "证明：若 Σ aₙ² 和 Σ bₙ² 收敛，则 Σ aₙbₙ 绝对收敛。", answer: "由柯西不等式 |aₙbₙ|≤(aₙ²+bₙ²)/2，比较判别法。" },
      { question: "求 Σ 1/[n(n+1)] 的和。", answer: "=Σ (1/n-1/(n+1))=1。" },
      { question: "求 f(x)=x·cosx 的麦克劳林展开（到 x⁵ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)，xcosx=x-x³/2+x⁵/24+o(x⁵)。" },
    ]
  },
  "4-4": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "判断 Σ 1/n² 的敛散性。", answer: "收敛。p-级数，p=2>1。" },
      { question: "判断 Σ 1/√n 的敛散性。", answer: "发散。p-级数，p=1/2<1。" },
      { question: "判断 Σ 1/(n²+1) 的敛散性。", answer: "收敛。1/(n²+1)<1/n²，比较判别法。" },
      { question: "判断 Σ n/2ⁿ 的敛散性。", answer: "收敛。比值判别法：lim (n+1)/2^(n+1) · 2ⁿ/n = lim (n+1)/(2n)=1/2<1。" },
      { question: "判断 Σ n!/nⁿ 的敛散性。", answer: "收敛。比值判别法或根值判别法。" },
      { question: "判断 Σ (-1)ⁿ/n 的敛散性（绝对/条件）。", answer: "由莱布尼茨判别法，交错级数收敛。但 Σ 1/n 发散，所以条件收敛。" },
      { question: "判断 Σ (-1)ⁿ/√n 的敛散性。", answer: "条件收敛。1/√n 递减趋于0，交错级数收敛；但 Σ 1/√n 发散。" },
      { question: "求幂级数 Σ xⁿ/n 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim (n+1)/n=1。" },
      { question: "求幂级数 Σ n!xⁿ 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim n!/(n+1)!=lim 1/(n+1)=0。仅在 x=0 收敛。" },
      { question: "求 Σ xⁿ/n! 的收敛域。", answer: "R=lim (n+1)!/n!=∞。收敛域为 (-∞,+∞)。" },
    ]
  },
  "4-5": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "将 f(x)=1/(1-x) 展开为幂级数。", answer: "=Σ xⁿ (n=0 到 ∞)，|x|<1。" },
      { question: "将 f(x)=ln(1+x) 展开为幂级数。", answer: "=Σ (-1)^(n-1)·xⁿ/n (n=1 到 ∞)，-1<x≤1。" },
      { question: "将 f(x)=e^x 展开为幂级数。", answer: "=Σ xⁿ/n! (n=0 到 ∞)，x∈R。" },
      { question: "将 f(x)=sinx 展开为幂级数。", answer: "=Σ (-1)ⁿ·x^(2n+1)/(2n+1)! (n=0 到 ∞)，x∈R。" },
      { question: "求 Σ xⁿ/n 的和函数 S(x)。", answer: "S'(x)=Σ x^(n-1)=1/(1-x)，S(x)=-ln(1-x)，|x|<1。" },
      { question: "求 Σ nxⁿ 的和函数。", answer: "=x/(1-x)²，|x|<1。" },
      { question: "判断 Σ (1+1/n)^(-n²) 的敛散性。", answer: "根值判别法：ⁿ√aₙ=(1+1/n)^(-n)→e^(-1)<1，收敛。" },
      { question: "证明：若 Σ aₙ² 和 Σ bₙ² 收敛，则 Σ aₙbₙ 绝对收敛。", answer: "由柯西不等式 |aₙbₙ|≤(aₙ²+bₙ²)/2，比较判别法。" },
      { question: "求 Σ 1/[n(n+1)] 的和。", answer: "=Σ (1/n-1/(n+1))=1。" },
      { question: "求 f(x)=x·cosx 的麦克劳林展开（到 x⁵ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)，xcosx=x-x³/2+x⁵/24+o(x⁵)。" },
    ]
  },
  "4-6": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】判断 Σ 1/n² 的敛散性。", answer: "收敛。p-级数，p=2>1。" },
      { question: "【复习】判断 Σ 1/√n 的敛散性。", answer: "发散。p-级数，p=1/2<1。" },
      { question: "【复习】判断 Σ 1/(n²+1) 的敛散性。", answer: "收敛。1/(n²+1)<1/n²，比较判别法。" },
      { question: "【复习】判断 Σ n/2ⁿ 的敛散性。", answer: "收敛。比值判别法：lim (n+1)/2^(n+1) · 2ⁿ/n = lim (n+1)/(2n)=1/2<1。" },
      { question: "【复习】判断 Σ n!/nⁿ 的敛散性。", answer: "收敛。比值判别法或根值判别法。" },
      { question: "【复习】判断 Σ (-1)ⁿ/n 的敛散性（绝对/条件）。", answer: "由莱布尼茨判别法，交错级数收敛。但 Σ 1/n 发散，所以条件收敛。" },
      { question: "【复习】判断 Σ (-1)ⁿ/√n 的敛散性。", answer: "条件收敛。1/√n 递减趋于0，交错级数收敛；但 Σ 1/√n 发散。" },
      { question: "【复习】求幂级数 Σ xⁿ/n 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim (n+1)/n=1。" },
      { question: "【复习】求幂级数 Σ n!xⁿ 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim n!/(n+1)!=lim 1/(n+1)=0。仅在 x=0 收敛。" },
      { question: "【复习】求 Σ xⁿ/n! 的收敛域。", answer: "R=lim (n+1)!/n!=∞。收敛域为 (-∞,+∞)。" },
    ]
  },
  "4-7": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "将 f(x)=1/(1-x) 展开为幂级数。", answer: "=Σ xⁿ (n=0 到 ∞)，|x|<1。" },
      { question: "将 f(x)=ln(1+x) 展开为幂级数。", answer: "=Σ (-1)^(n-1)·xⁿ/n (n=1 到 ∞)，-1<x≤1。" },
      { question: "将 f(x)=e^x 展开为幂级数。", answer: "=Σ xⁿ/n! (n=0 到 ∞)，x∈R。" },
      { question: "将 f(x)=sinx 展开为幂级数。", answer: "=Σ (-1)ⁿ·x^(2n+1)/(2n+1)! (n=0 到 ∞)，x∈R。" },
      { question: "求 Σ xⁿ/n 的和函数 S(x)。", answer: "S'(x)=Σ x^(n-1)=1/(1-x)，S(x)=-ln(1-x)，|x|<1。" },
      { question: "求 Σ nxⁿ 的和函数。", answer: "=x/(1-x)²，|x|<1。" },
      { question: "判断 Σ (1+1/n)^(-n²) 的敛散性。", answer: "根值判别法：ⁿ√aₙ=(1+1/n)^(-n)→e^(-1)<1，收敛。" },
      { question: "证明：若 Σ aₙ² 和 Σ bₙ² 收敛，则 Σ aₙbₙ 绝对收敛。", answer: "由柯西不等式 |aₙbₙ|≤(aₙ²+bₙ²)/2，比较判别法。" },
      { question: "求 Σ 1/[n(n+1)] 的和。", answer: "=Σ (1/n-1/(n+1))=1。" },
      { question: "求 f(x)=x·cosx 的麦克劳林展开（到 x⁵ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)，xcosx=x-x³/2+x⁵/24+o(x⁵)。" },
    ]
  },
  "4-8": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "判断 Σ 1/n² 的敛散性。", answer: "收敛。p-级数，p=2>1。" },
      { question: "判断 Σ 1/√n 的敛散性。", answer: "发散。p-级数，p=1/2<1。" },
      { question: "判断 Σ 1/(n²+1) 的敛散性。", answer: "收敛。1/(n²+1)<1/n²，比较判别法。" },
      { question: "判断 Σ n/2ⁿ 的敛散性。", answer: "收敛。比值判别法：lim (n+1)/2^(n+1) · 2ⁿ/n = lim (n+1)/(2n)=1/2<1。" },
      { question: "判断 Σ n!/nⁿ 的敛散性。", answer: "收敛。比值判别法或根值判别法。" },
      { question: "判断 Σ (-1)ⁿ/n 的敛散性（绝对/条件）。", answer: "由莱布尼茨判别法，交错级数收敛。但 Σ 1/n 发散，所以条件收敛。" },
      { question: "判断 Σ (-1)ⁿ/√n 的敛散性。", answer: "条件收敛。1/√n 递减趋于0，交错级数收敛；但 Σ 1/√n 发散。" },
      { question: "求幂级数 Σ xⁿ/n 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim (n+1)/n=1。" },
      { question: "求幂级数 Σ n!xⁿ 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim n!/(n+1)!=lim 1/(n+1)=0。仅在 x=0 收敛。" },
      { question: "求 Σ xⁿ/n! 的收敛域。", answer: "R=lim (n+1)!/n!=∞。收敛域为 (-∞,+∞)。" },
    ]
  },
  "4-9": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "将 f(x)=1/(1-x) 展开为幂级数。", answer: "=Σ xⁿ (n=0 到 ∞)，|x|<1。" },
      { question: "将 f(x)=ln(1+x) 展开为幂级数。", answer: "=Σ (-1)^(n-1)·xⁿ/n (n=1 到 ∞)，-1<x≤1。" },
      { question: "将 f(x)=e^x 展开为幂级数。", answer: "=Σ xⁿ/n! (n=0 到 ∞)，x∈R。" },
      { question: "将 f(x)=sinx 展开为幂级数。", answer: "=Σ (-1)ⁿ·x^(2n+1)/(2n+1)! (n=0 到 ∞)，x∈R。" },
      { question: "求 Σ xⁿ/n 的和函数 S(x)。", answer: "S'(x)=Σ x^(n-1)=1/(1-x)，S(x)=-ln(1-x)，|x|<1。" },
      { question: "求 Σ nxⁿ 的和函数。", answer: "=x/(1-x)²，|x|<1。" },
      { question: "判断 Σ (1+1/n)^(-n²) 的敛散性。", answer: "根值判别法：ⁿ√aₙ=(1+1/n)^(-n)→e^(-1)<1，收敛。" },
      { question: "证明：若 Σ aₙ² 和 Σ bₙ² 收敛，则 Σ aₙbₙ 绝对收敛。", answer: "由柯西不等式 |aₙbₙ|≤(aₙ²+bₙ²)/2，比较判别法。" },
      { question: "求 Σ 1/[n(n+1)] 的和。", answer: "=Σ (1/n-1/(n+1))=1。" },
      { question: "求 f(x)=x·cosx 的麦克劳林展开（到 x⁵ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)，xcosx=x-x³/2+x⁵/24+o(x⁵)。" },
    ]
  },
  "4-10": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "判断 Σ 1/n² 的敛散性。", answer: "收敛。p-级数，p=2>1。" },
      { question: "判断 Σ 1/√n 的敛散性。", answer: "发散。p-级数，p=1/2<1。" },
      { question: "判断 Σ 1/(n²+1) 的敛散性。", answer: "收敛。1/(n²+1)<1/n²，比较判别法。" },
      { question: "判断 Σ n/2ⁿ 的敛散性。", answer: "收敛。比值判别法：lim (n+1)/2^(n+1) · 2ⁿ/n = lim (n+1)/(2n)=1/2<1。" },
      { question: "判断 Σ n!/nⁿ 的敛散性。", answer: "收敛。比值判别法或根值判别法。" },
      { question: "判断 Σ (-1)ⁿ/n 的敛散性（绝对/条件）。", answer: "由莱布尼茨判别法，交错级数收敛。但 Σ 1/n 发散，所以条件收敛。" },
      { question: "判断 Σ (-1)ⁿ/√n 的敛散性。", answer: "条件收敛。1/√n 递减趋于0，交错级数收敛；但 Σ 1/√n 发散。" },
      { question: "求幂级数 Σ xⁿ/n 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim (n+1)/n=1。" },
      { question: "求幂级数 Σ n!xⁿ 的收敛半径。", answer: "R=lim |aₙ/aₙ₊₁|=lim n!/(n+1)!=lim 1/(n+1)=0。仅在 x=0 收敛。" },
      { question: "求 Σ xⁿ/n! 的收敛域。", answer: "R=lim (n+1)!/n!=∞。收敛域为 (-∞,+∞)。" },
    ]
  },
  "4-11": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "将 f(x)=1/(1-x) 展开为幂级数。", answer: "=Σ xⁿ (n=0 到 ∞)，|x|<1。" },
      { question: "将 f(x)=ln(1+x) 展开为幂级数。", answer: "=Σ (-1)^(n-1)·xⁿ/n (n=1 到 ∞)，-1<x≤1。" },
      { question: "将 f(x)=e^x 展开为幂级数。", answer: "=Σ xⁿ/n! (n=0 到 ∞)，x∈R。" },
      { question: "将 f(x)=sinx 展开为幂级数。", answer: "=Σ (-1)ⁿ·x^(2n+1)/(2n+1)! (n=0 到 ∞)，x∈R。" },
      { question: "求 Σ xⁿ/n 的和函数 S(x)。", answer: "S'(x)=Σ x^(n-1)=1/(1-x)，S(x)=-ln(1-x)，|x|<1。" },
      { question: "求 Σ nxⁿ 的和函数。", answer: "=x/(1-x)²，|x|<1。" },
      { question: "判断 Σ (1+1/n)^(-n²) 的敛散性。", answer: "根值判别法：ⁿ√aₙ=(1+1/n)^(-n)→e^(-1)<1，收敛。" },
      { question: "证明：若 Σ aₙ² 和 Σ bₙ² 收敛，则 Σ aₙbₙ 绝对收敛。", answer: "由柯西不等式 |aₙbₙ|≤(aₙ²+bₙ²)/2，比较判别法。" },
      { question: "求 Σ 1/[n(n+1)] 的和。", answer: "=Σ (1/n-1/(n+1))=1。" },
      { question: "求 f(x)=x·cosx 的麦克劳林展开（到 x⁵ 项）。", answer: "cosx=1-x²/2+x⁴/24+o(x⁴)，xcosx=x-x³/2+x⁵/24+o(x⁵)。" },
    ]
  },
  "4-12": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-13": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "【复习】解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "【复习】解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "【复习】验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "【复习】解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "【复习】解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "【复习】解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "【复习】求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "【复习】解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "【复习】用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-14": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-15": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-16": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-17": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-18": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-19": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-20": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "【复习】解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "【复习】解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "【复习】解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "【复习】解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "【复习】解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "【复习】解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "【复习】解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "【复习】解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "【复习】解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-21": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-22": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-23": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-24": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-25": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "4-26": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "解方程 dy/dx=2x。", answer: "y=x²+C。" },
      { question: "解方程 dy/dx=y/x。", answer: "dy/y=dx/x，ln|y|=ln|x|+C，y=Cx。" },
      { question: "解方程 dy/dx+y=0。", answer: "dy/y=-dx，ln|y|=-x+C，y=Ce^(-x)。" },
      { question: "解方程 dy/dx=xy。", answer: "dy/y=xdx，ln|y|=x²/2+C，y=Ce^(x²/2)。" },
      { question: "解方程 dy/dx+y/x=1。", answer: "一阶线性，P=1/x,Q=1。积分因子 μ=e^(∫1/xdx)=x。y=(∫x·1dx+C)/x=(x²/2+C)/x=x/2+C/x。" },
      { question: "解方程 dy/dx+2xy=x。", answer: "积分因子 μ=e^(x²)。y=e^(-x²)(∫xe^(x²)dx+C)=e^(-x²)(e^(x²)/2+C)=1/2+Ce^(-x²)。" },
      { question: "解方程 y''+y=0。", answer: "特征方程 r²+1=0，r=±i。y=C₁cosx+C₂sinx。" },
      { question: "解方程 y''-3y'+2y=0。", answer: "特征方程 r²-3r+2=0，(r-1)(r-2)=0。y=C₁e^x+C₂e^(2x)。" },
      { question: "解方程 y''+2y'+y=0。", answer: "特征方程 r²+2r+1=0，(r+1)²=0。y=(C₁+C₂x)e^(-x)。" },
      { question: "解方程 y''+y=x。", answer: "齐次解：y_h=C₁cosx+C₂sinx。特解设为 y_p=Ax+B，代入得 A=1,B=0。y=C₁cosx+C₂sinx+x。" },
    ]
  },
  "4-27": {
    links: [
      { name: "📖 同济《高等数学》第七版（下册）", url: null },
      { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
    ],
    exercises: [
      { question: "【复习】解方程 y''-y=e^x。", answer: "齐次解：y_h=C₁e^x+C₂e^(-x)。特解：由于 e^x 是齐次解，设 y_p=Axe^x，代入得 A=1/2。y=C₁e^x+C₂e^(-x)+xe^x/2。" },
      { question: "【复习】解方程 y''+4y=sin2x。", answer: "齐次解：y_h=C₁cos2x+C₂sin2x。特解：由于 sin2x 是齐次解，设 y_p=x(Acos2x+Bsin2x)。代入得 A=-1/4,B=0。y=C₁cos2x+C₂sin2x-xcos2x/4。" },
      { question: "【复习】解方程 y'=x²+y², y(0)=1（写出近似解思路）。", answer: "这是黎卡提方程，一般无初等解。可用幂级数解法或数值方法（如欧拉法、龙格-库塔法）。" },
      { question: "【复习】验证 y=C/x 是方程 xy'+y=0 的通解。", answer: "y'=-C/x²。xy'+y=x·(-C/x²)+C/x=-C/x+C/x=0。" },
      { question: "【复习】解方程 (x+y)dx+xdy=0。", answer: "令 y=ux，dy=udx+xdu。代入化简得 dx/x+(1+2u)du/(1+u)²=0。积分得 ln|x|+ln|1+u|+1/(1+u)=C。回代 y=ux。" },
      { question: "【复习】解方程 y''=y'。", answer: "令 p=y'，p'=p，p=Ce^x。y=Ce^x+D。" },
      { question: "【复习】解方程 y''=x+sinx，y(0)=0,y'(0)=1。", answer: "y'=x²/2-cosx+C₁，由 y'(0)=1 得 C₁=2。y=x³/6-sinx+2x+C₂，由 y(0)=0 得 C₂=0。y=x³/6-sinx+2x。" },
      { question: "【复习】求方程 y''+y=0 满足 y(0)=1,y'(0)=0 的特解。", answer: "通解 y=C₁cosx+C₂sinx。y(0)=C₁=1；y'=-C₁sinx+C₂cosx，y'(0)=C₂=0。所以 y=cosx。" },
      { question: "【复习】解方程 dy/dx=(y²-1)/(x²-1)。", answer: "分离变量：dy/(y²-1)=dx/(x²-1)。两边积分：1/2·ln|(y-1)/(y+1)|=1/2·ln|(x-1)/(x+1)|+C。" },
      { question: "【复习】用降阶法解方程 yy''+(y')²=0。", answer: "令 p=y'，y''=p·dp/dy。代入得 yp·dp/dy+p²=0，p(y·dp/dy+p)=0。p=0 或 dp/p=-dy/y。ln|p|=-ln|y|+C，p=C₁/y。dy/dx=C₁/y，y²=2C₁x+C₂。" },
    ]
  },
  "5-0": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-1": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-2": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-3": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-4": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-5": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-6": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "【复习】求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "【复习】求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "【复习】证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "【复习】设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "【复习】判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "【复习】用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "【复习】求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "【复习】证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "【复习】设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "【复习】证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-7": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-8": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-9": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-10": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-11": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-12": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-13": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "【复习】计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "【复习】计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "【复习】设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "【复习】设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "【复习】设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "【复习】求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "【复习】解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "【复习】解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "【复习】判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "【复习】将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-14": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-15": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-16": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-17": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-18": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-19": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-20": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "【复习】求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "【复习】求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "【复习】证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "【复习】设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "【复习】判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "【复习】用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "【复习】求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "【复习】证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "【复习】设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "【复习】证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-21": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-22": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-23": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-24": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-25": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-26": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-27": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "【复习】计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "【复习】计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "【复习】设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "【复习】设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "【复习】设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "【复习】求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "【复习】解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "【复习】解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "【复习】判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "【复习】将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-28": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-29": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-30": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-31": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-32": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
  "5-33": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "计算行列式 |1 2; 3 4|。", answer: "=1×4-2×3=-2。" },
      { question: "计算行列式 |1 1 1; 1 2 3; 1 4 9|。", answer: "范德蒙行列式：=(2-1)(3-1)(3-2)=2。" },
      { question: "设 A=[1 2; 3 4]，求 |2A|。", answer: "|2A|=2²|A|=4×(-2)=-8。" },
      { question: "设 A=[1 1; 0 1]，求 Aⁿ。", answer: "Aⁿ=[1 n; 0 1]。可用归纳法证明。" },
      { question: "设 A=[1 2; 3 4]，求 A⁻¹。", answer: "|A|=-2。A⁻¹=-1/2·[4 -2; -3 1]=[-2 1; 3/2 -1/2]。" },
      { question: "求矩阵 [1 2 3; 2 4 5; 3 5 6] 的秩。", answer: "R₂-2R₁=[0 0 -1]；R₃-3R₁=[0 -1 -3]。秩为3（行列式≠0）。" },
      { question: "解方程组：x+y=1, 2x+2y=3。", answer: "无解（两方程矛盾）。" },
      { question: "解方程组：x+y+z=1, x+2y+3z=2, x+4y+9z=3。", answer: "系数矩阵是范德蒙，行列式=2≠0，唯一解。用克莱默法则或消元法：x=0,y=1,z=0。" },
      { question: "判断向量组 (1,0,0),(1,1,0),(1,1,1) 是否线性无关。", answer: "行列式 |1 1 1; 0 1 1; 0 0 1|=1≠0，线性无关。" },
      { question: "将向量 (3,4) 用 (1,0) 和 (0,1) 线性表示。", answer: "(3,4)=3(1,0)+4(0,1)。" },
    ]
  },
  "5-34": {
    links: [
      { name: "📖 同济《线性代数》第六版", url: null },
      { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
    ],
    exercises: [
      { question: "【复习】求矩阵 [1 2; 2 1] 的特征值。", answer: "|A-λI|=(1-λ)²-4=λ²-2λ-3=0，λ=3 或 λ=-1。" },
      { question: "【复习】求矩阵 [1 2; 2 1] 属于 λ=3 的特征向量。", answer: "A-3I=[-2 2; 2 -2]→[1 -1; 0 0]。特征向量 k(1,1)，k≠0。" },
      { question: "【复习】证明：若 A²=A，则 A 的特征值只能是 0 或 1。", answer: "设 Ax=λx，A²x=λ²x=Ax=λx，所以 λ²=λ，λ=0 或 1。" },
      { question: "【复习】设 A 可逆，证明 A⁻¹ 的特征值是 A 特征值的倒数。", answer: "设 Ax=λx，x=A⁻¹λx=λA⁻¹x，所以 A⁻¹x=(1/λ)x。" },
      { question: "【复习】判断二次型 f(x,y)=x²+4xy+y² 是否正定。", answer: "矩阵 [1 2; 2 1]，顺序主子式：1>0，|A|=-3<0。不是正定的。" },
      { question: "【复习】用施密特正交化将 (1,0,0),(1,1,0),(1,1,1) 正交化。", answer: "β₁=(1,0,0)；β₂=(1,1,0)-(1,0,0)=(0,1,0)；β₃=(1,1,1)-(1,0,0)-(0,1,0)=(0,0,1)。已经是正交基。" },
      { question: "【复习】求矩阵 [2 1; 1 2] 的合同标准形。", answer: "特征值 3,1。合同于 diag(3,1) 或 diag(1,1)。" },
      { question: "【复习】证明：相似矩阵有相同的特征多项式。", answer: "设 B=P⁻¹AP，|B-λI|=|P⁻¹AP-λI|=|P⁻¹(A-λI)P|=|P⁻¹||A-λI||P|=|A-λI|。" },
      { question: "【复习】设 A 是 n 阶方阵，|A|=2，求 |A*|（伴随矩阵的行列式）。", answer: "|A*|=|A|^(n-1)=2^(n-1)。" },
      { question: "【复习】证明：r(A+B)≤r(A)+r(B)。", answer: "A+B 的列向量可由 A 和 B 的列向量共同线性表示，所以 r(A+B)≤r([A B])≤r(A)+r(B)。" },
    ]
  },
};

// 通用资源库
const GENERIC_LINKS = {
  "宋浩": { name: "📺 宋浩《高等数学》B站合集", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14369" },
  "宋浩线代": { name: "📺 宋浩《线性代数》", url: "https://space.bilibili.com/66607740/channel/collectiondetail?sid=14370" },
  "3b1b": { name: "📺 3Blue1Brown《微积分的本质》", url: "https://www.bilibili.com/video/BV1qW411N7FU" },
  "同济上": { name: "📖 同济《高等数学》第七版（上册）", url: null },
  "同济下": { name: "📖 同济《高等数学》第七版（下册）", url: null },
  "同济线代": { name: "📖 同济《线性代数》第六版", url: null },
};

function getExerciseData(phaseIdx, dayIdx) {
  const key = phaseIdx + "-" + dayIdx;
  const data = EXERCISES_DB[key];
  if (!data) return null;
  return { links: [...data.links], exercises: data.exercises };
}

function getGenericExerciseHint(phaseIdx, dayIdx) {
  const hints = [
    "请完成同济教材对应章节课后习题A组，建议至少完成10道。重点练习计算题，确保每道题都能独立算出正确答案。",
    "请完成同济教材对应章节课后习题，建议完成A组全部题目。对于证明题，先尝试独立思考15分钟再看答案。",
    "本节重点在于计算熟练度，请完成教材课后习题至少15道。注意书写规范，每一步都要清晰可辨。",
    "建议完成《660题》中对应章节的题目，每天10-15道。遇到卡壳的题目标记下来，周末集中复习。",
    "请复习当天学习的定理证明，尝试在草稿纸上独立写出完整证明过程，然后对照教材检查每一步的严谨性。"
  ];
  return { hint: hints[(phaseIdx * 37 + dayIdx) % hints.length] };
}
