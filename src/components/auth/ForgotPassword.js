import React, { useState } from 'react'
import { CognitoUser } from 'amazon-cognito-identity-js'
import Pool from "./UserPool"
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
    const [stage, setStage] = useState(1) //1 = email stage, 2 = code stage
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const getUser = () => {
        return new CognitoUser({
            Username: email.toLowerCase(),
            Pool
        })
    }

    const sendCode = event => {
        event.preventDefault()

        getUser().forgotPassword({
            onSuccess: data => {
                console.log('Success: ', data)
                toast.success(`${data.message}`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                })
            },
            onFailure: err => {
                console.error('Failure: ', err)
                toast.error(`${err.message}`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                })
            },
            inputVerificationCode: data => {
                console.log('Input code: ', data)
                toast.info(`${data.message}`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                })
                setStage(2)

            }
        })
    }

    const resetPassword = event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            console.error('Passwords do not match')
            toast.error(`Passwords do not match`, {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
            return
        }

        getUser().confirmPassword(code, password, {
            onSuccess: data => {
                console.log('onSuccess: ', data)
                toast.success(`Your password was successfully changed`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                })
            },
            onFailure: err => {
                console.error('onFailure: ', err)
                toast.error(`There was an error changing your password`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                })
            }
        })
    }

    return (
        <div>
            {stage === 1 && (
                <form onSubmit={sendCode} class="grid grid-cols-4 gap-2">
                    <label className="block col-span-4 text-center uppercase tracking-wide text-gray text-xs font-bold">Email</label>
                    <input 
                        className="appearance-none block w-full col-span-4 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                        placeholder="email"
                    />
                    <div className="col-span-1"></div>
                    <button type='submit' className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">
                        Send Verification Code
                    </button>
                    <div className="col-span-1"></div>
                </form>
            )}

            {stage === 2 && (
                <form onSubmit={resetPassword} class="grid grid-cols-4 gap-2">
                    <label className="block col-span-4 text-center uppercase tracking-wide text-gray text-xs font-bold">Verification Code</label>
                    <input value={code} onChange={event => setCode(event.target.value)} className="appearance-none block w-full col-span-4 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    <label className="block col-span-4 text-center uppercase tracking-wide text-gray text-xs font-bold">New Password</label>
                    <input value={password} onChange={event => setPassword(event.target.value)} className="appearance-none block w-full col-span-4 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    <label className="block col-span-4 text-center uppercase tracking-wide text-gray text-xs font-bold">Confirm Password</label>
                    <input value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} className="appearance-none block w-full col-span-4 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    <div className="col-span-1"></div>
                    <button type='submit'  className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">
                        Change Password
                    </button>
                    <div className="col-span-1"></div>
                </form>
            )}
            <ToastContainer />
        </div>
    )
}

export default ForgotPassword