import { PROFILE } from '../data.js';
import { ArrowRight, Github, Linkedin } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <Reveal as="section" id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero-main">
        <p className="badge">
          <span className="badge-dot" aria-hidden="true" />
          {PROFILE.openToWork}
        </p>
        <h1 id="hero-name" className="hero-name">{PROFILE.name}</h1>
        <p className="hero-role">{PROFILE.role}</p>
        <p className="hero-intro">{PROFILE.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-wide" href="#projects">
            View Projects <ArrowRight />
          </a>
          <a className="btn btn-icon btn-secondary icon-44" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a className="btn btn-icon btn-secondary icon-44" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </div>
      <dl className="facts">
        {PROFILE.facts.map((f) => (
          <div key={f.label} className="fact">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
