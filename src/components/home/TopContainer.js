import { useState } from 'react'
import TopList from './TopList'

const TopContainer = props => {

    const [selected, setSelected] = useState('')

    const artists = []
    const venues = []
    const events = []
    //API CALLS FOR TOP ITEMS and assign to above variables

    return(
      <div>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
          role="tablist">
          <li className="nav-item flex-auto text-center" role="presentation">
            <button href="#tabs-homeFill" className="
              nav-link
              w-full
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
              active
            " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
              aria-controls="tabs-homeFill" aria-selected="true" onClick={() => setSelected('artists')}>Top Artists</button>
          </li>
          <li className="nav-item flex-auto text-center" role="presentation">
            <button href="#tabs-profileFill" className="
              nav-link
              w-full
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
            " id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
              aria-controls="tabs-profileFill" aria-selected="false" onClick={() => setSelected('venues')}>Top Venues</button>
          </li>
          <li className="nav-item flex-auto text-center" role="presentation">
            <button href="#tabs-messagesFill" className="
              nav-link
              w-full
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
            " id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-messagesFill" role="tab"
              aria-controls="tabs-messagesFill" aria-selected="false" onClick={() => setSelected('events')}>Top Events</button>
          </li>
        </ul>
        <TopList selected={selected} artists={artists} venues={venues} events={events} />
      </div>
        
    )
  }


export default TopContainer