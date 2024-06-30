// src/JumpingLetters.js

import React from 'react';
import { motion } from 'framer-motion';
import './JumpingLetters.css';

const JumpingLetters = ({ text }) => {
  const letters = Array.from(text);

  return (
    <div className="jumping-text">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 450 }}
          className="letter"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default JumpingLetters;
