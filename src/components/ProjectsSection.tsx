import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "HealthTrack AI",
    description: "A health monitoring system that uses AI to predict potential health issues based on various metrics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    demoUrl: "#",
    githubUrl: "https://github.com",
    tags: ["React", "TensorFlow.js", "Firebase"],
    category: "AI",
  },
  {
    id: 2,
    title: "EcoSmart Home",
    description: "An IoT solution for smart homes that focuses on energy efficiency and environmental sustainability.",
    image: "public/lovable-uploads/92b4a6f7-2e7e-4e23-8a34-6113138d9ec1.png",
    demoUrl: "#",
    githubUrl: "https://github.com",
    tags: ["IoT", "Node.js", "MQTT", "React"],
    category: "IoT",
  },
  {
    id: 4,
    title: "StudyBuddy",
    description: "A collaborative learning platform that connects students working on similar topics.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    demoUrl: "#",
    githubUrl: "https://github.com",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    category: "Web",
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI", "IoT", "Web3", "Web"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of innovative projects I've built during various hackathons, showcasing my technical skills and creative problem-solving.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`rounded-full ${
                filter === category 
                  ? "bg-hackathon-blue hover:bg-hackathon-blue/90" 
                  : "hover:text-hackathon-blue"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-hackathon-blue hover:text-hackathon-blue/80 flex items-center gap-1">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-hackathon-purple hover:text-hackathon-purple/80 flex items-center gap-1">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
