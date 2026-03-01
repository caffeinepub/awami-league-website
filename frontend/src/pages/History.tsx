import React from 'react';
import { BookOpen } from 'lucide-react';

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

interface TimelineItem {
  year: string;
  title: string;
  description: React.ReactNode;
  image?: { src: string; caption: string };
}

const timelineEvents: TimelineItem[] = [
  {
    year: '1947',
    title: 'Partition of British India',
    description: (
      <>
        British India is partitioned into India and Pakistan. East Bengal becomes part of Pakistan as East Pakistan.
        Bengali-speaking Muslims find themselves in a new nation where Urdu is imposed as the sole national language,
        sparking early tensions. The {wikiLink('https://en.wikipedia.org/wiki/University_of_Dhaka', 'University of Dhaka')} became
        a centre of intellectual resistance to this cultural imposition.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Gopalganj_District_(Bangladesh)', 'Gopalganj District')}, the birthplace
        of Sheikh Mujibur Rahman, would soon become a cradle of the independence movement.
      </>
    ),
  },
  {
    year: '1949',
    title: 'Founding of the Awami League',
    description: (
      <>
        On 23 June 1949, at the Rose Garden Palace in Dhaka, Bengali nationalists break away from the Muslim League to
        establish the East Pakistan Awami Muslim League.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Maulana_Abdul_Hamid_Khan_Bhashani', 'Maulana Abdul Hamid Khan Bhashani')} becomes
        the first president,{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Shamsul_Huq', 'Shamsul Huq')} the general secretary, and Sheikh Mujibur Rahman
        a joint secretary. Other founding figures included{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Khaleque_Nawaz_Khan', 'Khaleque Nawaz Khan')},{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Shawkat_Ali', 'Shawkat Ali')},{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Kazi_Golam_Mahboob', 'Kazi Golam Mahboob')}, and{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Oli_Ahad', 'Oli Ahad')}.
      </>
    ),
  },
  {
    year: '1952',
    title: 'Bengali Language Movement',
    description: (
      <>
        The Awami League and its student wing play a pivotal role in the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Bengali_language_movement', 'Bengali Language Movement')}.
        On 21 February, students and activists are killed by Pakistani police while protesting for the recognition of
        Bengali as an official language. The{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Bengali_alphabet', 'Bengali script')} and language became a symbol of
        national identity. This date is now observed as International Mother Language Day.
      </>
    ),
  },
  {
    year: '1953',
    title: 'Secularization of the Party',
    description: (
      <>
        The word "Muslim" is dropped from the party name, transforming it into the East Pakistan Awami League.
        This marks a significant shift toward secularism, welcoming non-Muslims and emphasizing Bengali identity over
        religious identity. {wikiLink('https://en.wikipedia.org/wiki/Ataur_Rahman_Khan', 'Ataur Rahman Khan')} emerged
        as a key party leader during this period of reorganization.
      </>
    ),
  },
  {
    year: '1954',
    title: 'United Front Election Victory',
    description: (
      <>
        The Awami League leads the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Jukta_Front', 'Jukta Front')} (United Front) coalition — formed with{' '}
        {wikiLink('https://en.wikipedia.org/wiki/A._K._Fazlul_Huq', 'A. K. Fazlul Huq')}'s Krishak Sramik Party and
        Maulana Bhashani's Awami League — to a landslide victory in the East Bengal provincial elections, defeating the
        Muslim League. This demonstrates the party's massive popular support among the Bengali people.
      </>
    ),
  },
  {
    year: '1955',
    title: 'Bangla Academy Established',
    description: (
      <>
        The {wikiLink('https://en.wikipedia.org/wiki/Bangla_Academy', 'Bangla Academy')} is established in Dhaka on
        3 December 1955 to promote and develop the Bengali language and literature. The Academy became a vital
        institution for preserving Bengali cultural heritage and was closely associated with the language movement's
        legacy.
      </>
    ),
  },
  {
    year: '1957',
    title: 'Kagmari Conference',
    description: (
      <>
        The {wikiLink('https://en.wikipedia.org/wiki/Kagmari_Conference', 'Kagmari Conference')} of the Awami League
        is held in February 1957, marking a significant political moment. Maulana Bhashani's faction, advocating for
        closer ties with China and a more leftist orientation, splits from the party — leading to the formation of the
        National Awami Party (NAP). This reshapes the political landscape of East Pakistan.
      </>
    ),
  },
  {
    year: '1966',
    title: 'Six-Point Movement',
    description: (
      <>
        {wikiLink('https://en.wikipedia.org/wiki/Bangabandhu', 'Bangabandhu')} Sheikh Mujibur Rahman announces the
        historic {wikiLink('https://en.wikipedia.org/wiki/Six_point_movement', 'Six-Point Programme')} in Lahore,
        demanding greater autonomy for East Pakistan. The six points address legislative, administrative, taxation,
        trade, foreign exchange, and paramilitary powers for the provinces. Mujib is arrested and charged with treason
        in the {wikiLink('https://en.wikipedia.org/wiki/Agartala_Conspiracy_Case', 'Agartala Conspiracy Case')}.
      </>
    ),
  },
  {
    year: '1969',
    title: "Mass Uprising & Mujib's Release",
    description: (
      <>
        A mass uprising (Gono Obbhuthan) forces the withdrawal of the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Agartala_Conspiracy_Case', 'Agartala Conspiracy Case')} and the
        release of Sheikh Mujibur Rahman. The people of East Pakistan bestow upon him the title{' '}
        "{wikiLink('https://en.wikipedia.org/wiki/Bangabandhu', 'Bangabandhu')}" (Friend of Bengal). General Ayub Khan
        resigns and Yahya Khan takes power.
      </>
    ),
  },
  {
    year: '1970',
    title: 'Historic Election Victory',
    description: (
      <>
        In the December 1970 general elections, the Awami League wins a landslide majority — 160 out of 162 seats in
        East Pakistan — giving it an absolute majority in the National Assembly of Pakistan. The military establishment
        refuses to transfer power to the elected majority.
      </>
    ),
  },
  {
    year: '1971',
    title: 'Liberation War & Independence',
    description: (
      <>
        On 7 March 1971, {wikiLink('https://en.wikipedia.org/wiki/Bangabandhu', 'Bangabandhu')} delivers his historic
        speech at the Ramna Race Course. On 25 March, the Pakistani military launches Operation Searchlight. On 26 March,
        Bangladesh declares independence. The Mujibnagar Government-in-exile is led by Acting President{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Syed_Nazrul_Islam', 'Syed Nazrul Islam')}, Prime Minister{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Tajuddin_Ahmed', 'Tajuddin Ahmed')}, Finance Minister{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Muhammad_Mansur_Ali', 'Muhammad Mansur Ali')}, and Home Minister{' '}
        {wikiLink('https://en.wikipedia.org/wiki/A._H._M._Qamaruzzaman', 'A. H. M. Qamaruzzaman')}. After nine months
        of brutal war, Bangladesh achieves victory on 16 December 1971 — Victory Day.
      </>
    ),
  },
  {
    year: '1972',
    title: 'Constitution of Bangladesh',
    description: (
      <>
        Bangladesh adopts its first constitution on 4 November 1972, enshrining the four fundamental principles of
        Mujibism: nationalism, socialism, democracy, and secularism.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Bangabandhu', 'Sheikh Mujibur Rahman')} becomes the first Prime
        Minister of independent Bangladesh. Bangladesh joins the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Non-Aligned_Movement', 'Non-Aligned Movement')} in 1973, affirming
        its independent foreign policy on the world stage.
      </>
    ),
  },
  {
    year: '1974',
    title: 'Bangladesh Famine',
    description: (
      <>
        The {wikiLink('https://en.wikipedia.org/wiki/Bangladesh_famine_of_1974', 'Bangladesh famine of 1974')} causes
        widespread suffering across the country, exacerbated by floods, global food price shocks, and post-war
        economic disruption. The crisis tests the young government's capacity and leads to significant international
        humanitarian assistance. The famine becomes a defining challenge of the early independence era.
      </>
    ),
  },
  {
    year: '1975',
    title: 'BAKSAL & Assassination of Bangabandhu',
    description: (
      <>
        In January 1975, the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Bangladesh_Krishak_Sramik_Awami_League', 'Bangladesh Krishak Sramik Awami League')} (BAKSAL)
        is formed as a single national party, consolidating political power. On 15 August 1975,{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Bangabandhu', 'Sheikh Mujibur Rahman')} and most of his family are
        assassinated in a military coup. National leaders{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Syed_Nazrul_Islam', 'Syed Nazrul Islam')},{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Tajuddin_Ahmed', 'Tajuddin Ahmed')},{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Muhammad_Mansur_Ali', 'Muhammad Mansur Ali')}, and{' '}
        {wikiLink('https://en.wikipedia.org/wiki/A._H._M._Qamaruzzaman', 'A. H. M. Qamaruzzaman')} are subsequently
        killed in Dhaka Central Jail on 3 November 1975. His daughter{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Sheikh_Hasina', 'Sheikh Hasina')}, who was abroad, survives. The
        Awami League is banned and goes into a period of political exile.
      </>
    ),
  },
  {
    year: '1981',
    title: 'Sheikh Hasina Returns',
    description: (
      <>
        {wikiLink('https://en.wikipedia.org/wiki/Sheikh_Hasina', 'Sheikh Hasina')} returns to Bangladesh and assumes
        leadership of the Awami League. She leads the party through years of opposition against military rule,
        advocating for democracy and the restoration of constitutional governance. Prominent party figures such as{' '}
        {wikiLink('https://en.wikipedia.org/wiki/A.B.M._Mohiuddin_Chowdhury', 'A.B.M. Mohiuddin Chowdhury')}, the
        veteran Awami League leader from Chittagong, rally behind her leadership during this difficult period.
      </>
    ),
  },
  {
    year: '1987',
    title: 'Anti-Autocracy Movement & Noor Hossain',
    description: (
      <>
        Mass protests against the autocratic rule of General H. M. Ershad intensify. On 10 November 1987, activist
        Noor Hossain becomes a symbol of the democracy movement when he is shot dead by police during an Awami League
        rally in Dhaka, with the words "Down with autocracy, let democracy be freed" written on his bare chest and
        back. His sacrifice galvanizes the pro-democracy movement across Bangladesh.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Saber_Hossain_Chowdhury', 'Saber Hossain Chowdhury')}, a prominent
        Awami League politician and later parliamentarian, was among the activists engaged in the democracy struggle
        during this era. The opposition also contended with the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Jatiya_Party_(Ershad)', 'Jatiya Party (Ershad)')}, the ruling party
        founded by General Ershad, which the Awami League consistently challenged as an instrument of autocratic rule.
      </>
    ),
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shoirachar_Nipat_Jaak_-_Noor_Hossain_%40_Awami_League_Rally_on_Nov_10_1987.jpg/250px-Shoirachar_Nipat_Jaak_-_Noor_Hossain_%40_Awami_League_Rally_on_Nov_10_1987.jpg',
      caption: 'Noor Hossain at the Awami League rally, 10 November 1987. Source: Wikimedia Commons',
    },
  },
  {
    year: '1996',
    title: 'Return to Power',
    description: (
      <>
        The Awami League wins the general elections and{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Sheikh_Hasina', 'Sheikh Hasina')} becomes Prime Minister for the
        first time. The party focuses on economic development, the Ganges Water Treaty with India, and the Chittagong
        Hill Tracts Peace Accord.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Ahsanullah_Master', 'Ahsanullah Master')}, a trade union leader and
        Awami League MP from Gazipur, becomes a prominent voice for workers' rights during this period.
      </>
    ),
  },
  {
    year: '2004',
    title: 'Grenade Attack on Awami League Rally',
    description: (
      <>
        On 21 August 2004, the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/2004_Dhaka_grenade_attack', '2004 Dhaka grenade attack')} targets an
        Awami League rally at Bangabandhu Avenue, killing at least 24 people and injuring hundreds.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Sheikh_Hasina', 'Sheikh Hasina')}, the party president, narrowly
        escapes with her life. The attack is widely condemned as a politically motivated assassination attempt and
        becomes one of the darkest episodes in Bangladesh's democratic history.
      </>
    ),
  },
  {
    year: '2008',
    title: 'Digital Bangladesh Vision',
    description: (
      <>
        The Awami League wins a historic landslide victory in the{' '}
        {wikiLink('https://en.wikipedia.org/wiki/2008_Bangladeshi_general_election', '2008 Bangladeshi general election')}
        {' '}with a "Digital Bangladesh" vision.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Sheikh_Hasina', 'Sheikh Hasina')} begins a transformative period of
        governance focused on economic growth, infrastructure development, and technological advancement.{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Dipu_Moni', 'Dipu Moni')}, a senior Awami League leader and physician,
        served as Foreign Minister in the new government, becoming one of Bangladesh's most prominent women in
        diplomacy. Cultural figure and Awami League MP{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Asaduzzaman_Nur', 'Asaduzzaman Nur')}, a celebrated actor and
        cultural activist, also joined the parliament as part of the Awami League's sweeping mandate.
      </>
    ),
  },
  {
    year: '2021',
    title: 'Golden Jubilee of Independence',
    description: (
      <>
        Bangladesh celebrates 50 years of independence and the birth centenary of{' '}
        {wikiLink('https://en.wikipedia.org/wiki/Bangabandhu', 'Bangabandhu')} Sheikh Mujibur Rahman. The country
        achieves lower-middle-income status and makes significant strides in human development indicators.
      </>
    ),
  },
];

interface TimelineEventProps {
  year: string;
  title: string;
  description: React.ReactNode;
  image?: { src: string; caption: string };
  isLast?: boolean;
}

function TimelineEventRich({ year, title, description, image, isLast = false }: TimelineEventProps) {
  return (
    <div className="relative flex gap-6 flex-row md:gap-8">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1 z-10"
          style={{ backgroundColor: 'oklch(0.52 0.22 25)', borderColor: 'oklch(0.78 0.12 75)' }}
        />
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-1"
            style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.3)' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-2"
          style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.12)', color: 'oklch(0.38 0.1 155)' }}
        >
          {year}
        </div>
        <h3 className="font-serif font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm font-sans leading-relaxed">{description}</p>
        {image && (
          <figure className="mt-4 inline-block">
            <img
              src={image.src}
              alt={image.caption}
              className="rounded-lg border max-w-[200px] w-full object-cover shadow-md"
              style={{ borderColor: 'oklch(0.78 0.12 75 / 0.4)' }}
            />
            <figcaption className="mt-1.5 text-xs text-muted-foreground font-sans italic max-w-[200px] leading-snug">
              {image.caption}
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}

export default function History() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/history-bg.dim_1440x800.png"
            alt="History Background"
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
            <BookOpen size={12} /> Our Story
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-4">
            History of the<br />
            <span style={{ color: 'oklch(0.78 0.12 75)' }}>Awami League</span>
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            From a breakaway faction in 1949 to the party that led Bangladesh to independence — seven decades of struggle, sacrifice, and service.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground font-sans text-lg leading-relaxed">
            The Bangladesh Awami League is the oldest existing political party in Bangladesh. Founded on 23 June 1949 at the Rose Garden Palace in Dhaka, it emerged as a voice for the Bengali people against the political and economic domination of West Pakistan. Its history is inseparable from the history of Bangladesh itself.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 pb-20" style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <TimelineEventRich
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                image={event.image}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
