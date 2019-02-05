//HEADING ANIMATE STYLING
const heading = document.querySelector(".whoWeAre__container h2");

heading.addEventListener(
  "mouseover",
  () => (heading.style.borderBottom = "2px dotted black")
);

heading.addEventListener(
  "mouseout",
  () => (heading.style.borderBottom = "none")
);
