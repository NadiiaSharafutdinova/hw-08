import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', onCardClick);

function createGalleryItems(galleryItems){
 return galleryItems
 .map(({ preview, original, description }) => {
 return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
})
.join('');
}

function onCardClick(event) {
event.preventDefault();
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  }

