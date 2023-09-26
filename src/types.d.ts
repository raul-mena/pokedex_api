export interface PokemonResponse {
  data: {
    count: number
    next: string | null
    previous: string | null
    results: PokemonList[]
  }
}

export interface PokemonDetailsResponse {
  data: Pokemon
}

export interface PokemonList {
  name: string
  url: string
}

export interface Pokemon {
  abilities: Ability[]
  height: number
  held_items: any[]
  id: number
  name: string
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}
