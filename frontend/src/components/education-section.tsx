import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { 
  GraduationCap, 
  BookOpen, 
  School,
  Trophy
} from "lucide-react";

// Icon mapping object
const iconMap = {
  GraduationCap,
  BookOpen,
  School,
};

export default function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">
            Education
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Academic journey and educational background that shaped my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {education.map((edu, index) => {
            const IconComponent = iconMap[edu.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border card-hover overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    {/* Mobile: Stacked Layout, Desktop: Flex Layout */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                      {/* Icon Container - Centered on mobile, left-aligned on desktop */}
                      <motion.div 
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${edu.gradient} rounded-lg md:rounded-xl flex items-center justify-center text-white mx-auto sm:mx-0 flex-shrink-0`}
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        {IconComponent && (
                          <motion.div
                            animate={{ 
                              rotate: [0, 360] 
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                          </motion.div>
                        )}
                      </motion.div>
                      
                      {/* Content Container */}
                      <div className="flex-1 text-center sm:text-left w-full">
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary text-base sm:text-lg font-medium mb-3">
                          {edu.institution}
                        </p>
                        
                        {/* Badges - Stacked on mobile, inline on larger screens */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                          <Badge variant="outline" className="font-mono text-sm">
                            {edu.period}
                          </Badge>
                          <Badge className="bg-primary/10 text-primary text-sm">
                            {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                      {edu.description}
                    </p>

                    {/* Achievement Badge */}
                    {edu.achievement && (
                      <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                          <p className="text-accent font-medium text-sm sm:text-base">
                            {edu.achievement}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
