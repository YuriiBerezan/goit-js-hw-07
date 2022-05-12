import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGallerymarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup )
// console.log(createGallerymarkup(galleryItems))

function createGallerymarkup(items) {
    return galleryItems.map(({preview, original, description}) => {
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




