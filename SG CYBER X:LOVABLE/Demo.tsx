import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  Zap,
  Eye,
  Brain,
  Users,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import Navigation from "@/components/Navigation";
import ThreatVisualizer from "@/components/ThreatVisualizer";
import Globe3D from "@/components/Globe3D";

const Demo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [detectedThreats, setDetectedThreats] = useState(0);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setDetectedThreats(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsRunning(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
      
      // Simulate threat detection
      if (Math.random() > 0.7) {
        setDetectedThreats(prev => prev + 1);
      }
    }, 100);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
    setDetectedThreats(0);
  };

  const threatSimulations = [
    {
      type: "AI-Powered Phishing",
      severity: "Critical",
      status: "Blocked",
      description: "Deepfake voice message attempting CEO impersonation",
      icon: Brain,
      color: "destructive"
    },
    {
      type: "Supply Chain Attack",
      severity: "High",
      status: "Detected",
      description: "Malicious code injection in npm package update",
      icon: AlertTriangle,
      color: "warning"
    },
    {
      type: "Social Engineering Bot",
      severity: "Medium",
      status: "Monitoring",
      description: "AI chatbot gathering personal information on social media",
      icon: Users,
      color: "accent"
    }
  ];

  const globalStats = [
    { label: "Global Nodes Active", value: "2,847", icon: Globe },
    { label: "Threats Blocked Today", value: "156,432", icon: Shield },
    { label: "AI Models Learning", value: "7", icon: Brain },
    { label: "Response Time", value: "< 50ms", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Eye className="w-4 h-4 mr-2" />
              Interactive Demo
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience SG CYBER SHIELD X
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our AI-powered defense system detects, analyzes, and neutralizes 
              cyber threats in real-time across global networks.
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {globalStats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="simulation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="simulation">Threat Simulation</TabsTrigger>
              <TabsTrigger value="dashboard">Defense Dashboard</TabsTrigger>
              <TabsTrigger value="network">Global Network</TabsTrigger>
            </TabsList>

            <TabsContent value="simulation" className="space-y-6">
              {/* Threat Visualizer */}
              <ThreatVisualizer />
              
              {/* Demo Controls */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Live Threat Detection Simulation
                  </CardTitle>
                  <CardDescription>
                    Watch how SG CYBER SHIELD X identifies and neutralizes AI-powered cyber threats
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <Button 
                      onClick={startDemo} 
                      disabled={isRunning}
                      variant="cyber"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Simulation
                    </Button>
                    <Button 
                      onClick={resetDemo}
                      variant="outline"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-sm text-muted-foreground">Progress:</span>
                      <span className="text-sm font-medium">{progress}%</span>
                    </div>
                  </div>
                  
                  <Progress value={progress} className="mb-4" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{detectedThreats}</div>
                      <div className="text-sm text-muted-foreground">Threats Detected</div>
                    </div>
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <div className="text-2xl font-bold text-success mb-1">{detectedThreats}</div>
                      <div className="text-sm text-muted-foreground">Threats Blocked</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">0</div>
                      <div className="text-sm text-muted-foreground">Breaches</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Threat Feed */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Live Threat Feed</h3>
                {threatSimulations.map((threat, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <threat.icon className="w-6 h-6 text-destructive mt-1" />
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{threat.type}</h4>
                              <Badge variant="destructive" className="text-xs">
                                {threat.severity}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {threat.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-success" />
                              <span className="text-sm text-success font-medium">
                                {threat.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date().toLocaleTimeString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Defense Modules Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "AI Threat Intelligence", status: "Active", uptime: "99.9%" },
                      { name: "Adaptive Defense", status: "Learning", uptime: "100%" },
                      { name: "Deception Network", status: "Active", uptime: "98.7%" },
                      { name: "Identity Shield", status: "Active", uptime: "99.8%" }
                    ].map((module, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <div className="font-medium">{module.name}</div>
                          <div className="text-sm text-muted-foreground">Uptime: {module.uptime}</div>
                        </div>
                        <Badge variant="outline" className="border-success text-success">
                          {module.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Global Intelligence Feed</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "New phishing campaign detected in Asia-Pacific region",
                      "Supply chain vulnerability patched across 47 countries",
                      "AI model updated with latest threat signatures",
                      "Cross-border threat coordination activated"
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{activity}</span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {Math.floor(Math.random() * 60)} min ago
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="network" className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-primary" />
                    Global AI Fusion Center Network
                  </CardTitle>
                  <CardDescription>
                    Real-time view of connected defense nodes worldwide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Globe3D />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { region: "North America", nodes: 847, threats: "23,456", status: "Optimal" },
                      { region: "Europe", nodes: 692, threats: "18,903", status: "Optimal" },
                      { region: "Asia-Pacific", nodes: 1308, threats: "45,672", status: "High Alert" }
                    ].map((region, index) => (
                      <div key={index} className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-semibold mb-3">{region.region}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Active Nodes:</span>
                            <span className="font-medium">{region.nodes}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Threats Blocked:</span>
                            <span className="font-medium">{region.threats}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge variant={region.status === "Optimal" ? "outline" : "destructive"} className="text-xs">
                              {region.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Demo;