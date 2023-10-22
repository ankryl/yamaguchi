const ellipse = document.querySelector(".ellipse");

// Начать анимацию elipseAnim
// ellipse.addEventListener("animationend", () => {
//   // Анимация elipseAnim завершена, теперь можно запустить другие анимации
//   const girl = document.querySelector(".demonstration__girl");
//   girl.style.display = "block"; // Показать элемент, если он скрыт
//   girl.style.animationName = "open, move, levitation, onset";
//   girl.style.animationDuration = "18s, 11s, 6s, 1s";
//   girl.style.animationIterationCount = "1, 1, infinite, 1";
//   //   girl.style.animationDelay = "3s, 3s, 13s, 3s";
//   girl.style.zIndex = "2";
// });
// Начать анимацию elipseAnim
ellipse.addEventListener("animationstart", () => {
  // Анимация elipseAnim завершена, теперь можно запустить другие анимации
  const girl = document.querySelector(".demonstration__girl");
  
  girl.style.animationName = "open, move, levitation, show";
  girl.style.animationDuration = "11s, 12s, 6s, 1s";
  girl.style.animationIterationCount = "1, 1, infinite, 1";
  girl.style.animationDelay = "3s, 3s, 13s, 3s";
  girl.style.animationFillMode = "none, none, none, forwards";
  // girl.style.opacity = "block"; // Показать элемент, если он скрыт
  girl.style.zIndex = "2";
});