import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePokemon } from './services/fetch-utils';

export default function PokedexEntry() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const data = await fetchSinglePokemon(params.id);
      setPokemon(data);
    }

    fetch();

  }, [params.id]);

  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  );
}
