import { quickLinks } from '../data/portfolio';
import Reveal from './Reveal';

const icons = {
  projects: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  skills: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  experience: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  contact: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function QuickLinks() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-surface-raised/30 py-16">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center font-mono text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            {'// navigation rapide'}
          </p>
          <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
            Explorez mon <span className="accent-gradient">univers</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link, index) => (
            <Reveal key={link.id} delay={index * 100} variant="scale">
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className="card-hover-glow group relative w-full overflow-hidden rounded-2xl futuristic-border p-6 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-violet-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />

                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-light transition-all duration-300 group-hover:scale-110 group-hover:border-accent/60 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/30">
                    {icons[link.icon]}
                  </div>

                  <p className="mb-1 text-2xl font-bold accent-gradient">{link.value}</p>
                  <h3 className="mb-1 text-lg font-semibold text-white">{link.label}</h3>
                  <p className="text-sm text-zinc-500 transition group-hover:text-zinc-400">
                    {link.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-light opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explorer
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
