// BUTTON COMPONENT

class Button {
  constructor(e) {
    this.e = e;
    //console.log(e);

    this.tBtn = document.querySelector(".social__toggle--btn");
    console.log(this.tBtn);

    this.display = document.querySelectorAll(".toggleSocial");

    this.tBtn.addEventListener("click", () => this.toggleThings());
  }

  toggleThings() {
    const displays = document.querySelectorAll(".social__toggle--btn");

    this.display.forEach(dis => dis.classList.toggle("toggleSocial"));
  }
}
let Buttons = document
  .querySelectorAll(".social__toggle--btn")
  .forEach(btn => new Button(btn));
