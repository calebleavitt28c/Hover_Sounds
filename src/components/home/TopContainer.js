import { useEffect, useState } from 'react'
import TopList from './TopList'

function btnClick(btn) {
  if (btn == 'artists') {
    document.getElementById('topArtistsBtn').classList.add('bg-primary')
    document.getElementById('topArtistsBtn').classList.add('dark:bg-gray')
    document.getElementById('topArtistsBtn').classList.add('dark:text-black')
    document.getElementById('topArtistsBtn').classList.add('dark:hover:text-lightgray')

    document.getElementById('topVenuesBtn').classList.remove('bg-primary')
    document.getElementById('topVenuesBtn').classList.remove('dark:bg-gray')
    document.getElementById('topVenuesBtn').classList.remove('dark:text-black')
    document.getElementById('topVenuesBtn').classList.remove('dark:hover:text-lightgray')
  }
  else if (btn == 'venues') {
    document.getElementById('topArtistsBtn').classList.remove('bg-primary')
    document.getElementById('topArtistsBtn').classList.remove('dark:bg-gray')
    document.getElementById('topArtistsBtn').classList.remove('dark:text-black')
    document.getElementById('topArtistsBtn').classList.remove('dark:hover:text-lightgray')
    
    document.getElementById('topVenuesBtn').classList.add('bg-primary')
    document.getElementById('topVenuesBtn').classList.add('dark:bg-gray')
    document.getElementById('topVenuesBtn').classList.add('dark:text-black')
    document.getElementById('topVenuesBtn').classList.add('dark:hover:text-lightgray')
  }
}

const TopContainer = props => {
    const [selected, setSelected] = useState('artists')
    return(
      <div>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tabFill"
          role="tablist">
          <li className="nav-item flex-auto text-center" role="presentation">
            <button href="#tabs-homeFill" className="
              bg-primary
              dark:bg-gray
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
              hover:border-black hover:bg-secondary hover:text-white dark:hover:bg-black
              focus:border-transparent
            " id="topArtistsBtn" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
              aria-controls="tabs-homeFill" aria-selected="true" 
              onClick={() => {
                setSelected('artists')
                btnClick('artists')
              }}>Top Artists</button>
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
              hover:border-black hover:bg-secondary hover:text-white dark:hover:bg-black
              focus:border-transparent
            " id="topVenuesBtn" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
              aria-controls="tabs-profileFill" aria-selected="false" 
              onClick={() => {
                setSelected('venues')
                btnClick('venues')
              }}>Top Venues</button>
          </li>
        </ul>
        <TopList selected={selected} topArtists={props.topArtists} topVenues={props.topVenues} />
      </div>
        
    )
  }


export default TopContainer