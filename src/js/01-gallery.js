// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// ======= завдання ==========

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(items) {
    
    return items.map(item => {
        const { preview, original, description } = item;
        return `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li> `;
    }).join('');
    
}

const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });
gallery.on('show.simplelightbox', function () {   
});
