'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Romantic.scss";

const loveMessage = "Every heartbeat whispers your name. Every star reminds me of your smile. I Love You Forever ❤️";
const floatingWords = ["Love ❤️", "Forever 💕", "You 💘", "Sweetheart 💖", "💞"];

export default function Romantic() {
  const [text, setText] = useState("");
  const [hearts, setHearts] = useState([]);
  const [stars, setStars] = useState([]);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + loveMessage[i]);
      i++;
      if (i >= loveMessage.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Floating stars
  useEffect(() => {
    const newStars = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5
    }));
    setStars(newStars);
  }, []);

  // Click hearts
  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const newHeart = { id: Date.now(), x, y };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <section className="romantic-section" onClick={handleClick}>
      {/* Stars in the background */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="star"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 6, delay: star.delay }}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
        />
      ))}

      <div className="overlay">
        {/* Pulsing Title */}
        <motion.h2
          className="romantic-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        >
          💖 For My Love 💖
        </motion.h2>

        {/* Typing message */}
        <motion.p
          className="romantic-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          {text}
        </motion.p>

        {/* Floating hearts in the background */}
        <div className="floating-hearts">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.span
              key={i}
              className="heart"
              animate={{ y: [-20, -80, -20], x: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut", delay: i }}
            >
              💕
            </motion.span>
          ))}
        </div>

        {/* Clicked hearts */}
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.span
              key={heart.id}
              className="heart-click"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, y: -50, opacity: 0 }}
              exit={{ opacity: 0 }}
              style={{ left: heart.x, top: heart.y, position: "absolute" }}
            >
              💖
            </motion.span>
          ))}
        </AnimatePresence>

        {/* Floating love words */}
        {floatingWords.map((word, idx) => (
          <motion.span
            key={idx}
            className="floating-word"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -50, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 5 + idx, delay: idx }}
            style={{ left: `${20 + idx * 15}%` }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
