import React from "react";

const SkillsSection = () => {
  // Simplified skill categories without detailed SVGs
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Vue" },
        { name: "TypeScript" },
        { name: "Tailwind" },
        { name: "Next.js" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "Python" },
        { name: "Django" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "GraphQL" },
        { name: "REST API" },
      ],
    },
    {
      name: "Tools",
      skills: [
        {
          name: "Git",
        },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Figma" },
        { name: "Webpack" },
        { name: "Jest" },
        { name: "CI/CD" },
        { name: "Linux" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 w-full bg-background">
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
                      <div className="w-8 h-8 rounded-md border border-border mr-3 flex items-center justify-center bg-background">
                        {/* Placeholder for icon */}
                        <span className="text-xs text-foreground opacity-40">
                          {skill.icon}
                        </span>
                      </div>
                      <span className="text-foreground text-sm group-hover:text-primary transition-colors duration-200">
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
