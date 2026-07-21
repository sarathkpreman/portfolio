import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Certificates } from "@/sections/Certificates";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Works } from "@/sections/Works";
import { SectionFooter } from "./sections/SectionFooter";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">

        <Hero />
        <div className="container mx-auto px-5 sm:px-6">
          <hr className="mt-6 border-t border-foreground" />
          <SectionFooter number={"01"} title={"about"} description={"Get to know me better"} nextSectionId="about" />
        </div>

        <About />
        <div className="container mx-auto px-5 sm:px-6">
          <hr className="mt-6 border-t border-foreground" />
          <SectionFooter number={"02"} title={"works"} description={"Built & Shipped Projects"} nextSectionId="works" />
        </div>

        <Works />
        <div className="container mx-auto px-5 sm:px-6">
          <hr className="mt-6 border-t border-foreground" />
          <SectionFooter number={"03"} title={"experience"} description={"Professional experience"} nextSectionId="experience" />
        </div>

        <Experience />
         <div className="container mx-auto px-5 sm:px-6">
          <hr className="mt-6 border-t border-foreground" />
          <SectionFooter number={"04"} title={"certificates"} description={"Certifications i earned"} nextSectionId="certificates" />
        </div>

        <Certificates />
        <div className="container mx-auto px-5 sm:px-6">
          <hr className="mt-6 border-t border-foreground" />
          <SectionFooter number={"05"} title={"contact"} description={"Let's build something together"} nextSectionId="contact" />
        </div>

        <Contact />
        
      </main>
    </div>
  );
}

export default App;