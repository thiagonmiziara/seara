import type { LucideIcon } from "lucide-react";

export interface MissionValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MissionSectionProps {
  subtitle?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  values: MissionValue[];
}

export function MissionSection({
  subtitle = "Nossa Missão",
  title,
  description,
  values,
}: MissionSectionProps) {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              {subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight text-balance">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
          </div>

          {/* Right Content - Values Cards */}
          <div className="space-y-4">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
