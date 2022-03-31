import React, { createContext } from "react"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import Pool from "../../fanspool" 
//we use this as context verify that the user is actually logged in 
//using this to verify sessions while user is loged in
//for example when the user is changing their email or password or any profile information 
//We can use this Account component to verify that the user is actually logged in and can therefor perform these changes 

const AccountContext = createContext()

const Account = (props) => {

    //when we use getSession we are assuming that the user is already logged in
    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser()
            if (user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject()
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err) 
                                } else {
                                    const results = {}

                                    for (let attribute of attributes) {
                                        const { Name, Value } = attribute
                                        results[Name] = Value
                                    }

                                    resolve(results)
                                }
                            })
                        })

                        resolve({ user, ...session, ...attributes })
                    }
                })
            } else {
                reject()
            }
        })
    }
    
    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool })
        
            const authDetails = new AuthenticationDetails({ Username, Password })
    
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("onSuccess: ", data)
                    resolve(data)
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err)
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data)
                    resolve(data)
                }
            })
        })
    }

    const logout = () => {
        const user = Pool.getCurrentUser()
        if (user) {
            user.signOut()
        } 
    }

    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </AccountContext.Provider>
    )
}

export { Account, AccountContext }