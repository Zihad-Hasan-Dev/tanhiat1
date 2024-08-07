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
    id: 11,
    title: "hotelzmanaze",
    img: "https://i.ibb.co/WfrK2Q4/hotela.png",
    desc: "Welcome to HotelzManage, your ultimate solution for seamless hotel management and booking. Whether you are a hotel owner seeking to streamline operations or a traveler looking for the perfect stay, HotelzManage has everything you need. Our platform offers comprehensive tools for managing reservations, guest services, and property maintenance",
    link: "https://hotelzmanaze.vercel.app/",
    link2: "https://github.com/maruf449/HotelZmanaZe",

  },

  {
    id: 22,
    title: "CarZ Codder",
    img: "https://i.ibb.co/Rc85KJN/carz.png",
    desc: "Welcome to CarZ Codder, your ultimate destination for a seamless car rental experience. Whether you are planning a family vacation, a business trip, or simply need a reliable vehicle for a short-term need, we've got you covered. Our website offers an extensive selection of vehicles, ranging from economical compact cars to luxurious sedans, spacious SUVs, and versatile vans.",
    link: "https://carzcodder.vercel.app/",
    link2: "https://github.com/maruf449/CarZ-rental",

  },

  {
    id: 33,
    title: "academyzudemu",
    img: "https://i.ibb.co/4SmVstp/aca.png",
    desc: "Welcome to academyzudemu, your premier platform for online learning and skill development.[You can create courses and people can buy your courses just like udemy.] You can also manage your courses and students!!",
    link: "https://academyzudemu.vercel.app/",
    link2: "https://github.com/maruf449/Academyz",

  },

  {
    id: 44,
    title: "ZihadsBlog",
    img: "https://i.ibb.co/fNRZbNb/mannns.png",
    desc: "Welcome to Zihad's Blogs, a modern and aesthetically pleasing platform where I Write blogs and people can like, comments.usually i post about my daily life and web development. [IT WILL TAKE SOME TIME TO LOAD UP SINCE ITS A FREE DOMAIN SO PLS WAIT] ",
    link: "https://zihadsblog.onrender.com/",
    link2: "https://github.com/maruf449/ZihAD-S-BLOG",

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
    title: "archiztectureZ(ONLY Design)",
    img: "https://i.ibb.co/zPtwbzp/watanabe.png",
    desc: "in this Website you will find One OF the best Ui Design both modern and aesthetics with 5 different pages its only Frontend work to show my Frontend Skills ",
    link: "https://archiztecturez.vercel.app/",
    link2: "https://github.com/Zihad-Hasan-Dev/Artitacz",
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
    id: 44,
    title: "LiveDocsz",
    img: "https://i.ibb.co/LPhbfMY/live.png",
    desc: "Welcome to LiveDocs, your premier platform for real-time document collaboration and management. Whether you’re working on a project with a team, sharing important documents with clients, or managing personal files, LiveDocs offers a seamless and secure environment for all your document needs. Our platform is designed to enhance productivity and streamline workflows through advanced features and intuitive design.",
    link: "https://livedocsz.vercel.app/",
    link2: "https://github.com/maruf449/Livedocsz",

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
