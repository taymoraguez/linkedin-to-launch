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
  },
  {
    id: 2,
    company: "Deloitte",
    position: "Consulting Summer Scholar (Intern)",
    duration: "Jun 2021 - Jul 2021",
    location: "California, United States (Remote)",
    description: "High-performing intern on the Quality Assurance team for a State web development project. Demonstrated strong technical aptitude and collaboration skills, resulting in a full-time offer upon completion.",
    technologies: ["AWS Lambda", "Jira", "System Testing", "QA", "Web Development", "Defect Tracking", "Test Scenario Development", "Cross-functional Collaboration"],
    achievements: [
      "Contributed as a System Tester on the Quality Assurance team for a web development project for a State account",
      "Developed and executed test scenarios for system integration testing, ensuring functional requirements were met",
      "Communicated defects and resolutions effectively to developers, enhancing cross-team collaboration",
      "Gained foundational skills in customer-centric web development and mastered tools like AWS Lambda and Jira",
      "Performance during internship resulted in a full-time offer as AI & Cloud Solutions Architect"
    ],
    subProjects: []
  },
  {
    id: 3,
    company: "iD Tech Camps",
    position: "Virtual Instructor",
    duration: "Apr 2020 - Aug 2020",
    location: "Miami, FL (Remote)",
    description: "Virtual STEM educator at the world's leading tech education company, delivering live online coding and game design instruction during the COVID-19 pandemic. iD Tech pioneered virtual tech camps in 2020 to meet unprecedented demand for distance learning, serving students globally across all time zones.",
    technologies: ["Roblox Studio", "Minecraft Education", "Scratch", "Python", "Game Design", "Virtual Instruction", "Curriculum Development", "Student Engagement"],
    achievements: [
      "Instructed diverse groups of students aged 6-13 in technology fundamentals, game design, and programming using platforms like Roblox and Minecraft",
      "Simplified complex coding concepts into accessible language, enhancing understanding for first-time learners through live collaborative virtual sessions",
      "Fostered a positive and engaging online learning environment, encouraging creativity and collaboration among students during remote instruction",
      "Adapted quickly to virtual teaching methodologies as iD Tech expanded online offerings to accommodate global demand during the pandemic",
      "Delivered personalized instruction in small-group settings, ensuring each student received individualized attention and support"
    ],
    subProjects: []
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">Professional Experience</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Customer-facing AI & Cloud Solutions Architect with experience designing and delivering large-scale, 
            regulated enterprise systems for state government.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="glass-card hover-glow p-6 animate-slide-up" 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium text-sm">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </div>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {exp.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-foreground text-sm">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.subProjects && (
                <div className="mb-4 space-y-4">
                  {exp.subProjects.map((subProject, subIdx) => (
                    <div key={subIdx} className="border-l-2 border-primary/30 pl-3">
                      <h4 className="font-semibold mb-2 text-foreground text-sm">{subProject.title}</h4>
                      <ul className="space-y-1">
                        {subProject.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2 text-muted-foreground text-xs">
                            <span className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2 text-foreground text-sm">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
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