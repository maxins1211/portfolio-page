import React from "react";

const SkillsSection = () => {
  // Simplified skill categories without detailed SVGs
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "JavaScript", icon: "skill-icons/javascript.svg" },
        { name: "TypeScript", icon: "skill-icons/typescript.svg" },
        { name: "React", icon: "skill-icons/react.svg" },
        { name: "Redux", icon: "skill-icons/redux.svg" },
        { name: "React Query", icon: "skill-icons/react-query.svg" },
        { name: "Angular", icon: "skill-icons/angular.svg" },
        { name: "HTML", icon: "skill-icons/html.svg" },
        { name: "CSS", icon: "skill-icons/css.svg" },
        { name: "Tailwind", icon: "skill-icons/tailwindcss.svg" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "NodeJS", icon: "skill-icons/nodejs.svg" },
        { name: "ExpressJS", icon: "skill-icons/express.svg" },
        { name: "Java", icon: "skill-icons/java.svg" },
        { name: "Spring Boot", icon: "skill-icons/spring-boot.svg" },
      ],
    },
    {
      name: "Infrastructure & Tools",
      skills: [
        {
          name: "AWS",
          icon: "skill-icons/aws.svg",
        },
        { name: "SQL", icon: "skill-icons/sql.svg" },
        { name: "PostgreSQL", icon: "skill-icons/postgresql.svg" },
        { name: "MongoDB", icon: "skill-icons/mongodb.svg" },
        { name: "Playwright", icon: "skill-icons/playwright.svg" },
        { name: "Jest", icon: "skill-icons/jest.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container">
        <h2
          className="text-4xl font-bold mb-16 text-center text-foreground"
          style={{ animation: "var(--animate-fade-in)" }}
        >
          Skills
        </h2>

        {/* Primary grid - category columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="mb-10"
              style={{
                animation: `var(--animate-fade-in-delay-${index + 1})`,
              }}
            >
              <div className="gradient-border card-hover p-6 bg-card h-full">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {category.name}
                </h3>

                <div className="w-12 h-1 bg-primary mx-auto mb-8" />

                {/* Nested grid for skills within each category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-accent"
                    >
                      <div className="w-8 h-8 mr-2 flex items-center justify-center ">
                        <img
                          src={skill.icon}
                          alt=""
                          width="36px"
                          height="36px"
                        />
                      </div>
                      <span className="text-foreground text-base group-hover:text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
