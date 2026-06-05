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

const TOTAL_DAYS = getTotalDays();

// Init
function init() {
  loadState();
  setupNavigation();
  setupTimer();
  setupSettings();
  renderAll();
}

// LocalStorage
function loadState() {
  try {
    const saved = localStorage.getItem('mathStudyState');
    if (saved) {
      appState = JSON.parse(saved);
    } else {
      // Default: start today
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

// Navigation
function setupNavigation() {
  // Desktop sidebar nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      switchPage(page);
    });
  });

  // Mobile bottom nav
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      switchPage(page);
    });
  });
}

function switchPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-link').forEach(n => n.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Sync desktop nav
  const nav = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (nav) nav.classList.add('active');

  // Sync mobile nav
  const mobileNav = document.querySelector(`.mobile-nav-link[data-page="${page}"]`);
  if (mobileNav) mobileNav.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderAll();
}

// Render all pages
function renderAll() {
  renderDashboard();
  renderToday();
  renderRoadmap();
  renderCalendar();
  renderSettings();
}

// Dashboard
function renderDashboard() {
  const checkinDates = Object.keys(appState.checkins).filter(d => appState.checkins[d]);
  const completed = checkinDates.length;
  const streak = calculateStreak();
  const progress = Math.round((completed / TOTAL_DAYS) * 100);

  document.getElementById('stat-total-days').textContent = TOTAL_DAYS;
  document.getElementById('stat-completed-days').textContent = completed;
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-progress').textContent = progress + '%';
  document.getElementById('progress-text').textContent = `${completed} / ${TOTAL_DAYS} 天`;
  document.getElementById('progress-fill').style.width = progress + '%';

  // Today's preview
  const todayTask = getTodayTask(appState.startDate);
  const previewEl = document.getElementById('today-preview');
  if (todayTask && todayTask.task) {
    const isChecked = appState.checkins[formatDate(new Date())];
    previewEl.innerHTML = `
      <div class="today-card">
        <div class="today-header">
          <span class="today-badge">${todayTask.phase.name} · 第 ${todayTask.dayInPhase} 天</span>
          <span class="streak-display">${streak > 0 ? '&#x1F525; 连续 ' + streak + ' 天' : ''}</span>
        </div>
        <div class="today-title">${todayTask.task.title}</div>
        <div class="today-content">${todayTask.task.content}</div>
        <div class="today-meta">
          <span class="meta-tag">&#x1F4DD; ${todayTask.task.proofFocus}</span>
          <span class="meta-tag">&#x1F4DA; ${todayTask.task.resources}</span>
        </div>
        <button class="btn ${isChecked ? 'btn-success' : 'btn-primary'}" id="btn-dash-checkin" style="width:100%">
          ${isChecked ? '&#x2705; 今日已打卡' : '&#x1F4DD; 今日学习打卡'}
        </button>
      </div>
    `;
    document.getElementById('btn-dash-checkin').addEventListener('click', doCheckin);
  } else {
    previewEl.innerHTML = `
      <div class="today-card">
        <div class="today-title">&#x1F389; 恭喜完成全部学习！</div>
        <div class="today-content">你已经完成了高等数学全部 ${TOTAL_DAYS} 天的学习计划。可以考虑继续学习实分析、复分析或微分几何等进阶内容。</div>
      </div>
    `;
  }

  // Mini phase overview
  const phasesEl = document.getElementById('dashboard-phases');
  let phasesHtml = '';
  let accumulated = 0;
  const todayDay = getCurrentDay();

  STUDY_PLAN.phases.forEach(phase => {
    const phaseStart = accumulated + 1;
    const phaseEnd = accumulated + phase.durationDays;
    let status = 'pending';
    if (todayDay > phaseEnd) status = 'completed';
    else if (todayDay >= phaseStart) status = 'active';

    const statusLabels = { completed: '已完成', active: '进行中', pending: '未开始' };
    const phaseProgress = status === 'completed' ? 100 : status === 'active' ? Math.round(((todayDay - phaseStart + 1) / phase.durationDays) * 100) : 0;

    phasesHtml += `
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:14px;font-weight:500;">${phase.name}</span>
          <span style="font-size:12px;color:var(--text-tertiary);">${statusLabels[status]} · ${phaseProgress}%</span>
        </div>
        <div class="progress-bar" style="height:6px;">
          <div class="progress-fill" style="width:${phaseProgress}%;opacity:0.8;"></div>
        </div>
      </div>
    `;
    accumulated += phase.durationDays;
  });
  phasesEl.innerHTML = phasesHtml;
}

