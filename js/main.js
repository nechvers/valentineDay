const linkNo = document.getElementById("linkNo");
const linkYes = document.getElementById("linkYes");
const links = document.getElementById("links");
const image = document.querySelector('.cute-cat');
const title = document.querySelector('.title');
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

linkYes.addEventListener('click', () => {
  image.src = 'images/white-cute-cat-hearts.gif';
  title.innerHTML = 'С праздником, малышка, я тебя очень сильно люблю &#128152;';
  linkYes.remove();
  linkNo.remove();
  links.remove();
})

function moveElementRandomly(element) {
  // Генерируем случайные значения для смещения по осям X и Y
  let randomX = Math.round(Math.random() * 90) + "%"; // Случайное значение от -100 до 100
  let randomY = Math.round(Math.random() * 90) + "%"; // Случайное значение от -100 до 100
  body.appendChild(element);
  element.style.position = "absolute";
  element.style.top = randomY;
  element.style.left = randomX;
}
