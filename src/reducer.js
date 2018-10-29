const defaultState = {
  topStreams: [],
  topGames: [],
  games: [],
}

function reducer(state=defaultState, action){
  switch(action.type){
    case "GET_TOP_GAMES":
      return {...state, topGames: action.event.data}
    case "GET_GAMES":
      return {...state, games: action.event.data}
    case "GET_STREAMS":
      return {...state, topStreams: action.event.data}
  default:
    return state
  }
}

export default reducer