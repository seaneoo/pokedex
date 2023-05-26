/**
 * Defines all API models relating to machines.
 * https://pokeapi.co/docs/v2#machines-section
 */

import { VersionGroup } from './games';
import { Item } from './items';
import { Move } from './moves';
import { NamedAPIResource } from './utility';

export type Machine = {
  // The identifier for this resource.
  id: number;
  // The TM or HM item that corresponds to this machine.
  item: NamedAPIResource<Item>;
  // The move that is taught by this machine.
  move: NamedAPIResource<Move>;
  // The version group that this machine applies to.
  version_group: NamedAPIResource<VersionGroup>;
};
