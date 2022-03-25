import { render } from "@testing-library/react"
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js"
import React, { Component, useState } from "react"
import FansPool from "../../FansPool"

//TODO: look up what a useState hook is 
class Signup extends Component {
    constructor() {
        super()
        this.state = {
            showHideSignup: true,
            showHideConfirm: false,

            const [firstName, setFName] = useState(''),
            const [lastName, setLName] = useState(''),
            const [email, setEmail] = useState(''),
            const [phone, setPhone] = useState(''),
            const [birthdate, setBirthdate] = useState(''),
            const [password, setPassword] = useState(''),
    
            const [verificationCode, setVerificationCode] = useState('')
        };
        this.hideComponent = this.hideComponent.bind(this)
    }

    hideComponent(name) {
        console.log(name)
        swith (name) {
            case "showHideSignup":
                this.setState({ showHideSignup: !this.state.showHideSignup });
                break;
            case "showHideConfirm":
                this.setState({ showHideConfirm: !this.state.showHideConfirm });
                break;
            default:
                null;
        }
    }

    submitUser = (event) => {
        event.preventDefault()
        
        var attributeList = []
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

        var attributeFirstName = new CognitoUserAttribute(dataFirstName)
        var attributeLastName = new CognitoUserAttribute(dataLastName)
        var attributeEmail = new CognitoUserAttribute(dataEmail)
        var attributePhone = new CognitoUserAttribute(dataPhone)
        var attributeBirthdate = new CognitoUserAttribute(dataBirthdate)

        attributeList.push(attributeFirstName)
        attributeList.push(attributeLastName)
        attributeList.push(attributeEmail)
        attributeList.push(attributePhone)
        attributeList.push(attributeBirthdate)

        FansPool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err)
            } else {
                console.log(data)
                setUsername(data.user.username)
            }
        })

        hideComponent("showHideSignup")
        hideComponent("showHideConfirm")

    }

    confirmUser = (event) => {
        event.preventDefault()

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: FansPool
        })

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                console.log(result)
            }
        })

        hideComponent("showHideConfirm")
    }

    render() {
        const { showHideSignup, showHideConfirm } = this.state
        return (
            <div>
                {showHideSignup && (
                    <form onSubmit={this.submitUser}>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            value={firstName}
                            onChange={(event) => setFName(event.target.value)}
                        ></input>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            value={lastName}
                            onChange={(event) => setLName(event.target.value)}
                        ></input>
                        <label htmlFor="email">Email</label>
                        <input 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        ></input>
                        <label htmlFor="phone">Phone</label>
                        <input 
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        ></input>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input 
                            value={birthdate}
                            onChange={(event) => setBirthdate(event.target.value)}
                        ></input>
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        ></input>
                        
                        <button type="submit">Signup</button>
                    </form>
                )}
                {showHideConfirm && (
                    <form onSubmit={this.CognitoUser.bind(this)}>
                        <label>Verification Code</label>
                        <input value={verificationCode} onChange={event => setVerificationCode(event.target.value)} />
        
                        <button type='submit'>Verify Email</button>
                    </form>
                )}
            </div>
        );
    }
}

export default Signup