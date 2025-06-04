import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities in web development,
            internships, or potential collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium mb-2 block"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className="bg-muted border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:scale-[1.02] transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm actively looking for new opportunities where I can
                contribute, grow, and learn as a Full Stack Developer. I'm
                always excited to discuss new opportunities, innovative
                projects, or potential collaborations. Whether you're looking
                for a dedicated developer for your team or want to discuss a
                project idea, I'd love to hear from you. Feel free to reach out
                via LinkedIn, GitHub, or email me at
                ravikumarnaik1015@gmail.com.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:ravikumarnaik1015@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ravikumarnaik1015@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+918639372906"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 8639372906
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ravikumar-naik-mudhavath-46a36b252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/ravikumar__246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center text-secondary hover:scale-110 transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Ravikumar1032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-lg flex items-center justify-center text-accent hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:ravikumarnaik1015@gmail.com"
                  className="w-12 h-12 bg-secondary/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center text-secondary hover:scale-110 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
