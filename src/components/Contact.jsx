import { PROFILE } from '../data.js';
import { Github, Linkedin } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="contact">
      <Reveal className="contact-inner">
        <p className="contact-kicker">05 / Contact</p>
        <h2 id="contact-h" className="contact-title">Let&apos;s build something together.</h2>
        <div className="contact-actions">
          <a className="btn btn-inverse" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn <Linkedin size={18} />
          </a>
          <a className="btn btn-inverse" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            See my GitHub <Github size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
