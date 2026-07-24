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
    <section id="about" className="relative overflow-hidden mt-5">
      <div className="container mx-auto px-4 pb-0 pt-8 sm:px-6 sm:pt-14 sm:pb-4 lg:pt-16 lg:pb-18">

        {/* Section heading */}
        <header className="mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="w-fit border border-black px-3 py-1 text-xs font-black tracking-[0.18em]">
                01 / ABOUT
              </span>

              <span className="hidden font-mono text-xs text-black/60 sm:inline">
                Engineer • Builder • Learner
              </span>
            </div>

          <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
            BUILDING WITH PURPOSE
          </h2>

        <p className="font-mono text-sm leading-7 text-black/70">
            Computer Science graduate building modern web applications while
            growing in backend engineering, AI, and machine learning.
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

