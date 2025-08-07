import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto section-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 gradient-text">联系我</h2>
        <p className="text-xl text-muted-foreground">
          期待与您交流合作，共同创造更美好的产品
        </p>
      </div>

      <Card className="card-glow bg-card/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                我的优势
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">8年+ 前端开发经验</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">大厂项目实战经验</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">全栈技术能力</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">追求完美的产品体验</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                联系方式
              </h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-14 text-left bg-secondary/20 border-secondary/30 hover:bg-secondary/30"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">邮箱联系</div>
                    <div className="text-sm text-muted-foreground">
                      1135895008@qq.com
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-14 text-left bg-secondary/20 border-secondary/30 hover:bg-secondary/30"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">微信</div>
                    <div className="text-sm text-muted-foreground">
                      virgil_yg
                    </div>
                  </div>
                </Button>

                {/* <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-14 text-left bg-secondary/20 border-secondary/30 hover:bg-secondary/30"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">
                      查看我的开源项目
                    </div>
                  </div>
                </Button> */}
                {/* 
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-14 text-left bg-secondary/20 border-secondary/30 hover:bg-secondary/30"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">
                      职业社交网络
                    </div>
                  </div>
                </Button> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
