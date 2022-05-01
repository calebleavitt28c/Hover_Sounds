import React, { useState } from "react"
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"

const FanProfileForm = (props) => {
    const { fanAttributes } = props

    const [firstName, setFirstName] = useState(fanAttributes.firstName)
    const [lastName, setLastName] = useState(fanAttributes.lastName)
    const [phone, setPhone] = useState(fanAttributes.phone)
    const [birthdate, setBirthdate] = useState(fanAttributes.birthdate)

    const updateFan = (event) => {
        event.preventDefault()
        axios.put('https://api.hoveringrecords.com/hover/fans', {
            id: props.userId,
            firstName: firstName,
            lastName: lastName,
            email: fanAttributes.email,
            phone: phone,
            birthdate: birthdate,
            favArtists: { SS: fanAttributes.favArtists },
            favVenues: { SS: fanAttributes.favVenues }
        })
        .then(response => {
            console.log(response)
            toast.success(`Profile updated successfully`, {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
            toast.error(`Error updating your profile`, {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
        })
    }

    const BackToProfile = () => {
        props.hideComponent('showAttributes')
    }

   return (
       <div className="flex flex-col place-items-center">
            <div className="grid sm:text-xxs sm:grid-cols-1 md:grid-cols-3 lg:text-sm lg:grid-cols-4 w-1/3">            
                <button className="bg-gray col-span-1 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300" 
                    onClick={(event) => BackToProfile()}
                >◄ Back</button>
            </div><br></br>
            <label className="block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">Fan Profile</label>
            <form onSubmit={updateFan} className="grid grid-cols-4 gap-2 w-1/3">
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
            <ToastContainer />
       </div>
   )
}

export default FanProfileForm