// Today page
function renderToday() {
  const detailEl = document.getElementById('today-detail');
  const todayTask = getTodayTask(appState.startDate);
  const streak = calculateStreak();

  if (!todayTask || !todayTask.task) {
    detailEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">&#x1F389;</div>
        <h3>全部完成！</h3>
        <p>你已经学完了所有内容，太棒了！</p>
      </div>
    `;
    return;
  }

  const todayStr = formatDate(new Date());
  const isChecked = appState.checkins[todayStr];
  const task = todayTask.task;

  detailEl.innerHTML = `
    <div class="today-card">
      <div class="today-header">
        <div>
          <span class="today-badge">${todayTask.phase.name}</span>
          <span style="font-size:12px;color:var(--text-tertiary);margin-left:8px;">第 ${todayTask.dayInPhase} / ${todayTask.phase.durationDays} 天</span>
        </div>
        <span class="streak-display">${streak > 0 ? '&#x1F525; 连续 ' + streak + ' 天' : ''}</span>
      </div>
      <div class="today-title">${task.title}</div>
      <div class="today-content">${task.content}</div>
      <div class="today-meta">
        <span class="meta-tag">&#x1F4DD; 证明重点：${task.proofFocus}</span>
        <span class="meta-tag">&#x1F4DA; 参考：${task.resources}</span>
      </div>
      <div style="display:flex;gap:12px;">
        <button class="btn ${isChecked ? 'btn-success' : 'btn-primary'}" id="btn-today-checkin" style="flex:1">
          ${isChecked ? '&#x2705; 今日已打卡' : '&#x1F4DD; 完成今日学习，点击打卡'}
        </button>
        ${isChecked ? `<button class="btn btn-secondary" id="btn-undo-checkin">撤销</button>` : ''}
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">今日学习建议</span>
      </div>
      <div style="font-size:14px;color:var(--text-secondary);line-height:1.8;">
        <p style="margin-bottom:10px;"><strong>90 分钟安排：</strong></p>
        <ul style="margin-left:20px;margin-bottom:14px;">
          <li><strong>输入（35 分钟）：</strong>观看宋浩老师对应章节视频，或精读同济教材</li>
          <li><strong>消化（20 分钟）：</strong>合上书本，在草稿纸上复现今日涉及的定理证明</li>
          <li><strong>输出（30 分钟）：</strong>做 5-8 道课后习题，重点练习证明题</li>
          <li><strong>复盘（5 分钟）：</strong>用一句话总结今天学的核心概念</li>
        </ul>
        <p style="margin-bottom:10px;"><strong>证明要求：</strong></p>
        <p>今天的证明重点是 <strong>${task.proofFocus}</strong>。建议准备一张白纸，不看任何资料，尝试独立写出完整证明过程。卡住的地方用铅笔标记，对照教材补全后再闭卷重写一遍。</p>
      </div>
    </div>
  `;

  document.getElementById('btn-today-checkin').addEventListener('click', doCheckin);
  const undoBtn = document.getElementById('btn-undo-checkin');
  if (undoBtn) undoBtn.addEventListener('click', undoCheckin);
}

function doCheckin() {
  const todayStr = formatDate(new Date());
  appState.checkins[todayStr] = true;
  saveState();
  showToast('&#x2705; 打卡成功！继续保持！');
  renderAll();
}

function undoCheckin() {
  const todayStr = formatDate(new Date());
  delete appState.checkins[todayStr];
  saveState();
  showToast('打卡已撤销');
  renderAll();
}

// Roadmap
function renderRoadmap() {
  const container = document.getElementById('roadmap-phases');
  let html = '';
  const todayDay = getCurrentDay();
  let accumulated = 0;

  STUDY_PLAN.phases.forEach((phase, idx) => {
    const phaseStart = accumulated + 1;
    const phaseEnd = accumulated + phase.durationDays;
    let status = 'pending';
    if (todayDay > phaseEnd) status = 'completed';
    else if (todayDay >= phaseStart) status = 'active';

    const statusLabels = { completed: '已完成', active: '进行中', pending: '未开始' };
    const statusClass = `phase-status ${status}`;

    html += `
      <div class="phase-card">
        <div class="phase-header" onclick="togglePhase(${idx})">
          <div class="phase-indicator" style="background:${phase.bgColor};color:${phase.color};border:1px solid ${phase.borderColor}">${idx + 1}</div>
          <div class="phase-info">
            <div class="phase-name" style="color:${phase.color}">${phase.name}</div>
            <div class="phase-subtitle">${phase.subtitle} · ${phase.durationDays} 天</div>
          </div>
          <span class="${statusClass}">${statusLabels[status]}</span>
          <span class="phase-expand" id="expand-${idx}">&#x25BC;</span>
        </div>
        <div class="phase-body" id="phase-body-${idx}">
          <div class="phase-topics">
            ${phase.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
          </div>
          <div class="task-list">
            ${phase.dailyTasks.map((task, i) => {
              const globalDay = phaseStart + i;
              const isToday = globalDay === todayDay;
              const isChecked = appState.checkins[getStudyDate(appState.startDate, globalDay)];
              return `
                <div class="task-item" style="${isToday ? 'background:' + phase.bgColor + ';border-radius:6px;padding:10px;margin:0 -6px;' : ''}">
                  <div class="task-day">${isChecked ? '&#x2705;' : (i + 1)}</div>
                  <div class="task-detail">
                    <h4>${task.title} ${isToday ? '<span style="color:' + phase.color + ';font-size:11px;">(今日)</span>' : ''}</h4>
                    <p>${task.content}</p>
                    ${task.proofFocus !== '无' ? `<p style="color:${phase.color};margin-top:4px;">&#x1F4DD; 证明：${task.proofFocus}</p>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
    accumulated += phase.durationDays;
  });

  container.innerHTML = html;
}

function togglePhase(idx) {
  const body = document.getElementById('phase-body-' + idx);
  const arrow = document.getElementById('expand-' + idx);
  body.classList.toggle('open');
  arrow.classList.toggle('expanded');
}

// Calendar
function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  document.getElementById('calendar-month-year').textContent = `${year}年 ${monthNames[month]}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = document.getElementById('calendar-grid');

  let html = '';
  const weekDays = ['日','一','二','三','四','五','六'];
  weekDays.forEach(d => {
    html += `<div class="calendar-header">${d}</div>`;
  });

  for (let i = 0; i < firstDay; i++) {
    html += `<div class="calendar-day" style="visibility:hidden"></div>`;
  }

  const todayStr = formatDate(new Date());
  const startDate = new Date(appState.startDate);

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dateObj = new Date(dateStr);
    const isChecked = appState.checkins[dateStr];
    const isToday = dateStr === todayStr;

    let classes = 'calendar-day';
    if (isChecked) classes += ' checked';
    if (isToday) classes += ' current';
    if (dateObj < startDate) classes += ' future';

    // Find phase for this day
    let phaseLabel = '';
    if (dateObj >= startDate) {
      const diffTime = dateObj - startDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      const taskInfo = getTaskForDay(diffDays);
      if (taskInfo) {
        phaseLabel = String(taskInfo.phase.id + 1);
      }
    }

    html += `<div class="${classes}" onclick="toggleCalendarDay('${dateStr}')">
      <span class="day-num">${day}</span>
      ${phaseLabel ? `<span class="day-phase">P${phaseLabel}</span>` : ''}
    </div>`;
  }

  grid.innerHTML = html;
}

function toggleCalendarDay(dateStr) {
  const dateObj = new Date(dateStr);
  const today = new Date();
  today.setHours(0,0,0,0);
  if (dateObj > today) {
    showToast('还不能打卡未来的日期哦');
    return;
  }
  if (dateObj < new Date(appState.startDate)) {
    showToast('此日期在学习开始之前');
    return;
  }

  if (appState.checkins[dateStr]) {
    delete appState.checkins[dateStr];
    showToast('已取消 ' + dateStr + ' 的打卡');
  } else {
    appState.checkins[dateStr] = true;
    showToast('&#x2705; ' + dateStr + ' 打卡成功');
  }
  saveState();
  renderCalendar();
  renderDashboard();
}

// Settings
function renderSettings() {
  document.getElementById('setting-start-date').value = appState.startDate;
  document.getElementById('setting-daily-minutes').value = appState.dailyMinutes;
}

function setupSettings() {
  document.getElementById('btn-save-settings').addEventListener('click', () => {
    const newDate = document.getElementById('setting-start-date').value;
    const newMinutes = parseInt(document.getElementById('setting-daily-minutes').value);
    if (newDate) {
      appState.startDate = newDate;
      appState.dailyMinutes = newMinutes;
      saveState();
      showToast('设置已保存');
      renderAll();
    }
  });

  document.getElementById('btn-export').addEventListener('click', () => {
    const dataStr = JSON.stringify(appState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `math-study-backup-${formatDate(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('数据已导出');
  });

  document.getElementById('file-import').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.startDate && data.checkins) {
          appState = data;
          saveState();
          showToast('数据已导入');
          renderAll();
        } else {
          showToast('文件格式不正确');
        }
      } catch (err) {
        showToast('导入失败：' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('确定要清除所有学习记录吗？此操作不可恢复。')) {
      appState = {
        startDate: formatDate(new Date()),
        dailyMinutes: 90,
        checkins: {},
        currentPhase: 0
      };
      saveState();
      showToast('数据已重置');
      renderAll();
    }
  });
}

// Timer
function setupTimer() {
  const display = document.getElementById('timer');
  const startBtn = document.getElementById('timer-start');
  const pauseBtn = document.getElementById('timer-pause');
  const resetBtn = document.getElementById('timer-reset');

  function updateDisplay() {
    const h = String(Math.floor(timerSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(timerSeconds % 60).padStart(2, '0');
    display.textContent = `${h}:${m}:${s}`;
  }

  startBtn.addEventListener('click', () => {
    if (!timerRunning) {
      timerRunning = true;
      startBtn.disabled = true;
      pauseBtn.disabled = false;
      timerInterval = setInterval(() => {
        timerSeconds++;
        updateDisplay();
      }, 1000);
    }
  });

  pauseBtn.addEventListener('click', () => {
    if (timerRunning) {
      timerRunning = false;
      clearInterval(timerInterval);
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      startBtn.textContent = '继续';
    }
  });

  resetBtn.addEventListener('click', () => {
    timerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    startBtn.textContent = '开始';
  });
}

// Helpers
function getCurrentDay() {
  const start = new Date(appState.startDate);
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  return diff;
}

function calculateStreak() {
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const str = formatDate(d);
    if (appState.checkins[str]) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  return streak;
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Start
init();
