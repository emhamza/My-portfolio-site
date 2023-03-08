const allCards = () => {
  const card = projects.map(
    (item) => `<div class='mobile-popup-model'>
                  <div class='popup-2'>
                      <img ${item.featuredImageM}>
                      <img ${item.closeImage}>
                      <h3 class='popup-name'>${item.name}</h3>
                      <ul class='tech'>
                        <li>${item.technologies[0]}</li>
                        <li>${item.technologies[1]}</li>
                        <li>${item.technologies[2]}</li>
                      </ul>
                      <P Class='discription'>${item.discription}</p>
                      <div class='popup-buttons'>
                        <button href='${item.linkToLiveVersion}'></button>
                        <button href='${item.linkToSource}'></button>
                      </div>
                  </div>
                 </div>`,
  );
};

// ---------------------------------------------------------------

// append
// popupfunction
// const totalElement = document.qurrySelector('#total-element');
// const openPop = document.qurrySelectorAll('.open-popup');
// const popWindow = document.qurrySelectorAll('.mobile-popup-model');
// openPop.forEach((seeBtn, index) => {
//   seeBtn.addEventListener('click', () => {
//     popWindow.style.display = 'flex';
//     totalElement.classList.add('blur');
//     popWindow.innerHTML = `<div class='mobile-popup-model'>
//                             <div class='popup-2'>
//                                 <img ${projects.featuredImageM}>
//                                 <img id='close-button' ${projects.closeImage}>
//                                 <h3 class='popup-name'>${projects.name}</h3>
//                                 <ul class='tech'>
//                                   <li>${projects.technologies[0]}</li>
//                                   <li>${projects.technologies[1]}</li>
//                                   <li>${projects.technologies[2]}</li>
//                                 </ul>
//                                 <P Class='discription'>${projects.discription}</p>
//                                 <div class='popup-buttons'>
//                                   <button href='${projects.linkToLiveVersion}'></button>
//                                   <button href='${projects.linkToSource}'></button>
//                                 </div>
//                             </div>
//                           </div>
//     `;
//   });
// });

// document.body.appendChild(popWindow);

// popWindow.addEventListener('click', (e) => {
//   if (e.target.id === 'close-button'){
//     popWindow.style.display = 'none';
//     totalElement.classList.remove('blur');
//   }
// });

// const workCards = document.querySelector('.all-work-cards');

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

// --------------------------------------------------------
const projectCards = document.querySelector('.card-container');
const openBtn = document.querySelectorAll('.open-popup');
const popWindow = document.querySelector('.mobile-popup-model');
const myOverlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

projects.map((project) => {
  console.log(project);
  const div = document.createElement('div');
  div.className = 'work-card';

  div.innerHTML = `<div class='mobile-popup-model'>
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
  projectCards.appendChild(div);
});

openBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popWindow.classList.add('active');
    myOverlay.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  popWindow.classList.remove('active');
  myOverlay.classList.remove('active');
});