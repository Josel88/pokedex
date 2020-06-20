import React, { Component } from 'react';

class BestPokemon extends Component{
    state = {
      pokemonNames: [],
      isLoading: true,
  };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
      .then(res => res.json())
      .then(data => {
        const names = [data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name]
        this.setState({
          pokemonNames: names,
          isLoading: false
        })
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <span>Loading...</span> :
        <>
          <h2>Names</h2>
          <ul>
            {this.state.pokemonNames.map((name, index) => {
            return (
              <li key={index}>{name}</li>
            )
          })}
          </ul>
          <h2>Abilities</h2>
          <ul>
            {this.props.abilities.map((name, index) => {
            return (
              <li key={index}>{name}</li>
            )
          })}
          </ul>
        </>
        }
      </div>
    )
  }
}

export default BestPokemon;