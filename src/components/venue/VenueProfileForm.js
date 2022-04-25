import React, { useState } from "react"
import axios from "axios"


const VenueProfileForm = (props ) => {
    const { venueAttributes } = props

    const [name, setName] = useState(venueAttributes.name) 
    const [bio, setBio] = useState(venueAttributes.bio) 
    const [profilePic, setProfilePic] = useState(venueAttributes.profilePic) 
    const [address, setAddress] = useState(venueAttributes.address) 
    const [city, setCity] = useState(venueAttributes.city) 
    const [state, setState] = useState(venueAttributes.state) 
    const [zipcode, setZipcode] = useState(venueAttributes.zipcode) 
    const [twitterHandle, setTwitterHandle] = useState(venueAttributes.twitterHandle) 

    const updateVenue = (event) => {
        event.preventDefault()
        axios.put('https://api.hoveringrecords.com/hover/venues', {
            id: venueAttributes.id,
            name: name,
            email: venueAttributes.email,
            bio: bio,
            profilePic: profilePic,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            coordinates: venueAttributes.coordinates,
            favorites: venueAttributes.favorites,
            twitterHandle: twitterHandle
        })
        .then(response => {
            console.log(response)
            //redirect to Profile page
        })
    }

    const BackToProfile = () => {
        props.hideComponent('showAttributes')
    }

   return (
       <div>
           <button onClick={(event) => BackToProfile()}>Back button</button><br></br>
           <label>Venue Profile</label>
           <form onSubmit={updateVenue}>
                <input
                    name="name"
                    placeholder="Venue Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input><br></br>

                <textarea
                    name="bio"
                    placeholder="Venue Bio"
                    value={bio}
                    rows="5"
                    cols="60"
                    maxLength="255"
                    onChange={(event) => setBio(event.target.value)}
                ></textarea><br></br>

                <input
                    name="venue-profile-pic"
                    placeholder="Add Profile Picture"
                    value={profilePic}
                    onChange={(event) => setProfilePic(event.target.value)}
                ></input><br></br>

                <input
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                ></input><br></br>

                <input
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                ></input><br></br>

                <input
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                ></input><br></br>

                <input
                    name="zipcode"
                    placeholder="Zipcode"
                    value={zipcode}
                    onChange={(event) => setZipcode(event.target.value)}
                ></input><br></br>

<input
                    name="twitterHandle"
                    placeholder="Venues Twitter Handle"
                    value={twitterHandle}
                    onChange={(event) => setTwitterHandle(event.target.value)}
                ></input><br></br>

                <button type="submit">Update Profile</button>
           </form>
       </div>
   )
}

export default VenueProfileForm