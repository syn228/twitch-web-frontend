import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { displayConfirm, setCurrentChannel } from '../actions'

class GameStreams extends Component {
  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "300x150")
  }

  handleClick = (event) => {
    //Send the channelID to redux for state storage
    this.props.setCurrentChannel(event.target.alt)
    this.props.history.push("channel");
  }

  render() {
    return (
      <div>
        <div className="grid-container">
        { this.props.gameDisplay.length > 0
        ? 
        this.props.gameDisplay.map( data => 
        <div>
          <p> {data.title}</p>
          <img style={{cursor: "pointer"}} onClick={this.handleClick} src={this.replaceDimensions(data.thumbnail_url)} alt={data.user_name}/>
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
  gameDisplay: state.gameDisplay
  }
}

function mapDispatchToProps(dispatch) {
  return {
    displayConfirm: (json) => dispatch(displayConfirm(json)),
    setCurrentChannel: (channelID) => dispatch(setCurrentChannel(channelID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStreams);