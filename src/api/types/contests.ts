/**
 * Defines all API models relating to contests.
 * https://pokeapi.co/docs/v2#contests-section
 */

import { BerryFlavor } from './berries';
import { Move } from './moves';
import {
  Effect,
  FlavorText,
  Language,
  NamedAPIResource,
  Names,
  PokeAPIResource
} from './utility';

export type ContestType = PokeAPIResource &
  Names & {
    // The berry flavor that correlates with this contest type.
    berry_flavor: NamedAPIResource<BerryFlavor>;
  };

export type ContestName = {
  // The name for this contest.
  name: string;
  // The color associated with this contest's name.
  color: string;
  // The language that this name is in.
  language: NamedAPIResource<Language>;
};

export type ContestEffect = {
  // The identifier for this resource.
  id: number;
  // The base number of hearts the user of this move gets.
  appeal: number;
  // The base number of hearts the user's opponent loses.
  jam: number;
  // The result of this contest effect listed in different languages.
  effect_entries: Effect[];
  // The flavor text of this contest effect listed in different languages.
  flavor_text_entries: FlavorText[];
};

export type SuperContestEffect = {
  // The identifier for this resource.
  id: number;
  // The level of appeal this super contest effect has.
  appeal: number;
  // The flavor text of this contest effect listed in different languages.
  flavor_text_entries: FlavorText[];
  // A list of moves that have the effect when used in super contests.
  moves: NamedAPIResource<Move>[];
};
