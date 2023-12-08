export type GrayColorVariant =
  | 'dark'
  | 'medium'
  | 'light'
  | 'background'
  | 'white';
export type typeColorVariant =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'normal'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type GrayColor = { [variant in GrayColorVariant]: string };
export type typeColor = { [variant in typeColorVariant]: string };

const grayscaleColors: GrayColor = {
  dark: '#212121',
  medium: '#666',
  light: '#E0E0E0',
  background: '#EFEFEF',
  white: '#fff',
};

const typeColors: typeColor = {
  bug: '#A7B723',
  dark: '#75574C',
  dragon: '#7037FF',
  electric: '#F9CF30',
  fairy: '#E69EAC',
  fighting: '#C12239',
  fire: '#F57D31',
  flying: '#A891EC',
  ghost: '#70559B',
  normal: '#AAA67F',
  grass: '#74CB48',
  ground: '#DEC16B',
  ice: '#9AD6DF',
  poison: '#A43E9E',
  psychic: '#FB5584',
  rock: '#B69E31',
  steel: '#B7B9D0',
  water: '#6493EB',
};

export const colors = {
  primary: '#DC0A2D',
  grayScale: grayscaleColors,
  type: typeColors,
};
