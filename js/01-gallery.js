import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
    galleryContainer : document.querySelector('.gallery'), 
}

const galleryMarkup = createGallerymarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup )
// console.log(createGallerymarkup(galleryItems))

function createGallerymarkup(el) {
    return el.map(({preview, original, description}) => {
        return `
          <div class="gallery__item">
  <a class="gallery__link" href="${original}">
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




