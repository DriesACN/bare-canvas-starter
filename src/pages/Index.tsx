import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Blank</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground font-medium">Home</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
            </div>
            <Button variant="heroSecondary" size="sm">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Abstract geometric background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-up">
              Start with a
              <span className="block hero-gradient bg-clip-text text-transparent">
                Blank Canvas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up-delay">
              Clean, minimal, and ready for your creativity. Build something beautiful from nothing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay">
              <Button variant="hero" size="lg" className="group">
                <a href="/contact" className="flex items-center">
                  Begin Creating
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroSecondary" size="lg">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-80" style={{ animationDelay: "2s" }} />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need,
              <span className="hero-gradient bg-clip-text text-transparent"> nothing you don't</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simplicity is the ultimate sophistication. Start clean, build smart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-smooth">
              <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized for speed and performance. Get started instantly with zero configuration.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-smooth">
              <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clean Design</h3>
              <p className="text-muted-foreground">
                Beautiful, minimal interface that gets out of your way and lets you focus on what matters.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-smooth">
              <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Made with Love</h3>
              <p className="text-muted-foreground">
                Crafted with attention to detail and passion for great user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
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

export default Index;