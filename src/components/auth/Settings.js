import React, { useEffect, useContext, useState } from 'react'
import { AccountContext } from './Account'
import ChangePassword from './ChangePassword'
import ChangeEmail from './ChangeEmail'

//this will contain our settings dashboard
export default () => {
    const { getSession } = useContext(AccountContext)

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        getSession().then(() => {
                setLoggedIn(true)
            })
    }, [])

    //if loggedIn is true the display our Settings dashboard. If loggedIn is not true don't display the Settings dashboard
    return (
        <div>
            {loggedIn && (
                <>
                    <h2>Settings</h2>
                    <ChangePassword />
                    <ChangeEmail />
                </>
            )}
        </div>
    )
}