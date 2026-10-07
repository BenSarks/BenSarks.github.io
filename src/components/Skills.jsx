import { SKILLS } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <Reveal as="section" id="skills" aria-labelledby="skills-h" className="section">
      <SectionHeading id="skills-h" kicker="03 / Skills">Toolkit</SectionHeading>
      <div className="skills">
        {SKILLS.map((g) => (
          <div key={g.label} className="skill-row">
            <h3>{g.label}</h3>
            <ul>
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
