import React, { useState, useEffect, useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { AccountContext } from './auth/Account'
import Header from './universal/Header'
import Footer from './universal/Footer'
import AuthPage from './auth/AuthPage'
import Home from './home/Home'
import Profile from './profile/Profile'
import Artist from './artist/Artist'
import Store from './store/Store'

function HoverSounds() {
    const [status, setStatus] = useState(false)
    const [userType, setUserType] = useState('')
    const [userId, setUserId] = useState('')

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session)
                setStatus(true)
                setUserType(session.accessToken.payload['cognito:groups'][0])
                setUserId(session.sub)
            })
    }, [])

    return (
        <Router>
            <div className="App flex flex-col h-screen justify-between ease-in duration-300">
                <Header />
                <header className="App-header bg-white dark:bg-darkgray ease-in duration-300">
                </header>
                
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/auth" element={<AuthPage />}></Route>
                    <Route exact path="/profile" element={<Profile />}></Route>
                    <Route exact path="/artist/:artistId" element={<Artist userId={userId} userType={userType}/>}></Route>
                    {/* <Route exact path="/venue" element={<Venue />}></Route>
                    <Route exact path="/events" element={<Events />}></Route> */}
                    <Route exact path="/store" element={<Store userType={userType} artistId={userId}/>}></Route>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default HoverSounds