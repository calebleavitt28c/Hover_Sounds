import React from 'react'
import Post from './Post'
import TopContainer from './TopContainer'
import EventTable from './EventTable'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {

    return(
      <div className="grid grid-cols-12 gap-4 p-4">
        <div id="topContainer" className="col-span-3 border-2 border-black">
          {/* top artists, events, venues */}
          <TopContainer />
        </div>
        <div className="col-span-6 border-2 border-black">
          {/* POSTS */}
          <ul>
            
          </ul>
        </div>
        <div id="eventTable" className=" max-h-800px col-span-3 border-2 border-black">
          {/* EVENTS */}
          <EventTable />
        </div>
      </div>
    );
  }
}

export default Home