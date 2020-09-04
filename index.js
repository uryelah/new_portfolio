window.onload = () => {
  const nav = document.getElementById('nav');
  const dropDowns = document.getElementsByClassName('about-skill');

  window.document.addEventListener('scroll', e => {
    if (e.target.scrollingElement.scrollTop > 35) {
      nav.classList.add('shadow-1');
    } else {
      nav.classList.remove('shadow-1');
    }
  });
  document.querySelector('#null').checked = true;

  Array.from(dropDowns).forEach(drop => {
    drop.addEventListener('click', () => {
      let dropInput = document.getElementById(drop.attributes.for.nodeValue);
      if (dropInput.checked) {
        setTimeout(() => {
          document.querySelector('#null').click();
        })
      }
    });
  });
};