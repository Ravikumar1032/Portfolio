import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Monitor } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id));
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    console.log("Current theme:", theme); // Debug log

    if (theme === "light") {
      setTheme("dark");
      console.log("Switching to dark"); // Debug log
    } else if (theme === "dark") {
      setTheme("system");
      console.log("Switching to system"); // Debug log
    } else {
      setTheme("light");
      console.log("Switching to light"); // Debug log
    }
  };

  const getThemeIcon = () => {
    if (theme === "light") return <Sun className="h-4 w-4" />;
    if (theme === "dark") return <Moon className="h-4 w-4" />;
    return <Monitor className="h-4 w-4" />; // Monitor icon for system
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-4 text-xl font-bold hover:scale-105 transition-all duration-300 group"
        >
          <div className="relative w-16 h-16">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 shadow-lg shadow-blue-400/60 animate-spin group-hover:animate-bounce"></div>
            {/* Inner glow circle */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-800 border border-blue-300 shadow-lg shadow-blue-300/80 flex items-center justify-center">
              <span className="text-blue-300 font-bold text-lg animate-pulse" style={{textShadow: '0 0 15px #93c5fd'}}>
                RK
              </span>
            </div>
            {/* Outer glow effect */}
            <div className="absolute -inset-1 rounded-full border border-blue-400 animate-ping opacity-30"></div>
          </div>
          <span className="text-xl font-bold text-gradient hover:scale-105 transition-transform">
            RavikumaR
          </span>
        </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle Button with Debug */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 border"
              aria-label={`Toggle theme (current: ${theme})`}
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 border"
              aria-label={`Toggle theme (current: ${theme})`}
            >
              {getThemeIcon()}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-lg font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}