/**
 * Defines all API models relating to Pokemon.
 * https://pokeapi.co/docs/v2#pokemon-section
 */

import { BerryFlavor } from './berries';
import { EvolutionChain } from './evolution';
import { Generation, Pokedex, Version, VersionGroup } from './games';
import { Item } from './items';
import { LocationArea, PalParkArea } from './locations';
import {
  Move,
  MoveBattleStyle,
  MoveDamageClass,
  MoveLearnMethod
} from './moves';
import {
  APIResource,
  Description,
  Effect,
  FlavorText,
  GenerationGameIndex,
  Language,
  Name,
  NamedAPIResource,
  Names,
  PokeAPIResource,
  VerboseEffect,
  VersionEncounterDetail,
  VersionGameIndex
} from './utility';

export type Ability = PokeAPIResource &
  Names & {
    // Whether or not this ability originated in the main series of the video games.
    is_main_series: boolean;
    // The generation this ability originated in.
    generation: NamedAPIResource<Generation>;
    // The effect of this ability listed in different languages.
    effect_entries: VerboseEffect[];
    // The list of previous effects this ability has had across version groups.
    effect_changes: AbilityEffectChange;
    // The flavor text of this ability listed in different languages.
    flavor_text_entries: AbilityFlavorText[];
    // A list of Pokémon that could potentially have this ability.
    pokemon: AbilityPokemon;
  };

export type AbilityEffectChange = {
  // The previous effect of this ability listed in different languages.
  effect_entries: Effect[];
  // The version group in which the previous effect of this ability originated.
  version_group: NamedAPIResource<VersionGroup>;
};

export type AbilityFlavorText = {
  // The localized name for an API resource in a specific language.
  flavor_text: string;
  // The language this text resource is in.
  language: NamedAPIResource<Language>;
  // The version group that uses this flavor text.
  version_group: NamedAPIResource<VersionGroup>;
};

export type AbilityPokemon = {
  // Whether or not this a hidden ability for the referenced Pokémon.
  is_hidden: boolean;
  // Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.
  slot: number;
  // The Pokémon this ability could belong to.
  pokemon: NamedAPIResource<Pokemon>;
};

export type Characteristic = {
  // The identifier for this resource.
  id: number;
  // The remainder of the highest stat/IV divided by 5.
  gene_modulo: number;
  // The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.
  possible_values: number[];
};

