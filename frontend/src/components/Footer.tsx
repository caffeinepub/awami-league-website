import { Link } from '@tanstack/react-router';
import { Heart, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'History', path: '/history' },
  { label: 'Ideology & Policies', path: '/ideology' },
  { label: 'Organisation', path: '/organisation' },
  { label: 'Chhatra League', path: '/chhatra-league' },
  { label: 'Join Us', path: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'awami-league-website');

  return (
    <footer style={{ backgroundColor: 'oklch(0.18 0.08 155)' }} className="text-primary-foreground">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold">
                <img
                  src="/assets/generated/party-emblem.dim_256x256.png"
                  alt="Awami League Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-primary-foreground">Awami League</div>
                <div className="text-primary-foreground/50 text-xs font-sans">Bangladesh · Est. 1949</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm font-sans leading-relaxed">
              The oldest political party in Bangladesh, championing democracy, secularism, Bengali nationalism, and social justice since 1949.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.albd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-sans text-accent-gold hover:text-accent transition-colors"
              >
                <ExternalLink size={12} />
                Official Website
              </a>
              <span className="text-primary-foreground/30">|</span>
              <a
                href="https://en.wikipedia.org/wiki/Awami_League"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-sans text-accent-gold hover:text-accent transition-colors"
              >
                <ExternalLink size={12} />
                Wikipedia
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-serif font-semibold text-accent-gold mb-4 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* References Column */}
          <div>
            <h4 className="font-serif font-semibold text-accent-gold mb-4 text-sm uppercase tracking-widest">
              References
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.albd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> albd.org — Official Site
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Awami_League"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Wikipedia — Awami League
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/History_of_Awami_League"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Wikipedia — History
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Bangladesh_Chhatra_League"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Wikipedia — Chhatra League
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/40 text-xs font-sans">
            © {year} Awami League. Informational website. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs font-sans flex items-center gap-1">
            Built with <Heart size={12} className="text-secondary-light fill-current" style={{ color: 'oklch(0.65 0.18 25)' }} /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
