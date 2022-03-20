import React, { useEffect, useContext, useState } from 'react'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { AccountContext } from './Account'

export default () => {
    const [plan, setPlan] = useState('')

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        // TODO: Fetch the corrent plan from Cognito
    }, [])
    
    const onSubmit = event => {
        event.preventDefault()

        getSession().then(({ user }) => {
            const attributes = [
                new CognitoUserAttribute({ Name: '', Value: ''})
            ]
        })
    }

    return (
        <div>
            <h1>Update your plan</h1>
            <form onSubmit={onSubmit}>
                <input value={plan} onChange={event => setPlan(event.target.value)}></input>

                <button type='submit'>Change plan</button>
            </form>
        </div>
    )
}
