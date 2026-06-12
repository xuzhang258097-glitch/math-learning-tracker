// ============================================================
// SUDOKU 100 LEVELS - Progressive Difficulty
// ============================================================
// 100个关卡，难度逐步递增
// 每个关卡使用不同的随机种子确保可复现

const SUDOKU_LEVELS = {
  // 关卡配置：共100关，难度曲线设计
  // 1-20: 入门 (Easy, 移除35-40个数字)
  // 21-40: 简单 (Easy-Medium, 移除40-45个)
  // 41-60: 中等 (Medium, 移除45-50个)
  // 61-80: 困难 (Medium-Hard, 移除50-55个)
  // 81-95: 专家 (Hard, 移除55-58个)
  // 96-100: 大师 (Hard+, 移除58-60个)

  getDifficulty(level) {
    if (level <= 20) return { name: '入门', removeCount: 35 + Math.floor((level - 1) * 0.25), class: 'easy' };
    if (level <= 40) return { name: '简单', removeCount: 40 + Math.floor((level - 21) * 0.25), class: 'easy' };
    if (level <= 60) return { name: '中等', removeCount: 45 + Math.floor((level - 41) * 0.25), class: 'medium' };
    if (level <= 80) return { name: '困难', removeCount: 50 + Math.floor((level - 61) * 0.25), class: 'medium' };
    if (level <= 95) return { name: '专家', removeCount: 55 + Math.floor((level - 81) * 0.2), class: 'hard' };
    return { name: '大师', removeCount: 58 + (level - 96), class: 'hard' };
  },

  // 获取当前关卡解锁状态
  getProgress() {
    try {
      const saved = localStorage.getItem('sudokuLevelProgress');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return { currentLevel: 1, completedLevels: [], bestTimes: {} };
  },

  // 保存进度
  saveProgress(progress) {
    localStorage.setItem('sudokuLevelProgress', JSON.stringify(progress));
  },

  // 标记关卡完成
  completeLevel(level, timeSeconds) {
    const progress = this.getProgress();
    if (!progress.completedLevels.includes(level)) {
      progress.completedLevels.push(level);
    }
    // 更新最佳时间
    if (!progress.bestTimes[level] || timeSeconds < progress.bestTimes[level]) {
      progress.bestTimes[level] = timeSeconds;
    }
    // 解锁下一关
    if (level >= progress.currentLevel && level < 100) {
      progress.currentLevel = level + 1;
    }
    this.saveProgress(progress);
  },

  // 获取关卡选择网格数据
  getLevelGrid() {
    const progress = this.getProgress();
    const levels = [];
    for (let i = 1; i <= 100; i++) {
      const diff = this.getDifficulty(i);
      const isUnlocked = i <= progress.currentLevel;
      const isCompleted = progress.completedLevels.includes(i);
      const bestTime = progress.bestTimes[i];
      levels.push({
        level: i,
        difficulty: diff.name,
        difficultyClass: diff.class,
        isUnlocked,
        isCompleted,
        bestTime,
        stars: isCompleted ? this.calculateStars(bestTime, diff.class) : 0
      });
    }
    return levels;
  },

  // 根据通关时间计算星级
  calculateStars(seconds, difficultyClass) {
    // 星级标准（根据难度调整）
    const thresholds = {
      easy: { three: 180, two: 300 },      // 3分钟三星，5分钟两星
      medium: { three: 300, two: 480 },    // 5分钟三星，8分钟两星
      hard: { three: 480, two: 720 }       // 8分钟三星，12分钟两星
    };
    const t = thresholds[difficultyClass] || thresholds.medium;
    if (seconds <= t.three) return 3;
    if (seconds <= t.two) return 2;
    return 1;
  }
};

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SUDOKU_LEVELS;
}
