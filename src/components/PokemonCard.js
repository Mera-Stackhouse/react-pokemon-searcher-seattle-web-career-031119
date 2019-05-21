import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    picture: 'front'
  }

  chooseImg = () => {
    if (this.state.picture === 'front') {
      return this.props.pokemon.sprites.front
    } else {
      return this.props.pokemon.sprites.back
    }
  }

  onClick = () => {
    if (this.state.picture === 'front') {
      this.setState({
        picture: 'back'
      })
    } else {
      this.setState({
        picture: 'front'
      })
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.onClick}>
            <img alt={this.props.pokemon.name} src={this.chooseImg()}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
