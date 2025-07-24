import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layers, Palette } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "文库编辑器",
      period: "百度时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "一款移动端富文本编辑器，基于 Hybrid 技术实现 Andriod 和 IOS 的富文本编辑器，实现了对文库线上 Word、Excel、PDF、TXT等文档的编辑（包括文本加粗、颜色修改、字号设置、插入图片、表格），使用 Quill + Handsontable 实现了对 Word 中的表格进行编辑，包括合并单元格、新增行、列等操作。",
      tags: ["Hybrid", "Quill", "Handsontable", "移动端"]
    },
    {
      title: "走班排课系统",
      period: "百度时期",
      icon: <Layers className="w-6 h-6" />,
      description: "新高考需求下为教师提供排课功能的排课平台。前端使用 vue + vue-router + vuex 架构，后端采用 YOG2（基于 Express） + Mysql + squealize，前端构建使用 FIS3。实现了私有化、单机离线和云上环境三部署，并且引入前端单元测试和UI自动化测试保证项目质量。",
      tags: ["Vue", "Express", "MySQL", "FIS3", "测试"]
    },
    {
      title: "xTopic",
      period: "百度时期",
      icon: <Palette className="w-6 h-6" />,
      description: "可视化专题页面配置平台，通过自定义 schema 实现的专题页可视化搭建系统。",
      tags: ["可视化搭建", "Schema", "低代码"]
    },
    {
      title: "学习管理平台",
      period: "融媒体时期",
      icon: <Layers className="w-6 h-6" />,
      description: "支持数百万基层学习组织及学习管理员进行基层党员管理，包括积分查看、组织变动、试题签发、考试管理、数据报表等功能。",
      tags: ["React", "管理系统", "大规模应用"]
    },
    {
      title: "vs-platform-fe",
      period: "融媒体时期",
      icon: <Palette className="w-6 h-6" />,
      description: "基于 vision 引擎实现的可视化搭建系统，支持答题、问卷等业务的可视化搭建能力。",
      tags: ["可视化搭建", "Vision", "低代码平台"]
    },
    {
      title: "Weavefox",
      period: "蚂蚁时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "基于 bailingVL 的大模型 AI 生码平台，负责过高阶组件、意图生码、代码编辑器等模块。",
      tags: ["AI", "代码生成", "大模型", "编辑器"]
    },
    {
      title: "AIStudio IDE",
      period: "蚂蚁时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "基于 opensumi 架构的云原生 CloudIDE，参与过双容器改造、性能优化等项目。",
      tags: ["CloudIDE", "OpenSumi", "云原生", "性能优化"]
    }
  ];

  const getPeriodColor = (period: string) => {
    switch (period) {
      case "百度时期": return "from-purple-500 to-pink-500";
      case "融媒体时期": return "from-orange-500 to-red-500";
      case "蚂蚁时期": return "from-blue-500 to-cyan-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto section-fade-in">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        项目经历
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={project.title} className="card-glow bg-card/80 backdrop-blur-sm border-border/50 h-full">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${getPeriodColor(project.period)} bg-opacity-20`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-accent border-accent/50 mb-4">
                    {project.period}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="tag-pill text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;