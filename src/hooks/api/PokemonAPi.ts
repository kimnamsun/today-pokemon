import { Params } from '../../@types/type';
import { Api } from '../../utils/requester';
import { useQuery } from '@tanstack/react-query';

const PokeApi = {
  getPokemonList: () => {
    Api.get<Params, Response>('https://pokeapi.co/api/v2/pokemon', {
      limit: 10,
      offset: 0,
    });
  },
};

const useGetPokemonList = () => {
  const queryKey = ['pokemon-list'];

  return useQuery(queryKey, PokeApi.getPokemonList);
};

export { PokeApi, useGetPokemonList };
