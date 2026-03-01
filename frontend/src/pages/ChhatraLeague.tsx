import { Users, Star, BookOpen, Flag, Award, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const contributions = [
  {
    year: '1948',
    title: 'Founding',
    description: (
      <>
        Bangladesh Chhatra League was founded on 4 January 1948 by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bangabandhu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Sheikh Mujibur Rahman (Bangabandhu)
        </a>
        , then a student leader at the{' '}
        <a
          href="https://en.wikipedia.org/wiki/University_of_Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          University of Dhaka
        </a>
        , as the East Pakistan Muslim Students' League. It was established to champion the rights of Bengali students
        and the Bengali language.
      </>
    ),
    Icon: Star,
  },
  {
    year: '1952',
    title: 'Language Movement',
    description: (
      <>
        Chhatra League members were at the forefront of the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bengali_language_movement"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Bengali Language Movement
        </a>
        . On 21 February 1952, students defied Section 144 and marched in protest. Police opened fire, killing Abul
        Barkat, Rafiquddin Ahmed, and others — creating the Language Martyrs.
      </>
    ),
    Icon: BookOpen,
  },
  {
    year: '1966',
    title: 'Six-Point Movement',
    description: (
      <>
        The Chhatra League mobilized students across East Pakistan in support of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bangabandhu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Bangabandhu
        </a>{' '}
        Sheikh Mujibur Rahman's Six-Point Programme, demanding greater autonomy for East Pakistan. Student activism was
        crucial in building mass support for the movement.
      </>
    ),
    Icon: Flag,
  },
  {
    year: '1969',
    title: 'Mass Uprising',
    description: (
      <>
        Chhatra League led the student component of the 1969 mass uprising (Gono Obbhuthan) that forced the release of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bangabandhu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Bangabandhu
        </a>{' '}
        Sheikh Mujibur Rahman and the withdrawal of the Agartala Conspiracy Case. Students played a decisive role in
        toppling Ayub Khan's regime.
      </>
    ),
    Icon: Users,
  },
  {
    year: '1971',
    title: 'Liberation War',
    description: (
      <>
        Chhatra League members were among the first to take up arms in the Liberation War. They formed the core of the
        Mukti Bahini (freedom fighters) and the Mujib Bahini, fighting alongside the Bangladesh Army and Indian forces
        to achieve independence.
      </>
    ),
    Icon: Award,
  },
];

const leaders = [
  { name: 'Sheikh Mujibur Rahman', role: 'Founder (1948)', period: '1948' },
  { name: 'Tofail Ahmed', role: 'President', period: '1967–1969' },
  { name: 'Noor-e-Alam Siddiqui', role: 'President', period: '1969–1971' },
  { name: 'Sheikh Fazlul Haq Moni', role: 'Key Leader', period: '1960s' },
  { name: 'Sirajul Alam Khan', role: 'Key Leader', period: '1960s–70s' },
];

export default function ChhatraLeague() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/chhatra-league-banner.dim_1200x400.png"
            alt="Bangladesh Chhatra League"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'oklch(0.18 0.08 155 / 0.88)' }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.8)', color: 'white' }}
          >
            <Users size={12} /> Student Wing
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-4">
            Bangladesh<br />
            <span style={{ color: 'oklch(0.78 0.12 75)' }}>Chhatra League</span>
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Founded in 1948 by{' '}
            <a
              href="https://en.wikipedia.org/wiki/Bangabandhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
            >
              Sheikh Mujibur Rahman
            </a>
            , the Bangladesh Chhatra League is the student wing of the Awami League and one of the oldest student
            organizations in Bangladesh.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Founded', value: '4 January 1948' },
              { label: 'Founder', value: 'Sheikh Mujibur Rahman' },
              { label: 'Affiliation', value: 'Bangladesh Awami League' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl p-6 border bg-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.25)' }}
              >
                <div
                  className="text-xs font-sans font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'oklch(0.52 0.22 25)' }}
                >
                  {stat.label}
                </div>
                <div className="font-serif font-bold text-lg text-foreground">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-sans leading-relaxed text-lg">
              The Bangladesh Chhatra League (BCL) is the student wing of the Bangladesh Awami League. Originally founded
              as the East Pakistan Muslim Students' League on 4 January 1948, it was established by{' '}
              <a
                href="https://en.wikipedia.org/wiki/Bangabandhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                Bangabandhu Sheikh Mujibur Rahman
              </a>{' '}
              to organize Bengali students against the cultural and linguistic suppression of West Pakistan. The
              organization was closely tied to the{' '}
              <a
                href="https://en.wikipedia.org/wiki/University_of_Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                University of Dhaka
              </a>
              , which served as its intellectual and organizational hub.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mt-4">
              The history of the Chhatra League is, in many ways, the history of the Bengali people's struggle for
              identity, autonomy, and independence. From the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Bengali_language_movement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                Language Movement of 1952
              </a>{' '}
              to the Liberation War of 1971, Chhatra League members were at the vanguard of every major political
              movement that shaped Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Contributions */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Historical Contributions
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              From the Language Movement to the Liberation War — the Chhatra League's role in shaping Bangladesh.
            </p>
            <div className="section-divider mt-4 max-w-xs mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {contributions.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-6 bg-card rounded-2xl p-6 border shadow-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: index % 2 === 0 ? 'oklch(0.38 0.1 155 / 0.1)' : 'oklch(0.52 0.22 25 / 0.1)' }}
                  >
                    <item.Icon
                      size={22}
                      style={{ color: index % 2 === 0 ? 'oklch(0.38 0.1 155)' : 'oklch(0.52 0.22 25)' }}
                    />
                  </div>
                  <div
                    className="text-xs font-sans font-bold"
                    style={{ color: 'oklch(0.52 0.22 25)' }}
                  >
                    {item.year}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Leaders */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Notable Leaders
            </h2>
            <p className="text-muted-foreground font-sans">
              Key figures who shaped the Bangladesh Chhatra League
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-xl p-5 border bg-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.1)' }}
                >
                  <Users size={18} style={{ color: 'oklch(0.38 0.1 155)' }} />
                </div>
                <div className="font-serif font-bold text-base text-foreground">{leader.name}</div>
                <div className="text-muted-foreground text-xs font-sans mt-1">{leader.role}</div>
                <div
                  className="text-xs font-sans font-semibold mt-1"
                  style={{ color: 'oklch(0.52 0.22 25)' }}
                >
                  {leader.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Awami League */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl text-white mb-4">
                Connection to the Awami League
              </h2>
              <p className="text-white/75 font-sans leading-relaxed mb-4">
                The Bangladesh Chhatra League is the student wing of the Awami League, sharing the same ideological
                foundations: Bengali nationalism, democracy, secularism, and socialism.
              </p>
              <p className="text-white/75 font-sans leading-relaxed mb-6">
                Many of Bangladesh's most prominent political leaders began their careers in the Chhatra League before
                rising through the ranks of the Awami League. The student wing serves as a training ground for future
                party leadership.
              </p>
              <Link
                to="/history"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
              >
                Explore Full History <ChevronRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Shared Ideology', desc: 'Both organizations uphold the four pillars of Mujibism: nationalism, democracy, secularism, and socialism.' },
                { title: 'Leadership Pipeline', desc: 'Chhatra League serves as the primary training ground for future Awami League leaders at all levels.' },
                { title: 'Electoral Mobilization', desc: 'The student wing plays a crucial role in mobilizing youth voters and organizing grassroots campaigns.' },
                { title: 'Campus Presence', desc: 'Active in universities and colleges across Bangladesh, the Chhatra League maintains a strong presence in student politics.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4 border"
                  style={{ backgroundColor: 'oklch(0.32 0.09 155)', borderColor: 'oklch(0.78 0.12 75 / 0.2)' }}
                >
                  <div
                    className="font-sans font-semibold text-sm mb-1"
                    style={{ color: 'oklch(0.78 0.12 75)' }}
                  >
                    {item.title}
                  </div>
                  <div className="text-white/70 text-xs font-sans leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
