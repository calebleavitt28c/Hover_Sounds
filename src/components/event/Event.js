import React, { useEffect, useState } from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'
import VenueHome from '../venue/VenueHome'
import ArtistHome from '../artist/ArtistHome'
import EventHome from '../event/EventHome'
import AboutVenue from '../venue/AboutVenue'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const Event = (props) => {
  const { userId, userType } = props
  const [artist, setArtist] = useState({})
  const [venue, setVenue] = useState({})
  const [event, setEvent] = useState({})
  const [date, setDate] = useState('')
  //const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [dataLoaded, setLoaded] = useState(false)

  let { venueId, artistId, eventId } = useParams()

  useEffect(() => {
      axios.get(`https://api.hoveringrecords.com/hover/events/venue/${venueId}/${eventId}`)
        .then(response => {
          let data = response.data.Item
          setEvent(data)
          const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          let nd = new Date(data.date)
          setDate(`${month[nd.getMonth()]} ${nd.getDay()}, ${nd.getFullYear()}`)
        })
        .then(
          axios.get(`https://api.hoveringrecords.com/hover/artists/${artistId}`)
            .then(response => {
              let data = response.data.Item
              setArtist(data)
            })
        )
        .then(
          axios.get(`https://api.hoveringrecords.com/hover/venues/${venueId}`)
            .then(response => {
              let data = response.data.Item
              setVenue(data)
            })
        )
        .then(
          axios.get('https://api.hoveringrecords.com/hover/events')
            .then(response => {
              let data = response.data.Items
              data.sort((a, b) => {
                let da = new Date(`${a.date} ${a.time}`)
                let db =  new Date(`${b.date} ${b.time}`)
                return da - db
              })
              setEvents(data)
            })
        )
        .then(() => {
          
          setLoaded(true)
        })
  }, [venueId, artistId, eventId])

  const content = (dataLoaded) => {
    if (dataLoaded) {
      return(
        <div className='flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300'>
          <div className="flex flex-col border-r w-3/12 ease-in duration-300">
            <EventHome date={date} time={event.time} />
            <ArtistHome name={artist.name} artistId={artistId} spotifyId={artist.spotifyId} fanId={userId} userType={userType} event={true} />
            <VenueHome name={venue.name} venueId={venueId} fanId={userId} userType={userType} event={true} />
            <AboutVenue venue={venue} words={false} />
            <a href={`https://seatgeek.com/`} target="_blank" rel="noreferrer"  className="bg-primary hover:bg-secondary text-white text-center font-bold py-2 px-4 mt-6 mx-2 rounded focus:outline-none focus:shadow-outline ease-in duration-300">Buy Tickets</a>
          </div>
          <div className="border-black w-[50%] dark:border-primary ease-in duration-300">
            <PostContainer />
          </div>
          <div id="eventTable" className="border-l w-4/12 ease-in duration-300">
            <EventTable events={events} page={'Venue'} selected={eventId} />
          </div>
        </div>
      )
    }
    else {
      return(
        <div>Loading...</div>
      )
    }
  }

  return(
    content(dataLoaded)
  )
}

export default Event