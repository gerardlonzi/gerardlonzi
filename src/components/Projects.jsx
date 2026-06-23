import { useState } from 'react';
import { projects } from '../data/portfolio';
import Reveal from './Reveal';

const INITIAL_COUNT = 4;

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 100} variant="scale">
      <article
        className={`group card-hover-glow relative flex h-full flex-col overflow-hidden rounded-2xl futuristic-border ${
          project.featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-violet-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className={`relative overflow-hidden bg-gradient-to-br from-indigo-950/80 via-surface-card to-violet-950/60 ${
            project.featured ? 'min-h-[220px]' : 'h-48'
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black text-white/5 transition duration-500 group-hover:scale-110 group-hover:text-white/10">
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-accent/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-accent/40 bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-light backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        <div className="relative flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-white transition group-hover:text-accent-light">
            {project.title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300 transition group-hover:border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-1 text-sm font-medium text-accent-light transition hover:text-white"
            >
              Demo live
              <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-500 transition hover:text-zinc-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            {'// projets'}
          </p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Mes <span className="accent-gradient">réalisations</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {hasMore && !showAll && (
          <Reveal delay={200} className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="glow-btn group flex items-center gap-3 border border-accent/40 bg-accent/10 px-8 py-4 text-sm text-accent-light"
            >
              <span className="relative z-10">Voir tous les projets</span>
              <span className="relative z-10 rounded-full bg-accent/20 px-2 py-0.5 font-mono text-xs">
                {projects.length}
              </span>
              <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </Reveal>
        )}

        {showAll && hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="text-sm text-zinc-500 transition hover:text-accent-light"
            >
              Réduire la liste ↑
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
