const BASE_URL = 'https://pokeapi.co/api/v2/';

const buildUrl = (...parts: string[]) => encodeURI(parts.join(''));

export const fetcher = async <T>(path: string): Promise<T> => {
  return await fetch(buildUrl(BASE_URL, path)).then((res) => res.json());
};
