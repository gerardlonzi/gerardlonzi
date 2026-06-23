import { useEffect, useRef } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}) {
  const ref = useRef(null);

  const variantClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[variant] || 'reveal';

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
