import { useCallback, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MoreProjects from './components/MoreProjects.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import Skills from './components/Skills.jsx';
import Stats from './components/Stats.jsx';

export default function App() {
  const [project, setProject] = useState(null);
  const close = useCallback(() => setProject(null), []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="container">
        <Hero />
        <Stats />
        <FeaturedProjects onOpen={setProject} />
        <MoreProjects onOpen={setProject} />
        <Skills />
        <About />
      </main>
      <Contact />
      <Footer />
      {project && <ProjectModal project={project} onClose={close} />}
    </>
  );
}
