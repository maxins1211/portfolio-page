import React from "react";
import { ExternalLink, Github } from "lucide-react";
import projectsdata from "../assets/data/projects";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          <span className="text-primary">My Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsdata
            .sort((a, b) => b.id - a.id)
            .map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 pb-15">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-md mb-2">
                    {project.description}
                  </p>

                  {project.date && (
                    <p className="text-sm text-muted-foreground">
                      {project.date}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Absolutely positioned icons */}
                <div className="absolute bottom-4 right-6">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
