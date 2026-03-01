import { Flag, Vote, BookOpen, Wheat, Globe, GraduationCap, Heart } from 'lucide-react';
import IdeologyPillar from '../components/IdeologyPillar';

const pillars = [
  {
    name: 'Bengali Nationalism',
    Icon: Flag,
    description: (
      <>
        Rooted in the shared{' '}
        <a
          href="https://en.wikipedia.org/wiki/Bengali_alphabet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Bengali language
        </a>{' '}
        and script, culture, and heritage of the Bengali people. The Awami League championed Bengali identity against
        the cultural and linguistic suppression of West Pakistan, making nationalism the bedrock of Bangladesh's
        founding.
      </>
    ),
    color: 'green' as const,
  },
  {
    name: 'Democracy',
    Icon: Vote,
    description: 'A commitment to parliamentary democracy, free and fair elections, and the rule of law. The party fought against military dictatorships and authoritarian rule to restore democratic governance in Bangladesh.',
    color: 'red' as const,
  },
  {
    name: 'Secularism',
    Icon: BookOpen,
    description: 'The separation of religion from state affairs, ensuring equal rights for all citizens regardless of faith. The 1972 Constitution enshrined secularism as a fundamental principle, reflecting the inclusive vision of Bangabandhu.',
    color: 'teal' as const,
  },
  {
    name: 'Socialism',
    Icon: Wheat,
    description: 'A commitment to social and economic justice, reducing inequality, and ensuring the welfare of the common people. This includes land reform, nationalization of key industries, and pro-poor economic policies.',
    color: 'gold' as const,
  },
];

const policies = [
  {
    title: 'Economic Policy',
    Icon: Wheat,
    points: [
      'Mixed economy with both public and private sector participation',
      'Poverty alleviation and rural development programs',
      'Export-led growth through the garment industry',
      'Infrastructure development: roads, bridges, power plants',
      'Vision 2041: Upper-middle-income country status',
    ],
  },
  {
    title: 'Education Policy',
    Icon: GraduationCap,
    points: [
      'Universal primary education and literacy campaigns',
      'Free textbooks for all primary school students',
      'Expansion of universities and technical education',
      'Digital Bangladesh: ICT integration in education',
      'Stipends for female students to promote gender equality',
    ],
  },
  {
    title: 'Social Welfare',
    Icon: Heart,
    points: [
      'Social safety net programs for the elderly and disabled',
      'Healthcare for all: community clinics across Bangladesh',
      "Women's empowerment and gender equality initiatives",
      'Housing programs for the homeless and landless',
      'Disaster preparedness and climate resilience',
    ],
  },
  {
    title: 'Foreign Policy',
    Icon: Globe,
    points: [
      '"Friendship to all, malice to none" — Bangabandhu\'s foreign policy doctrine',
      'Active participation in the United Nations and multilateral forums',
      'Strong ties with India, China, and the United States',
      'Advocacy for the rights of developing nations',
      'Rohingya refugee crisis management and international advocacy',
    ],
  },
];

export default function Ideology() {
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
            <BookOpen size={12} /> Core Principles
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-4">
            Ideology &<br />
            <span style={{ color: 'oklch(0.78 0.12 75)' }}>Policies</span>
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            The Awami League's ideology is rooted in the four fundamental principles enshrined in the 1972 Constitution of Bangladesh — known collectively as Mujibism.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              The Four Pillars of Mujibism
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Enshrined in the 1972 Constitution of Bangladesh by Bangabandhu Sheikh Mujibur Rahman, these four principles form the ideological foundation of the Awami League and the Bangladeshi state.
            </p>
            <div className="section-divider mt-6 max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <IdeologyPillarRich key={pillar.name} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Mujibism Quote */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="gold-divider mb-8" />
          <blockquote className="font-serif text-xl md:text-2xl text-foreground font-medium italic leading-relaxed mb-4">
            "The four stars in the national emblem of Bangladesh represent the four fundamental principles: nationalism, socialism, democracy, and secularism."
          </blockquote>
          <cite className="text-muted-foreground font-sans text-sm not-italic">
            — Constitution of Bangladesh, 1972
          </cite>
          <div className="gold-divider mt-8" />
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">
              Policy Stances
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              The Awami League's policy agenda spans economic development, education, social welfare, and foreign relations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="bg-card rounded-2xl p-8 border shadow-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.1)' }}
                  >
                    <policy.Icon size={20} style={{ color: 'oklch(0.38 0.1 155)' }} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-foreground">{policy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Bangladesh */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl text-white mb-4">
                Vision 2041: Smart Bangladesh
              </h2>
              <p className="text-white/75 font-sans leading-relaxed mb-4">
                Building on the "Digital Bangladesh" vision launched in 2008, the Awami League's Vision 2041 aims to transform Bangladesh into a developed, smart nation with a knowledge-based economy.
              </p>
              <p className="text-white/75 font-sans leading-relaxed">
                The vision encompasses four pillars: smart citizens, smart economy, smart government, and smart society — all underpinned by advanced digital infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '8.2%', label: 'GDP Growth Rate (2023)' },
                { value: '130M+', label: 'Internet Users' },
                { value: '100', label: 'Economic Zones Planned' },
                { value: '2041', label: 'Target Year for Development' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 text-center border"
                  style={{ backgroundColor: 'oklch(0.32 0.09 155)', borderColor: 'oklch(0.78 0.12 75 / 0.2)' }}
                >
                  <div
                    className="font-serif font-black text-2xl mb-1"
                    style={{ color: 'oklch(0.78 0.12 75)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs font-sans leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IdeologyPillarRichProps {
  name: string;
  Icon: LucideIcon;
  description: React.ReactNode;
  color: 'green' | 'red' | 'gold' | 'teal';
}

const colorMap = {
  green: {
    bg: 'oklch(0.38 0.1 155 / 0.1)',
    icon: 'oklch(0.38 0.1 155)',
    border: 'oklch(0.38 0.1 155 / 0.25)',
  },
  red: {
    bg: 'oklch(0.52 0.22 25 / 0.1)',
    icon: 'oklch(0.52 0.22 25)',
    border: 'oklch(0.52 0.22 25 / 0.25)',
  },
  gold: {
    bg: 'oklch(0.78 0.12 75 / 0.12)',
    icon: 'oklch(0.65 0.1 75)',
    border: 'oklch(0.78 0.12 75 / 0.3)',
  },
  teal: {
    bg: 'oklch(0.55 0.1 185 / 0.1)',
    icon: 'oklch(0.45 0.1 185)',
    border: 'oklch(0.55 0.1 185 / 0.25)',
  },
};

function IdeologyPillarRich({ name, Icon, description, color }: IdeologyPillarRichProps) {
  const c = colorMap[color];
  return (
    <div
      className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-card"
      style={{ borderColor: c.border }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: c.bg }}
      >
        <Icon size={28} style={{ color: c.icon }} />
      </div>
      <h3 className="font-serif font-bold text-xl text-foreground mb-3">{name}</h3>
      <p className="text-muted-foreground text-sm font-sans leading-relaxed">{description}</p>
    </div>
  );
}
