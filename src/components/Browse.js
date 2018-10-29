import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { getGames } from "../actions"

class Browse extends Component {
  componentDidMount() {
    Adapter.getGames()
    .then(r => r.json())
    .then(res => 
      this.props.getGames(res)
    )
  }

  handleClick = (event) => {
    window.location.replace(`http://twitch.tv/directory/game/${event.target.alt}`);
  }

  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "280x200")
  }
  
  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Browse Games</h1>
        <div className="grid-container">
        { this.props.games.length > 0 
        ? 
        this.props.games.map( data => 
        <div>
          <p> {data.name}</p>
          <img style={{cursor: "pointer"}} onClick={this.handleClick} src={this.replaceDimensions(data.box_art_url)} alt={data.name}/>
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
  games: state.games
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGames: (json) => dispatch(getGames(json))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Browse);