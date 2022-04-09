import React from 'react'

class ArtistMerch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      item: '',
      price: '',
      image: '',
    }
  }
  render() {
    return(
      <div class="row">
        <div class="column">
          <h1>{this.props.item}</h1>
          <h1>{this.props.price}</h1>
        </div>
        <div class="column">
          <img src={this.props.image} alt={this.props.item} height="400px" width="auto"/>
        </div>
      </div>
    );
  }
}

export default ArtistMerch