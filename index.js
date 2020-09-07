window.onload = () => {
  const nav = document.getElementById('nav');
  const dropDowns = document.getElementsByClassName('about-skill');
  const navExpand = document.getElementById('nav-expand');
  const navClose = document.getElementById('nav-close');
  const navMobile = document.getElementById('nav--mobile');
  const mobileLinks = document.getElementsByClassName('mobile-link');
  const main = document.getElementById('main');
  const items = document.getElementsByClassName('item');
  const modal = document.getElementById('modal');
  const clickCatcher = document.getElementById('click-catcher');

  clickCatcher.addEventListener('click', e => {
    modal.classList.add('hide');
    main.classList.remove('blurred');
    clickCatcher.classList.add('hide');
  });

  const openModal = () => {
    modal.classList.remove('hide');
    clickCatcher.classList.remove('hide');
    main.classList.add('blurred');
  };

  window.document.addEventListener('scroll', e => {
    if (e.target.scrollingElement.scrollTop > 35) {
      nav.classList.add('shadow-1');
    } else {
      nav.classList.remove('shadow-1');
    }
  });
  document.querySelector('#null').checked = true;

  navExpand.addEventListener('click', () => {
    navMobile.classList.remove('hide');
    main.classList.add('blurred');
  });

  navClose.addEventListener('click', () => {
    navMobile.classList.add('hide');
    main.classList.remove('blurred');
  });

  Array.from(mobileLinks).forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.add('hide');
      main.classList.remove('blurred');
    });
  });

  Array.from(items).forEach(item => {
    item.addEventListener('click', () => {
      openModal();
    });
  });

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