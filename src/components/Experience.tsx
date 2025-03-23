
import React from 'react';
import { Badge } from './ui/badge';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: "Web Development Intern",
      company: "Assam Power Distribution Company Ltd",
      period: "06-2024 - 07-2024",
      description: "Developed and enhanced features for the Electricity Bill Management System. Assisted in both front-end and back-end tasks.",
      technologies: ["HTML/CSS", "JavaScript", "Python", " Django"]
    },
    {
      position: "Web & Management Convenor",
      company: "Cyber Security Club, CITK",
      period: "08-2023 – Present",
      description: "Managed web development and cybersecurity events for the club.",
      technologies: ["CyberSecurity", "Networking"]
    },
    {
      position: "Cyber Security Training",
      company: "NIELIT Guwahati",
      period: "02-2023 - 04-2023",
      description: "Completed Cyber Security Training from NIELIT Guwahati, learning penetration testing, vulnerability assessment, and ethical hacking.",
      technologies: ["Linux", "Nmap", "Wireshark", "Windows Security", "VirtualBox", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-accent/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs text-muted-foreground px-3 py-1 mb-2 bg-background pixel-corners">
            WORK HISTORY
          </span>
          <h2 className="font-pixel text-2xl md:text-3xl text-primary">EXPERIENCE</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-border pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-12 relative opacity-0 animate-pixel-slide-up"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                {/* Pixel dot on timeline */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-pixel-green pixel-corners"></div>
                
                <div className="pixel-card p-6">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="font-pixel text-lg text-primary">{exp.position}</h3>
                    <span className="font-mono text-xs bg-secondary px-2 py-1 pixel-corners">
                      {exp.period}
                    </span>
                  </div>
                  <div className="font-mono text-sm mb-4 text-pixel-blue">{exp.company}</div>
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-accent/50 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
