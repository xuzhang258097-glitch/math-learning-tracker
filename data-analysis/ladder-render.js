// ============================================================
// 阶梯式递进学习体系 - 渲染引擎
// ============================================================

const DIFF_MAP = {
  'stat': 'beginner', 'process': 'beginner', 'excel': 'beginner',
  'sql': 'beginner', 'pyr': 'beginner', 'viz': 'beginner',
};

function getDifficulty(pageId) {
  if (pageId.includes('intermediate')) return 'intermediate';
  if (pageId.includes('advanced')) return 'advanced';
  return 'beginner';
}

function getDifficultyLabel(diff) {
  const map = { beginner: '入门', intermediate: '进阶', advanced: '高阶' };
  return map[diff] || diff;
}

function renderPage(pageId) {
  const container = document.getElementById('page-content');
  if (!container) return;

  const data = LADDER_DATA[pageId];
  if (!data) {
    container.innerHTML = '<div class="page-title">页面未找到</div><p>请检查数据配置</p>';
    return;
  }

  const diff = getDifficulty(pageId);
  const diffLabel = getDifficultyLabel(diff);

  let html = '';
  html += '<div class="page active" style="display:block;">';
  html += '<div class="page-title">' + escHtml(data.title) + '</div>';
  html += '<div class="page-subtitle">阶梯式递进学习 · ' + diffLabel + '阶段</div>';
  html += '<div class="learning-ladder">';

  data.modules.forEach(function(mod, idx) {
    const stepNum = idx + 1;
    html += '<div class="ladder-module">';
    html += '  <div class="ladder-module-header" onclick="toggleModule(this)">';
    html += '    <div class="ladder-step-badge">' + stepNum + '</div>';
    html += '    <div class="ladder-module-info">';
    html += '      <div class="ladder-module-title">' + escHtml(mod.title) + '</div>';
    html += '      <div class="ladder-module-desc">' + mod.items.length + ' 个知识点 · ' + mod.resources.length + ' 份资料 · ' + mod.exercises.length + ' 道练习</div>';
    html += '    </div>';
    html += '    <span class="ladder-diff-badge ' + diff + '">' + diffLabel + '</span>';
    html += '    <span class="ladder-expand-icon">▼</span>';
    html += '  </div>';
    html += '  <div class="ladder-module-body">';

    // Knowledge items
    html += '    <div class="ladder-section">';
    html += '      <div class="ladder-section-title"><span class="sec-icon">📖</span>核心知识点</div>';
    html += '      <ul class="ladder-knowledge-list">';
    mod.items.forEach(function(item) {
      html += '        <li>' + escHtml(item) + '</li>';
    });
    html += '      </ul>';
    html += '    </div>';

    // Bound resources
    if (mod.resources && mod.resources.length > 0) {
      html += '    <div class="ladder-section">';
      html += '      <div class="ladder-section-title"><span class="sec-icon">📚</span>配套学习资料</div>';
      html += '      <div class="ladder-resource-chips">';
      mod.resources.forEach(function(r) {
        const iconMap = { '视频': '🎬', '书籍': '📕', '在线课程': '🌐', '文章': '📄', '在线工具': '🛠️', '文档': '📋' };
        const icon = iconMap[r.tag] || '🔗';
        html += '        <a class="ladder-resource-chip" href="' + escHtml(r.url) + '" target="_blank" rel="noopener">';
        html += '          <span class="chip-icon">' + icon + '</span>';
        html += '          <span><strong>' + escHtml(r.name) + '</strong><br><small style="color:#9B97B3">' + escHtml(r.desc) + '</small></span>';
        html += '          <span style="font-size:10px;color:var(--text-muted);background:rgba(107,124,255,0.06);padding:2px 8px;border-radius:99px;">' + escHtml(r.tag) + '</span>';
        html += '        </a>';
      });
      html += '      </div>';
      html += '    </div>';
    }

    // Bound exercises
    if (mod.exercises && mod.exercises.length > 0) {
      html += '    <div class="ladder-section">';
      html += '      <div class="ladder-section-title"><span class="sec-icon">✏️</span>专属练习</div>';
      mod.exercises.forEach(function(ex, exIdx) {
        const exNum = (idx * mod.exercises.length + exIdx + 1);
        html += '      <div class="ladder-exercise-item">';
        html += '        <div class="ladder-exercise-q">';
        html += '          <span class="ladder-exercise-num">' + exNum + '</span>';
        html += '          ' + escHtml(ex.q);
        html += '        </div>';
        if (ex.a) {
          html += '        <button class="ladder-answer-toggle" onclick="toggleLadderAnswer(this)">查看答案</button>';
          html += '        <div class="ladder-answer-body">' + ex.a + '</div>';
        }
        html += '      </div>';
      });
      html += '    </div>';
    }

    html += '  </div>';
    html += '</div>';
  });

  html += '</div>';
  html += '</div>';

  container.innerHTML = html;
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleModule(header) {
  const module = header.parentElement;
  module.classList.toggle('expanded');
}

function toggleLadderAnswer(btn) {
  const answer = btn.nextElementSibling;
  if (answer.classList.contains('open')) {
    answer.classList.remove('open');
    btn.textContent = '查看答案';
    btn.classList.remove('active');
  } else {
    answer.classList.add('open');
    btn.textContent = '收起答案';
    btn.classList.add('active');
  }
}

function escHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Override showPage to use ladder render
const _originalShowPage = showPage;
showPage = function(pageId) {
  // Update sidebar
  document.querySelectorAll('.nav-child-item').forEach(function(item) {
    item.classList.remove('active');
    if (item.dataset.page === pageId) {
      item.classList.add('active');
      var parent = item.parentElement;
      while (parent) {
        if (parent.classList.contains('nav-group-children')) {
          parent.classList.add('open');
          var header = parent.previousElementSibling;
          if (header && header.classList.contains('nav-group-header')) {
            header.classList.add('expanded');
          }
        }
        parent = parent.parentElement;
      }
    }
  });

  // Update mobile nav
  document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
    link.classList.remove('active');
    // Map pageId to category for mobile nav highlighting
    var cat = pageId.split('-')[0];
    var linkPage = link.getAttribute('onclick') || '';
    if (linkPage.indexOf(cat) >= 0) {
      link.classList.add('active');
    }
  });

  renderPage(pageId);
};

// Init: render the default page on load
document.addEventListener('DOMContentLoaded', function() {
  var activeItem = document.querySelector('.nav-child-item.active');
  var defaultPage = activeItem ? activeItem.dataset.page : 'stat-beginner';
  renderPage(defaultPage);
});
