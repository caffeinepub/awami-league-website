import { Users, Star, BookOpen, Flag, Award, ChevronRight, Building2, UserCheck, Layers } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const BCL_FLAG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%9B%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A6%A4%E0%A6%BE%E0%A6%95%E0%A6%BE.svg/250px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%9B%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%B2%E0%A7%80%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A6%A4%E0%A6%BE%E0%A6%95%E0%A6%BE.svg.png';

const BCL_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Logo_of_Bangladesh_Chhatra_League.svg/250px-Logo_of_Bangladesh_Chhatra_League.svg.png';

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
        Chhatra League members were among the first to take up arms in the Liberation War. They formed the core of the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Mukti_Bahini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Mukti Bahini
        </a>{' '}
        (freedom fighters) and the Mujib Bahini, fighting alongside the Bangladesh Army and Indian forces
        to achieve independence.
      </>
    ),
    Icon: Award,
  },
];

const contemporaryHistory = [
  {
    year: '1975',
    title: 'Post-Liberation Challenges',
    description: (
      <>
        Following the assassination of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Sheikh_Mujibur_Rahman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Bangabandhu Sheikh Mujibur Rahman
        </a>{' '}
        on 15 August 1975, the BCL faced severe repression under successive military regimes. The organisation went
        underground but continued to resist authoritarian rule, preserving the democratic and secular values of its
        founding charter.
      </>
    ),
  },
  {
    year: '1980s',
    title: 'Anti-Ershad Democratic Movement',
    description: (
      <>
        The BCL played a pivotal role in the mass movement against the military dictatorship of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Hussain_Muhammad_Ershad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          General H. M. Ershad
        </a>
        . Student activists organised strikes, hartals, and campus protests throughout the decade, contributing to the
        broader democratic movement that ultimately forced Ershad's resignation in 1990.
      </>
    ),
  },
  {
    year: '1990',
    title: 'Restoration of Democracy',
    description: (
      <>
        The BCL was at the forefront of the 1990 mass uprising that ended military rule and restored parliamentary
        democracy in Bangladesh. The movement, led jointly by the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bangladesh_Awami_League"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Awami League
        </a>{' '}
        and other parties, saw BCL students as key street-level organisers who mobilised hundreds of thousands of
        demonstrators across the country.
      </>
    ),
  },
  {
    year: '1996–2001',
    title: 'First Hasina Government Era',
    description: (
      <>
        When{' '}
        <a
          href="https://en.wikipedia.org/wiki/Sheikh_Hasina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Sheikh Hasina
        </a>{' '}
        led the Awami League to victory in 1996, the BCL expanded its campus presence and organisational network
        significantly. The organisation focused on student welfare, educational reform advocacy, and strengthening
        its presence in universities and colleges across Bangladesh.
      </>
    ),
  },
  {
    year: '2009–2018',
    title: 'Expansion Under Awami League Government',
    description: (
      <>
        During the Awami League's consecutive terms in government from 2009 onwards, the BCL grew into one of the
        largest student organisations in Bangladesh. It championed the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Digital_Bangladesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Digital Bangladesh
        </a>{' '}
        vision among youth, organised national student conventions, and led campaigns on issues including education
        access, campus safety, and national development.
      </>
    ),
  },
  {
    year: '2020s',
    title: 'Contemporary Organisational Direction',
    description: (
      <>
        In recent years, the BCL has focused on youth empowerment, digital literacy campaigns, and student welfare
        initiatives aligned with the government's "Smart Bangladesh" vision for 2041. The organisation continues to
        operate through its national committee structure, with active units at universities, colleges, and educational
        institutions across all 64 districts of Bangladesh. Leadership transitions have been guided by the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bangladesh_Awami_League"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Bangladesh Awami League
        </a>{' '}
        central leadership.
      </>
    ),
  },
];

interface Leader {
  name: string;
  role: string;
  period: string;
  wikiUrl?: string;
}

const leaders: Leader[] = [
  { name: 'Sheikh Mujibur Rahman', role: 'Founder (1948)', period: '1948' },
  { name: 'Tofail Ahmed', role: 'President', period: '1967–1969' },
  { name: 'Noor-e-Alam Siddiqui', role: 'President', period: '1969–1971' },
  { name: 'Sheikh Fazlul Haq Moni', role: 'Key Leader', period: '1960s' },
  { name: 'Sirajul Alam Khan', role: 'Key Leader', period: '1960s–70s' },
  {
    name: 'Saddam Hussain',
    role: 'Prominent Leader',
    period: 'Contemporary',
    wikiUrl: 'https://en.wikipedia.org/wiki/Saddam_Hussain_(Chhatra_League)',
  },
];

