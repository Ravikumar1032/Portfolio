import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "250+", label: "LeetCode Problems" },
  { value: "8+", label: "Months Experience" },
  { value: "7.8", label: "CGPA" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated Computer Science Engineering student with hands-on
            experience in programming, web development, and software projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="src/assets/profile/my_image.jpg"
              alt="Ravikumar Naik - Professional developer"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science graduate from RGUKT Nuzvid
                with a strong foundation in full-stack development. My journey
                began with curiosity about how websites work, and it has evolved
                into a deep passion for creating innovative web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I completed my B.Tech and gained practical experience through
                internships at Ezfinanz and Edubot Software Services. I love to
                design UI and building responsive and user-friendly websites. I
                love solving complex problems and building applications that
                make a real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
