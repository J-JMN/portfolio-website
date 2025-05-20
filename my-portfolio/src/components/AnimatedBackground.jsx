import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const mousePos = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      return { width, height };
    }

    let { width, height } = resize();

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = 3 + Math.random() * 4;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        this.opacity = 0.4 + Math.random() * 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around
        if (this.x < -this.size) this.x = width + this.size;
        else if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        else if (this.y > height + this.size) this.y = -this.size;

        // Mouse repulsion
        if (mousePos.current.x !== null && mousePos.current.y !== null) {
          const dx = this.x - mousePos.current.x;
          const dy = this.y - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 180;
          if (dist < radius) {
            const angle = Math.atan2(dy, dx);
            const force = (radius - dist) / radius;
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = theme === 'dark'
          ? 'rgba(230,220,110,0.9)'
          : 'rgba(230,220,110,0.7)';
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const particles = [];
    for (let i = 0; i < 220; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(230,220,110,${((0.3 * (140 - dist)) / 140).toFixed(3)})`
              : `rgba(230,220,110,${((0.3 * (140 - dist)) / 140).toFixed(3)})`;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    }

    animate();

    function onResize() {
      ({ width, height } = resize());
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mousePos.current.x = null;
      mousePos.current.y = null;
    }

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      id="particle-canvas"
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -10,
        background: 'transparent',
      }}
    />
  );
};

export default AnimatedBackground;