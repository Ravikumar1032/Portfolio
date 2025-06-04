import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/profile/hero_image.jpg"; // Import the image

export default function HeroSection() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleDownloadResume = () => {
  //   // Replace with your actual resume PDF URL
  //   const resumeUrl = "/assets/resume/Ravikumar_Resume.pdf";
  //   const link = document.createElement('a');
  //   link.href = resumeUrl;
  //   link.download = "Ravikumar_Naik_Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 gradient-bg animate-gradient opacity-10" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-gradient">Ravikumar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
                Full Stack Developer & <br />
                <span className="text-accent font-mono">
                  Computer Science Student
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Passionate about building innovative web applications using the
                MERN stack. Currently working as a Jr. Software Developer Intern
                at Ezfinanz, with expertise in React, Node.js, and modern web
                technologies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  size="lg"
                >
                  Get In Touch
                </Button>
                {/* <Button
                    onClick={handleDownloadResume}
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button> */}
              </div>

            
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://github.com/Ravikumar1032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravikumar-naik-mudhavath-46a36b252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/ravikumar__246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="mailto:ravikumarnaik1015@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                  aria-label="Email Contact"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl transform rotate-6" />
                <img
                  src={heroImage}
                  alt="Ravikumar - Full Stack Developer"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover animate-float border-2 border-accent/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
    </>
  );
}