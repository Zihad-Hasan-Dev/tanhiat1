import React, { useState, useRef } from 'react';

const HyperpixelHover = ({ value }) => {
  const [displayText, setDisplayText] = useState(value);
  const intervalRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = () => {
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => prevText.split("").map((letter, index) => {
        if (index < iteration) {
          return value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join(""));

      if (iteration >= value.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setDisplayText(value);
  };

  return (
    <h1 onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>{displayText}</h1>
  );
};

export default HyperpixelHover;
