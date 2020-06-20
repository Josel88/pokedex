import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away', 'Invisible'];
  const date = new Date().toLocaleDateString()
  return (<div>
    <Logo appName = "Pikachu" />
    <BestPokemon abilities = {abilities} />
    <CaughtPokemon date = {date} />
  </div>)
  
}





export default App;

