import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import axios from 'axios'

class AboutVenue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      venue: this.props.venue,
      showingInfoWindow: false,
      dataLoaded: false, 
      lat: null,
      lng: null
    }
  }

  containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '300px'
  }

  componentDidMount() {
    const { lat, lng, id } = this.props.venue
    this.setState({ lat, lng, dataLoaded: true})

    
  }

  render() {
    const { dataLoaded, lat, lng } = this.state
                    
    if (dataLoaded) {
      return(
        <div className="mt-2 border-2 dark:border-primary h-[32.3rem] max-h-[35.85rem] items-striped scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
          <Map google={this.props.google} 
            initialCenter={ { lat, lng } } 
            zoom={10} 
            containerStyle={this.containerStyle} >
            <Marker 
            title={this.state.venue.name} 
            position={ { lat, lng } }
            />
          </Map>
        </div>
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }
}

AboutVenue.defaultProps = {

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBAx1Dk5NOMiAPeYbK0GtJlx4RA3uem40U'
})(AboutVenue)