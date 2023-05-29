'use client';

import classNames from 'classnames';
import ExternalLink from '../ExternalLink';

export default function Nav({ className }: { className?: string }) {
  return (
    <nav className={classNames('flex gap-4', className)}>
      <ExternalLink href="https://github.com/seaneoo/pokedex">
        GitHub
      </ExternalLink>
    </nav>
  );
}
