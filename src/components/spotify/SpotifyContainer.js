import axios from 'axios'
import React from 'react'

class SpotifyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "",
      artistName: "",
      albumName: "",
      playing: false,
      position: 0,
      duration: 0,
    };

    this.playerCheckInterval = null
  }

  handleLogin() {
    if (this.state.token !== '') {
      this.setState({ loggedIn: true })

      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000)
    }
  }

  checkForPlayer() {
    const { token } = this.state

    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval)

      this.player = new window.Spotify.Player({
        name: 'Hover Sounds',
        getOauthToken: cb => { cb(token) }
      })

      this.createEventHandlers()

      this.player.connect()
    }
  }

  createEventHandlers() {
    this.player.on('initialization_error', e => { console.error(e) })
    this.player.on('authentication_error', e => {
      console.error(e)
      this.setState({ loggedIn: false })
    })
    this.player.on('account_error', e => { console.error(e) })
    this.player.on('playback_error', e => { console.error(e) })

    this.player.on('player_state_changed', state => this.onStateChanged(state))

    this.player.on('ready', async data => {
      let { device_id } = data
      console.log('Play')
      await this.setState({ deviceId: device_id })
      this.transferPlaybackHere()
    })
  }

  onStateChanged(state) {
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window
      const trackName = currentTrack.name
      const albumName = currentTrack.album.name
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(', ')
      const playing = !state.paused
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing
      })
    }
  }

  onPrevClick() {
    this.player.previousTrack()
  }

  onPlayClick() {
    this.player.togglePlay()
  }

  onNextClick() {
    this.player.nextTrack()
  }

  transferPlaybackHere() {
    const { deviceId, token } = this.state

    axios.get('https://api.spotify.com/v1/me/player', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'device_ids': [ deviceId ],
        'play': true
      })
    })
  }

  back = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-backward-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z"/>
    </svg>
  )
  play = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
    </svg>
  )
  pause = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
    </svg>
  )
  next = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-forward-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.271 5.055a.5.5 0 0 1 .52.038L7.5 7.028V5.5a.5.5 0 0 1 .79-.407L11 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935a.5.5 0 0 1-.79-.407V8.972l-2.71 1.935A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445z"/>
    </svg>
  )
  render() {
    const { 
      token,
      loggedIn,
      artistName,
      trackName,
      albumName,
      error,
      position,
      duration,
      playing,
     } = this.state

    return (
      <div className="absolute bottom-2 right-12">
        {loggedIn ?
          (<div>
            <p>{artistName} - {trackName}</p>
            <button onClick={() => this.onPrevClick()} className="mr-2">
              {this.back}
            </button>
            <button onClick={() => this.onPlayClick()} className="mr-2">
              {playing ? this.pause : this.play}
            </button>
            <button onClick={() => this.onNextClick()} className="mr-2">
              {this.next}
            </button>
          </div>)
        :
        (<div>
          <a href="https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify" target="_blank" rel="noreferrer">
            Get your Spotify Token
          </a>
          <input type="text" value={token} onChange={e => this.setState({ token: e.target.value })} />
          <button onClick={() => this.handleLogin()}>Go</button>
        </div>)
      }
      </div>
    )
  }
}

export default SpotifyContainer