import React from "react";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="gradient-border p-6 md:p-8 bg-card shadow-md backdrop-blur-sm">
          <div className="text-left md:text-xl space-y-6">
            <p className="italic font-medium text-muted-foreground">
              I'm a dedicated Software Development student at Sheridan College
              with a passion for creating innovative web solutions. While
              pursuing my education full-time, I also work as a CNC Operator on
              weekends at S&C Electric Company, which has taught me valuable
              skills in precision, attention to detail, and time management.
            </p>

            <p className="italic font-medium text-muted-foreground">
              Beyond my coursework, I've independently learned the MERN stack
              through The Odin Project and other resources, demonstrating my
              commitment to self-directed learning and professional growth. This
              combination of formal education and self-taught skills has given
              me a comprehensive understanding of full-stack development
            </p>
            <p className="italic font-medium text-muted-foreground">
              Balancing full-time work with academic pursuits has strengthened
              my time management and adaptability. I'm eager to apply my
              technical knowledge and work ethic in a co-op position where I can
              contribute meaningfully while continuing to expand my expertise.
            </p>
            <div className="text-center flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
