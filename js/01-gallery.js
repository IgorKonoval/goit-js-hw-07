import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}" target="_top" rel="noopener noreferrer">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
);

container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", onClick);

function onClick(params) {
  if (!params.target.classList.contains(".gallery__item")) {
    return;
  }

  const instance = basicLightbox.create(`
   <img
      src="${original}"
      alt="${description}"
    />
`);
  console.log(instance);
  instance.show();
}

console.log(galleryItems);
