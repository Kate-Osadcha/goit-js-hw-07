const categoriesEl = document.querySelectorAll(".item h2").forEach((elem) =>
    console.log(`Категория: ${elem.textContent}
Количество элементов: ${elem.nextElementSibling.children.length}`
  )
);

//способ 2

// const list = document.querySelector("#categories");
// const items = list.querySelectorAll(".item");
// console.log(`В списке ${items.length} категории:`);
// items.forEach((node) => {
//   const h2 = node.querySelector("h2");
//   const nodeItems = node.querySelectorAll("li");
//   console.log(
//     ` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`
//   );
// });
