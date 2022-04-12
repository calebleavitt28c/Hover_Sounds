import React from 'react'
import EventRow from './EventRow'

class EventTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    //call API for events

    const events = [
      {
        id: 0,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 1,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 2,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 3,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 4,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 5,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 6,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 7,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 8,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 9,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 7,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 8,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 9,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 7,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 8,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 9,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 7,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 8,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 9,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 7,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
      {
        id: 8,
        artist: 'Coldplay',
        venue: 'Vivint Arena',
        date: 'April 10, 2022',
        time: '7:00 PM'
      },
      {
        id: 9,
        artist: 'Post Malone',
        venue: 'Tuacahn',
        date: 'April 11, 2022',
        time: '9:00 PM'
      },
    ]
    const eventItems = []

    for (let [i, v] of events.entries()) {
      eventItems.push(
        <EventRow key={`event${i}`} id={v.id} artist={v.artist} venue={v.venue} date={v.date} time={v.time}></EventRow>
      )
    }

    return(
      <div>
        <div className="grid grid-cols-12 text-xs border-b-2 uppercase bg-white">
          <div className="col-span-4 py-3 text-gray text-center">Artist</div>
          <div className="col-span-3 py-3 text-gray text-center">Venue</div>
          <div className="col-span-3 py-3 text-gray text-center">Date</div>
          <div className="col-span-2 py-3 text-gray text-center">Time</div>
        </div>
        <ul className="striped scrollbar-thin max-h-[33.1rem] scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
            {eventItems}
        </ul>
      </div>
    );
  }
}

export default EventTable