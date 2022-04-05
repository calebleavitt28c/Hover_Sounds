import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class EventDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: '',
      venue: '',
      address: '',
      images: [],
    }
  }
  
  render() {
    return(
      <>
        <div class="row">
          <div class="column">
            <h1>{this.props.price}</h1>
          </div>
          <div class="column">
            <Map google={this.props.google} />
          </div>
        </div>
        <div class="row">
          <img src={this.props.image} alt={this.props.item} height="400px" width="auto"/>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBAx1Dk5NOMiAPeYbK0GtJlx4RA3uem40U'
 })(EventDetails);