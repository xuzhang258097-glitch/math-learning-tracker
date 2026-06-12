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

  const toggle = document.createElement('div');
  toggle.className = 'audio-toggle';
  toggle.id = 'audio-toggle-btn';
  toggle.innerHTML = '<span id="audio-icon">\u{1F507}</span><span id="audio-label">音效关</span>';
  toggle.addEventListener('click', () => {
    const enabled = AudioSystem.toggle();
    updateAudioToggleUI(enabled);
    if (enabled) AudioSystem.playSuccess();
  });
  document.body.appendChild(toggle);
  AudioSystem.init();
  updateAudioToggleUI(AudioSystem.isEnabled());
}

function updateAudioToggleUI(enabled) {
  const btn = document.getElementById('audio-toggle-btn');
  const icon = document.getElementById('audio-icon');
  const label = document.getElementById('audio-label');
  if (!btn || !icon || !label) return;
  if (enabled) {
    btn.classList.add('active');
    icon.textContent = '\u{1F50A}';
    label.textContent = '音效开';
  } else {
    btn.classList.remove('active');
    icon.textContent = '\u{1F507}';
    label.textContent = '音效关';
  }
}

// ---------- Hover Sounds ----------
function setupHoverSounds() {
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.btn, .nav-link, .phase-header, .calendar-day, .resource-item, .modal-link, .btn-answer')) {
      AudioSystem.playHover();
    }
  }, { passive: true });
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn, .nav-link, .phase-header, .calendar-day, .resource-item')) {
      AudioSystem.playClick();
    }
  }, { passive: true });
}

// ---------- Number Animation ----------
function animateNumber(element, target, suffix = '', duration = 800) {
  if (!element) return;
  const start = parseInt(element.textContent) || 0;
  if (start === target) { element.textContent = target + suffix; return; }
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    element.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ---------- Celebration Effect ----------
function celebrateCheckin() {
  const colors = ['#165DFF', '#36D399', '#FF9F43', '#F87272', '#86909C'];
  const container = document.createElement('div');
  container.className = 'celebration';
  document.body.appendChild(container);
  for (let i = 0; i < 24; i++) {
    const particle = document.createElement('div');
    particle.className = 'celebration-particle';
    const size = 4 + Math.random() * 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = (Math.random() * 100) + '%';
    particle.style.top = '60%';
    particle.style.animation = `celebrateUp ${0.8 + Math.random() * 0.6}s ease-out forwards`;
    particle.style.animationDelay = (Math.random() * 0.3) + 's';
    container.appendChild(particle);
  }
  setTimeout(() => container.remove(), 2000);
}

// ---------- Navigation ----------
function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      AudioSystem.playPageSwitch();
      switchPage(page);
    });
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      AudioSystem.playPageSwitch();
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
  const nav = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (nav) nav.classList.add('active');
  const mobileNav = document.querySelector(`.mobile-nav-link[data-page="${page}"]`);
  if (mobileNav) mobileNav.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'games') {
    if (typeof Games !== 'undefined') Games.init();
  } else {
    renderAll();
  }
}

// ---------- Render All ----------
function renderAll() {
  renderDashboard();
  renderToday();
  renderRoadmap();
  renderCalendar();
  renderSettings();
}

