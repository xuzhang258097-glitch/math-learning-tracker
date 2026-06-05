/* ============================================================
   每日习题与资源链接数据库
   为关键天数提供详细习题（题目+隐藏答案）和可点击资源链接
   ============================================================ */

const EXERCISES_DB = {
  // ==================== 预备阶段 ====================
  "0-1": {
    links: [
      { name: "📺 宋浩《预备知识》第1讲 - 函数基础", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=1" },
      { name: "📖 同济《高等数学》第七版 1.1 映射与函数（请查阅实体书或电子书）", url: null }
    ],
    exercises: [
      {
        question: "求下列函数的定义域：\n(1) f(x) = √(3-x) + ln(x-1)\n(2) f(x) = arcsin((x-1)/2)",
        answer: "(1) 需要满足 3-x ≥ 0 且 x-1 > 0，即 x ≤ 3 且 x > 1，所以定义域为 (1, 3]\n(2) 需要满足 |(x-1)/2| ≤ 1，即 |x-1| ≤ 2，所以 -1 ≤ x ≤ 3，定义域为 [-1, 3]"
      },
      {
        question: "设 f(x) = x² + 1，g(x) = √x，求 f(g(x)) 和 g(f(x)) 的表达式及定义域。",
        answer: "f(g(x)) = f(√x) = (√x)² + 1 = x + 1，定义域为 [0, +∞)\ng(f(x)) = g(x²+1) = √(x²+1)，由于 x²+1 ≥ 1 > 0 恒成立，定义域为 (-∞, +∞)"
      },
      {
        question: "判断函数 f(x) = ln(x + √(x²+1)) 的奇偶性。",
        answer: "定义域为 (-∞, +∞)，关于原点对称。\nf(-x) = ln(-x + √(x²+1)) = ln[(-x + √(x²+1))(x + √(x²+1))/(x + √(x²+1))]\n= ln[(x²+1-x²)/(x + √(x²+1))] = ln[1/(x + √(x²+1))] = -ln(x + √(x²+1)) = -f(x)\n因此 f(x) 是奇函数。"
      }
    ]
  },
  "0-2": {
    links: [
      { name: "📺 宋浩《预备知识》第2讲 - 幂函数与指数函数", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=2" }
    ],
    exercises: [
      {
        question: "比较大小：3^0.5、3^0.7、3^-0.2",
        answer: "指数函数 y = 3^x 在 R 上单调递增。\n由于 0.7 > 0.5 > -0.2，所以 3^0.7 > 3^0.5 > 3^-0.2"
      },
      {
        question: "已知 a^0.5 > a^0.7 (a > 0 且 a ≠ 1)，求 a 的取值范围。",
        answer: "幂指数比较：0.5 < 0.7，但 a^0.5 > a^0.7，说明指数函数 y = a^x 单调递减。\n因此 0 < a < 1。"
      }
    ]
  },
  "0-3": {
    links: [
      { name: "📺 宋浩《预备知识》第3讲 - 对数运算", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=3" },
      { name: "📖 《考研数学公式速查手册》P1-2（请查阅实体书）", url: null }
    ],
    exercises: [
      {
        question: "化简：log₂25 · log₃4 · log₅9",
        answer: "利用换底公式：logₐb = ln b / ln a\n原式 = (ln 25/ln 2) · (ln 4/ln 3) · (ln 9/ln 5)\n= (2ln 5/ln 2) · (2ln 2/ln 3) · (2ln 3/ln 5)\n= 2 × 2 × 2 = 8"
      },
      {
        question: "已知 log₂3 = a，log₃5 = b，用 a、b 表示 log₁₅20。",
        answer: "log₁₅20 = log₃20 / log₃15 = log₃(4×5) / log₃(3×5)\n= (log₃4 + log₃5) / (1 + log₃5) = (2log₃2 + b) / (1 + b)\n由于 log₃2 = 1/log₂3 = 1/a\n所以 log₁₅20 = (2/a + b)/(1 + b) = (2 + ab)/(a(1+b))"
      }
    ]
  },
  "0-4": {
    links: [
      { name: "📺 宋浩《预备知识》第4讲 - 三角函数", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=4" }
    ],
    exercises: [
      {
        question: "求值：sin(750°)",
        answer: "sin(750°) = sin(720° + 30°) = sin(2×360° + 30°) = sin(30°) = 1/2"
      },
      {
        question: "已知 sin α = 3/5，且 α ∈ (π/2, π)，求 cos α 和 tan α。",
        answer: "α 在第二象限，cos α < 0\ncos α = -√(1 - sin²α) = -√(1 - 9/25) = -√(16/25) = -4/5\ntan α = sin α / cos α = (3/5) / (-4/5) = -3/4"
      }
    ]
  },
  "0-5": {
    links: [
      { name: "📖 《三角公式速查表》（请打印或手写背诵）", url: null }
    ],
    exercises: [
      {
        question: "化简：sin 50° cos 20° - cos 50° sin 20°",
        answer: "利用 sin(A-B) = sin A cos B - cos A sin B\n原式 = sin(50° - 20°) = sin(30°) = 1/2"
      },
      {
        question: "已知 sin α + cos α = 1/2，求 sin 2α。",
        answer: "(sin α + cos α)² = sin²α + 2sin α cos α + cos²α = 1 + sin 2α\n所以 (1/2)² = 1 + sin 2α\n1/4 = 1 + sin 2α\nsin 2α = 1/4 - 1 = -3/4"
      }
    ]
  },
  "0-9": {
    links: [
      { name: "📖 同济《高等数学》附录 - 数学归纳法", url: null }
    ],
    exercises: [
      {
        question: "用数学归纳法证明：1 + 2 + 3 + ... + n = n(n+1)/2",
        answer: "证明：\n(1) 当 n = 1 时，左边 = 1，右边 = 1×2/2 = 1，等式成立。\n(2) 假设 n = k 时等式成立，即 1+2+...+k = k(k+1)/2。\n则 n = k+1 时：\n左边 = 1+2+...+k+(k+1) = k(k+1)/2 + (k+1)\n= (k+1)(k/2 + 1) = (k+1)(k+2)/2 = 右边\n由数学归纳法，等式对所有正整数 n 成立。"
      }
    ]
  },

  // ==================== 第一阶段 ====================
  "1-4": {
    links: [
      { name: "📺 宋浩《高等数学》第4讲 - 数列极限的ε-N定义", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=10" },
      { name: "📖 同济《高等数学》2.1 数列的极限", url: null }
    ],
    exercises: [
      {
        question: "用 ε-N 定义证明：lim(n→∞) 1/n = 0",
        answer: "证明：\n∀ε > 0，取 N = ⌈1/ε⌉（向上取整）。\n当 n > N 时，|1/n - 0| = 1/n < 1/N ≤ ε。\n由 ε-N 定义，lim(n→∞) 1/n = 0。"
      },
      {
        question: "用 ε-N 定义证明：lim(n→∞) (3n+1)/(2n+1) = 3/2",
        answer: "证明：\n|(3n+1)/(2n+1) - 3/2| = |(6n+2-6n-3)/(2(2n+1))| = 1/(2(2n+1)) < 1/(4n)\n∀ε > 0，要使 1/(4n) < ε，只需 n > 1/(4ε)。\n取 N = ⌈1/(4ε)⌉，当 n > N 时，|(3n+1)/(2n+1) - 3/2| < ε。\n因此极限为 3/2。"
      }
    ]
  },
  "1-5": {
    links: [
      { name: "📖 同济《高等数学》2.1 例题", url: null }
    ],
    exercises: [
      {
        question: "用 ε-N 定义证明：lim(n→∞) 1/2ⁿ = 0",
        answer: "证明：\n∀ε > 0（不妨设 ε < 1），要使 |1/2ⁿ - 0| = 1/2ⁿ < ε。\n两边取对数：-n ln 2 < ln ε，即 n > -ln ε / ln 2 = ln(1/ε) / ln 2。\n取 N = ⌈ln(1/ε)/ln 2⌉，当 n > N 时，1/2ⁿ < ε。\n由定义，lim(n→∞) 1/2ⁿ = 0。"
      },
      {
        question: "用 ε-N 定义证明：lim(n→∞) n/(n²+1) = 0",
        answer: "证明：\n|n/(n²+1) - 0| = n/(n²+1) < n/n² = 1/n\n∀ε > 0，取 N = ⌈1/ε⌉，当 n > N 时，1/n < ε。\n因此 |n/(n²+1)| < ε，极限为 0。"
      }
    ]
  },
  "1-7": {
    links: [
      { name: "📖 同济《高等数学》2.2 收敛数列的性质", url: null }
    ],
    exercises: [
      {
        question: "证明：若数列 {xₙ} 收敛，则其极限唯一。",
        answer: "证明（反证法）：\n假设 lim xₙ = a 且 lim xₙ = b，a ≠ b。\n取 ε = |a-b|/3 > 0。\n由极限定义，∃N₁，当 n > N₁ 时 |xₙ-a| < ε；\n∃N₂，当 n > N₂ 时 |xₙ-b| < ε。\n取 N = max{N₁, N₂}，当 n > N 时：\n|a-b| = |(a-xₙ)+(xₙ-b)| ≤ |xₙ-a| + |xₙ-b| < 2ε = 2|a-b|/3\n即 |a-b| < 2|a-b|/3，矛盾！\n因此 a = b，极限唯一。"
      }
    ]
  },
  "1-11": {
    links: [
      { name: "📖 同济《高等数学》4.3 极限运算法则", url: null }
    ],
    exercises: [
      {
        question: "证明：若 lim f(x) = A，lim g(x) = B，则 lim[f(x)+g(x)] = A+B。",
        answer: "证明：\n∀ε > 0，由 lim f(x) = A，∃δ₁ > 0，当 0 < |x-x₀| < δ₁ 时，|f(x)-A| < ε/2。\n由 lim g(x) = B，∃δ₂ > 0，当 0 < |x-x₀| < δ₂ 时，|g(x)-B| < ε/2。\n取 δ = min{δ₁, δ₂}，当 0 < |x-x₀| < δ 时：\n|(f+g)-(A+B)| ≤ |f-A| + |g-B| < ε/2 + ε/2 = ε\n因此 lim[f(x)+g(x)] = A+B。"
      },
      {
        question: "计算极限：lim(x→2) (x²-4)/(x-2)",
        answer: "lim(x→2) (x²-4)/(x-2) = lim(x→2) (x-2)(x+2)/(x-2)\n= lim(x→2) (x+2) = 4"
      },
      {
        question: "计算极限：lim(x→0) (sin 3x)/x",
        answer: "lim(x→0) (sin 3x)/x = lim(x→0) 3·(sin 3x)/(3x)\n令 t = 3x，当 x→0 时 t→0\n= 3 · lim(t→0) (sin t)/t = 3 × 1 = 3"
      }
    ]
  },
  "1-13": {
    links: [
      { name: "📖 同济《高等数学》4.5 两个重要极限", url: null }
    ],
    exercises: [
      {
        question: "证明：lim(x→0) (sin x)/x = 1",
        answer: "证明（利用单位圆和夹逼准则）：\n设 0 < x < π/2，在单位圆中，设圆心角为 x（弧度）。\n则有：sin x < x < tan x\n两边除以 sin x（sin x > 0）：1 < x/sin x < 1/cos x\n取倒数：cos x < sin x/x < 1\n当 x→0⁺ 时，cos x → 1，由夹逼准则，lim(x→0⁺) sin x/x = 1。\n当 x→0⁻ 时，令 t = -x > 0，sin x/x = sin(-t)/(-t) = (-sin t)/(-t) = sin t/t → 1。\n因此 lim(x→0) sin x/x = 1。"
      },
      {
        question: "计算：lim(x→0) (1 - cos x)/x²",
        answer: "利用 1 - cos x = 2sin²(x/2)：\nlim(x→0) (1-cos x)/x² = lim(x→0) 2sin²(x/2)/x²\n= lim(x→0) (1/2)·[sin(x/2)/(x/2)]² = (1/2) × 1² = 1/2"
      }
    ]
  },
  "1-17": {
    links: [
      { name: "📖 同济《高等数学》5.2 连续函数的性质", url: null }
    ],
    exercises: [
      {
        question: "证明：若函数 f(x) 在闭区间 [a,b] 上连续，则 f(x) 在 [a,b] 上有界。",
        answer: "证明（反证法）：\n假设 f(x) 在 [a,b] 上无界。\n则 ∀n ∈ N⁺，∃xₙ ∈ [a,b]，使得 |f(xₙ)| > n。\n由致密性定理，{xₙ} 有收敛子列 {xₙₖ}，设 lim xₙₖ = c ∈ [a,b]。\n由 f 的连续性，lim f(xₙₖ) = f(c)。\n但 |f(xₙₖ)| > nₖ → +∞，矛盾！\n因此 f(x) 在 [a,b] 上有界。"
      },
      {
        question: "证明：若 f(x) 在 [a,b] 上连续，且 f(a)·f(b) < 0，则 ∃c ∈ (a,b) 使得 f(c) = 0。",
        answer: "证明（零点定理，区间套法）：\n不妨设 f(a) < 0，f(b) > 0。\n取 [a₁,b₁] = [a,b]，中点 c₁ = (a₁+b₁)/2。\n若 f(c₁) = 0，证毕。\n若 f(c₁) < 0，取 [a₂,b₂] = [c₁,b₁]；若 f(c₁) > 0，取 [a₂,b₂] = [a₁,c₁]。\n重复此过程，得到区间套 [aₙ,bₙ]，满足 f(aₙ) < 0，f(bₙ) > 0，且 bₙ-aₙ → 0。\n由区间套定理，∃唯一 c ∈ ∩[aₙ,bₙ]，且 aₙ → c，bₙ → c。\n由连续性，f(c) = lim f(aₙ) ≤ 0 且 f(c) = lim f(bₙ) ≥ 0。\n因此 f(c) = 0。"
      }
    ]
  },
  "1-18": {
    links: [
      { name: "📺 宋浩《高等数学》第18讲 - 导数的概念", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=18" },
      { name: "📖 同济《高等数学》6.1 导数的概念", url: null }
    ],
    exercises: [
      {
        question: "用导数定义求 f(x) = x² 在 x = 1 处的导数。",
        answer: "f'(1) = lim(Δx→0) [f(1+Δx) - f(1)]/Δx\n= lim(Δx→0) [(1+Δx)² - 1]/Δx\n= lim(Δx→0) [1 + 2Δx + (Δx)² - 1]/Δx\n= lim(Δx→0) [2Δx + (Δx)²]/Δx\n= lim(Δx→0) (2 + Δx) = 2"
      },
      {
        question: "证明：若函数 f(x) 在 x₀ 处可导，则 f(x) 在 x₀ 处连续。",
        answer: "证明：\n由可导，f'(x₀) = lim(x→x₀) [f(x)-f(x₀)]/(x-x₀) 存在。\nlim(x→x₀) [f(x)-f(x₀)] = lim(x→x₀) [f(x)-f(x₀)]/(x-x₀) · (x-x₀)\n= f'(x₀) · 0 = 0\n因此 lim(x→x₀) f(x) = f(x₀)，即 f 在 x₀ 处连续。"
      },
      {
        question: "讨论 f(x) = |x| 在 x = 0 处的可导性。",
        answer: "左导数：f'_-(0) = lim(x→0⁻) [|x| - 0]/(x-0) = lim(x→0⁻) (-x)/x = -1\n右导数：f'_+(0) = lim(x→0⁺) [|x| - 0]/(x-0) = lim(x→0⁺) x/x = 1\n由于 f'_-(0) = -1 ≠ 1 = f'_+(0)，左右导数不相等。\n因此 f(x) = |x| 在 x = 0 处不可导（但连续）。"
      }
    ]
  },
  "1-19": {
    links: [
      { name: "📖 同济《高等数学》6.2 函数的求导法则", url: null }
    ],
    exercises: [
      {
        question: "证明乘积求导法则：(uv)' = u'v + uv'",
        answer: "证明：\n(u(x)v(x))' = lim(h→0) [u(x+h)v(x+h) - u(x)v(x)]/h\n= lim(h→0) [u(x+h)v(x+h) - u(x+h)v(x) + u(x+h)v(x) - u(x)v(x)]/h\n= lim(h→0) u(x+h)·[v(x+h)-v(x)]/h + lim(h→0) [u(x+h)-u(x)]/h · v(x)\n= u(x)·v'(x) + u'(x)·v(x)\n（利用了 u 的连续性：u(x+h) → u(x)）"
      },
      {
        question: "求 y = x³·eˣ 的导数。",
        answer: "y' = (x³)'·eˣ + x³·(eˣ)' = 3x²·eˣ + x³·eˣ = eˣ·x²(3+x)"
      }
    ]
  },
  "1-25": {
    links: [
      { name: "📺 宋浩《高等数学》第25讲 - 罗尔定理", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=25" },
      { name: "📖 同济《高等数学》7.1 微分中值定理", url: null }
    ],
    exercises: [
      {
        question: "证明罗尔定理：若 f(x) 在 [a,b] 上连续，在 (a,b) 内可导，且 f(a) = f(b)，则 ∃ξ ∈ (a,b) 使得 f'(ξ) = 0。",
        answer: "证明：\n由最值定理，f 在 [a,b] 上有最大值 M 和最小值 m。\n(1) 若 M = m，则 f(x) ≡ 常数，f'(x) = 0，∀x ∈ (a,b)，取 ξ = (a+b)/2 即可。\n(2) 若 M > m，由于 f(a) = f(b)，则 M 和 m 中至少有一个在 (a,b) 内取得。\n不妨设 ∃ξ ∈ (a,b) 使 f(ξ) = M（最大值）。\n由费马引理：若 f 在 ξ 处可导且取极值，则 f'(ξ) = 0。\n因此 f'(ξ) = 0。"
      },
      {
        question: "验证 f(x) = x(x-1)(x-2) 在 [0,2] 上满足罗尔定理条件，并求出 ξ。",
        answer: "f(x) = x(x-1)(x-2) 是多项式函数，在 [0,2] 上连续，在 (0,2) 内可导。\nf(0) = 0，f(2) = 2×1×0 = 0，满足 f(0) = f(2)。\n由罗尔定理，∃ξ ∈ (0,2) 使 f'(ξ) = 0。\nf'(x) = (x-1)(x-2) + x(x-2) + x(x-1) = 3x² - 6x + 2\n令 f'(ξ) = 0：3ξ² - 6ξ + 2 = 0\nξ = (6 ± √(36-24))/6 = (6 ± √12)/6 = (3 ± √3)/3\n两个根 ξ₁ = (3-√3)/3 ≈ 0.423 和 ξ₂ = (3+√3)/3 ≈ 1.577 都在 (0,2) 内。"
      }
    ]
  },
  "1-26": {
    links: [
      { name: "📖 同济《高等数学》7.1 拉格朗日中值定理", url: null }
    ],
    exercises: [
      {
        question: "用罗尔定理证明拉格朗日中值定理：若 f(x) 在 [a,b] 上连续，在 (a,b) 内可导，则 ∃ξ ∈ (a,b) 使得 f'(ξ) = [f(b)-f(a)]/(b-a)。",
        answer: "证明：\n构造辅助函数 F(x) = f(x) - [f(b)-f(a)]/(b-a) · (x-a)\n易验证：\nF(a) = f(a) - 0 = f(a)\nF(b) = f(b) - [f(b)-f(a)] = f(a)\n因此 F(a) = F(b)。\nF(x) 在 [a,b] 上连续，在 (a,b) 内可导（因为 f 满足这些条件）。\n由罗尔定理，∃ξ ∈ (a,b) 使 F'(ξ) = 0。\nF'(x) = f'(x) - [f(b)-f(a)]/(b-a)\nF'(ξ) = 0 ⟹ f'(ξ) = [f(b)-f(a)]/(b-a)\n证毕。"
      },
      {
        question: "证明：|sin a - sin b| ≤ |a - b|",
        answer: "设 f(x) = sin x，在 [a,b]（或 [b,a]）上应用拉格朗日中值定理：\n∃ξ 在 a 与 b 之间，使 sin a - sin b = cos ξ · (a-b)\n因此 |sin a - sin b| = |cos ξ| · |a-b| ≤ 1 · |a-b| = |a-b|"
      }
    ]
  },

  // ==================== 第二阶段 ====================
  "2-4": {
    links: [
      { name: "📺 宋浩《高等数学》第30讲 - 第一类换元法", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=30" },
      { name: "📖 同济《高等数学》8.2 换元积分法", url: null }
    ],
    exercises: [
      {
        question: "求不定积分：∫ 2x·cos(x²) dx",
        answer: "令 u = x²，则 du = 2x dx\n∫ 2x·cos(x²) dx = ∫ cos u du = sin u + C = sin(x²) + C"
      },
      {
        question: "求不定积分：∫ e^(3x) dx",
        answer: "令 u = 3x，则 du = 3dx，dx = du/3\n∫ e^(3x) dx = (1/3)∫ e^u du = (1/3)e^u + C = (1/3)e^(3x) + C"
      },
      {
        question: "求不定积分：∫ x/√(1+x²) dx",
        answer: "令 u = 1+x²，则 du = 2x dx，x dx = du/2\n∫ x/√(1+x²) dx = (1/2)∫ u^(-1/2) du = (1/2)·2u^(1/2) + C\n= √(1+x²) + C"
      }
    ]
  },
  "2-8": {
    links: [
      { name: "📺 宋浩《高等数学》第32讲 - 分部积分法", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=32" },
      { name: "📖 同济《高等数学》8.3 分部积分法", url: null }
    ],
    exercises: [
      {
        question: "证明分部积分公式：∫ u dv = uv - ∫ v du",
        answer: "证明：\n由乘积求导法则：(uv)' = u'v + uv'\n两边积分：∫ (uv)' dx = ∫ u'v dx + ∫ uv' dx\nuv = ∫ v du + ∫ u dv\n移项得：∫ u dv = uv - ∫ v du"
      },
      {
        question: "求不定积分：∫ x·eˣ dx",
        answer: "令 u = x，dv = eˣdx，则 du = dx，v = eˣ\n∫ x·eˣ dx = x·eˣ - ∫ eˣ dx = x·eˣ - eˣ + C = eˣ(x-1) + C"
      },
      {
        question: "求不定积分：∫ x²·sin x dx",
        answer: "第一次分部积分：u = x², dv = sin x dx, du = 2x dx, v = -cos x\n∫ x² sin x dx = -x² cos x + ∫ 2x cos x dx\n第二次分部积分：u = 2x, dv = cos x dx, du = 2 dx, v = sin x\n∫ 2x cos x dx = 2x sin x - ∫ 2 sin x dx = 2x sin x + 2 cos x\n因此原式 = -x² cos x + 2x sin x + 2 cos x + C"
      }
    ]
  },
  "2-14": {
    links: [
      { name: "📺 宋浩《高等数学》第35讲 - 定积分的概念", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=35" },
      { name: "📖 同济《高等数学》9.1 定积分的概念与性质", url: null }
    ],
    exercises: [
      {
        question: "用定积分定义计算：∫₀¹ x² dx",
        answer: "将 [0,1] n 等分，分点 xᵢ = i/n，Δx = 1/n\n取 ξᵢ = xᵢ = i/n\n∫₀¹ x² dx = lim(n→∞) Σᵢ₌₁ⁿ (i/n)² · (1/n)\n= lim(n→∞) (1/n³) Σᵢ₌₁ⁿ i²\n= lim(n→∞) (1/n³) · n(n+1)(2n+1)/6\n= lim(n→∞) (n+1)(2n+1)/(6n²)\n= lim(n→∞) (2n² + 3n + 1)/(6n²) = 2/6 = 1/3"
      },
      {
        question: "比较大小：∫₀¹ x dx 与 ∫₀¹ x² dx",
        answer: "在 [0,1] 上，x - x² = x(1-x) ≥ 0，即 x ≥ x²\n由定积分的保号性（若在 [a,b] 上 f(x) ≥ g(x)，则 ∫f ≥ ∫g）：\n∫₀¹ x dx ≥ ∫₀¹ x² dx"
      }
    ]
  },
  "2-16": {
    links: [
      { name: "📖 同济《高等数学》9.3 微积分基本公式", url: null }
    ],
    exercises: [
      {
        question: "证明：若 f(x) 在 [a,b] 上连续，则 d/dx ∫ₐˣ f(t)dt = f(x)",
        answer: "证明：\n设 Φ(x) = ∫ₐˣ f(t)dt\nΦ'(x) = lim(Δx→0) [Φ(x+Δx) - Φ(x)]/Δx\n= lim(Δx→0) [∫ₐ^(x+Δx) f(t)dt - ∫ₐˣ f(t)dt]/Δx\n= lim(Δx→0) [∫ˣ^(x+Δx) f(t)dt]/Δx\n由积分中值定理，∃ξ 在 x 与 x+Δx 之间，使 ∫ˣ^(x+Δx) f(t)dt = f(ξ)·Δx\n因此 Φ'(x) = lim(Δx→0) f(ξ)·Δx/Δx = lim(Δx→0) f(ξ)\n当 Δx→0 时，ξ→x，由 f 的连续性，f(ξ)→f(x)\n故 Φ'(x) = f(x)。"
      },
      {
        question: "计算：d/dx ∫₀^(x²) sin t dt",
        answer: "由变上限积分求导公式（链式法则）：\nd/dx ∫₀^(x²) sin t dt = sin(x²) · (x²)' = sin(x²) · 2x = 2x sin(x²)"
      }
    ]
  },
  "2-20": {
    links: [
      { name: "📖 同济《高等数学》9.4 定积分的换元法", url: null }
    ],
    exercises: [
      {
        question: "证明：若 f(x) 为奇函数，则 ∫₋ₐᵃ f(x)dx = 0",
        answer: "证明：\n∫₋ₐᵃ f(x)dx = ∫₋ₐ⁰ f(x)dx + ∫₀ᵃ f(x)dx\n对第一个积分，令 x = -t，dx = -dt\n当 x = -a 时 t = a；当 x = 0 时 t = 0\n∫₋ₐ⁰ f(x)dx = ∫ₐ⁰ f(-t)(-dt) = ∫₀ᵃ f(-t)dt = -∫₀ᵃ f(t)dt （因为 f 是奇函数）\n因此 ∫₋ₐᵃ f(x)dx = -∫₀ᵃ f(x)dx + ∫₀ᵃ f(x)dx = 0"
      },
      {
        question: "计算：∫₋π^π x³·cos x dx",
        answer: "f(x) = x³·cos x\nf(-x) = (-x)³·cos(-x) = -x³·cos x = -f(x)\n因此 f(x) 是奇函数。\n由奇函数在对称区间积分为0：\n∫₋π^π x³·cos x dx = 0"
      }
    ]
  },

  // ==================== 第三阶段 ====================
  "3-5": {
    links: [
      { name: "📺 宋浩《高等数学》第40讲 - 偏导数", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=40" },
      { name: "📖 同济《高等数学》12.2 偏导数", url: null }
    ],
    exercises: [
      {
        question: "设 z = x²y + xy²，求 ∂z/∂x 和 ∂z/∂y。",
        answer: "∂z/∂x = 2xy + y²（把 y 看作常数，对 x 求导）\n∂z/∂y = x² + 2xy（把 x 看作常数，对 y 求导）"
      },
      {
        question: "设 f(x,y) = x² + y²，求 fₓ(1,2) 和 fᵧ(1,2)。",
        answer: "fₓ = 2x，fₓ(1,2) = 2×1 = 2\nfᵧ = 2y，fᵧ(1,2) = 2×2 = 4"
      }
    ]
  },
  "3-6": {
    links: [
      { name: "📖 同济《高等数学》12.3 全微分", url: null }
    ],
    exercises: [
      {
        question: "证明：若 z = f(x,y) 在点 (x₀,y₀) 处可微，则 f 在该点偏导数存在，且 dz = fₓdx + fᵧdy。",
        answer: "证明：\n由可微定义，Δz = f(x₀+Δx, y₀+Δy) - f(x₀,y₀) = AΔx + BΔy + o(ρ)\n其中 ρ = √(Δx²+Δy²)\n令 Δy = 0，则 Δz = f(x₀+Δx, y₀) - f(x₀,y₀) = AΔx + o(|Δx|)\n因此 fₓ(x₀,y₀) = lim(Δx→0) Δz/Δx = lim(Δx→0) [AΔx + o(|Δx|)]/Δx = A\n同理 fᵧ(x₀,y₀) = B\n所以 dz = fₓdx + fᵧdy。"
      },
      {
        question: "求 z = x²y 的全微分 dz。",
        answer: "∂z/∂x = 2xy，∂z/∂y = x²\ndz = 2xy dx + x² dy"
      }
    ]
  },
  "3-23": {
    links: [
      { name: "📺 宋浩《高等数学》第48讲 - 格林公式", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=48" },
      { name: "📖 同济《高等数学》14.3 格林公式", url: null }
    ],
    exercises: [
      {
        question: "证明格林公式：∮_L Pdx + Qdy = ∬_D (∂Q/∂x - ∂P/∂y) dxdy",
        answer: "证明思路（以X型区域为例）：\n设 D = {(x,y) | a ≤ x ≤ b, φ₁(x) ≤ y ≤ φ₂(x)}\n先证 ∬_D ∂P/∂y dxdy = -∮_L Pdx\n左边 = ∫ₐᵇ dx ∫_(φ₁(x))^(φ₂(x)) ∂P/∂y dy = ∫ₐᵇ [P(x,φ₂(x)) - P(x,φ₁(x))] dx\n右边 = -∮_L Pdx = -[∫_(L₁) Pdx + ∫_(L₂) Pdx]\n其中 L₁ 是下边界 y=φ₁(x)（从 a 到 b），L₂ 是上边界 y=φ₂(x)（从 b 到 a）\n= -[∫ₐᵇ P(x,φ₁(x))dx + ∫ᵇₐ P(x,φ₂(x))dx]\n= -∫ₐᵇ P(x,φ₁(x))dx + ∫ₐᵇ P(x,φ₂(x))dx\n= ∫ₐᵇ [P(x,φ₂(x)) - P(x,φ₁(x))] dx = 左边\n同理可证 ∬_D ∂Q/∂x dxdy = ∮_L Qdy\n两式相加即得格林公式。"
      },
      {
        question: "用格林公式计算 ∮_L (x²-y)dx + (y²+x)dy，其中 L 是圆 x²+y² = 1 的逆时针方向。",
        answer: "P = x² - y，Q = y² + x\n∂Q/∂x = 1，∂P/∂y = -1\n由格林公式：\n∮_L Pdx + Qdy = ∬_D (1 - (-1)) dxdy = ∬_D 2 dxdy\n= 2 × (圆的面积) = 2 × π × 1² = 2π"
      }
    ]
  },

  // ==================== 第四阶段 ====================
  "4-3": {
    links: [
      { name: "📺 宋浩《高等数学》第52讲 - 正项级数审敛法", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=52" },
      { name: "📖 同济《高等数学》16.2 常数项级数的审敛法", url: null }
    ],
    exercises: [
      {
        question: "证明比较审敛法：设 0 ≤ uₙ ≤ vₙ，若 Σvₙ 收敛，则 Σuₙ 收敛；若 Σuₙ 发散，则 Σvₙ 发散。",
        answer: "证明：\n设 Σvₙ 收敛于 S，则其部分和 Sₙ = v₁+...+vₙ ≤ S。\n由于 0 ≤ uₙ ≤ vₙ，Σuₙ 的部分和 Tₙ = u₁+...+uₙ ≤ v₁+...+vₙ = Sₙ ≤ S。\n因此 {Tₙ} 单调递增且有上界 S，由单调有界原理，{Tₙ} 收敛。\n即 Σuₙ 收敛。\n（逆否命题：若 Σuₙ 发散，则 Σvₙ 必发散，否则与正向结论矛盾）"
      },
      {
        question: "判断级数 Σ(n=1→∞) 1/(n²+1) 的敛散性。",
        answer: "由于 1/(n²+1) < 1/n²\n而 Σ 1/n² 是 p=2>1 的 p-级数，收敛。\n由比较审敛法，Σ 1/(n²+1) 收敛。"
      },
      {
        question: "判断级数 Σ(n=1→∞) n/2ⁿ 的敛散性。",
        answer: "用比值审敛法：\nuₙ = n/2ⁿ\nlim(n→∞) uₙ₊₁/uₙ = lim(n→∞) [(n+1)/2ⁿ⁺¹] / [n/2ⁿ]\n= lim(n→∞) (n+1)/(2n) = 1/2 < 1\n由比值审敛法，级数收敛。"
      }
    ]
  },
  "4-5": {
    links: [
      { name: "📖 同济《高等数学》16.3 交错级数", url: null }
    ],
    exercises: [
      {
        question: "证明莱布尼茨判别法：若交错级数 Σ(-1)ⁿ⁻¹uₙ 满足 uₙ ≥ uₙ₊₁ > 0 且 lim uₙ = 0，则级数收敛。",
        answer: "证明：\n考虑部分和 S₂ₙ = (u₁-u₂) + (u₃-u₄) + ... + (u₂ₙ₋₁-u₂ₙ)\n由于 uₙ ≥ uₙ₊₁，每一项 u₂ₖ₋₁ - u₂ₖ ≥ 0，所以 S₂ₙ 单调递增。\n又 S₂ₙ = u₁ - (u₂-u₃) - ... - u₂ₙ ≤ u₁\n所以 S₂ₙ 有上界，收敛。设 lim S₂ₙ = S。\n再考虑 S₂ₙ₊₁ = S₂ₙ + u₂ₙ₊₁\n由于 lim u₂ₙ₊₁ = 0，lim S₂ₙ₊₁ = S + 0 = S\n因此 lim Sₙ = S，级数收敛。"
      },
      {
        question: "判断级数 Σ(-1)ⁿ⁻¹/n 的敛散性（绝对收敛还是条件收敛）。",
        answer: "首先判断绝对收敛性：\nΣ|(-1)ⁿ⁻¹/n| = Σ 1/n 是调和级数，发散。\n因此不绝对收敛。\n再判断交错级数本身：\nuₙ = 1/n，显然 uₙ = 1/n > 1/(n+1) = uₙ₊₁ > 0\n且 lim(n→∞) 1/n = 0\n由莱布尼茨判别法，交错级数 Σ(-1)ⁿ⁻¹/n 收敛。\n综上，该级数条件收敛。"
      }
    ]
  },
  "4-11": {
    links: [
      { name: "📖 同济《高等数学》16.5 函数展开成幂级数", url: null }
    ],
    exercises: [
      {
        question: "推导 eˣ 的麦克劳林展开式。",
        answer: "f(x) = eˣ，f⁽ⁿ⁾(x) = eˣ，f⁽ⁿ⁾(0) = 1\n麦克劳林公式：f(x) = Σ(n=0→∞) f⁽ⁿ⁾(0)·xⁿ/n! = Σ(n=0→∞) xⁿ/n!\n余项 Rₙ(x) = e^ξ · xⁿ⁺¹/(n+1)!（ξ 在 0 与 x 之间）\n对任意固定的 x，lim(n→∞) |Rₙ(x)| ≤ lim(n→∞) e^|x| · |x|ⁿ⁺¹/(n+1)! = 0\n因此 eˣ = 1 + x + x²/2! + x³/3! + ... + xⁿ/n! + ...，x ∈ (-∞, +∞)"
      },
      {
        question: "求 sin x 的麦克劳林展开式。",
        answer: "f(x) = sin x\nf'(x) = cos x, f''(x) = -sin x, f'''(x) = -cos x, f⁽⁴⁾(x) = sin x, ...\n在 x=0 处：f(0)=0, f'(0)=1, f''(0)=0, f'''(0)=-1, f⁽⁴⁾(0)=0, ...\n规律：f⁽²ⁿ⁾(0) = 0，f⁽²ⁿ⁺¹⁾(0) = (-1)ⁿ\n因此 sin x = x - x³/3! + x⁵/5! - x⁷/7! + ... + (-1)ⁿx²ⁿ⁺¹/(2n+1)! + ...，x ∈ (-∞, +∞)"
      }
    ]
  },
  "4-18": {
    links: [
      { name: "📺 宋浩《高等数学》第58讲 - 一阶线性微分方程", url: "https://www.bilibili.com/video/BV1Eb411u7Fw?p=58" },
      { name: "📖 同济《高等数学》17.2 一阶线性微分方程", url: null }
    ],
    exercises: [
      {
        question: "推导一阶线性微分方程 y' + P(x)y = Q(x) 的通解公式。",
        answer: "推导（常数变易法）：\n先解齐次方程 y' + P(x)y = 0\n分离变量：dy/y = -P(x)dx\n积分：ln|y| = -∫P(x)dx + C₁\ny = Ce^(-∫P(x)dx)（C = ±e^C₁）\n设非齐次方程的解为 y = C(x)·e^(-∫P(x)dx)\n代入原方程：\nC'(x)·e^(-∫Pdx) + C(x)·(-P)·e^(-∫Pdx) + P·C(x)·e^(-∫Pdx) = Q(x)\n化简：C'(x)·e^(-∫Pdx) = Q(x)\nC'(x) = Q(x)·e^(∫Pdx)\nC(x) = ∫Q(x)·e^(∫Pdx)dx + C\n因此通解：\ny = e^(-∫Pdx) [∫Q(x)·e^(∫Pdx)dx + C]"
      },
      {
        question: "求解微分方程：y' + (1/x)y = x² (x > 0)",
        answer: "P(x) = 1/x，Q(x) = x²\n∫P(x)dx = ∫(1/x)dx = ln x\ne^(∫Pdx) = e^(ln x) = x\ne^(-∫Pdx) = 1/x\n∫Q(x)·e^(∫Pdx)dx = ∫x²·x dx = ∫x³ dx = x⁴/4\n通解：y = (1/x)[x⁴/4 + C] = x³/4 + C/x"
      }
    ]
  },

  // ==================== 第五阶段 ====================
  "5-4": {
    links: [
      { name: "📺 宋浩《线性代数》第4讲 - 行列式的性质", url: "https://www.bilibili.com/video/BV1aW411Q7x1?p=4" },
      { name: "📖 同济《线性代数》1.4 行列式的性质", url: null }
    ],
    exercises: [
      {
        question: "证明：行列式转置后值不变，即 |Aᵀ| = |A|。",
        answer: "证明：\n设 A = (aᵢⱼ) 为 n 阶矩阵，Aᵀ = (aⱼᵢ)\n|A| = Σ(-1)^τ(j₁...jₙ) a₁ⱼ₁ a₂ⱼ₂ ... aₙⱼₙ\n|Aᵀ| = Σ(-1)^τ(j₁...jₙ) aⱼ₁₁ aⱼ₂₂ ... aⱼₙₙ\n令 iₖ = jₖ，则上式 = Σ(-1)^τ(i₁...iₙ) aᵢ₁₁ aᵢ₂₂ ... aᵢₙₙ\n由行列式定义，对列标排序后即得 |A|。\n因此 |Aᵀ| = |A|。"
      },
      {
        question: "计算行列式：| 1  2  3 |\n                | 4  5  6 |\n                | 7  8  9 |",
        answer: "注意到第三行 = 第一行 + 第二行\n即 R₃ = R₁ + R₂\n由行列式性质：若一行是其他行的线性组合，则行列式为0。\n或直接计算：\n= 1×(5×9-6×8) - 2×(4×9-6×7) + 3×(4×8-5×7)\n= 1×(45-48) - 2×(36-42) + 3×(32-35)\n= 1×(-3) - 2×(-6) + 3×(-3)\n= -3 + 12 - 9 = 0"
      }
    ]
  },
  "5-10": {
    links: [
      { name: "📖 同济《线性代数》2.3 逆矩阵", url: null }
    ],
    exercises: [
      {
        question: "证明：n 阶矩阵 A 可逆 ⟺ |A| ≠ 0。",
        answer: "证明（⟹）：\n若 A 可逆，则 ∃A⁻¹ 使 AA⁻¹ = E。\n两边取行列式：|A|·|A⁻¹| = |E| = 1\n因此 |A| ≠ 0。\n\n证明（⟸）：\n若 |A| ≠ 0，设 A* 为 A 的伴随矩阵。\n由 AA* = A*A = |A|E\n得 A·(A*/|A|) = (A*/|A|)·A = E\n因此 A⁻¹ = A*/|A| 存在，A 可逆。"
      },
      {
        question: "求矩阵 A = | 1  2 | 的逆矩阵。\n             | 3  4 |",
        answer: "|A| = 1×4 - 2×3 = 4 - 6 = -2 ≠ 0，可逆。\nA* = |  4  -2 |\n     | -3   1 |\n（伴随矩阵：主对角线互换，副对角线变号）\nA⁻¹ = (1/|A|)·A* = (-1/2)·|  4  -2 | = | -2    1  |\n                          | -3   1 |   | 3/2  -1/2 |"
      }
    ]
  },
  "5-18": {
    links: [
      { name: "📺 宋浩《线性代数》第18讲 - 向量组的线性相关性", url: "https://www.bilibili.com/video/BV1aW411Q7x1?p=18" },
      { name: "📖 同济《线性代数》4.2 向量组的线性相关性", url: null }
    ],
    exercises: [
      {
        question: "证明：向量组 α₁, α₂, ..., αₙ 线性相关的充要条件是至少有一个向量可由其余向量线性表示。",
        answer: "证明（⟹）：\n若 α₁, ..., αₙ 线性相关，则 ∃不全为零的 k₁, ..., kₙ 使 k₁α₁ + ... + kₙαₙ = 0。\n设 kᵢ ≠ 0，则 αᵢ = (-k₁/kᵢ)α₁ + ... + (-kₙ/kᵢ)αₙ（不含 αᵢ 项）。\n即 αᵢ 可由其余向量线性表示。\n\n证明（⟸）：\n若 αᵢ = c₁α₁ + ... + cₙαₙ（不含 αᵢ 项）\n则 c₁α₁ + ... + (-1)αᵢ + ... + cₙαₙ = 0\n系数不全为零（αᵢ 的系数为 -1 ≠ 0），因此向量组线性相关。"
      },
      {
        question: "判断向量组 α₁=(1,2,3), α₂=(2,4,6), α₃=(1,0,-1) 是否线性相关。",
        answer: "观察发现 α₂ = 2α₁，即 2α₁ - α₂ + 0·α₃ = 0\n系数 (2, -1, 0) 不全为零。\n因此向量组线性相关。\n\n或用行列式法：\n| 1  2  1 |\n| 2  4  0 | = 1×(4×(-1)-0×6) - 2×(2×(-1)-0×3) + 1×(2×6-4×3)\n| 3  6 -1 |\n= 1×(-4) - 2×(-2) + 1×0 = -4 + 4 + 0 = 0\n行列式为0，向量组线性相关。"
      }
    ]
  },
  "5-23": {
    links: [
      { name: "📖 同济《线性代数》5.2 方阵的特征值与特征向量", url: null }
    ],
    exercises: [
      {
        question: "证明：设 λ₁, λ₂, ..., λₙ 是 n 阶矩阵 A 的特征值，则 λ₁+λ₂+...+λₙ = tr(A)（迹），λ₁λ₂...λₙ = |A|。",
        answer: "证明：\n特征多项式 |λE - A| = (λ-λ₁)(λ-λ₂)...(λ-λₙ)\n展开左边：|λE - A| = λⁿ - (a₁₁+a₂₂+...+aₙₙ)λⁿ⁻¹ + ... + (-1)ⁿ|A|\n= λⁿ - tr(A)λⁿ⁻¹ + ... + (-1)ⁿ|A|\n展开右边：(λ-λ₁)...(λ-λₙ) = λⁿ - (λ₁+...+λₙ)λⁿ⁻¹ + ... + (-1)ⁿλ₁...λₙ\n比较 λⁿ⁻¹ 的系数：tr(A) = λ₁+...+λₙ\n比较常数项：|A| = λ₁...λₙ"
      },
      {
        question: "求矩阵 A = | 3  1 | 的特征值和特征向量。\n             | 1  3 |",
        answer: "特征方程 |λE - A| = 0：\n| λ-3   -1  | = (λ-3)² - 1 = λ² - 6λ + 8 = (λ-2)(λ-4) = 0\n| -1   λ-3  |\n特征值：λ₁ = 2，λ₂ = 4\n\n对 λ₁ = 2：\n解 (2E-A)x = 0：\n| -1  -1 | |x₁| = |0|  ⟹  x₁ + x₂ = 0  ⟹  x₁ = -x₂\n| -1  -1 | |x₂|   |0|\n特征向量：ξ₁ = (1, -1)ᵀ，全部特征向量为 k₁(1,-1)ᵀ（k₁ ≠ 0）\n\n对 λ₂ = 4：\n解 (4E-A)x = 0：\n| 1  -1 | |x₁| = |0|  ⟹  x₁ - x₂ = 0  ⟹  x₁ = x₂\n| -1  1 | |x₂|   |0|\n特征向量：ξ₂ = (1, 1)ᵀ，全部特征向量为 k₂(1,1)ᵀ（k₂ ≠ 0）"
      }
    ]
  }
};

// 通用资源链接模板
const RESOURCE_TEMPLATES = {
  "同济上": { name: "📖 同济《高等数学》第七版（上册）", url: null },
  "同济下": { name: "📖 同济《高等数学》第七版（下册）", url: null },
  "同济线代": { name: "📖 同济《线性代数》第六版", url: null },
  "宋浩高数": { name: "📺 宋浩老师《高等数学》B站全集", url: "https://space.bilibili.com/66607740" },
  "宋浩线代": { name: "📺 宋浩老师《线性代数》B站全集", url: "https://space.bilibili.com/66607740" },
  "3B1B": { name: "📺 3Blue1Brown《微积分的本质》", url: "https://www.bilibili.com/video/BV1aW411Q7x1" },
  "张宇": { name: "📺 张宇考研数学基础班", url: "https://space.bilibili.com/52118504" }
};

// 获取某天的习题和链接数据
function getExerciseData(phaseId, dayIdx) {
  const key = `${phaseId}-${dayIdx + 1}`;
  return EXERCISES_DB[key] || null;
}

// 生成通用提示（当天没有详细习题时）
function getGenericExerciseHint(phaseId, dayIdx) {
  const phase = STUDY_PLAN.phases[phaseId];
  const task = phase.dailyTasks[dayIdx];
  const genericLinks = [];

  // 根据阶段添加通用链接
  if (phaseId <= 3) {
    genericLinks.push(RESOURCE_TEMPLATES["宋浩高数"]);
    genericLinks.push(RESOURCE_TEMPLATES["同济上"]);
  } else if (phaseId === 4) {
    genericLinks.push(RESOURCE_TEMPLATES["宋浩高数"]);
    genericLinks.push(RESOURCE_TEMPLATES["同济下"]);
  } else {
    genericLinks.push(RESOURCE_TEMPLATES["宋浩线代"]);
    genericLinks.push(RESOURCE_TEMPLATES["同济线代"]);
  }

  // 尝试从 resources 字段解析教材章节
  const resources = task.resources || "";
  let chapterHint = "";
  if (resources.includes("同济")) {
    chapterHint = `请完成 ${resources} 的课后习题。`;
  } else if (resources.includes("课后习题")) {
    chapterHint = `请完成当天的课后习题。`;
  } else {
    chapterHint = `请结合教材和笔记，完成当天学习内容的配套练习题。建议优先完成同济教材对应章节的课后习题。`;
  }

  return {
    links: genericLinks,
    exercises: [],
    hint: chapterHint
  };
}
