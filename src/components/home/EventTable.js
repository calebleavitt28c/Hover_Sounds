import React from 'react'
import EventRow from './EventRow'

class EventTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    let h = this.props.h
    document.getElementById(`eventList${this.props.page}`).classList.add(`${h}`)
    document.getElementById(`eventList${this.props.page}`).classList.add(`max-${h}`)
  }

  render() {
    const eventItems = []

    for (let [i, v] of this.props.events.entries()) {
      eventItems.push(
        <EventRow key={`event${i}`} id={v.id} artist={v.artist} venue={v.venue} date={v.date} time={v.time}></EventRow>
      )
    }

    return(
      <div className="border-2 dark:border-primary">
        <div className="grid grid-cols-12 text-xs border-b-2 uppercase bg-white dark:bg-darkgray ease-in duration-300">
          <div className="col-span-4 py-3 text-gray text-center">Artist</div>
          <div className="col-span-3 py-3 text-gray text-center">Venue</div>
          <div className="col-span-3 py-3 text-gray text-center">Date</div>
          <div className="col-span-2 py-3 text-gray text-center">Time</div>
        </div>
        <ul id={`eventList${this.props.page}`} className="striped scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
            {eventItems}
        </ul>
      </div>
    );
  }
}

export default EventTable