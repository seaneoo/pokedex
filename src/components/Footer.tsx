import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <p>
            &quot;Pokémon&quot; is property of Nintendo Co., Ltd., Creatures
            Inc., and Game Freak Inc.
          </p>
          <p>
            Data obtained from the{' '}
            <ExternalLink href="https://pokeapi.co/">PokéAPI</ExternalLink>.
          </p>
        </div>
      </div>
    </footer>
  );
}
