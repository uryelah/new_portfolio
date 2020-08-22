window.onload = () => {
  const nav = document.getElementById('nav');

  window.document.addEventListener('scroll', e => {
    if (e.target.scrollingElement.scrollTop > 35) {
      nav.classList.add('shadow-1');
    } else {
      nav.classList.remove('shadow-1');
    }
  });
};