import React from 'react'

class ArtistMerch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <li className="border-b">
        <a className="grid grid-cols-6" href={`/store/${this.props.id}`}>
        <h1 className="col-span-2">{this.props.name}</h1>
        <h1 className="col-span-1">{this.props.price}</h1>
        <div className="col-span-3 flex">
          <img className="h-24 object-fit m-auto" src={this.props.image} alt={this.props.item} height="400px" width="auto"/>
        </div>
        </a>
      </li>
    );
  }
}

export default ArtistMerch