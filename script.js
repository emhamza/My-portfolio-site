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

const allCards = () => {
  const card = projects.map(
    (item) => `
                <div class='card-container'>
                  <div class='project-card'>
                    <div class='card-title'><h3>${item.title}</h3></div>
                    <ul class='tech'>
                      <li>${item.technologies[0]}</li>
                      <li>${item.technologies[1]}</li>
                      <li>${item.technologies[2]}</li>
                      <li>${item.technologies[3]}</li>
                    </ul>
                    <div class="b_div">
                      <button data-modal-target="#modal-popup" class="see-button">
                        See Project
                      </button>
                    </div>
                  </div>    
                </div>
              `
  );
  return card;
};
// window.addEventListener('load', () => {
//   document.getElementsByClassName('card-container').innerHTML = cards().join('');
// });
// const popupWindow = document.getElementsByClassName('mobile-popup-model');
// const closePopup = () => {
//   popupWindow.innerHTML = '';
//   popupWindow.style.padding = '0';
//   document.getElementsByClassName('')

// }
// The mobile popup goes there

const openMobilePopUp = document.querySelectorAll('[data-modal-target]')
const closeMobilePopUp = document.querySelectorAll('[data-close-button]')

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
}

function closeModal(modal) {
  if(modal == null) return
  modal.classList.remove('active')
}