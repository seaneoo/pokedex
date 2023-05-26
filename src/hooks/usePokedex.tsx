'use client';

import { fetcher } from '@/api';
import { Pokedex } from '@/api/types';
import { useState } from 'react';
import useSWR from 'swr';

export default function usePokedex(dex: number = 1) {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR<Pokedex, Error>(
    `pokedex/${dex}`,
    fetcher<Pokedex>
  );

  const startIndex = (page - 1) * 20;
  const endIndex = startIndex + 20;
  const slicedData = data?.pokemon_entries.slice(startIndex, endIndex);

  const totalPages = !data ? 0 : Math.ceil(data.pokemon_entries.length / 20);

  const incrementPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const decrementPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    data: slicedData,
    isLoading,
    isError: error,
    totalPages,
    currentPage: page,
    incrementPage,
    decrementPage
  };
}
