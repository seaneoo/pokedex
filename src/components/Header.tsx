'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import ExternalLink from './ExternalLink';

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen(!open);

  return (
    <nav className="container flex flex-wrap items-center justify-between gap-4 p-4">
      <Link
        href="/"
        className="text-gradient from-red-400 to-red-500 text-4xl font-bold">
        Pokédex
      </Link>
      <button
        className="inline-flex items-center justify-center md:hidden"
        onClick={toggleNav}>
        <span className="sr-only">open main menu</span>
        <MenuIcon />
      </button>
      <div
        className={classNames(
          open ? 'flex' : 'hidden',
          'w-full flex-col items-center gap-2 border bg-gray-50 p-2 text-lg md:flex md:w-auto md:flex-row md:justify-center md:gap-4 md:border-none md:bg-transparent md:p-0 md:text-base'
        )}>
        <ExternalLink href="https://github.com/seaneoo/pokedex">
          GitHub
        </ExternalLink>
      </div>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="border-b">
      <Nav />
    </header>
  );
}
