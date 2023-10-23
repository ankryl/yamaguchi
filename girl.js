const ellipse = document.querySelector(".ellipse");
ellipse.addEventListener("animationstart", () => {
  const girl = document.querySelector(".demonstration__girl");
  
  girl.style.animationName = "open, move, levitation, show";
  girl.style.animationDuration = "11s, 12s, 6s, 1s";
  girl.style.animationIterationCount = "1, 1, infinite, 1";
  girl.style.animationDelay = "3s, 3s, 13s, 3s";
  girl.style.animationFillMode = "none, none, none, forwards";
  girl.style.zIndex = "2";
});