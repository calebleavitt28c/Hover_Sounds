import React from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'
import ArtistHome from './ArtistHome'

import axios from 'axios'

class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      merch: [],
      posts: [],
      events: []
    }
  }

  componentDidMount() {
    // axios.get('https://api.hoveringrecords.com/hover/artists/{id}')
    //   .then(response => {
    //     let data = response.data.Items
    //     this.setState({ topArtists: data })
    //   })

    axios.get('https://api.hoveringrecords.com/hover/events/artist/lkawjrtopiautrpiawjifl')
    .then(response => {
      let data = response.data.Items
      this.setState({ events: data })
    })
  }

  render() {
    return(
      <div className="grid grid-cols-12 gap-4 p-4 h-full dark:bg-darkgray dark:text-lightgray ease-in duration-300">
        <div id="" className="col-span-3 border-2 border-black dark:border-primary ease-in duration-300">
          {/* merchandise + heart */}
          <ArtistHome name={'Coldplay'}favorite={true} />
        </div>
        <div className="col-span-6 border-2 border-black dark:border-primary ease-in duration-300">
          {/* POSTS */}
          <PostContainer />
        </div>
        <div id="eventTable" className="col-span-3 border-2 border-black dark:border-primary ease-in duration-300">
          {/* EVENTS */}
          <EventTable events={this.state.events} className=" max-h-[16rem]"/>
        </div>
      </div>
    );
  }
}

export default Artist