// ---------- Dashboard ----------
function renderDashboard() {
  const checkinDates = Object.keys(appState.checkins).filter(d => appState.checkins[d]);
  const completed = checkinDates.length;
  const streak = calculateStreak();
  const progress = Math.round((completed / TOTAL_DAYS) * 100);

  animateNumber(document.getElementById('stat-total-days'), TOTAL_DAYS);
  animateNumber(document.getElementById('stat-completed-days'), completed);
  animateNumber(document.getElementById('stat-streak'), streak);
  animateNumber(document.getElementById('stat-progress'), progress, '%');

  document.getElementById('progress-text').textContent = completed + ' / ' + TOTAL_DAYS + ' 天';
  document.getElementById('progress-fill').style.width = progress + '%';

  const todayTask = getTodayTask(appState.startDate);
  const previewEl = document.getElementById('today-preview');
  if (todayTask && todayTask.task) {
    const isChecked = appState.checkins[formatDate(new Date())];
    previewEl.innerHTML = `
      <div class="today-card">
        <div class="today-header">
          <span class="today-badge">${todayTask.phase.name} · 第 ${todayTask.dayInPhase} 天</span>
          <span class="streak-display">${streak > 0 ? '\u{1F525} 连续 ' + streak + ' 天' : ''}</span>
        </div>
        <div class="today-title">${todayTask.task.title}</div>
        <div class="today-content">${todayTask.task.content}</div>
        <button class="btn ${isChecked ? 'btn-success' : 'btn-primary'}" id="btn-dash-checkin" style="width:100%">
          ${isChecked ? '\u2705 今日已完成' : '\u{1F4DD} 前往今日任务'}
        </button>
      </div>
    `;
    document.getElementById('btn-dash-checkin').addEventListener('click', () => {
      if (isChecked) return;
      switchPage('today');
    });
  } else {
    previewEl.innerHTML = `
      <div class="today-card">
        <div class="today-title">\u{1F389} 恭喜完成全部学习！</div>
        <div class="today-content">你已经完成了高等数学全部 ${TOTAL_DAYS} 天的学习计划。</div>
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
      <div class="phase-progress-mini">
        <div class="phase-progress-label">
          <span>${phase.name}</span>
          <span>${statusLabels[status]} · ${phaseProgress}%</span>
        </div>
        <div class="progress-bar" style="height:5px;">
          <div class="progress-fill" style="width:${phaseProgress}%;"></div>
        </div>
      </div>
    `;
    accumulated += phase.durationDays;
  });
  phasesEl.innerHTML = phasesHtml;
}

