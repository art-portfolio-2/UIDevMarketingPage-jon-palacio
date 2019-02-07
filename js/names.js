// NAMES TESTING

const name = document.querySelectorAll(".name");

name.forEach(n => n.addEventListener("mouseover", () => this.makeBorder()));

function makeBorder() {
  name.forEach(n => (n.style.borderBottom = "1px solid white"));
}

name.forEach(n => n.addEventListener("mouseout", () => this.stopUL()));

function stopUL() {
  name.forEach(n => (n.style.borderBottom = "none"));
}
