import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Starfield = ({ className }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fullScreen: false,
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
      },
      particles: {
        number: {
          value: 180,
          density: {
            enable: true,
            area: 1200,
          },
        },
        color: {
          value: ["#ffffff", "#f5c746", "#6ccff6"],
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: { min: 0.05, max: 0.35 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        opacity: {
          value: { min: 0.2, max: 0.7 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2.2 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.1,
            opacity: { min: 0.3, max: 1 },
          },
        },
      },
    }),
    []
  );

  if (!ready) {
    return null;
  }

  return (
    <Particles
      className={className}
      id="starfield"
      options={options}
      style={{ pointerEvents: "none" }}
    />
  );
};


