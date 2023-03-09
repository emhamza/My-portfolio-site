const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

// Navbar functions end here -----------------------^

// PopScreens goes there------------------------------------->

const popWindow1 = document.getElementById('popup-window');

const popData = [
  {
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'Javascript'],
    technologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    image: '/portfolio-Img/mobile-popup.png',
    linkToLiveSource: '#',
    linkToSource: '#',
  },
];

function popDisplay() {
  const popScreen = `<div class="popup-2">
                    <img data-close-button class="desktop-close" src="./portfolio-Img/Disabled.png" alt="popup close icon">
                    <div class="mobile-popup-img">
                    <img src= ${popData[0].image} alt="cover-picture-for-mobile-popup" class="cover">
                    <img data-close-button class ="close" src="./portfolio-Img/Icon - Cancel.png" alt="popup close icon">
                    </div>
                    <div class="desktop-popup-buttons">
                        <button class="desk-btn-1">
                          <div class="popup-btn-text">${popData[0].btn1}</div>
                          <div class="popup-icons">
                            <img src="portfolio-Img/see live icon.png" alt="see-live-icon">
                          </div>
                        </button>
                        <button class="desk-btn-2">
                        <div class="popup-btn-text">${popData[0].btn2}</div>

                          <div class="popup-icons">
                            <img src="portfolio-Img/Icon -GitHub.png" alt="see-live-icon">
                          </div>
                        </button>
                      </div>
                    <div class="project-popup-title">
                    <h3>${popData[0].title}</h3>
                    <ul class="popup-project-abilites2">
                          <li class="a1">${popData[0].technologies2[0]}</li>
                          <li class="a1">${popData[0].technologies2[1]}</li>
                          <li class="a1">${popData[0].technologies2[2]}</li>
                          <li class="a1">${popData[0].technologies2[3]}</li>
                          <li class="a1">${popData[0].technologies2[4]}</li>
                          <li class="a1">${popData[0].technologies2[5]}</li>
                      </ul>

                    <ul class="popup-project-abilites">
                        <li class="a1">${popData[0].technologies[0]}</li>
                        <li class="a1">${popData[0].technologies[1]}</li>
                        <li class="a1">${popData[0].technologies[2]}</li>
                    </ul> 
                    </div>
                    
                    <p class="mobile-popup-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem 
                        Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it 1960s with the relea
                    </p>
                    <div class="mobile-popup-buttons">
                    <a href=${popData[0].linkToLiveSource}>
                    <button class="btn">
                        <div class="popup-btn-text">${popData[0].btn1}</div>
                        <div class="popup-icons">
                        <img src="portfolio-Img/see live icon.png" alt="see-live-icon">
                        </div>
                    </button>
                    </a>
                    <a href=${popData[0].linkToSource}>
                    <button class="btn">
                        <div class="popup-btn-text">${popData[0].btn2}</div>
                        <div class="popup-icons">
                        <img src="portfolio-Img/Icon -GitHub.png" alt="see-live-icon">
                        </div>
                    </button>
                    </a>
                    </div>
                </div>`;

  popWindow1.innerHTML = popScreen;
}

popDisplay();

// all main cards goes there------------------------------------------------>

const allSixCards = document.getElementById('all-six-cards');

const cardData = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  },
  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  },

];

function display() {
  let displayCard = '';
  for (let i = 0; i < 6; i += 1) {
    displayCard += `<div class='project-card'>
                    <div class="project-title">
                      <h3>${cardData[i].title}</h3>
                    </div>
                    
                    <ul class="project-abilites">
                      <li class="a1">${cardData[i].technologies[0]}</li>
                      <li class="a1">${cardData[i].technologies[1]}</li>
                      <li class="a1">${cardData[i].technologies[2]}</li>
                      <li class="a1">${cardData[i].technologies[3]}</li>          
                    </ul>   
                    
                      <div class="b_div">
                        <button data-modal-target = '.modal' type="button" class="see-button open-popup">
                        See Project
                      </button>
                    </div>
                  </div>
    `;
  }
  allSixCards.innerHTML = displayCard;
}

display();

const openMobilePopUp = document.querySelectorAll('[data-modal-target]');
const closeMobilePopUp = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

openMobilePopUp.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

closeMobilePopUp.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.mobile-popup-model');
    closeModal(modal);
  });
});