// import { render } from "@testing-library/react"
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js"
import React, { Component } from "react"
import Pool from "./FansPool"

//TODO: look up what a useState hook is 
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHideSignUpFan: true,
            showHideSignUpArtistAndVenue: false,
            showHideConfirm: false,

            userType: 'fans',
            name: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            birthdate: '',
            password: '',

            verificationCode: '',
        };

        this.hideComponent = this.hideComponent.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }

    hideComponent(name) {
        switch (name) {
            case "showHideSignUpFan":
                this.setState({ showHideSignUpFan: !this.state.showHideSignUpFan });
                break;
            case "showHideSignUpArtistAndVenue":
                this.setState({ showHideSignUpArtistAndVenue: !this.state.showHideSignUpArtistAndVenue });
                break;
            case "showHideConfirm":
                this.setState({ showHideConfirm: !this.state.showHideConfirm });
                break;
            default:
                break;
        }
    }

    hideForm(type) {
        switch (type) {
            case "fans":
                this.setState({ showHideSignUpFan: true })
                this.setState({ showHideSignUpArtistAndVenue: false })
                break;
                case "artists":
                    case "venues":
                        this.setState({ showHideSignUpFan: false })
                        this.setState({ showHideSignUpArtistAndVenue: true })
                break;
            default:
                break;
        }
    }

    submitFanUser = (event) => {
        event.preventDefault()
        
        var attributeList = []
        var dataUserType = {
            Name: 'profile',
            Value: this.state.userType
        }
        var dataFirstName = {
            Name: 'given_name',
            Value: this.state.firstName.replace(/\s+/g, ''),
        }
        var dataLastName = {
            Name: 'family_name',
            Value: this.state.lastName.replace(/\s+/g, ''),
        }
        var dataEmail = {
            Name: 'email',
            Value: this.state.email.replace(/\s+/g, ''),
        }
        var dataPhone = {
            Name: 'phone_number',
            Value: '+'+this.state.phone.replace(/\s+/g, ''),
        }
        var dataBirthdate = {
            Name: 'birthdate',
            Value: this.state.birthdate.replace(/\s+/g, ''),
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

        Pool.signUp(this.state.email, this.state.password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err)
            } else {
                console.log(data)
            }
        })

        this.hideComponent("showHideSignUpFan")
        this.hideComponent("showHideConfirm")
    }

    submitArtOrVenUser = (event) => {
        event.preventDefault()
        
        var attributeList = []
        var dataUserType = {
            Name: 'profile',
            Value: this.state.userType
        }
        var dataName = {
            Name: 'name',
            Value: this.state.name.replace(/\s+/g, ''),
        }
        var dataEmail = {
            Name: 'email',
            Value: this.state.email.replace(/\s+/g, ''),
        }

        var attributeUserType = new CognitoUserAttribute(dataUserType)
        var attributeName = new CognitoUserAttribute(dataName)
        var attributeEmail = new CognitoUserAttribute(dataEmail)

        attributeList.push(attributeUserType)
        attributeList.push(attributeName)
        attributeList.push(attributeEmail)

        Pool.signUp(this.state.email, this.state.password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err)
            } else {
                console.log(data)
            }
        })

        this.hideComponent("showHideSignUpArtistAndVenue")
        this.hideComponent("showHideConfirm")
    }

    confirmUser = (event) => {
        event.preventDefault()

        const cognitoUser = new CognitoUser({
            Username: this.state.email,
            Pool
        })

        cognitoUser.confirmRegistration(this.state.verificationCode, true, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                console.log(result)
            }
        })

        this.hideComponent("showHideConfirm")
    }

    render() {
        const { showHideSignUpFan, showHideSignUpArtistAndVenue, showHideConfirm } = this.state
        return (
            <div>
                {(showHideSignUpFan || showHideSignUpArtistAndVenue) && (
                    <div>
                        <label htmlFor="userType">User Type</label>
                        <select
                            value={this.state.userType}
                            onChange={(event) => {
                                this.setState({ userType: event.target.value });
                                this.hideForm(event.target.value);
                            } }>

                            <option value="fans">Fan</option>
                            <option value="artists">Artist</option>
                            <option value="venues">Venue</option>
                        </select>
                    </div>
                )}
                {showHideSignUpFan && (
                    <form onSubmit={this.submitFanUser}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                                value={this.state.firstName}
                                onChange={(event) => this.setState({ firstName: event.target.value })}
                        ></input>

                        <label htmlFor="lastName">Last Name</label>
                        <input
                                value={this.state.lastName}
                                onChange={(event) => this.setState({ lastName: event.target.value })}
                        ></input>
                              
                        <label htmlFor="email">Email</label>
                        <input 
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
                        ></input>
                
                        <label htmlFor="phone">Phone</label>
                        <input
                            value={this.state.phone}
                            onChange={(event) => this.setState({ phone: event.target.value })}
                        ></input>

                        <label htmlFor="birthdate">Birthdate</label>
                        <input
                            type="date"
                            value={this.state.birthdate}
                            onChange={(event) => this.setState({ birthdate: event.target.value })}
                        ></input>
                          
                        <label htmlFor="password">Password</label>
                        <input
                            value={this.state.password}
                            onChange={(event) => this.setState({password: event.target.value})}
                        ></input>
                        
                        <button type="submit">Signup</button>
                    </form>
                )}
                {showHideSignUpArtistAndVenue && (
                    <form onSubmit={this.submitArtOrVenUser}>
                        <label htmlFor="name">Name</label>
                        <input
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value })}>
                        </input>

                        <label htmlFor="email">Email</label>
                        <input 
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
                        ></input>

                        <label htmlFor="password">Password</label>
                        <input
                            value={this.state.password}
                            onChange={(event) => this.setState({password: event.target.value})}
                        ></input>
                        
                        <button type="submit">Signup</button>
                    </form>
                )}
                {showHideConfirm && (
                    <form onSubmit={this.confirmUser}>
                        <label>Verification Code</label>
                        <input value={this.state.verificationCode} onChange={event => this.setState({verificationCode: event.target.value})} />
        
                        <button type='submit'>Verify Email</button>
                    </form>
                )}
            </div>
        );
    }
}

export default Signup