import { skillCategories } from '../data/portfolio';
import Reveal from './Reveal';
import TechCarousel from './TechCarousel';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-surface-raised/50">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            {'// compétences'}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Technologies & <span className="accent-gradient">outils</span>
          </h2>
          <p className="mb-16 max-w-2xl text-zinc-400">
            Stack technique organisée par domaine, avec un aperçu continu de mes outils du quotidien.
          </p>
        </Reveal>

        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => (
            <Reveal key={category.name} delay={catIndex * 100}>
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-500">
                    {category.skills.length} techs
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/5 bg-surface-card/50">
                  <TechCarousel
                    skills={category.skills}
                    reverse={catIndex % 2 !== 0}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
