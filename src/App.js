import React from 'react';
import Logo from './Logo';
import BestPokemonFetcher from './BestPokemonFetcher';
import CaughtPokemon from './CaughtPokemon';
import './App.css';

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away', 'Invisible'];
  const date = new Date().toLocaleDateString()
  return (<div>
    <Logo appName = "Pidgey" />
    <BestPokemonFetcher abilities = {abilities} />
    <CaughtPokemon date = {date} />
  </div>)
  
}





export default App;

