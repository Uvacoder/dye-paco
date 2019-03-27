/* global document, window */

const m = document.querySelector('.copy');
const copyToClipboard = (str) => {
  const e = document.createElement('textarea');
  e.value = str;
  e.setAttribute('readonly', '');
  e.style.position = 'absolute';
  e.style.left = '-9999px';
  document.body.appendChild(e);
  e.select();
  document.execCommand('copy');
  document.body.removeChild(e);
};

const o = () => {
  copyToClipboard(document.body.style.backgroundImage);
  m.classList.add('v');
  setTimeout(() => {
    m.classList.remove('v');
  }, 3000);
};

window.addEventListener('keydown', (e) => { if (e.keyCode === 67) o(); });