const committeeStructure = [
  {
    level: 'Central Committee',
    description: 'The apex governing body of the BCL, responsible for national policy, organisational direction, and coordination with the parent Awami League.',
    positions: [
      { title: 'President', description: 'Chief executive of the organisation; chairs the central committee and represents BCL at the national level.' },
      { title: 'General Secretary', description: 'Manages day-to-day operations, correspondence, and implementation of central committee decisions.' },
      { title: 'Senior Vice-Presidents', description: 'Assist the President and deputise in their absence; oversee major functional portfolios.' },
      { title: 'Vice-Presidents', description: 'Responsible for specific regional or thematic portfolios within the national committee.' },
      { title: 'Joint General Secretaries', description: 'Support the General Secretary in administrative and organisational coordination.' },
      { title: 'Organising Secretaries', description: 'Responsible for expanding and strengthening BCL units at district and upazila levels.' },
      { title: 'Office Secretary', description: 'Manages the central office, records, and official communications.' },
      { title: 'Finance Secretary', description: 'Oversees the organisation\'s financial management and accounts.' },
      { title: 'Publicity & Publication Secretary', description: 'Handles media relations, publications, and public communications.' },
      { title: 'Cultural Secretary', description: 'Organises cultural programmes, national day observances, and student events.' },
    ],
    icon: Building2,
    color: 'oklch(0.38 0.1 155)',
  },
  {
    level: 'District Committees',
    description: 'Each of Bangladesh\'s 64 districts has a BCL district committee that coordinates activities across all educational institutions within the district.',
    positions: [
      { title: 'District President', description: 'Leads the district committee and liaises with the central committee.' },
      { title: 'District General Secretary', description: 'Manages district-level operations and coordinates with upazila units.' },
      { title: 'District Vice-Presidents', description: 'Support district leadership and oversee specific sub-districts.' },
      { title: 'District Organising Secretaries', description: 'Responsible for expanding BCL presence in colleges and schools within the district.' },
    ],
    icon: Layers,
    color: 'oklch(0.52 0.22 25)',
  },
  {
    level: 'Upazila & College Committees',
    description: 'At the grassroots level, BCL operates through upazila (sub-district) committees and individual college/university unit committees across Bangladesh.',
    positions: [
      { title: 'Upazila President', description: 'Leads BCL activities at the sub-district level.' },
      { title: 'Upazila General Secretary', description: 'Coordinates with college units and district committee.' },
      { title: 'College/University Unit President', description: 'Leads BCL activities within a specific educational institution.' },
      { title: 'College/University Unit General Secretary', description: 'Manages day-to-day activities of the institutional unit.' },
    ],
    icon: UserCheck,
    color: 'oklch(0.45 0.14 155)',
  },
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

      {/* Visual Identity Section */}
      <section className="py-14" style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-2">
              Visual Identity
            </h2>
            <p className="text-muted-foreground font-sans text-sm">
              Official flag and logo of Bangladesh Chhatra League
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Flag */}
            <div
              className="flex flex-col items-center rounded-2xl border bg-card p-6 hover:shadow-card transition-all duration-200"
              style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
            >
              <div className="flex items-center justify-center h-44 w-full mb-4">
                <img
                  src={BCL_FLAG_URL}
                  alt="Flag of Bangladesh Chhatra League"
                  className="max-h-40 max-w-full object-contain drop-shadow-md"
                />
              </div>
              <p className="font-sans font-semibold text-sm text-foreground text-center mb-1">
                Flag of Bangladesh Chhatra League
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

            {/* Logo / Badge */}
            <div
              className="flex flex-col items-center rounded-2xl border bg-card p-6 hover:shadow-card transition-all duration-200"
              style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
            >
              <div className="flex items-center justify-center h-44 w-full mb-4">
                <img
                  src={BCL_LOGO_URL}
                  alt="Logo of Bangladesh Chhatra League"
                  className="max-h-40 max-w-full object-contain drop-shadow-md"
                />
              </div>
              <p className="font-sans font-semibold text-sm text-foreground text-center mb-1">
                Logo of Bangladesh Chhatra League
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
          </div>
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
        style={{ backgroundColor: 'oklch(0.96 0.005 155)' }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Historical Contributions
            </h2>
            <p className="text-muted-foreground font-sans">
              From the Language Movement to Liberation — the BCL's defining moments
            </p>
          </div>

          <div className="space-y-8">
            {contributions.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                {/* Year badge */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-serif font-black text-sm text-white shadow-md"
                    style={{ backgroundColor: 'oklch(0.38 0.1 155)' }}
                  >
                    {item.year}
                  </div>
                  {idx < contributions.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-2"
                      style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.25)' }}
                    />
                  )}
                </div>
                {/* Content */}
                <div
                  className="flex-1 rounded-2xl border bg-card p-6 mb-2"
                  style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <item.Icon size={18} style={{ color: 'oklch(0.52 0.22 25)' }} />
                    <h3 className="font-serif font-bold text-lg text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contemporary History */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'oklch(0.52 0.22 25 / 0.1)',
                color: 'oklch(0.52 0.22 25)',
                border: '1px solid oklch(0.52 0.22 25 / 0.25)',
              }}
            >
              Post-Independence Era
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Contemporary History
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              The BCL's journey from the post-liberation period through the democratic movements of the 1980s–90s to the present day.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Source:{' '}
              <a
                href="https://en.wikipedia.org/wiki/Bangladesh_Chhatra_League"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 underline underline-offset-2 transition-colors"
              >
                Wikipedia — Bangladesh Chhatra League
              </a>
            </p>
          </div>

          <div className="space-y-8">
            {contemporaryHistory.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                {/* Year badge */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-serif font-black text-xs text-white shadow-md text-center leading-tight px-1"
                    style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
                  >
                    {item.year}
                  </div>
                  {idx < contemporaryHistory.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-2"
                      style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.2)' }}
                    />
                  )}
                </div>
                {/* Content */}
                <div
                  className="flex-1 rounded-2xl border bg-card p-6 mb-2"
                  style={{ borderColor: 'oklch(0.52 0.22 25 / 0.18)' }}
                >
                  <h3 className="font-serif font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standing Committees */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.005 155)' }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'oklch(0.38 0.1 155 / 0.1)',
                color: 'oklch(0.38 0.1 155)',
                border: '1px solid oklch(0.38 0.1 155 / 0.25)',
              }}
            >
              <Building2 size={12} />
              Governance Structure
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Standing Committees
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              The Bangladesh Chhatra League operates through a hierarchical committee structure spanning national, district, and upazila levels — ensuring organised representation across all educational institutions in Bangladesh.
            </p>
          </div>

          <div className="space-y-10">
            {committeeStructure.map((committee, cIdx) => {
              const Icon = committee.icon;
              return (
                <div
                  key={cIdx}
                  className="rounded-2xl border bg-card overflow-hidden"
                  style={{ borderColor: `${committee.color.replace(')', ' / 0.25)')}` }}
                >
                  {/* Committee Header */}
                  <div
                    className="px-6 py-5 flex items-center gap-4"
                    style={{ backgroundColor: `${committee.color.replace(')', ' / 0.08)')}` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${committee.color.replace(')', ' / 0.15)')}` }}
                    >
                      <Icon size={22} style={{ color: committee.color }} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-foreground">{committee.level}</h3>
                      <p className="text-muted-foreground font-sans text-sm mt-0.5">{committee.description}</p>
                    </div>
                  </div>

                  {/* Positions Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ backgroundColor: `${committee.color.replace(')', ' / 0.05)')}` }}>
                          <th
                            className="text-left px-6 py-3 text-xs font-sans font-semibold uppercase tracking-widest"
                            style={{ color: committee.color }}
                          >
                            Position
                          </th>
                          <th
                            className="text-left px-6 py-3 text-xs font-sans font-semibold uppercase tracking-widest"
                            style={{ color: committee.color }}
                          >
                            Responsibilities
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {committee.positions.map((pos, pIdx) => (
                          <tr
                            key={pIdx}
                            className="border-t transition-colors hover:bg-muted/30"
                            style={{ borderColor: `${committee.color.replace(')', ' / 0.1)')}` }}
                          >
                            <td className="px-6 py-4 font-sans font-semibold text-sm text-foreground whitespace-nowrap align-top w-56">
                              {pos.title}
                            </td>
                            <td className="px-6 py-4 text-muted-foreground font-sans text-sm leading-relaxed">
                              {pos.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Committee Note */}
          <div
            className="mt-8 rounded-xl p-5 border"
            style={{
              backgroundColor: 'oklch(0.65 0.18 85 / 0.06)',
              borderColor: 'oklch(0.65 0.18 85 / 0.25)',
            }}
          >
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Note:</span> Committee compositions are periodically renewed through organisational conferences convened by the central leadership. The BCL central committee works in close coordination with the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Bangladesh_Awami_League"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 underline underline-offset-2 transition-colors"
              >
                Bangladesh Awami League
              </a>{' '}
              and follows the organisational guidelines set by the parent party. For the most current committee membership, refer to the{' '}
              <a
                href="https://www.albd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 underline underline-offset-2 transition-colors"
              >
                official Awami League website
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Notable Leaders */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Notable Leaders
            </h2>
            <p className="text-muted-foreground font-sans">
              Key figures who shaped the Bangladesh Chhatra League
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border bg-card p-6 hover:shadow-card transition-all duration-200"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.1)' }}
                >
                  <Users size={20} style={{ color: 'oklch(0.38 0.1 155)' }} />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-1">
                  {leader.wikiUrl ? (
                    <a
                      href={leader.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-500 underline underline-offset-2 transition-colors"
                    >
                      {leader.name}
                    </a>
                  ) : (
                    leader.name
                  )}
                </h3>
                <p
                  className="text-xs font-sans font-semibold uppercase tracking-widest mb-1"
                  style={{ color: 'oklch(0.52 0.22 25)' }}
                >
                  {leader.role}
                </p>
                <p className="text-muted-foreground text-sm font-sans">{leader.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Learn More About the Awami League
          </h2>
          <p className="text-primary-foreground/70 font-sans max-w-xl mx-auto mb-8">
            Explore the parent party's history, ideology, and organisation to understand the full scope of Bangladesh's
            political landscape.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/history"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
            >
              Explore History <ChevronRight size={16} />
            </Link>
            <a
              href="https://en.wikipedia.org/wiki/Bangladesh_Chhatra_League"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'transparent',
                color: 'oklch(0.78 0.12 75)',
                border: '1px solid oklch(0.78 0.12 75 / 0.5)',
              }}
            >
              BCL on Wikipedia ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
