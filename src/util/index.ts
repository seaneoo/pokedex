import {
  LanguageCode,
  Names,
  PokemonSpecies,
  PokemonSpeciesVariety
} from '@/api/types';

export const getResourceName = <T>(
  type: T & Names,
  language: LanguageCode
): string => {
  return (
    type.names.find((name) => name.language.name === language)?.name || 'N/A'
  );
};

export const getDefaultVariety = (
  species: PokemonSpecies
): PokemonSpeciesVariety | undefined => {
  return species.varieties.find((variety) => variety.is_default) || undefined;
};
