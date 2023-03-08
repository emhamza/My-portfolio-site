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

let projects= [
// project-card 1
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of component',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImageM: './portfolio-Img/mobile-popup.png',
    closeImage: './portfolio-Img/Icon - Cancel.png',
    linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
    linkToSource: 'https://github.com/emhamza'
  },
  // project-card 2
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of component',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImageM: './portfolio-Img/mobile-popup.png',
    closeImage: './portfolio-Img/Icon - Cancel.png',
    linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
    linkToSource: 'https://github.com/emhamza'
  },
  // project-card 3
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of component',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImageM: './portfolio-Img/mobile-popup.png',
    closeImage: './portfolio-Img/Icon - Cancel.png',
    linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
    linkToSource: 'https://github.com/emhamza'
  },
  // project-card 4
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of component',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImageM: './portfolio-Img/mobile-popup.png',
    closeImage: './portfolio-Img/Icon - Cancel.png',
    linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
    linkToSource: 'https://github.com/emhamza'
  },
  // project-card 5
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of component',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImageM: './portfolio-Img/mobile-popup.png',
    closeImage: './portfolio-Img/Icon - Cancel.png',
    linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
    linkToSource: 'https://github.com/emhamza'
  },
  // project-card 6
  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of component',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    discription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImageM: './portfolio-Img/mobile-popup.png',
    closeImage: './portfolio-Img/Icon - Cancel.png',
    linkToLiveVersion: 'https://emhamza.github.io/My-portfolio-site/',
    linkToSource: 'https://github.com/emhamza'
  },
];

// append
// popupfunction
// const totalElement = document.qurrySelector('#total-element');
const openPop = document.qurrySelectorAll('.open-popup');
const popWindow = document.qurrySelectorAll('.mobile-popup-model');
openPop.forEach((seeBtn, index) => {
  seeBtn.addEventListener('click', () => {
    popWindow.style.display = 'flex';
    totalElement.classList.add('blur');
    popWindow.innerHTML = `<div class='mobile-popup-model'>
                            <div class='popup-2'>
                                <img ${projects.featuredImageM}>
                                <img id='close-button' ${projects.closeImage}>
                                <h3 class='popup-name'>${projects.name}</h3>
                                <ul class='tech'>
                                  <li>${projects.technologies[0]}</li>
                                  <li>${projects.technologies[1]}</li>
                                  <li>${projects.technologies[2]}</li>
                                </ul>
                                <P Class='discription'>${projects.discription}</p>
                                <div class='popup-buttons'>
                                  <button href='${projects.linkToLiveVersion}'></button>
                                  <button href='${projects.linkToSource}'></button>
                                </div>
                            </div>
                          </div>
    `;
  });
});

document.body.appendChild(popWindow);

popWindow.addEventListener('click', (e) => {
  if (e.target.id === 'close-button'){
    popWindow.style.display = 'none';
    totalElement.classList.remove('blur');
  }
});

const workCards = document.querySelector('.all-work-cards');


// closeMobilePopUp.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.mobile-popup-model')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if(modal == null) return
//   modal.classList.add('active')
// }

// function closeModal(modal) {
//   if(modal == null) return
//   modal.classList.remove('active')
// }
// The desktop popup goes there



// const openDesktopPopUp = document.querySelectorAll('[data-modal-target]')
// const closeDesktopPopUp = document.querySelectorAll('[data-close-button]')

// openDesktopPopUp.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// closeDesktopPopUp.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.desktop-popup-model')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if(modal == null) return
//   modal.classList.add('active')
// }

// function closeModal(modal) {
//   if(modal == null) return
//   modal.classList.remove('active')
// }