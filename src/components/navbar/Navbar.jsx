import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion, useTransform } from "framer-motion";

const Navbar = () => {


  
  return (
    <div className="navbar"  >
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Zihad Hasan DEV
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/a.jmyl.ywm" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/zihad_hasan__/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@zihagamers4073" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
         
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
