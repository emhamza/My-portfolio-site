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

// Projects detailes goes there

// const projects = [
// // project-card 1
//   {
//     id: 1,
//     title: 'Multi-Post Stories Gain+Glory',
//     name: 'Keeping track of hundreds of component',
//     technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
//     discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
//                   and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
//     featuredImageM: './portfolio-Img/mobile-popup.png',
//     closeImage: './portfolio-Img/Icon - Cancel.png',
//     linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
//     linkToSource: 'https://github.com/emhamza',
//   },
//   // project-card 2
//   {
//     id: 2,
//     title: 'Multi-Post Stories Gain+Glory',
//     name: 'Keeping track of hundreds of component',
//     technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
//     discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
//                   and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
//     featuredImageM: './portfolio-Img/mobile-popup.png',
//     closeImage: './portfolio-Img/Icon - Cancel.png',
//     linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
//     linkToSource: 'https://github.com/emhamza',
//   },
//   // project-card 3
//   {
//     id: 3,
//     title: 'Multi-Post Stories Gain+Glory',
//     name: 'Keeping track of hundreds of component',
//     technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
//     discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
//                   and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
//     featuredImageM: './portfolio-Img/mobile-popup.png',
//     closeImage: './portfolio-Img/Icon - Cancel.png',
//     linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
//     linkToSource: 'https://github.com/emhamza',
//   },
//   // project-card 4
//   {
//     id: 4,
//     title: 'Multi-Post Stories Gain+Glory',
//     name: 'Keeping track of hundreds of component',
//     technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
//     discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
//                   and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
//     featuredImageM: './portfolio-Img/mobile-popup.png',
//     closeImage: './portfolio-Img/Icon - Cancel.png',
//     linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
//     linkToSource: 'https://github.com/emhamza',
//   },
//   // project-card 5
//   {
//     id: 5,
//     title: 'Multi-Post Stories Gain+Glory',
//     name: 'Keeping track of hundreds of component',
//     technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
//     discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
//                   and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
//     featuredImageM: './portfolio-Img/mobile-popup.png',
//     closeImage: './portfolio-Img/Icon - Cancel.png',
//     linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
//     linkToSource: 'https://github.com/emhamza',
//   },
//   // project-card 6
//   {
//     id: 6,
//     title: 'Multi-Post Stories Gain+Glory',
//     name: 'Keeping track of hundreds of component',
//     technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
//     discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
//                   and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
//     featuredImageM: './portfolio-Img/mobile-popup.png',
//     closeImage: './portfolio-Img/Icon - Cancel.png',
//     linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
//     linkToSource: 'https://github.com/emhamza',
//   },
// ];

const allSixCards = document.getElementById('all-six-cards');

const cardData = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html']
  }
];

function display() {
  let displayCard = '';
  for(let i = 0; i < 6; i ++){
    displayCard += `<div class='project-card'>
                    <div class="project-title">
                      <h3>${cardData[0].title}</h3>
                    </div>
                    
                    <ul class="project-abilites">
                      <li class="a1">${cardData[0].technologies[0]}</li>
                      <li class="a1">${cardData[0].technologies[1]}</li>
                      <li class="a1">${cardData[0].technologies[2]}</li>
                      <li class="a1">${cardData[0].technologies[3]}</li>          
                    </ul>   
                    
                      <div class="b_div">
                        <button data-modal-target = '#modal' type="button" class="see-button open-popup">
                        See Project
                      </button>
                    </div>
                  </div>
    `;
  }
  allSixCards.innerHTML = displayCard;
}

display();

// desktop popup functions goes there-------------------------

const openDesktopPopUp = document.querySelectorAll('[data-modal-target]')
const closeDesktopPopUp = document.querySelectorAll('[data-button-close]')
const overlayTwo = document.getElementById('overlay2');

openDesktopPopUp.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal2Target)
    openModal(modal)
  })
})

closeDesktopPopUp.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.desktop-popup-model')
    closeModal(modal)
  })
})

function openModal(modal) {
  if(modal == null) return
  modal.classList.add('active')
  overlayTwo.classList.add('active')

}

function closeModal(modal) {
  if(modal == null) return
  modal.classList.remove('active')
  overlayTwo.classList.remove('active')
}

// ------------------------------------------------------------------------

const openMobilePopUp = document.querySelectorAll('[data-modal-target]')
const closeMobilePopUp = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openMobilePopUp.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeMobilePopUp.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.mobile-popup-model')
    closeModal(modal)
  })
})

function openModal(modal) {
  if(modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

}

function closeModal(modal) {
  if(modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}