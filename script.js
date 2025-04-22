const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const letterBox = document.querySelector(".letter-box");

openBtn.addEventListener("click", () => {
  letterBox.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  letterBox.style.display = "none";
  openBtn.style.display = "inline-block";
});