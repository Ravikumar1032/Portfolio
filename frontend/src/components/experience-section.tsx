import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional experience gained through internships and hands-on projects in the tech industry.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center mb-12`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} mb-4 md:mb-0`}>
                  <Card className="bg-card border-border ml-16 md:ml-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">{experience.title}</h3>
                      <p className="text-accent font-medium mb-2">{experience.company}</p>
                      <Badge variant="outline" className="text-muted-foreground text-sm mb-4">
                        {experience.period}
                      </Badge>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <img
                    src={experience.image}
                    alt={experience.company}
                    className="rounded-xl shadow-lg w-full h-auto hidden md:block"
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
