import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Pin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Professional experience gained through internships and hands-on projects in the tech industry.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Responsive positioning */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center mb-8 md:mb-12`}
              >
                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} mb-4 md:mb-0`}>
                  <Card className="bg-card border-border ml-12 sm:ml-16 md:ml-0 card-hover">
                    <CardContent className="p-4 sm:p-6">
                      {/* Title with pinning animation for first experience */}
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-primary">
                          {experience.title}
                        </h3>
                        {index === 0 && (
                          <motion.div
                            animate={{
                              rotate: [0, -15, 15, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          >
                            <Pin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                          </motion.div>
                        )}
                      </div>
                      
                      <p className="text-accent font-medium mb-2 text-sm sm:text-base">
                        {experience.company}
                      </p>
                      
                      <Badge variant="outline" className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                        {experience.period}
                      </Badge>
                      
                      <ul className="text-muted-foreground text-xs sm:text-sm space-y-2">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot - Larger and more prominent */}
                {index === 0 ? (
                  <motion.div 
                    className="absolute left-3 sm:left-5 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary rounded-full border-4 border-background shadow-lg z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0 rgba(99, 102, 241, 0.7)", "0 0 0 10px rgba(99, 102, 241, 0)", "0 0 0 0 rgba(99, 102, 241, 0.7)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ) : (
                  <div className="absolute left-3 sm:left-5 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                )}
                
                {/* Company Image - Hidden on mobile */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} hidden md:block`}>
                  <motion.img
                    src={experience.image}
                    alt={experience.company}
                    className="rounded-xl shadow-lg w-full h-auto max-h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
