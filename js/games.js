// ============================================================
// Games Module — 智力游戏扩展 (24点 / 速算 / 记忆翻牌)
// 数独逻辑见 app.js
// ============================================================
const Games = (() => {
  let initialized = false;

  // ==========================================================
  // GAME TAB SWITCHING (数独 / 24点 / 速算挑战 / 记忆翻牌)
  // ==========================================================
  function setupGameTabs() {
    document.querySelectorAll('.game-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const game = tab.dataset.game;
        document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Hide all game panels
        const sudokuContainer = document.getElementById('sudoku-container');
        if (sudokuContainer) sudokuContainer.style.display = 'none';
        document.querySelectorAll('.game-panel').forEach(p => { p.style.display = 'none'; });

        if (game === 'sudoku') {
          if (sudokuContainer) sudokuContainer.style.display = '';
          // Restore game board if it was destroyed (e.g. by level select)
          if (typeof SudokuGame !== 'undefined') {
            const board = document.getElementById('sudoku-board');
            if (board) {
              SudokuGame.render();
              SudokuGame.renderNumpad();
            } else {
              // Board was destroyed — fully restore game UI
              SudokuGame.showFreePlay();
            }
          }
        } else {
          const panel = document.getElementById('panel-' + game);
          if (panel) panel.style.display = 'block';
          if (game === 'twentyfour') init24Point();
          if (game === 'speedmath') initSpeedMath();
          if (game === 'memory') initMemory();
        }
      });
    });
  }

  // ==========================================================
  // 24-POINT GAME
  // ==========================================================
  let tfNumbers = [];
  let tfUsed = [];
  let tfExpressionParts = [];
  let tfInitialized = false;

  function init24Point() {
    if (tfInitialized) return;
    tfInitialized = true;
    generate24Numbers();
    render24Cards();
    setup24Controls();
  }

  function generate24Numbers() {
    let attempts = 0;
    do {
      tfNumbers = [];
      for (let i = 0; i < 4; i++) {
        tfNumbers.push(Math.floor(Math.random() * 10) + 1);
      }
      attempts++;
    } while (!solve24Exists(tfNumbers) && attempts < 1000);

    if (!solve24Exists(tfNumbers)) {
      const knownSets = [
        [1, 2, 3, 4], [6, 6, 6, 6], [2, 4, 8, 10],
        [2, 2, 4, 8], [3, 3, 8, 8], [4, 4, 6, 8],
        [1, 3, 4, 6], [3, 3, 7, 7],
      ];
      tfNumbers = knownSets[Math.floor(Math.random() * knownSets.length)];
    }

    tfUsed = [false, false, false, false];
    tfExpressionParts = [];
    update24Display();
  }

  function render24Cards() {
    const container = document.getElementById('tf-cards');
    if (!container) return;
    let html = '';
    for (let i = 0; i < 4; i++) {
      html += '<div class="tf-card" data-idx="' + i + '" id="tf-card-' + i + '">' + tfNumbers[i] + '</div>';
    }
    container.innerHTML = html;

    container.querySelectorAll('.tf-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.idx);
        if (tfUsed[idx]) return;
        tfUsed[idx] = true;
        card.classList.add('used');
        tfExpressionParts.push(String(tfNumbers[idx]));
        update24Display();
      });
    });
  }

  function setup24Controls() {
    document.querySelectorAll('.tf-op-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tfExpressionParts.push(btn.dataset.op);
        update24Display();
      });
    });

    const submitBtn = document.getElementById('tf-submit');
    const clearBtn = document.getElementById('tf-clear');
    const newBtn = document.getElementById('tf-new');
    const hintBtn = document.getElementById('tf-hint');
    if (submitBtn) submitBtn.addEventListener('click', evaluate24);
    if (clearBtn) clearBtn.addEventListener('click', reset24);
    if (newBtn) newBtn.addEventListener('click', new24Game);
    if (hintBtn) hintBtn.addEventListener('click', show24Hint);
  }

  function update24Display() {
    const exprEl = document.getElementById('tf-expression');
    if (!exprEl) return;
    exprEl.textContent = tfExpressionParts.join(' ') || '点击数字和运算符构建表达式';
    if (tfExpressionParts.length === 0) {
      exprEl.style.color = 'var(--text-muted)';
      exprEl.style.fontSize = '14px';
    } else {
      exprEl.style.color = 'var(--text-title)';
      exprEl.style.fontSize = '22px';
    }
    const msgEl = document.getElementById('tf-message');
    if (msgEl) { msgEl.textContent = ''; msgEl.className = 'tf-message'; }
  }

  function evaluate24() {
    const msgEl = document.getElementById('tf-message');
    if (!msgEl) return;

    const usedCount = tfUsed.filter(u => u).length;
    if (usedCount < 4) {
      msgEl.textContent = '请先点击所有 4 张数字卡片';
      msgEl.className = 'tf-message error';
      return;
    }

    const exprStr = tfExpressionParts.join('');
    try {
      if (!/^[\d+\-*/().\s]+$/.test(exprStr)) {
        msgEl.textContent = '表达式格式不正确';
        msgEl.className = 'tf-message error';
        return;
      }

      const numsInExpr = exprStr.match(/\d+/g);
      if (!numsInExpr || numsInExpr.length !== 4) {
        msgEl.textContent = '必须使用全部 4 个数字';
        msgEl.className = 'tf-message error';
        return;
      }

      const exprNums = numsInExpr.map(Number).sort((a, b) => a - b);
      const origNums = [...tfNumbers].sort((a, b) => a - b);
      if (JSON.stringify(exprNums) !== JSON.stringify(origNums)) {
        msgEl.textContent = '必须使用给出的 4 个数字（不能多也不能少）';
        msgEl.className = 'tf-message error';
        return;
      }

      // eslint-disable-next-line no-eval
      const result = eval(exprStr);
      if (Math.abs(result - 24) < 0.0001) {
        msgEl.textContent = '🎉 正确！' + exprStr + ' = 24';
        msgEl.className = 'tf-message success';
        if (typeof AudioSystem !== 'undefined') AudioSystem.playSuccess();
      } else {
        msgEl.textContent = '结果是 ' + result + '，不是 24，再试试！';
        msgEl.className = 'tf-message error';
      }
    } catch (e) {
      msgEl.textContent = '表达式有语法错误，请检查';
      msgEl.className = 'tf-message error';
    }
  }

  function reset24() {
    tfUsed = [false, false, false, false];
    tfExpressionParts = [];
    document.querySelectorAll('.tf-card').forEach(c => c.classList.remove('used'));
    update24Display();
  }

  function new24Game() {
    generate24Numbers();
    render24Cards();
    reset24();
  }

  function show24Hint() {
    const solution = find24Solution(tfNumbers);
    const msgEl = document.getElementById('tf-message');
    if (!msgEl) return;
    if (solution) {
      msgEl.textContent = '💡 一种解法：' + solution;
      msgEl.className = 'tf-message hint';
    } else {
      msgEl.textContent = '这组数字无解（不太可能发生）';
      msgEl.className = 'tf-message error';
    }
  }

  // ---------- 24-Point Solver ----------
  function solve24Exists(nums) { return find24Solution(nums) !== null; }

  function find24Solution(nums) {
    const ops = ['+', '-', '*', '/'];
    const perms = permute(nums);
    for (const perm of perms) {
      const [a, b, c, d] = perm;
      for (const op1 of ops) {
        for (const op2 of ops) {
          for (const op3 of ops) {
            const patterns = [
              { expr: '((' + a + op1 + b + ')' + op2 + c + ')' + op3 + d, desc: '((' + a + op1 + b + ')' + op2 + c + ')' + op3 + d },
              { expr: '(' + a + op1 + '(' + b + op2 + c + '))' + op3 + d, desc: '(' + a + op1 + '(' + b + op2 + c + '))' + op3 + d },
              { expr: '(' + a + op1 + b + ')' + op2 + '(' + c + op3 + d + ')', desc: '(' + a + op1 + b + ')' + op2 + '(' + c + op3 + d + ')' },
              { expr: a + op1 + '((' + b + op2 + c + ')' + op3 + d + ')', desc: a + op1 + '((' + b + op2 + c + ')' + op3 + d + ')' },
              { expr: a + op1 + '(' + b + op2 + '(' + c + op3 + d + '))', desc: a + op1 + '(' + b + op2 + '(' + c + op3 + d + '))' },
            ];
            for (const p of patterns) {
              try {
                // eslint-disable-next-line no-eval
                const val = eval(p.expr);
                if (Math.abs(val - 24) < 0.0001) {
                  return p.desc.replace(/\*/g, '×').replace(/\//g, '÷');
                }
              } catch (e) { /* skip */ }
            }
          }
        }
      }
    }
    return null;
  }

  // ==========================================================
  // SPEED MATH
  // ==========================================================
  let smDifficulty = 'easy';
  let smScore = 0;
  let smCorrect = 0;
  let smTotal = 0;
  let smTimeLeft = 60;
  let smTimer = null;
  let smCurrentAnswer = 0;
  let smRunning = false;
  let smSubmitting = false;
  let smInitialized = false;

  function initSpeedMath() {
    if (smInitialized) return;
    smInitialized = true;

    document.querySelectorAll('.sm-diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sm-diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        smDifficulty = btn.dataset.diff;
      });
    });

    const startBtn = document.getElementById('sm-start');
    const submitBtn = document.getElementById('sm-submit');
    const inputEl = document.getElementById('sm-input');
    if (startBtn) startBtn.addEventListener('click', startSpeedMath);
    if (submitBtn) submitBtn.addEventListener('click', submitSpeedMath);
    if (inputEl) inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitSpeedMath(); });
  }

  function startSpeedMath() {
    const timeByDiff = { easy: 90, medium: 60, hard: 45 };
    smTimeLeft = timeByDiff[smDifficulty] || 60;
    smScore = 0; smCorrect = 0; smTotal = 0;
    smRunning = true; smSubmitting = false;

    const setupEl = document.getElementById('sm-setup');
    const gameEl = document.getElementById('sm-game');
    const resultEl = document.getElementById('sm-result');
    if (setupEl) setupEl.style.display = 'none';
    if (gameEl) gameEl.style.display = 'block';
    if (resultEl) resultEl.style.display = 'none';

    const feedbackEl = document.getElementById('sm-feedback');
    if (feedbackEl) { feedbackEl.textContent = ''; feedbackEl.className = 'sm-feedback'; }

    updateSmDisplay();
    generateSmQuestion();
    const inputEl = document.getElementById('sm-input');
    if (inputEl) inputEl.focus();

    smTimer = setInterval(() => {
      smTimeLeft--;
      updateSmDisplay();
      if (smTimeLeft <= 0) endSpeedMath();
    }, 1000);
  }

  function endSpeedMath() {
    clearInterval(smTimer);
    smRunning = false;
    const gameEl = document.getElementById('sm-game');
    const resultDiv = document.getElementById('sm-result');
    if (gameEl) gameEl.style.display = 'none';
    if (!resultDiv) return;
    resultDiv.style.display = 'block';

    let grade = '', gradeColor = '';
    const accuracy = smTotal > 0 ? Math.round((smCorrect / smTotal) * 100) : 0;
    if (accuracy >= 90 && smScore >= 200) { grade = 'S'; gradeColor = '#FF9F43'; }
    else if (accuracy >= 80 && smScore >= 150) { grade = 'A'; gradeColor = '#36D399'; }
    else if (accuracy >= 70) { grade = 'B'; gradeColor = '#165DFF'; }
    else if (accuracy >= 60) { grade = 'C'; gradeColor = '#86909C'; }
    else { grade = 'D'; gradeColor = '#F87272'; }

    resultDiv.innerHTML = `
      <h3>挑战结束！</h3>
      <div style="font-size:64px;font-weight:800;color:${gradeColor};line-height:1;">${grade}</div>
      <div class="sm-result-stats">
        <div class="sm-result-stat"><div class="val">${smScore}</div><div class="lbl">总分</div></div>
        <div class="sm-result-stat"><div class="val">${smCorrect}/${smTotal}</div><div class="lbl">正确/总题数</div></div>
        <div class="sm-result-stat"><div class="val">${accuracy}%</div><div class="lbl">正确率</div></div>
      </div>
      <button class="btn btn-primary" id="sm-retry">再来一局</button>
    `;

    const retryBtn = document.getElementById('sm-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        if (resultDiv) resultDiv.style.display = 'none';
        const setupEl = document.getElementById('sm-setup');
        if (setupEl) setupEl.style.display = 'flex';
      });
    }
  }

  function generateSmQuestion() {
    if (!smRunning) return;
    let a, b, op, question, answer;
    const diff = smDifficulty;

    switch (diff) {
      case 'easy':
        op = ['+', '-', '×'][Math.floor(Math.random() * 3)];
        if (op === '+') { a = randInt(10, 50); b = randInt(10, 50); answer = a + b; question = a + ' + ' + b; }
        else if (op === '-') { a = randInt(20, 99); b = randInt(1, a - 1); answer = a - b; question = a + ' − ' + b; }
        else { a = randInt(2, 12); b = randInt(2, 9); answer = a * b; question = a + ' × ' + b; }
        break;
      case 'medium':
        op = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
        if (op === '+') { a = randInt(20, 200); b = randInt(20, 200); answer = a + b; question = a + ' + ' + b; }
        else if (op === '-') { a = randInt(50, 500); b = randInt(10, a - 10); answer = a - b; question = a + ' − ' + b; }
        else if (op === '×') { a = randInt(3, 25); b = randInt(3, 20); answer = a * b; question = a + ' × ' + b; }
        else { b = randInt(2, 12); answer = randInt(1, 30); a = b * answer; question = a + ' ÷ ' + b; }
        break;
      case 'hard':
        const hardType = randInt(0, 4);
        if (hardType === 0) { a = randInt(11, 99); b = randInt(2, 15); answer = a * b; question = a + ' × ' + b; }
        else if (hardType === 1) { a = randInt(2, 25); answer = a * a; question = a + '²'; }
        else if (hardType === 2) { b = randInt(3, 15); answer = randInt(5, 40); a = b * answer; question = a + ' ÷ ' + b; }
        else if (hardType === 3) { a = randInt(100, 1000); b = randInt(10, Math.floor(a / 2)); answer = a - b; question = a + ' − ' + b; }
        else { a = randInt(50, 500); b = randInt(50, 500); answer = a + b; question = a + ' + ' + b; }
        break;
    }

    smCurrentAnswer = answer;
    smSubmitting = false;
    const questionEl = document.getElementById('sm-question');
    const inputEl = document.getElementById('sm-input');
    const feedbackEl = document.getElementById('sm-feedback');
    if (questionEl) questionEl.textContent = question + ' = ?';
    if (inputEl) inputEl.value = '';
    if (feedbackEl) { feedbackEl.textContent = ''; feedbackEl.className = 'sm-feedback'; }
    if (inputEl) inputEl.focus();
  }

  function submitSpeedMath() {
    if (!smRunning || smSubmitting) return;
    smSubmitting = true;
    const inputEl = document.getElementById('sm-input');
    const feedbackEl = document.getElementById('sm-feedback');
    if (!inputEl || !feedbackEl) return;

    const userAnswer = parseInt(inputEl.value);
    smTotal++;

    if (isNaN(userAnswer)) {
      feedbackEl.textContent = '请输入数字答案';
      feedbackEl.className = 'sm-feedback wrong';
      smSubmitting = false;
      return;
    }

    if (userAnswer === smCurrentAnswer) {
      smCorrect++;
      const points = { easy: 10, medium: 20, hard: 30 }[smDifficulty] || 10;
      smScore += points;
      feedbackEl.textContent = '✅ 正确！+' + points + '分';
      feedbackEl.className = 'sm-feedback correct';
      if (typeof AudioSystem !== 'undefined') AudioSystem.playSuccess();
    } else {
      feedbackEl.textContent = '❌ 错误！答案是 ' + smCurrentAnswer;
      feedbackEl.className = 'sm-feedback wrong';
      if (typeof AudioSystem !== 'undefined') AudioSystem.playWarning();
    }

    updateSmDisplay();
    setTimeout(generateSmQuestion, 600);
  }

  function updateSmDisplay() {
    const timerEl = document.getElementById('sm-timer');
    if (timerEl) {
      timerEl.textContent = smTimeLeft;
      timerEl.className = 'sm-timer';
      if (smTimeLeft <= 10) timerEl.classList.add('danger');
      else if (smTimeLeft <= 20) timerEl.classList.add('warning');
    }
    const scoreEl = document.getElementById('sm-score');
    const correctEl = document.getElementById('sm-correct');
    const totalEl = document.getElementById('sm-total');
    if (scoreEl) scoreEl.textContent = smScore;
    if (correctEl) correctEl.textContent = smCorrect;
    if (totalEl) totalEl.textContent = smTotal;
  }

  // ==========================================================
  // MEMORY MATCH
  // ==========================================================
  let memCards = [];
  let memFlipped = [];
  let memMatched = [];
  let memMoves = 0;
  let memTimer = null;
  let memSeconds = 0;
  let memLocked = false;
  let memInitialized = false;

  const FORMULA_PAIRS = [
    { a: '(a+b)²', b: 'a²+2ab+b²' },
    { a: '(a−b)²', b: 'a²−2ab+b²' },
    { a: 'a²−b²', b: '(a+b)(a−b)' },
    { a: 'sin²θ+cos²θ', b: '1' },
    { a: '∫xⁿ dx', b: 'xⁿ⁺¹/(n+1)+C' },
    { a: 'd/dx(sin x)', b: 'cos x' },
    { a: 'd/dx(eˣ)', b: 'eˣ' },
    { a: 'e^(iπ)+1', b: '0' },
  ];

  function initMemory() {
    if (memInitialized) return;
    memInitialized = true;
    setupMemoryGame();
    renderMemoryCards();
  }

  function setupMemoryGame() {
    memMatched = [];
    memFlipped = [];
    memMoves = 0;
    memSeconds = 0;
    memLocked = false;
    clearInterval(memTimer);

    memCards = [];
    FORMULA_PAIRS.forEach((pair, idx) => {
      memCards.push({ id: idx, text: pair.a, pairId: idx, type: 'a' });
      memCards.push({ id: idx, text: pair.b, pairId: idx, type: 'b' });
    });
    shuffleArray(memCards);

    const movesEl = document.getElementById('mem-moves');
    const timeEl = document.getElementById('mem-time');
    const pairsEl = document.getElementById('mem-pairs');
    const completeEl = document.getElementById('mem-complete');
    if (movesEl) movesEl.textContent = '0';
    if (timeEl) timeEl.textContent = '00:00';
    if (pairsEl) pairsEl.textContent = '0';
    if (completeEl) completeEl.style.display = 'none';
  }

  function renderMemoryCards() {
    const grid = document.getElementById('mem-grid');
    if (!grid) return;
    grid.innerHTML = '';

    memCards.forEach((card, idx) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'mem-card';
      cardEl.dataset.index = idx;
      cardEl.innerHTML = `
        <div class="mem-card-inner">
          <div class="mem-card-front">?</div>
          <div class="mem-card-back">${card.text}</div>
        </div>
      `;
      cardEl.addEventListener('click', () => flipMemoryCard(cardEl, idx));
      grid.appendChild(cardEl);
    });
  }

  function flipMemoryCard(cardEl, idx) {
    if (memLocked || memFlipped.includes(idx) || memMatched.includes(idx) || memFlipped.length >= 2) return;

    if (memFlipped.length === 0 && memMatched.length === 0 && memMoves === 0) {
      memSeconds = 0;
      clearInterval(memTimer);
      memTimer = setInterval(() => {
        memSeconds++;
        const timeEl = document.getElementById('mem-time');
        if (timeEl) {
          const m = String(Math.floor(memSeconds / 60)).padStart(2, '0');
          const s = String(memSeconds % 60).padStart(2, '0');
          timeEl.textContent = m + ':' + s;
        }
      }, 1000);
    }

    cardEl.classList.add('flipped');
    memFlipped.push(idx);

    if (memFlipped.length === 2) {
      memMoves++;
      const movesEl = document.getElementById('mem-moves');
      if (movesEl) movesEl.textContent = memMoves;
      checkMemoryMatch();
    }
  }

  function checkMemoryMatch() {
    const [idx1, idx2] = memFlipped;
    const card1 = memCards[idx1];
    const card2 = memCards[idx2];

    if (card1.pairId === card2.pairId && card1.type !== card2.type) {
      memMatched.push(idx1, idx2);
      setTimeout(() => {
        const el1 = document.querySelector(`.mem-card[data-index="${idx1}"]`);
        const el2 = document.querySelector(`.mem-card[data-index="${idx2}"]`);
        if (el1) el1.classList.add('matched');
        if (el2) el2.classList.add('matched');
      }, 400);

      const pairsEl = document.getElementById('mem-pairs');
      if (pairsEl) pairsEl.textContent = Math.floor(memMatched.length / 2);
      memFlipped = [];
      if (typeof AudioSystem !== 'undefined') AudioSystem.playSuccess();

      if (memMatched.length === memCards.length) {
        clearInterval(memTimer);
        setTimeout(() => {
          const completeEl = document.getElementById('mem-complete');
          if (completeEl) {
            completeEl.style.display = 'block';
            const m = String(Math.floor(memSeconds / 60)).padStart(2, '0');
            const s = String(memSeconds % 60).padStart(2, '0');
            completeEl.innerHTML = `<h3>🎉 全部配对成功！</h3><p>用时 ${m}:${s}，共 ${memMoves} 步</p>`;
          }
        }, 600);
      }
    } else {
      memLocked = true;
      setTimeout(() => {
        const el1 = document.querySelector(`.mem-card[data-index="${idx1}"]`);
        const el2 = document.querySelector(`.mem-card[data-index="${idx2}"]`);
        if (el1) el1.classList.remove('flipped');
        if (el2) el2.classList.remove('flipped');
        memFlipped = [];
        memLocked = false;
      }, 800);
    }
  }

  // ---------- Restart button listener ----------
  const memRestartBtn = document.getElementById('mem-restart');
  if (memRestartBtn) {
    memRestartBtn.addEventListener('click', () => {
      clearInterval(memTimer);
      memSeconds = 0;
      const timeEl = document.getElementById('mem-time');
      if (timeEl) timeEl.textContent = '00:00';
      setupMemoryGame();
      renderMemoryCards();
    });
  }

  // ==========================================================
  // UTILITY
  // ==========================================================
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function permute(nums) {
    if (nums.length <= 1) return [nums];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      const rest = permute([...nums.slice(0, i), ...nums.slice(i + 1)]);
      for (const r of rest) result.push([nums[i], ...r]);
    }
    return result;
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // ==========================================================
  // INIT
  // ==========================================================
  function init() {
    if (initialized) return;
    initialized = true;
    setupGameTabs();
  }

  return { init };
})();
