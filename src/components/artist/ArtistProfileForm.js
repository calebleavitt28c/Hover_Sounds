import React, { useState } from "react"
import axios from "axios"


const ArtistProfileForm = (props) => {
    const { artistAttributes } = props

    const [name, setName] = useState(artistAttributes.name) 
    const [bio, setBio] = useState(artistAttributes.bio) 
    const [profilePic, setProfilePic] = useState(artistAttributes.profilePic) 
    const [spotifyId, setSpotifyId] = useState(artistAttributes.spotifyId) 
    const [twitterHandle, setTwitterHandle] = useState(artistAttributes.twitterHandle) //twitter?

    const updateArtist = (event) => {
        event.preventDefault()
        axios.put('https://api.hoveringrecords.com/hover/artists', {
            id: "stuff",
            name: name,
            bio: bio,
            profilePic: profilePic,
            spotifyId: spotifyId,
            twitterHandle: twitterHandle
        })
        .then(response => {
            console.log(response)
            //redirect to Profile page
        })
    }

   return (
       <div>
           <label>Artist Profile</label>
           <form onSubmit={updateArtist}>
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
                    name="spotifyId"
                    placeholder="Artists Spotify ID"
                    value={spotifyId}
                    onChange={(event) => setSpotifyId(event.target.value)}
                ></input><br></br>

                <input
                    name="twitterHandle"
                    placeholder="Artists Twitter Handle"
                    value={twitterHandle}
                    onChange={(event) => setTwitterHandle(event.target.value)}
                ></input><br></br>

                <button type="submit">Update Profile</button>
           </form>
       </div>
   )
}

export default ArtistProfileForm