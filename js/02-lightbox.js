import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector('.gallery'), //общий родитель картинок
  
};



const galleryMarkup = createGallerymarkup(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup )
// console.log(createGallerymarkup(galleryItems))

// refs.galleryList.addEventListener('click', onGalleryClick)



function createGallerymarkup(el) {
  // el.prventDefault();
    return el.map(({preview, original, description}) => {
        return `
          <li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    }).join(' ');        
}

refs.galleryList.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
//   window.addEventListener('keydown', onEscKeyPress);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault(); //отмена перехода по ссылке

    
        
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
     evt
});

 

 
}
