import { FEATURED } from '../data.js';
import { ArrowRight } from './Icons.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function FeaturedProjects({ onOpen }) {
  return (
    <section id="projects" aria-labelledby="projects-h" className="section">
      <Reveal className="section-head">
        <div>
          <SectionHeading id="projects-h" kicker="01 / Featured projects">Selected work</SectionHeading>
        </div>
        <p className="muted">Select a project for the full breakdown.</p>
      </Reveal>

      <div className="featured-list">
        {FEATURED.map((p, i) => (
          <Reveal as="article" key={p.id} className="featured" onClick={() => onOpen(p)}>
            {p.shot && (
              <figure className="shot">
                <img src={p.shot} alt={`Screenshot of ${p.title.split(':')[0]}`} loading="lazy" decoding="async" />
              </figure>
            )}
            <div className="featured-body">
              <div className="featured-meta">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="tag tag-accent tag-badge">{p.badge}</span>
              </div>
              <h3 className="featured-title">{p.title}</h3>
              <p className="featured-summary">{p.summary}</p>
              <ul aria-label="Tech stack" className="tag-list">
                {p.tech.map((t) => <li key={t} className="tag tag-neutral">{t}</li>)}
              </ul>
              <div className="card-actions">
                <button
                  type="button"
                  className="btn btn-primary btn-wide-sm"
                  onClick={(e) => { e.stopPropagation(); onOpen(p); }}
                >
                  Details <ArrowRight size={16} />
                </button>
                <ProjectLinks links={p.links} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
