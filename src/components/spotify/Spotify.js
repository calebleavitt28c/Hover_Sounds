import React, { useState } from 'react'
import Cookies from 'js-cookie'

import { SpotifyApiContext } from 'react-spotify-api'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import { Link, useNavigate } from 'react-router-dom'

const Spotify = () => {
  const [token, setToken] = useState(Cookies.get('spotifyAuthToken'))
  const navigate = useNavigate()

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className='m-auto'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <p className='rounded-lg text-sm text-center font-semibold uppercase tracking-widest dark:text-lightgray'>
            You are logged into Spotify.
          </p>
          <br />
          <p className='rounded-lg text-sm text-center font-semibold uppercase tracking-widest dark:text-lightgray'>
            Click the Spotify Icon again
          </p>
          <p className='rounded-lg text-sm text-center font-semibold uppercase tracking-widest dark:text-lightgray'>
            to activate device. (bottom right)
          </p>
          <button 
            onClick={goBack}
            className="inline-block px-6 py-2.5 my-2 w-full bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg transition ease-in duration-300">
            Return
          </button>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <div className='dark:bg-lightgray p-4 rounded-3xl'>
          <SpotifyAuth
            redirectUri='http://localhost:3000/spotify/callback'
            clientID='69c20f98b37e41729bdb78027dc7c2ca'
            scopes={[Scopes.all]}
            onAccessToken={(token) => setToken(token)}
          />
        </div>
      )}
    </div>
  )
}

export default Spotify