import { Shield, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-cyber">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Animated Shield */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
        <Shield className="w-full h-full text-primary animate-shield-rotate" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
            <Globe className="w-5 h-5 text-accent animate-cyber-pulse" />
            <span className="text-sm font-medium text-primary">Global AI Defense Initiative</span>
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-glow-pulse">
            SG CYBER SHIELD X
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          The world's first AI-powered global defense platform designed to counter 
          cybercriminals who weaponize artificial intelligence. Protecting humanity 
          from invisible digital threats.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="cyber" size="lg" className="text-lg px-8 py-4">
            <Shield className="w-5 h-5 mr-2" />
            Explore the Platform
          </Button>
          <Button variant="shield" size="lg" className="text-lg px-8 py-4">
            <Zap className="w-5 h-5 mr-2" />
            View Strategic Blueprint
          </Button>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Global AI Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Threat Detection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-glow mb-2">∞</div>
            <div className="text-muted-foreground">Adaptive Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;