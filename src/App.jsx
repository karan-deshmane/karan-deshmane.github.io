import { useEffect, useState } from "react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karandeshmane/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.3H7v11.2H3.4V9.3Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7v5.9h-3.6v-5.2c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.3H9.2V9.3Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/karan-deshmane",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />
      </svg>
    ),
  },
];

function CursorTracker() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <span
      className="cursor-tracker"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <main className="page-shell">
      <CursorTracker />
      <section className="intro" aria-label="Introduction">
        <h1>Karan Deshmane</h1>
        <p>AI | Web Development</p>

        <nav className="social-links" aria-label="Social links">
          {links.map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              {icon}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}

export default App;
