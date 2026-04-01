'use client';

import { useEffect, useRef } from 'react';

function SplashCursor() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let active = true;
    let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const particles = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const pushParticle = (x, y, burst = false) => {
      const total = burst ? 12 : 4;

      for (let i = 0; i < total; i += 1) {
        const angle = (Math.PI * 2 * i) / total + Math.random() * 0.45;
        const speed = (burst ? 1.8 : 0.7) + Math.random() * (burst ? 2.4 : 1.2);

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: burst ? 0.018 + Math.random() * 0.01 : 0.03 + Math.random() * 0.018,
          radius: burst ? 10 + Math.random() * 20 : 6 + Math.random() * 10,
          hue: 36 + Math.random() * 18,
        });
      }
    };

    const draw = () => {
      if (!active) return;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.life -= particle.decay;

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius,
        );

        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 75%, ${particle.life * 0.95})`);
        gradient.addColorStop(0.45, `hsla(${particle.hue}, 100%, 60%, ${particle.life * 0.42})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      const cursorGlow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        44,
      );
      cursorGlow.addColorStop(0, 'rgba(255, 243, 204, 0.42)');
      cursorGlow.addColorStop(0.32, 'rgba(212, 165, 20, 0.22)');
      cursorGlow.addColorStop(1, 'rgba(212, 165, 20, 0)');

      context.fillStyle = cursorGlow;
      context.beginPath();
      context.arc(pointer.x, pointer.y, 44, 0, Math.PI * 2);
      context.fill();

      animationFrameRef.current = window.requestAnimationFrame(draw);
    };

    const handleMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      pushParticle(event.clientX, event.clientY, false);
    };

    const handleDown = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      pushParticle(event.clientX, event.clientY, true);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      pointer = { x: touch.clientX, y: touch.clientY };
      pushParticle(touch.clientX, touch.clientY, false);
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      pointer = { x: touch.clientX, y: touch.clientY };
      pushParticle(touch.clientX, touch.clientY, true);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      active = false;
      window.cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
      />
    </div>
  );
}

export default SplashCursor;
