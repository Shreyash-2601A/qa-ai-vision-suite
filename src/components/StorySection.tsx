import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

const StorySection = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: "92% Test Case Relevance",
      description: "AI-generated test cases with BERT transformers"
    },
    {
      icon: TrendingUp,
      title: "89% Bug Prediction Accuracy",
      description: "Random Forest algorithms with feature engineering"
    },
    {
      icon: Users,
      title: "10,000+ Test Cases",
      description: "Generated per minute with NLP processing"
    },
    {
      icon: Award,
      title: "99.9% Uptime SLA",
      description: "Enterprise-grade reliability and performance"
    }
  ];

  const technicalDetails = [
    {
      category: "Architecture",
      items: ["Microservices-based design", "Kubernetes orchestration", "Event-driven communication"]
    },
    {
      category: "AI/ML Models",
      items: ["BERT transformers for NLP", "Random Forest for predictions", "Isolation Forest for anomalies"]
    },
    {
      category: "Technologies",
      items: ["TensorFlow & scikit-learn", "React & Node.js", "PostgreSQL & Redis"]
    },
    {
      category: "Integrations",
      items: ["Jenkins & GitLab CI", "Prometheus & Grafana", "Slack & Microsoft Teams"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Foundational QA Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The journey of building an enterprise-scale AI-powered quality assurance framework 
            that revolutionized software testing across multiple organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Story */}
          <Card className="mb-12 p-8">
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  The Challenge: Transforming Traditional QA
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As the Lead QA Architect, I identified critical inefficiencies in traditional testing approaches: 
                  manual test creation consuming 70% of QA resources, inconsistent test coverage, and reactive 
                  bug detection leading to costly production issues. The challenge was to create an intelligent 
                  system that could think, learn, and predict like an experienced QA engineer.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  The Solution: AI-Driven QA Framework
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I architected and led the development of a comprehensive AI-powered QA system built on microservices 
                  architecture. The core innovation was combining Natural Language Processing for requirement analysis, 
                  Computer Vision for UI testing, and Machine Learning for predictive analytics. The system featured 
                  automated test case generation using BERT transformers, intelligent bug prediction with Random Forest 
                  algorithms, and real-time performance monitoring with anomaly detection.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Technical Implementation & Leadership Role
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I spearheaded a cross-functional team of 12 engineers, defining the technical architecture, 
                  selecting the AI/ML stack (TensorFlow, scikit-learn, OpenCV), and establishing development 
                  methodologies. My role encompassed system design, model training supervision, integration 
                  strategy with existing CI/CD pipelines, and ensuring enterprise-grade security and compliance 
                  standards. The implementation involved training models on 10,000+ requirement documents and 
                  historical bug data to achieve industry-leading accuracy rates.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-3">
                  <achievement.icon className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-bold text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Details */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Technical Architecture & Implementation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technicalDetails.map((detail, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">{detail.category}</h4>
                    <div className="space-y-2">
                      {detail.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Impact */}
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Business Impact & Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">45%</div>
                  <p className="text-sm text-muted-foreground">Reduction in QA operational costs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ai-teal mb-2">70%</div>
                  <p className="text-sm text-muted-foreground">Faster test execution cycles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-green mb-2">60%</div>
                  <p className="text-sm text-muted-foreground">Reduction in production defects</p>
                </div>
              </div>
              <div className="mt-8 space-y-2">
                <Badge className="mr-2 mb-2">Enterprise Adoption</Badge>
                <Badge className="mr-2 mb-2">Industry Recognition</Badge>
                <Badge className="mr-2 mb-2">Open Source Contribution</Badge>
                <Badge className="mr-2 mb-2">Patent Application</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StorySection;