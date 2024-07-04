
import { useEffect, useRef, useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { AnimatePresence, useScroll } from "framer-motion";
import CursorTrail from "./components/cursor/CursorTrail";
import Picslid from "./components/SlidingImages";
import Earthglove from "./earthapp/page";
import Prelodeho from "./components/Preloader";
import Comataa from "./certi/page";




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
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services"/> 
      </section> 
  </div>

  <Earthglove/>




    <section >
       <Services />
    </section>



<main className="coma">
   <Comataa/>
</main>
   



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
