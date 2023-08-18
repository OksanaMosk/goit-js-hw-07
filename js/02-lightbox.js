import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector(".gallery");
const everyEl = renderList(galleryItems);
listEl.insertAdjacentHTML("beforeend", everyEl);
function renderList (items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
   src="${preview}"
      alt="${description}"
      width="200" height="150"
    />
  </a>
</li>`
    })
      
      .join("");
  
};


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 
});


console.log(galleryItems);
