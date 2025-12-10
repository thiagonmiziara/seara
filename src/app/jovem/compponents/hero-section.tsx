import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[20rem] font-black text-primary leading-none select-none">
          J
        </div>
        <div className="absolute bottom-20 right-10 text-[20rem] font-black text-primary leading-none select-none">
          V
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm font-medium text-primary">
            Igreja Seara de Deus
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 text-foreground">
          <span className="text-primary">JOVEM</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Conectando, Equipando e Enviando a{" "}
          <span className="text-primary font-semibold">Nova Geração</span>
        </p>
      </div>

      {/* Scroll Indicator - apenas desktop */}
      <div className="hidden md:flex absolute bottom-8 w-full justify-center animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            Descubra
          </span>
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </div>
    </section>
  );
}
