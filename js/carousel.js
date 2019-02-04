// CAROUSEL JAVASCRIPT

class Carousel {
  constructor(caro) {
    this.caro = caro;

    this.leftButton = document.querySelector(".lft-btn");

    this.rightButton = document.querySelector(".right-btn");

    this.imgs = document.querySelectorAll(".carousel img");

    this.index = 0;

    this.imgs[this.index].style.display = "block";

    this.leftButton.addEventListener("click", () => this.goLeft());

    this.rightButton.addEventListener("click", () => this.goRight());
  }

  goLeft() {
    this.imgs[this.index].style.display = "none";

    this.index === 0 ? (this.index = this.imgs.length - 1) : this.index--; //jshint ignore: line

    this.imgs[this.index].style.display = "block";
  }

  goRight() {
    this.imgs[this.index].style.display = "none";

    this.index === this.imgs.length - 1 ? (this.index = 0) : this.index++; //jshint ignore: line

    this.imgs[this.index].style.display = "block";
  }
}

// select images and save to memory
let carousels = document.querySelectorAll(".carousel img");

carousels.forEach(caro => new Carousel(caro));
