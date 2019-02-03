// BUTTON COMPONENT

// CREATE BUTTON CLASS
class Button {
  constructor(e) {
    // assign this in object
    this.e = e;
    //console.log(e);

    // select button class and assign to variable
    this.tBtn = document.querySelector(".social__toggle--btn");
    //console.log(this.tBtn);

    // assign classes to toggle to variable
    this.display = document.querySelectorAll(".toggleSocial");

    // add event listener to new var from above
    this.tBtn.addEventListener("click", () => this.toggleThings());
  }

  // method to toggle class
  toggleThings() {
    // var to seclect class button
    const displays = document.querySelector(".social__toggle--btn");

    // loop through above var and for each toggle class to be switched
    this.display.forEach(dis => dis.classList.toggle("toggleSocial"));
  }
}
// SELECT ALL CLASSES .SOCIAL__TOGGLE--BTN AND ASSIGN THEM TO VAR BUTTONS LOOP
// THROUGH THEM AND CREATE NEW BUTTON CLASS
let buttons = document
  .querySelectorAll(".social__toggle--btn")
  .forEach(btn => new Button(btn));
