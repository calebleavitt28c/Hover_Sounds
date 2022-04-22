import React from 'react'
import TopContainer from './TopContainer'
import PostContainer from './PostContainer'
import EventTable from './EventTable'

import axios from 'axios'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topArtists: [],
      topVenues: [],

      events: []
    }
  }

  componentDidMount() {
      axios.get('https://api.hoveringrecords.com/hover/artists')
        .then(response => {
          let data = response.data.Items
          data.sort((a, b) => (a.favorites < b.favorites) ? 1 : -1)
          this.setState({ topArtists: data.slice(0, 10) })
        })
      axios.get('https://api.hoveringrecords.com/hover/venues')
        .then(response => {
          let data = response.data.Items
          data.sort((a, b) => (a.favorites < b.favorites) ? 1 : -1)
          this.setState({ topVenues: data.slice(0, 10) })
        })
      axios.get('https://api.hoveringrecords.com/hover/events')
        .then(response => {
          let data = response.data.Items
          data.sort((a, b) => (a.date < b.date) ? 1 : -1)
          this.setState({ events: data })
        })
  }

  render() {
    return(
      <div className="grid grid-cols-12 gap-4 p-4 h-full dark:bg-darkgray dark:text-lightgray">
        <div id="topContainer" className="col-span-3 border-2 border-black dark:border-primary">
          {/* top artists, events, venues */}
          <TopContainer topArtists={this.state.topArtists} topVenues={this.state.topVenues} />
        </div>
        <div className="col-span-6 border-2 border-black dark:border-primary">
          {/* POSTS */}
          <PostContainer />
        </div>
        <div id="eventTable" className="col-span-3 ease-in duration-300">
          {/* EVENTS */}
          <EventTable events={this.state.events} h={'h-[33.1rem]'} page={'Home'} />
        </div>
      </div>
    );
  }
}

export default Home