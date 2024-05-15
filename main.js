const main = document.querySelector(".main");
const btnBlue = document.querySelector(".btn-nav__blue");
const btnRed = document.querySelector(".btn-nav__red");
const btnYellow = document.querySelector(".btn-nav__yellow");
const btnLogo = document.querySelector(".btn-logo");
const food = document.querySelector(".food");
const retail = document.querySelector(".retail");
const community = document.querySelector(".community");
 
btnBlue.addEventListener("click", () => {
  const isOpened = food.getAttribute("aria-expanded");
  if (isOpened === "false") {
    food.setAttribute("aria-expanded", "true");
    main.setAttribute("aria-expanded", "false");
    main.setAttribute("initial-state", "false");
    retail.setAttribute("aria-expanded", "false");
    community.setAttribute("aria-expanded", "false");
    btnLogo.setAttribute("aria-expanded", "false");
  } else {
    main.setAttribute("aria-expanded", "true");
    btnLogo.setAttribute("aria-expanded", "true");
    food.setAttribute("aria-expanded", "false");
    retail.setAttribute("aria-expanded", "false");
    community.setAttribute("aria-expanded", "false");
  }
});

btnRed.addEventListener("click", () => {
  console.log("clicR");
  const isOpened = retail.getAttribute("aria-expanded");
  if (isOpened === "false") {
    retail.setAttribute("aria-expanded", "true");
    main.setAttribute("aria-expanded", "false");
    main.setAttribute("initial-state", "false");
    food.setAttribute("aria-expanded", "false");
    community.setAttribute("aria-expanded", "false");
    btnLogo.setAttribute("aria-expanded", "false");
  } else {
    main.setAttribute("aria-expanded", "true");
    btnLogo.setAttribute("aria-expanded", "true");
    food.setAttribute("aria-expanded", "false");
    retail.setAttribute("aria-expanded", "false");
    community.setAttribute("aria-expanded", "false");
  }
});

btnYellow.addEventListener("click", () => {
  console.log("clicY");
  const isOpened = community.getAttribute("aria-expanded");
  if (isOpened === "false") {
    community.setAttribute("aria-expanded", "true");
    main.setAttribute("aria-expanded", "false");
    main.setAttribute("initial-state", "false");
    retail.setAttribute("aria-expanded", "false");
    food.setAttribute("aria-expanded", "false");
    btnLogo.setAttribute("aria-expanded", "false");
  } else {
    btnLogo.setAttribute("aria-expanded", "true");
    main.setAttribute("aria-expanded", "true");
    food.setAttribute("aria-expanded", "false");
    retail.setAttribute("aria-expanded", "false");
    community.setAttribute("aria-expanded", "false");
  }
});

btnLogo.addEventListener("click", () => {
  const isOpened = btnLogo.getAttribute("aria-expanded");
  if (isOpened === "false") {
    btnLogo.setAttribute("aria-expanded", "true");
    main.setAttribute("aria-expanded", "true");
    community.setAttribute("aria-expanded", "false");
    main.setAttribute("initial-state", "false");
    retail.setAttribute("aria-expanded", "false");
    food.setAttribute("aria-expanded", "false");
  }
});
