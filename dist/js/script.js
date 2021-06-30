let currentImgName = "head-1";
let menuOpened = false;
let stickyOn = false;

document.querySelector(".head-1").addEventListener("click", () => {
  changeImage("head-1");
});

document.querySelector(".head-2").addEventListener("click", () => {
  changeImage("head-2");
});

document.querySelector(".head-3").addEventListener("click", () => {
  changeImage("head-3");
});

document.querySelector(".head-4").addEventListener("click", () => {
  changeImage("head-4");
});

document.querySelector(".menu-container").addEventListener("click", () => {
  if (menuOpened) {
    hideOrShow(true);
    document.querySelector(".menu-container").classList.toggle("change");
  } else {
    hideOrShow(false);
  }
});

function hideOrShow(prop = false) {
  document.querySelector(".float-nav").classList.toggle("show");
  document.body.style.overflow = prop ? "hidden" : "auto";
  menuOpened = prop;
  document.querySelector(".menu-container").classList.toggle("change");
}

function changeImage(name) {
  if (currentImgName !== name) {
    const button = document.querySelector(".selected");
    button.classList.remove("selected");

    const imgLink = document.querySelector(".slide-next").src.split("/");
    imgLink.pop();
    imgLink.push(name + ".webp");

    document.querySelector(".slide-next").src = imgLink.join("/");
    document.querySelector("." + name).classList.add("selected");
    currentImgName = name;
  }
}

document.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-nav");

  console.log(window.scrollY);

  if (window.scrollY < 420 && stickyOn === true) {
    nav.classList.remove("sticky-nav");
    stickyOn = false;
  }

  if (window.scrollY > 427 && stickyOn === false) {
    nav.classList.add("sticky-nav");
    stickyOn = true;
  }
});
