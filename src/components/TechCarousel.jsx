import { getTechIconUrl } from '../data/portfolio';

function TechItem({ skill }) {
  return (
    <div className="group flex shrink-0 flex-col items-center gap-3 px-6 py-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20">
        <img
          src={getTechIconUrl(skill.icon)}
          alt={skill.name}
          className="tech-icon h-9 w-9"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span className="hidden text-lg font-bold text-accent-light">{skill.name.charAt(0)}</span>
      </div>
      <span className="text-xs font-medium text-zinc-400 transition group-hover:text-white">
        {skill.name}
      </span>
    </div>
  );
}

export default function TechCarousel({ skills, reverse = false }) {
  const duplicated = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-raised/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-raised/50 to-transparent" />

      <div
        className={`marquee-track ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {duplicated.map((skill, index) => (
          <TechItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
