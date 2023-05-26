'use client';

import ExternalLink from './ExternalLink';

function Nav() {
  return (
    <nav className="flex flex-1 items-center justify-end gap-4">
      <ExternalLink href="https://github.com/seaneoo/pokedex">
        GitHub
      </ExternalLink>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-center gap-4 p-4">
        <span className="text-4xl font-bold">Pokédex</span>
        <Nav />
      </div>
    </header>
  );
}
