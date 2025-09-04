
import { useEffect, useRef, useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { AnimatePresence, useScroll } from "framer-motion";
import CursorTrail from "./components/cursor/CursorTrail";
import Prelodeho from "./components/Preloader";
import Hero from "./components/hero/Hero";




const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])




  return (
    <div>   

<AnimatePresence mode='wait'>
        {isLoading && <Prelodeho/>}
      </AnimatePresence>

<CursorTrail />

      <div className="test1" >

      <section id="Homepage" >
        
        <Navbar/>
        <Hero/>
    
        <div class="background-gradient"></div>
        <div class="background-noise"></div>
        
        
      </section>

      <section id="Services">
        <Parallax type="services"/> 
      </section> 
  </div>





    <section >
       <Services />
    </section>




   



      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />


      <section id="Contact">
        <Contact />
        <Footer/>
      </section>


   
      
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
    
  );
};

export default App;
