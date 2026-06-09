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

  const toggle = document.createElement('div');
  toggle.className = 'audio-toggle';
  toggle.id = 'audio-toggle-btn';
  toggle.innerHTML = `
    <span id="audio-icon">&#x1F507;</span>
    <span id="audio-label">音效关</span>
  `;
  toggle.addEventListener('click', () => {
    const enabled = AudioSystem.toggle();
    updateAudioToggleUI(enabled);
    if (enabled) AudioSystem.playSuccess();
  });
  document.body.appendChild(toggle);

  // Initialize audio system
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
    if (e.target.closest('.btn, .nav-link, .phase-header, .calendar-day, .resource-item')) {
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
  if (start === target) {
    element.textContent = target + suffix;
    return;
  }

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
  renderAll();
}

// ---------- Render All ----------
function renderAll() {
  renderDashboard();
  renderToday();
  renderRoadmap();
  renderCalendar();
  renderGames();
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
          <span class="today-badge">${todayTask.phase.name} \u00b7 \u7b2c ${todayTask.dayInPhase} \u5929</span>
          <span class="streak-display">${streak > 0 ? '\u{1F525} \u8fde\u7eed ' + streak + ' \u5929' : ''}</span>
        </div>
        <div class="today-title">${todayTask.task.title}</div>
        <div class="today-content">${todayTask.task.content}</div>
        <div class="today-meta">
          <span class="meta-tag">&#x1F4DD; ${todayTask.task.proofFocus}</span>
          <span class="meta-tag">&#x1F4DA; ${todayTask.task.resources}</span>
        </div>
        <button class="btn ${isChecked ? 'btn-success' : 'btn-primary'}" id="btn-dash-checkin" style="width:100%">
          ${isChecked ? '\u2705 \u4eca\u65e5\u5df2\u6253\u5361' : '\u{1F4DD} \u4eca\u65e5\u5b66\u4e60\u6253\u5361'}
        </button>
      </div>
    `;
    document.getElementById('btn-dash-checkin').addEventListener('click', doCheckin);
  } else {
    previewEl.innerHTML = `
      <div class="today-card">
        <div class="today-title">\u{1F389} \u606d\u559c\u5b8c\u6210\u5168\u90e8\u5b66\u4e60\uff01</div>
        <div class="today-content">\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u9ad8\u7b49\u6570\u5b66\u5168\u90e8 ${TOTAL_DAYS} \u5929\u7684\u5b66\u4e60\u8ba1\u5212\u3002\u53ef\u4ee5\u8003\u8651\u7ee7\u7eed\u5b66\u4e60\u5b9e\u5206\u6790\u3001\u590d\u5206\u6790\u6216\u5fae\u5206\u51e0\u4f55\u7b49\u8fdb\u9636\u5185\u5bb9\u3002</div>
        <div style="margin-top:14px;">
          <button class="btn btn-secondary" id="btn-reset-startdate" style="width:100%">\u{1F504} \u91cd\u65b0\u5f00\u59cb\u5b66\u4e60\u8ba1\u5212</button>
        </div>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-startdate');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        appState.startDate = formatDate(new Date());
        saveState();
        renderAll();
        showToast('\u5df2\u91cd\u65b0\u5f00\u59cb\u5b66\u4e60\u8ba1\u5212\uff0c\u4eca\u5929\u662f\u7b2c 1 \u5929\uff01');
      });
    }
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

    const statusLabels = { completed: '\u5df2\u5b8c\u6210', active: '\u8fdb\u884c\u4e2d', pending: '\u672a\u5f00\u59cb' };
    const phaseProgress = status === 'completed' ? 100 : status === 'active' ? Math.round(((todayDay - phaseStart + 1) / phase.durationDays) * 100) : 0;

    phasesHtml += `
      <div class="phase-progress-mini">
        <div class="phase-progress-label">
          <span>${phase.name}</span>
          <span>${statusLabels[status]} \u00b7 ${phaseProgress}%</span>
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
        <h3>\u5168\u90e8\u5b8c\u6210\uff01</h3>
        <p>\u4f60\u5df2\u7ecf\u5b66\u5b8c\u4e86\u6240\u6709\u5185\u5bb9\uff0c\u592a\u68d2\u4e86\uff01</p>
        <button class="btn btn-secondary" id="btn-today-reset" style="margin-top:16px;min-width:200px;">\u{1F504} \u91cd\u65b0\u5f00\u59cb\u5b66\u4e60\u8ba1\u5212</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-today-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        appState.startDate = formatDate(new Date());
        saveState();
        renderAll();
        showToast('\u5df2\u91cd\u65b0\u5f00\u59cb\u5b66\u4e60\u8ba1\u5212\uff0c\u4eca\u5929\u662f\u7b2c 1 \u5929\uff01');
      });
    }
    return;
  }

  const todayStr = formatDate(new Date());
  const isChecked = appState.checkins[todayStr];
  const task = todayTask.task;

  // Find phaseIdx and dayIdx for exercise data
  let phaseIdx = -1;
  let dayIdx = todayTask.dayInPhase - 1;
  for (let i = 0; i < STUDY_PLAN.phases.length; i++) {
    if (STUDY_PLAN.phases[i].name === todayTask.phase.name) {
      phaseIdx = i;
      break;
    }
  }

  // Get exercise data for today
  const exerciseData = (phaseIdx >= 0) ? getExerciseData(phaseIdx, dayIdx) : null;
  const genericHint = (phaseIdx >= 0) ? getGenericExerciseHint(phaseIdx, dayIdx) : null;

  // Build links HTML
  let linksHtml = '';
  if (exerciseData && exerciseData.links && exerciseData.links.length > 0) {
    linksHtml = `
      <div class="today-section">
        <div class="today-section-title">\u{1F4DA} \u4eca\u65e5\u5b66\u4e60\u8d44\u6e90</div>
        <div class="task-modal-links">
          ${exerciseData.links.map(link => {
            if (link.url) {
              return `<a href="${link.url}" class="modal-link" target="_blank" rel="noopener">${link.name}</a>`;
            } else {
              return `<div class="modal-link modal-link-text">${link.name}</div>`;
            }
          }).join('')}
        </div>
      </div>
    `;
  }

  // Build exercises HTML
  let exercisesHtml = '';
  if (exerciseData && exerciseData.exercises && exerciseData.exercises.length > 0) {
    exercisesHtml = `
      <div class="today-section">
        <div class="today-section-title">\u{270F}\uFE0F \u4eca\u65e5\u4e60\u9898</div>
        <div class="task-modal-exercises">
          ${exerciseData.exercises.map((ex, idx) => `
            <div class="exercise-card">
              <div class="exercise-question">${escapeHtml(ex.question)}</div>
              <div class="exercise-answer-wrapper">
                <button class="btn-answer" onclick="toggleTodayAnswer(this, ${idx})">
                  <span>\u67e5\u770b\u7b54\u6848</span>
                </button>
                <div class="exercise-answer" id="today-ex-answer-${idx}">${escapeHtml(ex.answer)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (genericHint) {
    exercisesHtml = `
      <div class="today-section">
        <div class="today-section-title">\u{270F}\uFE0F \u4eca\u65e5\u4e60\u9898</div>
        <div class="exercise-hint">${escapeHtml(genericHint.hint)}</div>
      </div>
    `;
  }

  detailEl.innerHTML = `
    <div class="today-card">
      <div class="today-header">
        <div>
          <span class="today-badge">${todayTask.phase.name}</span>
          <span style="font-size:12px;color:var(--text-muted);margin-left:8px;">\u7b2c ${todayTask.dayInPhase} / ${todayTask.phase.durationDays} \u5929</span>
        </div>
        <span class="streak-display">${streak > 0 ? '\u{1F525} \u8fde\u7eed ' + streak + ' \u5929' : ''}</span>
      </div>
      <div class="today-title">${task.title}</div>
      <div class="today-content">${task.content}</div>
      <div class="today-meta">
        <span class="meta-tag">\u{1F4DD} \u8bc1\u660e\u91cd\u70b9\uff1a${task.proofFocus}</span>
        <span class="meta-tag">\u{1F4DA} \u53c2\u8003\uff1a${task.resources}</span>
      </div>
      <div style="display:flex;gap:12px;">
        <button class="btn ${isChecked ? 'btn-success' : 'btn-primary'}" id="btn-today-checkin" style="flex:1">
          ${isChecked ? '\u2705 \u4eca\u65e5\u5df2\u6253\u5361' : '\u{1F4DD} \u5b8c\u6210\u4eca\u65e5\u5b66\u4e60\uff0c\u70b9\u51fb\u6253\u5361'}
        </button>
        ${isChecked ? `<button class="btn btn-secondary" id="btn-undo-checkin">\u64a4\u9500</button>` : ''}
      </div>
    </div>

    ${linksHtml}
    ${exercisesHtml}

    <div class="today-section">
      <div class="today-section-title">\u{1F4A1} \u4eca\u65e5\u5b66\u4e60\u5efa\u8bae</div>
      <div style="font-size:14px;color:var(--text-body);line-height:1.8;">
        <p style="margin-bottom:10px;"><strong>90 \u5206\u949f\u5b89\u6392\uff1a</strong></p>
        <ul style="margin-left:20px;margin-bottom:14px;">
          <li><strong>\u8f93\u5165\uff0835 \u5206\u949f\uff09\uff1a</strong>\u89c2\u770b\u5b8b\u6d69\u8001\u5e08\u5bf9\u5e94\u7ae0\u8282\u89c6\u9891\uff0c\u6216\u7cbe\u8bfb\u540c\u6d4e\u6559\u6750</li>
          <li><strong>\u6d88\u5316\uff0820 \u5206\u949f\uff09\uff1a</strong>\u5408\u4e0a\u4e66\u672c\uff0c\u5728\u8349\u7a3f\u7eb8\u4e0a\u590d\u73b0\u4eca\u65e5\u6d89\u53ca\u7684\u5b9a\u7406\u8bc1\u660e</li>
          <li><strong>\u8f93\u51fa\uff0830 \u5206\u949f\uff09\uff1a</strong>\u505a 5-8 \u9053\u8bfe\u540e\u4e60\u9898\uff0c\u91cd\u70b9\u7ec3\u4e60\u8bc1\u660e\u9898</li>
          <li><strong>\u590d\u76d8\uff085 \u5206\u949f\uff09\uff1a</strong>\u7528\u4e00\u53e5\u8bdd\u603b\u7ed3\u4eca\u5929\u5b66\u7684\u6838\u5fc3\u6982\u5ff5</li>
        </ul>
        <p style="margin-bottom:10px;"><strong>\u8bc1\u660e\u8981\u6c42\uff1a</strong></p>
        <p>\u4eca\u5929\u7684\u8bc1\u660e\u91cd\u70b9\u662f <strong>${task.proofFocus}</strong>\u3002\u5efa\u8bae\u51c6\u5907\u4e00\u5f20\u767d\u7eb8\uff0c\u4e0d\u770b\u4efb\u4f55\u8d44\u6599\uff0c\u5c1d\u8bd5\u72ec\u7acb\u5199\u51fa\u5b8c\u6574\u8bc1\u660e\u8fc7\u7a0b\u3002\u5361\u4f4f\u7684\u5730\u65b9\u7528\u94c5\u7b14\u6807\u8bb0\uff0c\u5bf9\u7167\u6559\u6750\u8865\u5168\u540e\u518d\u95ed\u5377\u91cd\u5199\u4e00\u904d\u3002</p>
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
  AudioSystem.playCheckin();
  celebrateCheckin();
  showToast('\u2705 \u6253\u5361\u6210\u529f\uff01\u7ee7\u7eed\u4fdd\u6301\uff01');
  renderAll();
}

function undoCheckin() {
  const todayStr = formatDate(new Date());
  delete appState.checkins[todayStr];
  saveState();
  AudioSystem.playWarning();
  showToast('\u6253\u5361\u5df2\u64a4\u9500');
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

    const statusLabels = { completed: '\u5df2\u5b8c\u6210', active: '\u8fdb\u884c\u4e2d', pending: '\u672a\u5f00\u59cb' };
    const statusClass = `phase-status ${status}`;

    html += `
      <div class="phase-card">
        <div class="phase-header" onclick="togglePhase(${idx})">
          <div class="phase-indicator" style="background:${phase.bgColor};color:${phase.color};border:1px solid ${phase.borderColor}">${idx + 1}</div>
          <div class="phase-info">
            <div class="phase-name" style="color:${phase.color}">${phase.name}</div>
            <div class="phase-subtitle">${phase.subtitle} \u00b7 ${phase.durationDays} \u5929</div>
          </div>
          <span class="${statusClass}">${statusLabels[status]}</span>
          <span class="phase-expand" id="expand-${idx}">\u25BC</span>
        </div>
        <div class="phase-body" id="phase-body-${idx}">
          <div class="phase-topics">
            ${phase.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
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
                    <h4>${task.title} ${isToday ? '<span style="color:' + phase.color + ';font-size:11px;">(\u4eca\u65e5)</span>' : ''}</h4>
                    <p>${task.content}</p>
                    ${task.proofFocus !== '\u65e0' ? `<p style="color:${phase.color};margin-top:4px;">&#x1F4DD; \u8bc1\u660e\uff1a${task.proofFocus}</p>` : ''}
                  </div>
                  <div class="task-arrow">&#x203A;</div>
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
  const monthNames = ['\u4e00\u6708','\u4e8c\u6708','\u4e09\u6708','\u56db\u6708','\u4e94\u6708','\u516d\u6708','\u4e03\u6708','\u516b\u6708','\u4e5d\u6708','\u5341\u6708','\u5341\u4e00\u6708','\u5341\u4e8c\u6708'];
  document.getElementById('calendar-month-year').textContent = `${year}\u5e74 ${monthNames[month]}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = document.getElementById('calendar-grid');

  let html = '';
  const weekDays = ['\u65e5','\u4e00','\u4e8c','\u4e09','\u56db','\u4e94','\u516d'];
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
    AudioSystem.playWarning();
    showToast('\u8fd8\u4e0d\u80fd\u6253\u5361\u672a\u6765\u7684\u65e5\u671f\u54e6');
    return;
  }
  if (dateObj < new Date(appState.startDate)) {
    AudioSystem.playWarning();
    showToast('\u6b64\u65e5\u671f\u5728\u5b66\u4e60\u5f00\u59cb\u4e4b\u524d');
    return;
  }

  if (appState.checkins[dateStr]) {
    delete appState.checkins[dateStr];
    AudioSystem.playWarning();
    showToast('\u5df2\u53d6\u6d88 ' + dateStr + ' \u7684\u6253\u5361');
  } else {
    appState.checkins[dateStr] = true;
    AudioSystem.playSuccess();
    showToast('\u2705 ' + dateStr + ' \u6253\u5361\u6210\u529f');
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
      showToast('\u8bbe\u7f6e\u5df2\u4fdd\u5b58');
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
    AudioSystem.playSuccess();
    showToast('\u6570\u636e\u5df2\u5bfc\u51fa');
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
          showToast('\u6570\u636e\u5df2\u5bfc\u5165');
          renderAll();
        } else {
          AudioSystem.playWarning();
          showToast('\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e');
        }
      } catch (err) {
        AudioSystem.playWarning();
        showToast('\u5bfc\u5165\u5931\u8d25\uff1a' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('\u786e\u5b9a\u8981\u6e05\u9664\u6240\u6709\u5b66\u4e60\u8bb0\u5f55\u5417\uff1f\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\u3002')) {
      appState = {
        startDate: formatDate(new Date()),
        dailyMinutes: 90,
        checkins: {},
        currentPhase: 0
      };
      saveState();
      AudioSystem.playWarning();
      showToast('\u6570\u636e\u5df2\u91cd\u7f6e');
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
    display.textContent = `${h}:${m}:${s}`;
  }

  startBtn.addEventListener('click', () => {
    if (!timerRunning) {
      timerRunning = true;
      startBtn.disabled = true;
      pauseBtn.disabled = false;
      AudioSystem.playTimerStart();
      timerInterval = setInterval(() => {
        timerSeconds++;
        updateDisplay();
      }, 1000);
      tickInterval = setInterval(() => {
        AudioSystem.playTick();
      }, 1000);
    }
  });

  pauseBtn.addEventListener('click', () => {
    if (timerRunning) {
      timerRunning = false;
      clearInterval(timerInterval);
      clearInterval(tickInterval);
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      startBtn.textContent = '\u7ee7\u7eed';
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
    startBtn.textContent = '\u5f00\u59cb';
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
        return `<a href="${link.url}" class="modal-link" target="_blank" rel="noopener">${link.name}</a>`;
      } else {
        return `<div class="modal-link modal-link-text">${link.name}</div>`;
      }
    }).join('');
  } else {
    linksSection.style.display = 'none';
    linksContainer.innerHTML = '';
  }

  if (data && data.exercises && data.exercises.length > 0) {
    exercisesSection.style.display = 'block';
    exercisesContainer.innerHTML = data.exercises.map((ex, idx) => `
      <div class="exercise-card">
        <div class="exercise-question">${escapeHtml(ex.question)}</div>
        <div class="exercise-answer-wrapper">
          <button class="btn-answer" onclick="toggleAnswer(this, ${idx})">
            <span>查看答案</span>
          </button>
          <div class="exercise-answer" id="ex-answer-${idx}">${escapeHtml(ex.answer)}</div>
        </div>
      </div>
    `).join('');
  } else {
    // Show generic hint
    const generic = getGenericExerciseHint(phaseIdx, dayIdx);
    exercisesSection.style.display = 'block';
    exercisesContainer.innerHTML = `
      <div class="exercise-hint">${escapeHtml(generic.hint)}</div>
    `;
  }
}

function toggleAnswer(btn, idx) {
  const answerEl = document.getElementById(`ex-answer-${idx}`);
  const span = btn.querySelector('span');
  if (answerEl.classList.contains('open')) {
    answerEl.classList.remove('open');
    span.textContent = '\u67e5\u770b\u7b54\u6848';
    btn.classList.remove('active');
  } else {
    answerEl.classList.add('open');
    span.textContent = '\u9690\u85cf\u7b54\u6848';
    btn.classList.add('active');
    AudioSystem.playClick();
  }
}

function toggleTodayAnswer(btn, idx) {
  const answerEl = document.getElementById(`today-ex-answer-${idx}`);
  const span = btn.querySelector('span');
  if (answerEl.classList.contains('open')) {
    answerEl.classList.remove('open');
    span.textContent = '\u67e5\u770b\u7b54\u6848';
    btn.classList.remove('active');
  } else {
    answerEl.classList.add('open');
    span.textContent = '\u9690\u85cf\u7b54\u6848';
    btn.classList.add('active');
    AudioSystem.playClick();
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

  document.getElementById('modal-phase').textContent = `${phase.name} \u00b7 \u7b2c ${dayIdx + 1} / ${phase.durationDays} \u5929 \u00b7 ${dateStr}`;
  document.getElementById('modal-title').textContent = task.title;
  document.getElementById('modal-content').textContent = task.content;
  document.getElementById('modal-resources').textContent = task.resources;

  const proofSection = document.getElementById('modal-proof-section');
  if (task.proofFocus && task.proofFocus !== '\u65e0') {
    proofSection.style.display = 'block';
    document.getElementById('modal-proof').textContent = task.proofFocus;
  } else {
    proofSection.style.display = 'none';
  }

  // Render links and exercises
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
    btn.textContent = '\u8fd8\u4e0d\u80fd\u6253\u5361\u672a\u6765\u65e5\u671f';
    btn.disabled = true;
    statusEl.textContent = '';
  } else if (isChecked) {
    btn.className = 'btn btn-secondary';
    btn.textContent = '\u53d6\u6d88\u5b8c\u6210';
    btn.disabled = false;
    statusEl.innerHTML = '<span style="color:var(--success);font-weight:500;">\u2705 \u5df2\u5b8c\u6210</span>';
  } else {
    btn.className = 'btn btn-primary';
    btn.textContent = '\u6807\u8bb0\u4e3a\u5df2\u5b8c\u6210';
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
    showToast('\u5df2\u53d6\u6d88\u5b8c\u6210');
  } else {
    appState.checkins[currentModalDateStr] = true;
    saveState();
    AudioSystem.playCheckin();
    celebrateCheckin();
    showToast('\u2705 \u6253\u5361\u6210\u529f\uff01\u7ee7\u7eed\u4fdd\u6301\uff01');
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

// ============================================================
// SUDOKU GAME ENGINE v2 - Advanced Edition
// ============================================================

const SudokuGame = {
  board: [],
  solution: [],
  initial: [],
  notes: [],
  history: [],
  selectedCell: null,
  difficulty: 'easy',
  timer: null,
  seconds: 0,
  errors: 0,
  hintsUsed: 0,
  noteMode: false,
  completed: false,
  paused: false,
  scanNumber: null, // number to highlight all occurrences of

  // ---- Persistence ----
  storageKey: 'sudokuGameState',

  saveGame() {
    const data = {
      board: this.board,
      solution: this.solution,
      initial: this.initial,
      notes: this.notes.map(row => row.map(set => Array.from(set))),
      history: this.history.map(h => ({...h, prevNotes: Array.from(h.prevNotes)})),
      difficulty: this.difficulty,
      seconds: this.seconds,
      errors: this.errors,
      hintsUsed: this.hintsUsed,
      completed: this.completed
    };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  },

  loadSavedGame() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (!saved) return false;
      const data = JSON.parse(saved);
      if (!data.board || !data.solution) return false;
      this.board = data.board;
      this.solution = data.solution;
      this.initial = data.initial;
      this.notes = data.notes.map(row => row.map(arr => new Set(arr)));
      this.history = data.history.map(h => ({...h, prevNotes: new Set(h.prevNotes)}));
      this.difficulty = data.difficulty || 'easy';
      this.seconds = data.seconds || 0;
      this.errors = data.errors || 0;
      this.hintsUsed = data.hintsUsed || 0;
      this.completed = data.completed || false;
      return true;
    } catch (e) {
      return false;
    }
  },

  clearSavedGame() {
    localStorage.removeItem(this.storageKey);
  },

  // ---- Sudoku Generator ----
  generate(difficulty) {
    this.difficulty = difficulty;
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

    // Generate a complete valid board
    const board = Array.from({length:9}, () => Array(9).fill(0));
    this.fillBoard(board);
    this.solution = board.map(r => [...r]);

    // Remove cells based on difficulty
    const removeCount = {easy: 35, medium: 45, hard: 55}[difficulty] || 35;
    this.board = board.map(r => [...r]);
    this.initial = Array.from({length:9}, () => Array(9).fill(true));

    const positions = [];
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        positions.push([r, c]);

    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    let removed = 0;
    for (const [r, c] of positions) {
      if (removed >= removeCount) break;
      this.board[r][c] = 0;
      this.initial[r][c] = false;
      removed++;
    }

    this.saveGame();
    this.render();
    this.renderNumpad();
    this.startTimer();
    this.updateRemaining();
  },

  fillBoard(board) {
    const empty = this.findEmpty(board);
    if (!empty) return true;
    const [row, col] = empty;
    const nums = this.shuffle([1,2,3,4,5,6,7,8,9]);
    for (const num of nums) {
      if (this.isValidPlacement(board, row, col, num)) {
        board[row][col] = num;
        if (this.fillBoard(board)) return true;
        board[row][col] = 0;
      }
    }
    return false;
  },

  findEmpty(board) {
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        if (board[r][c] === 0) return [r, c];
    return null;
  },

  isValidPlacement(board, row, col, num) {
    for (let c = 0; c < 9; c++)
      if (board[row][c] === num) return false;
    for (let r = 0; r < 9; r++)
      if (board[r][col] === num) return false;
    const br = Math.floor(row / 3) * 3;
    const bc = Math.floor(col / 3) * 3;
    for (let r = br; r < br + 3; r++)
      for (let c = bc; c < bc + 3; c++)
        if (board[r][c] === num) return false;
    return true;
  },

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // ---- Game Actions ----
  selectCell(row, col) {
    if (this.completed || this.paused) return;
    this.selectedCell = {row, col};
    this.scanNumber = null;
    this.render();
  },

  inputNumber(num) {
    if (!this.selectedCell || this.completed || this.paused) return;
    const {row, col} = this.selectedCell;
    if (this.initial[row][col]) return;

    if (this.noteMode) {
      const prev = new Set(this.notes[row][col]);
      if (this.notes[row][col].has(num)) {
        this.notes[row][col].delete(num);
      } else {
        this.notes[row][col].add(num);
      }
      this.board[row][col] = 0;
      this.history.push({type:'note', row, col, prevNotes: prev, prevVal: 0});
    } else {
      const prevVal = this.board[row][col];
      const prevNotes = new Set(this.notes[row][col]);
      this.history.push({type:'input', row, col, prevVal, prevNotes});
      this.board[row][col] = num;
      this.notes[row][col].clear();

      if (num !== this.solution[row][col]) {
        this.errors++;
        AudioSystem.playClick && AudioSystem.playClick();
      } else {
        this.removeRelatedNotes(row, col, num);
      }
    }

    this.saveGame();
    this.render();
    this.renderNumpad();
    this.updateRemaining();
    this.checkWin();
  },

  removeRelatedNotes(row, col, num) {
    for (let c = 0; c < 9; c++) this.notes[row][c].delete(num);
    for (let r = 0; r < 9; r++) this.notes[r][col].delete(num);
    const br = Math.floor(row / 3) * 3;
    const bc = Math.floor(col / 3) * 3;
    for (let r = br; r < br + 3; r++)
      for (let c = bc; c < bc + 3; c++)
        this.notes[r][c].delete(num);
  },

  clearCell() {
    if (!this.selectedCell || this.completed || this.paused) return;
    const {row, col} = this.selectedCell;
    if (this.initial[row][col]) return;
    const prevVal = this.board[row][col];
    const prevNotes = new Set(this.notes[row][col]);
    this.history.push({type:'clear', row, col, prevVal, prevNotes});
    this.board[row][col] = 0;
    this.notes[row][col].clear();
    this.saveGame();
    this.render();
    this.renderNumpad();
    this.updateRemaining();
  },

  undo() {
    if (this.history.length === 0 || this.completed || this.paused) return;
    const action = this.history.pop();
    const {row, col} = action;
    if (action.type === 'input' || action.type === 'clear') {
      this.board[row][col] = action.prevVal;
      this.notes[row][col] = action.prevNotes;
    } else if (action.type === 'note') {
      this.notes[row][col] = action.prevNotes;
    }
    this.saveGame();
    this.render();
    this.renderNumpad();
    this.updateRemaining();
  },

  giveHint() {
    if (this.completed || this.paused) return;
    const emptyCells = [];
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        if (this.board[r][c] === 0 || this.board[r][c] !== this.solution[r][c])
          emptyCells.push([r, c]);

    if (emptyCells.length === 0) return;
    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const prevVal = this.board[r][c];
    const prevNotes = new Set(this.notes[r][c]);
    this.history.push({type:'input', row: r, col: c, prevVal, prevNotes});
    this.board[r][c] = this.solution[r][c];
    this.notes[r][c].clear();
    this.removeRelatedNotes(r, c, this.solution[r][c]);
    this.hintsUsed++;
    this.selectedCell = {row: r, col: c};
    this.saveGame();
    this.render();
    this.renderNumpad();
    this.updateRemaining();
    this.checkWin();
  },

  checkBoard() {
    if (this.completed || this.paused) return;
    let wrongCount = 0;
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (this.board[r][c] !== 0 && this.board[r][c] !== this.solution[r][c]) {
          wrongCount++;
        }
      }
    }
    if (wrongCount === 0) {
      showToast('目前没有错误，继续加油！');
    } else {
      showToast(`发现 ${wrongCount} 个错误，仔细检查一下`);
    }
  },

  autoCandidates() {
    if (this.completed || this.paused) return;
    let added = 0;
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (this.board[r][c] !== 0) continue;
        for (let n = 1; n <= 9; n++) {
          if (this.isValidPlacement(this.board, r, c, n)) {
            if (!this.notes[r][c].has(n)) {
              this.notes[r][c].add(n);
              added++;
            }
          }
        }
      }
    }
    this.saveGame();
    this.render();
    showToast(added > 0 ? `已填充 ${added} 个候选数` : '没有新的候选数可填充');
  },

  scanForNumber(num) {
    if (this.completed || this.paused) return;
    this.scanNumber = num;
    this.selectedCell = null;
    this.render();
  },

  // ---- Pause ----
  togglePause() {
    if (this.completed) return;
    this.paused = !this.paused;
    const overlay = document.getElementById('sudoku-pause-overlay');
    const pauseBtn = document.getElementById('sudoku-pause');
    if (this.paused) {
      this.stopTimer();
      if (overlay) overlay.style.display = 'flex';
      if (pauseBtn) pauseBtn.textContent = '继续';
    } else {
      this.startTimer();
      this.hidePauseOverlay();
      if (pauseBtn) pauseBtn.textContent = '暂停';
    }
  },

  hidePauseOverlay() {
    const overlay = document.getElementById('sudoku-pause-overlay');
    if (overlay) overlay.style.display = 'none';
  },

  // ---- Win ----
  checkWin() {
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        if (this.board[r][c] !== this.solution[r][c]) return;
    this.completed = true;
    this.stopTimer();
    this.clearSavedGame();
    this.showWinModal();
    this.launchConfetti();
  },

  showWinModal() {
    const modal = document.getElementById('sudoku-win-modal');
    const statsEl = document.getElementById('sudoku-win-stats');
    if (!modal || !statsEl) return;
    const mins = Math.floor(this.seconds / 60);
    const secs = this.seconds % 60;
    const timeStr = mins > 0 ? `${mins}分${secs}秒` : `${secs}秒`;
    statsEl.innerHTML = `
      <div class="win-stat"><span class="win-stat-label">难度</span><span class="win-stat-value">${{easy:'简单',medium:'中等',hard:'困难'}[this.difficulty]}</span></div>
      <div class="win-stat"><span class="win-stat-label">用时</span><span class="win-stat-value">${timeStr}</span></div>
      <div class="win-stat"><span class="win-stat-label">错误</span><span class="win-stat-value">${this.errors}</span></div>
      <div class="win-stat"><span class="win-stat-label">提示</span><span class="win-stat-value">${this.hintsUsed}</span></div>
    `;
    modal.style.display = 'flex';
  },

  hideWinModal() {
    const modal = document.getElementById('sudoku-win-modal');
    if (modal) modal.style.display = 'none';
  },

  launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#165DFF', '#36D399', '#FF9F43', '#F87272', '#86909C', '#A855F7', '#06B6D4'];
    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 6,
        size: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        life: 1,
        decay: 0.005 + Math.random() * 0.01
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // gravity
        p.rotation += p.rotSpeed;
        p.life -= p.decay;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
      if (alive > 0) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(animate);
  },

  // ---- Timer ----
  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      if (this.paused || this.completed) return;
      this.seconds++;
      this.updateTimerDisplay();
    }, 1000);
  },

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  updateTimerDisplay() {
    const m = String(Math.floor(this.seconds / 60)).padStart(2, '0');
    const s = String(this.seconds % 60).padStart(2, '0');
    const el = document.getElementById('sudoku-timer');
    if (el) el.textContent = `${m}:${s}`;
  },

  updateRemaining() {
    let filled = 0;
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        if (this.board[r][c] !== 0) filled++;
    const el = document.getElementById('sudoku-remaining');
    if (el) el.textContent = 81 - filled;
  },

  // ---- Rendering ----
  render() {
    const boardEl = document.getElementById('sudoku-board');
    if (!boardEl) return;

    let html = '';
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = this.board[r][c];
        const isInitial = this.initial[r][c];
        const isSelected = this.selectedCell && this.selectedCell.row === r && this.selectedCell.col === c;
        const isRelated = this.selectedCell && (
          this.selectedCell.row === r ||
          this.selectedCell.col === c ||
          (Math.floor(this.selectedCell.row / 3) === Math.floor(r / 3) &&
           Math.floor(this.selectedCell.col / 3) === Math.floor(c / 3))
        );
        const isSameNum = val !== 0 && this.selectedCell && this.board[this.selectedCell.row][this.selectedCell.col] === val;
        const isWrong = val !== 0 && !isInitial && val !== this.solution[r][c];
        const isScanMatch = this.scanNumber !== null && val === this.scanNumber;
        const cellNotes = this.notes[r][c];

        let cls = 'sudoku-cell';
        if (isInitial) cls += ' given';
        if (isSelected) cls += ' selected';
        else if (isRelated) cls += ' related';
        if (isSameNum && !isSelected) cls += ' same-num';
        if (isScanMatch && !isSelected) cls += ' scan-match';
        if (isWrong) cls += ' wrong';
        if (c % 3 === 0 && c > 0) cls += ' box-left';
        if (r % 3 === 0 && r > 0) cls += ' box-top';

        let content = '';
        if (val !== 0) {
          content = `<span class="cell-value ${!isInitial && val === this.solution[r][c] ? 'pop-in' : ''}">${val}</span>`;
        } else if (cellNotes.size > 0) {
          content = '<div class="cell-notes">';
          for (let n = 1; n <= 9; n++) {
            content += `<span class="note-num">${cellNotes.has(n) ? n : ''}</span>`;
          }
          content += '</div>';
        }

        html += `<div class="${cls}" data-row="${r}" data-col="${c}">${content}</div>`;
      }
    }
    boardEl.innerHTML = html;

    // Update stats display
    const errorsEl = document.getElementById('sudoku-errors');
    if (errorsEl) errorsEl.textContent = this.errors;
    const hintsEl = document.getElementById('sudoku-hints-used');
    if (hintsEl) hintsEl.textContent = this.hintsUsed;

    const noteBtn = document.getElementById('sudoku-note-btn');
    if (noteBtn) {
      noteBtn.className = `btn btn-sm ${this.noteMode ? 'btn-primary' : 'btn-secondary'}`;
    }

    boardEl.querySelectorAll('.sudoku-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        this.selectCell(row, col);
      });
    });
  },

  renderNumpad() {
    const numpadEl = document.getElementById('sudoku-numpad');
    if (!numpadEl) return;
    let html = '';
    for (let n = 1; n <= 9; n++) {
      let count = 0;
      for (let r = 0; r < 9; r++)
        for (let c = 0; c < 9; c++)
          if (this.board[r][c] === n) count++;
      const remaining = 9 - count;
      const done = remaining <= 0;
      html += `<button class="numpad-btn ${done ? 'completed' : ''}" data-num="${n}">
        <span class="numpad-main">${n}</span>
        ${!done ? `<span class="numpad-count">${remaining}</span>` : ''}
      </button>`;
    }
    html += `<button class="numpad-btn numpad-delete" data-num="0"><span class="numpad-main">✕</span></button>`;
    numpadEl.innerHTML = html;

    numpadEl.querySelectorAll('.numpad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const num = parseInt(btn.dataset.num);
        if (num === 0) {
          this.clearCell();
        } else if (btn.classList.contains('completed')) {
          // Scan mode: highlight all occurrences of this number
          this.scanForNumber(num);
        } else {
          this.inputNumber(num);
        }
      });
    });
  }
};

// ---- Keyboard support for Sudoku ----
document.addEventListener('keydown', (e) => {
  if (!SudokuGame.selectedCell) return;
  if (SudokuGame.completed || SudokuGame.paused) return;
  // Only when on games page
  const gamesPage = document.getElementById('page-games');
  if (!gamesPage || !gamesPage.classList.contains('active')) return;

  const key = e.key;
  if (key >= '1' && key <= '9') {
    SudokuGame.inputNumber(parseInt(key));
  } else if (key === 'Backspace' || key === 'Delete') {
    SudokuGame.clearCell();
  } else if (key === 'z' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    SudokuGame.undo();
  } else if (key === 'n' || key === 'N') {
    SudokuGame.noteMode = !SudokuGame.noteMode;
    SudokuGame.render();
  } else if (key === 'ArrowUp' && SudokuGame.selectedCell.row > 0) {
    SudokuGame.selectCell(SudokuGame.selectedCell.row - 1, SudokuGame.selectedCell.col);
  } else if (key === 'ArrowDown' && SudokuGame.selectedCell.row < 8) {
    SudokuGame.selectCell(SudokuGame.selectedCell.row + 1, SudokuGame.selectedCell.col);
  } else if (key === 'ArrowLeft' && SudokuGame.selectedCell.col > 0) {
    SudokuGame.selectCell(SudokuGame.selectedCell.row, SudokuGame.selectedCell.col - 1);
  } else if (key === 'ArrowRight' && SudokuGame.selectedCell.col < 8) {
    SudokuGame.selectCell(SudokuGame.selectedCell.row, SudokuGame.selectedCell.col + 1);
  }
});

// ---- Games Page Render ----
function renderGames() {
  // Only render when games page is actually visible
  const gamesPage = document.getElementById('page-games');
  if (!gamesPage || !gamesPage.classList.contains('active')) return;

  // Init sudoku event listeners once
  if (!renderGames._initialized) {
    renderGames._initialized = true;

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
      const activeDiff = document.querySelector('.sudoku-difficulty .btn.active');
      const diff = activeDiff ? activeDiff.dataset.difficulty : 'easy';
      SudokuGame.generate(diff);
      SudokuGame.renderNumpad();
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

    // Pause / Resume
    const pauseBtn = document.getElementById('sudoku-pause');
    if (pauseBtn) pauseBtn.addEventListener('click', () => SudokuGame.togglePause());

    const resumeBtn = document.getElementById('sudoku-resume');
    if (resumeBtn) resumeBtn.addEventListener('click', () => SudokuGame.togglePause());

    // Auto candidates
    const autoBtn = document.getElementById('sudoku-auto');
    if (autoBtn) autoBtn.addEventListener('click', () => SudokuGame.autoCandidates());

    // Win modal
    const playAgainBtn = document.getElementById('sudoku-play-again');
    if (playAgainBtn) playAgainBtn.addEventListener('click', () => {
      SudokuGame.hideWinModal();
      const activeDiff = document.querySelector('.sudoku-difficulty .btn.active');
      const diff = activeDiff ? activeDiff.dataset.difficulty : 'easy';
      SudokuGame.generate(diff);
      SudokuGame.renderNumpad();
    });

    const winCloseBtn = document.getElementById('sudoku-win-close');
    if (winCloseBtn) winCloseBtn.addEventListener('click', () => {
      SudokuGame.hideWinModal();
    });
  }

  // Generate and render board only when page is visible
  const boardEl = document.getElementById('sudoku-board');
  if (boardEl && boardEl.children.length === 0) {
    // Try to restore a saved game first
    if (SudokuGame.loadSavedGame()) {
      SudokuGame.render();
      SudokuGame.renderNumpad();
      SudokuGame.updateRemaining();
      SudokuGame.updateTimerDisplay();
      SudokuGame.startTimer();
    } else {
      SudokuGame.generate('easy');
      SudokuGame.renderNumpad();
    }
  }
}

