import axios from 'axios'
import React from 'react'

class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
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
      <div>
        {loggedIn ?
          (<div>
            <p>Artist: {artistName}</p>
            <p>Track: {trackName}</p>
            <p>Album: {albumName}</p>
            <button onClick={() => this.onPrevClick()}>Previous</button>
            <button onClick={() => this.onPlayClick()}>{playing ? "Pause" : "Play"}</button>
            <button onClick={() => this.onNextClick()}>Next</button>
          </div>)
        :
        (<div className="Spotify-Intro">
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

export default Spotify