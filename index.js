const buttons = document.querySelector(".set");

const handleClick = function (e) {
  const button = e.target;
  if (button.classList.contains("set")) return;
  //   console.log(button);
  const buttonValue = button.textContent;
  playSong(buttonValue);
};
const handleKeydown = function (e) {
  const btns = [...buttons.children];
  btns.forEach((btn) => {
    if (!btn.classList.contains(e.key)) return;
    const buttonValue = e.key;
    playSong(buttonValue);
  });
};

const playSong = function (btn) {
  const son = `./song/${btn}.mp3`;
  const song = new Audio(son);
  return song.play();
};

// click Event
buttons.addEventListener("click", handleClick);
// Key envent
document.addEventListener("keydown", handleKeydown);

// (e) => {
//   const btns = [...buttons.children];
//   btns.forEach((btn) => {
//     if (!btn.classList.contains(e.key)) return;
//     const buttonValue = e.key;
//     playSong(buttonValue);
//   });
// };
