import { Link } from '@tanstack/react-router';
import { BookOpen, Lightbulb, Building2, Users, ChevronRight, Star, Bell, ExternalLink } from 'lucide-react';
import KeyFactsStrip from '../components/KeyFactsStrip';
import NavigationCard from '../components/NavigationCard';

const navCards = [
  {
    title: 'History',
    description: 'From the founding in 1949 to the Liberation War of 1971 and beyond — explore the rich political history of the Awami League.',
    Icon: BookOpen,
    path: '/history',
    accentColor: 'green' as const,
  },
  {
    title: 'Ideology & Policies',
    description: 'The four pillars of Mujibism: Bengali nationalism, democracy, secularism, and socialism — the foundation of Bangladesh.',
    Icon: Lightbulb,
    path: '/ideology',
    accentColor: 'red' as const,
  },
  {
    title: 'Organisation',
    description: 'Discover the internal structure of the Awami League — from the national council to grassroots-level units across Bangladesh.',
    Icon: Building2,
    path: '/organisation',
    accentColor: 'gold' as const,
  },
  {
    title: 'Chhatra League',
    description: 'The Bangladesh Chhatra League — the student wing that played a pivotal role in the Language Movement and Liberation War.',
    Icon: Users,
    path: '/chhatra-league',
    accentColor: 'green' as const,
  },
];

const achievements = [
  { year: '1949', text: 'Founded as East Pakistan Awami Muslim League' },
  { year: '1952', text: 'Led the Bengali Language Movement' },
  { year: '1966', text: 'Six-Point Movement for autonomy' },
  { year: '1971', text: 'Led Bangladesh to independence' },
  { year: '1972', text: 'Framed the Constitution of Bangladesh' },
  { year: '2008', text: 'Landslide election victory, Digital Bangladesh vision' },
];

const AL_BADGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9C.svg/250px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9C.svg.png';

const AL_FLAG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A6%A4%E0%A6%BE%E0%A6%95%E0%A6%BE.svg/250px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A6%A4%E0%A6%BE%E0%A6%95%E0%A6%BE.svg.png';

const AL_SYMBOL_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%95.svg/250px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%95.svg.png';

const partyIdentityImages = [
  { src: AL_BADGE_URL, caption: 'Badge of Awami League' },
  { src: AL_FLAG_URL, caption: 'Flag of Awami League' },
  { src: AL_SYMBOL_URL, caption: 'Electoral Symbol of Awami League' },
];

const FEATURED_NOTICE = {
  title: 'Sajeeb Wazed Urges International Community to Save Bangladesh from Falling in Grasp of Islamic Extremists',
  url: 'https://www.albd.org/articles/news/41681/Sajeeb-Wazed-Urges-International-Community-to-Save-Bangladesh-from-Falling-in-Grasp-of-Islamic-Extremists',
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1440x600.png"
            alt="Awami League Hero"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          {/* Emblem */}
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 rounded-full overflow-hidden border-4 shadow-hero"
              style={{ borderColor: 'oklch(0.78 0.12 75)' }}
            >
              <img
                src={AL_BADGE_URL}
                alt="Awami League Emblem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tagline */}
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.8)', color: 'white' }}
          >
            Bangladesh's Oldest Political Party · Est. 1949
          </div>

          <h1 className="font-serif font-black text-5xl md:text-7xl text-white mb-4 leading-tight">
            Bangladesh<br />
            <span style={{ color: 'oklch(0.78 0.12 75)' }}>Awami League</span>
          </h1>

          <p className="text-white/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Championing democracy, secularism, Bengali nationalism, and social justice since 23 June 1949. The party that led Bangladesh to independence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/history"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: 'oklch(0.38 0.1 155)' }}
            >
              Explore History <ChevronRight size={18} />
            </Link>
            <Link
              to="/ideology"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white border border-white/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Our Ideology <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full" />
        </div>
      </section>

      {/* Key Facts Strip */}
      <KeyFactsStrip />

      {/* Featured Notice Banner */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="rounded-2xl border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-card"
            style={{
              borderColor: 'oklch(0.72 0.14 80 / 0.4)',
              backgroundColor: 'oklch(0.72 0.14 80 / 0.06)',
            }}
          >
            {/* Icon */}
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'oklch(0.72 0.14 80 / 0.15)' }}
            >
              <Bell size={22} style={{ color: 'oklch(0.62 0.14 80)' }} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div
                className="inline-block text-xs font-sans font-semibold uppercase tracking-widest mb-1 px-2 py-0.5 rounded"
                style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.12)', color: 'oklch(0.52 0.22 25)' }}
              >
                Latest Notice
              </div>
              <p className="font-serif font-bold text-base md:text-lg text-foreground leading-snug mt-1">
                {FEATURED_NOTICE.title}
              </p>
            </div>

            {/* CTA */}
            <a
              href={FEATURED_NOTICE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: 'oklch(0.38 0.1 155)' }}
            >
              Read More <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Party Identity Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="gold-divider mb-6" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Party Identity
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              The official symbols, flag, and electoral mark of the Bangladesh Awami League.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {partyIdentityImages.map((item) => (
              <div
                key={item.caption}
                className="flex flex-col items-center rounded-2xl border bg-card p-6 hover:shadow-card transition-all duration-200"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <div className="flex items-center justify-center h-40 w-full mb-4">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="max-h-36 max-w-full object-contain drop-shadow-md"
                  />
                </div>
                <p className="font-sans font-semibold text-sm text-foreground text-center mb-1">
                  {item.caption}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  Source:{' '}
                  <a
                    href="https://commons.wikimedia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-500 underline underline-offset-2 transition-colors"
                  >
                    Wikimedia Commons
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div className="gold-divider mt-10" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground font-medium italic leading-relaxed mb-6">
            "Joy Bangla — Victory to Bengal. The struggle this time is for our emancipation; the struggle this time is for independence."
          </blockquote>
          <cite className="text-muted-foreground font-sans text-sm not-italic">
            — Sheikh Mujibur Rahman, 7 March 1971
          </cite>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16" style={{ backgroundColor: 'oklch(0.95 0.008 90)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Explore the Awami League
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Discover the history, ideology, structure, and student wing of Bangladesh's oldest political party.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navCards.map((card) => (
              <NavigationCard key={card.path} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Timeline Strip */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Key Milestones
            </h2>
            <p className="text-muted-foreground font-sans">
              Seven decades of shaping Bangladesh's destiny
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((item) => (
              <div
                key={item.year}
                className="text-center p-4 rounded-xl border bg-card hover:shadow-card transition-all duration-200"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <div
                  className="font-serif font-black text-2xl mb-2"
                  style={{ color: 'oklch(0.52 0.22 25)' }}
                >
                  {item.year}
                </div>
                <p className="text-muted-foreground text-xs font-sans leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Star size={32} style={{ color: 'oklch(0.78 0.12 75)' }} />
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-white/70 font-sans max-w-xl mx-auto mb-8">
            Be part of Bangladesh's journey toward progress, democracy, and prosperity. The Awami League welcomes all who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.albd.org/join-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
            >
              Join Us <ExternalLink size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white border border-white/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Get Involved <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
