import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness } from "lucide-react";

const ProjectsSection = () => {
  const businesses = [
    {
      title: "语雀编辑器",
      period: "蚂蚁时期",
      icon: <BriefcaseBusiness className="w-6 h-6" />,
      description:
        "语雀是孵化自蚂蚁集团的一款专业的云端知识库，支持了包括阿里集团在内的十万员工的日常文档编写、知识管理工作。语雀本身是一个全栈 Node.js 全栈应用，实现了包含个人知识管理，知识库管理、多人协同编辑、版本控制等办公协同领域下的众多功能，并实现了与 Dima、蚂蚁钉等内部软件的协同。在业务发展的过程中，自研了富文本、数据表、工作表、画板、目录等多个编辑器，我在其中参与并负责语雀核心编辑器功能，包括数据表编辑器、富文本编辑器等核心模块的设计实现。同时，在 AI 时代也参与了专业文档 Agent，文档写作 Copilot 等新功能的设计开发。",
      projects: [
        {
          title: "Lakex 富文本编辑器内核",
          desc: "实现了基于三层架构的富文本编辑器内核，具备高健壮性，在内核层严格控制数据正确性，避免产生不符合预期的数据结构；高扩展性，通过 Plugin 机制实现良好的拓展性，编辑器中所有的功能均可通过 Plugin 实现，插件可以对内核层，引擎层，编辑层进行扩展；可维护性：采用良好的分层架构，通过 Kernel 和 Engine 将数据与视图分离，功能通过插件扩展的方式，使得功能更加内聚。",
        },
        {
          title: "数据表编辑器架构升级",
          desc: "实现了数据表的分层架构，支持了文档嵌入数据表卡片、数据同步等功能，同时渲染引擎从 canvas 切换到 dom，降低数据表视图开发成本，提升开发效率",
        },
        {
          title: "划词评论系统",
          desc: "实现了基于划词的评论功能，支持了对文档内容的快速评论、回复、点赞、多人数据协同等操作，提升了文档协作效率",
        },
        {
          title: "文档演示模式",
          desc: "实现了会议场景下更方便的文档演示模式，支持了文档的实时演示、自定义分页、展示评论、激光笔等功能",
        },
        {
          title: "专业文档 Agent",
          desc: "基于蚂蚁业务场景，在文档写作场景下，提供专业的文档 Agent 功能，包括 PRD 文档、技术分档等，打通上下工程，提升组织效率",
        },
        {
          title: "文档写作 Copilot",
          desc: "基于大模型的文档写作 Copilot，支持了文档的自动生成、自动格式化、自动补全、自动纠错、自动生图等功能，提升了文档写作效率",
        },
      ],
      tags: ["富文本编辑", "实时协同", "性能优化", "架构设计"],
    },
    {
      title: "Weavefox AI 生码平台",
      period: "蚂蚁时期",
      icon: <BriefcaseBusiness className="w-6 h-6" />,
      description:
        "Weavefox 是基于 bailingVL 模型矩阵的 AI 代码生成平台，提供智能化的前端开发解决方案，已经在蚂蚁落地生成超过百万行代码。我参与并负责了其中意图生码（Vibe Coding）模块从 0 到 1 的搭建，及高阶组件生成等功能的设计开发。",
      projects: [
        {
          title: "高阶组件生成",
          desc: "通过 RAG 技术进行相似度匹配，召回相关的业务组件库，并调用大模型生成业务组件库代码",
        },
        {
          title: "意图生码能力",
          desc: "调用大模型将用户的意图转换为代码，实现了基于自然语言的代码生成，并实现了前端代码构建、实时预览、发布部署，版本管理等功能",
        },
        {
          title: "自动巡检数据飞轮",
          desc: "通过定时任务，自动巡检数据飞轮，发现数据异常并及时报警，24 小时不间断利用大模型生成前端代码，配合 UIA 能力做线上巡检",
        },
      ],
      tags: ["AI", "代码生成", "大模型", "智能化开发"],
    },
    {
      title: "AIStudio CloudIDE",
      period: "蚂蚁时期",
      icon: <BriefcaseBusiness className="w-6 h-6" />,
      description:
        "AIStudio 是蚂蚁集团的一款集成 WebIDE 并且提供模型开发与部署、服务发布与监控的一体化研发平台。AIStudio 提供了完整的云端开发环境，覆盖了集团大模型训练及数据研发场景，从平台层面兼容了底层各种技术框架，统一了数据处理、特征工程、算法、模型评估每个环节的工作，构建了一体建模平台，同时平台还提供大量的数据探索、可视化评估等产品功能。我负责了其中的 CloudIDE 及 Notebook 模块，支持了 IDE 前端开发、VSCode 插件开发、容器部署等多个环节。",
      projects: [
        {
          title: "双容器架构改造",
          desc: "将 IDE 从单容器架构改造为双容器架构，解决研发容器在运行任务时占用系统资源导致 IDE 卡顿的问题",
        },
        {
          title: "IDE 启动时间优化",
          desc: "通过启动脚本优化，unfsd，cache pod 等方案，优化启动耗时，提升用户体验",
        },
        {
          title: "IDE 操作卡顿性能优化",
          desc: "通过全链路追踪方案，监控从前端到 Node 服务端，再到容器及 NAS 服务挂载全链路耗时，优化操作卡顿问题",
        },
      ],
      tags: ["CloudIDE", "云原生", "性能优化", "模型训练"],
    },
  ];

  const getPeriodColor = (period: string) => {
    switch (period) {
      case "百度时期":
        return "from-purple-500 to-pink-500";
      case "融媒体时期":
        return "from-orange-500 to-red-500";
      case "蚂蚁时期":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto section-fade-in">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        负责业务
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {businesses.map((business, index) => {
          return (
            <Card
              key={business.title}
              className="card-glow bg-card/80 backdrop-blur-sm border-border/50 h-full"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${getPeriodColor(
                      business.period
                    )} bg-opacity-20`}
                  >
                    {business.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">
                      {business.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-accent border-accent/50 mb-4"
                    >
                      {business.period}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-4">
                      {business.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {business.projects.map((project, projectIndex) => (
                        <div
                          key={project.title}
                          className="group relative p-4 rounded-lg border border-border/30 bg-gradient-to-br from-background/50 to-muted/20 hover:from-accent/10 hover:to-accent/5 transition-all duration-300 hover:shadow-md hover:border-accent/30"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/70 mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300 leading-relaxed">
                                {project.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {project.desc}
                              </p>
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {business.tags.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
