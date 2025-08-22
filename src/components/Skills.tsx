import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Database, Cloud, Cpu, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI/ML & Data Science",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow/PyTorch", level: 90 },
      { name: "Machine Learning", level: 92 },
      { name: "Deep Learning", level: 88 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 87 }
    ]
  },
  {
    icon: Code,
    title: "Software Development",
    skills: [
      { name: "TypeScript/JavaScript", level: 93 },
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "GraphQL/REST APIs", level: 87 },
      { name: "Git/Version Control", level: 95 },
      { name: "Testing (Jest/Cypress)", level: 82 }
    ]
  },
  {
    icon: Database,
    title: "Data & Databases",
    skills: [
      { name: "PostgreSQL", level: 89 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 83 },
      { name: "SQL", level: 92 },
      { name: "Data Pipeline Design", level: 88 },
      { name: "ETL Processes", level: 86 }
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 87 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 82 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 78 },
      { name: "Monitoring & Logging", level: 83 }
    ]
  },
  {
    icon: Cpu,
    title: "Technical Architecture",
    skills: [
      { name: "System Design", level: 89 },
      { name: "Microservices", level: 86 },
      { name: "API Design", level: 91 },
      { name: "Performance Optimization", level: 87 },
      { name: "Security Best Practices", level: 84 },
      { name: "Scalability Planning", level: 88 }
    ]
  },
  {
    icon: Users,
    title: "Leadership & Product",
    skills: [
      { name: "Product Management", level: 88 },
      { name: "Team Leadership", level: 90 },
      { name: "Stakeholder Management", level: 87 },
      { name: "Agile/Scrum", level: 92 },
      { name: "Technical Mentoring", level: 89 },
      { name: "Strategic Planning", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack, from AI/ML research 
            to production deployment and team leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-card hover-glow p-6 animate-slide-up"
                style={{animationDelay: `${categoryIndex * 0.1}s`}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;