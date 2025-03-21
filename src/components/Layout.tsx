
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import ThemeToggle from './ThemeToggle';
import PixelAvatar from './PixelAvatar';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from './ui/sidebar';
import { Code, User, Briefcase, Mail, Home } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen w-full flex">
        <Sidebar variant="inset" className="border-r border-border">
          <SidebarHeader className="flex flex-col items-center py-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-20 w-20 mb-4 border-2 border-primary pixel-corners overflow-hidden">
                <AvatarImage src="/placeholder.svg" alt="Profile" className="pixel-image" />
                <AvatarFallback>
                  <PixelAvatar className="scale-75" />
                </AvatarFallback>
              </Avatar>
              <h2 className="font-pixel text-lg text-primary mt-2">DEV_NAME</h2>
              <p className="text-muted-foreground text-xs font-mono">Software Engineer</p>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => scrollToSection('home')} tooltip="Home">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => scrollToSection('about')} tooltip="About">
                    <User className="h-4 w-4" />
                    <span>About</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => scrollToSection('projects')} tooltip="Projects">
                    <Code className="h-4 w-4" />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => scrollToSection('experience')} tooltip="Experience">
                    <Briefcase className="h-4 w-4" />
                    <span>Experience</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => scrollToSection('contact')} tooltip="Contact">
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="py-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        
        <SidebarInset>
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
