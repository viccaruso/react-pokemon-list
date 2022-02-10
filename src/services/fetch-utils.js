import { checkError, client } from './client';

export async function fetchPokemon(start = 1, end = 20) {
  const response = await client
    .from('pokemon')
    .select()
    .range(start, end);

  return checkError(response);
}

export async function fetchSinglePokemon(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}