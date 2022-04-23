import React, { useState } from "react"
import axios from "axios"


const VenueProfileForm = () => {
   const [name, setName] = useState('') 
   const [bio, setBio] = useState('') 
   const [profilePic, setProfilePic] = useState('') 
   const [address, setAddress] = useState('') 
   const [city, setCity] = useState('') 
   const [state, setState] = useState('') 
   const [zipcode, setZipcode] = useState('') 
   const [twitterHandle, setTwitterHandle] = useState('') 

    const updateVenue = (event) => {
        event.preventDefault()
        axios.put('https://api.hoveringrecords.com/hover/venues', {
            id: "stuff",
            name: name,
            bio: bio,
            profilePic: profilePic,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            twitterHandle: twitterHandle
        })
        .then(response => {
            console.log(response)
            //redirect to Profile page
        })
    }

   return (
       <div>
           <label>Venue Profile</label>
           <form onSubmit={updateVenue}>
                <input
                    name="name"
                    placeholder="Artist Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input><br></br>

                <textarea
                    name="bio"
                    placeholder="Artist Bio"
                    value={bio}
                    rows="5"
                    cols="60"
                    maxLength="255"
                    onChange={(event) => setBio(event.target.value)}
                ></textarea><br></br>

                <input
                    name="artist-profile-pic"
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