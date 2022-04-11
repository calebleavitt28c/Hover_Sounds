import React, { useState, useContext, useEffect } from "react"
import { AccountContext } from "./Account"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import Pool from "./UserPool"

//TODO: look up what a useState hook is 
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { authenticate } = useContext(AccountContext)

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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Login</label><br></br>
            <form onSubmit={onSubmit}>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={email}
                    placeholder="email"
                    onChange={(event) => setEmail(event.target.value)}
                ></input><br></br>
                
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={password}
                    type="password"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                ></input><br></br>
                
                <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </form>
        </div>
    )
}

export default Login