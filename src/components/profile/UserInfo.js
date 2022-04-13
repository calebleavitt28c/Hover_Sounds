import React, { useState, useContext, useEffect } from "react"
import { AccountContext } from "../auth/Account"
import Status from "../auth/Status"
import FanProfileForm from "../fan/FanProfileForm"
import ChangeEmail from "../auth/ChangeEmail"
import ChangePassword from "../auth/ChangePassword"
import DeleteAccount from "../auth/DeleteAccount"

const UserInfo = () => {
    const[showAttributes, setShowAttributes] = useState(true)
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
                <div id="attributes" className="grid grid-cols-3">
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <Status />
                        <p className="block text-center uppercase tracking-wide text-gray text-xs font-bold">User attributes:</p>
                        <div className="grid grid-cols-4 gap-2">
                            <p>{name}</p>
                            {!name && (
                                <div className="col-span-4 grid grid-cols-2 gap-2">
                                    <p className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{firstName}</p>
                                    <p className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{lastName}</p>
                                </div>
                            )}
                            <p className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{email}</p>
                            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{phone}</p>
                            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{birthdate}</p>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            <button className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showAttributes')}
                            >Edit</button>
                            <button className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showChangeEmail')}
                            >Change Email</button>


                            <button className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showChangePassword')}
                            >Change Password</button>

                            <button className="bg-red col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300"
                                onClick={(event) => hideComponent('showDeleteAccount')}
                            >Delete Account</button>

                        </div>
                    </div>
                    <div className="col-span-1"></div>
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