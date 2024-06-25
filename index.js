const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const countSpan = document.querySelector("#count");

let count = 0;

countSpan.innerText = `${count}`;

increaseBtn.addEventListener("click", () => {
  count++;
  countSpan.innerText = `${count}`;
  setColor(count);
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countSpan.innerText = `${count}`;
  setColor(count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countSpan.innerText = `${count}`;
  setColor(count);
});

function setColor(count) {
  if (count > 0) {
    countSpan.style.color = "green";
  }

  if (count < 0) {
    countSpan.style.color = "red";
  }

  if (count == 0) {
    countSpan.style.color = "black";
  }
}
