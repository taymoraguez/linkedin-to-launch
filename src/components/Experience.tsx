import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Deloitte Consulting",
    position: "Solutions Consultant & System Analyst",
    duration: "Aug 2022 - Present",
    location: "Boston, MA",
    description: "Product Manager with over three years of experience driving digital transformation initiatives, specializing in the integration of innovative AI solutions for state government systems. Leads AI functional initiatives, manages software development lifecycle for large-scale state benefits systems, and delivers comprehensive SaaS portals serving thousands of users.",
    technologies: ["AI Prompt Engineering", "GitHub Copilot", "SQL", "JavaScript", "SDLC", "Project Management", "Technical Documentation", "API Development", "SaaS Development", "Data Automation", "Security Analysis", "System Design", "Medicaid", "SNAP Systems", "Stakeholder Engagement", "Technical Presentations"],
    achievements: [
      "State account AI Lead fostering AI advancements to project management components, increasing efficiency in daily system design tasks with AI Prompt Engineering",
      "Coordinates with project developers to implement AI solutions to daily development workflows with GitHub Copilot",
      "Managed SDX Interface Automation for Social Security Administration: data exchange automation (400+ field inventory) for State Medicaid, SNAP, and TANF policy requirements",
      "Product manager over Software Development Life Cycle (SDLC), managing project timelines and stakeholder engagement for 3+ teams (6+ team members)",
      "Orchestrated cross-functional teams for successful launch of new SaaS portal (MyMaineConnection), allowing over 2000 users to seamlessly access state benefits",
      "Streamlined eligibility data automation for Medicaid and SNAP systems, enhancing compliance and efficiency across more than 400 fields",
      "Developed comprehensive technical documentation process to ensure clarity in system design and enhance stakeholder engagement during project approvals",
      "Performed in-depth data analysis to identify security vulnerabilities and formulated targeted solutions to significantly improve confidentiality protocols",
      "Issued high-priority solution from State Governor and department leadership for security prevention, aimed at improving State worker processes for confidentiality (Worker Portal Project)",
      "Performed SQL queries for data reporting and analysis to create technical solutions",
      "Served as liaison for system design and technical documentation, presenting design solutions to stakeholders for approval",
      "Provided technical solution demonstrations to State Government and training teams"
    ]
  },
  {
    id: 2,
    company: "Yappy - Independent Project",
    position: "Creator & Lead Developer",
    duration: "2024 - Present",
    location: "Boston, MA",
    description: "Founded and developed Yappy, an AI-powered emotional support chatbot system for adolescents. Built to help children express emotions through voice and text, learn emotion recognition, and receive safe, supportive guidance. Published research on Child Online Safety to inform safe design practices.",
    technologies: ["React", "ElevenLabs API", "AI/ML", "HTML/CSS", "Emotion Recognition", "Child Safety"],
    achievements: [
      "Designed and built full-stack AI chatbot with voice and text capabilities",
      "Implemented emotion detection and analysis specifically tailored for adolescents",
      "Created safe online environment adhering to Child Online Safety best practices",
      "Published research article on Child Online Safety to contribute to the field"
    ]
  },
  {
    id: 3,
    company: "AI Sentiment Analysis - Hackathon Project (Sundai @ Harvard/MIT)",
    position: "Co-Creator & Full-Stack Developer",
    duration: "2024",
    location: "Boston, MA",
    description: "Created MVP with 4-person team for AI Sentiment Analysis product that tracks a person's happiness based on daily messages. Developed during hackathon at Sundai (Harvard/MIT).",
    technologies: ["AWS", "Lovable", "Docker", "Supabase", "Full-Stack", "Sentiment Analysis", "Data Processing"],
    achievements: [
      "Built MVP in hackathon timeframe for Sundai @ Harvard University/MIT with 4-person team",
      "Developed AI sentiment analysis system to track happiness levels from daily communications",
      "Implemented secure data processing pipeline for sensitive personal communications",
      "Created quantitative happiness insights enabling better self-awareness and mental health tracking"
    ]
  },
  {
    id: 4,
    company: "AI Immigration Lawyer - Hackathon Project (Sundai @ Harvard/MIT)",
    position: "Co-Creator & AI Developer",
    duration: "2024",
    location: "Boston, MA",
    description: "Created MVP with 5-person team for AI Lawyer prototype designed to assist with the application process for work visas within the United States. Developed during hackathon at Sundai (Harvard/MIT).",
    technologies: ["n8n", "Lovable", "ChatGPT API", "R", "Docker", "AI Training", "Government Data Analysis"],
    achievements: [
      "Created MVP hackathon project for Sundai @ Harvard University/MIT with 5-person team",
      "Developed AI Lawyer prototype to assist with work visa application processes",
      "Trained Generative AI model using multiple data sources (government criteria, lawyer websites, success cases)",
      "Developed eligibility assessment system for various visa types using ChatGPT API"
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
            Product Manager with over three years of experience driving digital transformation initiatives, 
            specializing in AI solutions for state government systems. Proven track record in managing SDLC, 
            orchestrating cross-functional teams, and delivering innovative products that serve thousands of users.
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