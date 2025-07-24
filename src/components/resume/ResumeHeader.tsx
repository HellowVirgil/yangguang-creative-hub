import { Badge } from "@/components/ui/badge";

const ResumeHeader = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse-glow"></div>
      
      {/* 动态光圈效果 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-32 right-20 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* 代码雨效果 */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 8 + 8}px`,
              opacity: 0.1
            }}
          >
            {['React', 'Vue', 'TS', 'JS', 'CSS', 'HTML', '{', '}', '()', '[]', '<>', '&&', '||'][Math.floor(Math.random() * 13)]}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 gradient-text animate-fade-in">
            杨广
          </h1>
          <div className="text-2xl md:text-3xl text-accent font-medium mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            花名：云澹
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            前端工程师 | 全栈开发者 | 技术架构师
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Badge variant="secondary" className="tag-pill">React</Badge>
          <Badge variant="secondary" className="tag-pill">Vue</Badge>
          <Badge variant="secondary" className="tag-pill">TypeScript</Badge>
          <Badge variant="secondary" className="tag-pill">Node.js</Badge>
          <Badge variant="secondary" className="tag-pill">前端工程化</Badge>
          <Badge variant="secondary" className="tag-pill">架构设计</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-glow">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">年工作经验</div>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-glow">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">大厂经历</div>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-glow">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-muted-foreground">炫酷特效</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;