import { GraduationCap, BookOpen, School, Trophy } from "lucide-react";
import React from "react";

const GoalsSection = () => {
  return (
    <section id="goals" className="min-h-screen bg-background py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Trophy className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">Goals & Aspirations</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What I'm Looking For in My Journey as a Developer
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Description */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <h3 className="text-2xl font-bold text-foreground">My Current Focus</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                As a passionate and curious developer, I'm currently seeking opportunities that allow me to apply and expand my skills in <span className="text-primary font-semibold">full-stack development</span>. I'm particularly interested in roles where I can contribute to building scalable, user-centric applications using modern technologies like <span className="text-secondary font-semibold">React</span>, <span className="text-accent font-semibold">Node.js</span>, and <span className="text-primary font-semibold">MongoDB</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Having completed internships in both frontend and backend development, I aim to join a collaborative team where I can continue learning from experienced engineers while also adding value through clean code, problem-solving, and an eye for UI/UX. My long-term goal is to become a well-rounded software engineer capable of designing and architecting end-to-end systems.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30 hover:border-secondary/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Ultimate Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm looking for a role where I can <span className="text-secondary font-semibold">grow technically</span>, <span className="text-accent font-semibold">take ownership of projects</span>, and <span className="text-primary font-semibold">work on meaningful products</span> that impact users positively.
              </p>
            </div>
          </div>

          {/* Right Column - Opportunities */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">I'm Open To</h3>
              </div>

              <div className="space-y-6">
                {/* Full-time Roles */}
                <div className="group hover:bg-muted/30 rounded-xl p-4 transition-all duration-300">
                  <h4 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Full-time Roles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Full Stack Development', 'Backend Engineering', 'Frontend Development'].map((role, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Internships */}
                <div className="group hover:bg-muted/30 rounded-xl p-4 transition-all duration-300">
                  <h4 className="text-secondary font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Internships
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Software Engineering', 'FullStack Development', 'Frontend Development'].map((role, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Entry-level */}
                <div className="group hover:bg-muted/30 rounded-xl p-4 transition-all duration-300">
                  <h4 className="text-accent font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Entry-level Positions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Software Developer', 'React Developer', 'Java Developer'].map((role, index) => (
                      <span key={index} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm border border-accent/30">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Types */}
                <div className="group hover:bg-muted/30 rounded-xl p-4 transition-all duration-300">
                  <h4 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Company Types
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Tech Startups', 'Product-based Companies', 'R&D Teams'].map((type, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Work Style */}
                <div className="group hover:bg-muted/30 rounded-xl p-4 transition-all duration-300">
                  <h4 className="text-secondary font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Work Preferences
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Remote', 'Hybrid', 'On-site'].map((style, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30">
                        {style}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    Especially interested in roles with mentorship and learning-focused culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <School className="w-6 h-6 text-primary" />
              <h3 className="text-1xl  sm:text-2xl font-bold text-foreground">Ready to Connect?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              If you have opportunities that align with my goals or would like to discuss potential collaborations, I'd love to hear from you!
            </p>
            <button 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              <a href="tel:+918639372906">Let's Talk</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
