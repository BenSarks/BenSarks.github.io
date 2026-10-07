import { useEffect, useRef } from 'react';
import { ArrowUpRight, Close } from './Icons.jsx';

export default function ProjectModal({ project: m, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  // Lock page scroll, focus the close button, close on Escape, restore focus on exit.
  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [onClose]);

  const trapTab = (e) => {
    if (e.key !== 'Tab') return;
    const f = dialogRef.current.querySelectorAll('a[href], button');
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <div className="dialog-backdrop modal-backdrop" onClick={onClose}>
      <div
        ref={dialogRef}
        className="dialog modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={trapTab}
      >
        <div className="modal-top">
          <span className="tag tag-accent tag-badge">{m.badge}</span>
          <button ref={closeRef} type="button" className="btn btn-icon btn-secondary icon-44" onClick={onClose} aria-label="Close">
            <Close />
          </button>
        </div>
        <div>
          <h2 id="modal-title" className="modal-title">{m.title}</h2>
          {m.context && <p className="modal-context muted">{m.context}</p>}
        </div>
        <p className="modal-summary">{m.summary}</p>

        <div className="modal-block">
          <h3 className="modal-label">Highlights</h3>
          <ul className="highlights">
            {m.highlights.map((h) => (
              <li key={h}><span className="bullet" aria-hidden="true" /><span>{h}</span></li>
            ))}
          </ul>
        </div>

        {m.role && (
          <div className="modal-block">
            <h3 className="modal-label">My role</h3>
            <p className="modal-role">{m.role}</p>
          </div>
        )}

        <div className="modal-block">
          <h3 className="modal-label">Tech</h3>
          <ul className="tag-list">
            {m.tech.map((t) => <li key={t} className="tag tag-neutral">{t}</li>)}
          </ul>
        </div>

        {m.links.length > 0 && (
          <div className="card-actions">
            {m.links.map((l) => (
              <a key={l.href} className="btn btn-primary btn-wide-sm" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <ArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
