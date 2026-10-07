// All site content lives here. Edit this file to update the portfolio.

export const PROFILE = {
  name: 'Ben',
  role: 'Software Engineer',
  intro:
    'I build intelligent software, from machine learning pipelines and autonomous AI agents to full-stack web and mobile apps.',
  openToWork: 'Open to work: Software Engineer roles',
  linkedin: 'https://www.linkedin.com/in/benserkis',
  github: 'https://github.com/BenSarks',
  facts: [
    { label: 'Degree', value: 'B.Sc. Computer Science, Afeka College of Engineering, 2026' },
    { label: 'Focus', value: 'Full-stack, AI/ML, systems' },
    { label: 'Stack', value: 'C++, Python, Java, C#, JavaScript' },
  ],
  about:
    "I'm a Computer Science graduate from Afeka College of Engineering who loves turning complex problems into clean, working software. My final project used machine learning to detect antisemitic content and misinformation across social media, trained on over 700,000 posts. I've built AI agents with A* pathfinding from scratch, a real-time vehicle diagnostics tool that talks directly to car hardware, and games and mobile apps across C++, Python, Java, and C#. I care about clean architecture, thoughtful design patterns, and software that's actually pleasant to use. I'm looking for a team where I can keep learning fast and ship things that matter.",
};

export const STATS = [
  { value: 700, suffix: 'K+', label: 'posts used to train my ML classifier' },
  { value: 7, suffix: '', label: 'shipped projects' },
  { value: 5, suffix: '', label: 'languages: C++, Python, Java, C#, JavaScript' },
  { text: 'Full stack', label: 'from hardware protocols to React dashboards' },
];

