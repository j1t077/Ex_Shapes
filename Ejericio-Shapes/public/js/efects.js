function disappear(figure) {
  const triangle = document.querySelector(".triangle");
  figure.style.display = "none";
}
disappear(triangle);

function disappear(figure) {
  const square = document.querySelector(".square");
  figure.style.display = "none";
}
disappear(square);

function disappear(figure) {
  const circle = document.querySelector(".circle");
  figure.style.display = "none";
}
disappear(circle);

function appear() {
  const figures = document.querySelectorAll("#myWay");
  for (let i = 0; i < figures.length; i++) {
    figures[i].style.display = "block";
  }
}
