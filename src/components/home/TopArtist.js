import React from 'react'

class TopArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
        <li className="p-3 hover:bg-secondary hover:text-primary">
          <a className="grid grid-cols-6" href={`/artists/${this.props.id}`}>
            <div className="col-span-1">
              <h1>{this.props.place}.</h1>
            </div>
            <div className="col-span-3">
              <h3 className='truncate'>{this.props.name}</h3>
            </div>
            <div className="col-span-2">
              <h1 className="text-center">{this.props.favorites}</h1>
            </div>
          </a>
        </li>
    );
  }
}

export default TopArtist