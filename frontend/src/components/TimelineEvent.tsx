interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  side?: 'left' | 'right';
}

export default function TimelineEvent({ year, title, description, isLast = false, side = 'left' }: TimelineEventProps) {
  return (
    <div className={`relative flex gap-6 ${side === 'right' ? 'flex-row-reverse' : 'flex-row'} md:gap-8`}>
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
      <div className={`pb-8 flex-1 ${side === 'right' ? 'text-right' : ''}`}>
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-2"
          style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.12)', color: 'oklch(0.38 0.1 155)' }}
        >
          {year}
        </div>
        <h3 className="font-serif font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm font-sans leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
