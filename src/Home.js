import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';

export default function Home() {
  // set up state
  const [pokemans, setPokemans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);


  useEffect(() => {
    async function fetch() {
      const start = perPage * (currentPage - 1);
      const end = start + (perPage - 1);

      setPokemans(await fetchPokemon(start, end));
    }

    fetch();
  }, [currentPage, perPage]);

  return (
    <div>
      <h4>
        <span onClick={() => { currentPage === 1 ? null : setCurrentPage(currentPage - 1); }}>{'<< '}</span>
        Page: {currentPage}
        <span onClick={() => { pokemans.length ? setCurrentPage(currentPage + 1) : null; }}>{' >>'}</span>
        <select value={perPage} onChange={e => setPerPage(e.target.value)}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </h4>
      <PokemonList pokemans={pokemans} />
    </div >
  );
}
