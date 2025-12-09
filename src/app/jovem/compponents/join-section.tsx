import type React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, MessageCircle, ArrowRight } from "lucide-react";

export function JoinSection() {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Faça Parte
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight text-balance">
              Junte-se a <span className="text-primary">Nós!</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Venha fazer parte dessa família! Aqui você encontrará amigos
              verdadeiros, crescimento espiritual e um lugar para desenvolver
              seus dons.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPinIcon className="w-5 h-5 text-primary" />
                </div>
                <span>Líder: Pastor Junior</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>searajovem@teste.com</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold group"
            >
              Entre em Contato
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Social Links */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="group p-8 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-1">
                Instagram
              </h3>
              <p className="text-sm text-muted-foreground">@searajovem</p>
            </a>

            <a
              href="#"
              className="group p-8 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-1">
                WhatsApp
              </h3>
              <p className="text-sm text-muted-foreground">Grupo da Galera</p>
            </a>

            <a
              href="#"
              className="group col-span-2 p-8 bg-primary rounded-3xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                    Venha nos visitar!
                  </h3>
                  <p className="text-primary-foreground/80">
                    Domingos às 18:00 - Culto de Jovens
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-primary-foreground" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
