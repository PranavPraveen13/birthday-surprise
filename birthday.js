let spellCast = false;

function castMagic() {
    if (spellCast) return;
    spellCast = true;
  
    const messageBox = document.getElementById('birthday-message');
    const slideshow = document.querySelector('.slideshow');
    const button = document.querySelector('button');
  
    button.classList.add('fade-out');
    setTimeout(() => button.remove(), 700);
  
    messageBox.classList.remove('hidden');
    messageBox.classList.add('visible');
  
    typeMessageChunks([
      "To the brightest soul I know – Achu, may your day be as joyful, magical, and beautiful as your heart. 💫 ",
      "This little website is your gift that I’ve been working on for a while.",
      "Though not the best gift that i could have given you I did put a lot of work into this hehehe.",
      "Below are a few memories we've shared over the years — moments I’ll always cherish.",
      "I hope this year brings you everything you dream of — and all the 'luck' you say you need. 🍀",
      "Side note: I’ve truly never met anyone as inspiring and hardworking as you, my love. You amaze me every day.",
      "Now go enjoy your day… and your *real* gifts — did you really think I’d stop at just a website for my MATERIAL GWORL? 💅🎁🧁",
      "Happy Birthday, dummy! 🎉💖",
      "Also below are a few of my favourite memories of You hehehehe .",
    ], 0, () => {
      // Only runs once ALL chunks are typed
      slideshow.classList.remove('hidden');
      slideshow.classList.add('visible');
      startSlideshow();
    });
  
    launchFireworks();
  }
  


function typeMessageChunks(chunks, index = 0, onComplete) {
    if (index >= chunks.length) {
      if (onComplete) onComplete();
      return;
    }
  
    typeWriter(chunks[index], 0, () => {
      setTimeout(() => typeMessageChunks(chunks, index + 1, onComplete), 1000); // 1 sec between chunks
    });
  }
  
  
  function typeWriter(text, i, callback) {
    const target = document.getElementById("birthday-message");
  
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(text, i + 1, callback), 40);
    } else if (callback) {
      callback();
    }
  }
  
// Slideshow Logic
const memoryImages = [
  'assets/memories/1.jpg',
  'assets/memories/2.jpg',
  'assets/memories/3.jpg',
  'assets/memories/4.jpg',
  'assets/memories/5.jpg',
  'assets/memories/6.jpg'
];


let currentSlide = 0;

function startSlideshow() {
    const slideshowImg = document.getElementById('slideshow-image');

    let slidesShown = 0;
  
    if (!slideshowImg) {
      console.error("Image element not found");
      return;
    }
  
    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % memoryImages.length;
      slidesShown++;
  
      slideshowImg.style.opacity = 0;
      setTimeout(() => {
        slideshowImg.src = memoryImages[currentSlide];
        slideshowImg.style.opacity = 1;
      }, 400);
    }, 3000);
  }
  
  

// 🎉 Confetti Logic
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];
  const colors = ['#ff69b4', '#ffd700', '#87ceeb', '#ffa07a', '#98fb98'];

  function createConfettiPiece() {
    return {
      x: Math.random() * canvas.width,
      y: -10,
      r: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 1,
      alpha: 1,
      decay: 0.005 + Math.random() * 0.01,
    };
  }

  for (let i = 0; i < 150; i++) {
    confetti.push(createConfettiPiece());
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
      ctx.globalAlpha = c.alpha;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();

      c.y += c.speed;
      c.alpha -= c.decay;

      if (c.alpha <= 0 || c.y > canvas.height) {
        confetti[i] = createConfettiPiece(); // Replace with new piece
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  draw();
}

// 🎆 Fireworks Logic
function launchFireworks() {
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    document.body.appendChild(canvas);
  
    // 🛠️ Add styling to push it to background
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '0', // ← this is key: lowest layer
        pointerEvents: 'none'
      });
  
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let particles = [];
  
    function createParticle(x, y) {
      const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
      for (let i = 0; i < 100; i++) {
        particles.push({
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 5 + 2,
          radius: Math.random() * 2 + 1,
          color,
          life: 100
        });
      }
    }
  
    function animateFireworks() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        const vx = Math.cos(p.angle) * p.speed;
        const vy = Math.sin(p.angle) * p.speed;
        p.x += vx;
        p.y += vy;
        p.life--;
  
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
  
        if (p.life <= 0) particles.splice(i, 1);
      });
  
      requestAnimationFrame(animateFireworks);
    }
  
    setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height / 2);
      createParticle(x, y);
    }, 1000);
  
    animateFireworks();
  }


  