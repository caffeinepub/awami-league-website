import { Link } from '@tanstack/react-router';
import { Heart, ExternalLink } from 'lucide-react';
import { SiFacebook, SiX, SiYoutube } from 'react-icons/si';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'History', path: '/history' },
  { label: 'Ideology & Policies', path: '/ideology' },
  { label: 'Organisation', path: '/organisation' },
  { label: 'Chhatra League', path: '/chhatra-league' },
  { label: 'News', path: '/news' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

const AL_BADGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9C.svg/250px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%86%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%E0%A7%80_%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9C.svg.png';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'awami-league-website');

  return (
    <footer style={{ backgroundColor: 'oklch(0.18 0.08 155)' }} className="text-primary-foreground">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold">
                <img
                  src={AL_BADGE_URL}
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

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-primary-foreground/50 text-xs font-sans uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/awamileague.1949/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.3)', color: 'oklch(0.75 0.08 240)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.45 0.15 240 / 0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.38 0.1 155 / 0.3)'; }}
                >
                  <SiFacebook size={15} />
                </a>
                <a
                  href="https://twitter.com/albd1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.3)', color: 'oklch(0.88 0.01 0)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.45 0.01 0 / 0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.38 0.1 155 / 0.3)'; }}
                >
                  <SiX size={14} />
                </a>
                <a
                  href="https://www.youtube.com/user/myalbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.3)', color: 'oklch(0.62 0.22 25)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.45 0.22 25 / 0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(0.38 0.1 155 / 0.3)'; }}
                >
                  <SiYoutube size={16} />
                </a>
              </div>
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
              <li>
                <a
                  href="https://www.albd.org/join-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  Join Us ↗
                </a>
              </li>
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
                  href="https://www.albd.org/category/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> albd.org — Latest News
                </a>
              </li>
              <li>
                <a
                  href="https://www.albd.org/publications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> albd.org — Publications
                </a>
              </li>
              <li>
                <a
                  href="https://manifesto.albd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Election Manifesto
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Bangladesh_Awami_League"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Wikipedia — Awami League
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

          {/* Connect Column */}
          <div>
            <h4 className="font-serif font-semibold text-accent-gold mb-4 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.albd.org/join-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Join the Party
                </a>
              </li>
              <li>
                <a
                  href="https://www.albd.org/pages/contact-en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} /> Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/awamileague.1949/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <SiFacebook size={11} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/albd1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <SiX size={11} /> X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/myalbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent-gold text-sm font-sans transition-colors flex items-center gap-1"
                >
                  <SiYoutube size={11} /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs font-sans">
            © {year} Bangladesh Awami League. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs font-sans flex items-center gap-1">
            Built with <Heart size={11} className="text-secondary fill-secondary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:text-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
