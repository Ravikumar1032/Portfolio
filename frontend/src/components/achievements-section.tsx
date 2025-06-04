import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { 
  Code2, 
  Building2, 
  Bot, 
  Globe, 
  GitBranch, 
  Trophy 
} from "lucide-react";

// Icon mapping object
const iconMap = {
  Code2,
  Building2,
  Bot,
  Globe,
  GitBranch,
  Trophy,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition, certifications, and continuous learning milestones that demonstrate my commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border card-hover h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
                        {IconComponent && <IconComponent className="h-8 w-8" />}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{achievement.title}</h3>
                      <Badge variant="outline" className="mb-3">
                        {achievement.organization}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    <div className="flex justify-center">
                      <Badge className="bg-primary/20 text-primary">
                        {achievement.status}
                      </Badge>
                    </div>
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