import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const POKE_URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  constructor() {
    super()

    this.state = {
      pokemon: [],
      searchArray: []
    }

    fetch(POKE_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data,
        searchArray: data
      })
    })
  }

  handleSearch = (ev, { value }) => {
    const newArray = this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      searchArray: newArray
    })
  }

  handleSubmit = (ev) => {
    console.log('here')
    const newPokemon = {
      'name': ev.target.name.value,
      'stats': [{}, {}, {}, {}, {}, {'value': ev.target.hp.value, 'name': "hp"}],
      'sprites': {
        'front': ev.target.frontUrl.value,
        'back': ev.target.backUrl.value
      }
    }
    console.log(newPokemon)
    this.setState({
      pokemon: [...this.state.pokemon, newPokemon],
      searchArray: [...this.state.pokemon, newPokemon]
    })
    fetch(POKE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.searchArray} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
