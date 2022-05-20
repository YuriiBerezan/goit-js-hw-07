import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
    galleryContainer : document.querySelector('.gallery'), 
}

const galleryMarkup = createGallerymarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup )
// console.log(createGallerymarkup(galleryItems))

refs.galleryContainer.addEventListener('click', onGalleryClick)



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

function onGalleryClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.prventDefault();
 console.log(e.target.dataset.sourse)
  // console.log(e.target)
}


