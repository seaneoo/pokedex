'use client';

import { fetcher } from '@/api';
import useSWR from 'swr';

const usePokeAPI = <T,>(path: string, slug: string | number = '') => {
  const { data, error, isLoading } = useSWR<T, Error>(
    `${path}/${slug}`,
    fetcher<T>
  );

  return { data, isError: error, isLoading };
};

export default usePokeAPI;
