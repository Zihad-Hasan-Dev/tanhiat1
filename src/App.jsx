
import { useEffect, useRef, useState } from "react";
import "./app.scss";

import { AnimatePresence, useScroll } from "framer-motion";
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


      <div className="test1" >

      <section id="Homepage" >
        
        <Hero/>
    
        <div class="background-gradient"></div>
        <div class="background-noise"></div>
        
        
      </section>

  </div>

    </div>
    
  );
};

export default App;
