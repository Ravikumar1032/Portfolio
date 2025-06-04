import { GraduationCap, Code, Trophy, Download, Users, FileText, GitBranch, Brain, Target } from "lucide-react";
import React from 'react';
import { Button } from "@/components/ui/button";
const handleDownloadResume = () => {
  // Replace with your actual resume PDF URL
  const resumeUrl = "/assets/resume/Ravikumar_Resume.pdf";
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = "Ravikumar_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const CareerHighlights = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "B.Tech in Computer Science (7.8 CGPA) from RGUKT Nuzvid",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Industry Experience",
      description: "8+ months of industry experience in full-stack development",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Portfolio",
      description: "Built 5+ full-stack projects using React, Node.js, and MongoDB",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Solved 250+ coding problems on LeetCode",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Academic Achievement",
      description: "Mandal First in SSC with 9.8 GPA",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    }
  ];

  const technicalSkills = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Technical Writing",
      items: ["README Documentation", "API Documentation", "Tutorial Guides", "Code Comments"]
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Development Practices",
      items: ["Agile Workflows", "Git Version Control", "Clean Code Principles", "RESTful APIs"]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      items: ["3-member MERN team", "UI/UX Designer Collaboration", "Code Reviews", "GitHub Collaboration"]
    }
  ];

  return (
    <section id="highlights" className="py-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient">
              Career Highlights
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key achievements and qualifications at a glance
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl p-6 border ${highlight.borderColor} hover:scale-105 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${highlight.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={highlight.color}>
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Expertise Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-3">
            <Code className="w-6 h-6 text-primary" />
            Professional Expertise
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="text-primary">
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {skill.title}
                  </h4>
                </div>
                <ul className="space-y-2 ms-8">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "7.8", label: "CGPA", suffix: "/10" },
            { number: "8+", label: "Months", suffix: " Experience" },
            { number: "5+", label: "Projects", suffix: " Built" },
            { number: "250+", label: "Problems", suffix: " Solved" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
                <span className="text-lg text-muted-foreground">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make an Impact
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Combining strong technical skills with proven problem-solving abilities and collaborative experience
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
               onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25">
                View Projects
              </button>
              <button 
              onClick={handleDownloadResume}
              className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerHighlights;
