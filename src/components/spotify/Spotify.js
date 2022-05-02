import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { SpotifyApiContext } from 'react-spotify-api'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import { ToastContainer, toast } from 'react-toastify'

const Spotify = () => {
  const [token, setToken] = useState(Cookies.get('spotifyAuthToken'))

  const goBack = () => {

  }

  return (
    <div className='grid place-items-center'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <p className='rounded-lg text-sm text-center font-semibold uppercase tracking-widest dark:text-lightgray'>
            Click the Spotify Icon to activate and return
          </p>
          <ToastContainer />
          {/* <button 
            onClick={goBack}
            className="inline-block px-6 py-2.5 my-2 w-full bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg transition ease-in duration-300">
            Return
          </button> */}
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <div className='bg-lightgray dark:bg-lightgray p-4 rounded-3xl'>
          <p className='rounded-lg text-sm text-center font-semibold uppercase tracking-widest pb-2'>Click to Login</p>
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