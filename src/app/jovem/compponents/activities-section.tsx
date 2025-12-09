import { BookOpen, Music, Users2, Flame, Calendar } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                activity.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`p-4 rounded-2xl ${
                    activity.highlight
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10"
                  }`}
                >
                  <activity.icon
                    className={`w-8 h-8 ${
                      activity.highlight
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    activity.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{activity.schedule}</span>
                </div>
              </div>

              <h3
                className={`text-2xl font-bold mb-2 ${
                  activity.highlight
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {activity.title}
              </h3>
              <p
                className={`text-base ${
                  activity.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
