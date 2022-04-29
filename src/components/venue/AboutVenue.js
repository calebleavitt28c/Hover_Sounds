import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
//import axios from 'axios'

class AboutVenue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '250px'
  }

  render() {
    const { lat, lng, bio } = this.props.venue
    return(
      <div className="mt-2 mx-2 h-fit">
        { lat !== undefined && (
            <Map google={this.props.google} 
              initialCenter={{ lat, lng }}
              center={{ lat, lng }}
              zoom={10} 
              containerStyle={this.containerStyle} >
              <Marker 
              title={this.props.venue.name} 
              position={ { lat, lng } }
              />
          </Map>
        )}
        <div className='bg-lightgray dark:bg-darkgray dark:shadow-sm dark:shadow-gray rounded-xl p-2 my-4 h-full shadow-lg'>
          <p className='block mt-2 px-2 overflow-scroll scrollbar-none text-xs uppercase tracking-widest'>{bio}</p>
        </div>
      </div>
      )
  }
}

AboutVenue.defaultProps = {

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBAx1Dk5NOMiAPeYbK0GtJlx4RA3uem40U'
})(AboutVenue)