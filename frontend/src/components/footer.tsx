import { Github, Linkedin, Mail, Instagram} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient mb-4">Ravikumar</div>
          <p className="text-muted-foreground mb-6">
            Building the future, one line of code at a time.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
               Achievements
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/ravikumar-naik-mudhavath-46a36b252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/ravikumar__246/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Ravikumar1032"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:ravikumarnaik1015@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 Mudhavath Ravikumar Naik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
