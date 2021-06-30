let currentImgName = "head-1";
let menuOpened = false;
let stickyOn = false;

document.querySelector(".colors").addEventListener("click", changeImage);

document.querySelector(".core-icon").addEventListener("click", hideNavigation);

document.addEventListener("scroll", handleStickyNav);

document.querySelector(".menu-container").addEventListener("click", () => {
  if (menuOpened) {
    hideNavigation();
  } else {
    showNavigation();
  }
});

document
  .querySelector(".navigation .float-nav-links")
  .addEventListener("click", (event) => {
    const classList = Array.from(event.target.classList);
    const classNames = classList.join(" ");

    if (classNames.indexOf("normal") > -1) {
      hideNavigation();
    }
  });

function showNavigation() {
  document.querySelector(".float-nav").classList.add("show");
  document.body.style.overflow = "hidden";
  menuOpened = true;
  document.querySelector(".menu-container").classList.add("change");
}

function hideNavigation() {
  document.querySelector(".float-nav").classList.remove("show");
  document.body.style.overflow = "auto";
  menuOpened = false;
  document.querySelector(".menu-container").classList.remove("change");
}

function changeImage(event) {
  const name = Array.from(event.target.classList);
  const classList = name.join(" ");

  if (classList.indexOf("head") > -1) {
    const imgName = name[name.length - 1];

    if (currentImgName !== imgName) {
      document.querySelector(`.${currentImgName}`).classList.remove("show");
      document.querySelector(`.${currentImgName}`).classList.add("hide");
      document.querySelector(`.${imgName}`).classList.add("show");
      document.querySelector(".selected").classList.remove("selected");
      document.querySelector(".colors ." + imgName).classList.add("selected");

      currentImgName = imgName;
    }
  }
}

function handleStickyNav() {
  const nav = document.querySelector(".main-nav");
  const icon = document.querySelector(".home .core-icon");
  const sticky = document.querySelector(".sticky-icon");

  if (window.scrollY < 420 && stickyOn === true) {
    nav.classList.remove("sticky-nav");
    icon.style.display = "block";
    sticky.style.display = "none";
    stickyOn = false;
  }

  if (window.scrollY > 427 && stickyOn === false) {
    nav.classList.add("sticky-nav");
    icon.style.display = "none";
    sticky.style.display = "block";
    stickyOn = true;
  }
}