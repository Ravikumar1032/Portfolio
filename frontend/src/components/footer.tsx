import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Name & Tagline */}
        <div>
          <div className="text-2xl font-bold text-gradient mb-2">Ravikumar</div>
          <p className="text-muted-foreground">
          Turning ideas into impact — one commit at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
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
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
            Achievements
          </a>
          <a href="#goals" className="text-muted-foreground hover:text-primary transition-colors">
            Goals
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ravikumar-naik-mudhavath-46a36b252/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/ravikumar__246/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Ravikumar1032"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:ravikumarnaik1015@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          © 2025 Mudhavath Ravikumar Naik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
