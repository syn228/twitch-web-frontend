import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { displayConfirm } from '../actions'

class GameStreams extends Component {
  state = {
    streams: []
  }

  componentDidMount() {
    Adapter.getGameStreams(this.props.gameID)
    .then(r => r.json())
    .then( res => displayConfirm(res))
  }

  render() {
    debugger
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
  gameID: state.gameID,
  gameDisplay: state.gameDisplay
  }
}

function mapDispatchToProps(dispatch) {
  return {
    displayConfirm: (json) => dispatch(displayConfirm(json)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStreams);