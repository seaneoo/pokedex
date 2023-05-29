'use client';

import ExternalLink from '../ExternalLink';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-1 flex-col items-center justify-center p-4 text-center text-sm text-stone-600">
        <p>
          <span className="text-gradient-brand font-black">POKéDEX</span> was
          made by{' '}
          <ExternalLink href="https://seano.dev/">
            Sean O&apos;Connor
          </ExternalLink>
          .
        </p>
        <p>
          &quot;Pokémon&quot; is property of Nintendo Co., Ltd., Creatures Inc.,
          and Game Freak Inc.
        </p>
        <p>
          Data obtained from the{' '}
          <ExternalLink href="https://pokeapi.co/">PokéAPI</ExternalLink>.
        </p>
      </div>
    </footer>
  );
}
