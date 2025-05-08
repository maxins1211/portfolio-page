import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "frigorithm",
    description:
      "fridgorithm is a web app that takes the ingredients you already have — whether you snap a photo, say them out loud, or type them in — and instantly gives you a simple, delicious recipe",
    image: "/images/frigorithm.png",
    tags: ["React", "Express", "Node", "SQL", "Azure"],
    demoUrl: "https://devpost.com/software/fridgorithm",
    githubUrl: "https://github.com/sophieynw/fridgorithm",
    date: "March 2025",
  },
  {
    id: 2,
    title: "Brain Buddy",
    description:
      "Meet BrainBuddy, your AI companion for smarter, faster learning. It creates flashcards, answers questions, and helps with tough concepts anytime, anywhere.BrainBuddy: Your Smarter Way to Learn",
    image: "images/brain-buddy.png",
    tags: ["React", "Flask", "Node", "SQL"],
    demoUrl: "https://devpost.com/software/brainbuddy-xrq4du",
    githubUrl: "https://github.com/GrewalCreator/BrainBuddy",
    date: "Jan 2025",
  },
  {
    id: 3,
    title: "Weather app",
    description:
      "A simple weather app that takes a city name as input and displays the current weather conditions. Built to practice fetching data from an external weather API",
    image: "images/weather-app.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://maxins1211.github.io/weather-app/",
    githubUrl: "https://github.com/maxins1211/weather-app",
    date: "Jan 2024",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          <span className="text-primary">My Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
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

              <div className="p-6 pb-14">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-md mb-2">
                  {project.description}
                </p>

                {project.date && (
                  <p className="text-xs text-muted-foreground">
                    {project.date}
                  </p>
                )}
              </div>

              {/* Absolutely positioned icons */}
              <div className="absolute bottom-4 right-6">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
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
