
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

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
        </div>
        
        <div className="max-w-lg mx-auto opacity-0 animate-pixel-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="pixel-card p-6">
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
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
