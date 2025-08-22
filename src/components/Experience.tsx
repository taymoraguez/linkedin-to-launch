import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Tech Innovate Co.",
    position: "Senior AI Engineer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Led development of ML-powered recommendation systems, improved model accuracy by 35%, and managed cross-functional AI initiatives.",
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes"],
    achievements: [
      "Implemented end-to-end ML pipeline serving 10M+ users",
      "Reduced model inference time by 60% through optimization",
      "Mentored 5+ junior engineers on AI best practices"
    ]
  },
  {
    id: 2,
    company: "DataCorp Solutions",
    position: "Product Manager - AI/ML",
    duration: "2020 - 2022",
    location: "Austin, TX",
    description: "Drove product strategy for AI-powered analytics platform, collaborated with engineering teams to deliver scalable solutions.",
    technologies: ["Product Strategy", "Data Analytics", "Agile", "SQL", "Tableau", "Jira"],
    achievements: [
      "Launched 3 major AI features increasing user engagement by 40%",
      "Coordinated with 15+ stakeholders across multiple teams",
      "Established product metrics and KPI tracking framework"
    ]
  },
  {
    id: 3,
    company: "StartupTech Inc.",
    position: "Full Stack Developer",
    duration: "2018 - 2020",
    location: "Remote",
    description: "Built and maintained web applications, integrated third-party APIs, and optimized application performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "GraphQL", "TypeScript"],
    achievements: [
      "Developed core features for B2B SaaS platform",
      "Improved application performance by 45%",
      "Built responsive UI components used across the platform"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering innovative solutions and leading technical initiatives 
            across AI, product development, and full-stack engineering.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="glass-card hover-glow p-8 animate-slide-up" 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;