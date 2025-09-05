import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { AnimatePresence } from "framer-motion";
import CursorTrail from "./components/cursor/CursorTrail";
import Prelodeho from "./components/Preloader";
import Hero from "./components/hero/Hero";
import Lock from "./components/lock/Lock";
import Romantic from "./components/romantic/romantic";

const App = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    setShowPreloader(true);
    setTimeout(() => setShowPreloader(false), 2000); // show preloader for 2s
  };

  // Always show lock screen first
  if (!unlocked) {
    return <Lock onSuccess={handleUnlock} />;
  }

  if (showPreloader) {
    return (
      <AnimatePresence mode="wait">
        <Prelodeho />
      </AnimatePresence>
    );
  }

  return (
    <div>
      <CursorTrail />
      <div className="test1">
        <section id="Homepage">
          <Navbar />
          <Hero />
          <div className="background-gradient"></div>
          <div className="background-noise"></div>
        </section>

        <section id="Services">
          <Parallax type="services" />
        </section>
      </div>

      <section>
        <Romantic />
      </section>

      <section>
        <Services />
      </section>

      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default App;
