import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frontendSkills = [
  { name: "JavaScript", level: 98 },
  { name: "React / Next.js", level: 95 },
  { name: "HTML / CSS", level: 98 },
  { name: "React Native", level: 88 },
  { name: "SwiftUI / UIKit", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 90 },
];

const backendSkills = [
  { name: "C / C++", level: 90 },
  { name: "Java / Spring Boot", level: 90 },
  { name: "C#", level: 96 },
  { name: "Python", level: 85 },
  { name: "PHP", level: 80 },
  { name: "PostgreSQL", level: 88 },
  { name: "REST APIs", level: 92 },
];

const devopsSkills = [
  { name: "Linux / Shell Scripting", level: 85 },
  { name: "Git & GitHub", level: 95 },
];

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "ESICIA",
    period: "2026 - Present",
    description: "Gaining hands-on experience in full-stack development, contributing to frontend, backend, API integration, database management, testing, and debugging.",
  },
  {
    role: "Trainee",
    company: "AUCA Innovation Center",
    period: "2026 - Present",
    description: "Mastering advanced AI, web and mobile development, UI/UX, cybersecurity, and DevOps skills, alongside entrepreneurship, in partnership with the Mastercard Foundation.",
  },
  {
    role: "Trainee",
    company: "Igire Rwanda / SheCanCode Program",
    period: "2025 - 2026",
    description: "Built responsive user interfaces and integrated APIs as part of a program supporting women in tech across Rwanda, sponsored by the Mastercard Foundation.",
  },
  {
    role: "Trainee",
    company: "SWIFT",
    period: "2025 - 2026",
    description: "Received hands-on training building fast, efficient iOS applications using SwiftUI.",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-yellow-400 font-medium tracking-widest text-sm uppercase">
            Skills & Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4">
            What I <span className="text-primary italic">Bring</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Frontend
            </h3>
            <div className="space-y-4 mb-8">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <div className="mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Backend
            </h3>
            <div className="space-y-4 mb-8">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <div className="mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-yellow-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              DevOps & Tools
            </h3>
            <div className="space-y-4">
              {devopsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  <div className="mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-yellow-400"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-yellow-400" />
                  <span className="text-sm text-yellow-400 font-medium">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-semibold text-foreground mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-muted-foreground/80 mt-2 text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
