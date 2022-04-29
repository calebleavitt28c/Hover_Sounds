import React, { useState } from "react"
import axios from "axios"

import geocoder from 'google-geocoder'

let geo = geocoder({
    key: 'AIzaSyBAx1Dk5NOMiAPeYbK0GtJlx4RA3uem40U'
})

const VenueProfileForm = (props ) => {
    const { venueAttributes } = props

    const [name, setName] = useState(venueAttributes.name) 
    const [bio, setBio] = useState(venueAttributes.bio) 
    const [profilePic, setProfilePic] = useState(venueAttributes.profilePic) 
    const [address, setAddress] = useState(venueAttributes.address) 
    const [city, setCity] = useState(venueAttributes.city) 
    const [state, setState] = useState(venueAttributes.state) 
    const [zipCode, setzipCode] = useState(venueAttributes.zipCode) 
    const [twitterHandle, setTwitterHandle] = useState(venueAttributes.twitterHandle) 

    const updateVenue = (event) => {
        event.preventDefault()
        let incoming = `${address} ${city} ${state} ${zipCode}`

        geo.find(incoming, (err, res) => {
            let lat = res[0].location.lat
            let lng = res[0].location.lng
            axios.put('https://api.hoveringrecords.com/hover/venues', {
                id: venueAttributes.id,
                name: name,
                email: venueAttributes.email,
                bio: bio,
                profilePic: profilePic,
                address: address,
                city: city,
                state: state,
                zipCode: zipCode,
                lat: lat.toString(),
                lng: lng.toString(),
                favorites: venueAttributes.favorites,
                twitterHandle: twitterHandle
            })
            .then(response => {
                console.log(response)
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
                alert("An error occurred editing your profile: " + error.message)
            })
        })
    }

    const BackToProfile = () => {
        props.hideComponent('showAttributes')
    }

   return (
       <div className="flex flex-col place-items-center">
           <div className="grid grid-cols-5">            
                <button className='dark:text-lightgray mr-12' onClick={(event) => BackToProfile()}>◄ Back</button>
                <label className="col-span-3 block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">
                    Venue Profile
                </label>
            </div>
           <form onSubmit={updateVenue} className="grid grid-cols-4 gap-2 w-1/3">
                <input
                    name="name"
                    placeholder="Venue Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="venue-profile-pic"
                    placeholder="Add Profile Picture"
                    value={profilePic}
                    onChange={(event) => setProfilePic(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <textarea
                    name="bio"
                    placeholder="Venue Bio"
                    value={bio}
                    rows="5"
                    cols="60"
                    maxLength="255"
                    onChange={(event) => setBio(event.target.value)}
                    className={`appearance-none block w-full col-span-${ profilePic !== '' || profilePic !== undefined ? '3' : '4'} bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                ></textarea>

                { profilePic !== '' || undefined ? (<img className="rounded" src={profilePic} alt={name} />) : <div />}

                <input
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="zipCode"
                    placeholder="zipCode"
                    value={zipCode}
                    onChange={(event) => setzipCode(event.target.value)}
                    className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="twitterHandle"
                    placeholder="Venues Twitter Handle"
                    value={twitterHandle}
                    onChange={(event) => setTwitterHandle(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <div />
                <button type="submit"  className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Update Profile</button>
           </form>
       </div>
   )
}

export default VenueProfileForm