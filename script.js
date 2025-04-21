const targetDate = new Date("April 25, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown-timer");
const button = document.getElementById("start-btn");
const popup = document.getElementById("wait-popup");

let countdownComplete = false;

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    countdownComplete = true;
    countdownEl.innerText = "🎉 It's time!";
    button.classList.add("active");
    return;
  }

  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((gap % (1000 * 60)) / 1000);

  countdownEl.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Button behavior
button.addEventListener("click", () => {
  if (countdownComplete) {
    window.location.href = "birthday.html";
  } else {
    popup.classList.remove("hidden");
  }
});

function closePopup() {
  popup.classList.add("hidden");
}

// 🌟 Sparkles Generator
const sparkleColors = [
    "radial-gradient(circle, #fffacd, #ffd700)", // Lemon Gold
    "radial-gradient(circle, #ffccf9, #ff69b4)", // Pink Candy
    "radial-gradient(circle, #e0ffff, #87cefa)", // Ice Blue
    "radial-gradient(circle, #fff0f5, #dda0dd)", // Lavender
    "radial-gradient(circle, #fff, #ffb6c1)"     // Light Pink
  ];
  
  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDelay = `${Math.random() * 10}s`;
    sparkle.style.animationDuration = `${6 + Math.random() * 4}s`;
    sparkle.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    document.body.appendChild(sparkle);
  }
  
