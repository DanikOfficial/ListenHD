let currentImgName = "head-1";
let menuOpened = false;

const changeImage = (name) => {
  if (currentImgName !== name) {
    const buttons = Array.from(document.querySelectorAll(".btn"));
    buttons.forEach((el) => el.classList.remove("selected"));

    const imgLink = document.querySelector(".slide-next").src.split("/");
    imgLink.pop();
    imgLink.push(name + ".webp");

    document.querySelector(".slide-next").src = imgLink.join("/");
    document.querySelector("." + name).classList.add("selected");
    currentImgName = name;
  }
};

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

document
  .querySelector(".navigation .float-nav-links")
  .addEventListener("click", (event) => {
    const classList = Array.from(event.target.classList);
    const classNames = classList.join(" ");

    if (classNames.includes("normal")) {
      hideOrShow();
    }
  });

document
  .querySelector(".float-core-icon")
  .addEventListener("click", hideOrShow);

function hideOrShow(prop = false) {
  document.querySelector(".float-nav").classList.toggle("show");
  document.body.style.overflow = prop ? "hidden" : "auto";
  menuOpened = prop;
  document.querySelector(".menu-container").classList.toggle("change");
}
