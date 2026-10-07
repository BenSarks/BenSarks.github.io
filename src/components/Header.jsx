import { PROFILE } from '../data.js';

const LINKS = [
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
];

export default function Header() {
  return (
    <header className="nav site-header">
      <a href="#top" className="nav-brand">{PROFILE.name}</a>
      <nav aria-label="Primary" className="site-nav">
        {LINKS.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
