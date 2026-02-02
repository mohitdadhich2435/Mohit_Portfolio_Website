particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: { enable: true, value_area: 900 }
    },
    color: { value: "#ddff00" },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 9,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#08e0f0",
      opacity: 0.95,
      width: 2
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: { opacity: 0.6 }
      }
    }
  },
  retina_detect: true
});