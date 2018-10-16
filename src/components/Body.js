import React, { Component } from 'react';

class Body extends Component {
  replaceDimensions = (url) => {
    return url.replace(/{width}x{height}/gi, "100x100")
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