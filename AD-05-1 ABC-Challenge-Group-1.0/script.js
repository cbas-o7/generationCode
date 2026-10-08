
const x = document.querySelectorAll("h3");

changeColor = (item) => {
  const COLORS = ["red", "blue", "green"];

  item.addEventListener("click", () => {
    let colorRandom = Math.floor(Math.random() * 3);
    item.style.color = COLORS[colorRandom];
  });
};


x.forEach((item) => {
    changeColor(item)
});