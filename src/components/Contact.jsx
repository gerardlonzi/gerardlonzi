import { useState } from 'react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';

const socialIcons = {
  github: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              {'// contact'}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Travaillons <span className="accent-gradient">ensemble</span>
            </h2>
            <p className="mx-auto max-w-xl text-zinc-400">
              Un projet en tête ? Envoyez-moi un message et je vous répondrai rapidement.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal delay={100} variant="left" className="lg:col-span-2">
            <div className="space-y-5">
              <div className="card-hover-glow futuristic-border rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <svg className="h-6 w-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-zinc-500">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 block text-lg font-medium text-white transition hover:text-accent-light"
                >
                  {profile.email}
                </a>
              </div>

              <div className="card-hover-glow futuristic-border rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
                  <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-zinc-500">Localisation</p>
                <p className="mt-1 text-lg font-medium text-white">{profile.location}</p>
              </div>

              <div className="futuristic-border rounded-2xl p-6">
                <p className="mb-4 text-sm text-zinc-500">Réseaux sociaux</p>
                <div className="flex gap-3">
                  {Object.entries(profile.social).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-white hover:shadow-lg hover:shadow-accent/20"
                      aria-label={key}
                    >
                      {socialIcons[key]}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={profile.cvUrl}
                download
                className="glow-btn flex w-full items-center justify-center gap-2 rounded-2xl border border-accent/30 bg-accent/10 py-4 text-sm font-semibold text-accent-light"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">Télécharger mon CV</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} variant="right" className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl futuristic-border p-8 md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

              <input type="hidden" name="form-name" value="contact" />

              <h3 className="relative mb-8 text-xl font-semibold text-white">
                Envoyez un message
              </h3>

              <div className="relative space-y-6">
                {[
                  { id: 'name', label: 'Nom complet', type: 'text' },
                  { id: 'email', label: 'Adresse email', type: 'email' },
                ].map(({ id, label, type }) => (
                  <div key={id} className="relative">
                    <label
                      htmlFor={id}
                      className={`absolute left-4 transition-all duration-300 ${
                        focused === id || form[id]
                          ? '-top-2.5 bg-surface-card px-2 text-xs text-accent-light'
                          : 'top-3.5 text-sm text-zinc-500'
                      }`}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      value={form[id]}
                      onFocus={() => setFocused(id)}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="input-futuristic"
                    />
                  </div>
                ))}

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 ${
                      focused === 'message' || form.message
                        ? '-top-2.5 bg-surface-card px-2 text-xs text-accent-light'
                        : 'top-3.5 text-sm text-zinc-500'
                    }`}
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-futuristic resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`glow-btn relative w-full py-4 text-sm font-semibold text-white transition-all ${
                    sent ? 'bg-emerald-600' : 'bg-accent'
                  }`}
                >
                  <span className="relative z-10">
                    {sent ? '✓ Message envoyé avec succès !' : 'Envoyer le message →'}
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
