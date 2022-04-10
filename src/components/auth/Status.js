import React, { useState, useContext, useEffect } from 'react'
import { AccountContext } from './Account'

//this is simply used to tell if a user is logged in or not
const Status = () => {
    const [status, setStatus] = useState(false)

    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session)
                setStatus(true)
            })
    }, [])

    return <div> {status ? (<button onClick={logout}>Logout</button>) : "Login"} </div>
}

export default Status