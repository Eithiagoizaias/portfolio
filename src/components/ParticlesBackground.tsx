import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 170, density: { enable: true, width: 800, height: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0, max: 1 },
            animation: { enable: true, speed: 1, startValue: "random", destroy: "none" },
          },
          size: { value: { min: 0.5, max: 3 } },
          links: { enable: false },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0 },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
