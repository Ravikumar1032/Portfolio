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
  Trophy,
} from "lucide-react";

// Icon mapping
const iconMap = {
  Code2,
  Building2,
  Bot,
  Globe,
  GitBranch,
  Trophy,
};

// Utility: pick main color for box shadow from gradient
const gradientColorMap: Record<string, string> = {
  "Code2": "rgba(249, 115, 22, 0.7)",     // orange-500
  "Building2": "rgba(59, 130, 246, 0.7)",  // blue-500
  "Bot": "rgba(34, 197, 94, 0.7)",         // green-500
  "Globe": "rgba(168, 85, 247, 0.7)",      // purple-500
  "GitBranch": "rgba(75, 85, 99, 0.7)",    // gray-600
  "Trophy": "rgba(234, 179, 8, 0.7)",      // yellow-500
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">
            Achievements & Certifications
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Recognition, certifications, and continuous learning milestones that demonstrate my commitment to excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            const shadowColor = gradientColorMap[achievement.icon] || "rgba(249, 115, 22, 0.7)";
            const transparentShadow = shadowColor.replace("0.7", "0");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border card-hover h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center mb-4">
                      <motion.div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
                        animate={{
                          scale: [1, 1.15, 1],
                          boxShadow: [
                            `0 0 0 0 ${shadowColor}`,
                            `0 0 0 10px ${transparentShadow}`,
                            `0 0 0 0 ${shadowColor}`,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {IconComponent && (
                          <motion.div
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                          </motion.div>
                        )}
                      </motion.div>

                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>

                      <Badge variant="outline" className="mb-3 text-xs sm:text-sm">
                        {achievement.organization}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    <div className="flex justify-center">
                      <Badge className="bg-primary/20 text-primary text-xs sm:text-sm">
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
