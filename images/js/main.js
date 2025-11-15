// /js/main.js
console.log('main.js loaded');

// Dark mode
const KEY = 'ds-theme-mode';
const toggle = document.getElementById('themeToggle');
const apply = (mode) => {
  document.documentElement.classList.toggle('dark', mode === 'dark');
  if (toggle) toggle.textContent = mode === 'dark' ? '☀️ Light' : '🌙 Dark';
};
let mode = localStorage.getItem(KEY) || 'light';
apply(mode);
toggle?.addEventListener('click', () => {
  mode = (mode === 'dark') ? 'light' : 'dark';
  localStorage.setItem(KEY, mode);
  apply(mode);
});
