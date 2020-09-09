const ProjectsContent = {
  aoKanji: {
    title: 'Ao Kanji',
    subtitle: ['Microverse', 'React', 2020],
    img: './imgs/aokanji.gif',
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
    img: './imgs/02.jpg',
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
  depths: {
    title: 'Circle',
    subtitle: ['Microverse', 'Phaser3', 2020],
    img: './imgs/03.png',
    body: `<div class="modal-body"><p>
    A Phaser3 game with stored score data with Leaderboard API service and original assets that let users play as a tentacle sea creature and shoot/squeeze divers. 
    <br/>
    <p>
    In this project, I implemented a game with projectiles coming both from and towards the player, player sprite movement, enemy 'downward' movement, and collisions, with an oceanic theme.</p>
    <p><strong>About the Game</strong></p>
    <p>
    From the depths consists of a shooter game with the twist that it happens under the sea instead of the in space.
</p><p>
    You control an ancient, squid-like, sea creature that has their domains invaded by humans, much to its demise.
    </p><p>
    The game's object is to get points from eliminating the humans and its machines, while keeping your hp, or health points, above zero.
    </p><p>
    All the art feature in this game is original if not indicated otherwise at the Attributions section.
</p>
<p><strong>Features</strong></p>
<ul>
<li>
<p>
Shoot stuff!</p>
</li>
<li>
<p>
Eat fish!</p>
</li>
<li>
<p>
Squeeze humans slowly to their death!</p>
</li>
<li>
<p>
Battle a submarine!</p>
</li>
<li>
<p>Wiggle a tentacle around</p>
</li>
<li>
<p>Check if your score at the top of the LeaderBoard!</p>
</li>
</ul>
</div>
`,
  stack: ['Phaser3', 'JavaScript', 'Webpack'],
  live: 'https://depths.web.app/',
  repo: 'https://github.com/uryelah/from-the-depths',
  },
  eggo: {
    title: 'Lo Eggo',
    subtitle: ['Microverse', 'JavaScript', 2020],
    img: './imgs/04.jpg',
    body: `<div class="modal-body"><p>
    A breakfast restaurant page with client-side which allows users to toggle between the restaurant about page, menu, and contact information.
    <br/>
    <p><strong>About the Project</strong></p>
    <p>
    This project is a dynamically rendered restaurant page. Each tab('home', 'contact', 'about', 'menu') is in its own javascript file at /src and imported to index.js to be rendered when a nav link is clicked. The adding and removing HTML from the page, as well as the entering and leaving CSS animation, are handled by the page factory methods from where each page is made.
    </p>
<p><strong>Features</strong></p>
<ul>
<li>
<p>
Neumorphic design</p>
</p>
</li>
<li>
<p>
Pure CSS animation and interactions</p>
</li>
<li>
<p>
Client side pagination</p>
</li>
</ul>
</div>`,
  stack: ['JavaScript', 'Webpack'],
  live: 'https://uryelah.github.io/Microverse-603-restaurant-page/#',
  repo: 'https://github.com/uryelah/Microverse-603-restaurant-page',
  },
  tic: {
    title: 'Tic-tac-toe',
    subtitle: ['Ruby', 'JavaScript', 2020],
    img: './imgs/05.png',
    body: `<div class="modal-body"><p>
    A ruby version of the traditional Tic Tac Toe that let's two players have matches via terminal commands. 
    <br/>
    <p><strong>About the Game</strong></p>
    <p>
    Tic-tac-toe (American English), noughts and crosses (British English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.
    </p>
<p><strong>Features</strong></p>
<ul>
<li>
<p>
100% terminal game play</p>
</p>
</li>
<li>
<p>
Score keeping</p>
</li>
<li>
<p>
Multiple rounds game</p>
</li>
<li>
<p>
Two player support
</p>
</li>
</ul>
</div>`,
  stack: ['Ruby'],
  repo: 'https://github.com/uryelah/tic-tac-toe-game',
  },
  flag: {
    title: 'Where in the world?',
    subtitle: ['Project', 'React', 2020],
    img: './imgs/06.png',
    body: `<div class="modal-body"><p>
    This project is a simple SPA country database made with the data from REST Countries API.
    <br/>
    <p><strong>About the Project</strong></p>
    <p>
    It was made mainly with React, Material UI, and Redux, and deployed with Firebase. You can use any JavaScript framework/library on the front-end such as React.
    </p>
<p><strong>Features</strong></p>
<ul>
<li>
<p>
See all countries from the API on the homepage</p>
</p>
</li>
<li>
<p>
Search for a country using an <em>input</em> field</p>
</li>
<li>
<p>
Filter countries by region</p>
</li>
<li>
<p>
Click on a country to see more detailed information on a separate page
</p>
</li>
<li>
<p>
Click through to the border countries on the detail page
</p>
</li>
<li>
<p>
Toggle the color scheme between light and dark mode
</p>
</li>
</ul>
</div>`,
  stack: ['React', 'Material UI'],
  repo: 'https://github.com/uryelah/country-flags',
  live: 'https://countries-db.web.app/',
  },
};

window.onload = () => {
  const nav = document.getElementById('nav');
  const dropDowns = document.getElementsByClassName('about-skill');
  const navExpand = document.getElementById('nav-expand');
  const navClose = document.getElementById('nav-close');
  const navMobile = document.getElementById('nav--mobile');
  const mobileLinks = document.getElementsByClassName('mobile-link');
  const backBtn = document.getElementById('back');
  const main = document.getElementById('main');
  const items = document.getElementsByClassName('item');
  const readMoreBtn = document.getElementsByClassName('more');
  const modal = document.getElementById('modal');
  const clickCatcher = document.getElementById('click-catcher');
  const closeIco = document.getElementById('close-ico');

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

  backBtn.addEventListener('click', e => {
    modal.classList.add('hide');
    main.classList.remove('blurred');
    clickCatcher.classList.add('hide');
  });

  closeIco.addEventListener('click', e => {
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

  Array.from(readMoreBtn).forEach(item => {
    item.addEventListener('click', () => {
      // change content of modal
      modalTitle.innerText = ProjectsContent[item.dataset.item].title;
      Array.from(modalSubtitle.children).forEach((sub, i) => {
        sub.innerText = ProjectsContent[item.dataset.item].subtitle[i];
      });
      modalImg.src = ProjectsContent[item.dataset.item].img;
      modalDesc.innerHTML = ProjectsContent[item.dataset.item].body;
      Array.from(modalStack.children).forEach((sub, i) => {
        sub.classList.remove('hide');

        if (!ProjectsContent[item.dataset.item].stack[i]) {
          sub.classList.add('hide');
        } else {
          sub.innerText = ProjectsContent[item.dataset.item].stack[i];
        }
      });

      if (ProjectsContent[item.dataset.item].live) {
        modalLive.classList.remove('hide');
        modalLive.href = ProjectsContent[item.dataset.item].live;
      } else {
        modalLive.classList.add('hide');
      }
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