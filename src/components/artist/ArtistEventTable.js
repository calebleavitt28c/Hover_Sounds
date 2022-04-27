import React from 'react'
import EventRow from '../home/EventRow'

class ArtistEventTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const eventItems = []

    for (let [i, v] of this.props.events.entries()) {
      for (let z = 0; z < 50; z++) {
        eventItems.push(
          <EventRow key={`event${i}`} id={v.id} artist={v.artist} venue={v.venue} date={v.date} time={v.time}></EventRow>
        )
      }
      
    }

    return(
      <div className="flex flex-col h-1/2 border-b">
        <div className="grid grid-cols-12 max-h-[10%] text-xs border-b-2 uppercase bg-white dark:bg-darkgray ease-in duration-300">
          <div className="col-span-4 py-3 text-gray text-center">Artist</div>
          <div className="col-span-3 py-3 text-gray text-center">Venue</div>
          <div className="col-span-3 py-3 text-gray text-center">Date</div>
          <div className="col-span-2 py-3 text-gray text-center">Time</div>
        </div>
        <ul id={`eventList${this.props.page}`} className="max-h-full striped scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
            {eventItems}
        </ul>
      </div>
    );
  }
}

export default ArtistEventTable