import React, { useContext, useEffect } from 'react'
import { AccountContext } from './Account'

const DeleteAccount = (props) => {
    const { getSession } = useContext(AccountContext)

    const Delete = () => {
        getSession().then(({user}) => {
            user.deleteUser((err, result) => {
                if (err) {
                    alert(err.message || JSON.stringify(err))
                } else {
                    console.log('Call result: ' + result)
                }
            })
        })
    }

    const KeepAccount = (name) => {
        props.hideComponent(name)
    }

    return (
        <div>
            <p>Are you sure you want to delete your account?</p><br></br>
            <button
                onClick={(event) => KeepAccount("showDeleteAccount")}
            >No</button><br></br>
            <button
                onClick={(event) => Delete()}
            >Yes</button>
        </div>
    )
}

export default DeleteAccount
