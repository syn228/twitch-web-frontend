const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID

class Adapter {
  static getTopStreams(){
    let URL = "https://api.twitch.tv/helix/streams?first=20"
    let config =  {
    method:'GET',
    headers:{
        'Client-ID':`${CLIENT_ID}`,
            },
    }
    return fetch(URL, config)
  }

  static getTopGames(){
    let URL = "https://api.twitch.tv/helix/games/top?first=10"
    let config =  {
      method:'GET',
      headers:{
          'Client-ID':`${CLIENT_ID}`,
              },
      }
      return fetch(URL, config)
  }

  static getGames(){
    let URL = "https://api.twitch.tv/helix/games/top?first=25"
    let config =  {
      method:'GET',
      headers:{
          'Client-ID':`${CLIENT_ID}`,
              },
      }
      return fetch(URL, config)
  }

  static getGameStreams(gameID){
    let URL = `https://api.twitch.tv/helix/streams?first=20&game_id=${gameID}`
    let config =  {
    method:'GET',
    headers:{
        'Client-ID':`${CLIENT_ID}`,
            },
    }
    return fetch(URL, config)
  }
}

export default Adapter