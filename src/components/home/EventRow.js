import React from 'react'
import { Link } from 'react-router-dom';

class EventRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  selectedClass = 'bg-lightgray text-xs font-bold hover:text-eventrow dark:bg-gray dark:text-darkgray hover:bg-lightgray dark:hover:bg-gray hover:text-darkgray ease-in duration-300'
  nonSelectedClass = 'bg-white text-xxs hover:text-eventrow dark:bg-darkgray hover:bg-lightgray dark:hover:bg-gray hover:text-darkgray ease-in duration-300'
  
  render() {
    const { selected } = this.props
    return(
      <li className={ selected ? this.selectedClass : this.nonSelectedClass} data-href={`/events/${this.props.id}`}>
        <Link to={`/events/${this.props.venueId}/${this.props.artistId}/${this.props.id}`} className="grid grid-cols-11">
          <div className="col-span-3 py-2 text-center">{this.props.artist}</div>
          <div className="col-span-3 py-2 text-center">{this.props.venue}</div>
          <div className="col-span-3 py-2 text-center">{this.props.date}</div>
          <div className="col-span-2 py-2 text-center">{this.props.time}</div>
        </Link>
      </li>
    );
  }
}

export default EventRow