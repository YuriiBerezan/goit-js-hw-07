import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
  galleryList: document.querySelector('.gallery'), //общий родитель картинок
  };

// // Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryMarkup = createGallerymarkup(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup )
// console.log(createGallerymarkup(galleryItems))

// refs.galleryList.addEventListener('click', onGalleryClick)

function createGallerymarkup(el) {
  // el.prventDefault();
    return el.map(({preview, original, description}) => {
        return `
          <div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join(' ');        
}


refs.galleryList.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  window.addEventListener('keydown', onEscKeyPress);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault(); //отмена перехода по ссылке

const instance = basicLightbox.create(`
  <img class="lightbox__image" src="${evt.target.dataset.source}" alt="${evt.target.alt}" />
          
`)
instance.show()
 

 
}


function onCloseModal() {
window.removeEventListener('keydown', onEscKeyPress);

}


// // Закрытие модального окна по нажатию клавиши ESC.

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
// console.log(isEscKey)
  if (isEscKey) {
    onCloseModal();
  }
}