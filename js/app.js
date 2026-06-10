// App state
let appState = {
  startDate: '',
  dailyMinutes: 90,
  checkins: {},
  currentPhase: 0
};

let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let tickInterval = null;

const TOTAL_DAYS = getTotalDays();

// Init
function init() {
  loadState();
  setupNavigation();
  setupTimer();
  setupSettings();
  setupAudioToggle();
  setupHoverSounds();
  renderAll();
}

// LocalStorage
function loadState() {
  try {
    const saved = localStorage.getItem('mathStudyState');
    if (saved) {
      appState = JSON.parse(saved);
      // Auto-reset if study plan has expired (today > startDate + totalDays)
      if (appState.startDate) {
        const start = new Date(appState.startDate);
        const today = new Date();
        const dayDiff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
        if (dayDiff > TOTAL_DAYS) {
          appState.startDate = formatDate(new Date());
          saveState();
        }
      }
    } else {
      appState.startDate = formatDate(new Date());
      saveState();
    }
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function saveState() {
  localStorage.setItem('mathStudyState', JSON.stringify(appState));
}

// ---------- Audio Toggle ----------
function setupAudioToggle() {
  const existing = document.getElementById('audio-toggle-btn');
  if (existing) return;

  const audioBtn = document.createElement('button');
  audioBtn.id = 'audio-toggle-btn';
  audioBtn.className = 'audio-toggle';
  audioBtn.innerHTML = '🔇';
  audioBtn.title = 'Toggle hover sounds';
  audioBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background: rgba(0,0,0,0.7);
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.2s;
  `;

  audioBtn.addEventListener('mouseenter', () => {
    audioBtn.style.transform = 'scale(1.1)';
    audioBtn.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
  });

  audioBtn.addEventListener('mouseleave', () => {
    audioBtn.style.transform = 'scale(1)';
    audioBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  });

  let audioEnabled = localStorage.getItem('audioEnabled') !== 'false';
  updateAudioIcon(audioBtn, audioEnabled);

  audioBtn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    localStorage.setItem('audioEnabled', audioEnabled.toString());
    updateAudioIcon(audioBtn, audioEnabled);
    playHoverSound();
  });

  document.body.appendChild(audioBtn);
}

function updateAudioIcon(btn, enabled) {
  btn.innerHTML = enabled ? '🔊' : '🔇';
  btn.title = enabled ? 'Hover sounds: ON' : 'Hover sounds: OFF';
}

// ============================================================
// SUDOKU GAME ENGINE v2 - Advanced Edition
// ============================================================

const SudokuGame = {
  // ---- Core Data ----
  board: [],
  solution: [],
  initial: [],
  notes: [],
  history: [],
  difficulty: 'easy',
  selectedCell: null,
  noteMode: false,
  scanNumber: null,
  seconds: 0,
  paused: false,
  completed: false,
  errors: 0,
  hintsUsed: 0,
  storageKey: 'sudokuGameState_v2',
  levelStorageKey: 'sudokuLevelProgress_v2',

  // ---- Level System ----
  currentLevel: 1,
  maxLevel: 100,
  isLevelMode: false,

  // ---- Seeded Random for reproducible levels ----
  _seed: 1,
  _random() {
    this._seed = (this._seed * 9301 + 49297) % 233280;
    return this._seed / 233280;
  },

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this._random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // ---- Level Configuration ----
  getLevelConfig(level) {
    if (level <= 20) return { removeCount: 35 + Math.floor((level - 1) * 0.25), difficulty: 'easy' };
    if (level <= 40) return { removeCount: 40 + Math.floor((level - 21) * 0.25), difficulty: 'easy' };
    if (level <= 60) return { removeCount: 45 + Math.floor((level - 41) * 0.25), difficulty: 'medium' };
    if (level <= 80) return { removeCount: 50 + Math.floor((level - 61) * 0.25), difficulty: 'medium' };
    if (level <= 95) return { removeCount: 55 + Math.floor((level - 81) * 0.2), difficulty: 'hard' };
    return { removeCount: 58 + (level - 96), difficulty: 'hard' };
  },

  // ---- Level Progress ----
  getLevelProgress() {
    const saved = localStorage.getItem(this.levelStorageKey);
    if (!saved) {
      return {
        unlockedLevel: 1,
        completedLevels: [],
        bestTimes: {}
      };
    }
    try {
      return JSON.parse(saved);
    } catch {
      return {
        unlockedLevel: 1,
        completedLevels: [],
        bestTimes: {}
      };
    }
  },

  saveLevelProgress(progress) {
    localStorage.setItem(this.levelStorageKey, JSON.stringify(progress));
  },

  updateLevelProgress(level, time) {
    const progress = this.getLevelProgress();
    
    // Mark level as completed
    if (!progress.completedLevels.includes(level)) {
      progress.completedLevels.push(level);
    }
    
    // Update best time
    if (!progress.bestTimes[level] || time < progress.bestTimes[level]) {
      progress.bestTimes[level] = time;
    }
    
    // Unlock next level
    if (level >= progress.unlockedLevel && level < this.maxLevel) {
      progress.unlockedLevel = level + 1;
    }
    
    this.saveLevelProgress(progress);
  },

  // ---- Game State Management ----
  saveGame() {
    const state = {
      board: this.board,
      solution: this.solution,
      initial: this.initial,
      notes: this.notes.map(row => row.map(set => Array.from(set))),
      difficulty: this.difficulty,
      seconds: this.seconds,
      errors: this.errors,
      hintsUsed: this.hintsUsed,
      history: this.history,
      currentLevel: this.currentLevel,
      isLevelMode: this.isLevelMode
    };
    localStorage.setItem(this.storageKey, JSON.stringify(state));
  },

  loadSavedGame() {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return false;
    
    try {
      const state = JSON.parse(saved);
      this.board = state.board;
      this.solution = state.solution;
      this.initial = state.initial;
      this.notes = state.notes.map(row => row.map(arr => new Set(arr)));
      this.difficulty = state.difficulty;
      this.seconds = state.seconds;
      this.errors = state.errors;
      this.hintsUsed = state.hintsUsed;
      this.history = state.history;
      this.currentLevel = state.currentLevel || 1;
      this.isLevelMode = state.isLevelMode || false;
      this.completed = false;
      this.paused = false;
      this.selectedCell = null;
      this.noteMode = false;
      this.scanNumber = null;
      return true;
    } catch {
      return false;
    }
  },

  clearSavedGame() {
    localStorage.removeItem(this.storageKey);
  },

  // ---- Level Selection UI ----
  showLevelSelect() {
    const container = document.getElementById('sudoku-container');
    if (!container) return;
    const progress = this.getLevelProgress();
    const currentLevel = this.currentLevel;

    let html = `
      <div class="sudoku-level-select">
        <div class="level-select-header">
          <h3>🎯 选择关卡</h3>
          <p>共100关，难度逐步递增</p>
        </div>
        <div class="level-grid">
    `;

    for (let i = 1; i <= 100; i++) {
      const config = this.getLevelConfig(i);
      const isUnlocked = i <= progress.unlockedLevel;
      const isCompleted = progress.completedLevels.includes(i);
      const bestTime = progress.bestTimes[i];
      const isCurrent = i === currentLevel;

      let statusClass = '';
      let icon = '';
      if (isCompleted) {
        statusClass = 'completed';
        icon = '★';
      } else if (isUnlocked) {
        statusClass = 'unlocked';
        icon = i;
      } else {
        statusClass = 'locked';
        icon = '🔒';
      }

      let timeDisplay = '';
      if (bestTime) {
        const m = Math.floor(bestTime / 60);
        const s = bestTime % 60;
        timeDisplay = `<span class="level-time">${m}:${String(s).padStart(2,'0')}</span>`;
      }

      html += `
        <button class="level-btn ${statusClass} ${isCurrent ? 'current' : ''}" data-level="${i}" ${!isUnlocked ? 'disabled' : ''}>
          <span class="level-num">${icon}</span>
          <span class="level-diff">${config.difficulty === 'easy' ? '入' : config.difficulty === 'medium' ? '中' : '难'}</span>
          ${timeDisplay}
        </button>
      `;
    }

    html += `</div>
      <div class="level-select-footer">
        <button class="btn btn-secondary" id="level-btn-back" onclick="alert('按钮被点击了！'); console.log('Back button inline clicked'); SudokuGame.showFreePlay(); return false;">返回自由模式</button>
        <button class="btn btn-primary" id="level-btn-continue" onclick="alert('继续按钮被点击！'); console.log('Continue button inline clicked'); SudokuGame.startLevel(SudokuGame.currentLevel); return false;">继续第${currentLevel}关</button>
      </div>
    </div>`;

    container.innerHTML = html;

    // Bind events for level grid buttons
    container.querySelectorAll('.level-btn.unlocked, .level-btn.completed').forEach(btn => {
      btn.addEventListener('click', () => {
        const level = parseInt(btn.dataset.level);
        this.startLevel(level);
      });
    });

    // Bind footer buttons
    const backBtn = document.getElementById('level-btn-back');
    const continueBtn = document.getElementById('level-btn-continue');

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        console.log('Back button clicked');
        this.showFreePlay();
      });
    }

    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        console.log('Continue button clicked, level:', this.currentLevel);
        this.startLevel(this.currentLevel);
      });
    }
  },

  showFreePlay() {
    this.isLevelMode = false;
    this.restoreGameUI();
    // Update UI for free play mode
    const freeModeBtn = document.getElementById('sudoku-mode-free');
    const levelsModeBtn = document.getElementById('sudoku-mode-levels');
    const levelSelectBtn = document.getElementById('sudoku-level-select');
    const difficultySelector = document.getElementById('sudoku-difficulty-selector');
    const levelInfo = document.getElementById('sudoku-level-info');

    if (freeModeBtn) {
      freeModeBtn.classList.add('btn-primary');
      freeModeBtn.classList.remove('btn-secondary');
    }
    if (levelsModeBtn) {
      levelsModeBtn.classList.add('btn-secondary');
      levelsModeBtn.classList.remove('btn-primary');
    }
    if (difficultySelector) difficultySelector.style.display = 'flex';
    if (levelSelectBtn) levelSelectBtn.style.display = 'none';
    if (levelInfo) levelInfo.style.display = 'none';

    this.generate('easy');
    this.render();
    this.renderNumpad();
  },

  startLevel(level) {
    console.log('startLevel called with level:', level);
    this.currentLevel = level;
    this.isLevelMode = true;
    this.restoreGameUI();
    this.generateForLevel(level);
    this.render();
    this.renderNumpad();
    this.updateLevelInfo();
  },

  // Restore the game UI structure after level select
  restoreGameUI() {
    const container = document.getElementById('sudoku-container');
    if (!container) return;

    container.innerHTML = `
      <!-- Mode Switch -->
      <div class="sudoku-mode-switch">
        <button class="btn btn-sm btn-secondary" id="sudoku-mode-free">自由模式</button>
        <button class="btn btn-sm btn-primary" id="sudoku-mode-levels">关卡挑战</button>
      </div>

      <!-- Level Info (shown in level mode) -->
      <div class="sudoku-level-info" id="sudoku-level-info" style="display:block"></div>

      <div class="sudoku-toolbar">
        <div class="sudoku-difficulty" id="sudoku-difficulty-selector" style="display:none">
          <button class="btn btn-sm btn-secondary active" data-difficulty="easy">简单</button>
          <button class="btn btn-sm btn-secondary" data-difficulty="medium">中等</button>
          <button class="btn btn-sm btn-secondary" data-difficulty="hard">困难</button>
        </div>
        <div class="sudoku-actions">
          <button class="btn btn-sm btn-secondary" id="sudoku-level-select">选择关卡</button>
          <button class="btn btn-sm btn-secondary" id="sudoku-new">新游戏</button>
          <button class="btn btn-sm btn-secondary" id="sudoku-pause">暂停</button>
          <button class="btn btn-sm btn-secondary" id="sudoku-hint">提示</button>
          <button class="btn btn-sm btn-secondary" id="sudoku-check">检查</button>
          <button class="btn btn-sm btn-secondary" id="sudoku-undo">撤销</button>
          <button class="btn btn-sm btn-secondary" id="sudoku-auto">自动候选</button>
        </div>
      </div>

      <div class="sudoku-stats">
        <div class="sudoku-stat">
          <span class="sudoku-stat-label">用时</span>
          <span class="sudoku-stat-value" id="sudoku-timer">00:00</span>
        </div>
        <div class="sudoku-stat">
          <span class="sudoku-stat-label">错误</span>
          <span class="sudoku-stat-value" id="sudoku-errors">0</span>
        </div>
        <div class="sudoku-stat">
          <span class="sudoku-stat-label">提示</span>
          <span class="sudoku-stat-value" id="sudoku-hints-used">0</span>
        </div>
        <div class="sudoku-stat">
          <span class="sudoku-stat-label">剩余</span>
          <span class="sudoku-stat-value" id="sudoku-remaining">81</span>
        </div>
      </div>

      <div class="sudoku-board-wrap">
        <div class="sudoku-board" id="sudoku-board">
          <!-- Filled by JS -->
        </div>
        <div class="sudoku-pause-overlay" id="sudoku-pause-overlay" style="display:none">
          <div class="pause-icon">II</div>
          <div class="pause-text">游戏暂停</div>
          <button class="btn btn-primary" id="sudoku-resume">继续游戏</button>
        </div>
      </div>

      <div class="sudoku-win-modal" id="sudoku-win-modal" style="display:none">
        <div class="win-content">
          <div class="win-icon">&#127942;</div>
          <h3 class="win-title">恭喜完成！</h3>
          <div class="win-stats" id="sudoku-win-stats"></div>
          <div class="win-actions">
            <button class="btn btn-primary" id="sudoku-play-again">再玩一局</button>
            <button class="btn btn-secondary" id="sudoku-win-close">关闭</button>
          </div>
        </div>
      </div>

      <div class="sudoku-controls">
        <div class="sudoku-numpad" id="sudoku-numpad">
          <!-- Filled by JS -->
        </div>
        <div class="sudoku-actions-row">
          <button class="btn btn-sm btn-secondary" id="sudoku-note-btn">笔记模式</button>
        </div>
      </div>
    `;

    // Re-bind events
    this.bindGameEvents();
  },

  // Bind game control events
  bindGameEvents() {
    // Mode switch buttons
    const freeModeBtn = document.getElementById('sudoku-mode-free');
    const levelsModeBtn = document.getElementById('sudoku-mode-levels');
    const levelSelectBtn = document.getElementById('sudoku-level-select');

    if (freeModeBtn) {
      freeModeBtn.addEventListener('click', () => {
        freeModeBtn.classList.add('btn-primary');
        freeModeBtn.classList.remove('btn-secondary');
        levelsModeBtn.classList.add('btn-secondary');
        levelsModeBtn.classList.remove('btn-primary');
        document.getElementById('sudoku-difficulty-selector').style.display = 'flex';
        if (levelSelectBtn) levelSelectBtn.style.display = 'none';
        document.getElementById('sudoku-level-info').style.display = 'none';
        SudokuGame.showFreePlay();
      });
    }

    if (levelsModeBtn) {
      levelsModeBtn.addEventListener('click', () => {
        levelsModeBtn.classList.add('btn-primary');
        levelsModeBtn.classList.remove('btn-secondary');
        freeModeBtn.classList.add('btn-secondary');
        freeModeBtn.classList.remove('btn-primary');
        document.getElementById('sudoku-difficulty-selector').style.display = 'none';
        if (levelSelectBtn) levelSelectBtn.style.display = 'inline-flex';
        SudokuGame.showLevelSelect();
      });
    }

    if (levelSelectBtn) {
      levelSelectBtn.addEventListener('click', () => {
        SudokuGame.showLevelSelect();
      });
    }

    // Difficulty buttons
    document.querySelectorAll('.sudoku-difficulty .btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sudoku-difficulty .btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const diff = btn.dataset.difficulty;
        SudokuGame.generate(diff);
        SudokuGame.renderNumpad();
      });
    });

    // Action buttons
    const newBtn = document.getElementById('sudoku-new');
    if (newBtn) newBtn.addEventListener('click', () => {
      if (SudokuGame.isLevelMode) {
        SudokuGame.generateForLevel(SudokuGame.currentLevel);
        SudokuGame.render();
        SudokuGame.renderNumpad();
      } else {
        const activeDiff = document.querySelector('.sudoku-difficulty .btn.active');
        const diff = activeDiff ? activeDiff.dataset.difficulty : 'easy';
        SudokuGame.generate(diff);
        SudokuGame.renderNumpad();
      }
    });

    const hintBtn = document.getElementById('sudoku-hint');
    if (hintBtn) hintBtn.addEventListener('click', () => SudokuGame.giveHint());

    const checkBtn = document.getElementById('sudoku-check');
    if (checkBtn) checkBtn.addEventListener('click', () => SudokuGame.checkBoard());

    const undoBtn = document.getElementById('sudoku-undo');
    if (undoBtn) undoBtn.addEventListener('click', () => SudokuGame.undo());

    const noteBtn = document.getElementById('sudoku-note-btn');
    if (noteBtn) noteBtn.addEventListener('click', () => {
      SudokuGame.noteMode = !SudokuGame.noteMode;
      SudokuGame.render();
    });

    const pauseBtn = document.getElementById('sudoku-pause');
    if (pauseBtn) pauseBtn.addEventListener('click', () => SudokuGame.togglePause());

    const resumeBtn = document.getElementById('sudoku-resume');
    if (resumeBtn) resumeBtn.addEventListener('click', () => SudokuGame.togglePause());

    const autoBtn = document.getElementById('sudoku-auto');
    if (autoBtn) autoBtn.addEventListener('click', () => SudokuGame.autoCandidates());

    // Win modal
    const playAgainBtn = document.getElementById('sudoku-play-again');
    if (playAgainBtn) playAgainBtn.addEventListener('click', () => {
      SudokuGame.hideWinModal();
      if (SudokuGame.isLevelMode) {
        SudokuGame.generateForLevel(SudokuGame.currentLevel);
        SudokuGame.render();
        SudokuGame.renderNumpad();
      } else {
        const activeDiff = document.querySelector('.sudoku-difficulty .btn.active');
        const diff = activeDiff ? activeDiff.dataset.difficulty : 'easy';
        SudokuGame.generate(diff);
        SudokuGame.renderNumpad();
      }
    });

    const winCloseBtn = document.getElementById('sudoku-win-close');
    if (winCloseBtn) winCloseBtn.addEventListener('click', () => {
      SudokuGame.hideWinModal();
    });
  },

  generateForLevel(level) {
    const config = this.getLevelConfig(level);
    this._seed = level * 12345; // Fixed seed for reproducible levels
    this._generateBoard(config.removeCount);
    this.difficulty = config.difficulty;
    this.completed = false;
    this.errors = 0;
    this.hintsUsed = 0;
    this.history = [];
    this.notes = Array.from({length:9}, () => Array.from({length:9}, () => new Set()));
    this.selectedCell = null;
    this.noteMode = false;
    this.scanNumber = null;
    this.seconds = 0;
    this.paused = false;
    this.stopTimer();
    this.hidePauseOverlay();
    this.saveGame();
    this.startTimer();
  },

  _generateBoard(removeCount) {
    // Generate a complete valid board
    const board = Array.from({length:9}, () => Array(9).fill(0));
    this._fillBoard(board);
    this.solution = board.map(r => [...r]);

    // Remove cells
    this.board = board.map(r => [...r]);
    this.initial = Array.from({length:9}, () => Array(9).fill(true));

    const positions = [];
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        positions.push([r, c]);

    // Shuffle positions using seeded random
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(this._random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    let removed = 0;
    for (const [r, c] of positions) {
      if (removed >= removeCount) break;
      this.board[r][c] = 0;
      this.initial[r][c] = false;
      removed++;
    }
  },

  // ---- Rendering ----
  render() {
    const boardEl = document.getElementById('sudoku-board');
    if (!boardEl) return;
    if (!this.board || !this.solution) return;

    let html = '';
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const value = this.board[r][c];
        const isInitial = this.initial[r][c];
        const isSelected = this.selectedCell && this.selectedCell.row === r && this.selectedCell.col === c;
        const isError = this.errors > 0 && value !== 0 && value !== this.solution[r][c];
        const notes = this.notes[r][c];
        
        let cellClass = 'sudoku-cell';
        if (isInitial) cellClass += ' initial';
        if (isSelected) cellClass += ' selected';
        if (isError) cellClass += ' error';
        if (r % 3 === 0) cellClass += ' top-border';
        if (c % 3 === 0) cellClass += ' left-border';
        if (r === 8) cellClass += ' bottom-border';
        if (c === 8) cellClass += ' right-border';

        html += `<div class="${cellClass}" data-row="${r}" data-col="${c}">`;
        
        if (value !== 0) {
          html += `<div class="cell-value">${value}</div>`;
        } else if (notes.size > 0 && this.noteMode) {
          html += '<div class="cell-notes">';
          for (let n = 1; n <= 9; n++) {
            if (notes.has(n)) {
              html += `<span class="note-digit">${n}</span>`;
            }
          }
          html += '</div>';
        }
        
        html += '</div>';
      }
    }
    
    boardEl.innerHTML = html;
    
    // Add click handlers
    boardEl.querySelectorAll('.sudoku-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        this.selectCell(row, col);
      });
    });
    
    this.updateRemaining();
    this.updateTimerDisplay();
  },

  updateLevelInfo() {
    const levelInfo = document.getElementById('sudoku-level-info');
    if (!levelInfo) return;
    
    if (this.isLevelMode) {
      const config = this.getLevelConfig(this.currentLevel);
      levelInfo.innerHTML = `
        <div class="level-info-content">
          <span class="level-badge level-badge-${config.difficulty}">第${this.currentLevel}关</span>
          <span class="level-difficulty">${config.difficulty === 'easy' ? '入门' : config.difficulty === 'medium' ? '中等' : '困难'}</span>
          <span class="level-stats">移除数字: ${config.removeCount}</span>
        </div>
      `;
      levelInfo.style.display = 'block';
    } else {
      levelInfo.style.display = 'none';
    }
  },

  // ---- Basic Game Methods (Stubs) ----
  generate(difficulty) {
    console.log('Generate called with difficulty:', difficulty);
    // Simple implementation for testing
    this.board = Array.from({length:9}, () => Array(9).fill(0));
    this.solution = Array.from({length:9}, () => Array(9).fill(0));
    this.initial = Array.from({length:9}, () => Array(9).fill(false));
    this.completed = false;
    this.saveGame();
  },

  _fillBoard(board) {
    // Simple fill for testing
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        board[r][c] = (r + c) % 9 + 1;
      }
    }
  },

  selectCell(row, col) {
    console.log('Select cell:', row, col);
    this.selectedCell = {row, col};
    this.render();
    this.renderNumpad();
  },

  renderNumpad() {
    const numpadEl = document.getElementById('sudoku-numpad');
    if (!numpadEl) return;
    
    let html = '';
    for (let i = 1; i <= 9; i++) {
      html += `<button class="numpad-btn" data-value="${i}">${i}</button>`;
    }
    html += '<button class="numpad-btn numpad-clear" data-value="0">清除</button>';
    
    numpadEl.innerHTML = html;
    
    // Add click handlers
    numpadEl.querySelectorAll('.numpad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const value = parseInt(btn.dataset.value);
        if (this.selectedCell) {
          const {row, col} = this.selectedCell;
          if (value === 0) {
            this.board[row][col] = 0;
          } else {
            this.board[row][col] = value;
          }
          this.render();
        }
      });
    });
  },

  updateRemaining() {
    const remainingEl = document.getElementById('sudoku-remaining');
    if (!remainingEl) return;
    
    let count = 0;
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (this.board[r][c] === 0) count++;
      }
    }
    remainingEl.textContent = count;
  },

  updateTimerDisplay() {
    const timerEl = document.getElementById('sudoku-timer');
    if (!timerEl) return;
    
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;
    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  },

  startTimer() {
    console.log('Timer started');
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (!this.paused && !this.completed) {
        this.seconds++;
        this.updateTimerDisplay();
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  togglePause() {
    this.paused = !this.paused;
    const pauseOverlay = document.getElementById('sudoku-pause-overlay');
    const pauseBtn = document.getElementById('sudoku-pause');
    
    if (pauseOverlay) {
      pauseOverlay.style.display = this.paused ? 'flex' : 'none';
    }
    if (pauseBtn) {
      pauseBtn.textContent = this.paused ? '继续' : '暂停';
    }
  },

  hidePauseOverlay() {
    const pauseOverlay = document.getElementById('sudoku-pause-overlay');
    if (pauseOverlay) {
      pauseOverlay.style.display = 'none';
    }
  },

  hideWinModal() {
    const winModal = document.getElementById('sudoku-win-modal');
    if (winModal) {
      winModal.style.display = 'none';
    }
  },

  giveHint() {
    console.log('Give hint');
  },

  checkBoard() {
    console.log('Check board');
  },

  undo() {
    console.log('Undo');
  },

  autoCandidates() {
    console.log('Auto candidates');
  }
};

// Make SudokuGame globally available for onclick handlers
window.SudokuGame = SudokuGame;