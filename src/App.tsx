import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
