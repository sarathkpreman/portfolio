import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";

function App() {

  return (
   <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main >
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
   </div>
  )
}

export default App
