import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Certificates } from "@/sections/Certificates";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <div className="container mx-auto px-5 sm:px-6">
          <hr className="mt-6 border-t border-foreground" />
        </div>

        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;