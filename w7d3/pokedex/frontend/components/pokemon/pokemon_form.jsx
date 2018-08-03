import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      move1: "",
      move2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  update(property, e) {
  return e => this.setState({ [property]: e.target.value });
}

  handleSubmit(event){
    let moves = [this.state.move1, this.state.move2];
    let pokemon = {
        name: this.state.name,
        image_url: this.state.image_url,
        poke_type: this.state.poke_type,
        attack: this.state.attack,
        defense: this.state.defense,
        moves: moves
      };
    this.props.createPokemon(pokemon);
  }


  render(){
    let types = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ].sort();

    return (
      <div>
        <label> Name:
          <input onChange={this.update("name")} ></input>
        </label>
        <label> Image URL:
          <input onChange={this.update("image_url")} ></input>
        </label>
        <label> Poke Type:
          <select onChange={this.update("poke_type")} >
            {types.map((type) => (
              <option value={type}>{type}</option>
            ))
            }
          </select>
        </label>
        <label> attack:
          <input onChange={this.update("attack")} ></input>
        </label>
        <label> defense:
          <input onChange={this.update("defense")} ></input>
        </label>
        <label> Move1:
          <input onChange={this.update("move1")} ></input>
        </label>
        <label> Move2:
          <input onChange={this.update("move2")} ></input>
        </label>
        <label>
          <button onClick={this.handleSubmit}>Submit</button>
        </label>
      </div>
    );
  }
  // ...
}

export default PokemonForm;
