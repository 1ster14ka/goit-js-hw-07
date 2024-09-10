const items = document.querySelectorAll("#categories .item");
const amountCategories = document.querySelectorAll("h2");
console.log(`Number of categories: ${amountCategories.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const listItemsCount = item.querySelectorAll("li").length;
  console.log(`Elements: ${listItemsCount}`);
});
