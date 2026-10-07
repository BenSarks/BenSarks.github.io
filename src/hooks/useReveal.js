import { useEffect, useRef, useState } from 'react';

export function prefersReducedMotion() {
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Returns [ref, visible]. `visible` flips to true once the element scrolls into view.
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    if (visible || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [visible]);

  return [ref, visible];
}

// Eased 0 -> 1 progress that starts when `active` becomes true.
export function useCountUp(active, duration = 1400) {
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0));
  const done = progress === 1;

  useEffect(() => {
    if (!active || done) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const x = Math.min(1, (t - t0) / duration);
      setProgress(1 - Math.pow(1 - x, 3));
      if (x < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, done, duration]);

  return progress;
}
