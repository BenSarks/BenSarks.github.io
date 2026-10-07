import { STATS } from '../data.js';
import { useCountUp, useReveal } from '../hooks/useReveal.js';

export default function Stats() {
  const [ref, visible] = useReveal();
  const p = useCountUp(visible);
  return (
    <section ref={ref} aria-label="Quick stats" className={`stats reveal ${visible ? 'is-visible' : ''}`}>
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <p className="stat-value">{s.text ?? Math.round(s.value * p) + s.suffix}</p>
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
