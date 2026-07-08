// 阶梯式递进学习体系 - 完整数据文件
const LADDER_DATA = {
  'stat-beginner': {
    title: '📊 统计学与数学 · 描述统计与概率基础',
    modules: [
      {
        title: '数据类型与度量',
        items: [
          '定性数据（分类 / 有序）与定量数据（离散 / 连续）',
          '测量尺度：定类、定序、定距、定比',
          '数据收集方法：抽样与普查',
          '抽样方法：简单随机、分层、系统、整群抽样',
        ],
        resources: [
          {name:'【可汗学院】统计学全套教程（中文配音版）',desc:'从零开始讲解描述统计与概率基础，配有大量可视化案例',url:'https://www.bilibili.com/video/BV1Pb41177Hm',tag:'视频'},
          {name:'《深入浅出统计学》Dawn Griffiths',desc:'用趣味故事讲解统计概念，适合零基础入门，图文并茂',url:'https://book.douban.com/subject/30200003/',tag:'书籍'},
        ],
        exercises: [
          {q:'某班级 10 名学生数学成绩为：78, 82, 85, 88, 90, 92, 92, 95, 98, 100。请计算均值、中位数、众数、极差、方差和标准差。',a:'均值 = (78+82+85+88+90+92+92+95+98+100) / 10 = 90<br> 中位数 = (90+92)/2 = 91<br> 众数 = 92（出现2次）<br> 极差 = 100 - 78 = 22<br> 方差 = [(78-90)² + ... + (100-90)²] / 10 = 36.4<br> 标准差 = √36.4 ≈ 6.03 '},
          {q:'某产品次品率为 5%。现随机抽取 10 件，求恰好有 2 件次品的概率（使用二项分布）。',a:'设 X ~ B(10, 0.05)<br> P(X=2) = C(10,2) × 0.05² × 0.95⁸<br> = 45 × 0.0025 × 0.6634<br> ≈ 0.0746（约 7.46%） '},
        ]
      },
      {
        title: '描述统计量',
        items: [
          '集中趋势：均值、中位数、众数、分位数',
          '离散程度：极差、方差、标准差、变异系数',
          '分布形态：偏度、峰度',
          '五数概括与箱线图解读',
        ],
        resources: [
          {name:'【宋浩】概率论与数理统计（大学课程）',desc:'系统讲解概率论基础，适合建立完整理论框架',url:'https://www.bilibili.com/video/BV1Da4y1j7ZB',tag:'视频'},
          {name:'Seeing Theory - 布朗大学可视化概率论',desc:'交互式可视化学习概率论，每个概念都有动态演示',url:'https://seeing-theory.brown.edu/',tag:'在线工具'},
        ],
        exercises: [
          {q:'某考试成绩服从正态分布 N(75, 100)，求：(1) 成绩大于 85 分的概率；(2) 成绩在 65~85 之间的概率。',a:'μ = 75, σ = 10<br> (1) Z = (85-75)/10 = 1.0<br> P(X>85) = 1 - Φ(1.0) ≈ 1 - 0.8413 = 0.1587 ≈ 15.87%<br><br> (2) Z₁ = (65-75)/10 = -1.0, Z₂ = 1.0<br> P(65<X<85) = Φ(1.0) - Φ(-1.0) = 0.8413 - 0.1587 = 0.6826 ≈ 68.26% '},
          {q:'某工厂有两条生产线 A 和 B。A 线产量占总量的 60%，次品率 3%；B 线产量占 40%，次品率 5%。若随机抽取一件产品发现是次品，求它来自 A 线的概率（贝叶斯问题）。',a:'P(A) = 0.6, P(B) = 0.4<br> P(次|A) = 0.03, P(次|B) = 0.05<br> P(次) = P(次|A)P(A) + P(次|B)P(B) = 0.03×0.6 + 0.05×0.4 = 0.038<br> P(A|次) = P(次|A)P(A) / P(次) = 0.018 / 0.038 ≈ 0.4737 ≈ 47.37% '},
        ]
      },
      {
        title: '概率论基础',
        items: [
          '随机事件与概率定义（频率 / 古典 / 主观）',
          '条件概率与贝叶斯公式',
          '独立事件与互斥事件',
          '全概率公式与事件树分析',
        ],
        resources: [
          {name:'知乎专栏：数据分析必备统计学基础',desc:'提炼描述统计核心要点，配有Python实现代码',url:'https://zhuanlan.zhihu.com/p/25241653',tag:'文章'},
        ],
        exercises: [
          {q:'某数据集箱线图显示：Q1=20, Q2=35, Q3=50, 下 whisker=5, 上 whisker=70。请判断是否存在异常值，并解释箱线图各部分的含义。',a:'IQR = Q3 - Q1 = 50 - 20 = 30<br> 下界 = Q1 - 1.5×IQR = 20 - 45 = -25<br> 上界 = Q3 + 1.5×IQR = 50 + 45 = 95<br> 数据范围 5~70 均在 [-25, 95] 内，因此无异常值。<br><br> 含义：箱体包含中间 50% 数据；中线是中位数；whisker 延伸到 1.5×IQR 范围内的最值；超出即为异常值。 </div> </div> </div> '},
        ]
      },
      {
        title: '随机变量与分布',
        items: [
          '离散型：二项分布、泊松分布、几何分布',
          '连续型：正态分布、均匀分布、指数分布',
          '期望、方差与协方差',
          '中心极限定理的直观理解',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '图表可视化',
        items: [
          '直方图、密度图与分布形态',
          '条形图、饼图、堆积图适用场景',
          '散点图与变量关系',
          '热力图与相关性矩阵',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '基础数学工具',
        items: [
          '集合运算与计数原理',
          '排列组合基础',
          '对数与指数在数据变换中的应用',
          '基础线性代数：向量与矩阵运算',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'stat-intermediate': {
    title: '📊 统计学与数学 · 推断统计与假设检验',
    modules: [
      {
        title: '抽样分布',
        items: [
          '样本均值分布与中心极限定理',
          '卡方分布、t 分布、F 分布',
          '标准误与置信区间构建',
          '样本量对估计精度的影响',
        ],
        resources: [
          {name:'《统计学关我什么事》小岛宽之',desc:'用生活案例讲解贝叶斯推断，轻松理解假设检验逻辑',url:'https://book.douban.com/subject/26721914/',tag:'书籍'},
          {name:'【StatQuest】假设检验与统计推断（中英字幕）',desc:'YouTube 最火统计频道，可视化讲解每个检验方法',url:'https://www.bilibili.com/video/BV1Z64y1C7E1',tag:'视频'},
        ],
        exercises: [
          {q:'某新型减肥药声称平均减重 5kg。现随机抽取 36 人试用，平均减重 4.2kg，样本标准差 2.4kg。在 α=0.05 下，检验该说法是否成立（双尾检验）。',a:'H₀: μ = 5, H₁: μ ≠ 5, α = 0.05<br> n = 36, x̄ = 4.2, s = 2.4<br> t = (x̄ - μ₀) / (s/√n) = (4.2-5) / (2.4/6) = -0.8 / 0.4 = -2.0<br> df = 35, 临界值 t₀.₀₂₅ ≈ ±2.030<br> |t| = 2.0 < 2.030, 不拒绝 H₀<br> p 值 ≈ 0.054 > 0.05<br> 结论：在 0.05 显著性水平下，没有足够证据否定该说法。 '},
          {q:'某工厂新旧两条生产线各抽取 50 件产品，A线平均重量 100.2g（标准差 1.5g），B线平均重量 99.6g（标准差 1.8g）。在 α=0.05 下，检验两线产品重量是否有显著差异。',a:'H₀: μ₁ = μ₂, H₁: μ₁ ≠ μ₂, α = 0.05<br> n₁ = n₂ = 50, x̄₁ = 100.2, s₁ = 1.5; x̄₂ = 99.6, s₂ = 1.8<br> SE = √(s₁²/n₁ + s₂²/n₂) = √(2.25/50 + 3.24/50) = √0.1098 ≈ 0.331<br> t = (100.2 - 99.6) / 0.331 ≈ 1.813<br> df ≈ 95, 临界值 t₀.₀₂₅ ≈ ±1.985<br> |t| = 1.813 < 1.985, 不拒绝 H₀<br> 结论：两线产品重量无显著差异（p ≈ 0.073） '},
        ]
      },
      {
        title: '参数估计',
        items: [
          '点估计：矩估计、最大似然估计',
          '区间估计：均值、比例、方差',
          '置信水平与误差范围',
          '自助法（Bootstrap）估计',
        ],
        resources: [
          {name:'《统计学的世界》David Moore',desc:'经典统计教材，涵盖推断统计与实验设计的完整内容',url:'https://book.douban.com/subject/27003547/',tag:'书籍'},
          {name:'Kaggle: Intro to Statistics（免费课程）',desc:'交互式学习推断统计，含实战数据集与Python代码',url:'https://www.kaggle.com/learn/intro-to-statistics',tag:'在线课程'},
        ],
        exercises: [
          {q:'某调查对 200 名男性和 250 名女性进行偏好调查，男性中喜欢A品牌 120 人，女性中喜欢A品牌 130 人。检验性别与品牌偏好是否独立（α=0.05）。',a:'列联表：<br> | 男 | 喜欢A 120 | 不喜欢A 80 | 合计 200<br> | 女 | 喜欢A 130 | 不喜欢A 120 | 合计 250<br> | 合计 | 250 | 200 | 450<br><br> 期望频数 E(男,喜欢) = 200×250/450 = 111.1<br> χ² = Σ[(O-E)²/E] ≈ 2.70<br> df = 1, χ²₀.₀₅ = 3.841<br> χ² = 2.70 < 3.841, 不拒绝 H₀<br> 结论：性别与品牌偏好无显著关联（p ≈ 0.100） '},
          {q:'某心理学家测试三种教学方法对学生成绩的影响，各组 10 人。A组均值 78，B组 82，C组 85。组内方差分别为 25、36、49。进行单因素方差分析（α=0.05）。',a:'组间：SSB = 10[(78-81.67)² + (82-81.67)² + (85-81.67)²] = 226.7<br> 组内：SSW = 9×(25+36+49) = 990<br> dfB = 2, dfW = 27<br> MSB = 113.35, MSW = 36.67<br> F = 113.35 / 36.67 ≈ 3.09<br> F₀.₀₅(2,27) ≈ 3.35<br> F = 3.09 < 3.35, 不拒绝 H₀<br> 结论：三种教学方法效果无显著差异（p ≈ 0.063） '},
        ]
      },
      {
        title: '假设检验框架',
        items: [
          '原假设 H₀ 与备择假设 H₁',
          '显著性水平 α 与 p 值',
          '第一类错误与第二类错误',
          '检验功效与样本量计算',
        ],
        resources: [
          {name:'知乎：假设检验的完整流程与Python实现',desc:'从理论到代码，一步步实现t检验、卡方检验、ANOVA',url:'https://zhuanlan.zhihu.com/p/26136190',tag:'文章'},
        ],
        exercises: [
          {q:'某批产品要求合格率不低于 95%。随机抽取 200 件，发现 12 件不合格。能否认为该批产品合格？（α=0.05，使用单尾检验）',a:'H₀: p ≥ 0.95, H₁: p < 0.95, α = 0.05<br> n = 200, x = 188 合格, p̂ = 188/200 = 0.94<br> z = (p̂ - p₀) / √(p₀(1-p₀)/n) = (0.94-0.95) / √(0.95×0.05/200)<br> = -0.01 / 0.0154 ≈ -0.649<br> 左尾临界值 z₀.₀₅ = -1.645<br> z = -0.649 > -1.645, 不拒绝 H₀<br> 结论：没有足够证据认为该批产品不合格（p ≈ 0.258） </div> </div> </div> '},
        ]
      },
      {
        title: '常用检验方法',
        items: [
          '单样本 / 双样本 t 检验',
          '配对样本检验',
          '卡方独立性检验',
          '方差分析 ANOVA',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '非参数检验',
        items: [
          'Wilcoxon 符号秩检验',
          'Mann-Whitney U 检验',
          'Kruskal-Wallis H 检验',
          'Kolmogorov-Smirnov 检验',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '相关与因果',
        items: [
          '皮尔逊相关系数',
          '斯皮尔曼等级相关',
          '相关 ≠ 因果的常见陷阱',
          '混淆变量与辛普森悖论',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'stat-advanced': {
    title: '📊 统计学与数学 · 回归分析与贝叶斯统计',
    modules: [
      {
        title: '线性回归',
        items: [
          '简单线性回归：最小二乘估计',
          '多元线性回归与矩阵表示',
          'R²、调整R²与模型评估',
          '残差分析与诊断',
        ],
        resources: [
          {name:'《统计学习导论》Gareth James',desc:'ISL 经典教材，涵盖回归、分类、正则化与降维，配有R代码',url:'https://book.douban.com/subject/30223529/',tag:'书籍'},
          {name:'《贝叶斯方法》Cameron Davidson-Pilon',desc:'Python实现贝叶斯推断，从基础到MCMC采样',url:'https://book.douban.com/subject/26708119/',tag:'书籍'},
        ],
        exercises: [
          {q:'已知 X = [1,2,3,4,5], Y = [2,4,5,4,5]。用最小二乘法求简单线性回归方程 ŷ = a + bx，并计算 R²。',a:'x̄ = 3, ȳ = 4<br> Σ(x-x̄)(y-ȳ) = (-2)(-2)+(-1)(0)+0(1)+1(0)+2(1) = 6<br> Σ(x-x̄)² = 4+1+0+1+4 = 10<br> b = 6/10 = 0.6<br> a = ȳ - bx̄ = 4 - 0.6×3 = 2.2<br> 方程：ŷ = 2.2 + 0.6x<br><br> SST = Σ(y-ȳ)² = 4+0+1+0+1 = 6<br> SSR = b²Σ(x-x̄)² = 0.36×10 = 3.6<br> R² = SSR/SST = 3.6/6 = 0.6（60%） '},
          {q:'某 Logistic 回归模型输出：logit(p) = -2.0 + 0.5x₁ + 1.2x₂。当 x₁=4, x₂=1 时，预测事件发生概率，并解释各系数的含义。',a:'logit(p) = -2.0 + 0.5×4 + 1.2×1 = -2 + 2 + 1.2 = 1.2<br> p = e^1.2 / (1 + e^1.2) ≈ 3.320 / 4.320 ≈ 0.769 ≈ 76.9%<br><br> 系数解释：<br> β₀ = -2.0：当 x₁=x₂=0 时，log-odds = -2.0<br> β₁ = 0.5：x₁ 每增加1单位，odds 变为原来的 e^0.5 ≈ 1.65 倍<br> β₂ = 1.2：x₂ 每增加1单位，odds 变为原来的 e^1.2 ≈ 3.32 倍<br> x₂ 对结果的影响大于 x₁ '},
        ]
      },
      {
        title: '广义线性模型',
        items: [
          'Logistic 回归（二分类 / 多分类）',
          '泊松回归（计数数据）',
          '连接函数与指数族分布',
          'odds ratio 与解释',
        ],
        resources: [
          {name:'Coursera: Bayesian Statistics（Duke University）',desc:'系统学习贝叶斯统计，从概念到R语言实现',url:'https://www.coursera.org/learn/bayesian-statistics',tag:'在线课程'},
          {name:'【吴恩达】机器学习课程 - 回归部分',desc:'斯坦福经典课程，深入讲解线性回归与正则化',url:'https://www.bilibili.com/video/BV1PE411i7CV',tag:'视频'},
        ],
        exercises: [
          {q:'某回归模型有三个自变量，相关系数矩阵显示 r₁₂=0.85, r₁₃=0.78, r₂₃=0.92。计算 VIF 并判断是否存在多重共线性问题。',a:'对于变量1：R₁² ≈ 1 (因为 r₁₂² 和 r₁₃² 都很高)<br> 使用简化公式：VIFⱼ = 1 / (1 - Rⱼ²)<br><br> 以变量2为例，近似计算 VIF ≈ 1/(1-0.92²) ≈ 1/(1-0.8464) ≈ 6.5<br> 结论：VIF > 5，存在严重多重共线性，建议剔除变量2或3之一，或进行PCA降维。 '},
          {q:'某 Beta-Binomial 共轭模型：先验 Beta(2,5)，观测到 10 次试验中成功 7 次。求后验分布，并计算后验均值。',a:'先验：Beta(α=2, β=5)<br> 似然：Binomial(n=10, k=7)<br><br> 共轭性质：后验 = Beta(α+k, β+n-k)<br> = Beta(2+7, 5+10-7) = Beta(9, 8)<br><br> 后验均值 = α\' / (α\'+β\') = 9 / (9+8) = 9/17 ≈ 0.529<br> 先验均值 = 2/7 ≈ 0.286，数据均值 = 7/10 = 0.7<br> 后验均值介于先验与数据之间，体现了贝叶斯更新的平衡。 '},
        ]
      },
      {
        title: '回归诊断',
        items: [
          '多重共线性检测（VIF）',
          '异方差性与加权最小二乘',
          '自相关（Durbin-Watson检验）',
          '异常值与强影响点（Cook距离）',
        ],
        resources: [
          {name:'知乎：线性回归完整指南（Python实现）',desc:'从原理到代码，涵盖诊断、正则化与模型选择',url:'https://zhuanlan.zhihu.com/p/32164933',tag:'文章'},
        ],
        exercises: [
          {q:'某时间序列前12期数据为：[120, 135, 148, 162, 175, 188, 195, 210, 225, 238, 250, 265]。使用简单指数平滑（α=0.3）预测第13期值，初始值 S₁=120。',a:'指数平滑公式：Sₜ = αYₜ + (1-α)Sₜ₋₁<br><br> S₂ = 0.3×135 + 0.7×120 = 124.5<br> S₃ = 0.3×148 + 0.7×124.5 = 131.55<br> ...（中间步骤省略）...<br> S₁₂ = 0.3×265 + 0.7×220.95 = 234.17<br><br> 第13期预测值 = S₁₂ ≈ 234.2 </div> </div> </div> '},
        ]
      },
      {
        title: '贝叶斯统计',
        items: [
          '先验分布、似然与后验分布',
          '共轭先验（Beta-Binomial等）',
          'MCMC 采样与 Gibbs 采样',
          '贝叶斯回归与层次模型',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '时间序列基础',
        items: [
          '平稳性检验（ADF检验）',
          'ARIMA 模型',
          '季节性分解',
          '指数平滑法',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '正则化方法',
        items: [
          '岭回归（L2正则化）',
          'Lasso 回归（L1正则化）',
          '弹性网络（Elastic Net）',
          '交叉验证与超参数调优',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'process-beginner': {
    title: '🔍 数据分析完整流程 · 数据收集与清洗',
    modules: [
      {
        title: '数据来源与采集',
        items: [
          '公开数据集：政府数据、Kaggle、UCI',
          'API 接口获取数据',
          '网页爬虫基础原理',
          '数据库连接与查询',
        ],
        resources: [
          {name:'Kaggle: Data Cleaning（免费课程）',desc:'系统学习数据清洗全流程，含实战案例与Python代码',url:'https://www.kaggle.com/learn/data-cleaning',tag:'在线课程'},
          {name:'知乎：数据清洗完全指南（Python版）',desc:'涵盖缺失值、异常值、重复值、格式转换的完整处理流程',url:'https://zhuanlan.zhihu.com/p/26820998',tag:'文章'},
        ],
        exercises: [
          {q:'某员工数据集包含以下字段：姓名、年龄、入职日期、工资。发现部分数据存在以下问题：① 3条年龄记录缺失；② 2条工资为-5000（不合理）；③ 入职日期格式不统一（有"2023/01/15"、"15-01-2023"、"2023年1月15日"）。请设计清洗方案。',a:'清洗方案：<br> ① 年龄缺失：用同部门员工年龄中位数填充，或建立基于职位的回归模型预测<br> ② 工资异常：-5000 可能是录入错误，检查原始记录；若确认错误，用同职位平均工资填充，或删除该记录<br> ③ 日期格式：统一转换为 ISO 标准格式 "YYYY-MM-DD"，使用 datetime 解析<br> 额外建议：建立数据校验规则（年龄 18-65，工资 >= 0），从源头减少脏数据 '},
          {q:'某销售数据集中"客户地区"字段有以下值：北京、北京市、BJ、上海、沪、shanghai、广州、Guangzhou。如何规范化该字段？',a:'规范化步骤：<br> 1. 建立标准映射表：北京 → 北京，北京市 → 北京，BJ → 北京<br> 2. 统一大小写：全部转为小写后匹配<br> 3. 模糊匹配：使用字符串相似度（如 Levenshtein 距离）处理拼写错误<br> 4. 最终输出标准化为：北京、上海、广州<br> 工具推荐：OpenRefine、Python fuzzywuzzy 库 '},
        ]
      },
      {
        title: '数据质量评估',
        items: [
          '完整性：缺失值识别与统计',
          '准确性：异常值检测与处理',
          '一致性：格式统一与编码问题',
          '时效性：数据更新频率评估',
        ],
        resources: [
          {name:'《Python数据处理》Jacqueline Kazil',desc:'用Python进行数据加载、清洗与整理，实战导向',url:'https://book.douban.com/subject/30145907/',tag:'书籍'},
          {name:'【莫烦Python】数据预处理教程',desc:'Pandas数据清洗实战，适合零基础入门',url:'https://www.bilibili.com/video/BV1p4411X7Zg',tag:'视频'},
        ],
        exercises: [
          {q:'某数据集有 1000 条记录，其中 80 条缺失"年龄"，50 条缺失"收入"，30 条同时缺失两者。用箱线图法检测"收入"异常值，已知 Q1=5000, Q3=15000。请计算异常值边界。',a:'IQR = Q3 - Q1 = 15000 - 5000 = 10000<br> 下界 = Q1 - 1.5×IQR = 5000 - 15000 = -10000<br> 上界 = Q3 + 1.5×IQR = 15000 + 15000 = 30000<br> 异常值判断：收入 < -10000 或 > 30000 为异常值<br> 由于收入通常为非负数，实际下界为 0<br> 最终异常值边界：收入 > 30000 视为异常高值<br> 缺失值处理：80+50-30=100 条至少缺失一个字段，可考虑删除（仅10%），或分别填充 '},
          {q:'某用户行为日志中，发现同一用户在同一秒内产生了 200 条记录（正常用户约为 1-5 条/秒）。请判断这是什么类型的数据问题，以及如何处理。',a:'问题类型：异常值（离群点）或爬虫/机器人行为<br><br> 处理方案：<br> 1. 业务判断：确认是否为正常业务场景（如批量操作）<br> 2. 若是爬虫：标记并删除或单独分析<br> 3. 若是数据重复：按用户+时间窗口去重，保留第一条<br> 4. 建立监控规则：同一用户每秒超过 20 条记录触发告警<br> 5. 使用滑动窗口统计：计算每分钟请求数，识别异常模式 '},
        ]
      },
      {
        title: '缺失值处理',
        items: [
          '删除法：行删除、列删除',
          '填充法：均值/中位数/众数填充',
          '插值法：线性插值、样条插值',
          '模型预测填充：KNN、回归填充',
        ],
        resources: [
          {name:'Awesome Public Datasets（GitHub）',desc:'高质量公开数据集汇总，涵盖各个领域',url:'https://github.com/awesomedata/awesome-public-datasets',tag:'资源'},
        ],
        exercises: [
          {q:'某问卷数据集包含多选题字段，原始格式为字符串（如"A,B,C"）。需要转换为适合分析的形式。请设计转换方案，并说明如何计算选择率。',a:'转换方案：<br> 1. 拆分字符串：按逗号分隔，得到每个选项的列表<br> 2. 独热编码（One-Hot Encoding）：为每个选项创建一列（A、B、C、D...），选中为1，未选为0<br> 3. 数据框形式：每行一个受访者，每列一个选项<br><br> 选择率计算：<br> 某选项选择率 = 选择该选项的人数 / 总受访人数 × 100%<br> 例如：100 人中 60 人选择了 A，则 A 的选择率 = 60%<br><br> Python 实现：df[\'options\'].str.get_dummies(sep=\',\') </div> </div> </div> '},
        ]
      },
      {
        title: '异常值处理',
        items: [
          '箱线图法（IQR 规则）',
          'Z-score 方法（3σ 原则）',
          '业务规则判断',
          '对数变换与标准化',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据格式转换',
        items: [
          '日期时间格式统一',
          '数值类型转换',
          '分类变量编码：独热编码、标签编码',
          '文本数据预处理',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据存储规范',
        items: [
          'CSV / Excel 存储最佳实践',
          '数据库表设计基础',
          '数据字典与元数据管理',
          '版本控制与备份策略',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'process-intermediate': {
    title: '🔍 数据分析完整流程 · 探索性数据分析（EDA）',
    modules: [
      {
        title: '单变量分析',
        items: [
          '分布形态：正态、偏态、多峰分布',
          '描述统计量：集中趋势与离散程度',
          '频数分析：分类变量分布',
          '数据变换：对数、平方根、Box-Cox',
        ],
        resources: [
          {name:'Kaggle: EDA to Prediction (Titanic案例)',desc:'从数据探索到预测建模的完整流程，经典入门案例',url:'https://www.kaggle.com/code/ash316/eda-to-prediction-dietanic',tag:'Notebook'},
          {name:'知乎：用Python进行探索性数据分析（EDA）完全指南',desc:'涵盖单变量、双变量、多变量分析的完整代码与可视化',url:'https://zhuanlan.zhihu.com/p/27471537',tag:'文章'},
        ],
        exercises: [
          {q:'某电商用户数据集包含：年龄、性别、消费金额、购买频次、注册时长。请设计一个完整的 EDA 分析框架，说明每一步应分析什么、用什么图表。',a:'EDA 分析框架：<br><br> 1. 数据质量检查：缺失值、异常值、重复值统计<br> 2. 单变量分析：<br> - 年龄：直方图（分布形态）<br> - 性别：饼图/条形图（占比）<br> - 消费金额：箱线图（识别高消费用户）<br> - 购买频次：柱状图（频次分布）<br> 3. 双变量分析：<br> - 年龄 vs 消费金额：散点图（看是否有年龄-消费关系）<br> - 性别 vs 消费金额：分组箱线图<br> - 注册时长 vs 购买频次：散点图+趋势线<br> 4. 多变量分析：相关性矩阵热力图<br> 5. 关键发现：识别高价值用户特征、流失风险用户画像 '},
          {q:'某商品销量数据呈现明显季节性波动。描述如何分解时间序列，并解释各组成部分的含义。若1-3月数据为 [120, 90, 150]，用3期移动平均计算趋势值。',a:'时间序列分解：Y = T + S + C + I（趋势 + 季节 + 周期 + 随机）<br><br> 各组成部分：<br> - 趋势（T）：长期发展方向<br> - 季节性（S）：固定周期内的重复波动<br> - 周期性（C）：非固定周期的波动<br> - 随机性（I）：不可解释的噪声<br><br> 3期移动平均（第2期）：<br> MA₂ = (120 + 90 + 150) / 3 = 360 / 3 = 120<br><br> 趋势值：第2期趋势值 ≈ 120（平滑后消除了部分季节波动） '},
        ]
      },
      {
        title: '双变量分析',
        items: [
          '连续 vs 连续：散点图、相关系数',
          '连续 vs 分类：箱线图、小提琴图',
          '分类 vs 分类：交叉表、马赛克图',
          '分组统计与聚合分析',
        ],
        resources: [
          {name:'《Python数据科学手册》Jake VanderPlas',desc:'NumPy、Pandas、Matplotlib、Scikit-Learn 完整数据科学生态',url:'https://book.douban.com/subject/30219708/',tag:'书籍'},
          {name:'【Datawhale】数据分析实战教程（Pandas+Matplotlib）',desc:'开源组织Datawhale的实战课程，项目驱动学习',url:'https://www.bilibili.com/video/BV1yg4y1q7p7',tag:'视频'},
        ],
        exercises: [
          {q:'某数据集中两个变量 X 和 Y 的皮尔逊相关系数为 0.85。这是否意味着 X 导致 Y？请解释原因，并给出可能的替代解释。',a:'不意味着 X 导致 Y。相关 ≠ 因果。<br><br> 可能原因：<br> 1. 反向因果：Y 可能是 X 的原因，而非结果<br> 2. 混淆变量：存在第三个变量 Z 同时影响 X 和 Y<br> 例：冰淇淋销量与溺水事故高度相关，但原因是"气温"<br> 3. 巧合相关：纯属偶然，尤其是在小样本中<br> 4. 选择偏差：数据来源本身存在系统性偏差<br><br> 正确做法：建立对照实验（A/B测试）或采用工具变量、因果推断方法（如DID）来验证因果关系。 '},
          {q:'某数据集包含客户满意度评分（1-10分）和复购率。分析发现满意度与复购率的相关系数仅为 0.15。这是否说明满意度不重要？如何进行更深入的分析？',a:'不能直接得出"满意度不重要"的结论。<br><br> 深入分析方案：<br> 1. 检查非线性关系：散点图可能呈现阈值效应（如评分>=8才复购）<br> 2. 分组分析：按客户类型、产品类别分组，看相关性是否变化<br> 3. 控制变量：考虑价格敏感度、竞争环境等混淆变量<br> 4. 时间滞后效应：满意度影响可能在3-6个月后显现<br> 5. 建立回归模型：加入其他变量后，满意度的系数可能显著<br> 6. 因果分析：进行 A/B 测试验证满意度提升是否带来复购增长 '},
        ]
      },
      {
        title: '多变量分析',
        items: [
          '相关性矩阵与热力图',
          '成对散点图矩阵',
          '主成分分析（PCA）直观理解',
          '聚类分析初步：K-Means',
        ],
        resources: [
          {name:'数据派THU：EDA最佳实践与常见陷阱',desc:'清华大学数据科学研究院出品的EDA方法论总结',url:'https://mp.weixin.qq.com/s/EDA-best-practices',tag:'文章'},
        ],
        exercises: [
          {q:'某特征（如用户浏览时长）呈现严重右偏分布（长尾）。请说明这对建模的影响，以及常用的处理方法。',a:'右偏分布的影响：<br> 1. 均值被极端大值拉高，不能代表典型值<br> 2. 违反线性回归的正态性假设<br> 3. 距离计算受极端值影响（如KNN、K-Means）<br> 4. 模型对少数极端样本过度敏感<br><br> 处理方法：<br> 1. 对数变换：log(1+x) 能有效压缩长尾<br> 2. 平方根变换：适用于计数数据<br> 3. Box-Cox 变换：自动寻找最优变换参数<br> 4. 分箱处理：将连续值转为离散分位数组<br> 5. 使用对异常值鲁棒的模型（如树模型、分位数回归） </div> </div> </div> '},
        ]
      },
      {
        title: '时间序列分析',
        items: [
          '趋势、季节性与周期性分解',
          '同比与环比分析',
          '移动平均与平滑',
          '滞后分析与自相关性',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '特征工程入门',
        items: [
          '特征缩放：标准化、归一化',
          '特征构造：多项式、交互项',
          '特征选择：相关性、互信息',
          '降维：PCA、t-SNE 直观理解',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: 'EDA 报告撰写',
        items: [
          '数据质量概述',
          '关键发现与业务洞察',
          '可视化最佳实践',
          '数据故事叙述（Data Storytelling）',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'process-advanced': {
    title: '🔍 数据分析完整流程 · 建模验证与报告',
    modules: [
      {
        title: '模型选择与评估',
        items: [
          '偏差-方差权衡',
          '交叉验证：K折、留一法、分层抽样',
          '评估指标：MSE、RMSE、MAE、R²',
          '分类指标：准确率、精确率、召回率、F1、AUC-ROC',
        ],
        resources: [
          {name:'《Python机器学习基础教程》Andreas Muller',desc:'scikit-learn 完整指南，涵盖模型评估、调参与流水线',url:'https://book.douban.com/subject/30349453/',tag:'书籍'},
          {name:'Coursera: 机器学习（吴恩达 Stanford）',desc:'机器学习经典课程，系统讲解建模、评估与优化',url:'https://www.coursera.org/learn/machine-learning',tag:'在线课程'},
        ],
        exercises: [
          {q:'某模型在训练集上准确率为 95%，在测试集上仅为 72%。请诊断这是什么问题，并提出至少3种解决方案。',a:'问题诊断：严重过拟合（Overfitting）<br><br> 解决方案：<br> 1. 增加正则化：L1/L2惩罚，降低模型复杂度<br> 2. 增加训练数据：数据增强、收集更多样本<br> 3. 特征降维：减少冗余特征，使用PCA或特征选择<br> 4. 简化模型：从神经网络改为决策树/线性模型<br> 5. 交叉验证：使用K折交叉验证评估模型泛化能力<br> 6. 提前停止（Early Stopping）：监控验证集损失<br> 7. Dropout（神经网络）：训练时随机丢弃神经元 '},
          {q:'某推荐系统 A/B 测试：对照组转化率 5%，实验组 5.5%，每组样本 10000 人。判断实验是否显著，并计算提升率与置信区间。',a:'H₀: p₁ = p₂, H₁: p₁ ≠ p₂, α = 0.05<br><br> 对照组：n₁=10000, x₁=500, p̂₁=0.05<br> 实验组：n₂=10000, x₂=550, p̂₂=0.055<br><br> 合并比例 p̂ = (500+550)/(10000+10000) = 0.0525<br> SE = √[p̂(1-p̂)(1/n₁+1/n₂)] = √[0.0525×0.9475×0.0002] ≈ 0.00315<br> z = (0.055-0.05) / 0.00315 ≈ 1.587<br> z₀.₀₂₅ = 1.96, |z| = 1.587 < 1.96<br> 结论：差异不显著（p ≈ 0.113）<br><br> 提升率 = (5.5-5)/5 = 10%<br> 95% CI 差值：0.005 ± 1.96×0.00315 ≈ [-0.0012, 0.0112] '},
        ]
      },
      {
        title: '正则化与优化',
        items: [
          '过拟合与欠拟合识别',
          'L1/L2 正则化原理',
          '网格搜索与随机搜索',
          '贝叶斯优化调参',
        ],
        resources: [
          {name:'知乎：A/B测试完整指南（含实验设计）',desc:'从实验设计到显著性检验，互联网数据分析必备',url:'https://zhuanlan.zhihu.com/p/33956907',tag:'文章'},
          {name:'SHAP 官方文档：模型可解释性',desc:'用SHAP值解释任何机器学习模型，Python实现',url:'https://shap.readthedocs.io/',tag:'文档'},
        ],
        exercises: [
          {q:'某分类模型在1000条测试数据上表现：真正例(TP)=80，假正例(FP)=20，真反例(TN)=850，假反例(FN)=50。请计算精确率、召回率、F1-score，并分析模型偏向。',a:'混淆矩阵：<br> | | 预测正 | 预测负 |<br> | 实际正 | TP=80 | FN=50 | 实际正=130<br> | 实际负 | FP=20 | TN=850 | 实际负=870<br><br> 精确率 P = TP/(TP+FP) = 80/100 = 80%<br> 召回率 R = TP/(TP+FN) = 80/130 ≈ 61.5%<br> F1 = 2PR/(P+R) = 2×0.8×0.615/(0.8+0.615) ≈ 69.4%<br><br> 模型偏向：精确率较高但召回率偏低，说明模型较为"保守"，<br> 倾向于只预测高置信度样本为正，导致漏掉了不少正例。<br> 若业务场景对漏报敏感（如疾病检测），需降低阈值提升召回率。 '},
          {q:'某线性回归模型 R² = 0.85，但残差图显示明显的漏斗形状（异方差）。请说明异方差的影响，以及如何修正。',a:'异方差的影响：<br> 1. OLS估计虽无偏但非有效（非最小方差）<br> 2. 标准误估计有偏，导致假设检验不可靠<br> 3. 置信区间和p值不准确<br><br> 修正方法：<br> 1. 加权最小二乘（WLS）：对高方差观测赋予较小权重<br> 2. 对因变量取对数：ln(Y) = β₀ + β₁X + ε<br> 3. 使用异方差稳健标准误（Huber-White标准误）<br> 4. 广义线性模型（GLM）：使用适当的方差函数<br> 5. Box-Cox变换：寻找最优幂变换稳定方差 '},
        ]
      },
      {
        title: '模型解释性',
        items: [
          '特征重要性分析',
          'SHAP 值与 LIME 解释',
          '部分依赖图（PDP）',
          '模型可解释性 vs 预测精度权衡',
        ],
        resources: [
          {name:'《因果推断：混音带》Scott Cunningham',desc:'Causal Inference: The Mixtape，经济学视角的因果推断',url:'https://book.douban.com/subject/34857237/',tag:'书籍'},
        ],
        exercises: [
          {q:'某公司想评估新培训方案对员工绩效的影响。由于无法随机分组，现有以下数据：培训前后各员工的绩效评分、部门、入职年限。请设计一个准实验分析方案。',a:'方案：双重差分法（DID）或倾向得分匹配（PSM）<br><br> DID 方案：<br> 1. 找到未接受培训的对照组（如其他部门）<br> 2. 定义：Y_it = α + β·Treat_i + γ·Post_t + δ·(Treat×Post) + ε<br> 3. δ 即为培训效应（ATT）<br> 4. 平行趋势检验：培训前两组趋势一致<br><br> PSM 方案：<br> 1. 用 Logistic 回归预测每个员工接受培训的概率（倾向得分）<br> 2. 按倾向得分匹配对照组（1:1最近邻匹配）<br> 3. 比较匹配后的培训组与对照组的绩效差异<br><br> 控制变量：部门、入职年限、基线绩效评分 </div> </div> </div> '},
        ]
      },
      {
        title: '因果推断',
        items: [
          '实验设计：A/B测试、RCT',
          '准实验方法：DID、RDD、PSM',
          '因果图与后门准则',
          '工具变量法',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据报告撰写',
        items: [
          '金字塔原理：结论先行',
          '数据可视化叙事',
          'BI 仪表板设计',
          '自动化报告：Markdown、Jupyter、R Markdown',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '模型部署与监控',
        items: [
          '模型版本管理（MLflow）',
          '在线 vs 离线预测',
          '模型漂移检测',
          '效果回测与迭代优化',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'excel-beginner': {
    title: '📃 Excel 数据分析 · 基础函数与透视表',
    modules: [
      {
        title: '基础函数',
        items: [
          '数学函数：SUM、AVERAGE、MAX、MIN、COUNT',
          '统计函数：COUNTIF、SUMIF、AVERAGEIF',
          '逻辑函数：IF、AND、OR、NOT',
          '查找函数：VLOOKUP、HLOOKUP、INDEX+MATCH',
        ],
        resources: [
          {name:'【ExcelHome】Excel 数据透视表完全教程',desc:'国内最权威的Excel教程，从基础到高级全覆盖',url:'https://www.bilibili.com/video/BV1Zs4y1T73n',tag:'视频'},
          {name:'《Excel数据分析实战》',desc:'从零开始学Excel数据分析，案例丰富，实操性强',url:'https://book.douban.com/subject/30215075/',tag:'书籍'},
        ],
        exercises: [
          {q:'某销售表有"产品名称"、"销售额"、"地区"三列。请写出：① 计算所有产品总销售额的公式；② 统计"华东"地区销售记录数的公式；③ 查找"产品A"销售额的公式（假设产品名称不重复）。',a:'假设数据在 B2:D100（产品名称B列、销售额C列、地区D列）<br><br> ① 总销售额：=SUM(C2:C100)<br><br> ② 华东地区记录数：=COUNTIF(D2:D100,"华东")<br><br> ③ 查找产品A销售额：=VLOOKUP("产品A",B2:C100,2,FALSE)<br> 或使用 INDEX+MATCH：=INDEX(C2:C100,MATCH("产品A",B2:B100,0)) '},
          {q:'某员工表有"姓名"、"入职日期"、"部门"列。需要计算每位员工工龄（年），并判断工龄>=5年且部门="技术部"的员工。请写出公式。',a:'假设入职日期在B列，部门在C列，从第2行开始<br><br> 工龄计算（D列）：<br> =DATEDIF(B2,TODAY(),"Y")<br><br> 判断技术部且工龄>=5年（E列）：<br> =IF(AND(C2="技术部",DATEDIF(B2,TODAY(),"Y")>=5),"符合条件","不符合")<br><br> 或使用 IFS 函数（Excel 2019+）：<br> =IFS(AND(C2="技术部",D2>=5),"符合",TRUE,"不符合") '},
        ]
      },
      {
        title: '文本与日期函数',
        items: [
          '文本函数：LEFT、RIGHT、MID、CONCATENATE',
          '日期函数：TODAY、DATEDIF、EOMONTH',
          '文本清洗：TRIM、SUBSTITUTE、LEN',
          '格式转换：TEXT、VALUE',
        ],
        resources: [
          {name:'Microsoft Excel 官方帮助文档',desc:'最全的函数参考与操作指南，官方权威来源',url:'https://support.microsoft.com/zh-cn/excel',tag:'文档'},
          {name:'【戴师兄】Excel数据分析基础（电商实战）',desc:'电商场景下的Excel数据分析，贴近业务实战',url:'https://www.bilibili.com/video/BV1G7411E7nM',tag:'视频'},
        ],
        exercises: [
          {q:'某订单表有"订单日期"、"产品类别"、"金额"列。请描述：如何用数据透视表统计每月各产品类别的销售总额？',a:'数据透视表操作步骤：<br><br> 1. 选中数据区域，插入 → 数据透视表<br> 2. 行字段：将"订单日期"拖到行区域，右键 → 分组 → 按月分组<br> 3. 列字段：将"产品类别"拖到列区域<br> 4. 值字段：将"金额"拖到值区域，确保汇总方式为"求和"<br> 5. 添加切片器（可选）：插入 → 切片器 → 选择年份<br> 6. 美化：设计 → 报表布局 → 以大纲形式显示<br><br> 结果：得到一个按月（行）×产品类别（列）的销售额矩阵表 '},
          {q:'某数据列包含不规范的姓名格式（如" 张三 ","李四 "," 王五"）。请写出公式统一去除前后空格，并转换为首字母大写格式。',a:'假设原始数据在 A 列<br><br> 去除空格：=TRIM(A2)<br><br> 首字母大写（Excel 2013+）：<br> =PROPER(TRIM(A2))<br><br> 或逐字处理（兼容旧版）：<br> =UPPER(LEFT(TRIM(A2),1))&LOWER(MID(TRIM(A2),2,LEN(TRIM(A2))))<br><br> 结果：" 张三 " → "张三"<br> "李四 " → "李四"<br> " 王五" → "王五" '},
        ]
      },
      {
        title: '数据透视表',
        items: [
          '透视表创建与布局设置',
          '行/列/值/筛选字段配置',
          '计算字段与计算项',
          '分组功能：日期、数值分组',
        ],
        resources: [
          {name:'知乎：Excel数据透视表最全攻略',desc:'透视表所有功能详解，附常用技巧汇总',url:'https://zhuanlan.zhihu.com/p/137650332',tag:'文章'},
        ],
        exercises: [
          {q:'某库存表有"产品编号"、"库存量"、"安全库存"列。需要用条件格式标记：库存量低于安全库存的单元格为红色，高于安全库存2倍的为绿色。如何设置？',a:'条件格式设置步骤：<br><br> 1. 选中库存量列（B列）<br> 2. 开始 → 条件格式 → 新建规则 → 使用公式<br> 3. 规则1（红色）：公式 =B2<C2，格式设为红色填充<br> 4. 规则2（绿色）：公式 =B2>2*C2，格式设为绿色填充<br> 5. 确定，应用规则<br><br> 注意：规则顺序很重要，先设置红色再设置绿色，或调整优先级。<br> 若同时满足两个条件（不可能，因为库存量不可能既小于又大于），使用"如果为真则停止"。 </div> </div> </div> '},
        ]
      },
      {
        title: '数据排序与筛选',
        items: [
          '自动筛选与高级筛选',
          '多条件排序',
          '自定义排序列表',
          '切片器与日程表',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '条件格式',
        items: [
          '突出显示单元格规则',
          '数据条、色阶、图标集',
          '使用公式设置格式',
          '管理规则与优先级',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '基础图表',
        items: [
          '柱形图、条形图、折线图',
          '饼图与圆环图',
          '散点图与气泡图',
          '图表美化与元素设置',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'excel-intermediate': {
    title: '📃 Excel 数据分析 · 高级函数与可视化',
    modules: [
      {
        title: '高级函数',
        items: [
          '数组公式：SUMPRODUCT、FREQUENCY',
          '动态数组：FILTER、SORT、UNIQUE、SEQUENCE',
          '查找函数：XLOOKUP（Excel 365）、INDIRECT',
          '财务函数：NPV、IRR、PMT',
        ],
        resources: [
          {name:'【ExcelHome】Excel 高级函数与数组公式',desc:'深入讲解SUMPRODUCT、数组公式、动态数组等高级函数',url:'https://www.bilibili.com/video/BV1wE411p7kT',tag:'视频'},
          {name:'《Excel 2019应用大全》',desc:'Excel功能百科全书，涵盖高级函数、图表、数据分析工具',url:'https://book.douban.com/subject/30417155/',tag:'书籍'},
        ],
        exercises: [
          {q:'某销售表有"销售员"、"产品"、"销售额"列。需要统计每位销售员销售额排名前3的产品。请用公式实现（Excel 365）。',a:'使用 FILTER + SORT 函数（Excel 365）：<br><br> 假设销售员在A列，产品在B列，销售额在C列<br><br> 要查找"张三"的 top3 产品：<br> =INDEX(SORT(FILTER(B:C,A:A="张三"),2,-1),SEQUENCE(3),1)<br><br> 或使用传统方法（所有版本）：<br> 1. 先创建辅助列，用 COUNTIFS 统计同一销售员中销售额更大的记录数<br> 2. 筛选辅助列 <= 2 的记录<br> 3. 即为该销售员的前3名产品 '},
          {q:'某数据表需要实现下拉菜单联动：A列选择"省份"后，B列下拉只显示该省的城市。如何实现？',a:'级联下拉菜单实现步骤：<br><br> 1. 准备数据：每个省份对应一个列，列名为省份名，列中为城市列表<br> 2. 定义名称：选中每个省份的城市列表，公式 → 定义名称 → 使用省份名<br> 3. A列数据验证：允许"序列"，来源 =省份列表区域<br> 4. B列数据验证：允许"序列"，来源 =INDIRECT(A2)<br> 5. 关键：INDIRECT 函数将 A2 的文本值转为名称引用<br><br> 注意事项：省份名称不能与 Excel 内置名称冲突<br> 若名称含空格，需用单引号包裹：=INDIRECT("\'"&A2&"\'") '},
        ]
      },
      {
        title: '数据验证与表单',
        items: [
          '下拉列表与级联菜单',
          '输入限制与错误提示',
          '创建动态数据录入表单',
          '多工作表数据联动',
        ],
        resources: [
          {name:'【Power Pivot】数据建模与DAX入门',desc:'学习Power Pivot数据模型，建立多表关联分析',url:'https://www.bilibili.com/video/BV1U7411K7Lv',tag:'视频'},
          {name:'知乎：Excel动态图表制作完全指南',desc:'使用OFFSET、名称管理器制作交互式动态图表',url:'https://zhuanlan.zhihu.com/p/75884022',tag:'文章'},
        ],
        exercises: [
          {q:'某员工考勤表记录每月出勤天数，需要制作动态图表，随选择不同月份显示对应数据。请描述实现方法。',a:'动态图表实现方法：<br><br> 1. 创建下拉选择：数据验证 → 序列（月份列表）<br> 2. 定义名称：公式 → 定义名称<br> - 月份：=Sheet1!$A$2:$A$13<br> - 数据：=OFFSET(Sheet1!$B$1,MATCH(Sheet1!$E$1,Sheet1!$A$2:$A$13,0),0,1,12)<br> 3. 插入图表，选择数据时引用已定义的名称<br> 4. 每次下拉选择月份，OFFSET 动态返回对应行数据<br> 5. 图表自动更新<br><br> 或使用 Excel 365：直接结合 FILTER 和 SORT 函数制作动态数组图表 '},
          {q:'某财务表需要计算投资回报率。已知初始投资100万，未来5年现金流分别为：30万、40万、35万、25万、20万。用Excel函数计算IRR和NPV（折现率10%）。',a:'现金流排列（第0年为初始投资）：<br> -100, 30, 40, 35, 25, 20（单位：万元）<br><br> IRR计算：=IRR(A1:A6) ≈ 14.2%<br><br> NPV计算（折现率10%）：<br> =NPV(10%,A2:A6)+A1<br> = NPV(10%,30,40,35,25,20) - 100<br> ≈ 107.24 - 100 = 7.24（万元）<br><br> 结论：IRR > 10% 且 NPV > 0，项目值得投资。 '},
        ]
      },
      {
        title: '高级图表',
        items: [
          '组合图（柱形+折线）',
          '瀑布图与漏斗图',
          '帕累托图（二八法则）',
          '动态图表：OFFSET+名称管理器',
        ],
        resources: [
          {name:'Microsoft Power Query 官方文档',desc:'Excel数据获取和转换的官方指南，ETL操作大全',url:'https://learn.microsoft.com/zh-cn/power-query/',tag:'文档'},
        ],
        exercises: [
          {q:'某Power Pivot数据模型包含"订单表"和"产品表"，通过产品ID关联。需要计算每个产品类别的总销售额。写出DAX度量值。',a:'DAX 度量值：<br><br> 总销售额 = SUM(订单表[销售额])<br><br> 或显式写（推荐）：<br> 总销售额 = SUMX(订单表, 订单表[数量] * 订单表[单价])<br><br> 在透视表中将"产品类别"（来自产品表）放入行区域，<br> 将"总销售额"度量值放入值区域即可自动按类别汇总。<br><br> 注：由于建立了关系，Power Pivot会自动按产品类别分组计算。 </div> </div> </div> '},
        ]
      },
      {
        title: 'Power Pivot 基础',
        items: [
          '数据模型与关系建立',
          '计算列与度量值（DAX入门）',
          'KPI指标与层次结构',
          '多表关联透视分析',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '宏与自动化',
        items: [
          '录制宏与基本编辑',
          '按钮与表单控件',
          '自动刷新与定时任务',
          '自定义功能区',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据连接',
        items: [
          '从Web/数据库导入数据',
          'Power Query 数据转换',
          '刷新设置与参数查询',
          'CSV/JSON/XML数据导入',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'excel-advanced': {
    title: '📃 Excel 数据分析 · VBA 自动化与 Power Query',
    modules: [
      {
        title: 'VBA 编程基础',
        items: [
          '变量、循环、条件语句',
          '过程与函数',
          '对象模型：Workbook、Worksheet、Range',
          '错误处理：On Error 语句',
        ],
        resources: [
          {name:'【ExcelHome】VBA编程从入门到精通',desc:'系统学习VBA编程，实现Excel自动化办公',url:'https://www.bilibili.com/video/BV1Jb411L7KX',tag:'视频'},
          {name:'《Excel VBA 编程实战》',desc:'从录制宏到独立开发，VBA实战案例大全',url:'https://book.douban.com/subject/30285320/',tag:'书籍'},
        ],
        exercises: [
          {q:'用VBA编写一个宏：遍历某文件夹下所有Excel文件，将每个文件的"Sheet1"中A1:D100的数据汇总到一个新的工作簿中，并在汇总表中标记数据来源文件名。',a:'VBA 代码框架：<br><br> Sub 汇总数据()<br> &nbsp;&nbsp;Dim folderPath As String, fileName As String<br> &nbsp;&nbsp;Dim wb As Workbook, ws As Worksheet<br> &nbsp;&nbsp;Dim targetWB As Workbook, targetWS As Worksheet<br> &nbsp;&nbsp;Dim lastRow As Long<br><br> &nbsp;&nbsp;folderPath = "C:\\\\\\\\数据\\\\\\\\"<br> &nbsp;&nbsp;fileName = Dir(folderPath & "*.xlsx")<br><br> &nbsp;&nbsp;Set targetWB = Workbooks.Add<br> &nbsp;&nbsp;Set targetWS = targetWB.Sheets(1)<br> &nbsp;&nbsp;targetWS.Range("A1:D1").Value = Array("数据1","数据2","数据3","来源文件")<br><br> &nbsp;&nbsp;Do While fileName <> ""<br> &nbsp;&nbsp;&nbsp;&nbsp;Set wb = Workbooks.Open(folderPath & fileName)<br> &nbsp;&nbsp;&nbsp;&nbsp;lastRow = targetWS.Cells(Rows.Count, 1).End(xlUp).Row + 1<br> &nbsp;&nbsp;&nbsp;&nbsp;wb.Sheets("Sheet1").Range("A1:D100").Copy targetWS.Cells(lastRow, 1)<br> &nbsp;&nbsp;&nbsp;&nbsp;targetWS.Range(targetWS.Cells(lastRow, 4), targetWS.Cells(lastRow+99, 4)).Value = fileName<br> &nbsp;&nbsp;&nbsp;&nbsp;wb.Close SaveChanges:=False<br> &nbsp;&nbsp;&nbsp;&nbsp;fileName = Dir()<br> &nbsp;&nbsp;Loop<br> End Sub '},
          {q:'某Power Pivot数据模型需要计算"销售额同比增长率"。已知有日期表和订单表，写出DAX度量值。',a:'DAX 度量值：<br><br> 销售额 = SUM(订单表[金额])<br><br> 去年同期销售额 =<br> CALCULATE(<br> &nbsp;&nbsp;[销售额],<br> &nbsp;&nbsp;SAMEPERIODLASTYEAR(日期表[日期])<br> )<br><br> 同比增长率 =<br> DIVIDE(<br> &nbsp;&nbsp;[销售额] - [去年同期销售额],<br> &nbsp;&nbsp;[去年同期销售额],<br> &nbsp;&nbsp;0<br> )<br><br> 或简写：<br> 同比增长率 = [销售额] / [去年同期销售额] - 1<br><br> 注意：需确保日期表连续且完整，标记为日期表。 '},
        ]
      },
      {
        title: '自动化任务',
        items: [
          '批量数据处理与格式设置',
          '自动生成报表与图表',
          '用户窗体（UserForm）开发',
          '定时任务与事件触发',
        ],
        resources: [
          {name:'Microsoft Power Query M 语言文档',desc:'Power Query官方M语言参考，高级数据转换指南',url:'https://docs.microsoft.com/zh-cn/power-query/',tag:'文档'},
          {name:'【DAX权威指南】Power Pivot与DAX详解',desc:'DAX函数详解，时间智能与筛选上下文深度解析',url:'https://www.bilibili.com/video/BV1vE411C7ZJ',tag:'视频'},
        ],
        exercises: [
          {q:'用Power Query M语言写一个自定义函数：输入一个文本字符串，返回去除所有数字后的纯文本。例如输入"产品A123"，返回"产品A"。',a:'M 语言自定义函数：<br><br> (inputText as text) as text =><br> let<br> &nbsp;&nbsp;chars = Text.ToList(inputText),<br> &nbsp;&nbsp;filtered = List.Select(chars, each not List.Contains({"0".."9"}, _)),<br> &nbsp;&nbsp;result = Text.Combine(filtered)<br> in<br> &nbsp;&nbsp;result<br><br> 使用示例：<br> = 去除数字("产品A123") → 返回 "产品A"<br><br> 更简洁写法（使用正则表达式）：<br> = Text.Select(inputText, {"A".."Z","a".."z","一".."龟"})<br> 保留字母和中文，去除数字和符号 '},
          {q:'某VBA程序在处理大量数据时运行缓慢。请列出至少5种优化性能的方法。',a:'VBA 性能优化方法：<br><br> 1. 关闭屏幕刷新：Application.ScreenUpdating = False<br> 2. 关闭自动计算：Application.Calculation = xlCalculationManual<br> 3. 使用数组代替单元格操作：将Range读入数组处理，再写回<br> 4. 避免Select和Activate：直接引用对象，如 Worksheets("Sheet1").Range("A1").Value<br> 5. 关闭事件触发：Application.EnableEvents = False<br> 6. 使用With语句减少对象引用<br> 7. 声明变量类型：避免Variant，使用Long、Double等显式类型<br> 8. 处理完成后恢复设置：ScreenUpdating=True, Calculation=xlCalculationAutomatic '},
        ]
      },
      {
        title: 'Power Query 高级',
        items: [
          'M 语言基础与自定义函数',
          '合并查询与追加查询',
          '参数化查询与动态数据源',
          '错误处理与数据质量检查',
        ],
        resources: [
          {name:'知乎：Power Query M语言实战技巧',desc:'自定义函数、错误处理、动态参数化查询',url:'https://zhuanlan.zhihu.com/p/84536588',tag:'文章'},
        ],
        exercises: [
          {q:'某Excel工作簿需要每天自动从数据库刷新数据。请描述使用Power Query连接SQL数据库并设置自动刷新的完整步骤。',a:'完整步骤：<br><br> 1. 数据 → 获取数据 → 从数据库 → 从 SQL Server<br> 2. 输入服务器地址和数据库名称，连接<br> 3. 选择需要的表或编写SQL查询<br> 4. 在 Power Query 编辑器中进行数据清洗和转换<br> 5. 关闭并加载到 → 选择"仅创建连接"或"表"<br> 6. 数据 → 查询和连接 → 右键查询 → 属性<br> 7. 勾选"启用后台刷新"和"刷新频率"（如每60分钟）<br> 8. 数据 → 刷新全部 → 连接属性 → 使用状况 → 勾选"打开文件时刷新数据"<br> 9. 高级：使用 VBA 设置定时刷新或结合 Windows 任务计划程序<br> 10. 保存凭据：使用 Windows 身份验证或存储加密密码 </div> </div> </div> '},
        ]
      },
      {
        title: '数据集成',
        items: [
          '连接 SQL Server / MySQL / Oracle',
          '从 Web API 获取 JSON/XML',
          'SharePoint 与云端数据',
          '增量刷新与数据分区',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '高级 DAX',
        items: [
          'CALCULATE 与筛选上下文',
          '时间智能函数：YTD、QTD、同比环比',
          '迭代函数：SUMX、AVERAGEX',
          '关系函数与桥梁表',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '性能优化',
        items: [
          '减少屏幕刷新与自动计算',
          '数组代替循环',
          '数据模型优化',
          '大型数据集处理策略',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'sql-beginner': {
    title: '🗄️ SQL 数据库取数 · 基础查询与筛选',
    modules: [
      {
        title: 'SQL 基础语法',
        items: [
          'SELECT / FROM / WHERE 基础结构',
          'SELECT DISTINCT 去重',
          'AS 别名设置',
          'SQL 执行顺序理解',
        ],
        resources: [
          {name:'【MySQL】SQL基础教程（半天学会SQL）',desc:'快速入门SQL，涵盖SELECT到聚合函数的完整基础',url:'https://www.bilibili.com/video/BV1J7411d7Dq',tag:'视频'},
          {name:'SQLZoo - 交互式SQL练习平台',desc:'在线编写SQL并立即执行，从基础到高级循序渐进',url:'https://sqlzoo.net/',tag:'在线工具'},
        ],
        exercises: [
          {q:'某员工表 employees(employee_id, name, department, salary, hire_date)。请写出SQL：① 查询所有员工的姓名和工资；② 查询工资大于10000的员工；③ 查询2018年后入职的员工。',a:'① 查询姓名和工资：<br> SELECT name, salary FROM employees;<br><br> ② 工资大于10000：<br> SELECT * FROM employees WHERE salary > 10000;<br><br> ③ 2018年后入职：<br> SELECT * FROM employees WHERE hire_date >= \'2018-01-01\';<br> 或：SELECT * FROM employees WHERE YEAR(hire_date) >= 2018;（MySQL）<br> 或：SELECT * FROM employees WHERE hire_date >= DATE \'2018-01-01\';（Oracle） '},
          {q:'某订单表 orders(order_id, customer_name, product, amount, order_date)。请写出SQL：① 统计总订单数和总金额；② 查询每个客户的订单总金额；③ 查询订单金额前10的客户。',a:'① 总订单数和总金额：<br> SELECT COUNT(*) AS 订单数, SUM(amount) AS 总金额 FROM orders;<br><br> ② 每个客户订单总金额：<br> SELECT customer_name, SUM(amount) AS 总金额<br> FROM orders<br> GROUP BY customer_name;<br><br> ③ 订单金额前10客户：<br> SELECT customer_name, SUM(amount) AS 总金额<br> FROM orders<br> GROUP BY customer_name<br> ORDER BY 总金额 DESC<br> LIMIT 10;<br> -- SQL Server: TOP 10<br> -- Oracle: FETCH FIRST 10 ROWS ONLY '},
        ]
      },
      {
        title: '条件筛选',
        items: [
          '比较运算符：=, <>, >, <, >=, <=',
          '逻辑运算符：AND, OR, NOT',
          'IN / NOT IN 列表筛选',
          'BETWEEN 范围筛选',
        ],
        resources: [
          {name:'《SQL必知必会》Ben Forta',desc:'最受欢迎的SQL入门书，简洁实用，适合快速上手',url:'https://book.douban.com/subject/25851807/',tag:'书籍'},
          {name:'LeetCode SQL专项练习',desc:'通过刷题巩固SQL，从简单到困难，覆盖面试考点',url:'https://leetcode.cn/studyplan/sql/',tag:'练习'},
        ],
        exercises: [
          {q:'某产品表 products(product_id, product_name, category, price, stock)。请写出SQL：① 查询品类为"电子产品"且库存大于100的产品；② 查询产品名包含"手机"的产品；③ 查询价格前20%的产品。',a:'① 电子产品且库存>100：<br> SELECT * FROM products<br> WHERE category = \'电子产品\' AND stock > 100;<br><br> ② 产品名包含"手机"：<br> SELECT * FROM products WHERE product_name LIKE \'%手机%\';<br><br> ③ 价格前20%产品：<br> -- MySQL:<br> SELECT * FROM products<br> WHERE price >= (SELECT price FROM (<br> &nbsp;&nbsp;SELECT price FROM products ORDER BY price DESC<br> &nbsp;&nbsp;LIMIT 1 OFFSET (SELECT COUNT(*)*0.8 FROM products)<br> ) AS t);<br><br> -- 更简洁（MySQL 8+ / PostgreSQL）:<br> SELECT * FROM (<br> &nbsp;&nbsp;SELECT *, PERCENT_RANK() OVER (ORDER BY price DESC) AS pct<br> &nbsp;&nbsp;FROM products<br> ) t WHERE pct <= 0.2; '},
          {q:'某员工表有部门(dept)和工资(salary)字段。请写出SQL查询：平均工资大于5000的部门，并按平均工资降序排列。',a:'SELECT dept, AVG(salary) AS avg_salary<br> FROM employees<br> GROUP BY dept<br> HAVING AVG(salary) > 5000<br> ORDER BY avg_salary DESC;<br><br> 关键点：<br> 1. GROUP BY 按部门分组<br> 2. AVG(salary) 计算平均工资<br> 3. HAVING 筛选分组结果（不能用WHERE）<br> 4. ORDER BY 降序排列<br> 5. SQL执行顺序：FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY '},
        ]
      },
      {
        title: '模糊查询',
        items: [
          'LIKE 与通配符：%, _',
          'NULL 值判断：IS NULL / IS NOT NULL',
          '转义字符处理',
          '正则表达式（部分数据库支持）',
        ],
        resources: [
          {name:'知乎：SQL从入门到熟练（数据分析专用版）',desc:'针对数据分析场景的SQL学习路径，配套练习数据',url:'https://zhuanlan.zhihu.com/p/27436289',tag:'文章'},
        ],
        exercises: [
          {q:'某表中某字段有NULL值。请写出SQL：① 查询该字段为NULL的记录；② 查询该字段为NULL的记录数；③ 将NULL替换为0。',a:'① 查询NULL记录：<br> SELECT * FROM table_name WHERE column_name IS NULL;<br><br> ② 查询NULL记录数：<br> SELECT COUNT(*) FROM table_name WHERE column_name IS NULL;<br><br> ③ 将NULL替换为0：<br> -- MySQL:<br> SELECT IFNULL(column_name, 0) FROM table_name;<br> -- SQL Server:<br> SELECT ISNULL(column_name, 0) FROM table_name;<br> -- PostgreSQL / Oracle:<br> SELECT COALESCE(column_name, 0) FROM table_name;<br><br> 通用写法（所有数据库）：COALESCE(column_name, 0) </div> </div> </div> '},
        ]
      },
      {
        title: '排序与分页',
        items: [
          'ORDER BY 升序/降序',
          '多列排序',
          'LIMIT / TOP / ROWNUM 分页',
          'OFFSET 偏移量',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '聚合函数',
        items: [
          'COUNT / SUM / AVG / MAX / MIN',
          'COUNT(*) vs COUNT(列)',
          'GROUP BY 分组汇总',
          'HAVING 分组后筛选',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据库基础',
        items: [
          '数据类型：INT, VARCHAR, DATE, DECIMAL',
          '主键与外键概念',
          '表结构查看：DESC / SHOW COLUMNS',
          '常用数据库：MySQL, PostgreSQL, SQL Server',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'sql-intermediate': {
    title: '🗄️ SQL 数据库取数 · 多表连接与子查询',
    modules: [
      {
        title: '多表连接',
        items: [
          'INNER JOIN：内连接',
          'LEFT / RIGHT / FULL JOIN：外连接',
          'CROSS JOIN：笛卡尔积',
          '自连接（SELF JOIN）',
        ],
        resources: [
          {name:'《SQL进阶教程》MICK',desc:'深入讲解CASE表达式、窗口函数、递归等高级SQL',url:'https://book.douban.com/subject/26829431/',tag:'书籍'},
          {name:'【SQL进阶】多表查询与复杂业务分析',desc:'JOIN、子查询、CTE的实战应用案例',url:'https://www.bilibili.com/video/BV1bK4y1e7J5',tag:'视频'},
        ],
        exercises: [
          {q:'有员工表 employees(emp_id, name, dept_id, salary) 和部门表 departments(dept_id, dept_name)。请查询每位员工姓名、部门名和工资，包含没有员工的部门。',a:'SELECT e.name, d.dept_name, e.salary<br> FROM employees e<br> RIGHT JOIN departments d ON e.dept_id = d.dept_id;<br><br> 或：<br> SELECT e.name, d.dept_name, e.salary<br> FROM departments d<br> LEFT JOIN employees e ON d.dept_id = e.dept_id;<br><br> 关键点：使用RIGHT JOIN或调换表顺序用LEFT JOIN，确保所有部门都被列出，包括没有员工的部门（员工姓名为NULL）。 '},
          {q:'某订单表 orders(order_id, customer_id, amount) 和客户表 customers(customer_id, customer_name)。请查询下单超过3次的客户姓名和平均订单金额。',a:'SELECT c.customer_name, AVG(o.amount) AS avg_amount<br> FROM customers c<br> INNER JOIN orders o ON c.customer_id = o.customer_id<br> GROUP BY c.customer_id, c.customer_name<br> HAVING COUNT(o.order_id) > 3;<br><br> 或使用子查询：<br> SELECT customer_name, avg_amount<br> FROM customers c<br> JOIN (<br> &nbsp;&nbsp;SELECT customer_id, AVG(amount) AS avg_amount, COUNT(*) AS order_count<br> &nbsp;&nbsp;FROM orders<br> &nbsp;&nbsp;GROUP BY customer_id<br> &nbsp;&nbsp;HAVING COUNT(*) > 3<br> ) t ON c.customer_id = t.customer_id; '},
        ]
      },
      {
        title: '子查询',
        items: [
          '标量子查询（SELECT中）',
          '行子查询（WHERE中）',
          '表子查询（FROM中）',
          'EXISTS / NOT EXISTS',
        ],
        resources: [
          {name:'知乎：SQL多表连接完全图解',desc:'用图解方式理解INNER/LEFT/RIGHT/FULL JOIN的区别',url:'https://zhuanlan.zhihu.com/p/30391583',tag:'文章'},
          {name:'SQLBolt - 交互式SQL学习（进阶章节）',desc:'免费的在线SQL教程，涵盖JOIN和聚合查询',url:'https://sqlbolt.com/',tag:'在线工具'},
        ],
        exercises: [
          {q:'有员工表(emp_id, name, manager_id, salary)。请查询每位员工及其直属上级的姓名（自连接问题）。',a:'SELECT e.name AS employee_name, m.name AS manager_name<br> FROM employees e<br> LEFT JOIN employees m ON e.manager_id = m.emp_id;<br><br> 关键点：将employees表分别命名为e（员工）和m（经理），<br> 通过manager_id = emp_id建立自连接。<br><br> 使用LEFT JOIN确保即使CEO（没有上级）也显示，其manager_name为NULL。<br> 若用INNER JOIN，CEO会消失。 '},
          {q:'某表有学生成绩(score)，要求按成绩分段统计：90-100优秀，80-89良好，70-79中等，60-69及格，<60不及格。写出SQL。',a:'SELECT<br> &nbsp;&nbsp;CASE<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 90 THEN \'优秀\'<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 80 THEN \'良好\'<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 70 THEN \'中等\'<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 60 THEN \'及格\'<br> &nbsp;&nbsp;&nbsp;&nbsp;ELSE \'不及格\'<br> &nbsp;&nbsp;END AS grade_level,<br> &nbsp;&nbsp;COUNT(*) AS student_count<br> FROM scores<br> GROUP BY<br> &nbsp;&nbsp;CASE<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 90 THEN \'优秀\'<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 80 THEN \'良好\'<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 70 THEN \'中等\'<br> &nbsp;&nbsp;&nbsp;&nbsp;WHEN score >= 60 THEN \'及格\'<br> &nbsp;&nbsp;&nbsp;&nbsp;ELSE \'不及格\'<br> &nbsp;&nbsp;END<br> ORDER BY MIN(score) DESC;<br><br> 或使用CTE简化：<br> WITH graded AS (<br> &nbsp;&nbsp;SELECT *, CASE WHEN score >= 90 THEN \'优秀\' ... END AS grade_level FROM scores<br> )<br> SELECT grade_level, COUNT(*) FROM graded GROUP BY grade_level; '},
        ]
      },
      {
        title: '集合运算',
        items: [
          'UNION / UNION ALL',
          'INTERSECT',
          'EXCEPT / MINUS',
          '集合运算规则与注意事项',
        ],
        resources: [
          {name:'LeetCode SQL进阶题（中等难度）',desc:'JOIN、子查询、窗口函数的经典面试题',url:'https://leetcode.cn/studyplan/sql/',tag:'练习'},
        ],
        exercises: [
          {q:'某表有分类(category)和销售额(sales)字段。要求查询销售额高于分类平均值的记录。请用子查询实现。',a:'SELECT s1.*<br> FROM sales s1<br> WHERE s1.sales > (<br> &nbsp;&nbsp;SELECT AVG(s2.sales)<br> &nbsp;&nbsp;FROM sales s2<br> &nbsp;&nbsp;WHERE s2.category = s1.category<br> );<br><br> 或使用窗口函数（更简洁，MySQL 8+ / PostgreSQL / SQL Server）：<br> SELECT * FROM (<br> &nbsp;&nbsp;SELECT *, AVG(sales) OVER (PARTITION BY category) AS avg_sales<br> &nbsp;&nbsp;FROM sales<br> ) t<br> WHERE sales > avg_sales;<br><br> 相关子查询：内部查询依赖外部查询的category值，<br> 对每个外部行执行一次，效率较低但逻辑清晰。<br> 大数据量建议使用JOIN或窗口函数优化。 </div> </div> </div> '},
        ]
      },
      {
        title: 'CASE表达式',
        items: [
          '简单 CASE 与搜索 CASE',
          '条件聚合统计',
          '数据分段与标签化',
          'NULL处理与默认值',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: 'CTE 与递归',
        items: [
          'WITH 子句（公用表表达式）',
          '递归 CTE 查询树形结构',
          '多层嵌套CTE',
          'CTE vs 子查询 vs 临时表',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据操作',
        items: [
          'INSERT INTO ... SELECT',
          'UPDATE ... JOIN',
          'DELETE 多表关联',
          'MERGE / UPSERT',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'sql-advanced': {
    title: '🗄️ SQL 数据库取数 · 窗口函数与性能优化',
    modules: [
      {
        title: '窗口函数',
        items: [
          'ROW_NUMBER() / RANK() / DENSE_RANK()',
          'LAG() / LEAD() 偏移分析',
          'FIRST_VALUE() / LAST_VALUE()',
          'NTILE() 分桶分析',
        ],
        resources: [
          {name:'《SQL权威指南（第4版）》',desc:'SQL语法与功能的全面参考，涵盖高级查询与优化',url:'https://book.douban.com/subject/30227823/',tag:'书籍'},
          {name:'【SQL窗口函数】数据分析必备窗口函数详解',desc:'窗口函数从入门到精通，实战案例丰富',url:'https://www.bilibili.com/video/BV1D54y1L7Sk',tag:'视频'},
        ],
        exercises: [
          {q:'某销售表 sales(sales_id, employee_id, sales_amount, sales_date)。请查询每个员工每月销售额，以及该员工截至当月的累计销售额（YTD）。',a:'SELECT<br> &nbsp;&nbsp;employee_id,<br> &nbsp;&nbsp;DATE_FORMAT(sales_date, \'%Y-%m\') AS month,<br> &nbsp;&nbsp;SUM(sales_amount) AS monthly_sales,<br> &nbsp;&nbsp;SUM(SUM(sales_amount)) OVER (<br> &nbsp;&nbsp;&nbsp;&nbsp;PARTITION BY employee_id<br> &nbsp;&nbsp;&nbsp;&nbsp;ORDER BY DATE_FORMAT(sales_date, \'%Y-%m\')<br> &nbsp;&nbsp;&nbsp;&nbsp;ROWS UNBOUNDED PRECEDING<br> &nbsp;&nbsp;) AS ytd_sales<br> FROM sales<br> GROUP BY employee_id, DATE_FORMAT(sales_date, \'%Y-%m\')<br> ORDER BY employee_id, month;<br><br> 关键点：SUM() OVER() 窗口函数实现累计求和，PARTITION BY按员工分组，ORDER BY按月份排序。 '},
          {q:'某用户登录表 user_log(user_id, login_time)。请查询每个用户的连续登录天数（假设用户可能一天登录多次）。',a:'解题思路（去重后用日期差分组）：<br><br> WITH daily_log AS (<br> &nbsp;&nbsp;SELECT DISTINCT user_id, DATE(login_time) AS login_date<br> &nbsp;&nbsp;FROM user_log<br> ),<br> grouped AS (<br> &nbsp;&nbsp;SELECT *,<br> &nbsp;&nbsp;&nbsp;&nbsp;DATE(login_date) -<br> &nbsp;&nbsp;&nbsp;&nbsp;ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) AS grp<br> &nbsp;&nbsp;FROM daily_log<br> )<br> SELECT user_id, COUNT(*) AS consecutive_days<br> FROM grouped<br> GROUP BY user_id, grp<br> ORDER BY consecutive_days DESC;<br><br> 核心：日期减去行号，连续日期会得到相同值（grp），按grp分组即可统计连续天数。 '},
        ]
      },
      {
        title: '聚合窗口函数',
        items: [
          'SUM() OVER() 累计求和',
          'AVG() OVER() 移动平均',
          'COUNT() OVER() 累计计数',
          '窗口范围：ROWS / RANGE',
        ],
        resources: [
          {name:'SQL索引指南（中文版）',desc:'深入理解SQL索引原理与优化策略，免费在线阅读',url:'https://use-the-index-luke.com/zh',tag:'在线教程'},
          {name:'知乎：SQL窗口函数完全解析与实战',desc:'排名、偏移、聚合窗口函数详解，附业务场景',url:'https://zhuanlan.zhihu.com/p/31146782',tag:'文章'},
        ],
        exercises: [
          {q:'某表有员工工资(salary)。要求查询每个部门工资排名前3的员工，不允许使用LIMIT/ROWNUM（要求使用窗口函数）。',a:'WITH ranked AS (<br> &nbsp;&nbsp;SELECT *,<br> &nbsp;&nbsp;&nbsp;&nbsp;DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk<br> &nbsp;&nbsp;FROM employees<br> )<br> SELECT * FROM ranked WHERE rnk <= 3;<br><br> 说明：<br> - DENSE_RANK() 处理并列情况（相同工资同排名）<br> - 若用 ROW_NUMBER()，并列只会选一个<br> - 若用 RANK()，并列会跳号（如两个第1名后下一个是第3名）<br> - DENSE_RANK() 最符合"前3"的业务需求（并列不额外占用名额） '},
          {q:'某表 orders(order_id, customer_id, order_date, amount)。请查询每个客户的上次订单日期和下次订单日期（使用LAG/LEAD）。',a:'SELECT<br> &nbsp;&nbsp;order_id,<br> &nbsp;&nbsp;customer_id,<br> &nbsp;&nbsp;order_date,<br> &nbsp;&nbsp;amount,<br> &nbsp;&nbsp;LAG(order_date) OVER (<br> &nbsp;&nbsp;&nbsp;&nbsp;PARTITION BY customer_id ORDER BY order_date<br> &nbsp;&nbsp;) AS prev_order_date,<br> &nbsp;&nbsp;LEAD(order_date) OVER (<br> &nbsp;&nbsp;&nbsp;&nbsp;PARTITION BY customer_id ORDER BY order_date<br> &nbsp;&nbsp;) AS next_order_date<br> FROM orders;<br><br> 扩展：计算订单间隔天数<br> DATEDIFF(order_date, LAG(order_date) OVER (...)) AS days_since_last<br><br> 业务价值：识别客户流失风险（如间隔突然变长） '},
        ]
      },
      {
        title: '高级查询技巧',
        items: [
          'PIVOT / UNPIVOT 行列转换',
          '动态SQL生成',
          'JSON数据查询与处理',
          'CTE递归与层次数据',
        ],
        resources: [
          {name:'LeetCode SQL困难题（窗口函数专项）',desc:'挑战高难度SQL题目，涵盖窗口函数、递归等',url:'https://leetcode.cn/studyplan/sql/',tag:'练习'},
        ],
        exercises: [
          {q:'某查询需要在大表(1000万行)上按日期范围查询并排序。当前查询很慢。请描述优化方案。',a:'优化方案：<br><br> 1. 索引优化：<br> &nbsp;&nbsp;CREATE INDEX idx_date ON table_name(date_column);<br> &nbsp;&nbsp;若已有WHERE条件列，考虑复合索引<br><br> 2. 查询优化：<br> &nbsp;&nbsp;- 避免 SELECT *，只查询需要的列<br> &nbsp;&nbsp;- 使用覆盖索引（索引包含所有查询列）<br> &nbsp;&nbsp;- 分页查询使用游标而非OFFSET（大偏移量慢）<br><br> 3. 表结构优化：<br> &nbsp;&nbsp;- 考虑按日期分区（RANGE PARTITIONING）<br> &nbsp;&nbsp;- 定期归档历史数据<br><br> 4. 执行计划分析：<br> &nbsp;&nbsp;EXPLAIN SELECT ... 查看是否使用索引<br> &nbsp;&nbsp;关注 type、rows、Extra 列 </div> </div> </div> '},
        ]
      },
      {
        title: '索引与优化',
        items: [
          'B-Tree索引原理',
          '复合索引设计',
          'EXPLAIN查询计划分析',
          '覆盖索引与最左前缀',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '查询优化',
        items: [
          '避免SELECT *',
          '减少子查询，使用JOIN替代',
          '分页优化：OFFSET vs 游标分页',
          '批量操作与事务优化',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '分析函数应用',
        items: [
          '同比环比计算',
          '累计占比（帕累托分析）',
          '分组TopN',
          '连续区间分析',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'pyr-beginner': {
    title: '🐍 Python / R 语言 · 环境搭建与基础语法',
    modules: [
      {
        title: 'Python 环境',
        items: [
          'Anaconda 安装与 conda 环境管理',
          'Jupyter Notebook / JupyterLab',
          'pip 包管理与虚拟环境',
          'VS Code + Python 插件配置',
        ],
        resources: [
          {name:'【廖雪峰】Python 数据分析教程',desc:'Python基础到数据分析入门，中文优质教程',url:'https://www.bilibili.com/video/BV1c7411p7NH',tag:'视频'},
          {name:'《Python编程：从入门到实践》',desc:'最受欢迎的Python入门书，包含数据分析项目',url:'https://book.douban.com/subject/25779298/',tag:'书籍'},
        ],
        exercises: [
          {q:'用Python编写程序：给定列表 [12, 45, 7, 23, 56, 89, 34]，求最大值、最小值、平均值，并输出大于平均值的元素。',a:'data = [12, 45, 7, 23, 56, 89, 34]<br><br> max_val = max(data) # 89<br> min_val = min(data) # 7<br> avg = sum(data) / len(data) # 38.0<br><br> above_avg = [x for x in data if x > avg]<br> # [45, 56, 89]<br><br> R 版本：<br> data <- c(12, 45, 7, 23, 56, 89, 34)<br> max(data) # 89<br> min(data) # 7<br> mean(data) # 38<br> data[data > mean(data)] # 45 56 89 '},
          {q:'用Python读取CSV文件(data.csv)，计算某列的均值，并筛选出该列值大于均值的行，保存到新文件。',a:'Python 版本：<br><br> import pandas as pd<br><br> df = pd.read_csv(\'data.csv\')<br> mean_val = df[\'score\'].mean()<br> filtered = df[df[\'score\'] > mean_val]<br> filtered.to_csv(\'filtered_data.csv\', index=False)<br><br> R 版本：<br><br> df <- read.csv(\'data.csv\')<br> mean_val <- mean(df$score, na.rm=TRUE)<br> filtered <- df[df$score > mean_val, ]<br> write.csv(filtered, \'filtered_data.csv\', row.names=FALSE) '},
        ]
      },
      {
        title: 'Python 基础语法',
        items: [
          '变量、数据类型、运算符',
          '列表、字典、元组、集合',
          '条件判断与循环',
          '函数定义与模块导入',
        ],
        resources: [
          {name:'【生信技能树】R语言基础教程',desc:'R语言入门到数据分析，适合零基础',url:'https://www.bilibili.com/video/BV1g7411L7Xr',tag:'视频'},
          {name:'DataCamp: Introduction to R（免费章节）',desc:'交互式学习R语言，边学边练',url:'https://www.datacamp.com/courses/free-introduction-to-r',tag:'在线课程'},
        ],
        exercises: [
          {q:'用Python编写函数：输入一个字符串，统计其中每个字母出现的次数（忽略大小写），返回字典。',a:'def count_letters(text):<br> &nbsp;&nbsp;text = text.lower()<br> &nbsp;&nbsp;result = {}<br> &nbsp;&nbsp;for char in text:<br> &nbsp;&nbsp;&nbsp;&nbsp;if char.isalpha():<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result[char] = result.get(char, 0) + 1<br> &nbsp;&nbsp;return result<br><br> # 或使用 collections.Counter<br> from collections import Counter<br> def count_letters_v2(text):<br> &nbsp;&nbsp;return dict(Counter(c for c in text.lower() if c.isalpha()))<br><br> R 版本：<br> count_letters <- function(text) {<br> &nbsp;&nbsp;text <- tolower(text)<br> &nbsp;&nbsp;chars <- strsplit(text, "")[[1]]<br> &nbsp;&nbsp;chars <- chars[chars %in% letters]<br> &nbsp;&nbsp;table(chars)<br> } '},
          {q:'用Python生成100个0-1之间的随机数，计算均值和标准差，并绘制直方图。',a:'Python 版本：<br><br> import numpy as np<br> import matplotlib.pyplot as plt<br><br> data = np.random.random(100)<br> mean = np.mean(data) # 约 0.5<br> std = np.std(data) # 约 0.29<br><br> plt.hist(data, bins=10, edgecolor=\'black\')<br> plt.title(\'Random Data Distribution\')<br> plt.show()<br><br> R 版本：<br><br> data <- runif(100, 0, 1)<br> mean(data)<br> sd(data)<br> hist(data, main=\'Random Data Distribution\', breaks=10) '},
        ]
      },
      {
        title: 'R 环境',
        items: [
          'R 与 RStudio 安装',
          'CRAN 包管理与 install.packages',
          'R Project 管理',
          'R Markdown 基础',
        ],
        resources: [
          {name:'知乎：Python vs R 数据分析选哪个？',desc:'对比Python和R在数据分析领域的优劣，帮你做选择',url:'https://zhuanlan.zhihu.com/p/27784134',tag:'文章'},
        ],
        exercises: [
          {q:'用Python处理JSON数据：读取包含多个用户信息的JSON文件，提取所有年龄大于25的用户姓名和邮箱，保存为新的JSON。',a:'Python 版本：<br><br> import json<br><br> with open(\'users.json\', \'r\', encoding=\'utf-8\') as f:<br> &nbsp;&nbsp;data = json.load(f)<br><br> filtered = [<br> &nbsp;&nbsp;{"name": u["name"], "email": u["email"]}<br> &nbsp;&nbsp;for u in data["users"]<br> &nbsp;&nbsp;if u["age"] > 25<br> ]<br><br> with open(\'filtered_users.json\', \'w\', encoding=\'utf-8\') as f:<br> &nbsp;&nbsp;json.dump(filtered, f, ensure_ascii=False, indent=2)<br><br> R 版本：<br> library(jsonlite)<br> data <- fromJSON(\'users.json\')<br> filtered <- subset(data$users, age > 25, select=c(name, email))<br> write_json(filtered, \'filtered_users.json\') </div> </div> </div> '},
        ]
      },
      {
        title: 'R 基础语法',
        items: [
          '向量、矩阵、数据框、列表',
          '因子与等级变量',
          '条件与循环控制',
          '函数编写与 apply 家族',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: 'Python 核心库',
        items: [
          'NumPy：数组运算基础',
          'Matplotlib：基础绘图',
          'CSV / JSON 文件读写',
          'datetime 与字符串处理',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: 'R 核心功能',
        items: [
          '基础统计函数：mean, sd, summary',
          'Base R 绘图：plot, hist, boxplot',
          '数据读写：read.csv, write.csv',
          '条件筛选与子集操作',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'pyr-intermediate': {
    title: '🐍 Python / R 语言 · Pandas / tidyverse 数据处理',
    modules: [
      {
        title: 'Pandas 数据结构',
        items: [
          'DataFrame 与 Series',
          '索引与切片：loc, iloc, at, iat',
          '数据类型转换与内存优化',
          'MultiIndex 层次索引',
        ],
        resources: [
          {name:'《利用Python进行数据分析》Wes McKinney',desc:'Pandas作者亲著，数据处理权威指南',url:'https://book.douban.com/subject/30207052/',tag:'书籍'},
          {name:'【莫烦Python】Pandas数据处理教程',desc:'Pandas核心操作详解，配合实战案例',url:'https://www.bilibili.com/video/BV1hx411d7eh',tag:'视频'},
        ],
        exercises: [
          {q:'某DataFrame有列：姓名、部门、工资、入职日期。请用Pandas：① 按部门分组计算平均工资；② 找出每个部门工资最高的员工；③ 计算入职满3年的员工。',a:'Python 版本：<br><br> import pandas as pd<br> from datetime import datetime, timedelta<br><br> # ① 按部门平均工资<br> df.groupby(\'部门\')[\'工资\'].mean()<br><br> # ② 每个部门工资最高<br> df.loc[df.groupby(\'部门\')[\'工资\'].idxmax()]<br><br> # ③ 入职满3年<br> df[\'入职日期\'] = pd.to_datetime(df[\'入职日期\'])<br> three_years_ago = datetime.now() - timedelta(days=3*365)<br> df[df[\'入职日期\'] <= three_years_ago]<br><br> R 版本：<br><br> library(dplyr)<br> df %>% group_by(部门) %>% summarise(avg_工资 = mean(工资))<br> df %>% group_by(部门) %>% slice_max(工资, n=1)<br> df %>% filter(入职日期 <= Sys.Date() - years(3)) '},
          {q:'用Pandas处理两个DataFrame的合并：df1(员工ID, 姓名, 部门)，df2(员工ID, 销售额)。要求合并为一张表，包含没有销售额的员工（显示为NaN）。',a:'Python 版本：<br><br> merged = pd.merge(df1, df2, on=\'员工ID\', how=\'left\')<br><br> # 或简写：<br> merged = df1.merge(df2, on=\'员工ID\', how=\'left\')<br><br> # 后续处理：填充NaN<br> merged[\'销售额\'] = merged[\'销售额\'].fillna(0)<br><br> R 版本：<br><br> library(dplyr)<br> merged <- df1 %>% left_join(df2, by="员工ID")<br> merged$销售额[is.na(merged$销售额)] <- 0<br><br> 注意：how=\'left\' 确保保留df1中所有员工，即使df2中没有匹配记录。 '},
        ]
      },
      {
        title: '数据清洗',
        items: [
          '缺失值处理：dropna, fillna',
          '重复值处理：duplicated, drop_duplicates',
          '类型转换：astype, to_datetime',
          '字符串处理：str 访问器',
        ],
        resources: [
          {name:'R for Data Science（中文版）',desc:'tidyverse官方教程，数据科学的完整R指南',url:'https://r4ds.had.co.nz/',tag:'在线书籍'},
          {name:'Pandas 官方文档：10分钟入门',desc:'Pandas官方快速入门指南，覆盖核心操作',url:'https://pandas.pydata.org/docs/user_guide/10min.html',tag:'文档'},
        ],
        exercises: [
          {q:'用Pandas进行数据透视：某表有(日期, 品类, 销售额)。要求生成一个透视表，行是月份，列是品类，值是销售额总和。',a:'Python 版本：<br><br> df[\'日期\'] = pd.to_datetime(df[\'日期\'])<br> df[\'月份\'] = df[\'日期\'].dt.to_period(\'M\').astype(str)<br><br> pivot = df.pivot_table(<br> &nbsp;&nbsp;values=\'销售额\',<br> &nbsp;&nbsp;index=\'月份\',<br> &nbsp;&nbsp;columns=\'品类\',<br> &nbsp;&nbsp;aggfunc=\'sum\',<br> &nbsp;&nbsp;fill_value=0<br> )<br><br> R 版本：<br><br> library(tidyr)<br> df$月份 <- format(as.Date(df$日期), "%Y-%m")<br> pivot <- df %>%<br> &nbsp;&nbsp;group_by(月份, 品类) %>%<br> &nbsp;&nbsp;summarise(销售额 = sum(销售额)) %>%<br> &nbsp;&nbsp;pivot_wider(names_from=品类, values_from=销售额, values_fill=0) '},
          {q:'用Pandas处理时间序列：某DataFrame有(日期, 销售额)列，要求计算7日移动平均，并识别销售额连续3天超过移动平均的日期。',a:'Python 版本：<br><br> df[\'日期\'] = pd.to_datetime(df[\'日期\'])<br> df = df.sort_values(\'日期\')<br><br> # 7日移动平均<br> df[\'MA7\'] = df[\'销售额\'].rolling(window=7, min_periods=1).mean()<br><br> # 标记是否超过移动平均<br> df[\'above_ma\'] = df[\'销售额\'] > df[\'MA7\']<br><br> # 连续3天超过<br> df[\'连续3天\'] = df[\'above_ma\'].rolling(window=3).sum() == 3<br><br> # 提取符合条件的日期<br> result = df[df[\'连续3天\']][\'日期\']<br><br> R 版本：<br><br> library(zoo)<br> df <- df %>% arrange(日期)<br> df$MA7 <- rollmean(df$销售额, 7, fill=NA, align=\'right\')<br> df$above_ma <- df$销售额 > df$MA7<br> df$连续3天 <- rollsum(df$above_ma, 3, fill=NA) == 3 '},
        ]
      },
      {
        title: '数据变换',
        items: [
          '筛选、排序、新增列',
          '分组聚合：groupby, agg, transform',
          '数据透视：pivot, pivot_table, melt',
          '合并连接：merge, join, concat',
        ],
        resources: [
          {name:'知乎：Pandas数据处理100个常用操作',desc:'Pandas高频操作速查，包含代码示例',url:'https://zhuanlan.zhihu.com/p/409240231',tag:'文章'},
        ],
        exercises: [
          {q:'用Pandas读取一个包含100万行的大CSV文件，内存占用很大。请提出优化方案。',a:'大CSV读取优化方案：<br><br> 1. 分块读取：<br> chunks = pd.read_csv(\'big.csv\', chunksize=100000)<br> for chunk in chunks: ...<br><br> 2. 指定数据类型：<br> dtypes = {\'id\': \'int32\', \'category\': \'category\', \'amount\': \'float32\'}<br> df = pd.read_csv(\'big.csv\', dtype=dtypes)<br><br> 3. 只读需要的列：<br> df = pd.read_csv(\'big.csv\', usecols=[\'col1\', \'col2\'])<br><br> 4. 使用category类型：<br> df[\'category_col\'] = df[\'category_col\'].astype(\'category\')<br><br> 5. 使用更高效的引擎：<br> df = pd.read_csv(\'big.csv\', engine=\'c\')<br><br> 6. 考虑使用 Dask 或 Polars 替代 Pandas </div> </div> </div> '},
        ]
      },
      {
        title: 'tidyverse 核心',
        items: [
          'dplyr：select, filter, mutate, summarise, arrange',
          '管道操作：%>%',
          'tidyr：pivot_longer, pivot_wider',
          'readr：快速数据读取',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '时间序列处理',
        items: [
          'DatetimeIndex 与 PeriodIndex',
          'resample 重采样',
          'shift 与 diff 差分',
          'rolling 移动窗口',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据可视化',
        items: [
          'Matplotlib：面向对象绘图',
          'Seaborn：统计可视化',
          'ggplot2：语法图形',
          'plotly：交互式图表',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'pyr-advanced': {
    title: 'Python / R 语言 · 机器学习入门',
    modules: [
      {
        title: '机器学习基础',
        items: [
          '监督学习 vs 无监督学习 vs 强化学习',
          '训练集/验证集/测试集划分',
          '特征工程与数据预处理',
          '模型评估与选择',
        ],
        resources: [
          {name:'Coursera: 机器学习（吴恩达 Stanford）',desc:'最经典的机器学习课程，理论基础扎实',url:'https://www.coursera.org/learn/machine-learning',tag:'在线课程'},
          {name:'《机器学习实战：基于Scikit-Learn》',desc:'Hands-On Machine Learning，实践导向的ML经典',url:'https://book.douban.com/subject/26708219/',tag:'书籍'},
        ],
        exercises: [
          {q:'用scikit-learn实现鸢尾花数据集(Iris)的分类：使用KNN和逻辑回归分别建模，比较两者的准确率。',a:'Python 代码：from sklearn.datasets import load_iris; from sklearn.model_selection import train_test_split; from sklearn.neighbors import KNeighborsClassifier; from sklearn.linear_model import LogisticRegression; from sklearn.metrics import accuracy_score. iris = load_iris(); X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3, random_state=42). knn = KNeighborsClassifier(n_neighbors=5); knn.fit(X_train, y_train); knn_acc = accuracy_score(y_test, knn.predict(X_test)). lr = LogisticRegression(max_iter=200); lr.fit(X_train, y_train); lr_acc = accuracy_score(y_test, lr.predict(X_test)). 通常KNN准确率约95-100%，逻辑回归约95-97%。 '},
          {q:'用scikit-learn实现房价预测（线性回归）：数据有面积、卧室数、房龄等特征，预测房价。请写出完整代码，包括数据划分、训练、评估。',a:'Python 代码：from sklearn.linear_model import LinearRegression; from sklearn.model_selection import train_test_split; from sklearn.metrics import mean_squared_error, r2_score; import numpy as np. X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42). model = LinearRegression(); model.fit(X_train, y_train). y_pred = model.predict(X_test); rmse = np.sqrt(mean_squared_error(y_test, y_pred)); r2 = r2_score(y_test, y_pred). print(f"RMSE: {rmse:.2f}, R2: {r2:.4f}"). '},
        ]
      },
      {
        title: '分类算法',
        items: [
          '逻辑回归',
          '决策树与随机森林',
          'K近邻（KNN）',
          '支持向量机（SVM）',
        ],
        resources: [
          {name:'【李宏毅】机器学习（中文）',desc:'台湾大学李宏毅教授的机器学习课程，中文讲解清晰',url:'https://www.bilibili.com/video/BV1B7411L7tW',tag:'视频'},
          {name:'scikit-learn 官方入门教程',desc:'官方基础教程，从分类到聚类的完整示例',url:'https://scikit-learn.org/stable/tutorial/basic/tutorial.html',tag:'文档'},
        ],
        exercises: [
          {q:'用K-Means对某客户数据集进行聚类（假设有消费金额和购买频次两列），请写出代码并解释如何确定最佳K值。',a:'Python 代码：from sklearn.cluster import KMeans; from sklearn.preprocessing import StandardScaler. scaler = StandardScaler(); X_scaled = scaler.fit_transform(X). inertias = []; for k in range(1, 10): kmeans = KMeans(n_clusters=k, random_state=42); kmeans.fit(X_scaled); inertias.append(kmeans.inertia_). kmeans = KMeans(n_clusters=3, random_state=42); labels = kmeans.fit_predict(X_scaled). 解释：肘部法通过观察inertia下降速度拐点确定K。 '},
          {q:'某二分类模型预测概率为 [0.1, 0.4, 0.35, 0.8]，实际标签为 [0, 0, 1, 1]。请计算在阈值0.5下的混淆矩阵、准确率、精确率和召回率。',a:'阈值=0.5，预测标签：[0, 0, 0, 1]. 实际：[0, 0, 1, 1]，预测：[0, 0, 0, 1]. 混淆矩阵：TN=2, FP=0, FN=1, TP=1. 准确率=3/4=75%. 精确率=1/1=100%. 召回率=1/2=50%. F1=66.7%. 分析：模型对正例预测过于保守，漏检了1个正例。 '},
        ]
      },
      {
        title: '回归算法',
        items: [
          '线性回归与多项式回归',
          '岭回归与Lasso',
          '决策树回归',
          '梯度提升（GBDT, XGBoost）',
        ],
        resources: [
          {name:'知乎：机器学习算法总结与Python实现',desc:'主流ML算法原理与代码实现，适合复习',url:'https://zhuanlan.zhihu.com/p/29028374',tag:'文章'},
        ],
        exercises: [
          {q:'用GridSearchCV对随机森林进行超参数调优（调优参数：n_estimators, max_depth, min_samples_split）。请写出代码框架。',a:'Python 代码：from sklearn.ensemble import RandomForestClassifier; from sklearn.model_selection import GridSearchCV. param_grid = {\'n_estimators\': [50, 100, 200], \'max_depth\': [3, 5, 7, None], \'min_samples_split\': [2, 5, 10]}. grid_search = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5, scoring=\'accuracy\', n_jobs=-1). grid_search.fit(X_train, y_train). best_model = grid_search.best_estimator_. 注意：36种组合x5折=180次拟合，使用n_jobs=-1多核加速。大数据量时建议用RandomizedSearchCV替代。 </div> </div> </div> '},
        ]
      },
      {
        title: '聚类与降维',
        items: [
          'K-Means 聚类',
          '层次聚类',
          'DBSCAN 密度聚类',
          'PCA 主成分分析',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: 'scikit-learn 实战',
        items: [
          'Pipeline 构建',
          'GridSearchCV 超参数调优',
          '交叉验证与模型评估',
          '模型保存与加载',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '模型解释与部署',
        items: [
          '特征重要性',
          'SHAP 值解释',
          '模型持久化（joblib/pickle）',
          'Flask 简单 API 部署',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'viz-beginner': {
    title: '📊 数据可视化工具 · Power BI / Tableau 基础',
    modules: [
      {
        title: 'Power BI 基础',
        items: [
          'Power BI Desktop 安装与界面',
          '数据导入：Excel、CSV、数据库',
          '数据模型与关系视图',
          '报表视图与画布操作',
        ],
        resources: [
          {name:'【Power BI】零基础入门到实战（全40集）',desc:'Power BI完整入门教程，从数据导入到仪表板发布',url:'https://www.bilibili.com/video/BV1cJ411Y7aV',tag:'视频'},
          {name:'【Tableau】零基础入门教程（全30集）',desc:'Tableau官方认证教程，系统学习可视化',url:'https://www.bilibili.com/video/BV1S4411G7Rh',tag:'视频'},
        ],
        exercises: [
          {q:'某销售数据包含（日期、地区、产品、销售额）。请描述：在Power BI或Tableau中制作"各月各地区销售额趋势图"的步骤。',a:'Power BI 步骤：1. 导入数据（获取数据 → Excel/CSV）。2. 检查数据类型：日期列确保为Date类型，销售额为数值。3. 插入折线图视觉对象。4. 将"日期"拖到X轴，自动创建日期层次结构（年/季度/月/日）。5. 将"销售额"拖到Y轴，确保聚合为"求和"。6. 将"地区"拖到图例（Legend），每个地区一条线。7. 添加切片器："地区"，实现交互筛选。8. 格式化：添加标题、调整颜色、启用数据标签。Tableau 步骤类似：将日期拖到列，销售额拖到行，地区拖到颜色。 '},
          {q:'某数据有（客户ID、订单金额、订单日期）。请描述：在Power BI中创建"客户消费等级"（高/中/低）计算列的方法，并统计各级客户数量。',a:'Power BI 实现步骤：1. 创建计算列（DAX）：消费等级 = SWITCH(TRUE(), [订单金额] >= 10000, "高", [订单金额] >= 5000, "中", "低")。或使用 IF：消费等级 = IF([订单金额]>=10000, "高", IF([订单金额]>=5000, "中", "低"))。2. 创建饼图或环形图。3. 将"消费等级"拖到图例。4. 将"客户ID"拖到值，改为"计数（非重复）"。5. 显示百分比：格式 → 数据标签 → 值 + 百分比。Tableau 实现：创建计算字段，使用IF或CASE函数。 '},
        ]
      },
      {
        title: 'Tableau 基础',
        items: [
          'Tableau Desktop 安装与界面',
          '连接数据源',
          '工作表、仪表板、故事',
          '维度和度量概念',
        ],
        resources: [
          {name:'Microsoft Power BI 官方文档',desc:'Power BI官方学习路径，从基础到DAX计算',url:'https://docs.microsoft.com/zh-cn/power-bi/',tag:'文档'},
          {name:'Tableau 官方免费培训',desc:'Tableau官方提供的免费视频培训，英文但有中文字幕',url:'https://www.tableau.com/zh-cn/learn/training',tag:'在线课程'},
        ],
        exercises: [
          {q:'某数据包含（省份、城市、销售额）。请描述制作地图可视化的步骤，并说明如何处理地理编码失败的情况。',a:'Power BI 地图制作：1. 插入"地图"或"着色地图"视觉对象。2. 将"省份"拖到位置字段，将"销售额"拖到大小/颜色字段。3. 若地理编码失败（如"广东"无法识别）：在数据模型中创建补充列："广东省"；或使用更详细的地址（"广东省广州市"）；设置数据类别：选中列 → 列工具 → 数据类别 → 省/市/自治区。4. 使用经纬度：若有经纬度列，直接使用经纬度定位。Tableau 类似：双击"省份"自动创建地图，编码失败时右键 → 编辑位置 → 匹配地名。 '},
          {q:'在Power BI中，如何用钻取功能实现：从"年度总览"下钻到"季度"再下钻到"月度"？',a:'Power BI 钻取设置：1. 创建日期维度表（包含年、季度、月、日层次）。2. 建立日期表与销售表的关系（1对多）。3. 插入柱形图，将日期层次结构拖到轴：默认显示"年"。4. 启用钻取：视觉对象 → 格式 → 常规 → 钻取 → 开启。5. 操作方式：点击图表右上角的向下箭头（下钻），从"年"下钻到"季度"，继续下钻到"月"；向上箭头返回上一层。6. 也可使用切片器同步钻取（编辑交互）。注意：确保日期表完整且连续，无缺失日期。 '},
        ]
      },
      {
        title: '基础图表',
        items: [
          '条形图、柱形图、折线图',
          '饼图、环形图、树状图',
          '地图与地理编码',
          '散点图与气泡图',
        ],
        resources: [
          {name:'知乎：Power BI vs Tableau 怎么选？',desc:'对比两款主流BI工具，帮你选择最适合的',url:'https://zhuanlan.zhihu.com/p/137077302',tag:'文章'},
        ],
        exercises: [
          {q:'某仪表板需要展示"销售额达成率"（实际/目标）。请描述在Tableau中如何实现：① 显示达成率百分比；② 达成率>100%绿色，<80%红色，中间黄色。',a:'Tableau 实现：1. 创建计算字段"达成率"：SUM([实际销售额]) / SUM([目标销售额])。2. 格式化为百分比：右键字段 → 默认属性 → 数字格式 → 百分比。3. 条件颜色设置：将"达成率"拖到颜色；点击颜色 → 编辑颜色；使用分段颜色：设置3步，中心点0.9（90%）；< 0.8 → 红色；0.8 - 1.0 → 黄色；> 1.0 → 绿色。或使用计算字段自定义颜色：IF [达成率] < 0.8 THEN "红色" ELSEIF [达成率] > 1.0 THEN "绿色" ELSE "黄色" END。Power BI 类似：使用条件格式设置背景色或字体色。 </div> </div> </div> '},
        ]
      },
      {
        title: '数据准备',
        items: [
          '数据清洗与转换',
          '字段重命名与格式调整',
          '计算列与分组',
          '数据类型转换',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '筛选与交互',
        items: [
          '基础筛选器',
          '高亮与工具提示',
          '排序与Top N',
          '参数使用入门',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '可视化原则',
        items: [
          '选择合适的图表类型',
          '颜色与对比度',
          '标签与标题规范',
          '避免图表误导',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'viz-intermediate': {
    title: '📊 数据可视化工具 · 仪表板设计与交互',
    modules: [
      {
        title: '仪表板设计',
        items: [
          '信息架构与布局原则',
          'KPI 卡片的放置与层次',
          '视觉流与阅读顺序',
          '移动端适配',
        ],
        resources: [
          {name:'【Power BI】仪表板设计实战（商业案例）',desc:'从需求分析到仪表板交付的完整流程',url:'https://www.bilibili.com/video/BV1fE411p7K8',tag:'视频'},
          {name:'《仪表板设计：数据可视化实战》',desc:'仪表板设计的原则、布局与最佳实践',url:'https://book.douban.com/subject/34856959/',tag:'书籍'},
        ],
        exercises: [
          {q:'某销售仪表板需要展示年度总览，包含：KPI卡片（销售额、订单数、客单价）、月度趋势图、品类占比图、地区排名表。请设计布局方案。',a:'布局方案（从上至下，从左至右）：<br><br> 第一行（KPI概览）：<br> - 左：销售额KPI卡片（带同比变化）<br> - 中：订单数KPI卡片<br> - 右：客单价KPI卡片<br> - 最右：目标达成率环形图<br><br> 第二行（趋势分析）：<br> - 左（2/3宽度）：月度销售额趋势折线图（可下钻到日）<br> - 右（1/3宽度）：品类占比饼图/树状图<br><br> 第三行（明细分析）：<br> - 左（1/2）：地区销售额排名条形图（Top10）<br> - 右（1/2）：产品明细表格（可排序筛选）<br><br> 全局筛选器：年份、季度、地区（顶部或右侧）<br> 交互：点击品类占比图，其他图表联动筛选。 '},
          {q:'在Power BI中实现动态标题：当选择不同年份时，图表标题自动变为"2023年销售额趋势"或"2024年销售额趋势"。如何实现？',a:'Power BI 动态标题实现：<br><br> 1. 创建度量值（DAX）：<br> 动态标题 = "销售额趋势 - " & SELECTEDVALUE(\'日期表\'[年份], "全部")<br><br> 2. 或使用更复杂的逻辑：<br> 动态标题 = <br> VAR selectedYear = SELECTEDVALUE(\'日期表\'[年份])<br> VAR selectedRegion = SELECTEDVALUE(\'地区表\'[地区])<br> RETURN<br> selectedYear & "年" & selectedRegion & "销售额趋势"<br><br> 3. 应用到图表标题：<br> 选中图表 → 格式 → 标题 → 值 → fx（条件格式）<br> → 选择"动态标题"度量值<br><br> 4. 注意：当多选年份时，SELECTEDVALUE返回BLANK，<br> 可用 COALESCE 或 CONCATENATEX 处理多选情况。<br><br> Tableau 类似：创建计算字段作为标题，使用参数或筛选器值。 '},
        ]
      },
      {
        title: '交互设计',
        items: [
          '切片器与过滤器联动',
          '钻取与下钻路径',
          '工具提示详细信息',
          '书签与按钮导航',
        ],
        resources: [
          {name:'Tableau 仪表板设计白皮书',desc:'Tableau官方出品，仪表板设计最佳实践指南',url:'https://www.tableau.com/zh-cn/learn/articles/dashboard-design',tag:'文章'},
          {name:'Power BI 发布与共享官方教程',desc:'学习如何将Power BI仪表板发布到云端并共享',url:'https://docs.microsoft.com/zh-cn/power-bi/guided-learning/publishingandsharing',tag:'文档'},
        ],
        exercises: [
          {q:'某仪表板需要在移动端显示。请描述Power BI或Tableau中移动端优化的主要注意事项。',a:'移动端优化注意事项：<br><br> 1. 布局适配：<br> - Power BI：使用"手机布局"视图，手动调整每个视觉对象在手机上的位置<br> - Tableau：创建手机专用仪表板，或使用响应式容器<br><br> 2. 视觉简化：<br> - 减少图表数量（每屏不超过3-4个）<br> - 使用更大的字体和更粗的柱状图<br> - 移除不必要的网格线和装饰<br><br> 3. 交互优化：<br> - 使用垂直滚动代替水平滚动<br> - 放大触摸目标（切片器、按钮至少44x44px）<br> - 减少需要精确点击的操作<br><br> 4. 性能考虑：<br> - 限制数据行数（移动端不显示明细表）<br> - 使用聚合数据而非明细<br> - 开启数据缩减 '},
          {q:'在Power BI中，如何用书签和按钮实现"切换视图"功能：点击按钮在"销售概览"和"产品分析"两个视图之间切换？',a:'Power BI 视图切换实现：<br><br> 1. 创建销售概览页的所有视觉对象，并组合（Ctrl+G）<br> 2. 创建产品分析页的所有视觉对象，也组合<br> 3. 创建书签：<br> - 视图 → 书签窗格 → 添加<br> - 选择"销售概览"组显示，"产品分析"组隐藏 → 添加书签"销售"<br> - 反之添加书签"产品"<br> 4. 插入按钮（如"切换视图"）<br> 5. 设置按钮操作：<br> - 选中按钮 → 操作 → 类型"书签"<br> - 选择对应书签<br> 6. 可选：用两个按钮（"销售" | "产品"），高亮当前选中<br><br> 注意：如果视觉对象多，也可以创建两个独立页面，用按钮导航到页面。 '},
        ]
      },
      {
        title: '计算字段',
        items: [
          '基础 DAX 计算列',
          'Tableau 计算字段',
          '快速表计算',
          'LOD 表达式入门',
        ],
        resources: [
          {name:'知乎：Power BI仪表板设计10大原则',desc:'仪表板布局、配色、交互设计的经验总结',url:'https://zhuanlan.zhihu.com/p/64892022',tag:'文章'},
        ],
        exercises: [
          {q:'某仪表板有多个页面（Overview, Detail, Settings）。请描述如何在Power BI中设置页面导航，让用户通过顶部导航栏在不同页面间切换。',a:'Power BI 页面导航实现：<br><br> 方法1：使用按钮 + 页面导航<br> 1. 在每个页面插入按钮（Home, Detail, Settings）<br> 2. 选中按钮 → 操作 → 页面导航<br> 3. 选择目标页面<br> 4. 将导航栏复制到所有页面（确保位置一致）<br><br> 方法2：使用切片器导航（创意做法）<br> 1. 创建页面参数<br> 2. 使用书签 + 按钮组合<br><br> 方法3：使用新导航器视觉对象（Power BI 2023+）<br> 1. 插入 → 导航器 → 页面导航器<br> 2. 自动根据页面名称生成导航栏<br> 3. 可自定义样式和图标<br><br> 最佳实践：导航栏固定在每页相同位置，使用统一配色标识当前页面。 </div> </div> </div> '},
        ]
      },
      {
        title: '高级图表',
        items: [
          '瀑布图与漏斗图',
          '甘特图与进度图',
          '热力图与矩阵',
          '动态参考线',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '数据刷新',
        items: [
          '增量刷新设置',
          '定时刷新配置',
          '网关与实时连接',
          '数据权限（RLS）',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '发布与共享',
        items: [
          'Power BI Service 发布',
          'Tableau Server/Online',
          '权限管理与工作区',
          '导出与嵌入',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
  'viz-advanced': {
    title: '📊 数据可视化工具 · DAX / LOD 高级计算',
    modules: [
      {
        title: 'DAX 核心概念',
        items: [
          '筛选上下文与行上下文',
          'CALCULATE 与筛选修改',
          'ALL、ALLEXCEPT、VALUES',
          'EARLIER 与行上下文嵌套',
        ],
        resources: [
          {name:'《DAX权威指南》Marco Russo',desc:'DAX最权威的参考书，从基础到高级计算',url:'https://book.douban.com/subject/33481357/',tag:'书籍'},
          {name:'DAX Patterns（SQLBI）- 免费',desc:'DAX经典模式集合，包含时间智能、排名等',url:'https://www.sqlbi.com/tools/dax-patterns/',tag:'在线教程'},
        ],
        exercises: [
          {q:'在Power BI中，某表有（客户ID、订单日期、订单金额）。请用DAX计算：每位客户的首次购买日期、最近购买日期、总购买次数、平均订单金额。',a:'DAX 度量值：<br><br> 首次购买日期 = MIN(\'订单表\'[订单日期])<br><br> 最近购买日期 = MAX(\'订单表\'[订单日期])<br><br> 总购买次数 = COUNTROWS(\'订单表\')<br><br> 平均订单金额 = AVERAGE(\'订单表\'[订单金额])<br><br> 若要在客户维度表中显示（每行一个客户）：<br> 在客户表中创建计算列：<br> 首次购买 = CALCULATE(MIN(\'订单表\'[订单日期]), RELATEDTABLE(\'订单表\'))<br><br> 或使用 RELATEDTABLE 直接在客户表中引用关联的订单记录。 '},
          {q:'用DAX实现同期群分析（Cohort Analysis）：按用户首次购买月份分组，计算各组在后续月份的留存率。',a:'同期群分析 DAX 实现：<br><br> 1. 创建首次购买月份计算列（用户表）：<br> 首次购买月份 = FORMAT(CALCULATE(MIN(\'订单表\'[订单日期]), RELATEDTABLE(\'订单表\')), "YYYY-MM")<br><br> 2. 创建留存度量值：<br> 留存用户数 =<br> VAR firstMonth = SELECTEDVALUE(\'用户表\'[首次购买月份])<br> VAR currentMonth = SELECTEDVALUE(\'日期表\'[月份])<br> RETURN<br> CALCULATE(<br> &nbsp;&nbsp;DISTINCTCOUNT(\'订单表\'[用户ID]),<br> &nbsp;&nbsp;\'用户表\'[首次购买月份] = firstMonth,<br> &nbsp;&nbsp;\'日期表\'[月份] = currentMonth<br> )<br><br> 3. 在矩阵中：行 = 首次购买月份，列 = 订单月份，值 = 留存用户数<br><br> 4. 计算留存率：留存率 = DIVIDE([留存用户数], [首月用户数], 0)<br><br> 注意：需要建立日期表和用户表的适当关系。 '},
        ]
      },
      {
        title: '高级 DAX 函数',
        items: [
          '迭代函数：SUMX, AVERAGEX, MINX, MAXX',
          '表函数：FILTER, ALL, VALUES, DISTINCT',
          '关系函数：RELATED, RELATEDTABLE',
          '时间智能：DATESYTD, SAMEPERIODLASTYEAR',
        ],
        resources: [
          {name:'【DAX进阶】筛选上下文与CALCULATE详解',desc:'深入理解DAX最核心的筛选上下文机制',url:'https://www.bilibili.com/video/BV1c7411L7oX',tag:'视频'},
          {name:'Tableau LOD 表达式官方文档',desc:'Tableau官方LOD详细指南与示例',url:'https://help.tableau.com/current/pro/desktop/zh-cn/calculations_calculatedfields_lod.htm',tag:'文档'},
        ],
        exercises: [
          {q:'在Tableau中，某数据有（订单ID、客户ID、订单金额）。要求计算每个订单金额占该客户总订单金额的百分比。请用LOD实现。',a:'Tableau LOD 实现：<br><br> 1. 创建LOD计算字段"客户总金额"：<br> {FIXED [客户ID] : SUM([订单金额])}<br><br> 解释：FIXED [客户ID] 表示对每个客户ID固定计算其总订单金额，<br> 不受视图中的其他筛选器影响。<br><br> 2. 创建百分比计算字段：<br> [订单金额] / [客户总金额]<br><br> 3. 在视图中显示：<br> - 行：客户ID、订单ID<br> - 列：SUM([订单金额])、SUM([客户总金额])、AVG([百分比])<br><br> 验证：每个客户的所有订单百分比之和应为100%。<br><br> 对比INCLUDE/EXCLUDE：<br> - {INCLUDE [客户ID] : SUM([订单金额])} 等价于 FIXED<br> - 若视图已包含客户ID，FIXED和INCLUDE结果相同。 '},
          {q:'在Power BI中实现动态RFM分析：根据最近一次消费(R)、消费频率(F)、消费金额(M)将客户分为8个群体。请用DAX实现。',a:'Power BI RFM DAX 实现：<br><br> 1. 创建度量值：<br> R（最近一次消费天数）=<br> DATEDIFF(MAX(\'订单表\'[订单日期]), TODAY(), DAY)<br><br> F（消费频率）= DISTINCTCOUNT(\'订单表\'[订单ID])<br><br> M（消费金额）= SUM(\'订单表\'[订单金额])<br><br> 2. 创建R、F、M评分（使用条件列）：<br> R_评分 = IF([R] <= 30, 3, IF([R] <= 90, 2, 1))<br> F_评分 = IF([F] >= 10, 3, IF([F] >= 3, 2, 1))<br> M_评分 = IF([M] >= 10000, 3, IF([M] >= 5000, 2, 1))<br><br> 3. RFM群体：<br> RFM = [R_评分] & [F_评分] & [M_评分]<br><br> 4. 客户标签：<br> SWITCH([RFM],<br> &nbsp;&nbsp;"333", "重要价值客户",<br> &nbsp;&nbsp;"311", "重要发展客户",<br> &nbsp;&nbsp;"133", "一般价值客户",<br> &nbsp;&nbsp;"111", "流失风险客户",<br> &nbsp;&nbsp;"其他"<br> ) '},
        ]
      },
      {
        title: 'Tableau LOD',
        items: [
          'FIXED LOD 表达式',
          'INCLUDE / EXCLUDE LOD',
          'LOD 与筛选器的优先级',
          '嵌套 LOD 计算',
        ],
        resources: [
          {name:'知乎：DAX从入门到精通（筛选上下文篇）',desc:'DAX筛选上下文的核心概念与实战案例',url:'https://zhuanlan.zhihu.com/p/45868412',tag:'文章'},
        ],
        exercises: [
          {q:'在Tableau中使用FIXED LOD计算每个品类中销量Top 3的产品，并排除其他产品。如何实现？',a:'Tableau FIXED LOD 实现 Top N：<br><br> 1. 创建计算字段"品类内排名"：<br> {FIXED [品类] : RANK(SUM([销量]))}<br><br> 注意：Tableau中RANK在LOD中有限制，实际更常用方法：<br><br> 方法2（推荐）：<br> 1. 创建计算字段"品类内排名"：<br> RANK(SUM([销量]), \'asc\', [品类])<br> 或：INDEX() 配合表计算<br><br> 方法3（使用FIXED + 辅助字段）：<br> 1. 创建计算字段"品类总销量"：<br> {FIXED [品类] : SUM([销量])}<br><br> 2. 创建计算字段"产品品类占比"：<br> SUM([销量]) / [品类总销量]<br><br> 3. 筛选：将"品类内排名"拖到筛选器，选择 <= 3<br><br> 方法4（数据源预处理）：<br> 在SQL/Pandas中先计算好排名，再导入Tableau。<br><br> 注意：Tableau LOD不能直接嵌套表计算，<br> 复杂排名场景建议预处理或使用表计算技巧。 </div> </div> '},
        ]
      },
      {
        title: '复杂业务场景',
        items: [
          '同期群分析（Cohort Analysis）',
          '客户留存率计算',
          'RFM 模型实现',
          'ABC/帕累托分析',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '性能优化',
        items: [
          '度量值 vs 计算列的选择',
          '避免复杂迭代函数',
          '变量 VAR 的使用',
          '数据模型优化',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
      {
        title: '高级可视化',
        items: [
          '自定义视觉对象开发',
          '动态参数与 What-if',
          '工具提示页面',
          '计算组（Calculation Groups）',
        ],
        resources: [
        ],
        exercises: [
        ]
      },
    ]
  },
};
