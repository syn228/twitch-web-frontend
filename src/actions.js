import Adapter from './components/Adapter'

export function getTopGames(json){
    return  {
      type: "GET_TOP_GAMES",
      event: json
    }
}

export function getGames(json){
  return  {
    type: "GET_GAMES",
    event: json
  }
}

export function getTopStreams(json){
  return  {
    type: "GET_TOP_STREAMS",
    event: json
  }
}

export function setCurrentChannel(channelID){
  return  {
    type: "SET_CHANNEL_ID",
    event: channelID
  }
}

export function gameStreamDisplay(gameID){
  //Dispatch is available through thunk. 
  //This ensures that the stream objects are ready when GameStreams page is rendered.
  return  (dispatch) => {
    Adapter.getGameStreams(gameID)
    .then(response => response.json())
    .then(json => dispatch(displayConfirm(json)))
  }
}

export function displayConfirm(json){
  return  {
    type: "GAME_DISPLAY_CONFIRM",
    event: json
  }
}