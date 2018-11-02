import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { getTopStreams, setCurrentChannel } from "../actions"


class Body extends Component {
  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "300x150")
  }

  componentDidMount() {
    Adapter.getTopStreams()
    .then(response => response.json())
    .then(res => this.props.getTopStreams(res) )
  }

  handleClick = (event) => {
    //Send the channelID to redux for state storage
    this.props.setCurrentChannel(event.target.alt)
    this.props.history.push("channel");
  }

  render() {
    console.log(this.props.topStreams)
    return (
      <div className="main-body">
        <h1>Top Streams</h1>
        <div className="grid-container">
        { this.props.topStreams.length > 0
        ? 
        this.props.topStreams.map( data => 
        <div>
          <p> {data.title}</p>
          <img style={{cursor: "pointer"}} onClick={this.handleClick} src={this.replaceDimensions(data.thumbnail_url)} alt={data.user_name}/>
          <p> {data.viewer_count} viewers</p>
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
  topStreams: state.topStreams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTopStreams: (json) => dispatch(getTopStreams(json)),
    setCurrentChannel: (channelID) => dispatch(setCurrentChannel(channelID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);