import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FullGallery from "./pages/FullGallery";

// Main portfolio page component
function MainPortfolio() {
  useEffect(() => {
    // Global scroll to top on app mount/page reload
    const ensureScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    ensureScrollToTop();

    // Execute after render to ensure it overrides any other scroll behavior
    const timeoutId = setTimeout(ensureScrollToTop, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full min-h-screen" style={{ overflow: "visible" }}>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
    </Router>
  );
}
