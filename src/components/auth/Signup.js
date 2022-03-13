import { CognitoUserAttribute } from "amazon-cognito-identity-js"
import React, { useState } from "react"
import FansPool from "../../FansPool"
//TODO: look up what a useState hook is 
const Signup = () => {
    const [firstName, setFName] = useState("")
    const [lastName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [password, setPassword] = useState("")


//Phone numbers must follow these formatting rules: A phone number must start with a plus (+) sign,
//followed immediately by the country code. A phone number can only contain the + sign and digits.
//You must remove any other characters from a phone number, such as parentheses, spaces, or dashes (-)
//before submitting the value to the service. For example, a United States-based phone number must follow this format: +14325551212.


    const onSubmit = (event) => {
        event.preventDefault()
        
        var attributeList = []
        var dataFirstName = {
            Name: 'given_name',
            Value: firstName,
        }
        var dataLastName = {
            Name: 'family_name',
            Value: lastName,
        }
        var dataEmail = {
            Name: 'email',
            Value: email,
        }
        var dataPhone = {
            Name: 'phone_number',
            Value: phone,
        }
        var dataBirthdate = {
            Name: 'birthdate',
            Value: birthdate,
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
            }
            console.log(data)
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
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
        </div>
    )
}

export default Signup