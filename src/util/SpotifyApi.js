
const SpotifyApi = {

  ladeLieder: async function(accessToken){

    let endpoint = "https://api.spotify.com/v1/me/tracks"
    let headers = {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }
    try {
      let response = await fetch(endpoint, headers)
      if(response.ok) {
        let jsonResponse = await response.json()
        return jsonResponse.items
      }
    } catch(error) {
      console.log(error)
    }
  },

  ladeLiederFake: function() {
    return import("./lieder.json").then(resolveValue =>{
      return resolveValue
    }).then(jsonResponse => {
      if(jsonResponse.items) {
        return jsonResponse.items
      }
    })
  }

}

export default SpotifyApi
