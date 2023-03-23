const elemList = document.querySelectorAll("#categories li.item");
const elemNumberList = elemList.length;
console.log(`Number of categories: ${elemNumberList}`);

elemList.forEach((elem) => {
  console.log(`Category : ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});
