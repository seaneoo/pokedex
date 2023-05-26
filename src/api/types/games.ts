/**
 * Defines all API models relating to games.
 * https://pokeapi.co/docs/v2#games-section
 */

import { Region } from './locations';
import { Move, MoveLearnMethod } from './moves';
import { Ability, PokemonSpecies, Type } from './pokemon';
import {
  Description,
  NamedAPIResource,
  Names,
  PokeAPIResource
} from './utility';

export type Generation = PokeAPIResource &
  Names & {
    // A list of abilities that were introduced in this generation.
    abilities: NamedAPIResource<Ability>[];
    // The main region travelled in this generation.
    main_region: NamedAPIResource<Region>;
    // A list of moves that were introduced in this generation.
    moves: NamedAPIResource<Move>[];
    // A list of Pokémon species that were introduced in this generation.
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
    // A list of types that were introduced in this generation.
    types: NamedAPIResource<Type>[];
    // A list of version groups that were introduced in this generation.
    version_groups: NamedAPIResource<VersionGroup>[];
  };

export type Pokedex = PokeAPIResource &
  Names & {
    // Whether or not this Pokédex originated in the main series of the video games.
    is_main_series: boolean;
    // The description of this resource listed in different languages.
    descriptions: Description[];
    // A list of Pokémon catalogued in this Pokédex and their indexes.
    pokemon_entries: PokemonEntry[];
    // The region this Pokédex catalogues Pokémon for.
    region: NamedAPIResource<Region>;
    // A list of version groups this Pokédex is relevant to.
    version_groups: NamedAPIResource<VersionGroup>[];
  };

export type PokemonEntry = {
  // The index of this Pokémon species entry within the Pokédex.
  entry_number: number;
  // The Pokémon species being encountered.
  pokemon_species: NamedAPIResource<PokemonSpecies>;
};

export type Version = PokeAPIResource &
  Names & {
    // The version group this version belongs to.
    version_group: NamedAPIResource<VersionGroup>;
  };

export type VersionGroup = PokeAPIResource & {
  // Order for sorting. Almost by date of release, except similar versions are grouped together.
  order: number;
  // The generation this version was introduced in.
  generation: NamedAPIResource<Generation>;
  // A list of methods in which Pokémon can learn moves in this version group.
  move_learn_methods: NamedAPIResource<MoveLearnMethod>[];
  // A list of Pokédexes introduces in this version group.
  pokedexes: NamedAPIResource<Pokedex>[];
  // A list of regions that can be visited in this version group.
  regions: NamedAPIResource<Region>[];
  // The versions this version group owns.
  versions: NamedAPIResource<Version>[];
};
