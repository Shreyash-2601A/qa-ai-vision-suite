import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Calendar, MessageSquare, Award } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "ai.qa.architect@example.com",
      action: "Send Email",
      link: "mailto:ai.qa.architect@example.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect for professional opportunities",
      action: "Connect",
      link: "#"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Explore open-source contributions",
      action: "Follow",
      link: "#"
    }
  ];

  const services = [
    {
      icon: Award,
      title: "QA Strategy Consultation",
      description: "Enterprise QA transformation and AI implementation strategy"
    },
    {
      icon: MessageSquare,
      title: "Technical Advisory",
      description: "AI/ML model architecture and testing framework design"
    },
    {
      icon: Calendar,
      title: "Speaking Engagements",
      description: "Conference talks on AI-powered quality assurance"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your quality assurance processes with AI? 
            Let's discuss how intelligent testing solutions can revolutionize your software development lifecycle.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <contact.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {contact.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={contact.link}>
                      {contact.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Professional Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="text-center">
                    <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-primary rounded-lg p-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Revolutionize Your QA Process?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join industry leaders who have transformed their software quality with AI-powered testing solutions. 
              Let's build the future of quality assurance together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Schedule Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;