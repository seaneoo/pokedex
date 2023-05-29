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
  page: number = 1,
  perPage: number = 20
): PokedexData {
  const { data, error, isLoading } = useSWR<Pokedex, Error>(
    `pokedex/${dex}`,
    fetcher<Pokedex>
  );

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const slicedData = data?.pokemon_entries.slice(startIndex, endIndex);

  const totalPages = !data
    ? 0
    : Math.ceil(data.pokemon_entries.length / perPage);

  return {
    data: slicedData,
    isLoading,
    isError: error,
    totalPages
  };
}
