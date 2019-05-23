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

typeEffect();
