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
                    <label id="switch" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        <span>Sign up or  Log in</span>
                        <div className="flex justify-center">
                            <div className="form-check form-switch">
                                <input 
                                    className="form-check-input 
                                        appearance-none 
                                        w-9 
                                        -ml-10 
                                        rounded-full 
                                        float-left 
                                        h-5 
                                        align-top 
                                        bg-primary 
                                        bg-no-repeat 
                                        bg-contain
                                        bg-secondary
                                        focus:outline-none 
                                        cursor-pointer 
                                        shadow-sm"
                                    type="checkbox"
                                    role="switch"
                                    value={logOrSign}
                                    onChange={(event => setLogOrSign(!logOrSign))}
                                />
                            </div>
                         </div>
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