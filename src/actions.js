import Adapter from './components/Adapter'

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