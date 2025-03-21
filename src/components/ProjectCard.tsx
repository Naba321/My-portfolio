
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PixelIcon from './PixelIcon';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: ReadonlyArray<'react' | 'node' | 'typescript' | 'database' | 'cloud'>;
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
    <div className="pixel-card group opacity-0 animate-pixel-slide-up hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-shadow" style={{animationDelay: '0.2s'}}>
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute top-2 right-2 flex gap-1">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm p-1 rounded pixel-corners">
              <PixelIcon name={tech} className="w-6 h-6" />
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="font-pixel text-lg mb-1 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{title}</h3>
        </div>
      </div>
      
      <div className="p-5 border-t border-border bg-card">
        <p className="font-mono text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-accent/50 font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-pixel text-xs text-primary hover:text-pixel-green transition-colors group/link"
          >
            <span>VIEW</span>
            <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
