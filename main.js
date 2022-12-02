'use script';

const featuredSpeakers = document.querySelector('.featuredSpeakers')

//Array of featured speakers:

const spk = [
  {
    name: 'Dr. Thomas Davies',
    picture: 'Images/chairman akc.jpg',
    proffession: 'Chairman American Kennel Club',
    resume: 'Dr. Thomas is a vet and an animal rights activist',
  },
  {
    name: 'Gina M. DiNardo',
    picture: 'Images/akc gina.jpg',
    proffession: 'Executive Secretary AKC',
    resume: 'Gina is a researcher and dog breeder',
  },
  {
    name: 'Lucas Jacobs',
    picture: 'Images/akc board member.jpg',
    proffession: 'Top dog researcher and breeder',
    resume: 'Lucas is a renowned researcher and dog breeder',
  },
  {
    name: 'Dr Fred Johnson',
    picture: 'Images/akc davies.jpg',
    proffession: 'Veterinary doctor and dog rights activist',
    resume: 'Dr Fred is a dog rights activist and a dog therapist',
  },
  {
    name: 'Bruce Wayne',
    picture: 'Images/akc jack.jpg',
    proffession: 'Dog trainer and kennel owner',
    resume: 'Bruce is a proffessional dog trainer and breeder',
  },
  {
    name: 'Leonard Peckham',
    picture: 'Images/akc junior.jpg',
    proffession: 'Animal research scientist',
    resume: 'Leonard is a top dog research scientist and dog lover',
  },
];

// display featured speakers
const desktop = window.matchMedia('(max-width:767px)');

// featured speaker section

const displaySpeakers = function (n) {
  let html = '';
  for (let i = 0; i < n; i += 1) {
    html += `
    <div class=spk>
    <div class=image>
    <img class="image" src="${spk[i].picture}">
    </div>
    <div class="spkinfo">
      <h6 class="fullname">${spk[i].name}</h6>
      <i class="proffession">${spk[i].proffession}</i>
      <div class="bar-3"></div>
      <p class="resume">${spk[i].resume}</p>
    </div>
    </div>`;
  }
  featuredSpeakers.innerHTML = html;
};

const loading = function () {
  if (!desktop.matches) {
    displaySpeakers(spk.length)
  } else {
    displaySpeakers(2);
  }
};
window.addEventListener('load', () => {
  loading();
});
window.addEventListener('resize', () => {
  loading();
});

//for menutray

const btnClose = document.querySelector('.close-btn');
const menuTray = document.querySelector('.menuBars');
const menuList = document.querySelector('.menuList');
const menuContainer = document.querySelector('.menucontainer');
const linkSection = document.querySelector('.menu-link');

const openBtn = function () {
  menuContainer.style.display = 'flex';
};
menuTray.addEventListener('click', openBtn);

const closeBtn = function () {
  menuContainer.style.display = 'none';
};

btnClose.addEventListener('click', closeBtn);
menuList.addEventListener('click', closeBtn);



