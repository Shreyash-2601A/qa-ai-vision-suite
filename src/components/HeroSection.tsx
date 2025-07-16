import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="bg-primary rounded" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground">
          <Shield className="w-4 h-4" />
          Enterprise-Grade AI Quality Assurance
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          AI-Powered
          <span className="block text-primary">Quality Assurance</span>
          <span className="block text-ai-teal">System</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Revolutionary AI-driven quality assurance framework that automates testing, 
          predicts failures, and ensures superior software quality through intelligent 
          machine learning algorithms and advanced analytics.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="w-6 h-6 text-ai-blue" />
              <span className="text-2xl font-bold text-foreground">70%</span>
            </div>
            <p className="text-sm text-muted-foreground">Test Automation Increase</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-ai-purple" />
              <span className="text-2xl font-bold text-foreground">45%</span>
            </div>
            <p className="text-sm text-muted-foreground">Cost Reduction</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-6 h-6 text-success-green" />
              <span className="text-2xl font-bold text-foreground">60%</span>
            </div>
            <p className="text-sm text-muted-foreground">Faster Delivery</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6">
            Explore Showcase
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Technical Documentation
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Trusted by enterprise teams • 99.9% uptime • SOC 2 compliant</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;