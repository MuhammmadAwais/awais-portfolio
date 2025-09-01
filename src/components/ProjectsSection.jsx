import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie UI App with Functionality",
    description:
      "A beautiful Movie UI app using React and Tailwind. Functionality included using TMDB api and appwrite as a BAAS.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Appwrite"],
    demoUrl: "https://movie-square.vercel.app/",
    githubUrl: "https://github.com/MuhammmadAwais/Movie-Square",
  },
  {
    id: 2,
    title: "Advance Weather App",
    description:
      "Interactive weather app with data visualization and background according to current weather.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "OpenWeatherAPI"],
    demoUrl: "https://weatherly-gold.vercel.app/",
    githubUrl: "https://github.com/MuhammmadAwais/Weatherly",
  },
  {
    id: 3,
    title: "Amazon UI clone with Functionality",
    description:
      "Amazon UI clone with user authentication using local storage and Functionality included.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://amazon-front-end-clone-eta.vercel.app/",
    githubUrl: "https://github.com/MuhammmadAwais/Amazon-FrontEnd-clone",
  },
  {
    id: 4,
    title: "Advance Typing Test",
    description:
      "Advance typing test app with authentication using appwrite ,Leadboard ,different time settings ,dark mode toggle ,different levels and much more!",
    image: "/projects/project4.png",
    tags: ["JavaScript", "FireBase", "Tailwind"],
    demoUrl: "https://velvety-marshmallow-53643e.netlify.app/",
    githubUrl: "https://github.com/MuhammmadAwais/TypingMasterPro",
  },
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "Simple but clean and stylish Expense Tracker. Functionality included using local storage.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://expense-tracker-app-sand-six.vercel.app/",
    githubUrl: "https://github.com/MuhammmadAwais/Expense-Tracker-App",
  },
  {
    id: 6,
    title: "iPhone Calculator clone",
    description:
      "Simple but clean and stylish iphone calculator. Functionality included using local storage such as math operations and toggle dark mode.",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://calculator-six-beta-47.vercel.app/",
    githubUrl: "https://github.com/MuhammmadAwais/Calculator/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MuhammmadAwais/"
          >
            Check More projects on Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
