import React, { useState } from "react"
import axios from 'axios'

const FanProfileForm = (props) => {
    const { fanAttributes } = props

    const [firstName, setFirstName] = useState(fanAttributes.firstName)
    const [lastName, setLastName] = useState(fanAttributes.lastName)
    const [phone, setPhone] = useState(fanAttributes.phone)
    const [birthdate, setBirthdate] = useState(fanAttributes.birthdate)

    const updateFan = (event) => {
        event.preventDefault()
        axios.put('https://api.hoveringrecords.com/hover/fans', {
            id: "stuff",
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            birthdate: birthdate
        })
        .then(response => {
            console.log(response)
            //redirect to Profile page
        })
    }

   return (
       <div className="grid grid-cols-3">
            <div className="col-span-1"></div>
            <div className="col-span-1">
                <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">Fan Profile</label>
                <form onSubmit={updateFan} className="grid grid-cols-4 gap-2">
                    <input
                            className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="firstName"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                    ></input>

                    <input
                            className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="lastName"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                    ></input>

                    <input
                        className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="phone"
                        value={phone}
                        onChange={(event) => setPhone( event.target.value)}
                        pattern="^[0-9]{10}$" 
                        title="Required format: 0123456789 Don't include parenthesis or dashes in your phone number"
                    ></input>

                    <input
                        className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="birthdate"
                        type="date"
                        value={birthdate}
                        onChange={(event) => setBirthdate(event.target.value)}
                    ></input>
                    <div className="col-span-4 grid grid-cols-3">
                        <div className="col-span-1"></div>
                        <button type="submit" className="bg-primary col-span-1 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Update Profile</button>
                        <div className="col-span-1"></div>
                    </div>
                </form>
            </div>
           <div className="col-span-1"></div>
       </div>
   )
}

export default FanProfileForm