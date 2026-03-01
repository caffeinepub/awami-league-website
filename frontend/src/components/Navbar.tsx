import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, LogIn, LogOut, User, Shield } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'History', path: '/history' },
  { label: 'Ideology & Policies', path: '/ideology' },
  { label: 'Organisation', path: '/organisation' },
  { label: 'Chhatra League', path: '/chhatra-league' },
  { label: 'Join Us', path: '/contact' },
  { label: 'Members Area', path: '/members' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: any) {
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  const principalShort = identity
    ? identity.getPrincipal().toString().slice(0, 8) + '…'
    : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-dark shadow-hero py-2'
            : 'bg-primary-dark/95 py-3'
        }`}
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-gold flex-shrink-0">
              <img
                src="/assets/generated/party-emblem.dim_256x256.png"
                alt="Awami League Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-primary-foreground font-serif font-bold text-lg leading-tight group-hover:text-accent-gold transition-colors">
                Awami League
              </div>
              <div className="text-primary-foreground/60 text-xs font-sans tracking-wider">
                Bangladesh · Est. 1949
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              const isMembersLink = link.path === '/members';
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded text-sm font-sans font-medium transition-all duration-200 ${
                    isMembersLink
                      ? isActive
                        ? 'text-accent-gold bg-white/10 border border-accent-gold/40'
                        : 'text-accent-gold/80 hover:text-accent-gold hover:bg-white/10 border border-accent-gold/20'
                      : isActive
                        ? 'text-accent-gold bg-white/10'
                        : 'text-primary-foreground/80 hover:text-accent-gold hover:bg-white/10'
                  }`}
                >
                  {isMembersLink && <Shield size={13} className="inline mr-1 mb-0.5" />}
                  {link.label}
                </Link>
              );
            })}

            {/* Auth button */}
            {isAuthenticated ? (
              <div className="ml-2 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 text-primary-foreground/80 text-xs font-mono">
                  <User size={12} />
                  <span>{principalShort}</span>
                </div>
                <button
                  onClick={handleAuth}
                  disabled={isLoggingIn}
                  className="flex items-center gap-1.5 px-3 py-2 rounded text-sm font-sans font-semibold transition-colors disabled:opacity-50"
                  style={{ backgroundColor: 'oklch(0.52 0.22 25)', color: 'white' }}
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuth}
                disabled={isLoggingIn}
                className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded text-sm font-sans font-semibold transition-colors disabled:opacity-50"
                style={{ backgroundColor: 'oklch(0.45 0.14 155)', color: 'white', border: '1px solid oklch(0.65 0.18 85)' }}
              >
                <LogIn size={14} />
                {isLoggingIn ? 'Logging in…' : 'Member Login'}
              </button>
            )}

            <a
              href="https://www.albd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded text-sm font-sans font-semibold transition-colors"
              style={{ backgroundColor: 'oklch(0.52 0.22 25)', color: 'white' }}
            >
              Official Site ↗
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded text-primary-foreground hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 shadow-hero transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'oklch(0.22 0.09 155)' }}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-accent-gold">
              <img
                src="/assets/generated/party-emblem.dim_256x256.png"
                alt="Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primary-foreground font-serif font-bold">Awami League</span>
          </div>
          <button
            className="p-2 rounded text-primary-foreground hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            const isMembersLink = link.path === '/members';
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all duration-200 ${
                  isMembersLink
                    ? isActive
                      ? 'text-accent-gold bg-white/15 font-semibold border border-accent-gold/30'
                      : 'text-accent-gold/80 hover:text-accent-gold hover:bg-white/10 border border-accent-gold/15'
                    : isActive
                      ? 'text-accent-gold bg-white/15 font-semibold'
                      : 'text-primary-foreground/80 hover:text-accent-gold hover:bg-white/10'
                }`}
              >
                {isMembersLink && <Shield size={13} className="inline mr-1.5 mb-0.5" />}
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Auth Section */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-primary-foreground/70 text-xs font-mono">
                  <User size={12} />
                  <span>{principalShort}</span>
                </div>
                <button
                  onClick={handleAuth}
                  disabled={isLoggingIn}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-sans font-semibold transition-colors disabled:opacity-50"
                  style={{ backgroundColor: 'oklch(0.52 0.22 25)', color: 'white' }}
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleAuth}
                disabled={isLoggingIn}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-sans font-semibold transition-colors disabled:opacity-50"
                style={{ backgroundColor: 'oklch(0.45 0.14 155)', color: 'white', border: '1px solid oklch(0.65 0.18 85)' }}
              >
                <LogIn size={14} />
                {isLoggingIn ? 'Logging in…' : 'Member Login'}
              </button>
            )}
            <a
              href="https://www.albd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-lg text-sm font-sans font-semibold text-center transition-colors"
              style={{ backgroundColor: 'oklch(0.52 0.22 25)', color: 'white' }}
            >
              Official Website ↗
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
