import React from 'react'
import EventRow from './EventRow'

class EventTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }
  render() {
    //call API for events
    const eventItems = []

    for (let event of this.props.events) {
      eventItems.push(
        <EventRow artist={event.artist} venue={event.venue} date={event.date} time={event.time}></EventRow>
      )
    }

    return(
      <table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3">Artist</th>
            <th class="px-6 py-3">Venue</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {eventItems}
        </tbody>
      </table>
    );
  }
}

export default EventTable