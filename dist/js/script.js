let currentImgName = "head-1";
let menuOpened = false;
let stickyOn = false;

document.querySelector(".colors").addEventListener("click", changeImage);

document.addEventListener("scroll", handleStickyNav);

document.querySelector(".menu-container").addEventListener("click", () => {
  if (menuOpened) {
    hideOrShow(true);
    document.querySelector(".menu-container").classList.toggle("change");
  } else {
    hideOrShow(false);
  }
});

function hideOrShow(prop = false) {
  document.querySelector(".menu-container").classList.toggle("change");
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

  if (window.scrollY < 420 && stickyOn === true) {
    nav.classList.remove("sticky-nav");
    stickyOn = false;
  }

  if (window.scrollY > 427 && stickyOn === false) {
    nav.classList.add("sticky-nav");
    stickyOn = true;
  }
}
