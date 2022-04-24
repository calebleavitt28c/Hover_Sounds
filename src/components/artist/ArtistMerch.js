import React from 'react'
import { Link } from 'react-router-dom'

class ArtistMerch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <li className="border-b">
        <Link className="grid grid-cols-6" to={`/store/${this.props.artistId}`}>
        <h1 className="col-span-2">{this.props.name}</h1>
        <h1 className="col-span-1">{this.props.price}</h1>
        <div className="col-span-3 flex">
          <img className="h-24 object-fit m-auto" src={this.props.image} alt={this.props.item} height="400px" width="auto"/>
        </div>
        </Link>
      </li>
    );
  }
}

export default ArtistMerch