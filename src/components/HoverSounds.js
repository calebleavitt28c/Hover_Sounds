import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AccountContext } from './auth/Account'
import Header from './universal/Header'
import Footer from './universal/Footer'
import AuthPage from './auth/AuthPage'
import Home from './home/Home'
import Profile from './profile/Profile'
import Artist from './artist/Artist'
import Venue from './venue/Venue'
import Event from './event/Event'
import Store from './store/Store'
import Spotify from './spotify/Spotify'
import Callback from './spotify/Callback'
import { ToastContainer } from 'react-toastify'

function HoverSounds() {

    const [status, setStatus] = useState(false)
    const [userType, setUserType] = useState('')
    const [userId, setUserId] = useState('')

    const [favArtists, setFavArtists] = useState([])
    const [favVenues, setFavVenues] = useState([])

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session)
                setStatus(true)
                setUserType(session.accessToken.payload['cognito:groups'][0])
                setUserId(session.sub)
            }, reason => {
                setStatus(false)
                console.log("User not logged in. " + reason)
            })
    }, [])

    return (
        <Router>
            <div className="App flex flex-col h-screen max-h-screen justify-between dark:bg-darkgray ease-in duration-300">
                <Header status={status}/>          
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/auth" element={<AuthPage />}></Route>
                    <Route exact path="/profile" element={<Profile userType={userType} userId={userId}/>}></Route>
                    <Route path="/artist/:artistId" element={<Artist userType={userType} userId={userId} />}></Route>
                    <Route path="/venue/:venueId" element={<Venue userType={userType} userId={userId} />}></Route>
                    <Route path="/events/:venueId/:artistId/:eventId" element={<Event userType={userType} userId={userId} />}></Route> */
                    <Route exact path="/store/" element={<Store userType={userType} userId={userId}/>}></Route>
                    <Route exact path="/store/:artistId" element={<Store userType={userType} userId={userId}/>}></Route>
                    <Route exact path="/spotify" element={<Spotify />}></Route>
                    <Route path="/spotify/callback" element={<Callback />}></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default HoverSounds