import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");
const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery__item">
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

  container.insertAdjacentHTML("beforeend", markup);
};
function handleListClick(event) {
  event.preventDefault();
  const imgGal = event.target;

  if (imgGal.nodeName !== "IMG") {
    return;
  }
  const originalImg = imgGal.parentNode.href;

  const modalInstance = basicLightbox.create(
    `<img src="${originalImg}" width="800" height="600">`,
    {
      onShow: (modalinstance) => {
        window.addEventListener("keydown", keyPress);
      },
      onClose: (modalinstance) => {
        window.removeEventListener("keydown", keyPress);
      },
    }
  );
  modalInstance.show();
}

function keyPress(e) {
  if (e.code === "Escape") {
    return;
  }
  modalInstance.close();
}

renderList(galleryItems, listEl);
listEl.addEventListener("click", handleListClick);
