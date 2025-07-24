import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto section-fade-in">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        教育经历
      </h2>
      
      <Card className="card-glow bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/20">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl text-foreground">重庆邮电大学</CardTitle>
              <p className="text-lg text-accent">2012级毕业生</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">学院</p>
                <p className="text-muted-foreground">软件工程学院</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">专业</p>
                <p className="text-muted-foreground">英语+软件</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <GraduationCap className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">学历</p>
                <p className="text-muted-foreground">本科</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EducationSection;