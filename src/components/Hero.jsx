import { profile } from '../data/portfolio';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 animate-pulse-glow rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute -right-20 bottom-32 h-96 w-96 animate-pulse-glow rounded-full bg-violet-600/20 blur-[140px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-pulse-glow rounded-full bg-cyan-500/10 blur-[100px]" style={{ animationDelay: '3s' }} />
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[20%] hidden h-72 w-72 animate-spin-slow rounded-full border border-accent/10 lg:block" />
      <div className="pointer-events-none absolute right-[12%] top-[22%] hidden h-64 w-64 animate-spin-reverse rounded-full border border-dashed border-violet-500/20 lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex-1 animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible pour de nouveaux projets
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-gradient">{profile.firstName}</span>
            <span className="block accent-gradient animate-gradient-x bg-[length:200%_auto]">
              {profile.lastName}
            </span>
          </h1>

          <p className="mb-2 font-mono text-lg font-medium text-accent-cyan md:text-xl">
            {'<'}{profile.role}{' />'}
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="glow-btn bg-accent px-7 py-3.5 text-sm text-white shadow-lg shadow-accent/30"
            >
              <span className="relative z-10">Voir mes projets</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="glow-btn border border-white/20 bg-white/5 px-7 py-3.5 text-sm text-zinc-200"
            >
              <span className="relative z-10">Me contacter</span>
            </button>
          </div>
        </div>

        <div className="relative mt-16 flex flex-1 items-center justify-center lg:mt-0">
          <div className="absolute h-[340px] w-[340px] animate-pulse-glow rounded-full bg-gradient-to-br from-accent/30 via-violet-500/20 to-cyan-500/20 blur-3xl md:h-[420px] md:w-[420px]" />

          <div className="relative ">
            <div className="absolute -inset-1  rounded-3xl  opacity-60 blur-sm" />

            <div className="relative overflow-hidden rounded-3xl futuristic-border">
              <div className="absolute inset-0 z-10 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-accent/10 to-transparent" />
                <div className="photo-overlay-bottom absolute inset-x-0 bottom-0 h-2/5" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/40 via-transparent to-transparent" />
              </div>

              <img
                src={profile.heroPhoto}
                alt={profile.name || `${profile.firstName} ${profile.lastName}`}
                className="relative h-[360px] w-[280px] object-cover object-top md:h-[440px] md:w-[340px]"
              />

              <div className="absolute bottom-0 inset-x-0 z-20 p-5">
                <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                  <p className="text-sm font-semibold text-white">{profile.firstName}</p>
                  <p className="text-xs text-accent-light">{profile.role}</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-8 rounded-lg border border-accent/30 bg-surface-card/90 px-3 py-2 font-mono text-xs text-accent-cyan backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
              {'dev.mode = true'}
            </div>
            <div className="absolute -left-6 bottom-24 rounded-lg border border-violet-500/30 bg-surface-card/90 px-3 py-2 font-mono text-xs text-violet-400 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}>
              {'build: success ✓'}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="group flex flex-col items-center gap-2 text-zinc-500 transition hover:text-accent-light"
          aria-label="Défiler vers le bas"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-accent" />
          </div>
        </button>
      </div>
    </section>
  );
}
