import React, { useState } from "react"

const FanProfileForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const updateFan = (event) => {
        //TODO: call Lambda Function that will UPDATE this fan in the fan table
    }

   return (
       <div>
           <label>Fan Profile</label>
           <form onSubmit={updateFan}>
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

                <button type="submit">Update Profile</button>
           </form>
       </div>
   )
}

export default FanProfileForm