import Sidebar from "../sidebar/Sidebar";
import "./Footer.scss";
import { motion } from "framer-motion";


const variants = {
    initial: {
      x: 600,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

const Footer = () => {
    
  return (
    <div className="navbar1">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper1">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
       
      
        <div className="social1">
          <a href="https://www.facebook.com/zihad.hasan.92754/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/zihad_hasan__/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@zihagamers4073">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/Zihad-hasan-maruf">
            <img src="/github.png" alt="" />
          </a>
        </div> 
        </motion.span>

        <motion.div
        variants={variants}
        initial="initial"
       whileInView="animate"

        className="copyright"

        >

Copyright©2024; Design by Zihad Hasan

        </motion.div>

      </div> 
    </div>
  );
};

export default Footer;
