'use client';
import UseMousePosition from '../cursor/usemouse';
import './services.scss'
import { useState } from 'react';
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react';
import { Mask } from '@react-three/drei';
import Word from '../texani/Word';

const paragraph = "Hello there! i'm Zihad Hasan, i can make a Charming Website just for you. Your satisfaction is my motivation! My skills are in Html, CSS, React, Java scripts, and Photoshop. I make designs in pixel-perfect and unique ways.to deliver the right product for your business. Lets get in contact and begin working on your dream website! I will provide you with unlimited revisions and one month of free support. Thanks for your interest."

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
    
     Well Well Well This is kind of shit that everybody wrotes. but noone truly care or
  do. so the qns is that if my shit is true or not. of course it's a lie :p but I can ensure you that I will cook harder than any other cooker you have ever saw ;p
  Thanks!  
  
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