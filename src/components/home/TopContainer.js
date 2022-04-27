import React from 'react'
import TopArtist from './TopArtist'
import TopVenue from './TopVenue'
import TopEvent from './TopEvent'

function btnClick(btn) {
  if (btn === 'artists') {
    document.getElementById('topArtistsBtn').classList.add('bg-lightgray')
    document.getElementById('topArtistsBtn').classList.add('dark:bg-gray')
    document.getElementById('topArtistsBtn').classList.add('dark:text-black')
    document.getElementById('topArtistsBtn').classList.add('dark:hover:text-lightgray')

    document.getElementById('topVenuesBtn').classList.remove('bg-lightgray')
    document.getElementById('topVenuesBtn').classList.remove('dark:bg-gray')
    document.getElementById('topVenuesBtn').classList.remove('dark:text-black')
    document.getElementById('topVenuesBtn').classList.remove('dark:hover:text-lightgray')
  }
  else if (btn === 'venues') {
    document.getElementById('topArtistsBtn').classList.remove('bg-lightgray')
    document.getElementById('topArtistsBtn').classList.remove('dark:bg-gray')
    document.getElementById('topArtistsBtn').classList.remove('dark:text-black')
    document.getElementById('topArtistsBtn').classList.remove('dark:hover:text-lightgray')
    
    document.getElementById('topVenuesBtn').classList.add('bg-lightgray')
    document.getElementById('topVenuesBtn').classList.add('dark:bg-gray')
    document.getElementById('topVenuesBtn').classList.add('dark:text-black')
    document.getElementById('topVenuesBtn').classList.add('dark:hover:text-lightgray')
  }
}

class TopContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'artists'
    }
  }

  render() {
    const currentArtists = []
    const currentVenues = []

    if (this.state.selected === 'artists') {
      for (let [i, v] of this.props.topArtists.entries()) {
          currentArtists.push(
            <TopArtist key={`artist${i}`} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
            )
      }
    }
    else if (this.state.selected === 'venues') {
      //current = venues
      for (let [i, v] of this.props.topVenues.entries()) {
        currentVenues.push(
          <TopVenue key={v.id} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
          )
      }
    }
    
    return(
      <div className='flex flex-col h-full'>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b pl-0" id="tabs-tabFill"
          role="tablist">
          <li className="nav-item flex-auto text-center" role="presentation">
            <button href="#tabs-homeFill" className="
              bg-lightgray
              dark:bg-gray
              nav-link
              w-full
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              px-6
              py-3
              transition ease-in duration-300
              hover:bg-lightgray hover:text-darkgray dark:hover:bg-black
              focus:border-transparent
            " id="topArtistsBtn" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
              aria-controls="tabs-homeFill" aria-selected="true" 
              onClick={() => {
                this.setState({ selected: 'artists' })
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
              px-6
              py-3
              transition ease-in duration-300
              hover:bg-lightgray hover:text-darkgray dark:hover:bg-black
              focus:border-transparent
            " id="topVenuesBtn" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
              aria-controls="tabs-profileFill" aria-selected="false" 
              onClick={() => {
                this.setState({ selected: 'venues' })
                btnClick('venues')
              }}>Top Venues</button>
          </li>
        </ul>
        <div className="grid grid-cols-6 p-2 border-b">
          <div className="col-span-1"></div>
            <div className="col-span-3 text-darkgray">
              <h3 className='text-xs'>Name</h3>
            </div>
            <div className="col-span-2 text-darkgray">
              <h1 className="text-center text-xs">Favorites</h1>
          </div>
        </div>
        <ul className="scrollbar-none divide-y divide-gray max-h-full overflow-y-scroll">
          { this.state.selected === 'artists' && (
            currentArtists
          )}
          { this.state.selected === 'venues' && (
            currentVenues
          )}
        </ul>
      </div>
    )
  }
}

export default TopContainer