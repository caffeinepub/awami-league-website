import { Link } from '@tanstack/react-router';
import { LucideIcon } from 'lucide-react';

interface NavigationCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  path: string;
  accentColor?: 'green' | 'red' | 'gold';
}

export default function NavigationCard({ title, description, Icon, path, accentColor = 'green' }: NavigationCardProps) {
  const colorMap = {
    green: { bg: 'oklch(0.38 0.1 155)', text: 'oklch(0.38 0.1 155)', border: 'oklch(0.38 0.1 155 / 0.2)' },
    red: { bg: 'oklch(0.52 0.22 25)', text: 'oklch(0.52 0.22 25)', border: 'oklch(0.52 0.22 25 / 0.2)' },
    gold: { bg: 'oklch(0.78 0.12 75)', text: 'oklch(0.65 0.1 75)', border: 'oklch(0.78 0.12 75 / 0.2)' },
  };
  const colors = colorMap[accentColor];

  return (
    <Link to={path} className="block group">
      <div
        className="bg-card rounded-2xl p-6 h-full border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover"
        style={{ borderColor: colors.border }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${colors.bg}15` }}
        >
          <Icon size={24} style={{ color: colors.text }} />
        </div>
        <h3 className="font-serif font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-sans leading-relaxed">
          {description}
        </p>
        <div
          className="mt-4 text-xs font-sans font-semibold uppercase tracking-wider flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
          style={{ color: colors.text }}
        >
          Learn More →
        </div>
      </div>
    </Link>
  );
}
