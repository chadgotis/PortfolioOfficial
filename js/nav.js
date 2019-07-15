const reveal = () => {
  const links = document.querySelector("ul");
  const burger = document.querySelector(".hamburger");
  const navLinks = document.querySelectorAll("ul li");
  // burger
  burger.addEventListener("click", () => {
    links.classList.toggle("active");
  });
  //links effect
  navLinks.forEach((link, index) => {
    link.style.animation = `linkFade 0.5s ease forwards ${index / 2}s`;
  });
};

reveal();
