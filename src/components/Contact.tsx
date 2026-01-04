import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">Let's Connect</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Ready to discuss opportunities or collaborate on projects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
            <Card className="glass-card hover-glow p-5">
              <h3 className="text-base font-semibold mb-4 text-foreground">Get In Touch</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Email</div>
                    <a href="mailto:tay.moraguez@gmail.com" className="text-xs text-muted-foreground hover:text-primary">
                      tay.moraguez@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Location</div>
                    <span className="text-xs text-muted-foreground">Boston, MA</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-glow p-5">
              <h3 className="text-base font-semibold mb-4 text-foreground">Professional Links</h3>
              
              <div className="space-y-2">
                <a 
                  href="https://linkedin.com/in/taylor-moraguez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/taymoraguez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">GitHub Portfolio</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;