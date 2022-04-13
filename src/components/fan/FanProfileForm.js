import React, { useState } from "react"

const FanProfileForm = (props) => {
    const [firstName, setFirstName] = useState(props.firstName)
    const [lastName, setLastName] = useState(props.lastName)
    const [phone, setPhone] = useState(props.phone)
    const [birthdate, setBirthdate] = useState(props.birthdate)

    // const [curAtts, setCurAtts] = useState(props.attributes)

    const updateFan = (event) => {
        event.preventDefault()
        //TODO: call Lambda Function that will UPDATE this fan in the fan table
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