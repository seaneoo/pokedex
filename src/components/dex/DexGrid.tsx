'use client';

import { PokedexData } from '@/hooks/usePokedex';
import DexGridItem from './DexGridItem';

export default function DexGrid({ pokedexData }: { pokedexData: PokedexData }) {
  if (!pokedexData.data || pokedexData.isLoading || pokedexData.isError)
    return null;

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokedexData.data.map((entry, index) => {
        return (
          <DexGridItem key={index} pokemonName={entry.pokemon_species.name} />
        );
      })}
    </div>
  );
}
