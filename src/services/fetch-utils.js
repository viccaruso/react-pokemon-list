import { checkError, client } from './client';

export async function fetchAllPokemon() {
  const response = await client
    .from('pokemon')
    .select();
    
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