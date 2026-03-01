import { BookOpen, FileText, Globe, Newspaper, Download, ExternalLink, ArrowRight, Library } from 'lucide-react';

const topArticles = [
  {
    id: 'digital-bangladesh',
    title: 'Digital Bangladesh: Vision 2021 and Beyond',
    summary:
      'An in-depth look at the Awami League\'s transformative Digital Bangladesh initiative — covering e-governance, ICT infrastructure expansion, and the journey toward a knowledge-based economy.',
    category: 'Policy',
    icon: Globe,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'mujibism-ideology',
    title: 'Mujibism: The Four Pillars of Bangabandhu\'s Political Philosophy',
    summary:
      'A scholarly examination of the four foundational principles — nationalism, democracy, secularism, and socialism — that form the ideological bedrock of the Bangladesh Awami League.',
    category: 'Ideology',
    icon: BookOpen,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'liberation-war-legacy',
    title: 'The Liberation War of 1971: Awami League\'s Role and Legacy',
    summary:
      'A comprehensive historical account of the Bangladesh Liberation War, documenting the Awami League\'s leadership in the independence movement and the founding of the nation.',
    category: 'History',
    icon: FileText,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'economic-development',
    title: 'Bangladesh\'s Economic Miracle: Policies and Progress',
    summary:
      'An analysis of Bangladesh\'s remarkable economic growth trajectory under Awami League governance, including poverty reduction, garment industry development, and GDP milestones.',
    category: 'Economy',
    icon: Newspaper,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'womens-empowerment',
    title: 'Women\'s Empowerment and Gender Equality Initiatives',
    summary:
      'Documenting the Awami League\'s landmark policies on women\'s empowerment — from reserved parliamentary seats to microcredit programmes and maternal health improvements.',
    category: 'Social Policy',
    icon: Library,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'climate-resilience',
    title: 'Climate Resilience and Environmental Policy in Bangladesh',
    summary:
      'An overview of Bangladesh\'s proactive stance on climate change adaptation, including the Bangladesh Climate Change Strategy and Action Plan championed by the Awami League government.',
    category: 'Environment',
    icon: Globe,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'election-manifesto-2024',
    title: 'Election Manifesto 2024: Smart Bangladesh Vision',
    summary:
      'The official Awami League election manifesto outlining the "Smart Bangladesh" vision for 2041 — focusing on smart citizens, smart economy, smart government, and smart society.',
    category: 'Manifesto',
    icon: FileText,
    url: 'https://www.albd.org/publications/',
  },
  {
    id: 'foreign-policy',
    title: 'Bangladesh\'s Foreign Policy: Friendship to All, Malice to None',
    summary:
      'An exploration of Bangladesh\'s foreign policy doctrine under the Awami League, rooted in Bangabandhu\'s principle of "Friendship to all, malice to none" and active multilateralism.',
    category: 'Foreign Policy',
    icon: BookOpen,
    url: 'https://www.albd.org/publications/',
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Policy:        { bg: 'oklch(0.38 0.1 155 / 0.12)', text: 'oklch(0.38 0.1 155)', border: 'oklch(0.38 0.1 155 / 0.3)' },
  Ideology:      { bg: 'oklch(0.52 0.22 25 / 0.12)', text: 'oklch(0.52 0.22 25)', border: 'oklch(0.52 0.22 25 / 0.3)' },
  History:       { bg: 'oklch(0.65 0.18 85 / 0.12)', text: 'oklch(0.55 0.18 75)', border: 'oklch(0.65 0.18 85 / 0.3)' },
  Economy:       { bg: 'oklch(0.38 0.1 155 / 0.12)', text: 'oklch(0.38 0.1 155)', border: 'oklch(0.38 0.1 155 / 0.3)' },
  'Social Policy': { bg: 'oklch(0.52 0.22 25 / 0.12)', text: 'oklch(0.52 0.22 25)', border: 'oklch(0.52 0.22 25 / 0.3)' },
  Environment:   { bg: 'oklch(0.45 0.14 155 / 0.12)', text: 'oklch(0.38 0.1 155)', border: 'oklch(0.45 0.14 155 / 0.3)' },
  Manifesto:     { bg: 'oklch(0.65 0.18 85 / 0.12)', text: 'oklch(0.55 0.18 75)', border: 'oklch(0.65 0.18 85 / 0.3)' },
  'Foreign Policy': { bg: 'oklch(0.38 0.1 155 / 0.12)', text: 'oklch(0.38 0.1 155)', border: 'oklch(0.38 0.1 155 / 0.3)' },
};

export default function Resources() {
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
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-6"
            style={{
              backgroundColor: 'oklch(0.65 0.18 85 / 0.15)',
              color: 'oklch(0.65 0.18 85)',
              border: '1px solid oklch(0.65 0.18 85 / 0.3)',
            }}
          >
            <Library size={12} />
            Publications & Resources
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            Resources & Publications
          </h1>
          <p className="text-primary-foreground/70 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Explore featured articles, policy documents, historical records, and official publications from the Bangladesh Awami League.
          </p>
          <div className="mt-8">
            <a
              href="https://www.albd.org/publications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'oklch(0.65 0.18 85)', color: 'oklch(0.18 0.08 155)' }}
            >
              <ExternalLink size={15} />
              Browse All Publications on albd.org
            </a>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="section-divider" style={{ backgroundColor: 'oklch(0.25 0.09 155)' }} />

      {/* Top Articles Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'oklch(0.52 0.22 25 / 0.1)',
                color: 'oklch(0.52 0.22 25)',
                border: '1px solid oklch(0.52 0.22 25 / 0.25)',
              }}
            >
              <FileText size={12} />
              Featured
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Top Articles & Publications
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Highlighted readings from the official Awami League publications archive — covering ideology, history, policy, and governance.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {topArticles.map((article) => {
              const Icon = article.icon;
              const colors = categoryColors[article.category] ?? categoryColors['Policy'];
              return (
                <article
                  key={article.id}
                  className="group relative bg-card rounded-2xl border shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                  style={{ borderColor: 'oklch(0.38 0.1 155 / 0.18)' }}
                >
                  <div className="p-7 flex flex-col flex-1">
                    {/* Top row: icon + category badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: colors.bg }}
                      >
                        <Icon size={20} style={{ color: colors.text }} />
                      </div>
                      <span
                        className="text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed flex-1 mb-6">
                      {article.summary}
                    </p>

                    {/* CTA */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-sans font-semibold transition-all duration-200 group/link"
                      style={{ color: 'oklch(0.38 0.1 155)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.52 0.22 25)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.38 0.1 155)';
                      }}
                    >
                      Read on albd.org
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </div>

                  {/* Subtle background decoration */}
                  <div
                    className="absolute bottom-0 right-0 w-28 h-28 opacity-5 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, oklch(0.65 0.18 85) 0%, transparent 70%)',
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.albd.org/publications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-200 hover:opacity-90"
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
              <Download size={15} />
              View All Publications on albd.org
              <ExternalLink size={13} className="opacity-70" />
            </a>
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
            Access the Full Publications Archive
          </h3>
          <p className="text-primary-foreground/70 font-sans text-sm mb-6 max-w-lg mx-auto">
            The official Bangladesh Awami League website hosts the complete archive of publications, policy papers, and official documents at albd.org/publications.
          </p>
          <a
            href="https://www.albd.org/publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: 'oklch(0.65 0.18 85)', color: 'oklch(0.18 0.08 155)' }}
          >
            <ExternalLink size={15} />
            Go to albd.org/publications
          </a>
        </div>
      </section>
    </main>
  );
}
