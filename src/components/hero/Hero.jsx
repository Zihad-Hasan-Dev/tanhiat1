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
      <div className="wrapper">
        <div className="textContainer">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hack"
          >
            <HyperpixelAnimation value="HI, I'm Zihad" delay={2000} />
          </motion.div>

          <motion.div
            className="write"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typewriter phrases={["Web Developer", "Frontend Developer", "UI/UX Designer"]} period={2000} />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="buttons"
          >
            <motion.a className="button1" variants={textVariants} href="#Portfolio">
              See the Latest Works
            </motion.a>

            <motion.a  className="button2" variants={textVariants}  href="#Contact">
              Contact
            </motion.a>

          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="scrol1"
          />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>

      <motion.div
        className="spacontainer"
        initial={{ x: 700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="sperecon">
          <div className="dis">
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.7}>
                  <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.3} speed={3} roughness={0} />
                </Sphere>
              </Suspense>
            </Canvas>
          </div>

          <motion.div
            className="imageContainer"
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <img src="/true.png" alt="true" border="0"/>
              
                    </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