// ---------- Today Page ----------
function renderToday() {
  const detailEl = document.getElementById('today-detail');
  const todayTask = getTodayTask(appState.startDate);
  const streak = calculateStreak();

  if (!todayTask || !todayTask.task) {
    detailEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">\u{1F389}</div>
        <h3>全部完成！</h3>
        <p>你已经学完了所有内容，太棒了！</p>
      </div>
    `;
    return;
  }

  const todayStr = formatDate(new Date());
  const isChecked = appState.checkins[todayStr];
  const task = todayTask.task;
  const phaseIdx = STUDY_PLAN.phases.indexOf(todayTask.phase);
  const dayIdx = todayTask.dayInPhase - 1;

  // Get exercise data for today
  const exerciseData = getExerciseData(phaseIdx, dayIdx);
  const genericHint = getGenericExerciseHint(phaseIdx, dayIdx);

  // Build links HTML
  let linksHtml = '';
  if (exerciseData && exerciseData.links && exerciseData.links.length > 0) {
    linksHtml = exerciseData.links.map(link => {
      if (link.url) {
        return '<a href="' + link.url + '" class="modal-link" target="_blank" rel="noopener">' + link.name + '</a>';
      } else {
        return '<div class="modal-link modal-link-text">' + link.name + '</div>';
      }
    }).join('');
  } else {
    linksHtml = '<div class="modal-link modal-link-text">\u{1F4D6} 请查阅同济教材对应章节</div>';
  }

  // Build exercises HTML
  let exercisesHtml = '';
  if (exerciseData && exerciseData.exercises && exerciseData.exercises.length > 0) {
    exercisesHtml = exerciseData.exercises.map((ex, idx) => {
      return '<div class="exercise-card">' +
        '<div class="exercise-question">' + escapeHtml(ex.question) + '</div>' +
        '<div class="exercise-answer-wrapper">' +
          '<button class="btn-answer" onclick="toggleTodayAnswer(this, ' + idx + ')">' +
            '<span>查看答案</span>' +
          '</button>' +
          '<div class="exercise-answer" id="today-ex-answer-' + idx + '">' + escapeHtml(ex.answer) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  } else {
    exercisesHtml = '<div class="exercise-hint">' + escapeHtml(genericHint.hint) + '</div>';
  }

  detailEl.innerHTML = `
    <div class="today-card">
      <div class="today-header">
        <div>
          <span class="today-badge">${todayTask.phase.name}</span>
          <span style="font-size:12px;color:var(--text-muted);margin-left:8px;">第 ${todayTask.dayInPhase} / ${todayTask.phase.durationDays} 天 · ${todayStr}</span>
        </div>
        <span class="streak-display">${streak > 0 ? '\u{1F525} 连续 ' + streak + ' 天' : ''}</span>
      </div>
      <div class="today-title">${task.title}</div>
      <div class="today-content">${task.content}</div>
      ${task.proofFocus !== '无' ? '<div class="today-proof-tag">\u{1F4DD} 证明重点：' + task.proofFocus + '</div>' : ''}
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">\u{1F4FA} 视频与教材</span>
      </div>
      <div class="task-modal-links">${linksHtml}</div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">\u{1F4DD} 今日习题</span>
        <span style="font-size:12px;color:var(--text-muted);">${exerciseData && exerciseData.exercises ? exerciseData.exercises.length + ' 道' : ''}</span>
      </div>
      <div class="task-modal-exercises">${exercisesHtml}</div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">\u{1F4AC} 学习建议</span>
      </div>
      <div style="font-size:14px;color:var(--text-body);line-height:1.8;">
        <ul class="today-schedule-list">
          <li><strong>输入（35 分钟）：</strong>观看上方视频链接，或精读教材对应章节</li>
          <li><strong>消化（20 分钟）：</strong>合上书本，在草稿纸上复现今日定理证明</li>
          <li><strong>输出（30 分钟）：</strong>完成上方习题，先做再看答案</li>
          <li><strong>复盘（5 分钟）：</strong>用一句话总结今天学的核心概念</li>
        </ul>
      </div>
    </div>

    <div class="today-checkin-area">
      <button class="btn ${isChecked ? 'btn-success' : 'btn-primary'}" id="btn-today-checkin" style="flex:1;padding:14px 24px;font-size:15px;font-weight:600;">
        ${isChecked ? '\u2705 今日已完成' : '\u{1F4DD} 完成今日学习，点击打卡'}
      </button>
      ${isChecked ? '<button class="btn btn-secondary" id="btn-undo-checkin" style="padding:14px 16px;">撤销</button>' : ''}
    </div>
  `;

  document.getElementById('btn-today-checkin').addEventListener('click', doCheckin);
  const undoBtn = document.getElementById('btn-undo-checkin');
  if (undoBtn) undoBtn.addEventListener('click', undoCheckin);
}

function toggleTodayAnswer(btn, idx) {
  const answerEl = document.getElementById('today-ex-answer-' + idx);
  const span = btn.querySelector('span');
  if (answerEl.classList.contains('open')) {
    answerEl.classList.remove('open');
    span.textContent = '查看答案';
    btn.classList.remove('active');
  } else {
    answerEl.classList.add('open');
    span.textContent = '隐藏答案';
    btn.classList.add('active');
    AudioSystem.playClick();
  }
}

function doCheckin() {
  const todayStr = formatDate(new Date());
  appState.checkins[todayStr] = true;
  saveState();
  AudioSystem.playCheckin();
  celebrateCheckin();
  showToast('\u2705 打卡成功！继续保持！');
  renderAll();
}

function undoCheckin() {
  const todayStr = formatDate(new Date());
  delete appState.checkins[todayStr];
  saveState();
  AudioSystem.playWarning();
  showToast('打卡已撤销');
  renderAll();
}

// ---------- Roadmap ----------
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
    const statusClass = 'phase-status ' + status;

    html += `
      <div class="phase-card">
        <div class="phase-header" onclick="togglePhase(${idx})">
          <div class="phase-indicator" style="background:${phase.bgColor};color:${phase.color};border:1px solid ${phase.borderColor}">${idx + 1}</div>
          <div class="phase-info">
            <div class="phase-name" style="color:${phase.color}">${phase.name}</div>
            <div class="phase-subtitle">${phase.subtitle} · ${phase.durationDays} 天</div>
          </div>
          <span class="${statusClass}">${statusLabels[status]}</span>
          <span class="phase-expand" id="expand-${idx}">\u25BC</span>
        </div>
        <div class="phase-body" id="phase-body-${idx}">
          <div class="phase-topics">
            ${phase.topics.map(t => '<span class="topic-tag">' + t + '</span>').join('')}
          </div>
          <div class="task-list">
            ${phase.dailyTasks.map((task, i) => {
              const globalDay = phaseStart + i;
              const isToday = globalDay === todayDay;
              const dateStr = getStudyDate(appState.startDate, globalDay);
              const isChecked = appState.checkins[dateStr];
              return `
                <div class="task-item ${isChecked ? 'task-checked' : ''}" onclick="openTaskDetail(event, ${idx}, ${i})" style="${isToday ? 'background:' + phase.bgColor + ';border-radius:6px;padding:10px;margin:0 -6px;' : ''}">
                  <div class="task-day">${isChecked ? '\u2705' : (i + 1)}</div>
                  <div class="task-detail">
                    <h4>${task.title} ${isToday ? '<span style="color:' + phase.color + ';font-size:11px;">(今日)</span>' : ''}</h4>
                    <p>${task.content}</p>
                    ${task.proofFocus !== '无' ? '<p style="color:' + phase.color + ';margin-top:4px;">\u{1F4DD} 证明：' + task.proofFocus + '</p>' : ''}
                  </div>
                  <div class="task-arrow">\u203A</div>
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

// ---------- Calendar ----------
function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  document.getElementById('calendar-month-year').textContent = year + '年 ' + monthNames[month];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = document.getElementById('calendar-grid');

  let html = '';
  const weekDays = ['日','一','二','三','四','五','六'];
  weekDays.forEach(d => { html += '<div class="calendar-header">' + d + '</div>'; });
  for (let i = 0; i < firstDay; i++) { html += '<div class="calendar-day" style="visibility:hidden"></div>'; }

  const todayStr = formatDate(new Date());
  const startDate = new Date(appState.startDate);

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
    const dateObj = new Date(dateStr);
    const isChecked = appState.checkins[dateStr];
    const isToday = dateStr === todayStr;
    let classes = 'calendar-day';
    if (isChecked) classes += ' checked';
    if (isToday) classes += ' current';
    if (dateObj < startDate) classes += ' future';
    let phaseLabel = '';
    if (dateObj >= startDate) {
      const diffTime = dateObj - startDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      const taskInfo = getTaskForDay(diffDays);
      if (taskInfo) { phaseLabel = String(taskInfo.phase.id + 1); }
    }
    html += '<div class="' + classes + '" onclick="toggleCalendarDay(\'' + dateStr + '\')">' +
      '<span class="day-num">' + day + '</span>' +
      (phaseLabel ? '<span class="day-phase">P' + phaseLabel + '</span>' : '') +
    '</div>';
  }
  grid.innerHTML = html;
}

function toggleCalendarDay(dateStr) {
  const dateObj = new Date(dateStr);
  const today = new Date();
  today.setHours(0,0,0,0);
  if (dateObj > today) { AudioSystem.playWarning(); showToast('还不能打卡未来的日期哦'); return; }
  if (dateObj < new Date(appState.startDate)) { AudioSystem.playWarning(); showToast('此日期在学习开始之前'); return; }
  if (appState.checkins[dateStr]) {
    delete appState.checkins[dateStr];
    AudioSystem.playWarning();
    showToast('已取消 ' + dateStr + ' 的打卡');
  } else {
    appState.checkins[dateStr] = true;
    AudioSystem.playSuccess();
    showToast('\u2705 ' + dateStr + ' 打卡成功');
  }
  saveState();
  renderCalendar();
  renderDashboard();
}

// ---------- Settings ----------
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
      AudioSystem.playSuccess();
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
    a.download = 'math-study-backup-' + formatDate(new Date()) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    AudioSystem.playSuccess();
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
          AudioSystem.playSuccess();
          showToast('数据已导入');
          renderAll();
        } else {
          AudioSystem.playWarning();
          showToast('文件格式不正确');
        }
      } catch (err) {
        AudioSystem.playWarning();
        showToast('导入失败：' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('确定要清除所有学习记录吗？此操作不可恢复。')) {
      appState = { startDate: formatDate(new Date()), dailyMinutes: 90, checkins: {}, currentPhase: 0 };
      saveState();
      AudioSystem.playWarning();
      showToast('数据已重置');
      renderAll();
    }
  });
}

// ---------- Timer ----------
function setupTimer() {
  const display = document.getElementById('timer');
  const startBtn = document.getElementById('timer-start');
  const pauseBtn = document.getElementById('timer-pause');
  const resetBtn = document.getElementById('timer-reset');

  function updateDisplay() {
    const h = String(Math.floor(timerSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(timerSeconds % 60).padStart(2, '0');
    display.textContent = h + ':' + m + ':' + s;
  }

  startBtn.addEventListener('click', () => {
    if (!timerRunning) {
      timerRunning = true;
      startBtn.disabled = true;
      pauseBtn.disabled = false;
      AudioSystem.playTimerStart();
      timerInterval = setInterval(() => { timerSeconds++; updateDisplay(); }, 1000);
      tickInterval = setInterval(() => { AudioSystem.playTick(); }, 1000);
    }
  });

  pauseBtn.addEventListener('click', () => {
    if (timerRunning) {
      timerRunning = false;
      clearInterval(timerInterval);
      clearInterval(tickInterval);
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      startBtn.textContent = '继续';
      AudioSystem.playTimerStop();
    }
  });

  resetBtn.addEventListener('click', () => {
    timerRunning = false;
    clearInterval(timerInterval);
    clearInterval(tickInterval);
    timerSeconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    startBtn.textContent = '开始';
    AudioSystem.playTimerStop();
  });
}

// ---------- Helpers ----------
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
    if (appState.checkins[str]) { streak++; } else if (i > 0) { break; }
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
    toast.style.transform = 'translateX(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ---------- Task Detail Modal ----------
let currentModalPhaseIdx = -1;
let currentModalDayIdx = -1;
let currentModalGlobalDay = -1;
let currentModalDateStr = '';

function renderModalLinksAndExercises(phaseIdx, dayIdx) {
  const linksSection = document.getElementById('modal-links-section');
  const linksContainer = document.getElementById('modal-links');
  const exercisesSection = document.getElementById('modal-exercises-section');
  const exercisesContainer = document.getElementById('modal-exercises');
  const data = getExerciseData(phaseIdx, dayIdx);

  if (data && data.links && data.links.length > 0) {
    linksSection.style.display = 'block';
    linksContainer.innerHTML = data.links.map(link => {
      if (link.url) {
        return '<a href="' + link.url + '" class="modal-link" target="_blank" rel="noopener">' + link.name + '</a>';
      } else {
        return '<div class="modal-link modal-link-text">' + link.name + '</div>';
      }
    }).join('');
  } else {
    linksSection.style.display = 'none';
    linksContainer.innerHTML = '';
  }

  if (data && data.exercises && data.exercises.length > 0) {
    exercisesSection.style.display = 'block';
    exercisesContainer.innerHTML = data.exercises.map((ex, idx) => {
      return '<div class="exercise-card">' +
        '<div class="exercise-question">' + escapeHtml(ex.question) + '</div>' +
        '<div class="exercise-answer-wrapper">' +
          '<button class="btn-answer" onclick="toggleAnswer(this, ' + idx + ')">' +
            '<span>查看答案</span>' +
          '</button>' +
          '<div class="exercise-answer" id="ex-answer-' + idx + '">' + escapeHtml(ex.answer) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  } else {
    const generic = getGenericExerciseHint(phaseIdx, dayIdx);
    exercisesSection.style.display = 'block';
    exercisesContainer.innerHTML = '<div class="exercise-hint">' + escapeHtml(generic.hint) + '</div>';
  }
}

function toggleAnswer(btn, idx) {
  const answerEl = document.getElementById('ex-answer-' + idx);
  const span = btn.querySelector('span');
  if (answerEl.classList.contains('open')) {
    answerEl.classList.remove('open');
    span.textContent = '查看答案';
    btn.classList.remove('active');
  } else {
    answerEl.classList.add('open');
    span.textContent = '隐藏答案';
    btn.classList.add('active');
    AudioSystem.playClick();
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function openTaskDetail(event, phaseIdx, dayIdx) {
  if (event) event.stopPropagation();
  const phase = STUDY_PLAN.phases[phaseIdx];
  const task = phase.dailyTasks[dayIdx];
  const globalDay = getPhaseStartDay(phaseIdx) + dayIdx;
  const dateStr = getStudyDate(appState.startDate, globalDay);

  currentModalPhaseIdx = phaseIdx;
  currentModalDayIdx = dayIdx;
  currentModalGlobalDay = globalDay;
  currentModalDateStr = dateStr;

  document.getElementById('modal-phase').textContent = phase.name + ' · 第 ' + (dayIdx + 1) + ' / ' + phase.durationDays + ' 天 · ' + dateStr;
  document.getElementById('modal-title').textContent = task.title;
  document.getElementById('modal-content').textContent = task.content;
  document.getElementById('modal-resources').textContent = task.resources;

  const proofSection = document.getElementById('modal-proof-section');
  if (task.proofFocus && task.proofFocus !== '无') {
    proofSection.style.display = 'block';
    document.getElementById('modal-proof').textContent = task.proofFocus;
  } else {
    proofSection.style.display = 'none';
  }

  renderModalLinksAndExercises(phaseIdx, dayIdx);
  updateModalButtonState();

  const modal = document.getElementById('task-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  AudioSystem.playClick();
}

function closeTaskDetail() {
  const modal = document.getElementById('task-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentModalPhaseIdx = -1;
  currentModalDayIdx = -1;
  currentModalGlobalDay = -1;
  currentModalDateStr = '';
}

function updateModalButtonState() {
  const btn = document.getElementById('modal-checkin-btn');
  const statusEl = document.getElementById('modal-status');
  const isChecked = appState.checkins[currentModalDateStr];
  const dateObj = new Date(currentModalDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isFuture = dateObj > today;

  if (isFuture) {
    btn.className = 'btn btn-secondary';
    btn.textContent = '还不能打卡未来日期';
    btn.disabled = true;
    statusEl.textContent = '';
  } else if (isChecked) {
    btn.className = 'btn btn-secondary';
    btn.textContent = '取消完成';
    btn.disabled = false;
    statusEl.innerHTML = '<span style="color:var(--success);font-weight:500;">\u2705 已完成</span>';
  } else {
    btn.className = 'btn btn-primary';
    btn.textContent = '标记为已完成';
    btn.disabled = false;
    statusEl.textContent = '';
  }
}

function modalCheckin() {
  if (!currentModalDateStr) return;
  const isChecked = appState.checkins[currentModalDateStr];
  if (isChecked) {
    delete appState.checkins[currentModalDateStr];
    saveState();
    AudioSystem.playWarning();
    showToast('已取消完成');
  } else {
    appState.checkins[currentModalDateStr] = true;
    saveState();
    AudioSystem.playCheckin();
    celebrateCheckin();
    showToast('\u2705 打卡成功！继续保持！');
  }
  updateModalButtonState();
  renderRoadmap();
  renderDashboard();
  renderCalendar();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTaskDetail();
});

// Start
init();