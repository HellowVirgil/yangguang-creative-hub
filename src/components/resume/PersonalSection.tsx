import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gamepad2, Users, Zap } from "lucide-react";

const PersonalSection = () => {
  const traits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "强迫症患者",
      description: "喜欢标准化又有美感的东西",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "炫酷特效爱好者",
      description: "因为喜欢炫酷的特效、所见即所得的开发方式，开始学习前端",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "需要压力驱动",
      description: "有些犯懒，需要有人 push 我，因此我会主动把自己放到有压力的环境里",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "游戏爱好者",
      description: "喜欢打游戏，尤其是卡牌、策略游戏，但对一款游戏的兴趣无法持续太久",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const additionalTraits = [
    "喜欢周围人使用你开发的产品的感觉",
    "时刻保持紧张感"
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto section-fade-in">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        个人特质
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {traits.map((trait, index) => (
          <Card key={trait.title} className="card-glow bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${trait.color} bg-opacity-20`}>
                  {trait.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{trait.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{trait.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="space-y-4">
        {additionalTraits.map((trait, index) => (
          <Card key={index} className="card-glow bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <p className="text-lg text-foreground">{trait}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Quote Section */}
      <div className="mt-16 text-center">
        <Card className="card-glow bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border-primary/30">
          <CardContent className="p-12">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              "代码如诗，界面如画"
            </blockquote>
            <p className="text-lg text-muted-foreground">
              用技术创造美好，用代码传递价值
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PersonalSection;