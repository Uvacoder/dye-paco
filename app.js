const m = document.querySelector('.copy');
const list = [];
let index = 0;

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

const apply = (gradient) => {
  document.body.style.backgroundImage = gradient;
};

window.addEventListener('load', () => {
  const gradient = g();
  apply(gradient);
  list.push(gradient);
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    // Space
    const gradient = g();
    apply(gradient);
    list.push(gradient);
    index += 1;
  } else if (e.keyCode === 39) {
    // ->
    if (index < list.length - 1) {
      index += 1;
      apply(list[index]);
    }
  } else if (e.keyCode === 37) {
    // <-
    if (index > 0) {
      index -= 1;
      apply(list[index]);
    }
  } else if (e.keyCode === 67) {
    // c
    o();
  }
});


