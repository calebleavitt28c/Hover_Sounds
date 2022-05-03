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
  //const [posts, setPosts] = useState([])
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
              data.sort((a, b) => {
                let da = new Date(`${a.date} ${a.time}`)
                let db =  new Date(`${b.date} ${b.time}`)
                return da - db
              })
              setEvents(data)
            })
        )
        .then(
          setLoaded(true)
        )
        
      
  }, [venueId])

  const content = (dataLoaded) => {
    if (dataLoaded) {
      return(
        <div className='flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300'>
          <div id="" className="border-r w-3/12 ease-in duration-300">
            <VenueHome name={venue.name} venueId={venueId} fanId={userId} userType={userType} />
            <AboutVenue venue={venue} words={true} />
          </div>
          <div className="border-black w-[50%] dark:border-primary ease-in duration-300">
            <PostContainer />
          </div>
          <div id="eventTable" className="border-l w-4/12 ease-in duration-300">
            <EventTable events={events} page={'Venue'} />
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="flex justify-center items-center">
          <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }
  }

  return(
    content(dataLoaded)
  )
}

export default Venue