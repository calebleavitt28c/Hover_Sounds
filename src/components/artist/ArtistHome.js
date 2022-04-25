import axios from 'axios'
import React from 'react'
import Cookies from 'js-cookie'

import Pool from '../auth/UserPool'

class ArtistHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: Cookies.get('spotifyAuthToken'),
      favorited: false,
      deviceId: ''
    }
  }

  openHeart = '<svg class="bi bi-heart text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>'
  closedHeart = '<svg class="bi bi-heart-fill text-pink" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>'
  play = '<svg class="bi bi-play-circle-fill text-black hover:text-primary dark:text-white dark:hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>'

  playClick = () => {
    const { token } = this.state

    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    let body = `{"context_uri":"spotify:artist:${this.props.spotifyId}","position_ms":0}`

    axios.get('https://api.spotify.com/v1/me/player/devices', { headers })
      .then(response => {
        for (let device of response.data.devices) {
          if (device.name === 'Hover Sounds') {
            this.setState({ deviceId: device.id })
            
            let options = {
              url: `https://api.spotify.com/v1/me/player/play?device_id=${device.id}`,
              method: 'PUT',
              headers: headers,
              body: body
            }
            
            fetch(options.url, {
              method: 'PUT',
              headers,
              body
            })
          }
        }
      })
  }

  heartClick = () => {
    const { artistId, fanId } = this.props
    let favoriteBtn = document.getElementById('favoriteBtn')

    if (this.state.favorited) {
      favoriteBtn.innerHTML = this.openHeart
      favoriteBtn.classList.remove('filled')
      axios.post('https://api.hoveringrecords.com/hover/favorite', {
        table: 'artists',
        id: artistId,
        fanId: fanId,
        dir: '-'
      })
      .then(response => {

        console.log('unfavorited')
        this.setState({ favorited: false })
      })
    }
    else {
      favoriteBtn.innerHTML = this.closedHeart
      favoriteBtn.classList.add('filled')
      axios.post('https://api.hoveringrecords.com/hover/favorite', {
        table: 'artists',
        id: artistId,
        fanId: fanId,
        dir: '+'
      })
      .then(response => {

        console.log('favorited')
        this.setState({ favorited: true })
      })
    }
  }

  componentDidMount() {
    let favoriteBtn = document.getElementById('favoriteBtn')
    let playBtn = document.getElementById('playBtn')

    playBtn.innerHTML = this.play

    favoriteBtn.innerHTML = this.openHeart

    getSession()
      .then(session => {
        axios.get(`https://api.hoveringrecords.com/hover/fans/${session.sub}`)
        .then(response => {
          let data = response.data.Item
          if (data.hasOwnProperty('favArtists')) {
            if (data.favArtists.indexOf(this.props.artistId) > -1) {
              this.setState({ favorited: true })
              favoriteBtn.innerHTML = this.closedHeart
            }
          }
        })
      })
  }

  render() {
    return(
      <div className="flex items-center justify-between border-2 dark:border-primary">
          <h1 className="ml-2 text-xl text-center">{this.props.name}</h1>
          <div className="inline-block mt-2">
            <button id="playBtn" 
              className="mr-2 ease-in duration-300"
              onClick={this.playClick}
              >
            </button>
            <button id="favoriteBtn" 
              className="mr-2 ease-in duration-300 filled"
              onClick={this.heartClick}>
            </button>
          </div>
      </div>
    );
  }
}

const getSession = async () => {
  return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
          user.getSession(async (err, session) => {
              if (err) {
                  reject()
              } else {
                  const attributes = await new Promise((resolve, reject) => {
                      user.getUserAttributes((err, attributes) => {
                          if (err) {
                              reject(err) 
                          } else {
                              const results = {}

                              for (let attribute of attributes) {
                                  const { Name, Value } = attribute
                                  results[Name] = Value
                              }
                              resolve(results)
                          }
                      })
                  })
                  resolve({ user, ...session, ...attributes })
              }
          })
      } else {
          reject()
      }
  })
}

export default ArtistHome