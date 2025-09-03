import Typewriter from "../Textwriter/textwriter";
import React, { Suspense } from "react";
import HyperpixelAnimation from "../hypNohover/Hyp";
import "./hero.scss";
import { motion, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const textVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
I am Really Sorry        
      </motion.div>

      <div
        className="spacontainer">

        <div className="sperecon">
          <div className="dis">
          
          </div>

         <div className="imagehome">


         </div>
              

        </div>
      </div>
   
    </div>
    
  );
};

export default Hero;
