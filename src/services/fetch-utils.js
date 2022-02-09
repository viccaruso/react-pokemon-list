import { checkError, client } from './client';

export async function fetchAllPokemon() {

  const response = await client
    .from('pokemon')
    .select();
  return checkError(response);
}