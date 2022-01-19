import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryEl = document.querySelector('div.gallery');
const pictures = galleryItems
  .map(
    picture => `<a class="gallery__item" href="${picture.original}">
    <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
  </a>`,
  )
  .join('');
galleryEl.insertAdjacentHTML('beforeend', pictures);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
