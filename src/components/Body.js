import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

class Body extends Component {
  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "300x150")
  }


  render() {
    return (
      <div className="main-body">
        { this.props.topStreams !== "" 
        ? 
        this.props.topStreams.data.map( data => 
          
        <div>
          <p> {data.title}</p>
          <img src={this.replaceDimensions(data.thumbnail_url)} alt=""/>
        </div>) 
        : 
        null}
      </div>
    );
  }
}

export default Body;