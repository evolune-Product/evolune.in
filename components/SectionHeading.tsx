import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-14 md:mb-16`}>
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-white leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-brand-silver/80 leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}
