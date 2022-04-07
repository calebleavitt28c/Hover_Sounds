import React, { useState } from "react"

const ArtistProfileForm = () => {
   const [name, setName] = useState('') 
   const [bio, setBio] = useState('') 
   const [profilePic, setProfilePic] = useState('') 
//    const [bandPics, setBandPics] = useState('')
   const [spotifyId, setSpotifyId] = useState('') 
   const [instagramUsername, setInstagramUsername] = useState('') 

    const updateArtist = (event) => {
        //TODO: call Lambda Function that will UPDATE this artist in the artist table
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
                    name="pics-of-artist"
                    placeholder="Pictures of Artist"
                    value={bandPics}
                    type="file"
                    accept="image/*"
                    onChange={(event) => setBandPics(event.target.value)}
                ></input><br></br> */}

                <input
                    name="spotifyId"
                    placeholder="Artists Spotify ID"
                    value={spotifyId}
                    onChange={(event) => setSpotifyId(event.target.value)}
                ></input><br></br>

                <input
                    name="instagramUsername"
                    placeholder="Artists Instagram Username"
                    value={instagramUsername}
                    onChange={(event) => setInstagramUsername(event.target.value)}
                ></input><br></br>

                <button type="submit">Update Profile</button>
           </form>
       </div>
   )
}

export default ArtistProfileForm