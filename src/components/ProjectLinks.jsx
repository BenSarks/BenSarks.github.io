import { ArrowUpRight } from './Icons.jsx';

export default function ProjectLinks({ links, className = 'btn btn-secondary' }) {
  return links.map((l) => (
    <a key={l.href} className={className} href={l.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
      {l.label} <ArrowUpRight size={15} />
    </a>
  ));
}
