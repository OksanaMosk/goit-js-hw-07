import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector(".gallery");
const renderList = (arr) => 
    arr 
        .map(
            (item) =>
           `<li data-id ="id" class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image lazyload"
   src="${item.preview}"
    data-source="large-image.jpg"
      alt="${item.description}"
      width="200" height="150"
    />
  </a>
</li>`
        )
        .join("");


const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }

    const currentListItem = event.target.closest('.gallery__item');
    const itemId = currentListItem.dataset.id;
    const everyGalleryItems = galleryItems.find((item) => item.id === +itemId);
    const modalInstance = basicLightbox.create(`<div class="modal">
    <img src="${galleryItems.original}" 
    width="1000" height="750"/>
    </div>`)

modalInstance.show()
        }
listEl.insertAdjacentHTML("beforeend", renderList(galleryItems));

listEl.addEventListener("click", handleListClick);



