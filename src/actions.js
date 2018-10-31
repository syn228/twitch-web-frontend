import Adapter from './components/Adapter'

export function getTopGames(topGameObjects){
    return  {
      type: "GET_TOP_GAMES",
      event: topGameObjects
    }
}

export function getGames(gameObjects){
  return  {
    type: "GET_GAMES",
    event: gameObjects
  }
}

export function getTopStreams(topStreamObjects){
  return  {
    type: "GET_TOP_STREAMS",
    event: topStreamObjects
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
    .then(data => dispatch(displayConfirm(data)))
  }
}

export function displayConfirm(streamObjects){
  return  {
    type: "GAME_DISPLAY_CONFIRM",
    event: streamObjects
  }
}