import React, { useState, useEffect, useContext} from 'react'
import { AccountContext } from './auth/Account'
import Header from './universal/Header'
import Footer from './universal/Footer'
import Home from './home/Home'
import Artist from './artist/Artist'
import AuthPage from './auth/AuthPage'
import Store from './store/Store'

function HoverSounds() {
    const [status, setStatus] = useState(false)
    const [userType, setUserType] = useState('')

    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session)
                setStatus(true)
                setUserType(session.accessToken.payload["cognito:groups"])
            })
    }, [])

    return (
        <div className="App flex flex-col h-screen justify-between ease-in duration-300">
            <Header />
            <header className="App-header bg-white dark:bg-darkgray ease-in duration-300">
                {/* <AuthPage />
                <UserInfo /> */}
                <Store userTye={userType}/>
            </header>
            <Artist />
            <Footer />
        </div>
    )
}

export default HoverSounds