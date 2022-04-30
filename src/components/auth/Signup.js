// import { render } from "@testing-library/react"
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js"
import React, { useState } from "react"
import Pool from "./UserPool"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'

//TODO: look up what a useState hook is 
const Signup = (props) => {
    const [showHideSignUpFan, setShowHideSignUpFan] = useState(true)
    const [showHideSignUpArtistAndVenue, setShowHideSignUpArtistAndVenue] = useState(false)
    const [showHideConfirm, setShowHideConfirm] = useState(false)

    const [userType, setUserType] = useState('fans')
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [password, setPassword] = useState('')

    const hideComponent = (name) => {
        switch (name) {
            case "showHideSignUpFan":
                setShowHideSignUpFan(!showHideSignUpFan)
                break
            case "showHideSignUpArtistAndVenue":
                setShowHideSignUpArtistAndVenue(!showHideSignUpArtistAndVenue)
                break
            case "showHideConfirm":
                setShowHideConfirm(!showHideConfirm)
                break
            default:
                break
        }
    }

    const hideForm = (type) => {
        switch (type) {
            case "fans":
                setShowHideSignUpFan(true)
                setShowHideSignUpArtistAndVenue(false)
                break;
            case "artists":
            case "venues":
                setShowHideSignUpFan(false)
                setShowHideSignUpArtistAndVenue(true)
                break;
            default:
                break;
        }
    }

    const submitFanUser = (event) => {
        event.preventDefault()
        
        var attributeList = []
        var dataUserType = {
            Name: 'profile',
            Value: userType
        }
        var dataFirstName = {
            Name: 'given_name',
            Value: firstName.replace(/\s+/g, ''),
        }
        var dataLastName = {
            Name: 'family_name',
            Value: lastName.replace(/\s+/g, ''),
        }
        var dataEmail = {
            Name: 'email',
            Value: email.replace(/\s+/g, ''),
        }
        var dataPhone = {
            Name: 'phone_number',
            Value: '+1'+phone.replace(/\s+/g, ''),
        }
        var dataBirthdate = {
            Name: 'birthdate',
            Value: birthdate.replace(/\s+/g, ''),
        }

        var attributeUserType = new CognitoUserAttribute(dataUserType)
        var attributeFirstName = new CognitoUserAttribute(dataFirstName)
        var attributeLastName = new CognitoUserAttribute(dataLastName)
        var attributeEmail = new CognitoUserAttribute(dataEmail)
        var attributePhone = new CognitoUserAttribute(dataPhone)
        var attributeBirthdate = new CognitoUserAttribute(dataBirthdate)

        attributeList.push(attributeUserType)
        attributeList.push(attributeFirstName)
        attributeList.push(attributeLastName)
        attributeList.push(attributeEmail)
        attributeList.push(attributePhone)
        attributeList.push(attributeBirthdate)

        Pool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err)
                toast.error(`Error creating your account`, {
                    position: 'bottom-right',
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true
                  }) //TEST
                } else {
                    console.log(data)
            }
        })

        hideComponent("showHideSignUpFan")
        hideComponent("showHideConfirm")
        this.status()
    }

    const submitArtOrVenUser = (event) => {
        event.preventDefault()
        
        var attributeList = []
        var dataUserType = {
            Name: 'profile',
            Value: userType
        }
        var dataName = {
            Name: 'name',
            Value: name,
        }
        var dataEmail = {
            Name: 'email',
            Value: email.replace(/\s+/g, ''),
        }
        var dataFirstName = {
            Name: 'given_name',
            Value: 'N/A',
        }
        var dataLastName = {
            Name: 'family_name',
            Value: 'N/A',
        }

        var attributeUserType = new CognitoUserAttribute(dataUserType)
        var attributeName = new CognitoUserAttribute(dataName)
        var attributeEmail = new CognitoUserAttribute(dataEmail)
        var attributeFirstName = new CognitoUserAttribute(dataFirstName)
        var attributeLastName = new CognitoUserAttribute(dataLastName)

        attributeList.push(attributeUserType)
        attributeList.push(attributeName)
        attributeList.push(attributeEmail)
        attributeList.push(attributeFirstName)
        attributeList.push(attributeLastName)

        Pool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err)

            } else {
                console.log(data)
            }
        })

        hideComponent("showHideSignUpArtistAndVenue")
        hideComponent("showHideConfirm")
    }

    return (
        <div id="signUp">
                {(showHideSignUpFan || showHideSignUpArtistAndVenue) && (
                    <div>
                        <label name='fromTitle' className="block uppercase text-center tracking-wide text-gray text-xs font-bold mb-2">Sign up</label>
                        <label htmlFor="userType" className="block uppercase text-center tracking-wide text-gray text-xs font-bold mb-2">User Type</label>
                        <select
                            className="block w-full bg-white border border-lightgray text-gray py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray"
                            value={userType}
                            onChange={(event) => {
                                setUserType(event.target.value);
                                hideForm(event.target.value);
                            } }>

                            <option value="fans">Fan</option>
                            <option value="artists">Artist</option>
                            <option value="venues">Venue</option>
                        </select><br></br>
                    </div>
                )}
                {showHideSignUpFan && (
                    <form className="grid grid-cols-4 gap-2" onSubmit={submitFanUser}>
                        <input
                                className="appearance-none col-span-2 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="firstName"
                                placeholder="first name"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                        ></input>

                        <input
                            className="appearance-none col-span-2 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="lastName"
                                placeholder="last name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                        ></input>
                            
                        <input 
                            className="appearance-none col-span-4 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        ></input>
                
                        <input
                            className="appearance-none col-span-2 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="phone"
                            placeholder="phone"
                            type='tel'
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            pattern="^[0-9]{10}$" 
                            title="Required format: 0123456789 Don't include parenthesis or dashes in your phone number"
                        ></input>

                        <input
                            className="appearance-none col-span-2 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="birthdate"
                            placeholder="birthdate"
                            type="date"
                            value={birthdate}
                            onChange={(event) => setBirthdate(event.target.value)}
                        ></input>
                        
                        <input
                            className="appearance-none col-span-4 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="password"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Your password must contain at least one number and one uppercase and lowercase letter, and be at least 8 or more characters long"
                        ></input>
                        <div className="col-span-1"></div>
                        <button type="submit" className="bg-primary hover:bg-secondary col-span-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Sign up</button><br></br>
                        <div className="col-span-1"></div>
                    </form>
                )}
                {showHideSignUpArtistAndVenue && (
                    <form className="grid grid-cols-4 gap-2" onSubmit={submitArtOrVenUser}>
                        <input
                            className="appearance-none col-span-4 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}>
                        </input>

                        <input 
                            className="appearance-none col-span-4 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(event) => setEmail( event.target.value)}
                        ></input>

                        <input
                            className="appearance-none col-span-4 block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Your password must contain at least one number and one uppercase and lowercase letter, and be at least 8 or more characters long"
                        ></input>
                        <div className="col-span-1"></div>
                        <button type="submit" className="bg-primary hover:bg-secondary col-span-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Sign up</button>
                        <div className="col-span-1"></div>
                    </form>
                )}
                {showHideConfirm && (
                    <VerifyEmail username={email} afterSignup={props.afterSignup}/>
                )}
                <ToastContainer /> 
        </div>
    )
}

const VerifyEmail = (props) => {
    let navigate = useNavigate()

    const [showHideConfirm, setShowHideConfirm] = useState(true)

    const [verificationCode, setVerificationCode] = useState('')

    const confirmUser = (event) => {
        event.preventDefault()

        const cognitoUser = new CognitoUser({
            Username: props.username,
            Pool
        })

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                console.error(err)

            } else {
                console.log(result)
                props.afterSignup()
            }
        })
    }


    return (
        <div>
            {showHideConfirm && (
                <div>
                    <form onSubmit={confirmUser}>
                        <label name='fromTitle' className="block uppercase tracking-wide text-gray text-xs font-bold mb-2">Verify Email</label><br></br>
                        <input 
                            className="appearance-none block w-full bg-white text-gray border border-lightgray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                            name="verificationCode"
                            placeholder="Verification Code"
                            value={verificationCode} 
                            onChange={event => setVerificationCode(event.target.value)} 
                        />

                        <button type='submit' className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Verify Email</button>
                    </form>
                </div>
            )}
        </div>

    )
}

export default Signup