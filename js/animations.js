const heroCanvas = document.getElementById('heroCanvas');

if (heroCanvas) {
  const ctx = heroCanvas.getContext('2d');
  const particles = [];
  const particleCount = 900;
  const baseColor = { r: 235, g: 242, b: 255 };
  let width = 0;
  let height = 0;
  const mouse = {
    x: 0,
    y: 0,
    radius: 180,
    active: false,
  };

  class AntigravityParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.angle = Math.random() * Math.PI * 2;
      this.baseRadius = Math.pow(Math.random(), 0.6) * (Math.min(width, height) * 0.45);
      this.currentRadius = this.baseRadius;
      this.angularSpeed = (Math.random() * 0.003 + 0.0008) * (Math.random() < 0.5 ? 1 : -1);
      this.size = Math.random() * 1.8 + 0.6;
      this.x = width / 2 + Math.cos(this.angle) * this.currentRadius;
      this.y = height / 2 + Math.sin(this.angle) * this.currentRadius;
      this.vx = 0;
      this.vy = 0;
      this.alpha = Math.random() * 0.6 + 0.2;
    }

    update(centerX, centerY) {
      this.angle += this.angularSpeed;

      const targetX = centerX + Math.cos(this.angle) * this.baseRadius;
      const targetY = centerY + Math.sin(this.angle) * this.baseRadius;
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.hypot(dx, dy);

      if (distance < mouse.radius && mouse.active) {
        const force = (1 - distance / mouse.radius) * 1.8;
        const angleToMouse = Math.atan2(dy, dx);
        this.vx += Math.cos(angleToMouse) * force;
        this.vy += Math.sin(angleToMouse) * force;
      }

      this.vx += (targetX - this.x) * 0.03;
      this.vy += (targetY - this.y) * 0.03;
      this.vx *= 0.88;
      this.vy *= 0.88;
      this.x += this.vx;
      this.y += this.vy;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${this.alpha})`;
      ctx.fill();
    }
  }

  function resizeCanvas() {
    width = heroCanvas.clientWidth;
    height = heroCanvas.clientHeight;
    const ratio = window.devicePixelRatio || 1;
    heroCanvas.width = width * ratio;
    heroCanvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const centerX = width / 2;
    const centerY = height / 2;

    particles.forEach((particle) => {
      particle.update(centerX, centerY);
      particle.draw();
    });

    requestAnimationFrame(animate);
  }

  resizeCanvas();
  for (let index = 0; index < particleCount; index += 1) {
    particles.push(new AntigravityParticle());
  }

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  window.addEventListener('resize', resizeCanvas);
  animate();
}

const explanationPills = document.querySelectorAll('.explanation-pill');
const explanationCopy = document.querySelector('.explanation-copy');

if (explanationPills.length && explanationCopy) {
  explanationPills.forEach((pill) => {
    pill.addEventListener('mouseenter', () => {
      const text = pill.dataset.copy || '';
      if (!text) return;

      explanationCopy.classList.remove('is-visible');
      setTimeout(() => {
        explanationCopy.textContent = text;
        explanationCopy.classList.add('is-visible');
      }, 120);

      explanationPills.forEach((item) => item.classList.toggle('active', item === pill));
    });

    pill.addEventListener('click', () => {
      const text = pill.dataset.copy || '';
      if (!text) return;

      explanationCopy.classList.remove('is-visible');
      setTimeout(() => {
        explanationCopy.textContent = text;
        explanationCopy.classList.add('is-visible');
      }, 120);

      explanationPills.forEach((item) => item.classList.toggle('active', item === pill));
    });
  });
}

const revealItems = document.querySelectorAll('.featured-item');

if (revealItems.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
}
