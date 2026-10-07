import { PROFILE } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <a href="#top">Back to top</a>
    </footer>
  );
}
