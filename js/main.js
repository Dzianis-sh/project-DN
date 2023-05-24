window.addEventListener("DOMContentLoaded", function () {
  const navMenuButton = document.querySelector("#mobile-menu-open");
  navMenuButton.addEventListener("click", function () {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.remove("menu-hidden");
  });
  window.addEventListener("click", function (event) {
    if (event.target.closest("#mobile-menu-open")) {
      return;
    }
    const menu = document.querySelector(".mobile-menu");
    menu.classList.add("menu-hidden");
  });

});