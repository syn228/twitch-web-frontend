import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { getGames, gameStreamDisplay } from "../actions"

class Browse extends Component {
  componentDidMount() {
    Adapter.getGames()
    .then(response => response.json())
    .then(res => 
      this.props.getGames(res)
    )
  }

  handleClick = (event) => {
    //Send the user to the page with streamers of selected game
    this.props.gameStreamDisplay(event.target.alt)
    this.props.history.push("gamestreams");
  }

  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "300x200")
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
          <img style={{cursor: "pointer"}} onClick={this.handleClick} src={this.replaceDimensions(data.box_art_url)} alt={data.id}/>
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
    getGames: (json) => dispatch(getGames(json)),
    gameStreamDisplay: (id) => dispatch(gameStreamDisplay(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Browse);