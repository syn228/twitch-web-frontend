import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'

class Games extends Component {
  state = {
    games: ""
  }

  componentDidMount() {
    Adapter.getGames()
    .then(r => r.json())
    .then(res => 
      this.setState({
        games: res
      })
    )
  }

  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "280x200")
  }
  
  render() {
    console.log("games", this.state.games)
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Top Games</h1>
        <div className="grid-container">
        { this.state.games !== "" 
        ? 
        this.state.games.data.map( data => 
        <div>
          <p> {data.name}</p>
          <img src={this.replaceDimensions(data.box_art_url)} alt=""/>
        </div>) 
        : 
        null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
  topGames: state.topGames
  }
}

export default connect(mapStateToProps)(Games);