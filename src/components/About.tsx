
import React from 'react';
import PixelIcon from './PixelIcon';

const About: React.FC = () => {
  const skills = [
    { icon: 'react', name: 'React' },
    { icon: 'typescript', name: 'TypeScript' },
    { icon: 'node', name: 'Node.js' },
    { icon: 'database', name: 'Databases' },
    { icon: 'cloud', name: 'Cloud' }
  ] as const;

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs text-muted-foreground px-3 py-1 mb-2 bg-accent pixel-corners">
            WHO I AM
          </span>
          <h2 className="font-pixel text-2xl md:text-3xl text-primary">ABOUT ME</h2>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="pixel-card p-6 mb-8">
            <p className="font-mono text-sm leading-relaxed mb-4">
              I'm a passionate software engineer with 5 years of experience building web applications. 
              I focus on creating clean, efficient, and scalable solutions that provide excellent user experiences.
            </p>
            <p className="font-mono text-sm leading-relaxed">
              My approach combines technical expertise with creative problem-solving, always keeping the end user in mind. 
              Whether working solo or in a team, I'm dedicated to writing maintainable code that stands the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="pixel-card p-4 flex flex-col items-center opacity-0 animate-pixel-slide-up"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <PixelIcon name={skill.icon} className="w-10 h-10 mb-3" />
                <span className="font-pixel text-xs">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
