import React, { useState } from "react"
import FansPool from "../fanspool"
//TODO: look up what a useState hook is 
const Signup = () => {
    const [firstName, setFName] = useState("")
    const [lastName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        
        FansPool.Signup(firstName, lastName, email, phone, birthdate, password, [], null, (err, data) => {
            if (err) {
                console.error(err)
            }
            console.log(data)
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    value={firstName}
                    onChange={(event) => setFName(event.target.value)}
                ></input>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    value={lastName}
                    onChange={(event) => setLName(event.target.value)}
                ></input>
                <label htmlFor="email">Email</label>
                <input 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label htmlFor="phone">Phone</label>
                <input 
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                ></input>
                <label htmlFor="birthdate">Birthdate</label>
                <input 
                    value={birthdate}
                    onChange={(event) => setBirthdate(event.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup