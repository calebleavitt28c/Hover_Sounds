// import { render } from "@testing-library/react"
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js"
import React, { useContext, useEffect, useState } from "react"
import Pool from "./FansPool"
import { AccountContext } from "./Account"

//TODO: look up what a useState hook is 
const Signup = () => {
    const [showHideSignUpFan, setShowHideSignUpFan] = useState(true)
    const [showHideSignUpArtistAndVenue, setShowHideSignUpArtistAndVenue] = useState(false)
    const [showHideConfirm, setShowHideConfirm] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const [userType, setUserType] = useState('fans')
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [password, setPassword] = useState('')

    const [verificationCode, setVerificationCode] = useState('')

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                setLoggedIn(true)
            })
    })

    const hideComponent = (name) => {
        switch (name) {
            case "showHideSignUpFan":
                setShowHideSignUpFan(!showHideSignUpFan)
                break;
            case "showHideSignUpArtistAndVenue":
                setShowHideSignUpArtistAndVenue(!showHideSignUpArtistAndVenue)
                break;
            case "showHideConfirm":
                setShowHideConfirm(!showHideConfirm)
                break;
            default:
                break;
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
            Value: '+'+phone.replace(/\s+/g, ''),
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
            } else {
                console.log(data)
            }
        })

        this.hideComponent("showHideSignUpFan")
        this.hideComponent("showHideConfirm")
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
            Value: name.replace(/\s+/g, ''),
        }
        var dataEmail = {
            Name: 'email',
            Value: email.replace(/\s+/g, ''),
        }

        var attributeUserType = new CognitoUserAttribute(dataUserType)
        var attributeName = new CognitoUserAttribute(dataName)
        var attributeEmail = new CognitoUserAttribute(dataEmail)

        attributeList.push(attributeUserType)
        attributeList.push(attributeName)
        attributeList.push(attributeEmail)

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

    const confirmUser = (event) => {
        event.preventDefault()

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool
        })

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                console.log(result)
            }
        })

        this.hideComponent("showHideConfirm")
    }

    return (
        <div>
            {(!loggedIn) && (
                <div id="signUp">
                        {(showHideSignUpFan || showHideSignUpArtistAndVenue) && (
                            <div>
                                <label name='fromTitle'>Sign up</label><br></br><br></br>
                                <label htmlFor="userType">User Type</label>
                                <select
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
                            <form onSubmit={submitFanUser}>
                                <input
                                        name="firstName"
                                        placeholder="first name"
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                ></input><br></br>

                                <input
                                        name="lastName"
                                        placeholder="last name"
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                ></input><br></br>
                                    
                                <input 
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                ></input><br></br>
                        
                                <input
                                    name="phone"
                                    placeholder="phone"
                                    value={phone}
                                    onChange={(event) => setPhone( event.target.value)}
                                    pattern="^[0-9]{10}$" 
                                    title="Required format: 0123456789 Don't include parenthesis or dashes in your phone number"
                                ></input><br></br>

                                <input
                                    name="birthdate"
                                    placeholder="birthdate"
                                    type="date"
                                    value={birthdate}
                                    onChange={(event) => setBirthdate(event.target.value)}
                                ></input><br></br>
                                
                                <input
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                    title="Your password must contain at least one number and one uppercase and lowercase letter, and be at least 8 or more characters long"
                                ></input><br></br>
                                
                                <button type="submit">Signup</button><br></br>
                            </form>
                        )}
                        {showHideSignUpArtistAndVenue && (
                            <form onSubmit={submitArtOrVenUser}>
                                <input
                                    name="name"
                                    placeholder="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}>
                                </input><br></br>

                                <input 
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(event) => setEmail( event.target.value)}
                                ></input><br></br>

                                <input
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                    title="Your password must contain at least one number and one uppercase and lowercase letter, and be at least 8 or more characters long"
                                ></input><br></br>
                                
                                <button type="submit">Signup</button>
                            </form>
                        )}
                        {showHideConfirm && (
                            <form onSubmit={confirmUser}>
                                <label name='fromTitle'>Verify Email</label><br></br>
                                <input 
                                    name="verificationCode"
                                    placeholder="Verification Code"
                                    value={verificationCode} 
                                    onChange={event => setVerificationCode(event.target.value)} 
                                /><br></br>
                
                                <button type='submit'>Verify Email</button>
                            </form>
                        )}
                </div>
            )}
        </div>
    )
}

export default Signup