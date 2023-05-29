'use client';

import usePokemon from '@/hooks/usePokemon';
import { getResourceName } from '@/util';
import { notFound } from 'next/navigation';

export default function Pokemon({ pid }: { pid: string }) {
  const { species, pokemon, isLoading, isError } = usePokemon(pid);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError || !species || !pokemon) {
    return notFound();
  }

  const id = species.id.toString().padStart(3, '0');
  const name = getResourceName(species, 'en');

  return (
    <div>
      <h2 className="text-2xl font-semibold">#{id}</h2>
      <h1 className="text-6xl font-bold">{name}</h1>
    </div>
  );
}
