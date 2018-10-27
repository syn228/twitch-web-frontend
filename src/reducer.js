const defaultState = {
  topStreams: [],
  topGames: [],
}

function reducer(state=defaultState, action){
  switch(action.type){
    case "GET_GAMES":
      return {...state, topGames: action.event.data}
  default:
    return state
  }
}

export default reducer