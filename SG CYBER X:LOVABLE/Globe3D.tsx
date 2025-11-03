import { useEffect, useRef } from 'react';

const Globe3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 20;

    let rotation = 0;

    const nodes = [
      { lat: 40.7128, lon: -74.006, label: 'New York' },
      { lat: 51.5074, lon: -0.1278, label: 'London' },
      { lat: 35.6762, lon: 139.6503, label: 'Tokyo' },
      { lat: -33.8688, lon: 151.2093, label: 'Sydney' },
      { lat: 1.3521, lon: 103.8198, label: 'Singapore' },
      { lat: 55.7558, lon: 37.6173, label: 'Moscow' },
      { lat: -23.5505, lon: -46.6333, label: 'São Paulo' },
      { lat: 19.4326, lon: -99.1332, label: 'Mexico City' },
    ];

    const drawGlobe = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw meridians
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + rotation;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw parallels
      for (let i = 1; i < 6; i++) {
        const y = centerY + (radius / 3) * (i - 3);
        const radiusAtY = Math.sqrt(radius * radius - Math.pow((radius / 3) * (i - 3), 2));
        ctx.beginPath();
        ctx.ellipse(centerX, y, radiusAtY, radiusAtY * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.stroke();
      }

      // Draw nodes
      nodes.forEach((node) => {
        const phi = (90 - node.lat) * (Math.PI / 180);
        const theta = (node.lon + rotation * (180 / Math.PI)) * (Math.PI / 180);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        if (z > 0) {
          const screenX = centerX + x;
          const screenY = centerY - y;

          // Node point
          ctx.beginPath();
          ctx.arc(screenX, screenY, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.9)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(59, 130, 246, 1)';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Pulse effect
          ctx.beginPath();
          ctx.arc(screenX, screenY, 8 + Math.sin(Date.now() / 500) * 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i];
          const node2 = nodes[j];

          const phi1 = (90 - node1.lat) * (Math.PI / 180);
          const theta1 = (node1.lon + rotation * (180 / Math.PI)) * (Math.PI / 180);
          const phi2 = (90 - node2.lat) * (Math.PI / 180);
          const theta2 = (node2.lon + rotation * (180 / Math.PI)) * (Math.PI / 180);

          const z1 = radius * Math.sin(phi1) * Math.sin(theta1);
          const z2 = radius * Math.sin(phi2) * Math.sin(theta2);

          if (z1 > 0 && z2 > 0) {
            const x1 = centerX + radius * Math.sin(phi1) * Math.cos(theta1);
            const y1 = centerY - radius * Math.cos(phi1);
            const x2 = centerX + radius * Math.sin(phi2) * Math.cos(theta2);
            const y2 = centerY - radius * Math.cos(phi2);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rotation += 0.002;
      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();
  }, []);

  return (
    <div className="flex items-center justify-center p-8">
      <canvas ref={canvasRef} width={400} height={400} className="max-w-full" />
    </div>
  );
};

export default Globe3D;
