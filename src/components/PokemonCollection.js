import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generatePokeCards = () => {
    return this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>My Pokemon Collection</h1>
        {this.generatePokeCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
