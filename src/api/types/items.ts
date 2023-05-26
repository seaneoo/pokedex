/**
 * Defines all API models relating to items.
 * https://pokeapi.co/docs/v2#items-section
 */

import { EvolutionChain } from './evolution';
import { Version } from './games';
import { Pokemon } from './pokemon';
import {
  APIResource,
  Description,
  Effect,
  GenerationGameIndex,
  MachineVersionDetail,
  NamedAPIResource,
  Names,
  PokeAPIResource,
  VerboseEffect,
  VersionGroupFlavorText
} from './utility';

export type Item = PokeAPIResource &
  Names & {
    // The price of this item in stores.
    cost: number;
    // The power of the move Fling when used with this item.
    fling_power: number;
    // The effect of the move Fling when used with this item.
    fling_effect: NamedAPIResource<ItemFlingEffect>;
    // A list of attributes this item has.
    attributes: NamedAPIResource<ItemAttribute>[];
    // The category of items this item falls into.
    category: NamedAPIResource<ItemCategory>[];
    // The effect of this ability listed in different languages.
    effect_entries: VerboseEffect[];
    // The flavor text of this ability listed in different languages.
    flavor_text_entries: VersionGroupFlavorText[];
    // A list of game indices relevent to this item by generation.
    game_indices: GenerationGameIndex[];
    // A set of sprites used to depict this item in the game.
    sprites: ItemSprites;
    // A list of Pokémon that might be found in the wild holding this item.
    held_by_pokemon: ItemHolderPokemon[];
    // An evolution chain this item requires to produce a bay during mating.
    baby_trigger_for: APIResource<EvolutionChain>;
    // A list of the machines related to this item.
    machines: MachineVersionDetail[];
  };

export type ItemSprites = {
  // The default depiction of this item.
  default: string;
};

export type ItemHolderPokemon = {
  // The Pokémon that holds this item.
  pokemon: NamedAPIResource<Pokemon>;
  // The details for the version that this item is held in by the Pokémon.
  version_details: ItemHolderPokemonVersionDetail[];
};

export type ItemHolderPokemonVersionDetail = {
  // How often this Pokémon holds this item in this version.
  rarity: number;
  // The version that this item is held in by the Pokémon.
  version: NamedAPIResource<Version>;
};

export type ItemAttribute = PokeAPIResource &
  Names & {
    // A list of items that have this attribute.
    items: NamedAPIResource<Item>[];
    // The description of this item attribute listed in different languages.
    descriptions: Description[];
  };

export type ItemCategory = PokeAPIResource &
  Names & {
    // A list of items that have this attribute.
    items: NamedAPIResource<Item>[];
    // The pocket items in this category would be put in.
    pocket: NamedAPIResource<ItemPocket>;
  };

export type ItemFlingEffect = PokeAPIResource & {
  // The result of this fling effect listed in different languages.
  effect_entries: Effect[];
  // A list of items that have this attribute.
  items: NamedAPIResource<Item>[];
};

export type ItemPocket = PokeAPIResource &
  Names & {
    // A list of item categories that are relevant to this item pocket.
    categories: NamedAPIResource<ItemCategory>[];
  };
