
import React from 'react';
import PixelIcon from './PixelIcon';
import { Progress } from './ui/progress';

const About: React.FC = () => {
  const skills = [
    { icon: 'react', name: 'React', level: 90 },
    { icon: 'typescript', name: 'TypeScript', level: 85 },
    { icon: 'node', name: 'Node.js', level: 80 },
    { icon: 'database', name: 'Databases', level: 75 },
    { icon: 'cloud', name: 'Cloud', level: 70 }
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
        
        <div className="max-w-4xl mx-auto opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-xl mb-4 text-primary">Background</h3>
              <p className="font-mono text-sm leading-relaxed mb-4">
                I'm a passionate software engineer with 5 years of experience building web applications. 
                I focus on creating clean, efficient, and scalable solutions that provide excellent user experiences.
              </p>
              <p className="font-mono text-sm leading-relaxed">
                My approach combines technical expertise with creative problem-solving, always keeping the end user in mind. 
                Whether working solo or in a team, I'm dedicated to writing maintainable code that stands the test of time.
              </p>
            </div>
            
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-xl mb-4 text-primary">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-pixel text-sm">BS Computer Science</div>
                  <div className="font-mono text-xs text-muted-foreground">Tech University • 2015 - 2019</div>
                </div>
                <div>
                  <div className="font-pixel text-sm">Frontend Development Certification</div>
                  <div className="font-mono text-xs text-muted-foreground">Online Academy • 2020</div>
                </div>
                <div>
                  <div className="font-pixel text-sm">Cloud Architecture</div>
                  <div className="font-mono text-xs text-muted-foreground">Cloud Provider Certification • 2021</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pixel-card p-6 mb-8">
            <h3 className="font-pixel text-xl mb-6 text-primary">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="opacity-0 animate-pixel-slide-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <PixelIcon name={skill.icon} className="w-6 h-6 mr-3" />
                      <span className="font-pixel text-sm">{skill.name}</span>
                    </div>
                    <span className="font-mono text-xs">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3 pixel-corners" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="pixel-card p-4 flex flex-col items-center justify-center opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="font-pixel text-3xl text-primary mb-2">5+</div>
              <div className="font-mono text-xs text-center">Years Experience</div>
            </div>
            <div className="pixel-card p-4 flex flex-col items-center justify-center opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="font-pixel text-3xl text-primary mb-2">50+</div>
              <div className="font-mono text-xs text-center">Projects Completed</div>
            </div>
            <div className="pixel-card p-4 flex flex-col items-center justify-center opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="font-pixel text-3xl text-primary mb-2">30+</div>
              <div className="font-mono text-xs text-center">Happy Clients</div>
            </div>
            <div className="pixel-card p-4 flex flex-col items-center justify-center opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="font-pixel text-3xl text-primary mb-2">10+</div>
              <div className="font-mono text-xs text-center">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
