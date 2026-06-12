// ============================================================
// Games Module — 智力游戏
// ============================================================
const Games = (() => {
  let initialized = false;

  // ==========================================================
  // GLOBAL GAME TAB SWITCHING
  // ==========================================================
  function setupGameTabs() {
    document.querySelectorAll('.game-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const game = tab.dataset.game;
        document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
        const panel = document.getElementById('game-' + game);
        if (panel) panel.classList.add('active');
        if (game === 'puzzle') initPuzzleActive();
        if (game === 'memory') initMemory();
      });
    });
  }

  // ==========================================================
  // SUBTAB SWITCHING (within Puzzle tab)
  // ==========================================================
  function setupSubTabs() {
    document.querySelectorAll('.game-subtab').forEach(tab => {
      tab.addEventListener('click', () => {
        const sub = tab.dataset.subgame;
        document.querySelectorAll('.game-subtab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.game-subpanel').forEach(p => p.classList.remove('active'));
        const panel = document.getElementById(sub + '-panel');
        if (panel) panel.classList.add('active');
        if (sub === 'sudoku') initSudoku();
        if (sub === 'twentyfour') init24Point();
      });
    });
  }

  function initPuzzleActive() {
    const activeSub = document.querySelector('.game-subtab.active');
    if (activeSub && activeSub.dataset.subgame === 'sudoku') initSudoku();
    else if (activeSub && activeSub.dataset.subgame === 'twentyfour') init24Point();
    else initSudoku();
  }

  // ==========================================================
  // SUDOKU
  // ==========================================================
  let sudokuSolution = [];
  let sudokuPuzzle = [];
  let sudokuPlayer = [];
  let sudokuSelected = null;
  let sudokuDifficulty = 'medium';

  function initSudoku() {
    const grid = document.getElementById('sudoku-grid');
    if (grid && grid.children.length > 0) return; // Already rendered, skip
    generateSudoku();
    renderSudoku();
    setupSudokuControls();
  }

  function generateSudoku() {
    // Step 1: Generate a complete valid board
    sudokuSolution = generateCompleteBoard();
    // Step 2: Create puzzle by removing cells
    const removeCount = { easy: 38, medium: 48, hard: 56 }[sudokuDifficulty] || 48;
    sudokuPuzzle = sudokuSolution.map(row => [...row]);
    sudokuPlayer = sudokuSolution.map(row => [...row]);

    const allPositions = [];
    for (let i = 0; i < 81; i++) allPositions.push(i);
    shuffleArray(allPositions);

    let removed = 0;
    for (const pos of allPositions) {
      if (removed >= removeCount) break;
      const r = Math.floor(pos / 9);
      const c = pos % 9;
      sudokuPuzzle[r][c] = 0;
      sudokuPlayer[r][c] = 0;
      removed++;
    }
  }

  function generateCompleteBoard() {
    const board = Array.from({ length: 9 }, () => Array(9).fill(0));
    // Fill diagonal 3x3 boxes first (independent of each other)
    for (let box = 0; box < 3; box++) {
      fillBox(board, box * 3, box * 3);
    }
    // Fill the rest with backtracking
    solveBoard(board);
    return board;
  }

  function fillBox(board, startRow, startCol) {
    const nums = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let idx = 0;
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        board[r][c] = nums[idx++];
      }
    }
  }

  function solveBoard(board) {
    const empty = findEmpty(board);
    if (!empty) return true;
    const [row, col] = empty;
    const nums = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    for (const num of nums) {
      if (isValidPlacement(board, row, col, num)) {
        board[row][col] = num;
        if (solveBoard(board)) return true;
        board[row][col] = 0;
      }
    }
    return false;
  }

  function findEmpty(board) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === 0) return [r, c];
      }
    }
    return null;
  }

  function isValidPlacement(board, row, col, num) {
    // Check row
    for (let c = 0; c < 9; c++) {
      if (board[row][c] === num) return false;
    }
    // Check col
    for (let r = 0; r < 9; r++) {
      if (board[r][col] === num) return false;
    }
    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        if (board[r][c] === num) return false;
      }
    }
    return true;
  }

  function renderSudoku() {
    const grid = document.getElementById('sudoku-grid');
    grid.innerHTML = '';

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const cell = document.createElement('div');
        cell.className = 'sudoku-cell';
        cell.dataset.row = r;
        cell.dataset.col = c;

        if (c % 3 === 2 && c < 8) cell.classList.add('box-right');
        if (r % 3 === 2 && r < 8) cell.classList.add('box-bottom');

        if (sudokuPuzzle[r][c] !== 0) {
          cell.textContent = sudokuPuzzle[r][c];
          cell.classList.add('given');
        } else if (sudokuPlayer[r][c] !== 0) {
          cell.textContent = sudokuPlayer[r][c];
        }

        cell.addEventListener('click', () => selectSudokuCell(cell, r, c));
        grid.appendChild(cell);
      }
    }

    renderSudokuNumpad();
    updateSudokuHighlights();
    document.getElementById('sudoku-status').textContent = '';
    document.getElementById('sudoku-status').className = 'sudoku-status';
    sudokuSelected = null;
  }

  function renderSudokuNumpad() {
    const pad = document.getElementById('sudoku-numpad');
    pad.innerHTML = '';
    for (let n = 1; n <= 9; n++) {
      const btn = document.createElement('button');
      btn.className = 'sudoku-num-btn';
      btn.textContent = n;
      btn.addEventListener('click', () => placeSudokuNumber(n));
      pad.appendChild(btn);
    }
    const eraseBtn = document.createElement('button');
    eraseBtn.className = 'sudoku-num-btn erase';
    eraseBtn.textContent = '擦除';
    eraseBtn.addEventListener('click', () => placeSudokuNumber(0));
    pad.appendChild(eraseBtn);
  }

  function selectSudokuCell(cell, r, c) {
    if (sudokuPuzzle[r][c] !== 0) return; // Given cells can't be selected

    document.querySelectorAll('.sudoku-cell').forEach(el => el.classList.remove('selected'));
    cell.classList.add('selected');
    sudokuSelected = { row: r, col: c, el: cell };
    updateSudokuHighlights();
  }

  function placeSudokuNumber(num) {
    if (!sudokuSelected) return;
    const { row, col, el } = sudokuSelected;
    if (sudokuPuzzle[row][col] !== 0) return; // Given cell

    sudokuPlayer[row][col] = num;
    if (num === 0) {
      el.textContent = '';
      el.classList.remove('error-cell');
    } else {
      el.textContent = num;
      // Check against solution
      if (num !== sudokuSolution[row][col]) {
        el.classList.add('error-cell');
      } else {
        el.classList.remove('error-cell');
      }
    }
    updateSudokuHighlights();
    checkSudokuComplete();
  }

  function updateSudokuHighlights() {
    const allCells = document.querySelectorAll('.sudoku-cell');
    allCells.forEach(cell => {
      cell.classList.remove('same-number');
    });

    if (sudokuSelected) {
      const selRow = sudokuSelected.row;
      const selCol = sudokuSelected.col;
      const selVal = sudokuPlayer[selRow][selCol];
      if (selVal !== 0) {
        allCells.forEach(cell => {
          const r = parseInt(cell.dataset.row);
          const c = parseInt(cell.dataset.col);
          if (r === selRow && c === selCol) return;
          if (sudokuPlayer[r][c] === selVal || sudokuPuzzle[r][c] === selVal) {
            cell.classList.add('same-number');
          }
        });
      }
    }
  }

  function checkSudokuComplete() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (sudokuPlayer[r][c] !== sudokuSolution[r][c]) {
          return; // Not complete or has errors
        }
      }
    }
    const status = document.getElementById('sudoku-status');
    status.textContent = '🎉 恭喜完成！';
    status.className = 'sudoku-status success';
    if (typeof AudioSystem !== 'undefined') AudioSystem.playSuccess();
  }

  function setupSudokuControls() {
    document.getElementById('sudoku-difficulty').addEventListener('change', (e) => {
      sudokuDifficulty = e.target.value;
      generateSudoku();
      renderSudoku();
    });

    document.getElementById('sudoku-new').addEventListener('click', () => {
      generateSudoku();
      renderSudoku();
    });

    document.getElementById('sudoku-check').addEventListener('click', () => {
      let errors = 0;
      const allCells = document.querySelectorAll('.sudoku-cell');
      allCells.forEach(cell => {
        const r = parseInt(cell.dataset.row);
        const c = parseInt(cell.dataset.col);
        if (sudokuPuzzle[r][c] === 0) {
          if (sudokuPlayer[r][c] !== 0 && sudokuPlayer[r][c] !== sudokuSolution[r][c]) {
            cell.classList.add('error-cell');
            errors++;
          } else if (sudokuPlayer[r][c] === sudokuSolution[r][c]) {
            cell.classList.remove('error-cell');
          }
        }
      });
      const status = document.getElementById('sudoku-status');
      if (errors > 0) {
        status.textContent = '有 ' + errors + ' 处错误，标红处需修正';
        status.className = 'sudoku-status error';
      } else {
        const emptyCount = sudokuPlayer.flat().filter(v => v === 0).length;
        if (emptyCount === 0 && checkSudokuCompleteInner()) {
          status.textContent = '🎉 全部正确！';
          status.className = 'sudoku-status success';
        } else {
          status.textContent = '目前没有错误，继续加油！';
          status.className = 'sudoku-status success';
        }
      }
    });
  }

  function checkSudokuCompleteInner() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (sudokuPlayer[r][c] !== sudokuSolution[r][c]) return false;
      }
    }
    return true;
  }

  // ==========================================================
  // 24-POINT GAME
  // ==========================================================
  let tfNumbers = [];
  let tfUsed = [];
  let tfExpressionParts = [];

  function init24Point() {
    const cards = document.getElementById('tf-cards');
    if (cards && cards.children.length > 0) return; // Already rendered
    generate24Numbers();
    render24Cards();
    setup24Controls();
  }

  function generate24Numbers() {
    // Generate 4 numbers that have a 24 solution
    let attempts = 0;
    do {
      tfNumbers = [];
      for (let i = 0; i < 4; i++) {
        tfNumbers.push(Math.floor(Math.random() * 10) + 1); // 1-10
      }
      attempts++;
    } while (!solve24Exists(tfNumbers) && attempts < 1000);

    // Fallback: use known solvable set
    if (!solve24Exists(tfNumbers)) {
      tfNumbers = [3, 8, 3, 8]; // (3+3)×(8/原)... actually let me use a reliable one
      // 6, 4, 2, 1: (6+2)×(4-1) = 24, or 6×4×(2-1)
      // 8, 6, 4, 1: multiple solutions
      const knownSets = [
        [3, 7, 3, 7],  // (3+3÷7)×7 ≈ but that's not clean...
        [1, 2, 3, 4],  // 1×2×3×4
        [4, 4, 7, 7],  // (4-4÷7)×7
        [5, 5, 5, 5],  // 5×5-5÷5... no =24
        [6, 6, 6, 6],  // 6+6+6+6
        [3, 3, 8, 8],  // 8÷(3-8÷3)
        [2, 4, 8, 10], // (10-8÷2)×4
        [2, 2, 4, 8],  // (4-2÷2)×8
      ];
      tfNumbers = knownSets[Math.floor(Math.random() * knownSets.length)];
    }

    tfUsed = [false, false, false, false];
    tfExpressionParts = [];
    update24Display();
  }

  function render24Cards() {
    const container = document.getElementById('tf-cards');
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
    // Operator buttons
    document.querySelectorAll('.tf-op-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const op = btn.dataset.op;
        tfExpressionParts.push(op);
        update24Display();
      });
    });

    document.getElementById('tf-submit').addEventListener('click', evaluate24);
    document.getElementById('tf-clear').addEventListener('click', reset24);
    document.getElementById('tf-new').addEventListener('click', new24Game);
    document.getElementById('tf-hint').addEventListener('click', show24Hint);
  }

  function update24Display() {
    const exprEl = document.getElementById('tf-expression');
    exprEl.textContent = tfExpressionParts.join(' ') || '点击数字和运算符构建表达式';
    if (tfExpressionParts.length === 0) {
      exprEl.style.color = 'var(--text-muted)';
      exprEl.style.fontSize = '14px';
    } else {
      exprEl.style.color = 'var(--text-title)';
      exprEl.style.fontSize = '22px';
    }
    document.getElementById('tf-message').textContent = '';
    document.getElementById('tf-message').className = 'tf-message';
  }

  function evaluate24() {
    const msgEl = document.getElementById('tf-message');

    // Check all 4 numbers used
    const usedCount = tfUsed.filter(u => u).length;
    if (usedCount < 4) {
      msgEl.textContent = '请先点击所有 4 张数字卡片';
      msgEl.className = 'tf-message error';
      return;
    }

    // Build expression string
    const exprStr = tfExpressionParts.join('');
    try {
      // Validate expression - only allow numbers, operators, and parens
      if (!/^[\d+\-*/().\s]+$/.test(exprStr)) {
        msgEl.textContent = '表达式格式不正确';
        msgEl.className = 'tf-message error';
        return;
      }

      // Check all 4 numbers are used
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
    if (solution) {
      msgEl.textContent = '💡 一种解法：' + solution;
      msgEl.className = 'tf-message hint';
    } else {
      msgEl.textContent = '这组数字无解（不太可能发生）';
      msgEl.className = 'tf-message error';
    }
  }

  // ---------- 24-Point Solver ----------
  function solve24Exists(nums) {
    return find24Solution(nums) !== null;
  }

  function find24Solution(nums) {
    const ops = ['+', '-', '*', '/'];
    const perms = permute(nums);

    for (const perm of perms) {
      const [a, b, c, d] = perm;
      for (const op1 of ops) {
        for (const op2 of ops) {
          for (const op3 of ops) {
            // Try 5 parenthesization patterns
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

  function setupSpeedMath() {
    // Difficulty buttons
    document.querySelectorAll('.sm-diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sm-diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        smDifficulty = btn.dataset.diff;
      });
    });

    // Start button
    document.getElementById('sm-start').addEventListener('click', startSpeedMath);

    // Submit button
    document.getElementById('sm-submit').addEventListener('click', submitSpeedMath);

    // Input enter key
    document.getElementById('sm-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitSpeedMath();
    });
  }

  function startSpeedMath() {
    const timeByDiff = { easy: 90, medium: 60, hard: 45 };
    smTimeLeft = timeByDiff[smDifficulty] || 60;
    smScore = 0;
    smCorrect = 0;
    smTotal = 0;
    smRunning = true;
    smSubmitting = false;

    document.getElementById('sm-setup').style.display = 'none';
    document.getElementById('sm-game').style.display = 'block';
    document.getElementById('sm-result').style.display = 'none';
    document.getElementById('sm-feedback').textContent = '';
    document.getElementById('sm-feedback').className = 'sm-feedback';

    updateSmDisplay();
    generateSmQuestion();
    document.getElementById('sm-input').focus();

    smTimer = setInterval(() => {
      smTimeLeft--;
      updateSmDisplay();
      if (smTimeLeft <= 0) endSpeedMath();
    }, 1000);
  }

  function endSpeedMath() {
    clearInterval(smTimer);
    smRunning = false;
    document.getElementById('sm-game').style.display = 'none';

    const resultDiv = document.getElementById('sm-result');
    resultDiv.style.display = 'block';

    let grade = '';
    let gradeColor = '';
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

    document.getElementById('sm-retry').addEventListener('click', () => {
      document.getElementById('sm-result').style.display = 'none';
      document.getElementById('sm-setup').style.display = 'flex';
    });
  }

  function generateSmQuestion() {
    if (!smRunning) return;

    let a, b, op, question, answer;
    const diff = smDifficulty;

    switch (diff) {
      case 'easy':
        // Simple arithmetic within 100
        op = ['+', '-', '×'][Math.floor(Math.random() * 3)];
        if (op === '+') {
          a = randInt(10, 50); b = randInt(10, 50);
          answer = a + b; question = a + ' + ' + b;
        } else if (op === '-') {
          a = randInt(20, 99); b = randInt(1, a - 1);
          answer = a - b; question = a + ' − ' + b;
        } else {
          a = randInt(2, 12); b = randInt(2, 9);
          answer = a * b; question = a + ' × ' + b;
        }
        break;

      case 'medium':
        // Multi-digit, includes division
        op = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
        if (op === '+') {
          a = randInt(20, 200); b = randInt(20, 200);
          answer = a + b; question = a + ' + ' + b;
        } else if (op === '-') {
          a = randInt(50, 500); b = randInt(10, a - 10);
          answer = a - b; question = a + ' − ' + b;
        } else if (op === '×') {
          a = randInt(3, 25); b = randInt(3, 20);
          answer = a * b; question = a + ' × ' + b;
        } else {
          b = randInt(2, 12); answer = randInt(1, 30);
          a = b * answer;
          question = a + ' ÷ ' + b;
        }
        break;

      case 'hard':
        // Fractions, powers, mixed operations
        const hardType = randInt(0, 4);
        if (hardType === 0) {
          // Two-digit multiplication
          a = randInt(11, 99); b = randInt(2, 15);
          answer = a * b; question = a + ' × ' + b;
        } else if (hardType === 1) {
          // Square
          a = randInt(2, 25);
          answer = a * a; question = a + '²';
        } else if (hardType === 2) {
          // Integer division with remainder → use clean division
          b = randInt(3, 15); answer = randInt(5, 40);
          a = b * answer;
          question = a + ' ÷ ' + b;
        } else if (hardType === 3) {
          // Subtraction with larger numbers
          a = randInt(100, 1000); b = randInt(10, a / 2);
          answer = a - b; question = a + ' − ' + b;
        } else {
          // Complex addition
          a = randInt(50, 500); b = randInt(50, 500);
          answer = a + b; question = a + ' + ' + b;
        }
        break;
    }

    smCurrentAnswer = answer;
    smSubmitting = false;
    document.getElementById('sm-question').textContent = question + ' = ?';
    document.getElementById('sm-input').value = '';
    document.getElementById('sm-feedback').textContent = '';
    document.getElementById('sm-feedback').className = 'sm-feedback';
    document.getElementById('sm-input').focus();
  }

  function submitSpeedMath() {
    if (!smRunning || smSubmitting) return;
    smSubmitting = true;
    const input = document.getElementById('sm-input');
    const feedback = document.getElementById('sm-feedback');
    const userAnswer = parseInt(input.value);

    smTotal++;

    if (isNaN(userAnswer)) {
      feedback.textContent = '请输入数字答案';
      feedback.className = 'sm-feedback wrong';
      return;
    }

    if (userAnswer === smCurrentAnswer) {
      smCorrect++;
      const points = { easy: 10, medium: 20, hard: 30 }[smDifficulty] || 10;
      smScore += points;
      feedback.textContent = '✅ 正确！+' + points + '分';
      feedback.className = 'sm-feedback correct';
      if (typeof AudioSystem !== 'undefined') AudioSystem.playSuccess();
    } else {
      feedback.textContent = '❌ 错误！答案是 ' + smCurrentAnswer;
      feedback.className = 'sm-feedback wrong';
      if (typeof AudioSystem !== 'undefined') AudioSystem.playWarning();
    }

    updateSmDisplay();
    setTimeout(generateSmQuestion, 600);
  }

  function updateSmDisplay() {
    const timerEl = document.getElementById('sm-timer');
    timerEl.textContent = smTimeLeft;
    timerEl.className = 'sm-timer';
    if (smTimeLeft <= 10) timerEl.classList.add('danger');
    else if (smTimeLeft <= 20) timerEl.classList.add('warning');

    document.getElementById('sm-score').textContent = smScore;
    document.getElementById('sm-correct').textContent = smCorrect;
    document.getElementById('sm-total').textContent = smTotal;
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
  let memLocked = false; // prevent clicking during animation

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
    const grid = document.getElementById('mem-grid');
    if (grid && grid.children.length > 0) return; // Already rendered
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

    // Build card pairs and shuffle
    memCards = [];
    FORMULA_PAIRS.forEach((pair, idx) => {
      memCards.push({ id: idx, text: pair.a, pairId: idx, type: 'a' });
      memCards.push({ id: idx, text: pair.b, pairId: idx, type: 'b' });
    });
    shuffleArray(memCards);

    document.getElementById('mem-moves').textContent = '0';
    document.getElementById('mem-time').textContent = '00:00';
    document.getElementById('mem-pairs').textContent = '0';
    document.getElementById('mem-complete').style.display = 'none';
  }

  function renderMemoryCards() {
    const grid = document.getElementById('mem-grid');
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
    if (memLocked) return;
    if (memFlipped.includes(idx)) return;
    if (memMatched.includes(idx)) return;
    if (memFlipped.length >= 2) return;

    // Start timer on first flip
    if (memFlipped.length === 0 && memMatched.length === 0 && memMoves === 0) {
      memSeconds = 0;
      clearInterval(memTimer);
      memTimer = setInterval(() => {
        memSeconds++;
        const m = String(Math.floor(memSeconds / 60)).padStart(2, '0');
        const s = String(memSeconds % 60).padStart(2, '0');
        document.getElementById('mem-time').textContent = m + ':' + s;
      }, 1000);
    }

    cardEl.classList.add('flipped');
    memFlipped.push(idx);

    if (memFlipped.length === 2) {
      memMoves++;
      document.getElementById('mem-moves').textContent = memMoves;
      checkMemoryMatch();
    }
  }

  function checkMemoryMatch() {
    const [idx1, idx2] = memFlipped;
    const card1 = memCards[idx1];
    const card2 = memCards[idx2];

    if (card1.pairId === card2.pairId && card1.type !== card2.type) {
      // Match!
      memMatched.push(idx1, idx2);
      const el1 = document.querySelector(`.mem-card[data-index="${idx1}"]`);
      const el2 = document.querySelector(`.mem-card[data-index="${idx2}"]`);
      setTimeout(() => {
        el1.classList.add('matched');
        el2.classList.add('matched');
      }, 400);

      document.getElementById('mem-pairs').textContent = Math.floor(memMatched.length / 2);
      memFlipped = [];

      if (typeof AudioSystem !== 'undefined') AudioSystem.playSuccess();

      // Check completion
      if (memMatched.length === memCards.length) {
        clearInterval(memTimer);
        setTimeout(() => {
          const complete = document.getElementById('mem-complete');
          complete.style.display = 'block';
          const m = String(Math.floor(memSeconds / 60)).padStart(2, '0');
          const s = String(memSeconds % 60).padStart(2, '0');
          complete.innerHTML = `
            <h3>🎉 全部配对成功！</h3>
            <p>用时 ${m}:${s}，共 ${memMoves} 步</p>
          `;
        }, 600);
      }
    } else {
      // No match — flip back
      memLocked = true;
      setTimeout(() => {
        const el1 = document.querySelector(`.mem-card[data-index="${idx1}"]`);
        const el2 = document.querySelector(`.mem-card[data-index="${idx2}"]`);
        el1.classList.remove('flipped');
        el2.classList.remove('flipped');
        memFlipped = [];
        memLocked = false;
      }, 800);
    }
  }

  // Setup restart button
  document.getElementById('mem-restart').addEventListener('click', () => {
    clearInterval(memTimer);
    memSeconds = 0;
    document.getElementById('mem-time').textContent = '00:00';
    setupMemoryGame();
    renderMemoryCards();
  });

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
      for (const r of rest) {
        result.push([nums[i], ...r]);
      }
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
    setupSubTabs();
    setupSpeedMath();

    // Initialize the active game panel
    const activeTab = document.querySelector('.game-tab.active');
    if (activeTab) {
      if (activeTab.dataset.game === 'puzzle') initPuzzleActive();
    }
  }

  return { init };
})();
