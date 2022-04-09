import React from 'react'

class TopArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: ''
    }
  }
  render() {
    return(
      <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
        role="tablist">
        <li class="nav-item flex-auto text-center" role="presentation">
          <button href="#tabs-homeFill" class="
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
            aria-controls="tabs-homeFill" aria-selected="true">Top Artists</button>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <button href="#tabs-profileFill" class="
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
            aria-controls="tabs-profileFill" aria-selected="false">Top Venues</button>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <button href="#tabs-messagesFill" class="
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
            aria-controls="tabs-messagesFill" aria-selected="false">Top Events</button>
        </li>
      </ul>
    )
  }
}

export default TopArtist