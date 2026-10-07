import { PROFILE } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <Reveal as="section" id="about" aria-labelledby="about-h" className="section about">
      <div className="about-side">
        <SectionHeading id="about-h" kicker="04 / About">About me</SectionHeading>
        <div className="edu">
          <p className="label">Education</p>
          <p className="edu-degree">B.Sc. Computer Science</p>
          <p className="edu-school">Afeka College of Engineering, 2026</p>
        </div>
      </div>
      <p className="about-text">{PROFILE.about}</p>
    </Reveal>
  );
}
