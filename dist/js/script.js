let currentImgName = "head-1";
let menuOpened = false;

document.querySelector(".colors").addEventListener("click", (event) => {
  const classList = Array.from(event.target.classList);
  const classNames = classList.join(" ");

  if (classNames.includes("head")) {
    const imgName = classList[classList.length - 1] + ".png";

    if (currentImgName !== imgName) {
      const buttons = Array.from(document.querySelectorAll(".btn"));

      buttons.forEach((el) => el.classList.remove("selected"));

      document
        .querySelector("." + classList[classList.length - 1])
        .classList.add("selected");

      const imgLink = document.querySelector(".slide-next").src.split("/");
      imgLink.pop();
      imgLink.push(imgName);

      document.querySelector(".slide-next").src = imgLink.join("/");
      currentImgName = imgName;
    }
  }
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
