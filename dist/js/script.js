let currentImgName = "head-1";

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
