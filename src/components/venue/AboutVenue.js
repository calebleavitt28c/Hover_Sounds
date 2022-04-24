import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick}
          name={this.props.name} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.props.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBAx1Dk5NOMiAPeYbK0GtJlx4RA3uem40U'
})(MapContainer)