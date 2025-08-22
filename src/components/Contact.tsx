import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or explore how 
            I can contribute to your team's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-card hover-glow p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:taylor.moraguez@email.com" className="text-muted-foreground hover:text-primary">
                      taylor.moraguez@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-glow p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Professional Links</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/taylor-moraguez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/taylor-moraguez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-foreground">GitHub Portfolio</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card hover-glow p-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-foreground">
                    First Name
                  </label>
                  <Input 
                    id="firstName"
                    placeholder="John" 
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-foreground">
                    Last Name
                  </label>
                  <Input 
                    id="lastName"
                    placeholder="Doe" 
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john.doe@company.com" 
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                  Company (Optional)
                </label>
                <Input 
                  id="company"
                  placeholder="Your Company" 
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input 
                  id="subject"
                  placeholder="Job Opportunity / Collaboration / etc." 
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about the opportunity, project, or how we can work together..."
                  rows={6}
                  className="bg-background/50"
                />
              </div>

              <Button className="w-full hover-glow" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;