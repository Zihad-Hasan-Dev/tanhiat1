'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "React",
        description: "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.",
        speed: 0.5
    },
    {
        title: "HTML",
        description: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page.",
        speed: 0.5
    },
    {
        title: "CSS",
        description: "CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).",
        speed: 0.67
    },
    {
        title: "Java scripts",
        description: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
        speed: 0.8
    },
    {
        title: "FRONT-END",
        description: "A Front-End Developer is someone who creates websites and web applications",
        speed: 0.8
    },
    {
        title: "BACK-END",
        description: "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

