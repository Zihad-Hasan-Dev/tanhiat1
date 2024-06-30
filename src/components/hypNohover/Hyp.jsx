import React, { useState, useEffect } from 'react';
import './hyp.css';

const HyperpixelAnimation = ({ value, delay }) => {
  const [displayText, setDisplayText] = useState(value);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const interval = setInterval(() => {
      let iteration = 0;

      const animationInterval = setInterval(() => {
        setDisplayText(prevText => prevText.split("").map((letter, index) => {
          if (index < iteration) {
            return value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join(""));

        if (iteration >= value.length) {
          clearInterval(animationInterval);
        }

        iteration += 1 / 3;
      }, 30);
    }, value.length * 30 + delay);

    return () => clearInterval(interval);
  }, [value, delay]);

  return (
    <h1>{displayText}</h1>
  );
};

export default HyperpixelAnimation;
