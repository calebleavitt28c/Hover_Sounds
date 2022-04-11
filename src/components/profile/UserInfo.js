import React, { useState, useContext, useEffect } from "react"
import { AccountContext } from "../auth/Account"
import Status from "../auth/Status"
import FanProfileForm from "../fan/FanProfileForm"
import ChangeEmail from "../auth/ChangeEmail"
import ChangePassword from "../auth/ChangePassword"
import DeleteAccount from "../auth/DeleteAccount"

const UserInfo = () => {
    const [showAttributes, setShowAttributes] = useState(true)
    const[showEditAttributes, setShowEditAttributes] = useState(false)
    const[showChangeEmail, setShowChangeEmail] = useState(false)
    const[showChangePassword, setShowChangePassword] = useState(false)
    const[showDeleteAccount, setShowDeleteAccount] = useState(false)

    // const [userType, setUserType] = useState('fans')
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(attributes => {
                setName(attributes.name)
                setFirstName(attributes.given_name)
                setLastName(attributes.family_name)
                setEmail(attributes.email)
                setPhone(attributes.phone_number)
                setBirthdate(attributes.birthdate)
            })
    }, [])
    
    const hideComponent = (name) => {
        switch (name) {
            case "showAttributes":
                setShowAttributes(!showAttributes)
                setShowEditAttributes(!showEditAttributes)
                break
            case "showChangeEmail":
                setShowAttributes(!showAttributes)
                setShowChangeEmail(!showChangeEmail)
                break
            case "showChangePassword":
                setShowAttributes(!showAttributes)
                setShowChangePassword(!showChangePassword)
                break
            case "showDeleteAccount":
                setShowAttributes(!showAttributes)
                setShowDeleteAccount(!showDeleteAccount)
                break
            default:
                break
        }
    }

    return (
        <div>
            {showAttributes && (
                <div id="attributes">
                    <Status />
                    <p>User attributes are:</p>
                    <ul>
                        <p>{name}</p>
                        {!name && (
                            <div>
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                            </div>
                        )}
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{birthdate}</p>
                    </ul>
                    <button
                        onClick={(event) => hideComponent('showAttributes')}
                    >Edit</button><br></br>

                    <button 
                        onClick={(event) => hideComponent('showChangeEmail')}
                    >Change Email</button><br></br>

                    <button 
                        onClick={(event) => hideComponent('showChangePassword')}
                    >Change Password</button><br></br>
                    
                    <button 
                        onClick={(event) => hideComponent('showDeleteAccount')}
                    >Delete Account</button>
                </div>
            )}
            <div>
                {showEditAttributes && (
                    <FanProfileForm
                        firstName={firstName}
                        lastName={lastName}
                        phone={phone}
                        birthdate={birthdate}
                    />
                )}
            </div>
            <div>
                {showChangeEmail && (
                    <ChangeEmail />
                )}
            </div>
            <div>
                {showChangePassword && (
                    <ChangePassword />
                )}
            </div>
            <div>
                {showDeleteAccount && (
                    <DeleteAccount hideComponent={hideComponent}/>
                )}
            </div>
        </div>
    )
}

export default UserInfo