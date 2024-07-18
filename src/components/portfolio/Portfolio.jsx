import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import HyperpixelHover from "../hhyper/hyprx";
import RoundedButton from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

const items = [

  {
    id: 42,
    title: "CobrazCase",
    img: "https://i.ibb.co/3TzPkWv/nextcase.png",
    desc: "This is an E-commerce Website about phone cases. where you can order phone case and customize as your wish. different features haves different prices. where owner have admin dashboard to control everything. this is my best work !!!",
    link: "https://cobrazcase.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev/cobrazcase",

  },

  
  {
    id: 1231,
    title: "ZShop",
    img: "https://i.ibb.co/0ZRbB70/test2.png",
    desc: "This is an E-commerce Website Where many items are available for sale. Many categories to choose from. Where you have to be login in order to buy. also with aesthetics UI AND UX design using next js and tailwind css",
    link: "https://zihadecom.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev/e-com",

  },


  {
    id: 1,
    title: "brainwave (ONLY Design)",
    img: "https://i.ibb.co/ykM65Nv/id1.png",
    desc: "A website about ai and modern tech. it is a prototype a demo with aesthetics UI AND UX design [PLEASE WAIT A MIN TO LOAD UP SINCE IT IS A FREE HOSTING SERVER IT MAY TAKE SOME TIMES] ",
    link: "https://brainwow.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev/brainwow",
  },


  {
    id: 5,
    title: "Portfolio", 
    img: "https://i.ibb.co/bP4h5zQ/miamoto.png",
    desc: "it is my old portfolio which i created a while ago. make sure to visit it[PLEASE WAIT A MIN TO LOAD UP SINCE IT IS A FREE HOSTING SERVER IT MAY TAKE SOME TIMES] ",
    link: "https://zihadhasandeveloper.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev",

  },
  

  {
    id: 4232,
    title: "WorkFlow WEB",
    img: "https://i.ibb.co/xL7RC2s/websafi.webp",
    desc: "this website about workflow where you can maintain your work in a amazing manner with high-end design and dark themed you can plan your work here!",
    link: "https://adorable-babka-70fdc0.netlify.app/",
    link2: "https://github.com/Zihad-hasan-maruf/SAAS-Automation",

  },


  {
    id: 9,
    title: "AI Generate Photos Web",
    img: "https://hotpot.ai/images/site/ogDefaultImage.jpg",
    desc: "its a AI Image generator website. where you can generate any image to your liking and post it on the community where other can see your posted image. in order to get your img you just have to describe it ;) [ITS A BACK-END PROJECT USING OPENAI AND MONGODB]",
    link: "https://incredible-beignet-7b43dd.netlify.app/",
    link2: "https://github.com/Zihad-hasan-maruf/Ai-Gallery",

  },

  {
    id: 2,
    title: "Blog Website",
    img: "https://i.ibb.co/gJMcW2X/hahaha.png",
    desc: "ITS a blog website where you can sign in or sign up, publish posts, and comment, check views etc with working backend [ITS A BACK-END PROJECT USING MONGODB, PRISMA AND FIREBASE] ",
    link: "https://zihadblogz.netlify.app/",
    link2: "https://github.com/Zihad-hasan-maruf/Blogz-App",

  },

  {
    id: 4,
    title: "metaverse (ONLY Design)",
    img: "https://i.ibb.co/JQ97N35/id3.png",
    desc: "This is an Awesome Website about metaverse and VR make sure to check it out. it is a prototype a demo with aesthetics UI AND UX design [PLEASE WAIT A MIN TO LOAD UP SINCE IT IS A FREE HOSTING SERVER IT MAY TAKE SOME TIMES] ",
    link: "https://metawow.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev/metawow",


  },

  {
    id: 3,
    title: "parrallax EFFECT (ONLY Design)",
    img: "https://i.ibb.co/RTdV6zs/id2.png",
    desc: "This is an Awesome parallax effect make sure to check it out. it is a prototype a demo with aesthetics UI AND UX design [PLEASE WAIT A MIN TO LOAD UP SINCE IT IS A FREE HOSTING SERVER IT MAY TAKE SOME TIMES] ",
    link: "https://parrallax13.netlify.app/",
    link2: "https://github.com/Zihad-Hasan-Dev",


  },


];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}> 

         <h2>{item.title}</h2>

<p> {item.desc} </p>

            <div className="box">

           
                 <a href={item.link} target="_blank"> <RoundedButton> <p>Visit Demo </p> </RoundedButton> </a>

                 <div className="gitt">

                  <a target="_blank" href={item.link2}>
                  <Magnetic>
     <img src="github.png" alt="" />
                  </Magnetic>

           

                  </a>

                 </div>

             </div>
          
       
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
