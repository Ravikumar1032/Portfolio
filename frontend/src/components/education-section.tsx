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
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic journey and educational background that shaped my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
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
                <Card className="bg-card border-border card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center text-white`}>
                        {IconComponent && <IconComponent className="h-8 w-8" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-primary text-lg">{edu.institution}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline" className="font-mono">
                            {edu.period}
                          </Badge>
                          <Badge className="bg-primary/10 text-primary">
                            {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.achievement && (
                      <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-accent" />
                          <p className="text-accent font-medium">{edu.achievement}</p>
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