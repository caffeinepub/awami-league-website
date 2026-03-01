import { Building2, Users, MapPin, Network, Crown, Landmark, Star } from 'lucide-react';
import OrgChart from '../components/OrgChart';

const orgData = {
  title: 'Party President',
  description: 'Sheikh Hasina',
  children: [
    {
      title: 'General Secretary',
      description: 'Obaidul Quader',
      children: [
        {
          title: 'Central Working Committee',
          children: [
            { title: 'National Council' },
            { title: 'Executive Committee' },
            { title: 'Advisory Council' },
          ],
        },
      ],
    },
  ],
};

const structureLevels = [
  {
    level: 'National Level',
    Icon: Building2,
    description: 'The National Council is the supreme body of the party, meeting every three years. The Central Working Committee handles day-to-day affairs, while the Executive Committee implements decisions.',
    color: 'oklch(0.38 0.1 155)',
  },
  {
    level: 'Divisional Level',
    Icon: Network,
    description: 'Eight divisional committees coordinate party activities across Bangladesh\'s administrative divisions: Dhaka, Chittagong, Rajshahi, Khulna, Barisal, Sylhet, Rangpur, and Mymensingh.',
    color: 'oklch(0.52 0.22 25)',
  },
  {
    level: 'District Level',
    Icon: MapPin,
    description: 'Sixty-four district committees manage party operations at the district level, overseeing upazila and union-level units. District committees play a crucial role in electoral mobilization.',
    color: 'oklch(0.65 0.1 75)',
  },
  {
    level: 'Grassroots Level',
    Icon: Users,
    description: 'Upazila, union, ward, and village-level committees form the backbone of the party\'s organizational strength. These units maintain direct contact with the electorate and implement party programs.',
    color: 'oklch(0.45 0.1 185)',
  },
];

const partyWings = [
  { type: 'Student wing', officialName: 'Bangladesh Chhatra League', commonTerm: 'Chhatra League' },
  { type: 'Youth wing', officialName: 'Bangladesh Awami Jubo League', commonTerm: 'Jubo League' },
  { type: "Women's wing", officialName: 'Bangladesh Mohila Awami League', commonTerm: 'Mohila League' },
  { type: 'Farmer wing', officialName: 'Bangladesh Krishak League', commonTerm: 'Krishak League' },
  { type: 'Trade union wing', officialName: 'Bangladesh Jatiya Sramik League', commonTerm: 'Jatiya Sramik League' },
  { type: 'Volunteer wing', officialName: 'Bangladesh Awami Swechasebak League', commonTerm: 'Swechasebak League' },
  { type: 'Female youth wing', officialName: 'Bangladesh Jubo Mohila League', commonTerm: 'Jubo Mohila League' },
  { type: 'Fisherman wing', officialName: 'Bangladesh Awami Matsyajeebi League', commonTerm: 'Matsyajeebi League' },
];

const wikiLink = (href: string, text: string) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
  >
    {text}
  </a>
);

