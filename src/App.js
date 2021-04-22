import React, {useState} from 'react'
import axios from 'axios'

import './App.css';
import SearchBar from './components/SearchBar';
import Home from './components/Home';

function App() {

  const [searchedPokemon, setSearchedPokemon] = useState({results: 'init'})

  const pokeSearch = (search) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(r => setSearchedPokemon(r.data))
      .catch(error => {
        setSearchedPokemon({});
      });
  }
  
  return (
    <div className="App">
      <SearchBar pokeSearch={pokeSearch} />
      <Home searchedPokemon={searchedPokemon} />
    </div>
  );
}

export default App;
