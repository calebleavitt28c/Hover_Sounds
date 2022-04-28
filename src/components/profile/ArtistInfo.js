import React from 'react'

const ArtistInfo = (props) => {
    const { artistAttributes } = props

    return (
        <div className="flex flex-col place-items-center"> 
            <div className='grid grid-cols-4 gap-2'>
            <p className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray">{artistAttributes.name}</p>
            <p className="appearance-none overflow-hidden truncate block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray">{artistAttributes.profilePic}</p>
            <p className="appearance-none block w-full col-span-3 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray">{artistAttributes.bio}</p>
            <img className="rounded" src={artistAttributes.profilePic} alt={artistAttributes.name} />
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray">{artistAttributes.spotifyId}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray">{ artistAttributes.twitterHandle == null ? 'Twitter' : artistAttributes.twitterHandle }</p>
            </div>
        </div>
    )
}

export default ArtistInfo