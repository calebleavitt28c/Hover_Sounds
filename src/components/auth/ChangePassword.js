import React, { useState, useContext } from 'react'
import { AccountContext } from './Account'

export default (props) => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const { getSession } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault()

        getSession().then(({user}) => {
            user.changePassword(password, newPassword, (err, result) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log(result)
                }
            })
        })
    }

    const BackToProfile = () => {
        props.hideComponent('showChangePassword')
    }

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1"></div>
            <button onClick={(event) => BackToProfile()}>Back button</button>
            <form onSubmit={onSubmit}>
                <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold">Current Password</label>
                <input
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold">New Password</label>
                <input
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                />
                <div className="grid grid-cols-3">
                    <div className="col-span-1"></div>
                        <button type='submit' className="bg-primary col-span-1 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Change Password</button>
                    <div className="col-span-1"></div>
                </div>
            </form>
            <div className="col-span-1"></div>
        </div>
    )
}