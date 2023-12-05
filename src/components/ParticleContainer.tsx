import { Particles } from 'react-tsparticles'
import { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'
import { colorHex, Color } from "../utils/color";

interface ParticleParams {
  lineColor: string;
  squareColor: string;
  front: boolean;
}

export default function ParticleContainer({lineColor, squareColor, front}: ParticleParams) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <Particles 
      className={`w-100 h-100 absolute ${front ? 'translate-z-0' : '-z-10'}`}
      id="particles" 
      init={particlesInit} 
      loaded={particlesLoaded} 
      options={{ 
        fullScreen: { enable: true},
        background: {
          color: {
            value: ''
          }
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            resize: true
          },
        },
        particles: {
          color: {
            value: colorHex[squareColor as keyof Color] 
          },
          links: {
            color: colorHex[lineColor as keyof Color],
            distance: 200,
            enable: true,
            opacity: 0.8,
            width: 1
          },
          collisions: {
            enable: false
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 70
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'square'
          },
          size: {
            value: {
              min: 4,
              max: 6
            }
          }
        },
        detectRetina: true
      }}
    />
  )
}