import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {

  return (
    <div className={`pokemon-card ${pokemon.type_1}-bg`}>
      <Link to={`/pokedex/${pokemon.id}`} >
        <div>
          <h3>{pokemon.pokemon}</h3>
          <img src={pokemon.url_image} />
          <p>Type I: {pokemon.type_1}</p>
          <p>Type II: {pokemon.type_2}</p>
          <p>Gen {pokemon.generation_id} </p>
        </div>
      </Link>
    </div>
  );
}
