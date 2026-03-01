import { LucideIcon } from 'lucide-react';

interface IdeologyPillarProps {
  name: string;
  Icon: LucideIcon;
  description: string;
  color: 'green' | 'red' | 'gold' | 'teal';
}

const colorMap = {
  green: {
    bg: 'oklch(0.38 0.1 155 / 0.1)',
    icon: 'oklch(0.38 0.1 155)',
    border: 'oklch(0.38 0.1 155 / 0.25)',
    badge: 'oklch(0.38 0.1 155)',
  },
  red: {
    bg: 'oklch(0.52 0.22 25 / 0.1)',
    icon: 'oklch(0.52 0.22 25)',
    border: 'oklch(0.52 0.22 25 / 0.25)',
    badge: 'oklch(0.52 0.22 25)',
  },
  gold: {
    bg: 'oklch(0.78 0.12 75 / 0.12)',
    icon: 'oklch(0.65 0.1 75)',
    border: 'oklch(0.78 0.12 75 / 0.3)',
    badge: 'oklch(0.65 0.1 75)',
  },
  teal: {
    bg: 'oklch(0.55 0.1 185 / 0.1)',
    icon: 'oklch(0.45 0.1 185)',
    border: 'oklch(0.55 0.1 185 / 0.25)',
    badge: 'oklch(0.45 0.1 185)',
  },
};

export default function IdeologyPillar({ name, Icon, description, color }: IdeologyPillarProps) {
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
