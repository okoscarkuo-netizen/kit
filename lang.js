(function () {
  function apply(lang) {
    document.querySelectorAll('[data-zh]').forEach(el => {
      el.textContent = lang === 'en' ? (el.dataset.en || el.dataset.zh) : el.dataset.zh;
    });
    document.querySelectorAll('[data-zh-placeholder]').forEach(el => {
      el.placeholder = lang === 'en' ? el.dataset.enPlaceholder : el.dataset.zhPlaceholder;
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';
    localStorage.setItem('kit-lang', lang);
    window._lang = lang;
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  window.getLang = () => window._lang || 'zh';
  window.t = (zh, en) => getLang() === 'en' ? en : zh;
  window.toggleLang = () => apply(getLang() === 'zh' ? 'en' : 'zh');

  const saved = localStorage.getItem('kit-lang') || 'zh';
  window._lang = saved;
  document.addEventListener('DOMContentLoaded', () => apply(saved));
})();
