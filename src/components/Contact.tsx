
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs text-muted-foreground px-3 py-1 mb-2 bg-accent pixel-corners">
            GET IN TOUCH
          </span>
          <h2 className="font-pixel text-2xl md:text-3xl text-primary">CONTACT ME</h2>
          <p className="font-mono text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="pixel-card p-6 h-full">
              <h3 className="font-pixel text-xl mb-6 text-primary">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary p-2 mr-4 pixel-corners">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-pixel text-sm mb-1">Email</div>
                    <a href="mailto:hello@johndoe.dev" className="font-mono text-sm text-muted-foreground hover:text-primary">
                      hello@johndoe.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-2 mr-4 pixel-corners">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-pixel text-sm mb-1">Location</div>
                    <div className="font-mono text-sm text-muted-foreground">
                      San Francisco, California, USA
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-pixel text-sm mb-4">Social Profiles</div>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-secondary p-2 pixel-corners hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-secondary p-2 pixel-corners hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-secondary p-2 pixel-corners hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-xl mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-pixel text-xs mb-2">
                    NAME
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    className="font-mono text-sm bg-background border-border"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-pixel text-xs mb-2">
                    EMAIL
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    className="font-mono text-sm bg-background border-border"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-pixel text-xs mb-2">
                    MESSAGE
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    className="font-mono text-sm bg-background border-border min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-pixel text-xs bg-primary text-primary-foreground hover:bg-pixel-green transition-colors duration-300 pixel-corners"
                >
                  {isSubmitting ? 'SENDING...' : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
