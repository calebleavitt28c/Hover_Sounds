import React, { useEffect, useState } from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const Artist = (props) => {
  const { userId, userType } = props

  const [venue, setVenue] = useState({})
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [favorited, setFavorited] = useState(false)

  let { venueId } = useParams()

  useEffect(() => {
      axios.get(`https://api.hoveringrecords.com/hover/venues/${venueId}`)
        .then(response => {
          let data = response.data.Item
          setVenue(data)
        })
        
      axios.get(`https://api.hoveringrecords.com/hover/events/venue/${venueId}`)
        .then(response => {
          let data = response.data.Items
          setEvents(data)
        })
  }, [])

  return(
    <div className="grid grid-cols-12 gap-4 p-4 h-full dark:bg-darkgray dark:text-lightgray ease-in duration-300">
      <div id="" className="col-span-3 ease-in duration-300">
        {/* merchandise + heart */}
      </div>
      <div className="col-span-6 border-2 border-black dark:border-primary ease-in duration-300">
        {/* POSTS */}
        <PostContainer />
      </div>
      <div id="eventTable" className="col-span-3 ease-in duration-300">
        {/* EVENTS */}
        <EventTable events={events} h={"h-[14rem]"} page={'Artist'} />
        {/* aboutVenue */}
      </div>
    </div>
  )
}

export default Artist