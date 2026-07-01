import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";

function App() {

  return (
  <div className="min-h-screen">
    <Navbar />
    <main className="overflow-x-hidden">
      <Hero />
      <div className="container mx-auto px-6">
        <hr className="border-t border-foreground" />
      </div>
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  </div>
);
}

export default App
