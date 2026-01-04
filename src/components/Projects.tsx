import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Yappy - Adolescent & Parent Emotional Recognition Companion",
    description: "Designed and built an MVP AI companion focused on emotional recognition for adolescents, with use cases supporting parents, educators, and therapists.",
    technologies: ["AI", "Prompt Engineering", "React", "Full-Stack"],
    features: [
      "Architected the system to augment (not replace) human support, incorporating clear scope boundaries and safety considerations",
      "Designed prompt and interaction strategies to support age-appropriate emotional labeling, reflection, and communication",
      "Balanced user trust, ethical considerations, and practical deployment constraints as an early-stage AI system"
    ],
    metrics: {
      focus: "Safety",
      approach: "Ethical AI",
      stack: "Full-Stack"
    },
    links: {
      demo: "https://medium.com/@tay.moraguez/introducing-yappy-your-ai-emotional-companion-for-children-and-parents-0fc1e91dbleware",
      github: "https://github.com/taymoraguez/yappy-emotions-lab"
    }
  },
  {
    id: 2,
    title: "AI Immigration Lawyer",
    description: "Hackathon project (Sundai @ Harvard/MIT) - AI prototype to assist with work visa application processes within the United States.",
    technologies: ["n8n", "Lovable", "ChatGPT API", "R", "Docker"],
    features: [
      "Trained Generative AI using government criteria, immigration lawyer information, and success cases",
      "Built eligibility assessment system for various visa types using ChatGPT API",
      "Developed during 12-hour hackathon with 5-person team"
    ],
    metrics: {
      team: "5 people",
      timeframe: "12 hours",
      event: "Hackathon"
    },
    links: {
      demo: "https://www.sundai.club/projects/32dd9d6b-6631-4a50-9397-32fc50bac5c4",
      github: "https://github.com/taymoraguez/eb1a-fast-track"
    }
  },
  {
    id: 3,
    title: "Happyalyze - Sentiment Analysis",
    description: "Hackathon project (Sundai @ Harvard/MIT) - Sentiment analysis application quantifying happiness levels from personal communication data.",
    technologies: ["AWS", "Lovable", "Docker", "Supabase", "Full-Stack"],
    features: [
      "Processes messages from various sources to generate personalized happiness metrics and insights over time",
      "Enables quantitative insights into communication-based happiness patterns for self-awareness and mental health tracking",
      "Developed during 12-hour hackathon with 4-person team"
    ],
    metrics: {
      team: "4 people",
      timeframe: "12 hours",
      event: "Hackathon"
    },
    links: {
      demo: "https://www.sundai.club/projects/3944f317-7c33-4b22-82c6-e222706bfa30",
      github: "https://github.com/taymoraguez/happy-horizon-insights"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate expertise in AI/ML, 
            full-stack development, and scalable system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card hover-glow p-6 flex flex-col animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <Star className="w-5 h-5 text-accent fill-current" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Impact Metrics:</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="p-2 bg-primary/5 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                {project.links.demo && project.links.demo !== "#" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.links.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.open(project.links.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;