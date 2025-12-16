import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            <Card className="glass-card hover-glow p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:tay.moraguez@gmail.com" className="text-muted-foreground hover:text-primary">
                      tay.moraguez@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <span className="text-muted-foreground">Boston, MA</span>
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
                  href="https://github.com/taymoraguez" 
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
        </div>
      </div>
    </section>
  );
};

export default Contact;