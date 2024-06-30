import styles from './page.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '../components/smoothScroll';
import Projects from '../components/projects';
import Earthwa from '../components/earth/earthwa';



export default function Earthglove() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Earthwa/>
        <Projects />
        
      </main>
    </SmoothScroll>
  )
}