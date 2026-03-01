import { Link } from '@tanstack/react-router';
import { BookOpen, Lightbulb, Building2, Users, ChevronRight, Star } from 'lucide-react';
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
                src="/assets/generated/party-emblem.dim_256x256.png"
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

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="gold-divider mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground font-medium italic leading-relaxed mb-6">
            "Joy Bangla — Victory to Bengal. The struggle this time is for our emancipation; the struggle this time is for independence."
          </blockquote>
          <cite className="text-muted-foreground font-sans text-sm not-italic">
            — Sheikh Mujibur Rahman, 7 March 1971
          </cite>
          <div className="gold-divider mt-8" />
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
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Be Part of the Movement
          </h2>
          <p className="text-primary-foreground/70 font-sans max-w-xl mx-auto mb-8">
            Join millions of Bangladeshis who believe in democracy, secularism, and the vision of a prosperous Bangladesh.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
          >
            Join Us Today <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
