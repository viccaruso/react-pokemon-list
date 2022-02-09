import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchAllPokemon } from './services/fetch-utils';
import './App.css';
import Home from './Home';
import PokemonList from './PokemonList';
import PokedexEntry from './PokedexEntry';

function App() {
  
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pokedex/:id' >
            <PokedexEntry />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
