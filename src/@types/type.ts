export interface Params {
  limit: number;
  offset: number;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}
