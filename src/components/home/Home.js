import React from 'react'
import axios from 'axios'

import TopContainer from './TopContainer'
import PostContainer from './PostContainer'
import EventTable from './EventTable'

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
          this.setState({ topArtists: data.slice(0, 50) })
        })
      axios.get('https://api.hoveringrecords.com/hover/venues')
        .then(response => {
          let data = response.data.Items
          data.sort((a, b) => (a.favorites < b.favorites) ? 1 : -1)
          this.setState({ topVenues: data.slice(0, 50) })
        })
      axios.get('https://api.hoveringrecords.com/hover/events')
        .then(response => {
          let data = response.data.Items
          data.sort((a, b) => new Date(a.date) - new Date(b.date))
          this.setState({ events: data })
        })
  }

  render() {
    return(
      <div className="flex gap-4 p-4 h-[80vh] dark:bg-darkgray dark:text-lightgray ease-in duration-300">
        <div id="topContainer" className="border-r w-3/12 border-black dark:border-lightgray">
          {/* top artists, events, venues */}
          <TopContainer topArtists={this.state.topArtists} topVenues={this.state.topVenues} />
        </div>
        <div className="border-black w-[50%] dark:border-lightgray">
          {/* POSTS */}
          <PostContainer />
        </div>
        <div id="eventTable" className="border-l w-4/12 border-black dark:border-lightgray">
          {/* EVENTS */}
          <EventTable events={this.state.events} page={'Home'} />
        </div>
      </div>
    );
  }
}

export default Home