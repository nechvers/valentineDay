const linkNo = document.getElementById("linkNo");
const linkYes = document.getElementById("linkYes");
const links = document.getElementById("links");
const body = document.body;
let countMouseOver = 0;

linkNo.addEventListener("mouseover", function () {
  linkYes.style.top = "0%";
  linkYes.style.left = "0%";
  moveElementRandomly(linkNo);
  countMouseOver++;
  if (countMouseOver === 20) {
    links.appendChild(linkNo);
    linkNo.style.top = "0%";
    linkNo.style.left = "0%";
    linkYes.style.zIndex = '100'
    linkNo.style.zIndex = '1'
  }
});

linkNo.addEventListener("click", alert('охуела?'));

// linkNo.addEventListener('click', alert('охуела?'));
function moveElementRandomly(element) {
  // Генерируем случайные значения для смещения по осям X и Y
  let randomX = Math.round(Math.random() * 90) + "%"; // Случайное значение от -100 до 100
  let randomY = Math.round(Math.random() * 90) + "%"; // Случайное значение от -100 до 100
  body.appendChild(element);
  element.style.position = "absolute";
  element.style.top = randomY;
  element.style.left = randomX;
}
