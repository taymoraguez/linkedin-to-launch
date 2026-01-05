import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">Education</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and technology.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card hover-glow p-6 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-primary font-medium mb-2">University of Central Florida</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2018 - 2022</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Orlando, FL</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
