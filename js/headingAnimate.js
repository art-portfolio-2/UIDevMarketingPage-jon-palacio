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

//SPAN ANIMATE STYLING
const span = document.querySelector(".hero__intro span");

span.addEventListener(
  "mouseover",
  () => (span.style.borderBottom = "2px solid white")
);

span.addEventListener("mouseout", () => (span.style.borderBottom = "none"));
