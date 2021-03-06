import React from 'react'
import EventRow from './EventRow'

class EventTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const { selected, events } = this.props
    const eventItems = []
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    events.sort((a, b) => {
      let da = new Date(`${a.date} ${a.time}`)
      let db =  new Date(`${b.date} ${b.time}`)
      return da - db
    })
    for (let [i, v] of events.entries()) {
      let nd = new Date(`${v.date} ${v.time}`)
      let date = `${month[nd.getMonth()]} ${nd.getDate()}, ${nd.getFullYear()}`
      let hr = nd.getHours()
      let time = `${ hr > 12 ? hr-12 : hr }:${nd.getMinutes().toString().padStart(2, '0')} ${hr > 12 ? 'PM' : 'AM'}`
      if (v.id === selected) {
        eventItems.push(
          <EventRow key={`event${i}`} id={v.id} artist={v.artist} venueId={v.venueId} artistId={v.artistId} venue={v.venue} date={date} time={time} selected={true}></EventRow>
        )
      }
      else {
        eventItems.push(
          <EventRow key={`event${i}`} id={v.id} artist={v.artist} venueId={v.venueId} artistId={v.artistId} venue={v.venue} date={date} time={time} selected={false}></EventRow>
        )
      }
    }

    return(
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-11 max-h-[10%] text-xs border-b uppercase bg-white dark:bg-darkgray ease-in duration-300">
          <div className="lg:col-span-3 sm:col-span-4 py-3 text-gray text-center">Artist</div>
          <div className="lg:col-span-3 sm:col-span-4 py-3 text-gray text-center">Venue</div>
          <div className="col-span-3 py-3 text-gray text-center">Date</div>
          <div className="col-span-2 py-3 text-gray text-center lg:block sm:hidden">Time</div>
        </div>
        <ul id={`eventList${this.props.page}`} className="max-h-full scrollbar-none scrollbar-track-lightgray overflow-y-scroll">
            {eventItems}
        </ul>
      </div>
    );
  }
}

export default EventTable