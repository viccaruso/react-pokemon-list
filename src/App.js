import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
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
