import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";

const FloatingSkills = () => {
  const skills = [
    'React', 'Vue.js', 'TypeScript', 'Node.js', 'Webpack', 'Vite',
    'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Ant Design',
    'ProseMirror', 'Monaco Editor', 'WebSocket', 'PWA', 'Hybrid',
    'Micro Frontend', 'GraphQL', 'RESTful API', 'Docker', 'Kubernetes',
    'CI/CD', 'Performance', 'A11y', 'SEO', 'Testing', 'DevOps'
  ];

  const [floatingSkills, setFloatingSkills] = useState<Array<{
    skill: string;
    x: number;
    y: number;
    opacity: number;
    scale: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateFloatingSkills = () => {
      return Array.from({ length: 15 }, (_, index) => ({
        skill: skills[Math.floor(Math.random() * skills.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.1,
        scale: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 5
      }));
    };

    setFloatingSkills(generateFloatingSkills());

    // 定期更新技能标签
    const interval = setInterval(() => {
      setFloatingSkills(generateFloatingSkills());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingSkills.map((item, index) => (
        <div
          key={`${item.skill}-${index}`}
          className="absolute animate-float"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            transform: `scale(${item.scale})`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <Badge 
            variant="outline" 
            className="bg-secondary/10 border-secondary/20 text-secondary-foreground backdrop-blur-sm text-xs"
          >
            {item.skill}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default FloatingSkills;