import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Deloitte Consulting",
    position: "AI & Cloud Solutions Architect / Technical Lead",
    duration: "Aug 2022 - Present",
    location: "Boston, MA",
    description: "Customer-facing AI & Cloud Solutions Architect with experience designing and delivering large-scale, regulated enterprise systems. Translating complex business and policy requirements into production-ready architectures implemented directly by engineering teams.",
    technologies: ["AI Prompt Engineering", "System Architecture", "SQL", "JavaScript", "Java", "Python", "Salesforce", "SDLC", "Technical Documentation", "Security Analysis", "Stakeholder Communication"],
    achievements: [
      "Served as customer-facing AI Lead for a large state account, identifying and delivering AI-driven enhancements to improve efficiency across project management and daily operational workflows",
      "Designed and evaluated prompt engineering approaches for internal AI use cases, advising stakeholders on safe, effective, and maintainable AI adoption",
      "Acted as a trusted technical advisor to client leadership, translating AI capabilities into concrete, production-ready solutions"
    ],
    subProjects: [
      {
        title: "SDX Interface Automation - Solutions Architect / Technical Product Owner",
        achievements: [
          "Owned end-to-end system architecture for eligibility data automation supporting Medicaid, SNAP, and TANF programs, streamlining compliance across 400+ data fields",
          "Designed technical architectures and worked side-by-side with developers, conducting design and code reviews to ensure implementations matched architectural intent",
          "Led the software development lifecycle (SDLC) across 5+ teams, coordinating technical dependencies, delivery timelines, and client stakeholders",
          "Modernized legacy batch-processing workflows into a more current framework, requiring deep alignment between state business processes and system design",
          "Authored and presented technical architecture documentation to client stakeholders, securing approvals and aligning teams on implementation strategy"
        ]
      },
      {
        title: "Confidentiality Security Implementation - Security Solution Architecture",
        achievements: [
          "Designed and delivered a high-priority security solution in response to executive-level directives from state leadership, addressing confidentiality risks in worker-facing systems",
          "Analyzed existing data flows and operational processes to identify security gaps and define a compliant technical architecture",
          "Presented solution design and risk mitigation strategy directly to state government leadership, supporting approval and rollout"
        ]
      },
      {
        title: "Authorized Representative Portal & IES Implementation - Customer-Facing Solutions Architect",
        achievements: [
          "Designed system architecture and delivery framework for a large-scale SaaS portal integrated with state eligibility platforms (Salesforce)",
          "Orchestrated cross-functional delivery across 5+ engineering and stakeholder teams, resolving architectural dependencies during implementation",
          "Supported the successful launch of a customer-facing portal enabling 2,000+ users to manage benefit access on behalf of others",
          "Acted as the primary technical liaison between client stakeholders and development teams, ensuring architectural clarity while maintaining delivery velocity"
        ]
      }
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
            Customer-facing AI & Cloud Solutions Architect with experience designing and delivering large-scale, 
            regulated enterprise systems for state government. Strong focus on AI adoption, governance, 
            architectural tradeoffs, and stakeholder trust.
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
                <h4 className="font-semibold mb-3 text-foreground">AI Solutions Architect:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.subProjects && (
                <div className="mb-6 space-y-6">
                  {exp.subProjects.map((subProject, subIdx) => (
                    <div key={subIdx} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold mb-3 text-foreground">{subProject.title}</h4>
                      <ul className="space-y-2">
                        {subProject.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

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