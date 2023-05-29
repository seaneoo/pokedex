'use client';

import Nav from './Nav';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex flex-wrap items-center justify-center p-4">
        <span className="text-gradient-brand text-4xl font-black">POKéDEX</span>
        <Nav className="flex flex-1 justify-end" />
      </div>
    </header>
  );
}
