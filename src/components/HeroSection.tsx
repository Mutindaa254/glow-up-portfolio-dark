import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="home" className="min-h-screen pt-20 flex flex-col justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="space-y-6">
            <div className="space-y-2">
              <motion.p className="text-hackathon-purple dark:text-hackathon-blue font-medium" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.2
            }}>
                Hello, I'm
              </motion.p>
              <motion.h1 className="text-4xl md:text-6xl font-bold text-foreground" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3
            }}>Code Crafter9</motion.h1>
              <motion.h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-hackathon-blue to-hackathon-purple bg-clip-text text-transparent animate-glow" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.4
            }}>
                Hackathon Enthusiast & Developer
              </motion.h2>
            </div>
            
            <motion.p className="text-muted-foreground text-lg max-w-md" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }}>
              Building creative solutions at hackathons and beyond. Passionate about using technology to solve real-world problems.
            </motion.p>
            
            <motion.div className="flex space-x-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }}>
              <Button className="bg-hackathon-blue hover:bg-hackathon-blue/80 text-white">
                My Projects
              </Button>
              <Button variant="outline" className="border-hackathon-purple text-hackathon-purple hover:bg-hackathon-purple/10">
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div className="flex space-x-4 pt-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7
          }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-hackathon-blue transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-hackathon-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-hackathon-blue transition-colors">
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="relative">
            <div className="relative w-full h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-hackathon-blue/20 to-hackathon-purple/20 rounded-lg"></div>
              <div className="absolute inset-0 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">👨‍💻</div>
                  <p className="text-xl font-medium text-foreground">Code. Create. Win.</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/3 left-1/3 w-72 h-72 bg-hackathon-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/3 right-1/3 w-72 h-72 bg-hackathon-purple/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="flex justify-center pb-10">
        <motion.a href="#projects" initial={{
        y: -10,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>;
};
export default HeroSection;