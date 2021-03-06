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

const imagesEl = document.querySelector("#gallery");
const createEl = elements => {
  return elements.map(({url,alt}) => {
    return `<li><img src="${url} alt ="${alt}" height="300px" width ="450px"></li>` 
  }).join('')
}

imagesEl.insertAdjacentHTML("afterbegin", createEl(images));

imagesEl.style.listStyle = "none";
imagesEl.style.display = "flex";
imagesEl.style.justifyContent = "space-between";
imagesEl.style.marginTop = "40px";
imagesEl.style.padding = "0px";

