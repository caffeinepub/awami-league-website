interface Fact {
  label: string;
  value: string;
}

const facts: Fact[] = [
  { label: 'Founded', value: '23 June 1949' },
  { label: 'Headquarters', value: 'Dhaka, Bangladesh' },
  { label: 'Ideology', value: 'Bengali Nationalism · Democracy · Secularism · Socialism' },
  { label: 'Student Wing', value: 'Bangladesh Chhatra League (est. 1948)' },
];

export default function KeyFactsStrip() {
  return (
    <section className="py-8" style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="text-xs font-sans font-semibold uppercase tracking-widest text-accent-gold mb-1">
                {fact.label}
              </div>
              <div className="text-primary-foreground font-sans text-sm leading-snug">
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
