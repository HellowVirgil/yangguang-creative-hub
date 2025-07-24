import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Settings, Palette, Zap, Shield } from "lucide-react";

const TechSkillsSection = () => {
  const skillCategories = [
    {
      title: "前端框架",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, years: "5年+" },
        { name: "Vue.js", level: 90, years: "4年+" },
        { name: "TypeScript", level: 88, years: "3年+" },
        { name: "JavaScript", level: 95, years: "8年+" }
      ]
    },
    {
      title: "工程化",
      icon: <Settings className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Webpack", level: 85, years: "4年+" },
        { name: "Vite", level: 80, years: "2年+" },
        { name: "CI/CD", level: 75, years: "3年+" },
        { name: "微前端", level: 70, years: "2年+" }
      ]
    },
    {
      title: "后端技术",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 80, years: "4年+" },
        { name: "Express", level: 75, years: "3年+" },
        { name: "MySQL", level: 70, years: "3年+" },
        { name: "Redis", level: 65, years: "2年+" }
      ]
    },
    {
      title: "UI/UX",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "CSS3", level: 90, years: "8年+" },
        { name: "Sass/Less", level: 85, years: "5年+" },
        { name: "Tailwind CSS", level: 80, years: "2年+" },
        { name: "Ant Design", level: 85, years: "4年+" }
      ]
    },
    {
      title: "性能优化",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Bundle优化", level: 85, years: "4年+" },
        { name: "懒加载", level: 80, years: "3年+" },
        { name: "缓存策略", level: 75, years: "3年+" },
        { name: "性能监控", level: 70, years: "2年+" }
      ]
    },
    {
      title: "质量保证",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Jest", level: 80, years: "3年+" },
        { name: "Cypress", level: 75, years: "2年+" },
        { name: "ESLint", level: 85, years: "4年+" },
        { name: "Prettier", level: 85, years: "4年+" }
      ]
    }
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 85) return "text-green-400";
    if (level >= 70) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto section-fade-in">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        技术能力
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={category.title} className="card-glow bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.years}</span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* 技术成就统计 */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="card-glow bg-card/80 backdrop-blur-sm border-border/50 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground text-sm">核心项目</div>
          </CardContent>
        </Card>
        <Card className="card-glow bg-card/80 backdrop-blur-sm border-border/50 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-sm">技术栈掌握</div>
          </CardContent>
        </Card>
        <Card className="card-glow bg-card/80 backdrop-blur-sm border-border/50 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">100M+</div>
            <div className="text-muted-foreground text-sm">用户覆盖</div>
          </CardContent>
        </Card>
        <Card className="card-glow bg-card/80 backdrop-blur-sm border-border/50 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground text-sm">系统稳定性</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechSkillsSection;