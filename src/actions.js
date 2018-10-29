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

export function getStreams(json){
  return  {
    type: "GET_STREAMS",
    event: json
  }
}