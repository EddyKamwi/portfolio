let clicked = true;
document.querySelector(".menu-bars").addEventListener("click", (e) => {
  if (clicked) {
      e.target.innerHTML = "×";
      document.querySelector("nav").style.height = "60vh"
      document.querySelector("nav").style.width = "100%"
    clicked = false;
  } else {
    e.target.innerHTML = "≡";
      document.querySelector("nav").style.height = "0"
      document.querySelector("nav").style.width = "0"
      clicked = true;
  }
});
document.querySelector(".project-btn").addEventListener("click", () => {
  document.querySelector("dialog").open()
  HTMLDialogElement.open()
})
