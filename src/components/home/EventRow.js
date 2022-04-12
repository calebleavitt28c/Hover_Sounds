import React from 'react'

class EventRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      // make full event clickable
      <li className="bg-white border-b hover:bg-secondary dark:bg-gray-800 dark:border-gray-700" data-href={`/events/${this.props.id}`}>
        <a href={`/events/${this.props.id}`} className="grid grid-cols-12">
          <div className="col-span-4 py-2 text-center text-xxs">{this.props.artist}</div>
          <div className="col-span-3 py-2 text-center text-xxs">{this.props.venue}</div>
          <div className="col-span-3 py-2 text-center text-xxs">{this.props.date}</div>
          <div className="col-span-2 py-2 text-center text-xxs">{this.props.time}</div>
        </a>
      </li>
    );
  }
}

export default EventRow