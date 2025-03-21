
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PixelIcon from './PixelIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Array<'react' | 'node' | 'typescript' | 'database' | 'cloud'>;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  image, 
  link 
}) => {
  return (
    <div className="pixel-card group opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.2s'}}>
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute top-2 right-2 flex gap-1">
          {technologies.map((tech, index) => (
            <PixelIcon key={index} name={tech} className="w-6 h-6" />
          ))}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-pixel text-lg mb-2 text-primary">{title}</h3>
        <p className="font-mono text-sm text-muted-foreground mb-4">{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center font-pixel text-xs text-primary hover:text-pixel-green transition-colors"
        >
          VIEW PROJECT <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
