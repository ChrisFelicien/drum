const buttons = document.querySelector(".set");

const handleClick = function (e) {
  const button = e.target;
  addAnimation(button, "pressed");
  removeAnimation(button, "pressed");
  if (button.classList.contains("set")) return;
  const buttonValue = button.textContent;
  playSong(buttonValue);
};
const handleKeydown = function (e) {
  const btns = [...buttons.children];
  btns.forEach((btn) => {
    if (!btn.classList.contains(e.key)) return;
    const buttonValue = e.key;
    addAnimation(btn, "pressed");
    removeAnimation(btn, "pressed");
    playSong(buttonValue);
  });
};
const addAnimation = function (el, cl) {
  return el.classList.add(cl);
};
const removeAnimation = function (el, cl) {
  return setTimeout(() => {
    return el.classList.remove(cl);
  }, 100);
};
const playSong = function (btn) {
  const son = `./song/${btn}.mp3`;
  const song = new Audio(son);
  return song.play();
};

// Event
buttons.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);
