const ProjectsContent = {
  aoKanji: {
    title: 'Ao Kanji',
    subtitle: ['Microverse', 'React', 2020],
    img: './imgs/01.png',
    body: `<div class="modal-body"><p>
    A Kanji mobile-first study catalog web-app that, by consuming the Japanse kanji API, enables students to select groups of Kanji by grade or work book lists and access their readings, stroke order, and pronunciation. 
    </p>
    <hr/>
    <p><strong>Ao Kanji</strong> consists of a single page web app for browsing, searching, and studying Japanese Kanji.</p>
    <blockquote>
<p>Kanji (漢字, pronounced [kaɲdʑi]) are the adopted logographic Chinese characters that are used in the Japanese writing system. They are used alongside the Japanese syllabic scripts hiragana and katakana.</p>
</blockquote>
<p><em><a href="/uryelah/ao-kanji/blob/development/Kanji">From wikipedia</a></em></p>
<p>For this project I chose a free API that serves kanji lists and details, including examples of usage and pronunciation, in the app, it's possible to browse a pre-defined list of kanjis or do you own search based on a Latin alphabet word.</p>
<p><strong>Features</strong></p>
<ul>
<li>
<p>Loading visual feedback between data fetch requests</p>
</li>
<li>
<p>Fetching kanji lists from different API endpoints</p>
</li>
<li>
<p>"Back" button at the navbar to browse through past searches</p>
</li>
<li>
<p>Mobile-first design</p>
</li>
<li>
<p>Animate examples for the kanji stroke order</p>
</li>
<li>
<p>Audio examples for kanji pronunciation</p>
</li>
<li>
<p>Kun and On readings</p>
</li>
<li>
<p>Kanji English translation</p>
</li>
<li>
<p>Centralized state for fetched kanji data</p>
</li>
<li>
<p>Centralized state for kanji list sorting and filtering</p>
</li>
<li>
<p>Unique client-side routes</p>
</li>
<li>
<p>Use of React hooks</p>
</li>
<li>
<p>Use of CSS modules and BEM</p>
</li>
</ul>
</div>
`,
  stack: ['React', 'Redux', 'Webpack'],
  live: 'https://uryelah.github.io/ao-kanji/',
  repo: 'https://github.com/uryelah/ao-kanji',
  },
  circle: {
    title: 'Circle',
    subtitle: ['Microverse', 'Rails & React', 2020],
    img: './imgs/02.png',
    body: `<div class="modal-body"><p>
    A mobile-first SPA Rails and React web-app for remote meetups that let users create, favorite, and browse a catalog of meetings and groups. The API was built with Rails and the client with React and Redux.     </p>
    <br/>
    <p>This project is a SPA remote groups and meetups application with a Rails API and React client. An user can create a meetup group, schedule the frequency of the meetings, and the attendee limit per meeting. They can also browse all the groups, favorite them, and choose to join a group and, upon approval, join a meeting.</p>

<p><strong>Features</strong></p>
<ul>
<li>
<p>
Client-side routing
</p>
</li>
<li>
<p>
Rails API
</p>
</li>
<li>
<p>
Favorites page
</p>
</li>
<li>
<p>
Token-based authentication and athorizations
</p>
</li>
<li>
<p>Unit and integration testing</p>
</li>
</ul>
</div>
`,
  stack: ['Rails', 'React', 'Redux'],
  live: 'https://hosting-test-29639.firebaseapp.com/',
  repo: 'https://github.com/uryelah/rails-react-capstone-project',
  },
};

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

  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalStack = document.getElementById('modal-stack');
  const modalLive = document.getElementById('modal-live');
  const modalRepo = document.getElementById('modal-repo');

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
      // change content of modal
      modalTitle.innerText = ProjectsContent[item.dataset.item].title;
      Array.from(modalSubtitle.children).forEach((sub, i) => {
        sub.innerText = ProjectsContent[item.dataset.item].subtitle[i];
      });
      modalImg.src = ProjectsContent[item.dataset.item].img;
      modalDesc.innerHTML = ProjectsContent[item.dataset.item].body;
      Array.from(modalStack.children).forEach((sub, i) => {
        sub.innerText = ProjectsContent[item.dataset.item].stack[i];
      });
      modalLive.href = ProjectsContent[item.dataset.item].live;
      modalRepo.href = ProjectsContent[item.dataset.item].repo;
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