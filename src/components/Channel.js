import React, { Component } from 'react';
import { connect } from 'react-redux'

class Channel extends Component {
  render() {
    console.log("rendered", this.props.currentChannelID)
    const videoSource = `https://player.twitch.tv/?channel=${this.props.currentChannelID}`
    return (
      <div>
        {this.props.currentChannelID !== ""
        ?
        <iframe
            title="video-player"
            src={videoSource}
            height="300"
            width="400"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
        </iframe>
        :
        null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
  currentChannelID: state.currentChannelID
  }
}

export default connect(mapStateToProps)(Channel);