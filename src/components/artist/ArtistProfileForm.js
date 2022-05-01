import React, { useEffect, useState } from "react"
import axios from "axios"
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'

const ArtistProfileForm = (props) => {
    const { artistAttributes } = props

    const [name, setName] = useState(artistAttributes.name) 
    const [bio, setBio] = useState(artistAttributes.bio) 
    const [profilePic, setProfilePic] = useState(artistAttributes.profilePic) 
    const [spotifyId, setSpotifyId] = useState(artistAttributes.spotifyId) 
    const [twitterHandle, setTwitterHandle] = useState('')

    const updateArtist = async (event) => {
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

    const handleSpotify = () => {
        let token = Cookies.get('spotifyAuthToken')
        if (token !== undefined && spotifyId !== '') {
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            axios.get(`https://api.spotify.com/v1/artists/${spotifyId}`, { headers })
                .then(response => {
                    let images = response.data.images
                    console.log(response.data)
                    setProfilePic(images[0].url)
                })
        }
        else if (token === undefined) {
            toast.error('Login to Spotify First', {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
              })
        }
        else if (spotifyId === '') {
            toast.error('Enter your Spotify ID first', {
                position: 'bottom-right',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
              })
        }
    }

   return (
       <div className="flex flex-col place-items-center">
           <div className="grid grid-cols-5">            
                <button onClick={(event) => BackToProfile()} className='dark:text-lightgray mr-12'>◄ Back</button>
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

           <div className="grid grid-cols-4 gap-2 w-1/3">
                <div />
                <button onClick={handleSpotify} className="mt-4 bg-primary col-span-2 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in duration-300">
                    Get Spotify Image
                </button>
                <ToastContainer />
           </div>
       </div>
   )
}

export default ArtistProfileForm