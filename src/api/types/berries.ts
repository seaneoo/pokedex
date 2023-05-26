/**
 * Defines all API models relating to berries.
 * https://pokeapi.co/docs/v2#berries-section
 */

import { ContestType } from './contests';
import { Item } from './items';
import { Type } from './pokemon';
import { NamedAPIResource, Names, PokeAPIResource } from './utility';

export type Berry = PokeAPIResource & {
  // Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
  growth_time: number;
  // The maximum number of these berries that can grow on one tree in Generation IV.
  max_harvest: number;
  // The power of the move "Natural Gift" when used with this Berry.
  natural_gift_power: number;
  // The size of this Berry, in millimeters.
  size: number;
  // The smoothness of this Berry, used in making Pokéblocks or Poffins.
  smoothness: number;
  // The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
  soil_dryness: number;
  // The firmness of this berry, used in making Pokéblocks or Poffins.
  firmness: NamedAPIResource<BerryFirmness>;
  // A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
  flavors: BerryFlavorMap[];
  // Berries are actually items. This is a reference to the item specific data for this berry.
  item: NamedAPIResource<Item>;
  // The type inherited by "Natural Gift" when used with this Berry.
  natural_gift_type: NamedAPIResource<Type>;
};

export type BerryFlavorMap = {
  // How powerful the referenced flavor is for this berry.
  potency: number;
  // The referenced berry flavor.
  flavor: NamedAPIResource<BerryFlavor>;
};

export type BerryFirmness = PokeAPIResource &
  Names & {
    // A list of the berries with this firmness.
    berries: NamedAPIResource<Berry>[];
  };

export type BerryFlavor = PokeAPIResource &
  Names & {
    // A list of the berries with this flavor.
    berries: FlavorBerryMap[];
    // The contest type that correlates with this berry flavor.
    contest_type: NamedAPIResource<ContestType>;
  };

export type FlavorBerryMap = {
  // How powerful the referenced flavor is for this berry.
  potency: number;
  // The berry with the referenced flavor.
  berry: NamedAPIResource<Berry>;
};
