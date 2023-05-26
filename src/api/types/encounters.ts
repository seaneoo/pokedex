/**
 * Defines all API models relating to encounters.
 * https://pokeapi.co/docs/v2#encounters-section
 */

import { Name, NamedAPIResource, Names, PokeAPIResource } from './utility';

export type EncounterMethod = PokeAPIResource &
  Names & {
    // A good value for sorting.
    order: number;
  };

export type EncounterCondition = PokeAPIResource &
  Name & {
    // A list of possible values for this encounter condition.
    values: NamedAPIResource<EncounterConditionValue>[];
  };

export type EncounterConditionValue = PokeAPIResource &
  Name & {
    // The condition this encounter condition value pertains to.
    condition: NamedAPIResource<EncounterCondition>;
  };
