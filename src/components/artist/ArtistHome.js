import axios from 'axios'
import React from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Pool from '../auth/UserPool'

class ArtistHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: Cookies.get('spotifyAuthToken'),
      favorited: false,
      deviceId: Cookies.get('deviceId'),
      playClicks: 0
    }
  }

  openHeart = '<svg class="bi bi-heart text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>'
  closedHeart = '<svg class="bi bi-heart-fill text-pink" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>'
  play = '<svg class="bi bi-play-circle-fill text-black hover:text-primary dark:text-white dark:hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>'
  shuffle = '<svg class="text-black hover:text-primary dark:text-white dark:hover:text-primary" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m256 512c-141.159 0-256-114.841-256-256s114.841-256 256-256 256 114.841 256 256-114.841 256-256 256zm114.661-230.337c-7.141-7.143-18.719-7.14-25.86 0-7.142 7.142-7.142 18.719 0 25.86l9.912 9.912h-38.669c-11.701 0-22.103-4.97-31.796-15.195-6.949-7.328-18.522-7.637-25.852-.689-7.329 6.949-7.638 18.522-.689 25.852 16.737 17.654 36.365 26.604 58.336 26.604h38.668l-9.912 9.912c-7.142 7.141-7.142 18.719 0 25.859 3.57 3.572 8.25 5.357 12.929 5.357s9.359-1.785 12.929-5.357l41.127-41.127c7.142-7.141 7.142-18.719 0-25.86zm0-159.441c-7.141-7.143-18.719-7.141-25.86 0-7.142 7.142-7.142 18.719 0 25.86l9.912 9.912h-38.669c-20.003 0-48.937 7.943-73.177 45.782l-54.276 84.722c-12.474 19.472-26.337 28.937-42.382 28.937h-33.066c-10.098 0-18.286 8.187-18.286 18.285s8.187 18.286 18.286 18.286h33.065c20.004 0 48.937-7.943 73.177-45.782l54.276-84.722c12.474-19.472 26.337-28.937 42.382-28.937h38.669l-9.912 9.912c-7.142 7.14-7.142 18.719 0 25.859 3.57 3.571 8.25 5.356 12.929 5.356s9.359-1.785 12.929-5.356l41.127-41.127c7.142-7.141 7.142-18.719 0-25.859zm-257.518 72.344h33.064c11.702 0 22.104 4.971 31.796 15.194 3.595 3.793 8.43 5.705 13.273 5.705 4.516 0 9.041-1.663 12.577-5.016 7.33-6.947 7.639-18.521.69-25.85-16.736-17.654-36.362-26.605-58.336-26.605h-33.065c-10.098 0-18.286 8.188-18.286 18.286.001 10.099 8.189 18.286 18.287 18.286z" fill-rule="evenodd"/></svg>'
  
  playClick = () => {
    const { token, playClicks, deviceId } = this.state

    if (Cookies.get('spotifyAuthToken') !== undefined) {
      let url = 'https://api.spotify.com/v1/me/player/'
      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      this.setState({ playClicks: playClicks + 1 })
      if (playClicks === 0) {
        let playBtn = document.getElementById('playBtn')
        playBtn.innerHTML = this.shuffle
      }
      else if (playClicks > 0) {
        fetch(`${url}shuffle?state=true&device_id=${deviceId}`, {
          method: 'PUT',
          headers
        })
      }
  
      let body = `{"context_uri":"spotify:artist:${this.props.spotifyId}","position_ms":0}`
  
      axios.get(`${url}devices`, { headers })
        .then(async response => {

          for (let device of response.data.devices) {
            if (device.name === 'Hover Sounds') {
              this.setState({ deviceId: device.id })
              console.log('This Spotify Device:', device.id)
  
              let options = {
                method: 'PUT',
                headers,
                body
              }
              
              await fetch(`${url}play?device_id=${device.id}`, options)
              break
            }
          }
  
        })
    }
    else {
      toast.error('Click the Spotify Icon', {
        position: 'bottom-right',
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
      })
    }
  }

  heartClick = () => {
    const { artistId, fanId } = this.props
    let artistFavoriteBtn = document.getElementById('artistFavoriteBtn')

    if (this.state.favorited) {
      axios.post('https://api.hoveringrecords.com/hover/favorite', {
        table: 'artists',
        id: artistId,
        fanId: fanId,
        dir: '-'
      })
      .then(response => {
        artistFavoriteBtn.innerHTML = this.openHeart
        artistFavoriteBtn.classList.remove('filled')
        console.log('unfavorited')
        this.setState({ favorited: false })
        toast.info(`Unfavorited ${this.props.name}`, {
          position: 'bottom-right',
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        })
      })
      .catch(err => {
        console.error(err)
        toast.error('Error unfavoriting.', {
          position: 'bottom-right',
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        })
      })
    }
    else {
      axios.post('https://api.hoveringrecords.com/hover/favorite', {
        table: 'artists',
        id: artistId,
        fanId: fanId,
        dir: '+'
      })
      .then(response => {
        artistFavoriteBtn.innerHTML = this.closedHeart
        artistFavoriteBtn.classList.add('filled')
        console.log('favorited')
        this.setState({ favorited: true })
        toast.info(`Favorited ${this.props.name}`, {
          position: 'bottom-right',
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        })
      })
      .catch(err => {
        console.error(err)
        toast.error('Error favoriting.', {
          position: 'bottom-right',
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        })
      })
    }
  }

  componentDidMount() {
    let playBtn = document.getElementById('playBtn')
    playBtn.innerHTML = this.play
    if (this.props.userType === 'fans') {
      let artistFavoriteBtn = document.getElementById('artistFavoriteBtn')
  
      artistFavoriteBtn.innerHTML = this.openHeart
  
      getSession()
        .then(session => {
          axios.get(`https://api.hoveringrecords.com/hover/fans/${session.sub}`)
          .then(response => {
            let data = response.data.Item
            if (data.hasOwnProperty('favArtists')) {
              if (data.favArtists.indexOf(this.props.artistId) > -1) {
                this.setState({ favorited: true })
                artistFavoriteBtn.innerHTML = this.closedHeart
              }
            }
          })
        })
    }
  }

  render() {
    return(
      <div>
        <div className="flex items-center justify-between border-b">
          { this.props.event ? (
            <Link to={`/artist/${this.props.artistId}`}>
              <h1 className="ml-2 text-xl text-center font-semibold uppercase tracking-widest">{this.props.name}</h1>
            </Link>
          )
          :
          <h1 className="ml-2 text-xl text-center font-semibold uppercase tracking-widest">{this.props.name}</h1>
          }
          <div className="inline-block mt-2">
            <button id="playBtn" 
              className="mr-2 ease-in duration-300"
              onClick={this.playClick}
              >
            </button>
            { this.props.userType === 'fans' ? (
              <button id="artistFavoriteBtn" 
                className="mr-2 ease-in duration-300 filled"
                onClick={this.heartClick}>
              </button>
            )
            :
            (<div></div>)}
          </div>
        </div>
        <ToastContainer toastStyle={{  }}/>
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