import React from 'react'
import { Link } from 'react-router-dom'

class TopArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
        <li className="hover:bg-secondary dark:hover:bg-black hover:text-primary ease-in duration-100">
          <Link className="p-3 grid grid-cols-6" to={`/artist/${this.props.id}`}>
            <div className="col-span-1">
              <h1>{this.props.place}.</h1>
            </div>
            <div className="col-span-3">
              <h3 className='truncate'>{this.props.name}</h3>
            </div>
            <div className="col-span-2">
              <h1 className="text-center">{this.props.favorites}</h1>
            </div>
          </Link>
        </li>
    );
  }
}

export default TopArtist