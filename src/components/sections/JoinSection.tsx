export interface JoinInfoItem {
  icon: React.ReactNode;
  label: string;
}

export interface SocialLinkItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export interface LocationInfo {
  icon: React.ReactNode;
  title: string;
  address: string;
  mapEmbedUrl: string;
}

interface JoinSectionProps {
  subtitle?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  infoItems: JoinInfoItem[];
  socialLinks: SocialLinkItem[];
  location: LocationInfo;
}

export function JoinSection({
  subtitle = "Faça Parte",
  title,
  description,
  infoItems,
  socialLinks,
  location,
}: JoinSectionProps) {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px]" />
      <div className="max-w-6xl mx-auto relative z-10">
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
            <div className="space-y-4 mb-8">
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Content - Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                {link.icon}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </a>
            ))}
            <div className="md:col-span-2 bg-background rounded-3xl border border-border overflow-hidden shadow-xl p-0">
              <div className="flex items-center gap-3 px-8 pt-8 pb-4">
                {location.icon}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {location.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {location.address}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <iframe
                  src={location.mapEmbedUrl}
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
