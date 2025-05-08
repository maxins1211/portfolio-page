import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between px-4 py-16 md:py-0"
    >
      {/* Main content - centered */}
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="container max-w-4xl mx-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-center opacity-0 animate-fade-in">
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/avatar/lam.jpg"
                  alt="Nghi Lam Vo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Nghi Lam
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Vo
              </span>
            </h1>

            <p className="text-base md:text-3xl text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
              A 2nd year Software Development student at Sheridan College with
              strong JavaScript skills and MERN stack experience. Passionate
              about full-stack development and actively seeking co-op
              opportunities to apply and enhance my technical abilities in a
              professional environment.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-wrap justify-center gap-3">
              <a href="#about" className="cosmic-button">
                About me
              </a>
              <a href="#projects" className="cosmic-button">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow - at bottom of visible viewport */}
      <div className="mt-8 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
