import { useEffect, useRef } from "react";

export default function ParticleCursor() {
  const canvasRef = useRef(null);
  const ripples = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 60 + Math.random() * 20,
        opacity: 0.6,
        direction: {
          dx: (e.movementX || 0) * 0.2,
          dy: (e.movementY || 0) * 0.2,
        },
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const alive = [];

      ripples.current.forEach((ripple) => {
        ripple.radius += 1.5;
        ripple.opacity -= 0.008;

        if (ripple.opacity > 0) {
          const offsetX = ripple.direction.dx * ripple.radius * 0.1;
          const offsetY = ripple.direction.dy * ripple.radius * 0.1;
          const centerX = ripple.x + offsetX;
          const centerY = ripple.y + offsetY;

          ctx.beginPath();
          ctx.arc(centerX, centerY, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 200, 200, ${ripple.opacity})`; // brighter grey
          ctx.lineWidth = 1 + Math.sin(ripple.radius * 0.2) * 0.5;
          ctx.stroke();
          alive.push(ripple);
        }
      });

      ripples.current = alive;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}
