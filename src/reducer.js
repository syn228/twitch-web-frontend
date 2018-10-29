const defaultState = {
  topStreams: [],
  topGames: [],
  games: [],
  currentChannelID: "",
  gameID: "",
  gameDisplay: [],
}

function reducer(state=defaultState, action){
  switch(action.type){
    case "GET_TOP_GAMES":
      return {...state, topGames: action.event.data}
    case "GET_GAMES":
      return {...state, games: action.event.data}
    case "GET_TOP_STREAMS":
      return {...state, topStreams: action.event.data}
    case "SET_CHANNEL_ID":
      return {...state, currentChannelID: action.event}
    case "GAME_STREAM_DISPLAY":
      return {...state, gameID: action.event}
    case "GAME_DISPLAY_CONFIRM":
      return {...state, gameDisplay: action.event.data}
  default:
    return state
  }
}

export default reducer