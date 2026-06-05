const STUDY_PLAN = {
  phases: [
    {
      id: 0,
      name: "预备阶段",
      subtitle: "高中核心公式回顾",
      durationDays: 14,
      color: "#4E5969",
      bgColor: "rgba(134,144,156,0.08)",
      borderColor: "#E5E6EB",
      topics: ["函数与图像", "三角恒等式", "对数运算", "解析几何", "数列求和"],
      dailyTasks: [
        { day: 1, title: "函数概念与基本性质", content: "回顾函数定义、定义域、值域、单调性、奇偶性。重点：复合函数的理解。", proofFocus: "无", resources: "宋浩《预备知识》第1讲" },
        { day: 2, title: "幂函数与指数函数", content: "幂函数 y=x^a 的图像与性质，指数函数 y=a^x 的图像与性质。", proofFocus: "无", resources: "同济预备知识 + 公式手册" },
        { day: 3, title: "对数函数与运算", content: "对数定义、换底公式、对数运算法则。必须熟练掌握：ln(ab)=ln a+ln b 等。", proofFocus: "无", resources: "公式手册 P1-2" },
        { day: 4, title: "三角函数基础", content: "sin/cos/tan 的定义、图像、周期性、诱导公式。", proofFocus: "无", resources: "宋浩《预备知识》三角函数" },
        { day: 5, title: "三角恒等变换", content: "和差化积、积化和差、倍角公式、半角公式。", proofFocus: "无", resources: "打印《三角公式速查表》背熟" },
        { day: 6, title: "反三角函数", content: "arcsin/arccos/arctan 的定义域、值域、图像。", proofFocus: "无", resources: "教材附录" },
        { day: 7, title: "解析几何：直线与圆", content: "直线方程的各种形式、圆的方程、点到直线距离。", proofFocus: "无", resources: "高中教材选读" },
        { day: 8, title: "解析几何：圆锥曲线", content: "椭圆、双曲线、抛物线的标准方程与基本性质。", proofFocus: "无", resources: "高中教材选读" },
        { day: 9, title: "数列与数学归纳法", content: "等差等比数列求和公式、数学归纳法原理。", proofFocus: "尝试证明：等差数列求和公式", resources: "公式手册" },
        { day: 10, title: "因式分解与分式运算", content: "十字相乘法、分组分解、分式化简。", proofFocus: "无", resources: "计算练习" },
        { day: 11, title: "综合计算练习（一）", content: "混合运算 20 题，限时训练。", proofFocus: "无", resources: "自组练习题" },
        { day: 12, title: "综合计算练习（二）", content: "三角与对数综合运算 20 题。", proofFocus: "无", resources: "自组练习题" },
        { day: 13, title: "公式默写与查漏补缺", content: "不看任何资料，默写所有核心公式，标记遗忘点。", proofFocus: "无", resources: "错题本" },
        { day: 14, title: "预备阶段验收", content: "完成 30 道综合测试题，检验公式掌握程度。", proofFocus: "无", resources: "自组测试题" }
      ]
    },
    {
      id: 1,
      name: "第一阶段",
      subtitle: "极限、连续、导数与微分",
      durationDays: 35,
      color: "#165DFF",
      bgColor: "rgba(22,93,255,0.06)",
      borderColor: "rgba(22,93,255,0.20)",
      topics: ["极限定义", "连续性", "导数", "微分中值定理"],
      dailyTasks: [
        { day: 1, title: "映射与函数", content: "映射概念、函数定义、函数的几种特性（有界性、单调性、周期性、奇偶性）。", proofFocus: "无", resources: "同济 1.1" },
        { day: 2, title: "初等函数与复合函数", content: "反函数、复合函数、初等函数的分类。", proofFocus: "无", resources: "同济 1.2" },
        { day: 3, title: "数列极限的直观理解", content: "通过例子理解数列趋近：1/n → 0，(1+1/n)^n → e。", proofFocus: "无", resources: "宋浩第1讲" },
        { day: 4, title: "数列极限的 ε-N 定义", content: "严格定义：∀ε>0, ∃N, 当 n>N 时 |x_n-a|<ε。理解'任意'与'存在'的顺序。", proofFocus: "熟记并理解 ε-N 定义的符号含义", resources: "同济 2.1" },
        { day: 5, title: "用定义证明数列极限（一）", content: "证明 lim(1/n)=0，lim(1/2^n)=0。", proofFocus: "用 ε-N 定义写出完整证明", resources: "同济例题" },
        { day: 6, title: "用定义证明数列极限（二）", content: "证明 lim(q^n)=0 (|q|<1)。", proofFocus: "用 ε-N 定义写出完整证明", resources: "同济例题" },
        { day: 7, title: "收敛数列的性质", content: "唯一性、有界性、保号性。", proofFocus: "证明：极限若存在则唯一", resources: "同济 2.2 定理1" },
        { day: 8, title: "函数极限的定义", content: "x→x₀ 时 f(x)→A 的 ε-δ 定义。", proofFocus: "理解 ε-δ 定义的几何意义", resources: "同济 3.1" },
        { day: 9, title: "函数极限的性质", content: "唯一性、局部有界性、局部保号性。", proofFocus: "证明：函数极限的局部有界性", resources: "同济 3.2" },
        { day: 10, title: "无穷小与无穷大", content: "定义、关系、无穷小的比较（高阶、同阶、等价）。", proofFocus: "证明：无穷大的倒数是无穷小", resources: "同济 4.1-4.2" },
        { day: 11, title: "极限的四则运算", content: "和差积商的极限运算法则。", proofFocus: "证明：lim(f+g)=lim f+lim g", resources: "同济 4.3" },
        { day: 12, title: "夹逼准则", content: "夹逼准则的内容与用法。", proofFocus: "理解夹逼准则的证明思路", resources: "同济 4.4" },
        { day: 13, title: "两个重要极限（一）", content: "lim(sin x/x)=1 (x→0) 的证明。", proofFocus: "完整证明 lim(sin x/x)=1", resources: "同济 4.5" },
        { day: 14, title: "两个重要极限（二）", content: "lim(1+1/x)^x=e 的证明。", proofFocus: "理解 e 的定义与极限证明", resources: "同济 4.5" },
        { day: 15, title: "极限计算综合练习", content: "各类极限计算题 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 16, title: "函数的连续性", content: "连续定义、间断点分类（第一类/第二类）。", proofFocus: "证明：连续函数的四则运算仍连续", resources: "同济 5.1" },
        { day: 17, title: "连续函数的性质", content: "最值定理、介值定理、零点定理。", proofFocus: "证明：闭区间连续函数必有界（最值定理）", resources: "同济 5.2" },
        { day: 18, title: "导数的概念", content: "导数定义（两种形式）、几何意义（切线斜率）、可导与连续的关系。", proofFocus: "证明：可导必连续", resources: "同济 6.1" },
        { day: 19, title: "求导法则（一）", content: "和差积商求导法则。", proofFocus: "证明：乘积求导法则 (uv)'=u'v+uv'", resources: "同济 6.2" },
        { day: 20, title: "求导法则（二）", content: "反函数求导、复合函数求导（链式法则）。", proofFocus: "证明：反函数求导公式", resources: "同济 6.2" },
        { day: 21, title: "基本初等函数求导", content: "幂函数、指数、对数、三角、反三角函数的导数公式推导。", proofFocus: "推导：(ln x)'=1/x，(sin x)'=cos x", resources: "同济 6.2" },
        { day: 22, title: "隐函数与参数方程求导", content: "隐函数求导法、对数求导法、参数方程求导。", proofFocus: "无", resources: "同济 6.3" },
        { day: 23, title: "高阶导数", content: "二阶及以上导数、莱布尼茨公式。", proofFocus: "推导：sin x 的 n 阶导数公式", resources: "同济 6.4" },
        { day: 24, title: "微分的概念", content: "微分定义、几何意义、可微与可导的等价性。", proofFocus: "证明：可微 ⟺ 可导", resources: "同济 6.5" },
        { day: 25, title: "微分中值定理：罗尔定理", content: "罗尔定理的条件与结论。", proofFocus: "完整证明罗尔定理", resources: "同济 7.1" },
        { day: 26, title: "微分中值定理：拉格朗日", content: "拉格朗日中值定理及其证明。", proofFocus: "用罗尔定理证明拉格朗日中值定理", resources: "同济 7.1" },
        { day: 27, title: "微分中值定理：柯西", content: "柯西中值定理。", proofFocus: "证明柯西中值定理", resources: "同济 7.1" },
        { day: 28, title: "洛必达法则", content: "0/0 型与 ∞/∞ 型洛必达法则。", proofFocus: "理解洛必达法则的证明思路", resources: "同济 7.2" },
        { day: 29, title: "泰勒公式", content: "带有拉格朗日余项的泰勒公式。", proofFocus: "理解泰勒公式的证明（反复用柯西中值）", resources: "同济 7.3" },
        { day: 30, title: "函数的单调性与极值", content: "一阶导数判别单调性、极值的必要条件与充分条件。", proofFocus: "证明：一阶导数判别法", resources: "同济 7.4" },
        { day: 31, title: "函数的凹凸性与拐点", content: "二阶导数与凹凸性、拐点定义。", proofFocus: "证明：二阶导数判别凹凸性", resources: "同济 7.5" },
        { day: 32, title: "渐近线与函数作图", content: "水平/垂直/斜渐近线，函数图像绘制步骤。", proofFocus: "无", resources: "同济 7.6" },
        { day: 33, title: "曲率（选学）", content: "曲率定义与计算公式。", proofFocus: "无", resources: "同济 7.7" },
        { day: 34, title: "第一阶段综合复习", content: "回顾所有定理证明、重做典型例题。", proofFocus: "罗尔、拉格朗日、泰勒", resources: "错题本" },
        { day: 35, title: "第一阶段验收测试", content: "完成 25 道综合测试题（计算+证明）。", proofFocus: "无", resources: "自组测试题" }
      ]
    },
    {
      id: 2,
      name: "第二阶段",
      subtitle: "不定积分与定积分",
      durationDays: 35,
      color: "#36D399",
      bgColor: "rgba(54,211,153,0.06)",
      borderColor: "rgba(54,211,153,0.25)",
      topics: ["不定积分", "定积分", "积分应用"],
      dailyTasks: [
        { day: 1, title: "不定积分的概念", content: "原函数与不定积分的定义、基本性质。", proofFocus: "理解不定积分是求导的逆运算", resources: "同济 8.1" },
        { day: 2, title: "基本积分公式（一）", content: "幂函数、指数函数积分公式。", proofFocus: "无", resources: "背诵基本积分表" },
        { day: 3, title: "基本积分公式（二）", content: "三角函数积分公式。", proofFocus: "无", resources: "背诵基本积分表" },
        { day: 4, title: "第一类换元法", content: "凑微分法：∫f(g(x))g'(x)dx = ∫f(u)du。", proofFocus: "无", resources: "同济 8.2" },
        { day: 5, title: "第一类换元法练习", content: "凑微分典型题 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 6, title: "第二类换元法", content: "三角代换、根式代换、倒代换。", proofFocus: "无", resources: "同济 8.2" },
        { day: 7, title: "第二类换元法练习", content: "三角代换典型题 10 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 8, title: "分部积分法", content: "∫udv = uv - ∫vdu，选择 u 的顺序：LIATE。", proofFocus: "证明分部积分公式（由乘积求导推出）", resources: "同济 8.3" },
        { day: 9, title: "分部积分法练习", content: "分部积分典型题 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 10, title: "有理函数的积分", content: "部分分式分解法。", proofFocus: "无", resources: "同济 8.4" },
        { day: 11, title: "三角函数有理式积分", content: "万能代换 t=tan(x/2)。", proofFocus: "无", resources: "同济 8.4" },
        { day: 12, title: "积分技巧综合", content: "混合题型 20 道，训练方法选择能力。", proofFocus: "无", resources: "《不定积分100题》" },
        { day: 13, title: "积分技巧综合（续）", content: "继续练习，记录错题。", proofFocus: "无", resources: "《不定积分100题》" },
        { day: 14, title: "定积分的概念", content: "黎曼和定义、定积分的几何意义。", proofFocus: "理解定积分作为黎曼和的极限", resources: "同济 9.1" },
        { day: 15, title: "定积分的性质", content: "线性性、区间可加性、保号性、积分中值定理。", proofFocus: "证明：积分中值定理", resources: "同济 9.2" },
        { day: 16, title: "微积分基本定理", content: "变上限积分函数、牛顿-莱布尼茨公式。", proofFocus: "证明：d/dx∫ₐˣf(t)dt = f(x)", resources: "同济 9.3" },
        { day: 17, title: "定积分的换元法", content: "定积分换元与不定积分的区别（换元必换限）。", proofFocus: "无", resources: "同济 9.4" },
        { day: 18, title: "定积分的分部积分法", content: "定积分的分部积分公式及应用。", proofFocus: "无", resources: "同济 9.4" },
        { day: 19, title: "定积分计算练习", content: "定积分计算 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 20, title: "利用奇偶性简化计算", content: "对称区间上奇偶函数的积分性质。", proofFocus: "证明：奇函数在对称区间积分为0", resources: "同济 9.4" },
        { day: 21, title: "反常积分（一）", content: "无穷限反常积分。", proofFocus: "无", resources: "同济 9.5" },
        { day: 22, title: "反常积分（二）", content: "瑕积分（无界函数的反常积分）。", proofFocus: "无", resources: "同济 9.5" },
        { day: 23, title: "反常积分审敛法", content: "比较审敛法、极限审敛法。", proofFocus: "无", resources: "同济 9.5" },
        { day: 24, title: "Γ函数与B函数（选学）", content: "特殊函数简介。", proofFocus: "无", resources: "拓展阅读" },
        { day: 25, title: "定积分的几何应用：面积", content: "直角坐标、参数方程、极坐标下的面积计算。", proofFocus: "无", resources: "同济 10.1" },
        { day: 26, title: "定积分的几何应用：体积", content: "旋转体体积（圆盘法、柱壳法）。", proofFocus: "无", resources: "同济 10.2" },
        { day: 27, title: "定积分的几何应用：弧长", content: "平面曲线的弧长公式。", proofFocus: "无", resources: "同济 10.3" },
        { day: 28, title: "定积分的物理应用", content: "变力做功、液体压力、引力（选学）。", proofFocus: "无", resources: "同济 10.4" },
        { day: 29, title: "积分计算综合复习", content: "不定积分+定积分混合练习 20 道。", proofFocus: "无", resources: "错题本" },
        { day: 30, title: "积分证明专题", content: "积分等式证明、积分不等式证明。", proofFocus: "用积分中值定理和换元法证明等式", resources: "拓展题" },
        { day: 31, title: "证明专题（续）", content: "积分不等式证明方法总结。", proofFocus: "证明常见积分不等式", resources: "拓展题" },
        { day: 32, title: "第二阶段错题重做", content: "重做所有标记的错题。", proofFocus: "无", resources: "错题本" },
        { day: 33, title: "第二阶段知识框架梳理", content: "画思维导图：不定积分方法体系 + 定积分应用体系。", proofFocus: "无", resources: "白纸手绘" },
        { day: 34, title: "第二阶段综合复习", content: "全面回顾公式、定理、典型题。", proofFocus: "牛顿-莱布尼茨、积分中值", resources: "笔记" },
        { day: 35, title: "第二阶段验收测试", content: "30 道综合测试题（计算+证明）。", proofFocus: "无", resources: "自组测试题" }
      ]
    },
    {
      id: 3,
      name: "第三阶段",
      subtitle: "多元函数微分与重积分",
      durationDays: 35,
      color: "#165DFF",
      bgColor: "rgba(22,93,255,0.06)",
      borderColor: "rgba(22,93,255,0.20)",
      topics: ["空间解析几何", "多元微分", "重积分", "曲线曲面积分"],
      dailyTasks: [
        { day: 1, title: "向量代数", content: "向量运算、数量积、向量积、混合积。", proofFocus: "无", resources: "同济 11.1" },
        { day: 2, title: "平面与直线方程", content: "平面方程、直线方程、夹角、距离。", proofFocus: "无", resources: "同济 11.2-11.3" },
        { day: 3, title: "曲面与曲线", content: "常见曲面（球面、柱面、锥面、旋转曲面）、空间曲线。", proofFocus: "无", resources: "同济 11.4-11.5" },
        { day: 4, title: "多元函数的基本概念", content: "平面点集、多元函数定义、极限与连续性。", proofFocus: "理解二元函数极限的复杂性", resources: "同济 12.1" },
        { day: 5, title: "偏导数", content: "偏导数定义与计算、几何意义。", proofFocus: "无", resources: "同济 12.2" },
        { day: 6, title: "全微分", content: "全微分定义、可微的必要条件与充分条件。", proofFocus: "证明：可微 ⟹ 偏导数存在", resources: "同济 12.3" },
        { day: 7, title: "复合函数求导法则", content: "链式法则在多元函数中的推广。", proofFocus: "证明二元复合函数求导法则", resources: "同济 12.4" },
        { day: 8, title: "隐函数求导", content: "一个方程情形、方程组情形。", proofFocus: "证明隐函数存在定理（了解思路）", resources: "同济 12.5" },
        { day: 9, title: "多元函数微分法练习", content: "偏导数与全微分计算题 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 10, title: "方向导数与梯度", content: "方向导数定义、梯度向量、方向导数与梯度的关系。", proofFocus: "证明：方向导数 = 梯度·方向向量", resources: "同济 12.6" },
        { day: 11, title: "多元函数的极值", content: "极值的必要条件、充分条件（Hessian矩阵判别法）。", proofFocus: "证明极值的必要条件", resources: "同济 12.7" },
        { day: 12, title: "条件极值与拉格朗日乘数法", content: "拉格朗日乘数法的原理与应用。", proofFocus: "理解拉格朗日乘数法的证明思路", resources: "同济 12.8" },
        { day: 13, title: "多元微分综合练习", content: "极值与条件极值应用题 10 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 14, title: "二重积分的概念", content: "二重积分的定义、几何意义、性质。", proofFocus: "理解二重积分作为体积的极限", resources: "同济 13.1" },
        { day: 15, title: "二重积分的计算：直角坐标", content: "X型区域、Y型区域的积分次序选择。", proofFocus: "无", resources: "同济 13.2" },
        { day: 16, title: "二重积分的计算：极坐标", content: "极坐标变换：x=rcosθ, y=rsinθ, dxdy=rdrdθ。", proofFocus: "证明极坐标变换的 Jacobian=r", resources: "同济 13.2" },
        { day: 17, title: "二重积分练习", content: "直角坐标与极坐标混合练习 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 18, title: "三重积分的概念与计算", content: "直角坐标、柱坐标、球坐标下的三重积分。", proofFocus: "无", resources: "同济 13.3" },
        { day: 19, title: "三重积分练习", content: "三种坐标系下的三重积分 10 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 20, title: "重积分的应用", content: "曲面面积、质心、转动惯量。", proofFocus: "无", resources: "同济 13.4" },
        { day: 21, title: "对弧长的曲线积分", content: "第一类曲线积分的定义与计算。", proofFocus: "无", resources: "同济 14.1" },
        { day: 22, title: "对坐标的曲线积分", content: "第二类曲线积分的定义与计算。", proofFocus: "无", resources: "同济 14.2" },
        { day: 23, title: "格林公式", content: "格林公式：闭合曲线积分与二重积分的关系。", proofFocus: "证明格林公式", resources: "同济 14.3" },
        { day: 24, title: "格林公式应用", content: "用格林公式计算曲线积分、面积公式。", proofFocus: "无", resources: "同济课后习题" },
        { day: 25, title: "曲线积分与路径无关", content: "四个等价条件、原函数求法。", proofFocus: "证明四个条件的等价性", resources: "同济 14.4" },
        { day: 26, title: "对面积的曲面积分", content: "第一类曲面积分的定义与计算。", proofFocus: "无", resources: "同济 15.1" },
        { day: 27, title: "对坐标的曲面积分", content: "第二类曲面积分的定义与计算。", proofFocus: "无", resources: "同济 15.2" },
        { day: 28, title: "高斯公式", content: "高斯公式：闭合曲面积分与三重积分的关系。", proofFocus: "证明高斯公式", resources: "同济 15.3" },
        { day: 29, title: "斯托克斯公式", content: "斯托克斯公式：曲线积分与曲面积分的关系。", proofFocus: "证明斯托克斯公式", resources: "同济 15.4" },
        { day: 30, title: "三大公式总结", content: "格林、高斯、斯托克斯的统一性。", proofFocus: "对比证明思路的共性", resources: "笔记总结" },
        { day: 31, title: "曲线曲面积分综合练习", content: "选择适当方法计算 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 32, title: "第三阶段错题重做", content: "重做所有标记错题。", proofFocus: "无", resources: "错题本" },
        { day: 33, title: "第三阶段知识框架梳理", content: "画思维导图：多元微分+重积分+三大公式。", proofFocus: "无", resources: "白纸手绘" },
        { day: 34, title: "第三阶段综合复习", content: "全面回顾。", proofFocus: "格林、高斯公式", resources: "笔记" },
        { day: 35, title: "第三阶段验收测试", content: "25 道综合测试题。", proofFocus: "无", resources: "自组测试题" }
      ]
    },
    {
      id: 4,
      name: "第四阶段",
      subtitle: "级数与微分方程",
      durationDays: 28,
      color: "#FF9F43",
      bgColor: "rgba(255,159,67,0.06)",
      borderColor: "rgba(255,159,67,0.20)",
      topics: ["无穷级数", "幂级数", "微分方程"],
      dailyTasks: [
        { day: 1, title: "常数项级数的概念", content: "级数定义、部分和、收敛与发散。", proofFocus: "无", resources: "同济 16.1" },
        { day: 2, title: "级数的基本性质", content: "线性性、收敛级数的必要条件（通项趋于0）。", proofFocus: "证明：收敛级数的通项必趋于0", resources: "同济 16.1" },
        { day: 3, title: "正项级数审敛法（一）", content: "比较审敛法、极限比较审敛法。", proofFocus: "证明比较审敛法", resources: "同济 16.2" },
        { day: 4, title: "正项级数审敛法（二）", content: "比值审敛法（达朗贝尔）、根值审敛法（柯西）。", proofFocus: "证明比值审敛法", resources: "同济 16.2" },
        { day: 5, title: "交错级数与莱布尼茨判别法", content: "交错级数定义、莱布尼茨判别法。", proofFocus: "证明莱布尼茨判别法", resources: "同济 16.3" },
        { day: 6, title: "绝对收敛与条件收敛", content: "定义、关系、性质。", proofFocus: "证明：绝对收敛必收敛", resources: "同济 16.3" },
        { day: 7, title: "级数审敛综合练习", content: "判断级数敛散性 20 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 8, title: "函数项级数与幂级数", content: "收敛域、和函数、幂级数的定义。", proofFocus: "无", resources: "同济 16.4" },
        { day: 9, title: "幂级数的收敛半径", content: "收敛半径求法、收敛区间、收敛域。", proofFocus: "证明：幂级数在收敛区间内绝对收敛", resources: "同济 16.4" },
        { day: 10, title: "幂级数的运算", content: "四则运算、逐项求导、逐项积分。", proofFocus: "证明逐项求导后收敛半径不变", resources: "同济 16.5" },
        { day: 11, title: "函数展开成幂级数", content: "直接展开法（麦克劳林级数）、间接展开法。", proofFocus: "推导 e^x, sin x, cos x, ln(1+x) 的展开式", resources: "同济 16.5" },
        { day: 12, title: "幂级数应用", content: "近似计算、欧拉公式。", proofFocus: "无", resources: "同济 16.5" },
        { day: 13, title: "傅里叶级数（选学）", content: "三角函数系的正交性、傅里叶系数。", proofFocus: "证明三角函数系的正交性", resources: "同济 16.6" },
        { day: 14, title: "级数综合复习", content: "级数部分知识框架梳理。", proofFocus: "无", resources: "笔记" },
        { day: 15, title: "微分方程的基本概念", content: "微分方程定义、阶、解、通解、特解、初值问题。", proofFocus: "无", resources: "同济 17.1" },
        { day: 16, title: "可分离变量的方程", content: "分离变量法求解。", proofFocus: "无", resources: "同济 17.2" },
        { day: 17, title: "齐次方程", content: "齐次方程的解法：令 u=y/x。", proofFocus: "无", resources: "同济 17.2" },
        { day: 18, title: "一阶线性微分方程", content: "常数变易法、公式法。", proofFocus: "推导一阶线性方程的通解公式", resources: "同济 17.2" },
        { day: 19, title: "一阶微分方程练习", content: "各类一阶方程 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 20, title: "可降阶的高阶方程", content: "y^(n)=f(x)、y''=f(x,y')、y''=f(y,y') 型。", proofFocus: "无", resources: "同济 17.3" },
        { day: 21, title: "二阶常系数齐次线性方程", content: "特征方程法、三种特征根情况。", proofFocus: "证明特征方程法的正确性", resources: "同济 17.4" },
        { day: 22, title: "二阶常系数非齐次线性方程", content: "待定系数法（多项式×指数、三角函数型）。", proofFocus: "无", resources: "同济 17.4" },
        { day: 23, title: "微分方程练习", content: "二阶常系数方程 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 24, title: "微分方程的应用", content: "物理、几何中的应用举例。", proofFocus: "无", resources: "同济 17.5" },
        { day: 25, title: "第四阶段错题重做", content: "重做所有标记错题。", proofFocus: "无", resources: "错题本" },
        { day: 26, title: "第四阶段知识框架梳理", content: "级数判别法体系 + 微分方程解法体系。", proofFocus: "无", resources: "白纸手绘" },
        { day: 27, title: "第四阶段综合复习", content: "全面回顾。", proofFocus: "莱布尼茨、特征方程法", resources: "笔记" },
        { day: 28, title: "第四阶段验收测试", content: "20 道综合测试题。", proofFocus: "无", resources: "自组测试题" }
      ]
    },
    {
      id: 5,
      name: "第五阶段",
      subtitle: "线性代数基础",
      durationDays: 35,
      color: "#36D399",
      bgColor: "rgba(54,211,153,0.06)",
      borderColor: "rgba(54,211,153,0.25)",
      topics: ["行列式", "矩阵", "向量组", "特征值", "二次型"],
      dailyTasks: [
        { day: 1, title: "二阶与三阶行列式", content: "行列式定义、对角线法则、几何意义（平行四边形/平行六面体体积）。", proofFocus: "无", resources: "同济线代 1.1" },
        { day: 2, title: "全排列与逆序数", content: "排列、逆序数、对换、排列的奇偶性。", proofFocus: "无", resources: "同济线代 1.2" },
        { day: 3, title: "n 阶行列式的定义", content: "行列式的严格定义（逆序数形式）。", proofFocus: "理解行列式定义的符号规律", resources: "同济线代 1.3" },
        { day: 4, title: "行列式的性质", content: "转置、换行、数乘、分行可加性。", proofFocus: "证明：行列式转置值不变", resources: "同济线代 1.4" },
        { day: 5, title: "行列式按行（列）展开", content: "余子式、代数余子式、展开定理。", proofFocus: "证明行列式按行展开定理", resources: "同济线代 1.5" },
        { day: 6, title: "行列式计算练习", content: "利用性质化三角形、按行展开计算 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 7, title: "克拉默法则", content: "用行列式解线性方程组。", proofFocus: "证明克拉默法则", resources: "同济线代 1.6" },
        { day: 8, title: "矩阵的概念与运算", content: "矩阵定义、加法、数乘、乘法。", proofFocus: "无", resources: "同济线代 2.1-2.2" },
        { day: 9, title: "矩阵的转置与方阵行列式", content: "转置性质、(AB)^T = B^T A^T、|AB|=|A||B|。", proofFocus: "证明：(AB)^T = B^T A^T", resources: "同济线代 2.2" },
        { day: 10, title: "逆矩阵", content: "逆矩阵定义、存在的充要条件、伴随矩阵求逆。", proofFocus: "证明：A可逆 ⟺ |A|≠0", resources: "同济线代 2.3" },
        { day: 11, title: "逆矩阵练习", content: "求逆矩阵 15 道（2×2, 3×3）。", proofFocus: "无", resources: "同济课后习题" },
        { day: 12, title: "分块矩阵", content: "分块矩阵的运算、分块对角矩阵。", proofFocus: "无", resources: "同济线代 2.4" },
        { day: 13, title: "矩阵的初等变换", content: "三种初等变换、初等矩阵。", proofFocus: "证明：初等变换等价于左乘/右乘初等矩阵", resources: "同济线代 3.1" },
        { day: 14, title: "矩阵的秩", content: "秩的定义、初等变换求秩、秩的性质。", proofFocus: "证明秩的唯一性", resources: "同济线代 3.2" },
        { day: 15, title: "线性方程组的解", content: "齐次/非齐次方程组有解判定定理。", proofFocus: "证明：R(A)=R(A|b) ⟺ 非齐次有解", resources: "同济线代 3.3" },
        { day: 16, title: "线性方程组练习", content: "求解各类线性方程组 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 17, title: "n 维向量及其运算", content: "向量定义、线性运算、内积。", proofFocus: "无", resources: "同济线代 4.1" },
        { day: 18, title: "向量组的线性相关性", content: "线性相关、线性无关的定义与判定。", proofFocus: "证明线性相关的等价条件", resources: "同济线代 4.2" },
        { day: 19, title: "向量组的秩", content: "极大无关组、向量组的秩、矩阵秩的关系。", proofFocus: "证明：矩阵的秩 = 行秩 = 列秩", resources: "同济线代 4.3" },
        { day: 20, title: "线性方程组解的结构", content: "齐次解空间、基础解系、通解结构。", proofFocus: "证明基础解系所含向量个数 = n-R(A)", resources: "同济线代 4.4" },
        { day: 21, title: "向量空间（选学）", content: "向量空间、子空间、基、维数、坐标。", proofFocus: "无", resources: "同济线代 4.5" },
        { day: 22, title: "向量的内积与正交化", content: "施密特正交化、正交矩阵。", proofFocus: "无", resources: "同济线代 5.1" },
        { day: 23, title: "方阵的特征值与特征向量", content: "定义、求法、性质。", proofFocus: "证明：特征值之和=迹，之积=行列式", resources: "同济线代 5.2" },
        { day: 24, title: "相似矩阵", content: "相似定义、相似对角化的条件。", proofFocus: "证明：相似矩阵有相同特征值", resources: "同济线代 5.3" },
        { day: 25, title: "实对称矩阵的对角化", content: "实对称矩阵的特征值性质、正交相似对角化。", proofFocus: "证明：实对称矩阵不同特征值的特征向量正交", resources: "同济线代 5.4" },
        { day: 26, title: "特征值与对角化练习", content: "求特征值、对角化 15 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 27, title: "二次型及其标准形", content: "二次型定义、矩阵表示、合同变换。", proofFocus: "无", resources: "同济线代 6.1" },
        { day: 28, title: "化二次型为标准形", content: "正交变换法、配方法。", proofFocus: "无", resources: "同济线代 6.2" },
        { day: 29, title: "正定二次型", content: "正定的定义、判定条件。", proofFocus: "证明：正定 ⟺ 各阶顺序主子式>0", resources: "同济线代 6.3" },
        { day: 30, title: "二次型练习", content: "化标准形、判断正定性 10 道。", proofFocus: "无", resources: "同济课后习题" },
        { day: 31, title: "第五阶段错题重做", content: "重做所有标记错题。", proofFocus: "无", resources: "错题本" },
        { day: 32, title: "线代知识框架梳理", content: "画思维导图：行列式→矩阵→向量→方程组→特征值→二次型。", proofFocus: "无", resources: "白纸手绘" },
        { day: 33, title: "高数全阶段综合回顾", content: "回顾高数上下册核心定理与证明。", proofFocus: "重点定理逐个过", resources: "全部笔记" },
        { day: 34, title: "高数全阶段综合测试", content: "50 道覆盖全书的综合测试题。", proofFocus: "无", resources: "自组测试题" },
        { day: 35, title: "毕业与展望", content: "庆祝完成！规划下一步（实分析、复分析、微分几何等）。", proofFocus: "无", resources: "推荐进阶书单" }
      ]
    }
  ]
};

function getTotalDays() {
  return STUDY_PLAN.phases.reduce((sum, p) => sum + p.durationDays, 0);
}

function getPhaseStartDay(phaseId) {
  let day = 1;
  for (let i = 0; i < phaseId; i++) {
    day += STUDY_PLAN.phases[i].durationDays;
  }
  return day;
}

function getTaskForDay(globalDay) {
  if (globalDay < 1) return null;
  let accumulated = 0;
  for (const phase of STUDY_PLAN.phases) {
    if (globalDay <= accumulated + phase.durationDays) {
      const dayInPhase = globalDay - accumulated;
      return {
        phase: phase,
        dayInPhase: dayInPhase,
        task: phase.dailyTasks[dayInPhase - 1] || null
      };
    }
    accumulated += phase.durationDays;
  }
  return null;
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getTodayTask(startDateStr) {
  const startDate = new Date(startDateStr);
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return getTaskForDay(diffDays);
}

function getStudyDate(startDateStr, globalDay) {
  return formatDate(addDays(new Date(startDateStr), globalDay - 1));
}
