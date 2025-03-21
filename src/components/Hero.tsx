
import React, { useEffect, useState } from 'react';
import PixelAvatar from './PixelAvatar';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I build pixel-perfect, interactive websites that run blazingly fast.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(prevText => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section className="min-h-[95vh] flex flex-col justify-center items-center container px-4 py-16 relative">
      <div className="absolute top-10 right-10 hidden md:block">
        <div className="font-mono text-xs px-3 py-2 border border-border bg-muted pixel-corners animate-pulse-pixel">
          <span className="text-pixel-green">function</span> <span className="text-pixel-blue">developAwesomeStuff</span>() &#123;
          <br/>&nbsp;&nbsp;return <span className="text-pixel-purple">expertise</span> + <span className="text-pixel-pink">passion</span>;
          <br/>&#125;
        </div>
      </div>
      
      <div className="animate-float mb-8 relative">
        <div className="absolute -top-6 -left-6 hidden sm:block">
          <div className="font-mono text-xs px-2 py-1 bg-accent border border-border pixel-corners animate-blink">
            <span className="text-pixel-green">&lt;dev&gt;</span>
          </div>
        </div>
        <PixelAvatar className="w-32 h-32 md:w-40 md:h-40" />
        <div className="absolute -bottom-6 -right-6 hidden sm:block">
          <div className="font-mono text-xs px-2 py-1 bg-accent border border-border pixel-corners animate-blink">
            <span className="text-pixel-green">&lt;/dev&gt;</span>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-3xl">
        <div className="mb-6">
          <Avatar className="w-24 h-24 mx-auto border-2 border-primary pixel-corners">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl mb-4 text-primary">
          John Doe
          <span className="text-pixel-green">.</span>
        </h1>
        
        <div className="font-pixel text-sm md:text-base text-muted-foreground relative overflow-hidden h-16 md:h-24">
          <span className="typing-cursor">{displayText}</span>
        </div>
        
        <div className="mt-8 md:mt-12 space-x-4">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 64,
                  behavior: 'smooth'
                });
              }
            }}
            className="font-pixel text-sm px-6 py-3 bg-primary text-primary-foreground hover:bg-pixel-green transition-colors duration-300 pixel-corners"
          >
            HIRE ME
          </button>
          
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 64,
                  behavior: 'smooth'
                });
              }
            }}
            className="font-pixel text-sm px-6 py-3 bg-secondary text-secondary-foreground hover:bg-accent transition-colors duration-300 pixel-corners"
          >
            SEE MY WORK
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 64,
                behavior: 'smooth'
              });
            }
          }}
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
