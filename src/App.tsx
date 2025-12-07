

import { Contact } from "lucide-react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";




const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
