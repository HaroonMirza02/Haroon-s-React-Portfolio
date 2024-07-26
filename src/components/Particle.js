import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#aaffff", 
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
            },
          },
          opacity: {
            value: 0.4,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            out_mode: "out",
            attract: {
              enable: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#aaffff",
            opacity: 0.3,
            width: 1,
          },
          grab: {
            line_linked: {
              opacity: 1,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.7,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
