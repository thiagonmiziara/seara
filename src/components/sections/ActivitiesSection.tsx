import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export interface ActivityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  schedule: string;
  highlight?: boolean;
}

interface ActivitiesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  activities: ActivityItem[];
}

export function ActivitiesSection({
  title = "Atividades & Encontros",
  subtitle = "O Que Fazemos",
  description = "Diversos momentos para crescer na fé, fazer amizades e viver experiências transformadoras.",
  activities,
}: ActivitiesSectionProps) {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-balance">
            {title.includes("<span") ? (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              title
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className={`flex items-center gap-4 bg-card rounded-xl p-5 border transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 border-border`}
            >
              <div className="flex-shrink-0">
                <activity.icon
                  className={`h-6 w-6 ${
                    activity.highlight ? "text-primary" : "text-primary"
                  }`}
                />
              </div>
              <div className="flex-1">
                <div
                  className={`font-bold text-lg ${
                    activity.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {activity.title}
                </div>
                <div className={`text-muted-foreground text-sm mb-1`}>
                  {activity.description}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{activity.schedule}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
