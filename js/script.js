let currentImgName = "head-1";
let btnName = "head-1";
let menuOpened = !1;
let stickyOn = !1;
document.querySelector(".colors").addEventListener("click", changeImage);
document
  .querySelector(".sticky-icon")
  .addEventListener("click", hideNavigation);
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
    if (classNames.indexOf("link") > -1) {
      hideNavigation();
    }
  });
function showNavigation() {
  document.querySelector(".float-nav").classList.add("show");
  document.body.style.overflow = "hidden";
  menuOpened = !0;
  document.querySelector(".menu-container").classList.add("change");
}
function hideNavigation() {
  document.querySelector(".float-nav").classList.remove("show");
  document.body.style.overflow = "auto";
  menuOpened = !1;
  document.querySelector(".menu-container").classList.remove("change");
}

function changeImage(event) {
  const name = Array.from(event.target.classList);
  const classList = name.join(" ");
  if (classList.indexOf("head") > -1) {
    const imgName = name[name.length - 1];
    if (currentImgName !== imgName) {
      document.querySelector(`.colors .${btnName}`).removeAttribute("disabled");

      document.querySelector(`.${currentImgName}`).classList.remove("show");
      document.querySelector(`.${currentImgName}`).classList.add("hide");
      document.querySelector(`.${imgName}`).classList.add("show");
      document.querySelector(".selected").classList.remove("selected");
      document.querySelector(".colors ." + imgName).classList.add("selected");
      document
        .querySelector(".colors ." + imgName)
        .setAttribute("disabled", "");
      btnName = imgName;
      currentImgName = imgName;
    }
  }
}

function handleStickyNav() {
  const nav = document.querySelector(".main-nav");
  const icon = document.querySelector(".home .core-icon");
  const sticky = document.querySelector(".sticky-icon");
  if (window.scrollY < 420 && stickyOn === !0) {
    nav.classList.remove("sticky-nav");
    icon.style.display = "block";
    sticky.style.display = "none";
    stickyOn = !1;
  }
  if (window.scrollY > 427 && stickyOn === !1) {
    nav.classList.add("sticky-nav");
    icon.style.display = "none";
    sticky.style.display = "block";
    stickyOn = !0;
  }
}
