import './App.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);


function App() {
  
  useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top+=30% center',
          end: 'bottom+=10% top',
          scrub: true,
        }
      })

      tl.fromTo('.hero h1', {
        transformOrigin: 'center 80%',
        scale: 1,
      }, {
        scale: 200,
      }).fromTo('.under-hero h2', {
        scale: .5,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
      })

      const lenis = new Lenis()

      lenis.on('scroll', (e) => {
        console.log(e);
      })
  
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);

    }, []);

  return (
    <>
      <section className='hero bg-red-200'>
        <h1>Bienvenue à l'agence CLOEE</h1>
      </section>
      <section className='under-hero'>
        <h2>Derriere l'agence cloéé se cache une histoire...</h2>
      </section>
    </>
  )
}

export default App