// Local images live in /public/assets. `links` only lists real URLs —
// add { label, href } entries here when a demo or video goes live.
export const FEATURED = [
  {
    id: 'misinfo',
    badge: 'Final Project',
    title: 'Misinformation & Antisemitism Post Identifier',
    shot: 'https://raw.githubusercontent.com/BenSarks/Antisemitism-Post-Monitor/master/demos/dashboard-overview.png',
    context: 'Final B.Sc. project, team of 2',
    summary:
      'A full-stack ML system that monitors Instagram and Reddit for antisemitic content and misinformation, classifies posts in real time, and visualizes trends on an analytics dashboard. Built in response to the surge of online antisemitic incitement after October 7th.',
    highlights: [
      'NLP classifier (scikit-learn, TF-IDF + SGDClassifier) trained on 700K+ labeled posts with class balancing',
      'OCR with EasyOCR to catch hateful text hidden in memes and images',
      'Extensible multi-platform scraper architecture with retry logic and rate limiting',
      'FastAPI + MySQL backend serving real-time inference',
      'React + Material UI dashboard with trend charts, hashtag word cloud, and flagged-account tracking',
    ],
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'scikit-learn', 'EasyOCR', 'React', 'Material UI', 'Docker'],
    links: [{ label: 'Repo', href: 'https://github.com/BenSarks/Antisemitism-Post-Monitor' }],
  },
  {
    id: 'pacman',
    badge: 'AI / Algorithms',
    title: 'AI-Powered Pac-Man',
    shot: 'https://raw.githubusercontent.com/BenSarks/Pacman/master/docs/gameplay.png',
    summary:
      'A fully autonomous Pac-Man simulation where Pac-Man and three ghosts are independent AI agents making real-time decisions. No human player, just algorithms competing.',
    highlights: [
      'A* pathfinding implemented from scratch (priority queue + Manhattan heuristic)',
      'Threat detection: Pac-Man switches to a Retreat state and runs BFS to the safest escape point when ghosts close in',
      'Agent behavior modeled as finite state machines using the State pattern',
      'Multi-agent interaction with independent ghost hunters',
      'Custom pixel-drawn sprites with smooth movement in OpenGL',
    ],
    tech: ['C++', 'OpenGL', 'GLUT/freeglut', 'GLEW'],
    links: [{ label: 'Repo', href: 'https://github.com/BenSarks/Pacman' }],
  },
  {
    id: 'obd',
    badge: 'Hardware Integration',
    title: 'Diagnostics: Cross-Platform OBD-II Vehicle Scanner',
    summary:
      "A desktop app that connects to any car's diagnostic port over USB or Bluetooth to read live engine data, trouble codes, and freeze-frame data in real time.",
    highlights: [
      'Clean two-layer architecture (UI-agnostic protocol backend + PySide6 GUI)',
      'All hardware I/O on a background thread communicating through Qt signals/slots, so the UI never freezes',
      'Live streaming engine dashboard',
      'Read and clear trouble codes with a safety confirmation',
      'In-app Bluetooth pairing assistant',
      'Light/dark themes',
    ],
    tech: ['Python', 'PySide6 (Qt)', 'python-obd', 'Multithreading', 'Serial/Bluetooth'],
    links: [{ label: 'Repo', href: 'https://github.com/BenSarks/OBD-II-Vehicle-Scanner' }],
  },
  {
    id: 'forglory',
    badge: 'Game Dev',
    title: 'For Glory: 3D Adventure & Card Battle Game',
    shot: '/assets/forglory.png',
    summary:
      'A Unity game combining first-person 3D exploration with turn-based card combat against an AI opponent, across three playable hero classes.',
    highlights: [
      'NavMesh-driven enemy AI with Animator state machines',
      'Data-driven cards and characters using ScriptableObjects',
      'Command Pattern for sequenced battle animations',
      'Rule-based AI opponent',
      'Persistent cross-scene game state',
    ],
    role: 'Built on a course card-battle framework. I built the 3D field mission, NPC AI, character selection, scene flow, class decks, and battle integration.',
    tech: ['Unity', 'C#', 'NavMesh', 'Animator', 'DOTween', 'ScriptableObjects'],
    links: [],
  },
  {
    id: 'inferno',
    badge: 'Game Dev',
    title: 'To the Inferno and Back',
    shot: '/assets/inferno.png',
    context: 'A 3D dark-fantasy adventure game · Unity 2023 · C#',
    summary:
      'A quiet visit to the library goes wrong, and the player ends up dragged through an office, into hell and down into a demon-filled dungeon. They have to fight their way through with spells, avoid wandering ghosts, and survive encounters with fire demons and succubi. I built the game in Unity with the Universal Render Pipeline for a university game-development workshop. It has five connected levels, scripted cutscenes and real-time combat.',
    highlights: [
      "Enemy AI: two enemy types built as state machines on Unity's NavMesh. They detect the player, chase, attack on a cooldown, defend and die, and each state has its own animation.",
      "Combat system: spell-casting with target selection, plus health and damage for enemies. When an enemy dies, its death animation plays and its colliders and behaviors are turned off so it can't keep acting.",
      'Player controllers: first-person and third-person movement built on CharacterController, with mouse look and blended movement animations.',
      'Interactive NPCs: NPCs that find their way to their targets, react when the player gets close, and play randomized voice lines and sound effects.',
      'Story and level flow: cutscenes built with Timeline that play when the player gets close, doors that open on triggers, and scene transitions across all five levels.',
    ],
    role: 'Environment art, character models and visual effects come from Unity Asset Store packs. All gameplay code and level design are my own work.',
    tech: ['Unity 2023.2', 'C#', 'URP', 'NavMesh', 'Animator (Mecanim)', 'Timeline', 'TextMeshPro'],
    links: [],
  },
  {
    id: 'parcel',
    badge: 'Mobile',
    title: 'Parcel Tracker: Android Package Tracking App',
    shot: 'https://raw.githubusercontent.com/BenSarks/Parcel-Tracker/master/docs/screenshots/packages_in_transit.png',
    summary:
      'An Android app for tracking packages with live map locations, delivery progress, and a built-in customer support ticket system.',
    highlights: [
      'Firebase Auth, Realtime Database, and Storage',
      'Google Maps with custom styling',
      'Full English/Hebrew (RTL) support and dark mode',
    ],
    tech: ['Java', 'Android SDK', 'Jetpack Navigation', 'Firebase', 'Google Maps SDK'],
    links: [{ label: 'Repo', href: 'https://github.com/BenSarks/Parcel-Tracker' }],
  },
];

export const MORE = [
  {
    id: 'orchestra',
    badge: 'C++ / OOP',
    title: 'Orchestra Management System',
    summary:
      "A C++ application for managing an orchestra's musicians, instruments, repertoire, and concerts, including automatic concert generation by target duration.",
    highlights: [
      'Polymorphic class hierarchy with multiple inheritance',
      'Singleton and Factory patterns',
      'Templated linked list written from scratch',
      'Custom exception hierarchy',
    ],
    tech: ['C++', 'STL', 'UML'],
    links: [],
  },
];

export const SKILLS = [
  { label: 'Languages', items: ['C++', 'Python', 'Java', 'C#', 'JavaScript', 'SQL'] },
  {
    label: 'Frameworks & libraries',
    items: ['React', 'Material UI', 'FastAPI', 'SQLAlchemy', 'scikit-learn', 'Unity', 'PySide6 (Qt)', 'Android SDK', 'OpenGL'],
  },
  { label: 'Tools & platforms', items: ['Docker', 'MySQL', 'Firebase', 'Git', 'Visual Studio'] },
  {
    label: 'Concepts',
    items: ['OOP & design patterns', 'Search algorithms (A*, BFS/DFS)', 'Finite state machines', 'Multi-agent systems', 'NLP', 'Multithreading'],
  },
];
