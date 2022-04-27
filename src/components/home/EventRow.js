import React from 'react'
import { Link } from 'react-router-dom';

class EventRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      // make full event clickable
      <li className="bg-white text-xxs hover:text-xs dark:bg-darkgray hover:bg-lightgray dark:hover:bg-black hover:text-darkgray ease-in duration-300" data-href={`/events/${this.props.id}`}>
        <Link to={`/events/${this.props.venueId}/${this.props.artistId}/${this.props.id}`} className="grid grid-cols-12">
          <div className="col-span-4 py-2 text-center">{this.props.artist}</div>
          <div className="col-span-4 py-2 text-center">{this.props.venue}</div>
          <div className="col-span-2 py-2 text-center">{this.props.date}</div>
          <div className="col-span-2 py-2 text-center">{this.props.time}</div>
        </Link>
      </li>
    );
  }
}

export default EventRow