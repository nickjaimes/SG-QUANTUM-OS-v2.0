import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ThreatData {
  id: number;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  x: number;
  y: number;
  timestamp: number;
}

const ThreatVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [stats, setStats] = useState({ total: 0, blocked: 0, analyzed: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    const severityColors = {
      low: 'rgba(34, 197, 94, 0.6)',
      medium: 'rgba(234, 179, 8, 0.6)',
      high: 'rgba(249, 115, 22, 0.6)',
      critical: 'rgba(239, 68, 68, 0.6)',
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Draw threats
      const now = Date.now();
      threats.forEach((threat) => {
        const age = now - threat.timestamp;
        const opacity = Math.max(0, 1 - age / 3000);

        if (opacity > 0) {
          // Outer ring
          ctx.beginPath();
          ctx.arc(threat.x, threat.y, 20, 0, Math.PI * 2);
          ctx.strokeStyle = severityColors[threat.severity].replace('0.6', String(opacity * 0.3));
          ctx.lineWidth = 2;
          ctx.stroke();

          // Inner circle
          ctx.beginPath();
          ctx.arc(threat.x, threat.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = severityColors[threat.severity].replace('0.6', String(opacity));
          ctx.fill();

          // Pulse
          const pulse = (Math.sin(age / 200) + 1) / 2;
          ctx.beginPath();
          ctx.arc(threat.x, threat.y, 15 + pulse * 10, 0, Math.PI * 2);
          ctx.strokeStyle = severityColors[threat.severity].replace('0.6', String(opacity * 0.2));
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Clean old threats
      setThreats((prev) => prev.filter((t) => now - t.timestamp < 3000));

      requestAnimationFrame(animate);
    };

    animate();

    // Generate threats
    const interval = setInterval(() => {
      const severities: Array<'low' | 'medium' | 'high' | 'critical'> = ['low', 'medium', 'high', 'critical'];
      const types = [
        'Phishing Attack',
        'Malware Detection',
        'DDoS Attempt',
        'SQL Injection',
        'XSS Attack',
        'Brute Force',
      ];

      const newThreat: ThreatData = {
        id: Date.now(),
        type: types[Math.floor(Math.random() * types.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        timestamp: Date.now(),
      };

      setThreats((prev) => [...prev, newThreat]);
      setStats((prev) => ({
        total: prev.total + 1,
        blocked: prev.blocked + (Math.random() > 0.2 ? 1 : 0),
        analyzed: prev.analyzed + 1,
      }));
    }, 800);

    return () => clearInterval(interval);
  }, [threats]);

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Real-Time Threat Detection</span>
          <div className="flex gap-2">
            <Badge variant="outline">
              <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              Live
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <canvas ref={canvasRef} className="w-full border border-border/50 rounded-lg bg-background/30" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Detected</div>
            </div>
            <div className="text-center p-3 bg-success/10 rounded-lg">
              <div className="text-2xl font-bold text-success">{stats.blocked}</div>
              <div className="text-xs text-muted-foreground">Blocked</div>
            </div>
            <div className="text-center p-3 bg-accent/10 rounded-lg">
              <div className="text-2xl font-bold text-accent">{stats.analyzed}</div>
              <div className="text-xs text-muted-foreground">Analyzed</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatVisualizer;
