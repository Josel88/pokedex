import React, { Component } from 'react';

class CaughtPokemon extends Component {
  state = {
    CaughtPokemon: 0
  };

  catch = () => {
    this.setState(previousState => {
      return {
        CaughtPokemon: previousState.CaughtPokemon + 1
      };
    });
  };

  render() {
    return (
      <div>
        <p> Caught {this.state.CaughtPokemon} Pokemon on </p> {this.props.date}
        <button onClick={this.catch}>Catch</button>
      </div>
    );
  }
}
export default CaughtPokemon;