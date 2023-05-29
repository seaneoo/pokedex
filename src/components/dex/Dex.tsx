'use client';

import usePokedex from '@/hooks/usePokedex';
import { useState } from 'react';
import Pagination from '../Pagination';
import DexGrid from './DexGrid';

export default function Pokedex() {
  const [page, setPage] = useState(1);
  const data = usePokedex(1, page, 12);

  const handleChange = (value: number) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {data.data && (
        <>
          <Pagination
            currentPage={page}
            maxPage={data.totalPages}
            handleChange={handleChange}
          />
          <DexGrid pokedexData={data} />
        </>
      )}
    </div>
  );
}
