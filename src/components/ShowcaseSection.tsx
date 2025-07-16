import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, Video, Presentation, Award } from "lucide-react";

const ShowcaseSection = () => {
  const projects = [
    {
      title: "AI Test Generator Module",
      description: "Intelligent test case generation using Natural Language Processing and BERT transformers. Analyzes requirements and automatically creates comprehensive test suites.",
      type: "GitHub Repository",
      icon: Github,
      technologies: ["Python", "TensorFlow", "BERT", "NLP"],
      metrics: "92% relevance score • 100+ test cases/min",
      link: "#",
      status: "Production"
    },
    {
      title: "Intelligent Bug Detection System",
      description: "Machine learning-powered static and dynamic code analysis with anomaly detection. Predicts potential failures before they reach production.",
      type: "Research Paper",
      icon: FileText,
      technologies: ["Random Forest", "Isolation Forest", "Python"],
      metrics: "89% prediction accuracy • 95% anomaly detection",
      link: "#",
      status: "Published"
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Real-time monitoring and performance optimization with predictive scaling recommendations and intelligent resource allocation.",
      type: "Demo Video",
      icon: Video,
      technologies: ["React", "Node.js", "Prometheus", "Grafana"],
      metrics: "99.9% uptime • Sub-second response time",
      link: "#",
      status: "Live Demo"
    },
    {
      title: "Visual Testing Automation",
      description: "Computer vision-based UI regression testing with cross-browser compatibility validation and accessibility compliance checking.",
      type: "Conference Talk",
      icon: Presentation,
      technologies: ["OpenCV", "Selenium", "Docker", "Kubernetes"],
      metrics: "Multi-platform support • WCAG 2.1 compliant",
      link: "#",
      status: "Presented"
    },
    {
      title: "CI/CD Integration Hub",
      description: "Seamless integration with Jenkins, GitLab CI, and Azure DevOps. Automated quality gates and deployment pipeline optimization.",
      type: "Blog Post",
      icon: FileText,
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
      metrics: "60% faster deployments • Zero-downtime releases",
      link: "#",
      status: "Featured"
    },
    {
      title: "ML-Powered Risk Assessment",
      description: "Advanced predictive analytics for release risk scoring with historical data analysis and quality trend identification.",
      type: "Industry Award",
      icon: Award,
      technologies: ["scikit-learn", "Pandas", "PostgreSQL", "Redis"],
      metrics: "Risk prediction accuracy 94% • Cost savings $2M+",
      link: "#",
      status: "Award Winner"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-success-green text-white";
      case "Published": return "bg-ai-blue text-white";
      case "Live Demo": return "bg-ai-purple text-white";
      case "Presented": return "bg-ai-teal text-white";
      case "Featured": return "bg-primary text-white";
      case "Award Winner": return "bg-destructive text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            AI-QA Showcase Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive collection of AI-powered quality assurance projects, research, 
            and innovations that have transformed software testing methodologies across enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <project.icon className="w-8 h-8 text-primary" />
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.type}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">Key Metrics</h4>
                    <p className="text-xs text-muted-foreground">{project.metrics}</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href={project.link} className="flex items-center justify-center gap-2">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects on GitHub
            <Github className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;