import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frontendSkills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Vue.js", level: 80 },
];

const backendSkills = [
  { name: "Node.js / Express", level: 90 },
  { name: "Python / Django", level: 85 },
  { name: "PostgreSQL / MongoDB", level: 88 },
  { name: "REST & GraphQL APIs", level: 92 },
];

const devopsSkills = [
  { name: "Docker / Kubernetes", level: 82 },
  { name: "AWS / GCP", level: 85 },
  { name: "CI/CD Pipelines", level: 88 },
  { name: "Git & GitHub", level: 95 },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading full-stack development, designing system architecture, and mentoring developers across frontend and backend teams.",
  },
  {
    role: "Software Engineer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built end-to-end web applications including RESTful APIs, database design, and responsive frontends for enterprise clients.",
  },
  {
    role: "Junior Developer",
    company: "Startup",
    period: "2018 - 2020",
    description: "Developed full-stack features using React and Node.js, contributing to both client-facing and backend services.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-medium tracking-widest text-sm uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4">
            Full-Stack
            <br />
            <span className="text-primary italic">Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Bio & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a full-stack software engineer with 5+ years of experience building 
              scalable applications from database to UI. I love architecting robust 
              backend systems and crafting intuitive user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              From designing RESTful APIs and optimizing database queries to building 
              responsive frontends, I enjoy the challenge of end-to-end development 
              and delivering complete solutions.
            </p>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-accent"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
                  <span className="text-sm text-accent font-medium">
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

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.05 }}
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
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
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
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 1.0 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 p-8 bg-primary rounded-2xl"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-accent">
                    {stat.value}
                  </span>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
