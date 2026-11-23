(function () {
  const canvas = document.querySelector(".bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const NODE_COLOR = "0, 153, 153";      // Siemens teal primary color
  const LINE_COLOR = "0, 153, 153";      // Connecting line color
  const MAX_NODES = 70;                  // Number of floating particles
  const MAX_DISTANCE = 120;              // Distance to connect nodes with lines
  const MOUSE_DISTANCE = 150;            // Distance for mouse interaction

  let width = 0, height = 0, dpr = 1;
  let nodes = [], rafId = null;
  let mouse = { x: null, y: null, active: false };

  function initNodes() {
    nodes = Array.from({ length: MAX_NODES }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5
    }));
  }

  function resize() {
    const parent = canvas.parentElement;
    dpr = window.devicePixelRatio || 1;
    width = parent.clientWidth;
    height = parent.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }

  function step() {
    for (let node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off boundaries
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Gentle mouse repulsion/attraction effect
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

    // Draw connecting lines between close nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DISTANCE) {
          const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.lineWidth = 1;
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
          const alpha = (1 - dist / MOUSE_DISTANCE) * 0.5;
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
      ctx.fillStyle = `rgba(${NODE_COLOR}, 0.85)`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    step();
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (reduceMotion) {
      draw();
    } else {
      loop();
    }
  }

  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  window.addEventListener("pointerleave", () => {
    mouse.active = false;
  });

  window.addEventListener("resize", () => {
    cancelAnimationFrame(rafId);
    resize();
    start();
  });

  resize();
  start();
})();