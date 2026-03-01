import { Newspaper, Users, BookOpen, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const newsSections = [
  {
    id: 'latest-news',
    icon: Newspaper,
    title: 'Latest News',
    description:
      'Stay up to date with the latest announcements, press releases, and official statements from the Bangladesh Awami League. Follow breaking developments and party activities as they happen.',
    cta: 'Read Latest News',
    url: 'https://www.albd.org/category/news',
    accent: 'border-primary',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    badgeLabel: 'News',
  },
  {
    id: 'party-news',
    icon: Users,
    title: 'Party News',
    description:
      'Explore internal party updates, leadership decisions, organisational activities, and grassroots initiatives from across Bangladesh. A comprehensive look at the party\'s day-to-day operations.',
    cta: 'Browse Party News',
    url: 'https://www.albd.org/category/party-news',
    accent: 'border-accent-gold',
    iconBg: 'bg-accent-gold/10',
    iconColor: 'text-accent-gold',
    badgeLabel: 'Party',
  },
  {
    id: 'election-manifesto',
    icon: BookOpen,
    title: 'Election Manifesto',
    description:
      'Read the official election manifesto of the Bangladesh Awami League — outlining the party\'s vision, policy commitments, and development agenda for the people of Bangladesh.',
    cta: 'View Election Manifesto',
    url: 'https://manifesto.albd.org/',
    accent: 'border-secondary',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    badgeLabel: 'Manifesto',
  },
  {
    id: 'newsletter',
    icon: Mail,
    title: 'Newsletter',
    description:
      'Subscribe to the official Awami League newsletter to receive curated updates, event announcements, and important party communications directly in your inbox.',
    cta: 'Subscribe to Newsletter',
    url: 'https://www.albd.org/newsletter/',
    accent: 'border-primary',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    badgeLabel: 'Newsletter',
  },
];

export default function News() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section
        className="relative pt-24 pb-16 overflow-hidden"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, oklch(0.65 0.18 85) 0, oklch(0.65 0.18 85) 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-6"
            style={{ backgroundColor: 'oklch(0.65 0.18 85 / 0.15)', color: 'oklch(0.65 0.18 85)', border: '1px solid oklch(0.65 0.18 85 / 0.3)' }}>
            <Newspaper size={12} />
            Official Sources
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            News & Publications
          </h1>
          <p className="text-primary-foreground/70 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Access official news, party updates, the election manifesto, and newsletter from the Bangladesh Awami League's official channels.
          </p>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="section-divider" style={{ backgroundColor: 'oklch(0.25 0.09 155)' }} />

      {/* News Sections Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newsSections.map((section) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.id}
                  className={`group relative bg-card rounded-2xl border-l-4 ${section.accent} shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  <div className="p-8">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center`}>
                        <Icon size={22} className={section.iconColor} />
                      </div>
                      <span className="text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {section.badgeLabel}
                      </span>
                    </div>

                    {/* Content */}
                    <h2 className="font-serif font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                      {section.description}
                    </p>

                    {/* CTA */}
                    <a
                      href={section.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-sans font-semibold transition-all duration-200 group/btn"
                      style={{
                        backgroundColor: 'oklch(0.35 0.1 155)',
                        color: 'oklch(0.95 0.02 85)',
                        border: '1px solid oklch(0.65 0.18 85 / 0.3)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.45 0.14 155)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.35 0.1 155)';
                      }}
                    >
                      {section.cta}
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </div>

                  {/* Subtle background decoration */}
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, oklch(0.65 0.18 85) 0%, transparent 70%)',
                    }}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Official Website CTA */}
      <section
        className="py-14"
        style={{ backgroundColor: 'oklch(0.22 0.09 155)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif font-bold text-2xl text-primary-foreground mb-3">
            Visit the Official Website
          </h3>
          <p className="text-primary-foreground/70 font-sans text-sm mb-6 max-w-lg mx-auto">
            For the most comprehensive and up-to-date information, visit the official Bangladesh Awami League website at albd.org.
          </p>
          <a
            href="https://www.albd.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: 'oklch(0.65 0.18 85)', color: 'oklch(0.18 0.08 155)' }}
          >
            <ExternalLink size={15} />
            Go to albd.org
          </a>
        </div>
      </section>
    </main>
  );
}
