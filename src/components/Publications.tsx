import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Youtube, AlertTriangle } from "lucide-react";
const publications = [
  {
    id: 1,
    title: "How Adolescents in the Child Welfare System Seek Support for Their Sexual Risk Experiences Online",
    type: "Honors Undergraduate Thesis",
    publisher: "STARS University of Central Florida",
    date: "May 1, 2022",
    citation: 'Moraguez, Taylor L., "How Adolescents in the Child Welfare System Seek Support for Their Sexual Risk Experiences Online" (2022). Honors Undergraduate Theses. 1176.',
    abstract: "Youth in the foster care system experience unique and challenging situations online, such as higher risks of inappropriate messaging (e.g., sexting) and unwanted solicitations from strangers. As a vulnerable group of adolescents, foster youth often use online platforms as a resource to express themselves and seek support over their sexual experiences online. This thesis analyzes how foster youth seek support online for their sexual risk experiences, including sexual abuse, sexting, and sexuality. To understand how adolescents (ages 13-17) in the child welfare system seek support for these experiences, we conducted a thematic analysis of 541 individual posts made by 121 different foster youth on an online mental health peer support forum. The majority of the foster youth used the platform to seek support online over their traumatic sexual experiences involving sexual abuse (42%), sexting (31%), and sexuality (28%). Approximately 9% of foster youth used the platform to connect with others for sexting. As a result of seeking support online and connecting with others on the platform, they shared personal and intimate details about themselves and their experiences and, unfortunately, also encountered unwanted sexual solicitations while doing so. Our research highlights the importance of providing safe spaces for foster youth to seek support and advice regarding their sexual risk experiences online.",
    triggerWarning: "This thesis discusses sensitive topics, such as sexual abuse and sexuality. Reader discretion is advised.",
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
                  
                  {pub.triggerWarning && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 mb-4">
                      <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-destructive">
                        <strong>Trigger Warning:</strong> {pub.triggerWarning}
                      </p>
                    </div>
                  )}
                  
                  {pub.abstract && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Abstract</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>
                  )}
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
