import { useEffect, useRef } from 'react';

export function useScrollReveal(deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible on load — skip animation
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
      return;
    }

    el.classList.add('reveal-hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-hidden');
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
