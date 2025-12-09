import { Target, Heart, Users } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Nossa Missão
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight text-balance">
              Formando uma geração{" "}
              <span className="text-primary">apaixonada</span> por Jesus
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Ministério de Jovens da Seara de Deus forma uma geração
              apaixonada por Jesus, firmada na Palavra e relevante neste tempo,
              através de discipulado, comunhão, adoração e serviço ao Reino.
            </p>
          </div>

          {/* Right Content - Values Cards */}
          <div className="space-y-4">
            <div className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Propósito
                  </h3>
                  <p className="text-muted-foreground">
                    Guiados por um chamado maior, vivemos para glorificar a Deus
                    em tudo.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Paixão
                  </h3>
                  <p className="text-muted-foreground">
                    Ardemos pelo evangelho e pela transformação de vidas através
                    de Cristo.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Comunidade
                  </h3>
                  <p className="text-muted-foreground">
                    Juntos somos mais fortes. Vivemos em comunhão e amor uns
                    pelos outros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
