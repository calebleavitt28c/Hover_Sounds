import React, { useState } from "react"

const VenueProfileForm = () => {
   const [name, setName] = useState('') 
   const [bio, setBio] = useState('') 
   const [profilePic, setProfilePic] = useState('') 
//    const [venuePics, setVenuePics] = useState('')
   const [address, setAddress] = useState('') 
   const [city, setCity] = useState('') 
   const [state, setState] = useState('') 
   const [zipcode, setZipcode] = useState('') 
   const [instagramUsername, setInstagramUsername] = useState('') 

    const updateVenue = (event) => {
        //TODO: call Lambda Function that will UPDATE this venue in the venue table
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
                    rows="8"
                    cols="60"
                    onChange={(event) => setBio(event.target.value)}
                ></textarea><br></br>

                <input
                    name="artist-profile-pic"
                    placeholder="Add Profile Picture"
                    value={profilePic}
                    type="file"
                    accept="image/*"
                    onChange={(event) => setProfilePic(event.target.value)}
                ></input><br></br>

                {/* <input
                    name="pics-of-venue"
                    placeholder="Pictures of Venue"
                    value={venuePics}
                    type="file"
                    accept="image/*"
                    onChange={(event) => setVenuePics(event.target.value)}
                ></input><br></br> */}

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
                    name="instagramUsername"
                    placeholder="Venues Instagram Username"
                    value={instagramUsername}
                    onChange={(event) => setInstagramUsername(event.target.value)}
                ></input><br></br>

                <button type="submit">Update Profile</button>
           </form>
       </div>
   )
}

export default VenueProfileForm