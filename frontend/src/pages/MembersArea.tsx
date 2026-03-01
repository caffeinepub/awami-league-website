import { useState } from 'react';
import { LogIn, Loader2, User, Bell, BookOpen, Users, Star, Calendar, FileText, Shield, CheckCircle } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { useMyProfile, useRegisterMember } from '../hooks/useQueries';

// ── Login Prompt ──────────────────────────────────────────────────────────────
function LoginPrompt({ onLogin, isLoggingIn }: { onLogin: () => void; isLoggingIn: boolean }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-accent-gold"
          style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
          <Shield size={36} className="text-accent-gold" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-3">Members Area</h1>
        <p className="text-muted-foreground font-sans mb-2">
          This area is exclusively for registered members of the Awami League.
        </p>
        <p className="text-muted-foreground/70 font-sans text-sm mb-8">
          Please log in with your Internet Identity to access member resources, announcements, and the member directory.
        </p>
        <button
          onClick={onLogin}
          disabled={isLoggingIn}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all disabled:opacity-60"
          style={{ backgroundColor: 'oklch(0.45 0.14 155)' }}
        >
          {isLoggingIn ? (
            <><Loader2 size={18} className="animate-spin" /> Logging in…</>
          ) : (
            <><LogIn size={18} /> Login with Internet Identity</>
          )}
        </button>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: Bell, label: 'Announcements' },
            { icon: BookOpen, label: 'Resources' },
            { icon: Users, label: 'Directory' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="p-4 rounded-xl border border-border/50 bg-muted/30">
              <Icon size={22} className="mx-auto mb-2 text-primary/40" />
              <span className="text-xs font-sans text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Registration Form ─────────────────────────────────────────────────────────
function RegistrationForm({ principalShort }: { principalShort: string }) {
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const registerMember = useRegisterMember();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = displayName.trim();
    if (trimmed.length < 3 || trimmed.length > 15) {
      setError('Display name must be between 3 and 15 characters.');
      return;
    }
    setError('');
    try {
      await registerMember.mutateAsync(trimmed);
    } catch (err: any) {
      setError(err?.message ?? 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="rounded-2xl border border-border shadow-card p-8 bg-card">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
              <User size={28} className="text-accent-gold" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-1">Complete Registration</h2>
            <p className="text-muted-foreground text-sm font-sans">
              You're logged in as <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{principalShort}</span>
            </p>
            <p className="text-muted-foreground text-sm font-sans mt-2">
              Choose a display name to complete your membership registration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="displayName" className="block text-sm font-sans font-medium text-foreground mb-1.5">
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => { setDisplayName(e.target.value); setError(''); }}
                placeholder="e.g. Rahman Ali"
                minLength={3}
                maxLength={15}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                disabled={registerMember.isPending}
              />
              <p className="text-xs text-muted-foreground mt-1">3–15 characters</p>
            </div>

            {error && (
              <p className="text-sm text-destructive font-sans">{error}</p>
            )}

            <button
              type="submit"
              disabled={registerMember.isPending || displayName.trim().length < 3}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-sans font-semibold text-white transition-all disabled:opacity-60"
              style={{ backgroundColor: 'oklch(0.45 0.14 155)' }}
            >
              {registerMember.isPending ? (
                <><Loader2 size={16} className="animate-spin" /> Registering…</>
              ) : (
                <><CheckCircle size={16} /> Complete Registration</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Members Dashboard ─────────────────────────────────────────────────────────
const announcements = [
  {
    id: 1,
    title: 'Annual General Meeting – March 2026',
    date: 'March 15, 2026',
    category: 'Event',
    content:
      'The Annual General Meeting will be held at the Central Office, Bangabandhu Avenue, Dhaka. All registered members are requested to attend. Agenda includes review of party activities and election of new committee members.',
  },
  {
    id: 2,
    title: 'Membership Renewal Drive',
    date: 'February 28, 2026',
    category: 'Notice',
    content:
      'The annual membership renewal drive is now open. Members are requested to update their information and renew their membership cards at the nearest district office before April 30, 2026.',
  },
  {
    id: 3,
    title: 'Volunteer Programme for Development Projects',
    date: 'February 20, 2026',
    category: 'Opportunity',
    content:
      'The party is seeking dedicated volunteers for upcoming community development projects across all divisions. Interested members should register through the party portal or contact their local unit.',
  },
];

const resources = [
  { icon: FileText, title: 'Party Constitution', desc: 'Full text of the Awami League constitution and by-laws.', tag: 'Document' },
  { icon: BookOpen, title: 'Manifesto 2024', desc: 'The complete election manifesto and policy commitments.', tag: 'Policy' },
  { icon: Star, title: 'Mujibism: A Study Guide', desc: 'Educational material on the four pillars of Mujibism.', tag: 'Education' },
  { icon: Calendar, title: 'Party Calendar 2026', desc: 'Schedule of events, commemorations, and key dates.', tag: 'Calendar' },
];

function MembersDashboard({ displayName }: { displayName: string }) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, oklch(0.22 0.09 155) 0%, oklch(0.30 0.10 155) 100%)' }}
      >
        <div className="container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold mb-4 border border-accent-gold/40"
            style={{ backgroundColor: 'oklch(0.28 0.09 155)', color: 'oklch(0.85 0.18 85)' }}>
            <Shield size={12} />
            Members Area
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            Welcome, <span style={{ color: 'oklch(0.85 0.18 85)' }}>{displayName}</span>
          </h1>
          <p className="text-white/70 font-sans text-lg">
            Thank you for your commitment to the Awami League. Access your exclusive member resources below.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-14">

        {/* Announcements */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
              <Bell size={20} className="text-accent-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">Announcements</h2>
              <p className="text-muted-foreground text-sm font-sans">Latest news and notices for members</p>
            </div>
          </div>
          <div className="space-y-4">
            {announcements.map((item) => (
              <article key={item.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-card transition-shadow">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-xs font-sans font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: 'oklch(0.25 0.09 155)', color: 'oklch(0.85 0.18 85)' }}>
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-sans">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Member Resources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
              <BookOpen size={20} className="text-accent-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">Member Resources</h2>
              <p className="text-muted-foreground text-sm font-sans">Documents, guides, and materials for members</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((res) => (
              <div key={res.title} className="rounded-xl border border-border bg-card p-5 flex gap-4 hover:shadow-card transition-shadow cursor-pointer group">
                <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
                  <res.icon size={20} className="text-accent-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-sans font-semibold text-foreground text-sm">{res.title}</h3>
                    <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">{res.tag}</span>
                  </div>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed">{res.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Member Directory */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
              <Users size={20} className="text-accent-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">Member Directory</h2>
              <p className="text-muted-foreground text-sm font-sans">Connect with fellow Awami League members</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
              <Users size={28} className="text-accent-gold/60" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Directory Coming Soon</h3>
            <p className="text-muted-foreground font-sans text-sm max-w-sm mx-auto">
              The member directory is currently being compiled. Once available, registered members will be able to connect with fellow members across all divisions and districts.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium border border-border text-muted-foreground">
              <CheckCircle size={13} />
              You are registered as <strong className="text-foreground ml-1">{displayName}</strong>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// ── Main Page Component ───────────────────────────────────────────────────────
export default function MembersArea() {
  // All hooks called at the top level of the component
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const { data: profile, isLoading: profileLoading, isFetched } = useMyProfile();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      if (error.message === 'User is already authenticated') {
        await clear();
        queryClient.clear();
        setTimeout(() => login(), 300);
      }
    }
  };

  const principalShort = identity
    ? identity.getPrincipal().toString().slice(0, 12) + '…'
    : '';

  // Not logged in
  if (!isAuthenticated) {
    return <LoginPrompt onLogin={handleLogin} isLoggingIn={isLoggingIn} />;
  }

  // Loading profile
  if (profileLoading || !isFetched) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={36} className="animate-spin text-primary mx-auto mb-3" />
          <p className="text-muted-foreground font-sans text-sm">Loading your profile…</p>
        </div>
      </div>
    );
  }

  // Authenticated but not registered
  if (!profile) {
    return <RegistrationForm principalShort={principalShort} />;
  }

  // Registered member
  return <MembersDashboard displayName={profile.displayName} />;
}
