import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Building, 
  Globe, 
  Shield,
  AlertTriangle,
  TrendingUp,
  Clock,
  HandHeart,
  Zap
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const ImpactJustification = () => {
  const urgencyFactors = [
    {
      icon: Clock,
      title: "AI Attack Sophistication Doubling Every 6 Months",
      description: "Cybercriminals are rapidly weaponizing AI faster than traditional defenses can adapt",
      impact: "Traditional security becomes obsolete within 18 months"
    },
    {
      icon: TrendingUp,
      title: "$10.5 Trillion Annual Cybercrime Damage by 2025",
      description: "Current trajectory shows exponential growth in AI-powered cybercrime costs",
      impact: "More than the GDP of most countries combined"
    },
    {
      icon: Users,
      title: "4.6 Billion People Vulnerable to AI Threats",
      description: "Nearly every internet user lacks protection against sophisticated AI attacks",
      impact: "Entire families at risk of deepfake scams and identity theft"
    },
    {
      icon: Building,
      title: "Critical Infrastructure Under Constant AI Assault",
      description: "Hospitals, power grids, and essential services targeted by AI-powered attacks",
      impact: "Lives at stake when critical systems are compromised"
    }
  ];

  const protectedGroups = [
    {
      icon: Heart,
      title: "Families & Children",
      description: "Protecting innocent people from AI-generated scams, deepfake harassment, and identity theft",
      protection: "Safe digital spaces for the most vulnerable"
    },
    {
      icon: Users,
      title: "Elderly & Vulnerable Populations",
      description: "Shielding those most susceptible to sophisticated AI-powered social engineering",
      protection: "Specialized protection for high-risk groups"
    },
    {
      icon: Building,
      title: "Small Businesses & Nonprofits",
      description: "Affordable enterprise-grade protection for organizations without dedicated security teams",
      protection: "Level playing field against well-funded attackers"
    },
    {
      icon: Globe,
      title: "Developing Nations",
      description: "Free access to world-class AI defense for countries lacking cybersecurity infrastructure",
      protection: "Global digital equity and protection"
    }
  ];

  const humanitarianValues = [
    {
      title: "Universal Human Right to Digital Safety",
      description: "Every person deserves protection from AI-powered attacks regardless of their technical knowledge or economic status"
    },
    {
      title: "Collective Defense Philosophy",
      description: "When one person is protected, the entire network becomes stronger. Global security through shared intelligence"
    },
    {
      title: "Privacy-First Protection",
      description: "Defending people without compromising their privacy or freedoms. Transparent, ethical AI defense"
    },
    {
      title: "No One Left Behind",
      description: "Free access for individuals and developing nations ensures global protection, not just for the privileged"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Critical Global Need
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-destructive via-warning to-primary bg-clip-text text-transparent">
            Why the World Needs This Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SG CYBER SHIELD X isn't just a cybersecurity platform—it's a humanitarian 
            mission to protect innocent people from invisible AI threats that could 
            devastate lives, families, and entire communities.
          </p>
        </div>

        {/* Urgency Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-destructive">The Urgent Reality</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {urgencyFactors.map((factor, index) => (
              <Card key={index} className="bg-card/80 border-destructive/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-destructive/20 rounded-lg border border-destructive/30">
                      <factor.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <CardTitle className="text-lg">{factor.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {factor.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-destructive mb-1">Critical Impact</div>
                    <div className="text-sm text-muted-foreground">{factor.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Protected Groups */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">Who We Protect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectedGroups.map((group, index) => (
              <Card key={index} className="bg-card/80 border-primary/20 backdrop-blur-sm hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full w-fit mx-auto mb-4 border border-primary/30">
                    <group.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-success/10 border border-success/30 rounded-lg p-3">
                    <div className="text-xs font-medium text-success mb-1">Our Protection</div>
                    <div className="text-xs text-muted-foreground">{group.protection}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Humanitarian Framework */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 border border-primary/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <HandHeart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Global Humanitarian Cybersecurity Project</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                SG CYBER SHIELD X operates on humanitarian principles, treating digital safety 
                as a fundamental human right that should be accessible to everyone, everywhere.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {humanitarianValues.map((value, index) => (
                <div key={index} className="bg-background/80 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-8">
            <Shield className="w-20 h-20 text-primary mx-auto mb-6 animate-glow-pulse" />
            <h3 className="text-4xl font-bold mb-4">The Time to Act is Now</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every day we delay means more innocent people fall victim to AI-powered attacks. 
              Every family could be the next target. Every business could be the next victim. 
              The technology exists—we just need the will to deploy it globally.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <AnimatedCounter 
                  end={1000000} 
                  suffix="+" 
                  duration={2500}
                  className="text-3xl font-bold text-destructive mb-2" 
                />
                <div className="text-sm text-muted-foreground">People victimized daily by AI attacks</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={28.6} 
                  prefix="$" 
                  suffix="B" 
                  decimals={1}
                  duration={2500}
                  className="text-3xl font-bold text-warning mb-2" 
                />
                <div className="text-sm text-muted-foreground">Lost monthly to AI cybercrime</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={0} 
                  duration={2500}
                  className="text-3xl font-bold text-primary mb-2" 
                />
                <div className="text-sm text-muted-foreground">People need to suffer if we act now</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg" className="text-lg px-8 py-4">
                <Zap className="w-5 h-5 mr-2" />
                Fund Global Deployment
              </Button>
              <Button variant="shield" size="lg" className="text-lg px-8 py-4">
                <Globe className="w-5 h-5 mr-2" />
                Join Partnership Network
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactJustification;