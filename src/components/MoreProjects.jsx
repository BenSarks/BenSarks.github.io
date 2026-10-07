import { FEATURED, MORE } from '../data.js';
import ProjectLinks from './ProjectLinks.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function MoreProjects({ onOpen }) {
  if (!MORE.length) return null;
  return (
    <Reveal as="section" aria-labelledby="more-h" className="section">
      <SectionHeading id="more-h" kicker="02 / More projects" small>Also built</SectionHeading>
      <div className="more-grid">
        {MORE.map((p, i) => (
          <article key={p.id} className="more-card" onClick={() => onOpen(p)}>
            <span className="num muted">{String(FEATURED.length + i + 1).padStart(2, '0')}</span>
            <h3 className="more-title">{p.title}</h3>
            <p className="more-summary">{p.summary}</p>
            <ul aria-label="Tech stack" className="tag-list">
              {p.tech.map((t) => <li key={t} className="tag tag-neutral tag-on-surface">{t}</li>)}
            </ul>
            <div className="card-actions">
              <button
                type="button"
                className="btn btn-ghost link-accent"
                onClick={(e) => { e.stopPropagation(); onOpen(p); }}
              >
                Details
              </button>
              <ProjectLinks links={p.links} className="btn btn-ghost link-text" />
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
