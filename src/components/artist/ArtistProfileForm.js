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
            id: artistAttributes.id,
            name: name,
            email: artistAttributes.email,
            bio: bio,
            profilePic: profilePic,
            favorites: artistAttributes.favorites,
            spotifyId: spotifyId,
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
    }

    const BackToProfile = () => {
        props.hideComponent('showAttributes')
    }

   return (
       <div className="flex flex-col place-items-center">
           <div className="grid grid-cols-5">            
                <button className='dark:text-lightgray mr-12' onClick={(event) => BackToProfile()}>◄ Back</button>
                <label className="col-span-3 block text-center uppercase tracking-wide text-gray text-xs font-bold mb-2">Artist Profile</label>
            </div>
           <form onSubmit={updateArtist} className="grid grid-cols-4 gap-2 w-1/3">
                <input
                    name="name"
                    placeholder="Artist Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="artist-profile-pic"
                    placeholder="Add Profile Picture"
                    value={profilePic}
                    onChange={(event) => setProfilePic(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <textarea
                    name="bio"
                    placeholder="Artist Bio"
                    value={bio}
                    rows="5"
                    cols="60"
                    maxLength="255"
                    onChange={(event) => setBio(event.target.value)}
                    className="appearance-none block w-full col-span-3 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>

                <img className="rounded" src={profilePic} alt={name} />

                <input
                    name="spotifyId"
                    placeholder="Artists Spotify ID"
                    value={spotifyId}
                    onChange={(event) => setSpotifyId(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <input
                    name="twitterHandle"
                    placeholder="Artists Twitter Handle"
                    value={twitterHandle}
                    onChange={(event) => setTwitterHandle(event.target.value)}
                    className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></input>

                <div />
                <button type="submit" className="bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">
                    Update Profile
                </button>
           </form>
       </div>
   )
}

export default ArtistProfileForm