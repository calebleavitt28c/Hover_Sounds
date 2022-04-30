import React, { useState, useContext, } from "react"
import { AccountContext } from "./Account"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

const Login = () => {
    let navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errMsg, setErrMsg] = useState('')
    const [scsMsg, setScsMsg] = useState('')

    const { authenticate } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault()

        authenticate(email, password)
            .then(data => {
                console.log("Logged in!", data)
                setScsMsg(data.message) //TEST
                setErrMsg('')
                navigate('/')
                toast.success(`Successful Login`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                  })
            })
            .catch(err => {
                console.error("Failed to login", err)
                setErrMsg(err.message) //TEST
                setScsMsg('')
            })
    }

    return (
        <div>
            <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">Login</label>
            <form className="grid grid-cols-4 gap-2" onSubmit={onSubmit}>
                <input
                    className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={email}
                    placeholder="email"
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                
                <input
                    className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={password}
                    type="password"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <div className="col-span-1"></div>
                <button type="submit" className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Login</button>
                <div className="col-span-1"></div>
            </form>
            {scsMsg && (
                <div>{scsMsg}</div>
            )}
            {errMsg && (
                <div>{errMsg}</div>
            )}
            <ToastContainer />
        </div>
    )
}

export default Login