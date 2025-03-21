
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  
  const navigate = useNavigate();

  // Set theme class on document when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Set mounted state after first render to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 
      ${theme === 'light' ? 'bg-pixel-pattern-light' : 'bg-pixel-pattern-dark'} bg-repeat`}>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex justify-between items-center h-16 px-4">
          <button 
            onClick={() => navigate('/')} 
            className="font-pixel text-primary text-lg tracking-tight hover:text-pixel-green transition-colors"
          >
            DEV_PORTFOLIO
          </button>
          <div className="flex items-center gap-4">
            <NavMenu />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>
      
      <main className="pt-16">
        {children}
      </main>
      
      <footer className="py-6 px-4 border-t border-border mt-16 text-center">
        <div className="container">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Built with pixel perfection
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
