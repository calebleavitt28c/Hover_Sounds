import React from 'react'

const ArtistInfo = (props) => {
    const { artistAttributes } = props

    return (
        <div>
            <p className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{artistAttributes.name}</p>
            <p className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{artistAttributes.bio}</p>
            <p className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{artistAttributes.profilePic}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{artistAttributes.spotifyId}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{artistAttributes.twitterHandle}</p>
        </div>
    )
}

export default ArtistInfo