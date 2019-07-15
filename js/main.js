const texts = ["Simplicity at it's Best"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typeEffect = () => {
  //   if (count === texts.length) {
  //     count = 0;
  //   }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    // count++;
    // index = 0;
  }
  setTimeout(typeEffect, 100);
};

// const reveal = () => {
//   const links = document.querySelector("ul");
//   const burger = document.querySelector(".hamburger");
//   const navLinks = document.querySelectorAll("ul li");
//   // burger
//   burger.addEventListener("click", () => {
//     links.classList.toggle("active");
//   });
//   //links effect
//   navLinks.forEach((link, index) => {
//     link.style.animation = `linkFade 0.5s ease forwards ${index / 2}s`;
//   });
// };

typeEffect();
// reveal();
