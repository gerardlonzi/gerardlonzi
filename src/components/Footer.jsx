import { profile, navLinks } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-surface-raised/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <button
              type="button"
              onClick={scrollTop}
              className="mb-4 text-2xl font-bold tracking-tight"
            >
              <span className="accent-gradient">G.</span>
              <span className="text-white">Lonzi</span>
            </button>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              {profile.role} — Création d&apos;expériences web modernes et performantes.
            </p>
            <p className="font-mono text-xs text-zinc-600">
              {'status: available_for_hire'}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-accent-light"
                  >
                    <span className="h-px w-0 bg-accent transition-all group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition hover:text-accent-light"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
              <li className="pt-2">
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent-light transition hover:bg-accent/20"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                  Télécharger CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-zinc-600">
            © {year} {profile.firstName} {profile.lastName}. Tous droits réservés.
          </p>

          <button
            type="button"
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-zinc-400 transition hover:border-accent/30 hover:text-accent-light"
          >
            Retour en haut
            <svg className="h-4 w-4 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

          <p className="text-sm text-zinc-600">
            Conçu avec{' '}
            <span className="text-accent-light">React</span> &{' '}
            <span className="text-accent-light">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
