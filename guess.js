let secret = Math.ceil(Math.random() * 100);
let running = true;
let low = 1;
let high = 100;

const input = document.querySelector("#guessInput");
const hint = document.querySelector("#hint");
const status = document.querySelector("#statusText");

document.querySelector("#guessBtn").addEventListener("click", guess);
document.querySelector("#restartBtn").addEventListener("click", restart);
input.addEventListener("keydown", (e) => e.key === "Enter" && guess());

function guess() {
  if (!running) return;
  const val = Number(input.value);
  if (!val || val < 1 || val > 100) {
    hint.textContent = "Enter a number between 1 and 100!";
    return;
  }
  if (val === secret) {
    hint.textContent = "🎉 Correct!";
    running = false;
  } else {
    if (val < secret) {
      low = Math.max(low, val + 1);
    } else {
      high = Math.min(high, val - 1);
    }
    hint.textContent = `📊 Range: ${low} - ${high}`;
  }
  input.value = "";
  input.focus();
}

function restart() {
  secret = Math.ceil(Math.random() * 100);
  running = true;
  hint.textContent = "";
  status.textContent = "I'm thinking of a number between 1 and 100...";
  input.value = "";
  input.focus();
  low = 1;
  high = 100;
}
