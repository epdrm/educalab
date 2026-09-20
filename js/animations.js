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

const teamParticleCanvases = document.querySelectorAll('.team-particle-canvas');

teamParticleCanvases.forEach((canvas) => {
  const panel = canvas.parentElement;
  const context = canvas.getContext('2d');
  const particles = [];
  const shapeCanvas = document.createElement('canvas');
  const shapeContext = shapeCanvas.getContext('2d');
  let width = 0;
  let height = 0;
  let targetPoints = [];
  let isHovered = false;

  function createTargetPoints() {
    const fontSize = Math.max(64, Math.min(width * 0.38, height * 0.36));
    shapeCanvas.width = width;
    shapeCanvas.height = height;
    shapeContext.clearRect(0, 0, width, height);
    shapeContext.fillStyle = '#000';
    shapeContext.font = `800 ${fontSize}px monospace`;
    shapeContext.textAlign = 'center';
    shapeContext.textBaseline = 'middle';
    shapeContext.fillText(canvas.dataset.particleShape, width / 2, height / 2 - fontSize * 0.06);

    const pixels = shapeContext.getImageData(0, 0, width, height).data;
    targetPoints = [];
    const step = Math.max(2, Math.round(width / 160));

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        if (pixels[(y * width + x) * 4 + 3] > 100) {
          targetPoints.push({ x, y });
        }
      }
    }
  }

  function resize() {
    width = panel.clientWidth;
    height = panel.clientHeight;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    createTargetPoints();

    particles.forEach((particle, index) => {
      particle.target = targetPoints[index % targetPoints.length];
    });
  }

  function createParticles() {
    const particleCount = Math.min(1200, Math.max(240, Math.round(width * 2.4)));
    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        target: targetPoints[index % targetPoints.length],
        size: Math.random() * 1.4 + 0.7,
        alpha: Math.random() * 0.45 + 0.25,
        drift: Math.random() * Math.PI * 2,
      });
    }
  }

  function animate() {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.drift += 0.018;
      const targetX = isHovered ? particle.target.x : width / 2 + Math.cos(particle.drift) * width * 0.46;
      const targetY = isHovered ? particle.target.y : height / 2 + Math.sin(particle.drift * 1.3) * height * 0.42;
      particle.x += (targetX - particle.x) * (isHovered ? 0.075 : 0.012);
      particle.y += (targetY - particle.y) * (isHovered ? 0.075 : 0.012);
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(37, 99, 235, ${particle.alpha})`;
      context.fill();
    });
    requestAnimationFrame(animate);
  }

  panel.addEventListener('mouseenter', () => { isHovered = true; });
  panel.addEventListener('mouseleave', () => { isHovered = false; });
  resize();
  createParticles();
  window.addEventListener('resize', resize);
  animate();
});

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
