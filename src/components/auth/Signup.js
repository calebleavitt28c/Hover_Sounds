// import { render } from "@testing-library/react"
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js"
import React, { Component } from "react"
import Pool from "./FansPool"

//TODO: look up what a useState hook is 
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHideSignup: true,
            showHideConfirm: false,

            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            birthdate: '',
            password: '',

            verificationCode: '',
        };

        this.hideComponent = this.hideComponent.bind(this)
        // this.handleFirstName = this.handleFirstName.bind(this)
    }

    hideComponent(name) {
        console.log(name)
        switch (name) {
            case "showHideSignup":
                this.setState({ showHideSignup: !this.state.showHideSignup });
                break;
            case "showHideConfirm":
                this.setState({ showHideConfirm: !this.state.showHideConfirm });
                break;
            default:
                break;
        }
    }

    submitUser = (event) => {
        event.preventDefault()
        
        var attributeList = []
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

        Pool.signUp(this.state.email, this.state.password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err)
            } else {
                console.log(data)
            }
        })

        this.hideComponent("showHideSignup")
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

    // handleFirstName(event) {
    //     this.setState({firstName: event.target.value})
    // }

    render() {
        const { showHideSignup, showHideConfirm } = this.state
        return (
            <div>
                {showHideSignup && (
                    <form onSubmit={this.submitUser}>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            value={this.state.firstName}
                            onChange={(event) => this.setState({firstName: event.target.value})}
                        ></input>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            value={this.state.lastName}
                            onChange={(event) => this.setState({lastName: event.target.value})}
                        ></input>
                        <label htmlFor="email">Email</label>
                        <input 
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
                        ></input>
                        <label htmlFor="phone">Phone</label>
                        <input 
                            value={this.state.phone}
                            onChange={(event) => this.setState({phone: event.target.value})}
                        ></input>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input 
                            value={this.state.birthdate}
                            onChange={(event) => this.setState({birthdate: event.target.value})}
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