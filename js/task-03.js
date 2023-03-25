const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//first type
// const galleryList = document.querySelector(".gallery");

// const makeNewGalleryItems = ({ url, alt }) => {
//   const newItem = document.createElement("li");
//   newItem.classList.add("gallery__item");

//   const newItemImg = document.createElement("img");
//   newItemImg.setAttribute("src", url);
//   newItemImg.setAttribute("alt", alt);
//   newItemImg.classList.add("gallery__img");

//   newItem.append(newItemImg);

//   return newItem;
// };

// console.log(makeNewGalleryItems(images[0]));

// const newGallery = images.map(makeNewGalleryItems);
// galleryList.append(...newGallery);

// second type

// const galleryList = document.querySelector(".gallery");

// const makeNewGalleryItems = ({ url, alt }) => {
//   const newItem = document.createElement("li");
//   newItem.classList.add("gallery__item");

//   newItem.insertAdjacentHTML("afterbegin", `<img src=${url} alt=${alt}></img>`);

//   return newItem;
// };

// console.log(makeNewGalleryItems(images[0]));

// const newGallery = images.map(makeNewGalleryItems);
// galleryList.append(...newGallery);

// third type
const galleryList = document.querySelector(".gallery");

const newGallery = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery__item">
    <img class="gallery__img"
    src=${url} alt=${alt}></li>`
  )
  .join(" ");

galleryList.insertAdjacentHTML("afterbegin", newGallery);