export type EggGroup = PokeAPIResource &
  Names & {
    // A list of all Pokémon species that are members of this egg group.
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

export type Gender = PokeAPIResource & {
  // A list of Pokémon species that can be this gender and how likely it is that they will be.
  pokemon_species_details: PokemonSpeciesGender[];
  // A list of Pokémon species that required this gender in order for a Pokémon to evolve into them.
  required_for_evolution: NamedAPIResource<PokemonSpecies>[];
};

export type PokemonSpeciesGender = {
  // The chance of this Pokémon being female, in eighths; or -1 for genderless.
  rate: number;
  // A Pokémon species that can be the referenced gender.
  pokemon_species: NamedAPIResource<PokemonSpecies>;
};

export type GrowthRate = PokeAPIResource & {
  // The formula used to calculate the rate at which the Pokémon species gains level.
  formula: string;
  // The descriptions of this characteristic listed in different languages.
  descriptions: Description[];
  // A list of levels and the amount of experienced needed to atain them based on this growth rate.
  levels: GrowthRateExperienceLevel[];
  // A list of Pokémon species that gain levels at this growth rate.
  pokemon_species: NamedAPIResource<PokemonSpecies>;
};

export type GrowthRateExperienceLevel = {
  // The level gained.
  level: number;
  // The amount of experience required to reach the referenced level.
  experience: number;
};

export type Nature = PokeAPIResource &
  Names & {
    // The stat decreased by 10% in Pokémon with this nature.
    decreased_stat: NamedAPIResource<Stat>;
    // The stat increased by 10% in Pokémon with this nature.
    increased_stat: NamedAPIResource<Stat>;
    // The flavor hated by Pokémon with this nature.
    hates_flavor: NamedAPIResource<BerryFlavor>;
    // The flavor liked by Pokémon with this nature.
    likes_flavor: NamedAPIResource<BerryFlavor>;
    // A list of Pokéathlon stats this nature effects and how much it effects them.
    pokeathlon_stat_changes: NatureStatChange[];
    // A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.
    move_battle_style_preferences: MoveBattleStylePreference[];
  };

export type NatureStatChange = {
  // The amount of change.
  max_change: number;
  // The stat being affected.
  pokeathlon_stat: NamedAPIResource<PokeathlonStat>;
};

export type MoveBattleStylePreference = {
  // Chance of using the move, in percent, if HP is under one half.
  low_hp_preference: number;
  // Chance of using the move, in percent, if HP is over one half.
  high_hp_preference: number;
  // The move battle style.
  move_battle_style: NamedAPIResource<MoveBattleStyle>;
};

export type PokeathlonStat = PokeAPIResource &
  Names & {
    // A detail of natures which affect this Pokéathlon stat positively or negatively.
    affecting_natures: NaturePokeathlonStatAffectSets;
  };

export type NaturePokeathlonStatAffectSets = {
  // A list of natures and how they change the referenced Pokéathlon stat.
  increase: NaturePokeathlonStatAffect[];
  // A list of natures and how they change the referenced Pokéathlon stat.
  decrease: NaturePokeathlonStatAffect[];
};

export type NaturePokeathlonStatAffect = {
  // The maximum amount of change to the referenced Pokéathlon stat.
  max_change: number;
  // The nature causing the change.
  nature: NamedAPIResource<Nature>;
};

export type Pokemon = PokeAPIResource &
  Names & {
    // The base experience gained for defeating this Pokémon.
    base_experience: number;
    // The height of this Pokémon in decimetres.
    height: number;
    // Set for exactly one Pokémon used as the default for each species.
    is_default: boolean;
    // Order for sorting. Almost national order, except families are grouped together.
    order: number;
    // The weight of this Pokémon in hectograms.
    weight: number;
    // A list of abilities this Pokémon could potentially have.
    abilities: PokemonAbility[];
    // A list of forms this Pokémon can take on.
    forms: NamedAPIResource<PokemonForm>[];
    // A list of game indices relevent to Pokémon item by generation.
    game_indices: VersionGameIndex[];
    // A list of items this Pokémon may be holding when encountered.
    held_items: PokemonHeldItem[];
    // A link to a list of location areas, as well as encounter details pertaining to specific versions.
    location_area_encounters: string;
    // A list of moves along with learn methods and level details pertaining to specific version groups.
    moves: PokemonMove[];
    // A list of details showing types this pokémon had in previous generations
    past_types: PokemonTypePast[];
    // A set of sprites used to depict this Pokémon in the game.
    sprites: PokemonSprites;
    // The species this Pokémon belongs to.
    species: NamedAPIResource<PokemonSpecies>;
    // A list of base stat values for this Pokémon.
    stats: PokemonStat[];
    // A list of details showing types this Pokémon has.
    types: PokemonType[];
  };

export type PokemonAbility = {
  // Whether or not this is a hidden ability.
  is_hidden: boolean;
  // The slot this ability occupies in this Pokémon species.
  slot: number;
  // The ability the Pokémon may have.
  ability: NamedAPIResource<Ability>;
};

export type PokemonType = {
  // The order the Pokémon's types are listed in.
  slot: number;
  // The type the referenced Pokémon has.
  type: NamedAPIResource<Type>;
};

export type PokemonFormType = {
  // The order the Pokémon's types are listed in.
  slot: number;
  // The type the referenced Form has.
  type: NamedAPIResource<Type>;
};

export type PokemonTypePast = {
  // The last generation in which the referenced pokémon had the listed types.
  generation: NamedAPIResource<Generation>;
  // The types the referenced pokémon had up to and including the listed generation.
  types: PokemonType[];
};

export type PokemonHeldItem = {
  // The item the referenced Pokémon holds.
  item: NamedAPIResource<Item>;
  // The details of the different versions in which the item is held.
  version_details: PokemonHeldItemVersion[];
};

export type PokemonHeldItemVersion = {
  // The version in which the item is held.
  version: NamedAPIResource<Version>;
  // How often the item is held.
  rarity: number;
};

export type PokemonMove = {
  // The move the Pokémon can learn.
  move: NamedAPIResource<Move>;
  // The details of the version in which the Pokémon can learn the move.
  version_group_details: PokemonMoveVersion[];
};

export type PokemonMoveVersion = {
  // The method by which the move is learned.
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  // The version group in which the move is learned.
  version_group: NamedAPIResource<VersionGroup>;
  // The minimum level to learn the move.
  level_learned_at: number;
};

export type PokemonStat = {
  // The stat the Pokémon has.
  stat: NamedAPIResource<Stat>;
  // The effort points (EV) the Pokémon has in the stat.
  effort: number;
  // The base value of the stat.
  base_stat: number;
};

export type PokemonSprites = {
  // The default depiction of this Pokémon from the front in battle.
  front_default: string;
  // The shiny depiction of this Pokémon from the front in battle.
  front_shiny: string;
  // The female depiction of this Pokémon from the front in battle.
  front_female: string;
  // The shiny female depiction of this Pokémon from the front in battle.
  front_shiny_female: string;
  // The default depiction of this Pokémon from the back in battle.
  back_default: string;
  // The shiny depiction of this Pokémon from the back in battle.
  back_shiny: string;
  // The female depiction of this Pokémon from the back in battle.
  back_female: string;
  // The shiny female depiction of this Pokémon from the back in battle.
  back_shiny_female: string;
};

export type LocationAreaEncounter = {
  // The location area the referenced Pokémon can be encountered in.
  location_area: NamedAPIResource<LocationArea>;
  // A list of versions and encounters with the referenced Pokémon that might happen.
  version_details: VersionEncounterDetail[];
};

export type PokemonColor = PokeAPIResource &
  Names & {
    // A list of the Pokémon species that have this color.
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

export type PokemonForm = PokeAPIResource &
  Names & {
    // The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.
    order: number;
    // The order in which forms should be sorted within a species' forms.
    form_order: number;
    // True for exactly one form used as the default for each Pokémon.
    is_default: boolean;
    // Whether or not this form can only happen during battle.
    is_battle_only: boolean;
    // Whether or not this form requires mega evolution.
    is_mega: boolean;
    // The name of this form.
    form_name: string;
    // The Pokémon that can take on this form.
    pokemon: NamedAPIResource<Pokemon>;
    // A list of details showing types this Pokémon form has.
    types: PokemonFormType[];
    // A set of sprites used to depict this Pokémon form in the game.
    sprites: PokemonFormSprites;
    // The version group this Pokémon form was introduced in.
    version_group: NamedAPIResource<VersionGroup>;
    // The form specific form name of this Pokémon form, or empty if the form does not have a specific name.
    form_names: Name[];
  };

export type PokemonFormSprites = {
  // The default depiction of this Pokémon form from the front in battle.
  front_default: string;
  // The shiny depiction of this Pokémon form from the front in battle.
  front_shiny: string;
  // The default depiction of this Pokémon form from the back in battle.
  back_default: string;
  // The shiny depiction of this Pokémon form from the back in battle.
  back_shiny: string;
};

export type PokemonHabitat = PokeAPIResource &
  Names & {
    // A list of the Pokémon species that can be found in this habitat.
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

export type PokemonShape = PokeAPIResource &
  Names & {
    // The "scientific" name of this Pokémon shape listed in different languages.
    awesome_names: AwesomeName[];
    // A list of the Pokémon species that have this shape.
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

export type AwesomeName = {
  // The localized "scientific" name for an API resource in a specific language.
  awesome_name: string;
  // The language this "scientific" name is in.
  language: NamedAPIResource<Language>;
};

export type PokemonSpecies = PokeAPIResource &
  Names & {
    // The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.
    order: number;
    // The chance of this Pokémon being female, in eighths; or -1 for genderless.
    gender_rate: number;
    // The base capture rate; up to 255. The higher the number, the easier the catch.
    capture_rate: number;
    // The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.
    base_happiness: number;
    // Whether or not this is a baby Pokémon.
    is_baby: boolean;
    // Whether or not this is a legendary Pokémon.
    is_legendary: boolean;
    // Whether or not this is a mythical Pokémon.
    is_mythical: boolean;
    // Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.
    hatch_counter: number;
    // Whether or not this Pokémon has visual gender differences.
    has_gender_differences: boolean;
    // Whether or not this Pokémon has multiple forms and can switch between them.
    forms_switchable: boolean;
    // The rate at which this Pokémon species gains levels.
    growth_rate: NamedAPIResource<GrowthRate>;
    // A list of Pokedexes and the indexes reserved within them for this Pokémon species.
    pokedex_numbers: PokemonSpeciesDexEntry[];
    // A list of egg groups this Pokémon species is a member of.
    egg_groups: NamedAPIResource<EggGroup>[];
    // The color of this Pokémon for Pokédex search.
    color: NamedAPIResource<PokemonColor>;
    // The shape of this Pokémon for Pokédex search.
    shape: NamedAPIResource<PokemonShape>;
    // The Pokémon species that evolves into this Pokemon_species.
    evolves_from_species: NamedAPIResource<PokemonSpecies>;
    // The evolution chain this Pokémon species is a member of.
    evolution_chain: APIResource<EvolutionChain>;
    // The habitat this Pokémon species can be encountered in.
    habitat: NamedAPIResource<PokemonHabitat>;
    // The generation this Pokémon species was introduced in.
    generation: NamedAPIResource<Generation>;
    // A list of encounters that can be had with this Pokémon species in pal park.
    pal_park_encounters: PalParkEncounterArea[];
    // A list of flavor text entries for this Pokémon species.
    flavor_text_entries: FlavorText[];
    // Descriptions of different forms Pokémon take on within the Pokémon species.
    form_descriptions: Description[];
    // The genus of this Pokémon species listed in multiple languages.
    genera: Genus[];
    // A list of the Pokémon that exist within this Pokémon species.
    varieties: PokemonSpeciesVariety[];
  };

export type Genus = {
  // The localized genus for the referenced Pokémon species
  genus: string;
  // The language this genus is in.
  language: NamedAPIResource<Language>;
};

export type PokemonSpeciesDexEntry = {
  // The index number within the Pokédex.
  entry_number: number;
  // The Pokédex the referenced Pokémon species can be found in.
  pokedex: NamedAPIResource<Pokedex>;
};

export type PalParkEncounterArea = {
  // The base score given to the player when the referenced Pokémon is caught during a pal park run.
  base_score: number;
  // The base rate for encountering the referenced Pokémon in this pal park area.
  rate: number;
  // The pal park area where this encounter happens.
  area: NamedAPIResource<PalParkArea>;
};

export type PokemonSpeciesVariety = {
  // Whether this variety is the default variety.
  is_default: boolean;
  // The Pokémon variety.
  pokemon: NamedAPIResource<Pokemon>;
};

export type Stat = PokeAPIResource &
  Names & {
    // ID the games use for this stat.
    game_index: number;
    // Whether this stat only exists within a battle.
    is_battle_only: boolean;
    // A detail of moves which affect this stat positively or negatively.
    affecting_moves: MoveStatAffectSets;
    // A detail of natures which affect this stat positively or negatively.
    affecting_natures: NatureStatAffectSets;
    // A list of characteristics that are set on a Pokémon when its highest base stat is this stat.
    characteristics: APIResource<Characteristic>[];
    // The class of damage this stat is directly related to.
    move_damage_class: NamedAPIResource<MoveDamageClass>;
  };

export type MoveStatAffectSets = {
  // A list of moves and how they change the referenced stat.
  increase: MoveStatAffect[];
  // A list of moves and how they change the referenced stat.
  decrease: MoveStatAffect[];
};

export type MoveStatAffect = {
  // The maximum amount of change to the referenced stat.
  change: number;
  // The move causing the change.
  move: NamedAPIResource<Move>;
};

export type NatureStatAffectSets = {
  // A list of natures and how they change the referenced stat.
  increase: MoveStatAffect[];
  // A list of nature sand how they change the referenced stat.
  decrease: MoveStatAffect[];
};

export type Type = PokeAPIResource &
  Names & {
    // A detail of how effective this type is toward others and vice versa.
    damage_relations: TypeRelations;
    // A list of details of how effective this type was toward others and vice versa in previous generations
    past_damage_relations: TypeRelationsPast[];
    // A list of game indices relevent to this item by generation.
    game_indices: GenerationGameIndex[];
    // The generation this type was introduced in.
    generation: NamedAPIResource<Generation>;
    // The class of damage inflicted by this type.
    move_damage_class: NamedAPIResource<MoveDamageClass>;
    // A list of details of Pokémon that have this type.
    pokemon: TypePokemon[];
    // A list of moves that have this type.
    moves: NamedAPIResource<Move>[];
  };

export type TypePokemon = {
  // The order the Pokémon's types are listed in.
  slot: number;
  // The Pokémon that has the referenced type.
  pokemon: NamedAPIResource<Pokemon>;
};

export type TypeRelations = {
  // A list of types this type has no effect on.
  no_damage_to: NamedAPIResource<Type>[];
  // A list of types this type is not very effect against.
  half_damage_to: NamedAPIResource<Type>[];
  // A list of types this type is very effect against.
  double_damage_to: NamedAPIResource<Type>[];
  // A list of types that have no effect on this type.
  no_damage_from: NamedAPIResource<Type>[];
  // A list of types that are not very effective against this type.
  half_damage_from: NamedAPIResource<Type>[];
  // A list of types that are very effective against this type.
  double_damage_from: NamedAPIResource<Type>[];
};

export type TypeRelationsPast = {
  // The last generation in which the referenced type had the listed damage relations
  generation: NamedAPIResource<Generation>;
  // The damage relations the referenced type had up to and including the listed generation
  damage_relations: TypeRelations;
};
