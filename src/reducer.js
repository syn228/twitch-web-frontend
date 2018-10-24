const defaultState = {
  topStreams: [],
  topGames: [],
}

function reducer(state=defaultState, action){
  switch(action.type){
    case "GET_GAMES":
      return {...state, topGames: action.payload}
  default:
    return state
  }
}

export default reducer