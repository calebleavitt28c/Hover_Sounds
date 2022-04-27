import React, { useEffect, useState } from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'
import VenueHome from '../venue/VenueHome'
import ArtistHome from '../artist/ArtistHome'
import AboutVenue from '../venue/AboutVenue'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const Event = (props) => {
  const { userId, userType } = props
  const [artist, setArtist] = useState({})
  const [venue, setVenue] = useState({})
  const [event, setEvent] = useState({})
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [dataLoaded, setLoaded] = useState(false)

  let { venueId, artistId, eventId } = useParams()

  useEffect(() => {
      axios.get(`https://api.hoveringrecords.com/hover/events/venue/${venueId}/${eventId}`)
        .then(response => {
          let data = response.data.Item
          setEvent(data)
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
          axios.get(`https://api.hoveringrecords.com/hover/events/artist/${artistId}`)
            .then(response => {
              let data = response.data.Items
              setEvents([...data])
            })
        )
        .then(
          axios.get(`https://api.hoveringrecords.com/hover/events/venue/${venueId}`)
            .then(response => {
              let data = response.data.Items
              setEvents(...events, data)
            })
        )
        .then(
          setLoaded(true)
        )
  }, [])

  const content = (dataLoaded) => {
    if (dataLoaded) {
      return(
        <div className='flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300'>
          <div className="border-r w-3/12 ease-in duration-300">
            <ArtistHome name={artist.name} artistId={artistId} spotifyId={artist.spotifyId} fanId={userId} userType={userType} event={true} />
            <VenueHome name={venue.name} venueId={venueId} fanId={userId} userType={userType} event={true} />
            <AboutVenue venue={venue} />
          </div>
          <div className="w-[5%]"></div>
          <div className="border-black w-[40%] dark:border-primary ease-in duration-300">
            <PostContainer />
          </div>
          <div className="w-[5%]"></div>
          <div id="eventTable" className="border-l w-4/12 ease-in duration-300">
            <EventTable events={events} page={'Venue'} />
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