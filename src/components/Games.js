import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { getTopGames } from "../actions"

class Games extends Component {
  componentDidMount() {
    Adapter.getTopGames()
    .then(response => response.json())
    .then(res => 
      this.props.getTopGames(res)
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
        <h1 style={{textAlign: "center"}}>Top Games</h1>
        <div className="grid-container">
        { this.props.topGames.length > 0 
        ? 
        this.props.topGames.map( data => 
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
  topGames: state.topGames
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTopGames: (json) => dispatch(getTopGames(json))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Games);