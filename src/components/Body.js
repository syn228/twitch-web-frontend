import React, { Component } from 'react';
import Adapter from './Adapter'
import { connect } from 'react-redux'
import { getStreams } from "../actions"

class Body extends Component {
  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "300x150")
  }

  componentDidMount() {
    Adapter.getStreams()
    .then(r => r.json())
    .then(res => this.props.getStreams(res) )
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
          <img src={this.replaceDimensions(data.thumbnail_url)} alt=""/>
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
    getStreams: (json) => dispatch(getStreams(json))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);