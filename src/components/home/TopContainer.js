import axios from 'axios'

import { useEffect, useState } from 'react'
import TopList from './TopList'

const TopContainer = props => {

    const [selected, setSelected] = useState('')

    const [artists, setArtists] = useState([])
    const [venues, setVenues] = useState([])
    const [events, setEvents] = useState([])

    const URL = 'https://api.hoveringrecords.com/hover/'
    //const KEY = '9V4rKfyKzB8xgc3s76UVBfVXwy5mNT'
    //API CALLS FOR TOP ITEMS and assign to above variables
    //artists

    // const getArtists = async () => {
    //   try {
    //     const result = await axios.get(`${URL}artists`)
    //     let data = result.data.Items
    //     let t = []
    //     for (let i of data) {
    //       t.push({
    //         id: i.id,
    //         name: i.name
    //       })
    //     }

    //     setArtists(t)
    //   }
    //   catch(err) {
    //     console.error(err)
    //   }
    // }
    // useEffect(() => {
    //   getArtists()
    // })

    return(
      <div>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tabFill"
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
              hover:border-black hover:bg-gray
              focus:border-transparent
              active:border-secondary active:bg-primary active:text-white
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
              hover:border-black hover:bg-gray
              focus:border-transparent
            " id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
              aria-controls="tabs-profileFill" aria-selected="false" onClick={() => setSelected('venues')}>Top Venues</button>
          </li>
          <li className="nav-item flex-auto text-center" role="presentation">
            <button className="
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
              hover:border-black hover:bg-gray
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