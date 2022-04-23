import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AccountContext } from './Account'

//this is simply used to tell if a user is logged in or not
const Status = () => {
    let navigate = useNavigate()

    const [status, setStatus] = useState(false)

    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                // console.log("Session: ", session)
                setStatus(true)
            })
    }, [])

    const logUserOut = () => {
        logout()
        navigate('/auth')
    }

    return (
    <div className="grid grid-cols-4 mb-2">
        <div className="col-span-1"></div>
        {status ? (
            <button onClick={(event) => logUserOut()} className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Logout</button>
            ) : <Link to="/auth" className="block uppercase col-span-4 text-center tracking-wide text-gray text-xs font-bold">Login</Link>} 
        <div className="col-span-1"></div>
    </div> )
}

export default Status