const partyPresidents = [
  {
    name: 'Abdul Hamid Khan Bhashani',
    wikiUrl: 'https://en.wikipedia.org/wiki/Maulana_Abdul_Hamid_Khan_Bhashani',
    ncElected: '1949, 53, 55',
    inOffice: '23 June 1949 – 27 July 1956',
    generalSecretary: 'Shamsul Huq, Sheikh Mujibur Rahman',
    note: '',
  },
  {
    name: 'Huseyn Shaheed Suhrawardy',
    wikiUrl: 'https://en.wikipedia.org/wiki/Huseyn_Shaheed_Suhrawardy',
    ncElected: '(acting)',
    inOffice: '27 July 1956 – 10 October 1957',
    generalSecretary: 'Sheikh Mujibur Rahman',
    note: '',
  },
  {
    name: 'Abdur Rashid Tarkabagish',
    wikiUrl: 'https://en.wikipedia.org/wiki/Abdur_Rashid_Tarkabagish',
    ncElected: '1957, 64',
    inOffice: '10 October 1957 – 25 January 1966',
    generalSecretary: '—',
    note: '',
  },
  {
    name: 'Sheikh Mujibur Rahman',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bangabandhu',
    ncElected: '1966, 70, 72',
    inOffice: '25 January 1966 – 18 January 1974',
    generalSecretary: 'Tajuddin Ahmad, Zillur Rahman',
    note: '',
  },
  {
    name: 'Muhammad Qamaruzzaman',
    wikiUrl: 'https://en.wikipedia.org/wiki/A._H._M._Qamaruzzaman',
    ncElected: '1974',
    inOffice: '18 January 1974 – 24 February 1975',
    generalSecretary: 'Zillur Rahman',
    note: '',
  },
  {
    name: 'Dissolution (BAKSAL)',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bangladesh_Krishak_Sramik_Awami_League',
    ncElected: '—',
    inOffice: '24 February 1975 – 4 April 1977',
    generalSecretary: '—',
    note: 'BAKSAL period',
  },
  {
    name: 'Syeda Zohra Tajuddin',
    wikiUrl: 'https://en.wikipedia.org/wiki/Syeda_Zohra_Tajuddin',
    ncElected: 'Special Council: 1977',
    inOffice: '4 April 1977 – 16 February 1978',
    generalSecretary: '—',
    note: 'Convenor',
  },
  {
    name: 'Abdul Malek Ukil',
    wikiUrl: 'https://en.wikipedia.org/wiki/Abdul_Malek_Ukil',
    ncElected: '1978',
    inOffice: '16 February 1978 – 16 February 1981',
    generalSecretary: 'Abdur Razzaq',
    note: '',
  },
  {
    name: 'Sheikh Hasina',
    wikiUrl: 'https://en.wikipedia.org/wiki/Sheikh_Hasina',
    ncElected: '1981, 87, 92, 97, 02, 09, 12, 16, 19, 22',
    inOffice: '16 February 1981 – present',
    generalSecretary: 'Abdur Razzaq, Syeda Sajeda Chowdhury, Zillur Rahman, Abdul Jalil, Sayed Ashraful Islam, Obaidul Quader',
    note: '',
  },
];

const primeMinisters = [
  {
    name: 'Tajuddin Ahmad',
    wikiUrl: 'https://en.wikipedia.org/wiki/Tajuddin_Ahmed',
    term: '1971–1972',
  },
  {
    name: 'Sheikh Mujibur Rahman',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bangabandhu',
    term: '1972–1975',
  },
  {
    name: 'Muhammad Mansur Ali',
    wikiUrl: 'https://en.wikipedia.org/wiki/Muhammad_Mansur_Ali',
    term: '1975',
  },
  {
    name: 'Sheikh Hasina',
    wikiUrl: 'https://en.wikipedia.org/wiki/Sheikh_Hasina',
    term: '1996–2001; 2009–2024',
  },
];

const presidents = [
  { name: 'Sheikh Mujibur Rahman', wikiUrl: 'https://en.wikipedia.org/wiki/Bangabandhu', term: '1971–1972', note: '' },
  { name: 'Abu Sayeed Chowdhury', wikiUrl: 'https://en.wikipedia.org/wiki/Abu_Sayeed_Chowdhury', term: '1972–1973', note: '' },
  { name: 'Mohammad Mohammadullah', wikiUrl: 'https://en.wikipedia.org/wiki/Mohammad_Mohammadullah', term: '1974–1975', note: '' },
  { name: 'Sheikh Mujibur Rahman', wikiUrl: 'https://en.wikipedia.org/wiki/Bangabandhu', term: '1975', note: 'Assassinated' },
  { name: 'Khondaker Mostaq Ahmad', wikiUrl: 'https://en.wikipedia.org/wiki/Khondaker_Mostaq_Ahmad', term: '1975', note: 'Deposed' },
  { name: 'Abu Sadat Mohammad Sayem', wikiUrl: 'https://en.wikipedia.org/wiki/Abu_Sadat_Mohammad_Sayem', term: '1975–1977', note: '' },
  { name: 'Zillur Rahman', wikiUrl: 'https://en.wikipedia.org/wiki/Zillur_Rahman', term: '2009–2013', note: '' },
  { name: 'Mohammad Abdul Hamid', wikiUrl: 'https://en.wikipedia.org/wiki/Abdul_Hamid_(politician)', term: '2013–2023', note: '' },
  { name: 'Mohammed Shahabuddin', wikiUrl: 'https://en.wikipedia.org/wiki/Mohammed_Shahabuddin', term: '2023–Present', note: '' },
];

export default function Organisation() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: 'oklch(0.22 0.09 155)' }}
      >
        <div className="container mx-auto px-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.8)', color: 'white' }}
          >
            <Building2 size={12} /> Party Structure
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-4">
            Organisation &<br />
            <span style={{ color: 'oklch(0.78 0.12 75)' }}>Structure</span>
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            The Awami League is organized from the national level down to the village level, with a robust democratic internal structure and a network of affiliated organizations.
          </p>
        </div>
      </section>

      {/* Org Chart */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Leadership Hierarchy
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              The party's central leadership structure, headed by the President and General Secretary.
            </p>
            <div className="section-divider mt-4 max-w-xs mx-auto" />
          </div>
          <OrgChart data={orgData} />
        </div>
      </section>

      {/* Party Presidents & General Secretaries */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.12)', color: 'oklch(0.28 0.1 155)' }}
            >
              <Crown size={12} /> Party Leadership
            </div>
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Party Presidents &amp; General Secretaries
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm">
              A complete record of Awami League presidents and general secretaries from the party's founding in 1949 to the present.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: 'oklch(0.28 0.1 155)', color: 'white' }}>
                  <th className="text-left px-4 py-3 font-semibold">President</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">NC Elected</th>
                  <th className="text-left px-4 py-3 font-semibold">In Office</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">General Secretary</th>
                </tr>
              </thead>
              <tbody>
                {partyPresidents.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t transition-colors"
                    style={{
                      borderColor: 'oklch(0.38 0.1 155 / 0.1)',
                      backgroundColor: row.note === 'BAKSAL period'
                        ? 'oklch(0.52 0.22 25 / 0.08)'
                        : i % 2 === 0 ? 'white' : 'oklch(0.97 0.005 90)',
                    }}
                  >
                    <td className="px-4 py-3">
                      {row.note === 'BAKSAL period' ? (
                        <span className="italic text-muted-foreground">
                          {wikiLink(row.wikiUrl, row.name)}{' '}
                          <span
                            className="ml-1 text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.15)', color: 'oklch(0.42 0.22 25)' }}
                          >
                            Dissolution
                          </span>
                        </span>
                      ) : (
                        <span className="font-medium text-foreground">
                          {wikiLink(row.wikiUrl, row.name)}
                          {row.note && (
                            <span
                              className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                              style={{ backgroundColor: 'oklch(0.65 0.1 75 / 0.2)', color: 'oklch(0.45 0.1 75)' }}
                            >
                              {row.note}
                            </span>
                          )}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{row.ncElected}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.inOffice}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{row.generalSecretary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Prime Ministers of Bangladesh (Awami League) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.12)', color: 'oklch(0.42 0.22 25)' }}
            >
              <Star size={12} /> State Leadership
            </div>
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Prime Ministers of Bangladesh
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm">
              Awami League leaders who have served as Prime Minister of Bangladesh.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: 'oklch(0.28 0.1 155)', color: 'white' }}>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Term in Office</th>
                </tr>
              </thead>
              <tbody>
                {primeMinisters.map((pm, i) => (
                  <tr
                    key={i}
                    className="border-t transition-colors"
                    style={{
                      borderColor: 'oklch(0.38 0.1 155 / 0.1)',
                      backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.97 0.005 90)',
                    }}
                  >
                    <td className="px-4 py-3 font-medium">
                      {wikiLink(pm.wikiUrl, pm.name)}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{pm.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Presidents of Bangladesh (Awami League era) */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.12)', color: 'oklch(0.28 0.1 155)' }}
            >
              <Landmark size={12} /> State Leadership
            </div>
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Presidents of Bangladesh
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm">
              Presidents of Bangladesh during Awami League-led eras of governance.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: 'oklch(0.28 0.1 155)', color: 'white' }}>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Term in Office</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {presidents.map((p, i) => (
                  <tr
                    key={i}
                    className="border-t transition-colors"
                    style={{
                      borderColor: 'oklch(0.38 0.1 155 / 0.1)',
                      backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.97 0.005 90)',
                    }}
                  >
                    <td className="px-4 py-3 font-medium">
                      {wikiLink(p.wikiUrl, p.name)}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{p.term}</td>
                    <td className="px-4 py-3">
                      {p.note ? (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            backgroundColor: p.note === 'Assassinated'
                              ? 'oklch(0.52 0.22 25 / 0.15)'
                              : 'oklch(0.65 0.1 75 / 0.2)',
                            color: p.note === 'Assassinated'
                              ? 'oklch(0.42 0.22 25)'
                              : 'oklch(0.45 0.1 75)',
                          }}
                        >
                          {p.note}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vice President of Bangladesh */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Vice President of Bangladesh
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm">
              Awami League leader who served as Vice President during the independence era.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: 'oklch(0.28 0.1 155)', color: 'white' }}>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Term in Office</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="border-t"
                  style={{ borderColor: 'oklch(0.38 0.1 155 / 0.1)', backgroundColor: 'white' }}
                >
                  <td className="px-4 py-3 font-medium">
                    {wikiLink('https://en.wikipedia.org/wiki/Syed_Nazrul_Islam', 'Syed Nazrul Islam')}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">1971–1972</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">
                    Acting Party President (1966–1969) while Sheikh Mujibur Rahman was in prison
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Structure Levels */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Organizational Levels
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              The Awami League operates at every level of Bangladesh's administrative structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {structureLevels.map((level) => (
              <div
                key={level.level}
                className="bg-card rounded-2xl p-6 border shadow-card"
                style={{ borderColor: `${level.color}30` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${level.color}15` }}
                  >
                    <level.Icon size={22} style={{ color: level.color }} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">{level.level}</h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Bodies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Key Governing Bodies
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'National Council (Jatiya Sammelan)',
                description: 'The supreme decision-making body of the Awami League. It meets every three years to elect the party president, general secretary, and other central leaders. The National Council sets the party\'s overall direction and policy.',
              },
              {
                title: 'Central Working Committee',
                description: 'The executive body responsible for implementing National Council decisions and managing day-to-day party affairs. It consists of elected members and meets regularly to address current political and organizational matters.',
              },
              {
                title: 'Advisory Council',
                description: 'Senior party leaders and advisors who provide guidance on major policy and political decisions. The Advisory Council plays a consultative role in shaping the party\'s strategic direction.',
              },
              {
                title: 'Parliamentary Party',
                description: 'Awami League members elected to the Jatiya Sangsad (National Parliament) form the parliamentary party. They are responsible for legislative work, representing the party\'s policies in parliament.',
              },
            ].map((body) => (
              <div
                key={body.title}
                className="rounded-xl p-6 border bg-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{body.title}</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{body.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Wings */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-white mb-3">
              Party Wings
            </h2>
            <p className="text-white/70 font-sans max-w-xl mx-auto">
              The Awami League maintains a network of affiliated wings representing different segments of society.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'oklch(0.78 0.12 75 / 0.2)' }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: 'oklch(0.20 0.09 155)', color: 'oklch(0.78 0.12 75)' }}>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Official Name</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Common Term</th>
                </tr>
              </thead>
              <tbody>
                {partyWings.map((wing, i) => (
                  <tr
                    key={i}
                    className="border-t transition-colors"
                    style={{
                      borderColor: 'oklch(0.78 0.12 75 / 0.1)',
                      backgroundColor: i % 2 === 0
                        ? 'oklch(0.32 0.09 155)'
                        : 'oklch(0.28 0.09 155)',
                    }}
                  >
                    <td className="px-4 py-3" style={{ color: 'oklch(0.78 0.12 75)' }}>
                      <span className="font-semibold text-xs uppercase tracking-wide">{wing.type}</span>
                    </td>
                    <td className="px-4 py-3 text-white font-medium">{wing.officialName}</td>
                    <td className="px-4 py-3 text-white/70 hidden sm:table-cell">{wing.commonTerm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card fallback for common term */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
            {partyWings.map((wing, i) => (
              <div
                key={i}
                className="rounded-xl p-3 border"
                style={{ backgroundColor: 'oklch(0.32 0.09 155)', borderColor: 'oklch(0.78 0.12 75 / 0.2)' }}
              >
                <div
                  className="text-xs font-sans font-semibold uppercase tracking-widest mb-1"
                  style={{ color: 'oklch(0.78 0.12 75)' }}
                >
                  {wing.type}
                </div>
                <div className="text-white font-serif font-semibold text-sm">{wing.commonTerm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
