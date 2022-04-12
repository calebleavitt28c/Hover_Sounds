import React from 'react'
import TopContainer from './TopContainer'
import PostContainer from './PostContainer'
import EventTable from './EventTable'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {

    return(
      <div className="grid grid-cols-12 gap-4 p-4 h-full">
        <div id="topContainer" className="col-span-3 border-2 border-black">
          {/* top artists, events, venues */}
          <TopContainer />
        </div>
        <div className="col-span-6 border-2 border-black">
          {/* POSTS */}
          <PostContainer />
        </div>
        <div id="eventTable" className="col-span-3 border-2 border-black">
          {/* EVENTS */}
          <EventTable />
        </div>
      </div>
    );
  }
}

export default Home