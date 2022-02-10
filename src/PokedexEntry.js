import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { fetchSinglePokemon } from './services/fetch-utils';

export default function PokedexEntry() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  const history = useHistory();


  useEffect(() => {
    async function fetch() {
      const data = await fetchSinglePokemon(params.id);
      setPokemon(data);
    }

    fetch();
  }, [params.id]);

  return (
    <>
      <p onClick={history.goBack} style={ { cursor: 'pointer' } }>Return Home</p>
      <div className='pokedex-entry'>
        <div className={`pokedex-name ${pokemon.type_1}-bg`}>
          <h1>{pokemon.pokemon}</h1>
        </div>
        <div className='pokedex-name'>
          <h3>Height: {pokemon.height / 10}m</h3>
          <h3>Weight: {pokemon.weight / 10}kgs</h3>
        </div>
        <div className='pokedex-image'>
          <img src={pokemon.url_image} alt={`Illustration of ${pokemon.pokemon}`} />
        </div>
        <div className='pokedex-types'>
          <h2 className={`${pokemon.type_1}-bg`}>Type I: {pokemon.type_1}</h2>
          <h2 className={`${pokemon.type_2}-bg`}>Type II: {pokemon.type_2}</h2>
        </div>
        <div className='pokedex-abilities'>
          <h2>Ability 1: {pokemon.ability_1}</h2>
          <h2>Ability 2: {pokemon.ability_2}</h2>
        </div>
        <div className='pokedex-stats'>
          <h4>HP: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
          <h4>Speed: {pokemon.speed}</h4>
        </div>
      </div>
    </>
  );
}
