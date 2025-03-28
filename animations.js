function createParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.id = 'particles';
  document.body.appendChild(particleContainer);

  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'absolute';
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    particleContainer.appendChild(particle);
    animateParticle(particle);
  }
}

function animateParticle(particle) {
  const duration = Math.random() * 5000 + 2000;
  const moveX = (Math.random() - 0.5) * 200;
  const moveY = (Math.random() - 0.5) * 200;

  particle.animate([
    { transform: `translate(0, 0) scale(1)`, opacity: 0.5 },
    { transform: `translate(${moveX}px, ${moveY}px) scale(0.8)`, opacity: 0.7 },
    { transform: `translate(${moveX * 1.5}px, ${moveY * 1.5}px) scale(0.5)`, opacity: 0 }
  ], {
    duration,
    easing: 'ease-in-out',
    iterations: Infinity,
    delay: Math.random() * 2000
  });
}

window.addEventListener('load', createParticles);