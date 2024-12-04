import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-screen h-screen bg-primary text-textColor">
      <Header />
      <Toaster />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
