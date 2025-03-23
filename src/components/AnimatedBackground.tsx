
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Code-like elements configuration
    const codeElements: CodeElement[] = [];
    const numberOfElements = Math.floor(window.innerWidth / 15);
    
    // Colors based on theme
    const colors = theme === 'dark' 
      ? ['#00FF00', '#0088FF', '#8800FF', '#00CCFF', '#FFCC00'] // Vibrant colors for dark theme
      : ['#0066CC', '#009966', '#663399', '#006633', '#336699']; // Subdued colors for light theme
    
    // Code symbols to display
    const codeSymbols = [
      '{', '}', '(', ')', '[', ']', ';', '=', '+', '-', '*', '/', '<', '>', 
      '==', '===', '!=', '!==', '=>', '&&', '||', '?', ':', '...'
    ];
    
    // Code words to display
    const codeWords = [
      'function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while',
      'class', 'import', 'export', 'from', 'async', 'await', 'try', 'catch',
      'React', 'useState', 'useEffect', 'props', 'component', 'render',
      'dev', 'code', 'api', 'data', 'build', 'deploy', 'test', 'debug'
    ];
    
    // CodeElement class
    class CodeElement {
      x: number;
      y: number;
      size: number;
      speed: number;
      text: string;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 12 + 8; // Font size between 8 and 20
        this.speed = Math.random() * 0.5 + 0.1;
        // Decide whether to use a symbol or a word (70% chance for word)
        this.text = Math.random() > 0.3 
          ? codeWords[Math.floor(Math.random() * codeWords.length)] 
          : codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1; // Random opacity between 0.1 and 0.6
      }
      
      update() {
        this.y += this.speed;
        
        // Reset position when off screen
        if (this.y > canvas.height) {
          this.y = -this.size * 2;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.font = `${this.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }
    
    // Create code elements
    const init = () => {
      for (let i = 0; i < numberOfElements; i++) {
        codeElements.push(new CodeElement());
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw binary rain effect (0s and 1s in the background)
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 255, 0, 0.05)' : 'rgba(0, 100, 0, 0.03)';
      for (let i = 0; i < canvas.width / 10; i++) {
        for (let j = 0; j < canvas.height / 10; j++) {
          if (Math.random() > 0.97) { // Only draw some 0s and 1s sparsely
            const binary = Math.random() > 0.5 ? '0' : '1';
            ctx.fillText(binary, i * 10, j * 10);
          }
        }
      }
      
      // Draw and update code elements
      for (let i = 0; i < codeElements.length; i++) {
        codeElements[i].update();
        codeElements[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.7 }}
    />
  );
};

export default AnimatedBackground;
