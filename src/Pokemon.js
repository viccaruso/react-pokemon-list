import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {

  function setGradient({ type_1, type_2, color_1 }) {
    if (type_2 !== 'NA') {
      return {
        background:
          `linear-gradient(161deg, 
          var(--${type_1}-bg-color) 60%, 
          var(--${type_2}-bg-color) 100%)`
      };
    } else {
      return {
        background: `linear-gradient(161deg, 
        var(--${type_1}-bg-color) 60%, 
        ${color_1} 100%)`
      };
    }
  }

  

  return (
    <div className={`pokemon-card`} style={setGradient(pokemon)}>
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

