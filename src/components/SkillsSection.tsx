
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "Flask", "MongoDB"]
  },
  {
    category: "Tools & Other",
    items: ["Git", "Docker", "AWS", "Firebase", "GraphQL"]
  }
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life during hackathons and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="bg-card border border-border rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold mb-4 text-hackathon-blue dark:text-hackathon-blue">
                {skillGroup.category}
              </h3>
              
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill) => (
                  <motion.li 
                    key={skill}
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <div className="mr-2 w-2 h-2 rounded-full bg-hackathon-purple"></div>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
