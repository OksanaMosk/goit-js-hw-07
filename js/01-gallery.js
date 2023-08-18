import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");
const everyEl = renderList(galleryItems);
listEl.insertAdjacentHTML("beforeend", everyEl);

function renderList(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      width="300" height="225"
    />
  </a>
</li>`;
    })
    .join("");
}
listEl.addEventListener("click", handleListClick);
function handleListClick(event) {
  event.preventDefault();
  const imgGallery = event.target;
  if (imgGallery.nodeName !== "IMG") {
    return;
  }
  const originalImg = imgGallery.parentNode.href;
  const modalInstance = basicLightbox.create(
    `<img src="${originalImg}" width="800" height="600">`,
    {
      onShow: (modalinstance) => {
        window.addEventListener("keydown", handler);
      },
      onClose: (modalinstance) => {
        window.removeEventListener("keydown", handler);
      },
    }
  );
  modalInstance.show();
  function handler(e) {
    if (e.code === "Escape") {
      modalInstance.close();
    }
  }
}
