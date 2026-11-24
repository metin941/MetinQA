(function () {
  const canvas = document.querySelector(".bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NODE_COLOR = "0, 153, 153";      // Siemens teal primary color
  const LINE_COLOR = "0, 153, 153";      // Connecting line color
  
  // Normal vs Screensaver configurations
  const config = {
    normal: { MAX_NODES: 70, MAX_DISTANCE: 120, MOUSE_DISTANCE: 150 },
    screensaver: { MAX_NODES: 150, MAX_DISTANCE: 160, MOUSE_DISTANCE: 220 }
  };
  let isScreensaver = false;
  let width = 0, height = 0, dpr = 1;
  let nodes = [], rafId = null;
  let mouse = { x: null, y: null, active: false };
  function getCurrentConfig() {
    return isScreensaver ? config.screensaver : config.normal;
  }
  function initNodes() {
    const { MAX_NODES } = getCurrentConfig();
    nodes = Array.from({ length: MAX_NODES }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (isScreensaver ? 1.2 : 0.8),
      vy: (Math.random() - 0.5) * (isScreensaver ? 1.2 : 0.8),
      radius: Math.random() * (isScreensaver ? 3 : 2) + 1.5
    }));
  }
  function resize() {
    dpr = window.devicePixelRatio || 1;
    if (isScreensaver) {
      width = window.innerWidth;
      height = window.innerHeight;
    } else {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
    }
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }
  function step() {
    const { MOUSE_DISTANCE } = getCurrentConfig();
    for (let node of nodes) {
      node.x += node.vx;
      node.y += node.vy;
      // Bounce off boundaries
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      // Gentle mouse interaction
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DISTANCE) {
          const force = (1 - dist / MOUSE_DISTANCE) * 0.5;
          node.x -= (dx / dist) * force;
          node.y -= (dy / dist) * force;
        }
      }
    }
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const { MAX_DISTANCE, MOUSE_DISTANCE } = getCurrentConfig();
    // Draw connecting lines between close nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DISTANCE) {
          const alpha = (1 - dist / MAX_DISTANCE) * (isScreensaver ? 0.5 : 0.35);
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.lineWidth = isScreensaver ? 1.2 : 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
      // Connect nodes to mouse pointer if active
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        const dx = nodes[i].x - mouse.x;
        const dy = nodes[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DISTANCE) {
          const alpha = (1 - dist / MOUSE_DISTANCE) * 0.6;
          ctx.strokeStyle = `rgba(${NODE_COLOR}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }
    // Draw nodes
    for (const node of nodes) {
      ctx.fillStyle = `rgba(${NODE_COLOR}, 0.9)`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    // Screensaver instruction text
    if (isScreensaver) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Screensaver Mode — Click anywhere or press ESC to exit", width / 2, height - 40);
    }
  }
  function loop() {
    step();
    draw();
    rafId = requestAnimationFrame(loop);
  }
  function start() {
    cancelAnimationFrame(rafId);
    if (reduceMotion) {
      draw();
    } else {
      loop();
    }
  }
  function toggleScreensaver() {
    // Fade out smoothly
    canvas.classList.add("fade-out");
    setTimeout(() => {
      isScreensaver = !isScreensaver;
      
      if (isScreensaver) {
        canvas.classList.add("screensaver-mode");
      } else {
        canvas.classList.remove("screensaver-mode");
        mouse.active = false;
      }
      resize();
      start();
      // Fade back in smoothly
      requestAnimationFrame(() => {
        canvas.classList.remove("fade-out");
      });
    }, 200); // matches half of the CSS transition time for a fluid swap
  }
  // Event Listeners
  canvas.addEventListener("click", toggleScreensaver);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isScreensaver) {
      toggleScreensaver();
    }
  });
  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  window.addEventListener("pointerleave", () => {
    if (!isScreensaver) mouse.active = false;
  });
  window.addEventListener("resize", () => {
    resize();
    start();
  });
  resize();
  start();
})();