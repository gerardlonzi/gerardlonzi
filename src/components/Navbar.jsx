import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-surface/80 shadow-lg shadow-black/30 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="accent-gradient">G.</span>
          <span className="text-white">Lonzi</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`group relative text-sm font-medium transition-colors ${
                  active === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-surface/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollTo(link.id)}
            className="text-2xl font-semibold text-zinc-200 transition hover:text-white"
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}
