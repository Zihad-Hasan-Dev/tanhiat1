import { useEffect, useState } from "react";
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
import { SITE_PIN, PIN_COOKIE } from "./config/pin";

const hasValidCookie = () =>
  document.cookie.split("; ").some((c) => c === `${PIN_COOKIE}=${SITE_PIN}`);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // Check PIN cookie once on mount
    if (hasValidCookie()) setUnlocked(true);

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  // Show Lock screen until the correct PIN is provided
  if (!unlocked) {
    return <Lock onSuccess={() => setUnlocked(true)} />;
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Prelodeho />}
      </AnimatePresence>

      <CursorTrail />

      <div className="test1">
        <section id="Homepage">
          <Navbar />
          <Hero />
          {/* fixed: class → className */}
          <div className="background-gradient"></div>
          <div className="background-noise"></div>
        </section>

        <section id="Services">
          <Parallax type="services" />
        </section>
      </div>

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
