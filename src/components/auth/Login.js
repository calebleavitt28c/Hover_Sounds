import React, { useState, useContext, useEffect } from "react"
import { AccountContext } from "./Account"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import Pool from "./FansPool"

//TODO: look up what a useState hook is 
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    const { getSession, authenticate } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                setLoggedIn(true)
            })
    })

    const onSubmit = (event) => {
        event.preventDefault()

        authenticate(email, password)
            .then(data => {
                console.log("Logged in!", data)
            })
            .catch(err => {
                console.error("Failed to login", err)
            })
    }

    return (
        <div>
            {(!loggedIn) && (
                <div>
                    <label>Login</label><br></br>
                    <form onSubmit={onSubmit}>
                        <input
                            className="text-text-base"
                            value={email}
                            placeholder="email"
                            onChange={(event) => setEmail(event.target.value)}
                        ></input><br></br>
                        
                        <input
                            className="text-text-base"
                            value={password}
                            type="password"
                            placeholder="password"
                            onChange={(event) => setPassword(event.target.value)}
                        ></input><br></br>
                        
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Login