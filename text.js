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
                 </div>`
    )}