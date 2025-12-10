import { BookOpen, Music, Users2, Flame, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const activities = [
  {
    icon: BookOpen,
    title: "Estudo Bíblico",
    description: "Aprofunde-se na Palavra de Deus",
    schedule: "Terças-feiras às 19:30",
    highlight: true,
  },
  {
    icon: Music,
    title: "Louvor & Adoração",
    description: "Momentos de intimidade com Deus",
    schedule: "Domingos às 18:00",
    highlight: false,
  },
  {
    icon: Users2,
    title: "Célula de Jovens",
    description: "Comunhão e edificação mútua",
    schedule: "Quintas-feiras às 20:00",
    highlight: false,
  },
  {
    icon: Flame,
    title: "Avivamento",
    description: "Cultos especiais de busca",
    schedule: "Último sábado do mês",
    highlight: true,
  },
];

export function ActivitiesSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            O Que Fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Atividades & <span className="text-primary">Encontros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diversos momentos para crescer na fé, fazer amizades e viver
            experiências transformadoras.
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
