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
              data.sort((a, b) => (a.date > b.date) ? 1 : -1)
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
        <div className='flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300'>
          <div id="" className="border-r w-3/12 ease-in duration-300">
            <VenueHome name={venue.name} venueId={venueId} fanId={userId} userType={userType} />
            <AboutVenue venue={venue} />
          </div>
          <div className="w-[5%]" />
          <div className="border-black w-[40%] dark:border-primary ease-in duration-300">
            <PostContainer />
          </div>
          <div className="w-[5%]" />
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

export default Venue