import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Database, Cloud, Cpu, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Development",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 85 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 85 },
      { name: "C", level: 85 },
      { name: "HTML & CSS", level: 85 },
      { name: "SQL", level: 85 },
      { name: "API Development", level: 85 }
    ]
  },
  {
    icon: Users,
    title: "Project Management & Leadership",
    skills: [
      { name: "Project Management", level: 95 },
      { name: "Prioritization", level: 95 },
      { name: "Stakeholder Communication", level: 95 },
      { name: "Cross-Functional Team Collaboration", level: 95 },
      { name: "Technical Presentations", level: 95 },
      { name: "User Acceptance Testing", level: 95 },
      { name: "SDLC Management", level: 90 }
    ]
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: [
      { name: "AI Prompt Engineering", level: 88 },
      { name: "GitHub Copilot", level: 85 },
      { name: "AI Solutions Integration", level: 88 },
      { name: "ChatGPT API", level: 90 },
      { name: "Data Automation", level: 90 },
      { name: "AI Model Training", level: 85 }
    ]
  },
  {
    icon: Database,
    title: "Data & Systems",
    skills: [
      { name: "SQL Queries & Analysis", level: 90 },
      { name: "Data Processing", level: 88 },
      { name: "Data Pipeline Design", level: 90 },
      { name: "Security Analysis", level: 90 },
      { name: "System Design", level: 92 }
    ]
  },
  {
    icon: Cpu,
    title: "Technical Expertise",
    skills: [
      { name: "Technical Documentation", level: 95 },
      { name: "System Architecture", level: 90 },
      { name: "Salesforce", level: 85 },
      { name: "State Government Systems", level: 92 },
      { name: "Medicaid/SNAP/TANF Systems", level: 90 }
    ]
  },
  {
    icon: Cloud,
    title: "Tools & Platforms",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "React", level: 85 },
      { name: "Full-Stack Development", level: 87 },
      { name: "Git/Version Control", level: 90 }
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
            Comprehensive technical and leadership skills spanning programming languages, AI integration, 
            project management, and state government systems. Expert in stakeholder communication, 
            SDLC management, and delivering scalable solutions for critical public services.
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