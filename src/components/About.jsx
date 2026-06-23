import { profile } from '../data/portfolio';
import Reveal from './Reveal';

export default function About() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            {'// à propos'}
          </p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Qui suis-je <span className="accent-gradient">?</span>
          </h2>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={100} variant="left">
            <div className="space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="border-l-2 border-accent/30 pl-5">
                  {paragraph}
                </p>
              ))}

              <div className="glass mt-8 inline-flex items-center gap-3 rounded-2xl px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                  <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Localisation</p>
                  <p className="font-medium text-zinc-200">{profile.location}</p>
                </div>
                
              </div>
              <div className="flex gap-4">
              <a
              href={profile.cvUrl}
              download
              className="glow-btn group flex items-center gap-2 border border-accent/40 bg-accent/10 px-7 py-3.5 text-sm text-accent-light"
            >
              <svg className="h-4 w-4 transition group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Télécharger CV</span>
            </a>
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="glow-btn bg-accent px-7 py-3.5 text-sm text-white shadow-lg shadow-accent/30"
            >
              <span className="relative z-10">Voir mes projets</span>
            </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} variant="right">
            <div className="group relative mx-auto max-w-sm lg:mx-0 lg:ml-auto">
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={profile.aboutPhoto}
                  alt="Portrait"
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface/80 to-transparent p-6 pt-20">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold text-white">{profile.firstName.split(' ')[0]}</p>
                      <p className="text-sm text-accent-light">{profile.role}</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/20 font-mono text-xs text-accent-cyan">
                      {'</>'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
