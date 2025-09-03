'use client';
import UseMousePosition from '../cursor/usemouse';
import './services.scss'
import { useState } from 'react';
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react';
import { Mask } from '@react-three/drei';
import Word from '../texani/Word';

const paragraph = "I swear, you're like my least favorite person really annoying. You’re lucky you're cute, because your personality? Debatable. And yet, here I am. Youre like the worst decision I make every day — and I keep choosing you," 

const Services = () => {
  

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });


  const [ishovered, setIshovered] = useState(false);

  const {x, y} = UseMousePosition();
  const size = ishovered ? 400 : 40;

  return (
  <main className="main">


    <motion.div className='mask'
    animate={{WebkitMaskPosition:`${x-size/2}px ${y-size/2}px`,
WebkitMaskSize:`${size}px`  }}
   

    transition={{type:'tween', ease:'backOut'}}
    >
  <p className='pp' onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
    
  I never thought I could feel this way, but now I love you deeply. I want you close, I miss you every second, and to me, you’re the most beautiful soul in the world.
  ..I Really Loves You..
   <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    


  </head>
  <body>
    
  </body>
  </html></p>
    </motion.div>

    <motion.div className='content'>

    <Word paragraph={paragraph}/>

 

    </motion.div>


  </main>
  )
}

export default Services