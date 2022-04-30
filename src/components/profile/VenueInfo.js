import React from 'react'

const VenueInfo = (props) => {
    const { venueAttributes } = props
    return (
        <div className="grid grid-cols-4 gap-2">
            <p className="appearance-none block w-full col-span-2 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.name}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.twitterHandle}</p>
            <p className="appearance-none block w-full col-span-4 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.bio}</p>
            { venueAttributes.profilePic !== undefined ? (<img className="object-fill" src={venueAttributes.profilePic} alt={venueAttributes.name} />) : <div />}
            <p className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.email}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.address}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.city}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.state}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{venueAttributes.zipCode}</p>
        </div>
    )
}

export default VenueInfo