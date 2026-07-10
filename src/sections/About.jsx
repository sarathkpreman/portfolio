import { useState } from "react";

import { Profile } from "@/components/Profile";
import { JourenyCard }from "@/components/JourneyCard";
import { OutsideCard } from "@/components/OutsideCard";
import { TechStackCard } from "@/components/TechStackCard";
import { CurrentLearningCard } from "@/components/CurrentLearningCard";


export const About = () => {

  const [showOusideCard, setShowOutsideCard] = useState(false);
  const [showCurrentLearningCard, setShowCurrentLearningCard] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto px-4 pb-0 pt-8 sm:px-6 sm:pt-14 sm:pb-4 lg:pt-16 lg:pb-18">

        {/* Header */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div className="space-y-2 sm:space-y-3">
            <p className="font-display text-primary text-sm sm:text-base">01 /</p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
              ABOUT.
              <span className="ml-1 font-mono text-2xl font-normal lowercase sm:text-3xl lg:text-4xl">
                json
              </span>
            </h2>
            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              Get to know me better.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 sm:mt-8 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <Profile />
          </div>

          <div
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e)=> {
              if(e.key == "Enter" || e.key == " ") {
                e.preventDefault();
                setShowOutsideCard((prev) => !prev)
              }
            }}  
            onClick={() => setShowOutsideCard((prev) => !prev)}
          >
            {showOusideCard ? <OutsideCard /> : <JourenyCard />}
          </div>

          <div
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e)=> {
              if(e.key == "Enter" || e.key == " ") {
                e.preventDefault();
                setShowCurrentLearningCard((prev) => !prev)
              }
            }}
            onClick={() => setShowCurrentLearningCard((prev) => !prev)}
          >
            {showCurrentLearningCard ? <CurrentLearningCard /> : <TechStackCard />}
          </div>
        </div>
      </div>
    </section>
  );
};

