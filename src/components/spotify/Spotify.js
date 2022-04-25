import React, { useState } from 'react'
import Cookies from 'js-cookie'

import { SpotifyApiContext } from 'react-spotify-api'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'

const Spotify = () => {
  const [token, setToken] = useState(Cookies.get('spotifyAuthToken'))

  return (
    <div className='spotify'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here */}
          <p>You are authorized with token: {token}</p>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='69c20f98b37e41729bdb78027dc7c2ca'
          scopes={[Scopes.all]}
          onAccessToken={(token) => setToken(token)}
        />
      )}
    </div>
  )
}

export default Spotify