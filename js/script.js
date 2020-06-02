document.getElementById("js-navigation__icon").addEventListener("click", () => {
  document
    .getElementById("js-navigation__menu")
    .classList.add("navigation__menu--mobile");
});

document.getElementById("js-navigation__close").addEventListener("click", () => {
  document
    .getElementById("js-navigation__menu")
    .classList.remove("navigation__menu--mobile");
});
