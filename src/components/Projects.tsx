import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Built a comprehensive analytics platform using machine learning to provide real-time insights for enterprise clients. Features include predictive modeling, anomaly detection, and automated reporting.",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Real-time data processing for 10M+ events/day",
      "Custom ML models with 94% accuracy",
      "Interactive dashboards and visualizations",
      "Automated alert system for anomalies"
    ],
    metrics: {
      users: "50K+",
      performance: "60% faster",
      accuracy: "94%"
    },
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Computer Vision Quality Control",
    description: "Developed an automated quality control system for manufacturing using computer vision and deep learning. Reduced manual inspection time by 80% while improving defect detection accuracy.",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "Redis", "Docker", "Kubernetes"],
    features: [
      "Real-time defect detection on production line",
      "Custom CNN model for various product types",
      "Edge deployment for low-latency processing",
      "Integration with existing ERP systems"
    ],
    metrics: {
      accuracy: "99.2%",
      speed: "80% faster",
      defects: "95% detected"
    },
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "NLP Document Processing Suite",
    description: "Created an intelligent document processing system that extracts, analyzes, and categorizes information from various document types using advanced NLP techniques.",
    technologies: ["spaCy", "Transformers", "FastAPI", "MongoDB", "React", "TypeScript"],
    features: [
      "Multi-format document ingestion",
      "Named entity recognition and extraction",
      "Sentiment analysis and topic modeling",
      "Automated document classification"
    ],
    metrics: {
      documents: "1M+",
      accuracy: "96%",
      time: "90% reduction"
    },
    links: {
      demo: "#",
      github: "#"
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
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
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