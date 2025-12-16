import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Yappy - AI Emotions Recognition",
    description: "Built an emotional support chatbot system for adolescents to help them express themselves and learn to identify and manage their emotions",
    technologies: ["AI", "ElevenLabs", "React", "HTML/CSS"],
    features: [
      "AI-powered emotion detection and emotional analysis for adolescents",
      "Adolescents can express their emotions through voice and text",
      "Adolescents can learn to express themselves through stories and emotion recognition",
      "Adults feature to allow them to test functionlity prior to adolescent use and seek guidance for personal adolescent situations"
    ],
    metrics: {
      commits: "33+",
      files: "60+",
      stack: "Full-Stack"
    },
    links: {
      demo: "#",
      github: "https://github.com/taymoraguez/yappy-emotions-lab"
    }
  },
  {
    id: 2,
    title: "AI Imigration Lawyer",
    description: "Developed an mock imigration lawyer website to help users understand the imigration process and the requirements for different types of imigration.",
    technologies: ["n8n", "Lovable", "ChatGPT API", "R", "Docker"],
    features: [
      "Hackathon MVP project for Sundai @ Harvard University/MIT",
      "Trained Generative AI to use government wedsite criteria, immigration lawyer website information, and success cases to determine eligibiliy",
      "Using ChatGPT API to generate likeihood for successful imigration application eligibility for certain visas",
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
    title: "Happyalyze",
    description: "Sentiment analysis application that quantifies happiness levels from personal communication data.",
    technologies: ["AWS", "Lovable", "HTML/CSS", "Docker", "Supabase", "Full-Stack"],
    features: [
      "Hackathon MVP project for Sundai @ Harvard University/MIT",
      "The system processes messages from various sources (browser history, WhatsApp, iMessage) to generate personalized happiness metrics and insights over time.",
      "Users can gain quantitative insights into their communication-based happiness patterns, enabling better self-awareness and mental health tracking while maintaining complete control over their personal data."
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