import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector(".gallery");
const renderList = (arr) => 
    arr 
        .map(
            (item) =>
           `<li data-id="${item.id}" class="item">
                    <a class="gallery__link" href="large-image.jpg">
                        <img
                            class="gallery__image"
                            src="small-image.jpg width="300" height="200"
                            data-source="large-image.jpg"
                            alt="Image description"
                        />
                    </a>
                </li>`
        )
        .join("");

const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }


const instance = basicLightbox.create(`
    <img src="./gallery-items.js" width="800" height="600">
`)

instance.show()

        }
listEl.insertAdjacentHTML('beforeend', renderList(galleryItems));
listEl.addEventListener("click", handleListClick)
console.log(galleryItems);

