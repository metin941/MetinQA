(function () {
  const canvas = document.querySelector(".bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TINT_COLOR = "0, 153, 153";     // --primary, for a share of the stars
  const STAR_COLOR = "220, 235, 255";   // slightly bluish white
  const TINT_CHANCE = 0.25;
  const DEPTH = 1000;                   // how far back stars spawn
  const FOCAL = 400;                    // perspective strength
  const MAX_STARS = 500;
  const SPEED_MIN = 1.2;
  const SPEED_MAX = 3.2;
  const PARALLAX = 30;                  // max mouse shift in px
  let width = 0, height = 0, cx = 0, cy = 0, dpr = 1;
  let stars = [], rafId = null;
  let targetX = 0, targetY = 0, offX = 0, offY = 0;
  function randomStar(initial) {
    return {
      x: (Math.random() - 0.5) * width * 2.5,
      y: (Math.random() - 0.5) * height * 2.5,
      z: initial ? Math.random() * DEPTH : DEPTH,
      speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
      tinted: Math.random() < TINT_CHANCE,
      px: null,
      py: null
    };
  }
  // Sizes the canvas to its parent (the hero banner)
  function resize() {
    const parent = canvas.parentElement;
    dpr = window.devicePixelRatio || 1;
    width = parent.clientWidth;
    height = parent.clientHeight;
    cx = width / 2;
    cy = height / 2;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(MAX_STARS, Math.floor((width * height) / 1800));
    stars = Array.from({ length: count }, () => randomStar(true));
  }
  function project(s) {
    const k = FOCAL / s.z;
    return { x: cx + offX + s.x * k, y: cy + offY + s.y * k };
  }
  function step() {
    offX += (targetX - offX) * 0.05;
    offY += (targetY - offY) * 0.05;
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.z -= s.speed;
      const p = project(s);
      // Recycle stars that reached the camera or left the view
      if (s.z <= 1 || p.x < -50 || p.x > width + 50 || p.y < -50 || p.y > height + 50) {
        stars[i] = randomStar(false);
      }
    }
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const s of stars) {
      const p = project(s);
      const closeness = 1 - s.z / DEPTH;        // 0 = far, 1 = near
      const r = Math.max(0.3, closeness * 2.4);
      const alpha = 0.15 + closeness * 0.85;
      const color = s.tinted ? TINT_COLOR : STAR_COLOR;
      // Streak from the previous position (warp-like trail)
      if (s.px !== null && closeness > 0.2) {
        ctx.strokeStyle = `rgba(${color}, ${alpha * 0.45})`;
        ctx.lineWidth = r * 0.8;
        ctx.beginPath();
        ctx.moveTo(s.px, s.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
      // Star core
      ctx.fillStyle = `rgba(${color}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      s.px = p.x;
      s.py = p.y;
    }
  }
  function loop() {
    step();
    draw();
    rafId = requestAnimationFrame(loop);
  }
  function start() {
    if (reduceMotion) {
      draw();             // one static frame, no motion
    } else {
      loop();
    }
  }
  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / width - 0.5) * PARALLAX * 2;
    targetY = ((e.clientY - rect.top) / height - 0.5) * PARALLAX * 2;
  });
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rafId);
    resize();
    start();
  });
  resize();
  start();
})();