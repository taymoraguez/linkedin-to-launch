import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "Google Digital Cloud Leader",
    issuer: "Google",
    issuedDate: "Jul 2025",
    expiresDate: null,
    skills: ["Digital Transformation", "Google Cloud Platform (GCP)", "Cloud Strategy"],
    logo: "https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/cloud/images/favicons/onecloud/favicon.ico"
  },
  {
    id: 2,
    name: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    issuer: "Oracle",
    issuedDate: "Feb 2025",
    expiresDate: "Feb 2027",
    skills: ["Artificial Intelligence (AI)", "Generative AI", "Oracle Cloud Infrastructure"],
    logo: "https://www.oracle.com/asset/web/favicons/favicon-32.png"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">Licenses & Certifications</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications in cloud and AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="glass-card hover-glow p-5 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>Issued {cert.issuedDate}</span>
                    {cert.expiresDate && (
                      <span className="ml-1">· Expires {cert.expiresDate}</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
