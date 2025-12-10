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
          </div>

          {/* Right Content - Social Links */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.instagram.com/searajovem/"
              target="_blank"
              rel="noopener noreferrer"
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

            <div className="col-span-2 bg-background rounded-3xl border border-border overflow-hidden shadow-xl p-0">
              <div className="flex items-center gap-3 px-8 pt-8 pb-4">
                <MapPinIcon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Igreja Seara de Deus - Sede
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Av. Mato Grosso, 694 - Nossa Sra. Aparecida, Uberlândia -
                    MG, 38400-724
                  </p>
                </div>
              </div>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.859182694944!2d-48.2742206!3d-18.9047337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445fb95e87dbd%3A0xf82a1239ff0bffa8!2sIgreja%20Seara%20de%20Deus%20-%20Sede!5e0!3m2!1spt-BR!2sbr!4v1717780782999!5m2!1spt-BR!2sbr"
                  height="180"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
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
