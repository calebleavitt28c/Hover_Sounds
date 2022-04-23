import React from 'react'

const FanInfo = (props) => {
    const { fanAttributes } = props

    return (
        <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4 grid grid-cols-2 gap-2">
                <p className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{fanAttributes.firstName}</p>
                <p className="appearance-none block w-full col-span-1 bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{fanAttributes.lastName}</p>
            </div>
            <p className="appearance-none col-span-4 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{fanAttributes.email}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{fanAttributes.phone}</p>
            <p className="appearance-none col-span-2 block w-full bg-white text-gray border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{fanAttributes.birthdate}</p>
        </div>
    )
}

export default FanInfo