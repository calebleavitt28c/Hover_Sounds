import React, {useState, useContext, useEffect } from 'react'
import { AccountContext } from "./Account"
import Signup from './Signup'
import Login from './Login'

const AuthPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [logOrSign, setLogOrSign] = useState(true)

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                setLoggedIn(true)
            })
    })

    return (
        <div>
            {!loggedIn && (
                <div>
                    <label id="switch">
                        <span>Sign up or  Log in</span>
                        <input 
                            type="checkbox"
                            value={logOrSign}
                            onChange={(event => setLogOrSign(!logOrSign))}
                         />
                        <span id="slider"></span>
                    </label><br></br>
                    {logOrSign && (
                        <div>
                            <Signup /><br></br>
                        </div>
                    )}
                    {!logOrSign && (
                        <dvi>
                            <Login />
                        </dvi>
                    )}
                </div>
            )}
        </div>
    )
}

export default AuthPage