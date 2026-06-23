import { useEffect, useRef, useState } from 'react';
import { experience } from '../data/portfolio';
import Reveal from './Reveal';
import ImageLightbox from './ImageLightbox';

function ExperienceCard({ item, index, isVisible }) {
  const [lightbox, setLightbox] = useState(null);
  const isEven = index % 2 === 0;
  const hasImages = item.images && item.images.length > 0;

  return (
    <>
      <div
        className={`relative flex flex-col gap-4 md:w-[calc(50%-2rem)] ${
          isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <div
          className={`absolute top-6 z-10 h-4 w-4 rounded-full border-2 border-accent bg-surface timeline-glow transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          } ${isEven ? 'left-0 md:left-auto md:-right-2' : 'left-0 md:-left-2'}`}
        />

        <Reveal variant={isEven ? 'left' : 'right'} delay={index * 150}>
          <div className="card-hover-glow group relative ml-8 overflow-hidden rounded-2xl futuristic-border p-6 md:ml-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <p className="font-mono text-sm font-medium text-accent-cyan">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.company}</h3>
              <p className="text-sm text-accent-light">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.description}</p>

              {hasImages && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {item.images.map((src, imgIndex) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setLightbox(imgIndex)}
                      className="group/img relative h-20 w-28 overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20"
                    >
                      <img
                        src={src}
                        alt={`${item.company} - photo ${imgIndex + 1}`}
                        className="h-full w-full object-cover bg-white transition duration-500 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover/img:opacity-100">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {lightbox !== null && hasImages && (
        <ImageLightbox
          images={item.images}
          initialIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

export default function Experience() {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineHeight(100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-surface-raised/50">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            {'// parcours'}
          </p>
          <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Mon <span className="accent-gradient">expérience</span>
          </h2>
        </Reveal>

        <div ref={timelineRef} className="relative">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px">
            <div
              className="w-full bg-gradient-to-b from-accent via-violet-500 to-cyan-400 transition-all duration-[2000ms] ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.company}
                item={item}
                index={index}
                isVisible={lineHeight > 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
