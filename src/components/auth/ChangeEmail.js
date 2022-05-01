import React, { useState, useContext } from 'react'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { AccountContext } from './Account'
import { ToastContainer, toast } from 'react-toastify';

const ChangeEmail = (props) => {
    const [newEmail, setNewEmail] = useState('')
    const [password, setPassword] = useState('')

    const { getSession, authenticate  } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault()

        getSession().then(({ user, email }) => {
            authenticate(email, password).then(()=> {
                const attributes = [
                    new CognitoUserAttribute({ Name: 'email', Value: newEmail})
                ]

                user.updateAttributes(attributes, (err, results) => {
                    if (err) {
                        console.log(err)
                        toast.error(`There was an error changing your email`, {
                            position: 'bottom-right',
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true
                        })
                    } else {
                        console.log(results)
                        toast.success(`Email successfully changed`, {
                            position: 'bottom-right',
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true
                        })
                    }
                })
            })
        })
    }

    const BackToProfile = () => {
        props.hideComponent('showChangeEmail')
    }

    return (
        <div className="flex flex-col place-items-center">
            <div className='grid grid-cols-3'>         
                <button className='dark:text-lightgray mr-24' onClick={(event) => BackToProfile()}>◄ Back</button>
            </div>
            <form onSubmit={onSubmit}>
            <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold">New Email</label>
                <input
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={newEmail}
                    onChange={(event) => setNewEmail(event.target.value)}
                />

                <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold">Current Password</label>
                <input
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div className="grid grid-cols-3">
                    <div className="col-span-1"></div>
                    <button type='submit' className="bg-primary col-span-1 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Change Password</button>
                    <div className="col-span-1"></div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ChangeEmail