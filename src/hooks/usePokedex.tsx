'use client';

import { fetcher } from '@/api';
import { Pokedex, PokemonEntry } from '@/api/types';
import useSWR from 'swr';

export type PokedexData = {
  data: PokemonEntry[] | undefined;
  isLoading: boolean;
  isError: Error | undefined;
  totalPages: number;
};

export default function usePokedex(
  dex: number = 1,
  page: number = 1
): PokedexData {
  const { data, error, isLoading } = useSWR<Pokedex, Error>(
    `pokedex/${dex}`,
    fetcher<Pokedex>
  );

  const startIndex = (page - 1) * 20;
  const endIndex = startIndex + 20;
  const slicedData = data?.pokemon_entries.slice(startIndex, endIndex);

  const totalPages = !data ? 0 : Math.ceil(data.pokemon_entries.length / 20);

  return {
    data: slicedData,
    isLoading,
    isError: error,
    totalPages
  };
}
