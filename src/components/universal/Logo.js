import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='grid place-items-center'>
      <Link 
        className="grid place-items-center button button--aylen h-24 w-60 px-5 py-3 bg-secondary dark:bg-darkgray dark:hover:bg-black hover:bg-darkgray hover:text-white text-primary dark:text-lightgray relative focus:outline-none border-solid rounded-lg text-xl text-center font-semibold uppercase tracking-widest overflow-hidden"
        // className="inline-block text-xl px-4 py-2 leading-none border rounded text-primary bg-white dark:bg-secondary dark:text-lightgray dark:hover:bg-darkgray border-transparent hover:border-white hover:text-white hover:bg-secondary mt-4 lg:mt-0 ease-in duration-300"
        to="/" >
        <p>Hover Sounds</p>
      </Link>
    </div>
  )
}

export default Logo