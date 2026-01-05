import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Youtube } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "How Adolescents in the Child Welfare System Seek Support for Their Sexual Risk Experiences Online",
    type: "Honors Undergraduate Thesis",
    publisher: "STARS University of Central Florida",
    date: "May 1, 2022",
    citation: 'Moraguez, Taylor L., "How Adolescents in the Child Welfare System Seek Support for Their Sexual Risk Experiences Online" (2022). Honors Undergraduate Theses. 1176.',
    publicationUrl: "https://stars.library.ucf.edu/honorstheses/1176",
    videoUrl: "https://www.youtube.com/watch?v=8"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">Publications</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Academic research and published works.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={pub.id} 
              className="glass-card hover-glow p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">{pub.type}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.publisher} · {pub.date}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {pub.citation}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open(pub.publicationUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open(pub.videoUrl, '_blank')}
                    >
                      <Youtube className="w-4 h-4" />
                      Thesis Defense
                    </Button>
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

export default Publications;
