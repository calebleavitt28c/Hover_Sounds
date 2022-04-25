import React, { useEffect, useState } from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'
import VenueHome from './VenueHome'
import AboutVenue from './AboutVenue'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const Venue = (props) => {
  const { userId, userType } = props

  const [venue, setVenue] = useState({})
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [favorited, setFavorited] = useState(false)
  const [dataLoaded, setLoaded] = useState(false)

  let { venueId } = useParams()

  useEffect(() => {
      axios.get(`https://api.hoveringrecords.com/hover/venues/${venueId}`)
        .then(response => {
          let data = response.data.Item
          setVenue(data)
        })
        .then(
          axios.get(`https://api.hoveringrecords.com/hover/events/venue/${venueId}`)
            .then(response => {
              let data = response.data.Items
              setEvents(data)
            })
        )
        .then(
          setLoaded(true)
        )
        
      
  }, [])

  const content = (dataLoaded) => {
    if (dataLoaded) {
      return(
        <div className='grid grid-cols-12 gap-4 p-4 h-full dark:bg-darkgray dark:text-lightgray ease-in duration-300'>
          <div id="" className="col-span-3 ease-in duration-300">
            <VenueHome name={venue.name} favorite={favorited} venueId={venueId} fanId={userId} />
            <AboutVenue venue={venue} />
          </div>
          <div className="col-span-6 border-2 border-black dark:border-primary ease-in duration-300">
            <PostContainer />
          </div>
          <div id="eventTable" className="col-span-3 ease-in duration-300">
            <EventTable events={events} h={"h-[33.1rem]"} page={'Venue'} />
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

export default Venue