import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'var(--gradient-primary)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <img 
                src="/prof-photo.jfif"
                alt="Taylor Moraguez - AI & Technical Product Consultant"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-lg hover-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              Taylor Moraguez
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Product Manager | Solutions Consultant & System Analyst
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Product Manager with over three years of experience driving digital transformation initiatives, 
              specializing in the integration of innovative AI solutions for state government systems. 
              Demonstrates proficiency in project management, stakeholder communication, and technical documentation, 
              leveraging skills in SQL, JavaScript, and automation to enhance system efficiency. 
              Passionate about fostering strategic collaboration and advancing technological advancements to achieve impactful change.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="hover-glow"
              onClick={() => window.location.href = "mailto:tay.moraguez@gmail.com"}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-glow"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://linkedin.com/in/taylor-moraguez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/taymoraguez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 animate-glow" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 animate-glow" style={{animationDelay: '1s'}} />
    </section>
  );
};

export default Hero;