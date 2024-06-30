'use client';
import Word from './Word';
import Character from './Character';

const paragraph = "Hello there! i'm Zihad Hasan, i can make a Charming Website just for you. Your satisfaction is my motivation! My skills are in Html, CSS, React, Java scripts, and Photoshop. I make designs in pixel-perfect and unique ways.to deliver the right product for your business. Lets get in contact and begin working on your dream website! I will provide you with unlimited revisions and one month of free support. Thanks for your interest."

export default function Opatext() {

  const words = paragraph.split(" ")
  return (
    <main>

        <Character paragraph={paragraph} />
    </main>
  )
}