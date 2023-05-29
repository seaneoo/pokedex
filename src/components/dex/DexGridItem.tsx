'use client';

import usePokemon from '@/hooks/usePokemon';
import { getResourceName } from '@/util';
import classNames from 'classnames';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import Types from '../pokemon/Types';

function Wrapper({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div
      className={classNames(
        'min-h-[300px] rounded border bg-white p-4 md:max-w-[300px]',
        className
      )}>
      {children}
    </div>
  );
}

export default function DexGridItem({ pokemonName }: { pokemonName: string }) {
  const { species, pokemon, isLoading, isError } = usePokemon(pokemonName);

  if (!species || !pokemon || isLoading || isError)
    return (
      <Wrapper>
        <div className="mb-2 aspect-square h-auto w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mb-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mb-2 h-5 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="flex gap-2">
          <div className="h-5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </Wrapper>
    );

  const id = species.id.toString().padStart(3, '0');
  const name = getResourceName(species, 'en');

  const imageLoader = ({ src }: ImageLoaderProps) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}`;
  };

  return (
    <Link href={`/pokemon/${species.id}`}>
      <Wrapper>
        <Image
          className="mb-2 h-auto w-[300px] md:w-full"
          src={`${pokemon.id}.png`}
          loader={imageLoader}
          width={512}
          height={512}
          alt={name}
          title={name}
        />
        <p className="text-sm font-bold">#{id}</p>
        <p>{name}</p>
        <Types types={pokemon.types} />
      </Wrapper>
    </Link>
  );
}
