import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layers, Palette } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "文库编辑器",
      period: "百度时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "一款移动端富文本编辑器，基于 Hybrid 技术实现 Android 和 iOS 的富文本编辑器。",
      highlights: [
        "支持 Word、Excel、PDF、TXT 等多格式文档编辑",
        "文本加粗、颜色修改、字号设置、插入图片等丰富编辑功能",
        "基于 Quill.js 架构，自研表格编辑引擎",
        "集成 Handsontable 实现复杂表格操作（合并单元格、新增行列）",
        "Hybrid 架构实现原生性能体验",
        "支持千万级用户并发编辑"
      ],
      techStack: ["Quill.js", "Handsontable", "Hybrid", "JavaScript", "CSS3", "WebView"],
      tags: ["富文本编辑", "Hybrid", "移动端", "表格编辑"]
    },
    {
      title: "走班排课系统",
      period: "百度时期",
      icon: <Layers className="w-6 h-6" />,
      description: "新高考需求下为教师提供排课功能的智能排课平台，支持复杂排课算法和多场景部署。",
      highlights: [
        "Vue.js 全家桶架构（Vue + Vue Router + Vuex）",
        "YOG2（Express 框架）+ MySQL + Sequelize ORM 后端架构",
        "FIS3 前端构建工程化方案",
        "支持私有化、单机离线、云上环境三种部署模式",
        "集成前端单元测试（Jest）和 UI 自动化测试（Cypress）",
        "智能排课算法，解决师资冲突和教室资源分配",
        "实时数据同步和冲突检测机制"
      ],
      techStack: ["Vue.js", "Vuex", "Express", "MySQL", "Sequelize", "FIS3", "Jest", "Cypress"],
      tags: ["Vue", "全栈开发", "工程化", "算法优化"]
    },
    {
      title: "xTopic 可视化搭建平台",
      period: "百度时期",
      icon: <Palette className="w-6 h-6" />,
      description: "基于 Schema 驱动的可视化专题页面配置平台，支持拖拽式页面搭建和组件化开发。",
      highlights: [
        "自定义 JSON Schema 规范，支持动态表单生成",
        "拖拽式组件编排，所见即所得的编辑体验",
        "组件库架构设计，支持组件热插拔",
        "模板市场机制，支持页面模板复用",
        "实时预览和多端适配（PC/Mobile/Tablet）",
        "支持自定义 CSS 和 JavaScript 注入",
        "版本管理和回滚机制"
      ],
      techStack: ["React", "JSON Schema", "Webpack", "Babel", "PostCSS", "TypeScript"],
      tags: ["可视化搭建", "Schema", "低代码", "组件化"]
    },
    {
      title: "Hades 通信桥接框架",
      period: "百度时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "模块化的 Hybrid 容器通信 Bridge 框架，解决 H5 与原生 App 的高效通信问题。",
      highlights: [
        "模块化架构设计，支持按需加载和插件扩展",
        "统一的 API 规范，屏蔽 iOS/Android 差异",
        "支持同步/异步调用模式",
        "内置超时处理和错误重试机制",
        "TypeScript 强类型支持，提升开发体验",
        "支持 Promise 和 Callback 两种编程模式",
        "性能监控和调试工具集成"
      ],
      techStack: ["TypeScript", "WebView", "iOS Native", "Android Native", "Promise"],
      tags: ["Hybrid", "通信框架", "模块化", "TypeScript"]
    },
    {
      title: "wapX 多端适配库",
      period: "百度时期",
      icon: <Layers className="w-6 h-6" />,
      description: "一套代码适配多平台的导流与行为适配库，解决多端开发和动态导流的复杂性问题。",
      highlights: [
        "一套代码适配文库 APP、阅读 APP、H5 多个平台",
        "统一的 API 抽象层，屏蔽平台差异",
        "动态 APK 下载和 Universal Link 智能路由",
        "行为一致性保证，提升用户体验",
        "支持 A/B Testing 和灰度发布",
        "完善的埋点和数据分析体系",
        "自动化测试覆盖多端场景"
      ],
      techStack: ["JavaScript", "Universal Link", "Deep Link", "Webpack", "Babel"],
      tags: ["多端适配", "导流优化", "架构设计", "性能优化"]
    },
    {
      title: "学习管理平台",
      period: "融媒体时期",
      icon: <Layers className="w-6 h-6" />,
      description: "支持数百万基层学习组织的党员管理平台，承载大规模用户的学习管理和数据分析需求。",
      highlights: [
        "React + Redux + React Router 现代化技术栈",
        "微前端架构，支持多团队协作开发",
        "大数据量处理，支持百万级用户并发",
        "实时数据同步和消息推送机制",
        "多维度数据报表和可视化图表",
        "权限管理系统，支持多级组织架构",
        "性能优化：虚拟滚动、懒加载、缓存策略",
        "移动端适配和 PWA 支持"
      ],
      techStack: ["React", "Redux", "Ant Design", "ECharts", "Webpack", "PWA"],
      tags: ["React", "大规模应用", "数据可视化", "性能优化"]
    },
    {
      title: "答题 C 端应用",
      period: "融媒体时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "支撑学习强国线上答题的核心应用，服务千万级用户的在线学习和考试需求。",
      highlights: [
        "高并发架构设计，支持千万用户同时在线",
        "实时答题系统，毫秒级响应速度",
        "智能防作弊机制，保证考试公平性",
        "离线缓存策略，支持弱网环境答题",
        "多种题型支持：单选、多选、填空、论述等",
        "个性化推荐算法，智能推送学习内容",
        "完善的统计分析和学习轨迹追踪",
        "无障碍访问支持，提升用户体验"
      ],
      techStack: ["Vue.js", "Vuex", "WebSocket", "IndexedDB", "Service Worker"],
      tags: ["Vue", "高并发", "实时通信", "离线支持"]
    },
    {
      title: "examui 组件库",
      period: "融媒体时期",
      icon: <Palette className="w-6 h-6" />,
      description: "遵循融媒体 UI 规范的企业级 Vue 组件库，支持答题、学习管理等多个业务线。",
      highlights: [
        "基于 Vue.js 的企业级组件库架构",
        "Design Token 设计规范，保证视觉一致性",
        "TypeScript 重构，提供完整类型定义",
        "支持按需加载，Tree Shaking 优化打包体积",
        "完善的文档站点和在线演示",
        "自动化测试覆盖率 95%+",
        "支持主题定制和多套皮肤",
        "国际化支持和无障碍访问",
        "Rollup 构建优化，支持 ESM/CJS/UMD 多种格式"
      ],
      techStack: ["Vue.js", "TypeScript", "Rollup", "Storybook", "Jest", "Sass"],
      tags: ["组件库", "TypeScript", "设计系统", "工程化"]
    },
    {
      title: "vs-platform-fe 可视化搭建",
      period: "融媒体时期",
      icon: <Palette className="w-6 h-6" />,
      description: "基于 Vision 引擎的可视化搭建系统，支持答题、问卷等业务的快速搭建能力。",
      highlights: [
        "基于 Vision 引擎的渲染架构",
        "拖拽式组件编排和属性配置",
        "数据源管理和 API 集成",
        "条件逻辑和交互行为配置",
        "多端发布：H5、小程序、App 内嵌页",
        "A/B Testing 和数据分析集成",
        "组件市场和模板库",
        "版本管理和协作开发支持"
      ],
      techStack: ["React", "TypeScript", "Vision Engine", "Monaco Editor", "RxJS"],
      tags: ["可视化搭建", "多端发布", "数据驱动", "协作开发"]
    },
    {
      title: "nut 前端脚手架",
      period: "融媒体时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "部门统一的前端脚手架工具，支持多技术栈、多业务场景的项目快速创建和标准化开发。",
      highlights: [
        "支持 React/Vue/Angular 多技术栈模板",
        "集成 ESLint、Prettier、Husky 代码规范",
        "统一的构建配置和优化策略",
        "内置 CI/CD 流水线配置",
        "支持微前端和 Monorepo 架构",
        "可插拔的插件系统",
        "自动化测试和质量检测",
        "性能监控和错误追踪集成"
      ],
      techStack: ["Node.js", "Webpack", "Vite", "Lerna", "GitHub Actions"],
      tags: ["工程化", "脚手架", "DevOps", "标准化"]
    },
    {
      title: "语雀编辑器增强",
      period: "蚂蚁时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "负责语雀核心编辑器功能，包括数据表编辑器、富文本编辑器等核心模块的设计实现。",
      highlights: [
        "基于 ProseMirror 的富文本编辑器架构",
        "数据表编辑器，支持类 Excel 的表格操作",
        "划词评论系统，提升协作体验",
        "演示模式，支持 PPT 风格的内容展示",
        "实时协作编辑，支持多人同时编辑",
        "版本历史和冲突解决机制",
        "插件化架构，支持功能扩展",
        "性能优化：虚拟滚动、增量更新、懒渲染"
      ],
      techStack: ["React", "ProseMirror", "TypeScript", "WebSocket", "CRDT"],
      tags: ["富文本编辑", "实时协作", "性能优化", "架构设计"]
    },
    {
      title: "Weavefox AI 生码平台",
      period: "蚂蚁时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "基于 bailingVL 大模型的 AI 代码生成平台，提供智能化的前端开发解决方案。",
      highlights: [
        "大模型集成，支持自然语言转代码",
        "高阶组件生成，提升开发效率",
        "意图识别和代码补全",
        "Monaco Editor 深度定制",
        "代码质量检测和优化建议",
        "支持多种前端框架代码生成",
        "实时预览和调试功能",
        "代码版本管理和回滚"
      ],
      techStack: ["React", "TypeScript", "Monaco Editor", "WebAssembly", "AI/ML"],
      tags: ["AI", "代码生成", "大模型", "智能化开发"]
    },
    {
      title: "AIStudio CloudIDE",
      period: "蚂蚁时期",
      icon: <Code2 className="w-6 h-6" />,
      description: "基于 OpenSumi 架构的云原生 IDE，提供完整的云端开发环境和协作能力。",
      highlights: [
        "基于 OpenSumi 的插件化架构",
        "双容器架构设计，前后端分离",
        "VS Code 兼容的插件生态",
        "云端文件系统和版本控制",
        "实时代码同步和协作编辑",
        "集成调试和测试工具",
        "性能优化：懒加载、代码分割、缓存策略",
        "支持多种编程语言和框架"
      ],
      techStack: ["OpenSumi", "Electron", "Node.js", "Docker", "Kubernetes"],
      tags: ["CloudIDE", "云原生", "性能优化", "协作开发"]
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
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              {/* 技术亮点 */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  技术亮点
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 技术栈 */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  技术栈
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-secondary/10 border-secondary/30 hover:bg-secondary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* 项目标签 */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
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