import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Zap, Users, Target, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Stack",
      description: "Built with React, TypeScript, Tailwind CSS, and Vite for blazing-fast development.",
      tags: ["React 18", "TypeScript", "Vite"]
    },
    {
      icon: Palette, 
      title: "Design System",
      description: "Complete design system with semantic tokens, gradients, and smooth animations.",
      tags: ["Tailwind", "CSS Variables", "Dark Theme"]
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimized for speed with tree-shaking, lazy loading, and minimal bundle size.",
      tags: ["Fast", "Optimized", "Lightweight"]
    }
  ];

  const stats = [
    { label: "Components", value: "20+" },
    { label: "Pages", value: "3" },
    { label: "Bundle Size", value: "<100kb" },
    { label: "Load Time", value: "<1s" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Blank</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-smooth">Home</a>
              <a href="/about" className="text-foreground font-medium">About</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
            </div>
            <Button variant="heroSecondary" size="sm">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-card/30 border border-border/50 rounded-full px-4 py-2 mb-8 animate-fade-up">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Professional Starter Template</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-up">
              About Our
              <span className="block hero-gradient bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-up-delay">
              We believe in starting clean and building beautiful. Our bare canvas approach gives you the foundation to create something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold hero-gradient bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's Inside
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-card/30 border-border/50 backdrop-blur-sm hover:bg-card/50 transition-smooth">
                <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Built for Creators
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Whether you're a solo developer, startup, or established company, our bare canvas starter gives you the perfect foundation to build upon.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                <a href="/contact" className="flex items-center">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroSecondary" size="lg">
                <a href="/">View Examples</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">Blank</span>
          </div>
          <p className="text-muted-foreground">
            Start with nothing. Create everything.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;