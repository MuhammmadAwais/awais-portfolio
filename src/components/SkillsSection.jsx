// src/components/SkillsSection.jsx

import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React", level: 55, category: "frontend" },
  { name: "WordPress", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 10, category: "frontend" },

  // Backend
  { name: "Node.js", level: 20, category: "backend" },
  { name: "C", level: 40, category: "backend" },
  { name: "C++", level: 50, category: "backend" },
  { name: "Python", level: 35, category: "backend" },
  { name: "Express", level: 5, category: "backend" },
  { name: "MongoDB", level: 5, category: "backend" },
  { name: "PostgreSQL", level: 5, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "Docker", level: 5, category: "tools" },
  { name: "Figma", level: 55, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
  { name: "WordPress-Elementor", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  // --- CHANGE 1: Set the default active category to 'frontend' ---
  // This prevents all skills from showing by default on mobile.
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* This div is now always visible */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                // --- CHANGE 2: Conditionally hide the 'all' button ---
                // We add a class to hide the button if the category is 'all' on mobile,
                // and show it on medium screens and up.
                category === "all" ? "hidden md:inline-block" : "inline-block",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
