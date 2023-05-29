'use client';

import { fetcher } from '@/api';
import { Pokemon, PokemonSpecies } from '@/api/types';
import useSWR from 'swr';

export default function usePokemon(id: string | number) {
  const {
    data: speciesData,
    error: speciesError,
    isLoading: speciesLoading
  } = useSWR<PokemonSpecies, Error>(
    `pokemon-species/${id}`,
    fetcher<PokemonSpecies>
  );

  const {
    data: pokemonData,
    error: pokemonError,
    isLoading: pokemonLoading
  } = useSWR<Pokemon, Error>(`pokemon/${id}`, fetcher<Pokemon>);

  return {
    species: speciesData,
    pokemon: pokemonData,
    isLoading: speciesLoading || pokemonLoading,
    isError: speciesError || pokemonError
  };
}
