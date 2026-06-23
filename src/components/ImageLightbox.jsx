import { useEffect, useState } from 'react';

export default function ImageLightbox({ images, initialIndex = 0, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrent((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent((i) => (i - 1 + images.length) % images.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [images.length, onClose]);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photos"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Fermer"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-accent/30 md:left-8"
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-accent/30 md:right-8"
            aria-label="Photo suivante"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative mx-4 max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl futuristic-border shadow-2xl shadow-accent/20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`Photo ${current + 1}`}
          className="max-h-[85vh] w-full object-contain"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={images[i]}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-8 bg-accent' : 'w-2 bg-white/40'
                }`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
