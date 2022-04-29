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
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    for (let [i, v] of this.props.events.entries()) {
      let nd = new Date(v.date)
      let date = `${month[nd.getMonth()]} ${nd.getDay()}, ${nd.getFullYear()}`
      let hr = nd.getHours()
      let time = `${ hr > 12 ? hr-12 : hr }:${nd.getMinutes().toString().padStart(2, '0')} ${hr > 12 ? 'PM' : 'AM'}`
      eventItems.push(
        <EventRow key={`event${i}`} id={v.id} artist={v.artist} artistId={v.artistId} venueId={v.venueId} venue={v.venue} date={date} time={time}></EventRow>
      )
    }

    return(
      <div className="flex flex-col h-1/2 border-b">
        <div className="grid grid-cols-12 text-xs border-b uppercase bg-white dark:bg-darkgray ease-in duration-300">
          <div className="col-span-4 py-3 text-gray text-center">Artist</div>
          <div className="col-span-4 py-3 text-gray text-center">Venue</div>
          <div className="col-span-2 py-3 text-gray text-center">Date</div>
          <div className="col-span-2 py-3 text-gray text-center">Time</div>
        </div>
        <ul id={`eventList${this.props.page}`} className="max-h-full scrollbar-none scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
            {eventItems}
        </ul>
      </div>
    );
  }
}

export default ArtistEventTable