// src/CursorTrail.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CursorTrail.css';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const [smallBlobs, setSmallBlobs] = useState([]);
  const [fire, setFire] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mainTrail = { x: e.clientX, y: e.clientY, id: Math.random(), color: 'black' };
      setTrail((prevTrail) => [...prevTrail, mainTrail]);

      if (trail.length > 10) {
        setTrail((prevTrail) => prevTrail.slice(1));
      }

      // Generate small blobs with boiling effect
      const newSmallBlobs = Array.from({ length: 5 }, () => ({
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        id: Math.random(),
        scale: Math.random() * 2, // Random scale for boiling effect
        opacity: Math.random(), // Random opacity for boiling effect
      }));
      setSmallBlobs(newSmallBlobs);

      // Generate fire-like shapes with boiling effect
      const newFire = Array.from({ length: 3 }, () => ({
        x: e.clientX + (Math.random() - 0.5) * 30,
        y: e.clientY + (Math.random() - 0.5) * 30,
        id: Math.random(),
        scale: Math.random() * 2, // Random scale for boiling effect
        opacity: Math.random(), // Random opacity for boiling effect
      }));
      setFire(newFire);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trail]);

  return (
    <div className="cursor-trail">
      {trail.map(({ x, y, id, color }) => (
        <motion.div
          key={id}
          initial={{ opacity: 1, x: x - 15, y: y - 15 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`trail-dot ${color}`}
        />
      ))}
     
      
    </div>
  );
};

export default CursorTrail;
