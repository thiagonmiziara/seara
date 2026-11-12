export interface JoinInfoItem { icon: React.ReactNode; label: string; }
export interface SocialLinkItem { icon: React.ReactNode; title: string; description: string; href: string; }
export interface LocationInfo { icon: React.ReactNode; title: string; address: string; mapEmbedUrl: string; }
interface JoinSectionProps { subtitle?: string; title: React.ReactNode; description: React.ReactNode; infoItems: JoinInfoItem[]; socialLinks: SocialLinkItem[]; location: LocationInfo; }

export function JoinSection({ title, description, infoItems, socialLinks, location }: JoinSectionProps) {
  return (
    <section id='participar' className='ministry-join bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:px-12 lg:py-20'>
      <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16'>
        <div>
          <h2 className='text-balance text-4xl font-black leading-[.98] tracking-[-.04em] sm:text-6xl'>{title}</h2>
          <p className='mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90'>{description}</p>
          <div className='mt-7 divide-y divide-primary-foreground/20 border-y border-primary-foreground/20'>
            {infoItems.map((item, index) => (
              <div key={index} className='flex items-center gap-3 py-3 font-semibold'>
                {item.icon}{item.label}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='grid gap-3 sm:grid-cols-2'>
            {socialLinks.map((link) => (
              <a key={link.title} href={link.href} target='_blank' rel='noopener noreferrer' className='group rounded-xl border border-primary-foreground/20 bg-primary-foreground/[.06] p-6 text-primary-foreground transition-colors hover:bg-primary-foreground/[.12]'>
                {link.icon}
                <h3 className='mt-5 text-xl font-bold'>{link.title}</h3>
                <p className='mt-1 text-sm text-primary-foreground/90'>{link.description}</p>
              </a>
            ))}
          </div>
          <div className='mt-4 overflow-hidden rounded-xl border border-primary-foreground/20 bg-primary-foreground/[.06]'>
            <div className='flex items-start gap-3 px-6 py-4'>
              {location.icon}
              <div>
                <h3 className='font-bold'>{location.title}</h3>
                <p className='mt-1 text-sm leading-6 text-primary-foreground/90'>{location.address}</p>
              </div>
            </div>
            <iframe title={`Mapa ${location.title}`} src={location.mapEmbedUrl} height='190' width='100%' className='border-0 grayscale' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
          </div>
        </div>
      </div>
    </section>
  );
}
