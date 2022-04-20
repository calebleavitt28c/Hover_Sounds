import React, { useState, useEffect, useContext} from 'react'
import { AccountContext } from './auth/Account'
import Header from './universal/Header'
import Footer from './universal/Footer'
import Home from './home/Home'
import Profile from './profile/Profile'
import Artist from './artist/Artist'
import AuthPage from './auth/AuthPage'
import Store from './store/Store'

function HoverSounds() {
    const [status, setStatus] = useState(false)
    const [page, setPage] = useState('')
    const [userType, setUserType] = useState('')
    const [artistId, setArtistId] = useState('')

    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session)
                setStatus(true)
                setPage('home')
                setUserType(session.accessToken.payload['cognito:groups'][0])
                setArtistId(session.sub)
            })
    }, [])

    const choosePage = (name) => {
        setPage(name)
    }

    return (
        <div>
            {status ? (
                <div className="App flex flex-col h-screen justify-between ease-in duration-300">
                    <Header 
                        choosePage={choosePage}
                    />
                    <header className="App-header bg-white dark:bg-darkgray ease-in duration-300">
                        {page == 'home' && (
                            <Home />
                        )}
                        
                        {page == 'profile' && (
                            <Profile />
                        )}

                        {page == 'artist' && (
                            <Artist />
                        )}

                        {page == 'store' && (
                            <Store 
                                userType={userType}
                                artistId={artistId}
                            />
                        )}
                    </header>
                    <Footer/>
                </div>
            ) : <AuthPage />}
        </div>
    )
}

export default HoverSounds