import React, {useState, useContext, useEffect } from 'react'
import { AccountContext } from "./Account"
import Signup from './Signup'
import Login from './Login'
import ForgotPassword from './ForgotPassword'

const AuthPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    // const [showLogSignForm, setShowLogSignForm] = useState(true)
    const [stage, setStage] = useState(2) //1=Signup, 2=Login, 3=ForgotPassword

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                setLoggedIn(true)
            })
    })

    const afterSignup = ()  => {
        setStage(2)
    }

    return (
        <div className='flex flex-col place-items-center h-full mt-auto'>
            {!loggedIn && (
                <div className="col-span-3">
                    <label id="switch" className="grid grid-cols-11 p-2 uppercase tracking-wide text-gray text-center text-xs font-bold mb-2">
                        <span className="col-span-11">Sign up or Log in</span>
                        <input 
                            className="appearance-none peer"
                            type="checkbox"
                            role="switch"
                            value={stage}
                            onChange={(event) => setStage(stage === 2 ? 1 : 2)}
                        />
                        <div className="col-span-4"></div>
                        <span id="slider" className="col-span-1 mt-2 w-8 h-5 flex items-center flex-shrink-0 p-1 bg-lightgray rounded-full after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md peer-checked:bg-secondary dark:peer-checked:bg-primary ease-in-out duration-300 after:duration-300 peer-checked:after:translate-x-2"></span>
                        <div className="col-span-5"></div>
                    </label>
                    {stage === 1 && (
                        <div>
                            <Signup afterSignup={afterSignup}/>
                        </div>
                    )}
                    {stage === 2 && (
                        <div>
                            <Login />
                            <div className="grid grid-cols-3 pt-2">
                                <div className="col-span-1"></div>
                                <button className="text-gray col-span-1 hover:text-primary ease-in duration-200" onClick={(event => setStage(3))}>Forgot Password</button>
                                <div className="col-span-1"></div>
                            </div>
                        </div>
                    )}
                    {stage === 3 && (
                        <div>
                            <ForgotPassword />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AuthPage