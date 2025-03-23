
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Ecstasy 2025 - College Cultural Festival Website",
      description: "Developed a fully responsive website for the college’s cultural festival.",
      technologies: ['react', 'node', 'database'] as const,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      link: "https://cit.ac.in/ecstasy2025/index.html",
    },
    {
      title: "Gym Management System",
      description: "Developed a system to manage gym memberships, schedules, and payments.",
      technologies: ['react', 'node', 'cloud'] as const,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      link: "#",
    },
    {
      title: "Electricity Bill Management System",
      description: "Created a system for bill generation, payments, and user account management.",
      technologies: ['typescript', 'react', 'database'] as const,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      link: "#",
    },
    {
      title: "MiTM Mitigation in SDN for Enhanced Network Security",
      description: "Implemented security solutions to detect and prevent Man-in-the-Middle (MiTM) attacks in SDN environments.",
      technologies: ['typescript', 'react', 'cloud'] as const,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      link: "#",
    },
    {
      title: "Security Automation Using Open Source Tools",
      description: "Developed an automated security response platform integrating AI with open-source security tools.",
      technologies: ['typescript', 'react', 'cloud'] as const,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      link: "#",
    },

  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs text-muted-foreground px-3 py-1 mb-2 bg-background pixel-corners">
            MY WORK
          </span>
          <h2 className="font-pixel text-2xl md:text-3xl text-primary">PROJECTS</h2>
          <p className="font-mono text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
