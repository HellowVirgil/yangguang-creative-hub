import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const WorkExperienceSection = () => {
  const experiences = [
    {
      company: "蚂蚁集团",
      department: "智能协同事业部-基础技术",
      period: "2021.10-至今",
      color: "from-blue-500 to-cyan-500",
      responsibilities: [
        "负责语雀阅读页、编辑器、评论等功能研发"
      ]
    },
    {
      company: "阿里集团",
      department: "智能信息事业群-融媒体发展事业部",
      period: "2019.5-2021.9",
      color: "from-orange-500 to-red-500",
      responsibilities: [
        "负责学习强国APP答题考试业务，包括答题日常需求迭代、答题平台化、在线答题、答题活动、学习管理后台等",
        "负责答题考试应用性能、监控、稳定性能力建设",
        "负责团队前端基础工程能力建设"
      ]
    },
    {
      company: "百度",
      department: "教育事业部-百度文库",
      period: "2016.7-2019.5",
      color: "from-purple-500 to-pink-500",
      responsibilities: [
        "负责百度文库 APP、百度阅读APP、百度文库 PC、百度文库 WAP 站点日常开发维护、项目推进、日常监控、服务运维等工作",
        "负责内部平台开发设计、前端工程化推进、性能优化等工作",
        "担任过文库APP前端负责人，负责过文库核心阅读器、文库编辑器、文库收银台等核心业务开发"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto section-fade-in">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        工作经历
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={exp.company} className="card-glow bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">{exp.company}</CardTitle>
                    <p className="text-lg text-accent">{exp.department}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-primary border-primary/50">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;