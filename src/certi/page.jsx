'use client';
import './page.css'; // Assuming page.css is now imported from a standard location
import { projects } from '../data';
import Card from '../components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Comataa() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="main1">
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
      })}
    </main>
  );
}
