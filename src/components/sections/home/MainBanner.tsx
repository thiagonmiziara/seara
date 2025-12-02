import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function MainBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="/assets/searasedeigreja.png"
          alt="Sede da Igreja Seara de Deus"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/80 to-neutral-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/60 to-neutral-900/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 lg:flex-row lg:justify-between lg:px-8">
        {/* Left side - Empty space for balance or future logo */}
        <div className="hidden lg:block lg:w-1/3" />

        {/* Right side - Content */}
        <div className="max-w-2xl text-center lg:text-right">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              Igreja Seara de Deus
            </span>
          </div>

          {/* Main title */}
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Seara{" "}
            <span className="relative inline-block text-primary">
              De Deus
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary/40"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Vision section */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-yellow-400 sm:text-2xl">
              Nossa Visão
            </h2>
            <p className="text-pretty text-base leading-relaxed text-gray-300 sm:text-lg">
              Nossa visão é edificar uma igreja que cresce com profundidade e
              propósito — uma comunidade bíblica, saudável, alinhada ao céu e
              relevante na terra. Sonhamos com pessoas que conhecem a Palavra,
              discernem os tempos e vivem sua fé com responsabilidade, coragem e
              santidade.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-yellow-400 sm:text-2xl">
              Nossa Missão
            </h2>
            <p className="text-pretty text-base leading-relaxed text-gray-300 sm:text-lg">
              Nossa missão é formar discípulos íntegros, maduros e cheios do
              Espírito, capazes de revelar Cristo no caráter, na vida diária e
              no serviço. Não buscamos notoriedade; buscamos transformação.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            Descubra
          </span>
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent" />
    </section>
  );
}
