const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Circle properties
let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 30;

// Random initial velocities
function randomVelocity(minSpeed, maxSpeed) {
  let speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  return Math.random() < 0.5 ? -speed : speed;
}

let vx = randomVelocity(3, 6);
let vy = randomVelocity(3, 6);

let animationRunning = false;

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

drawCircle();

function animate() {
  if (!animationRunning) return;

  x += vx;
  y += vy;

  // Bounce off edges
  if (x + radius >= canvas.width || x - radius <= 0) vx *= -1;
  if (y + radius >= canvas.height || y - radius <= 0) vy *= -1;

  drawCircle();
  requestAnimationFrame(animate);
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!animationRunning) {
    animationRunning = true;
    animate();
  }
});

document.getElementById("stopBtn").addEventListener("click", () => {
  animationRunning = false;
});
