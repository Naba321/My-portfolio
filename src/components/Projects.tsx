
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with cart, payments, and admin dashboard.",
      technologies: ['react', 'node', 'database'] as const,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with posts, comments, and user authentication.",
      technologies: ['react', 'node', 'cloud'] as const,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      link: "#",
    },
    {
      title: "Productivity Tool",
      description: "Task management application with advanced filtering and reporting.",
      technologies: ['typescript', 'react', 'database'] as const,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      link: "#",
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI-powered responses and real-time interactions.",
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
