
import React, { useEffect, useState } from 'react';
import PixelAvatar from './PixelAvatar';

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
    <section className="min-h-[90vh] flex flex-col justify-center items-center container px-4 py-16">
      <div className="animate-float mb-8">
        <PixelAvatar />
      </div>
      
      <div className="text-center max-w-3xl">
        <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl mb-4 text-primary">
          John Doe
          <span className="text-pixel-green">.</span>
        </h1>
        
        <div className="font-pixel text-sm md:text-base text-muted-foreground relative overflow-hidden h-16 md:h-24">
          <span className="typing-cursor">{displayText}</span>
        </div>
        
        <div className="mt-8 md:mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
