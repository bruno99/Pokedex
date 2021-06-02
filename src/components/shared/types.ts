export interface PokemonProps {
  pokemonData: {
    name: string
    sprites: {
      back_female: string | null
      back_shiny_female: string | null
      back_default: string | null
      front_female: string | null
      front_shiny_female: string | null
      back_shiny: string | null
      front_default: string | null
      front_shiny: string | null
      [key: string]: string | null
    }
    types: TypeProps[]
    stats: Stat[]
    weight: number
    height: number
  }
  speciesData: SpeciesDataProps
  evolutionSprites: string[]
  evolutionNames: string[]
}

export interface SpeciesDataProps {
  flavor_text_entries: FlavorTextEntriesProps[]
  evolution_chain: {
    url: string
  }
}

interface FlavorTextEntriesProps {
  language: {
    name: string
  }
  flavor_text: string
}

export interface TypeProps {
  type: {
    name: string
  }
}

export interface Stat {
  stat: {
    name: string
  }
  base_stat: number
}



export type ChangePokemonIndex = (newIndex: number) => void
