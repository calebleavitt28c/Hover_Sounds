import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import axios from 'axios'

class AboutVenue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      venue: this.props.venue,
      showingInfoWindow: false,
      lat: this.props.venue.lat,
      lng: this.props.venue.lng
    }
  }

  containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '300px'
  }

  render() {
    const { lat, lng } = this.props.venue
    return(
      <div className="mt-2">
        { lat !== undefined && (
            <Map google={this.props.google} 
            initialCenter={ { lat, lng } } 
            zoom={10} 
            containerStyle={this.containerStyle} >
            <Marker 
            title={this.state.venue.name} 
            position={ { lat, lng } }
            />
          </Map>
        )}
      </div>
      )
  }
}

AboutVenue.defaultProps = {

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBAx1Dk5NOMiAPeYbK0GtJlx4RA3uem40U'
})(AboutVenue)