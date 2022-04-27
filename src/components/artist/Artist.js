import React, { useEffect, useState } from 'react'
import PostContainer from '../home/PostContainer'
import ArtistEventTable from './ArtistEventTable'
import ArtistHome from './ArtistHome'
import ArtistMerchContainer from './ArtistMerchContainer'
import AboutArtist from './AboutArtist'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const Artist = (props) => {
  const { userId, userType } = props

  const [artist, setArtist] = useState({})
  const [merch, setMerch] = useState([])
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])

  let { artistId } = useParams()

  useEffect(() => {
      axios.get(`https://api.hoveringrecords.com/hover/artists/${artistId}`)
        .then(response => {
          let data = response.data.Item
          setArtist(data)
        })
    
      axios.get(`https://api.hoveringrecords.com/hover/store/${artistId}`)
        .then(response => {
          let data = response.data.Items
          setMerch(data)
        })
    
      axios.get(`https://api.hoveringrecords.com/hover/events/artist/${artistId}`)
        .then(response => {
          let data = response.data.Items
          setEvents(data)
        })
  }, [])

  return(
    <div className="flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300">
      <div id="" className="border-r w-3/12 ease-in duration-300">
        {/* merchandise + heart */}
        <ArtistHome name={artist.name} artistId={artistId} fanId={userId} userType={userType} spotifyId={artist.spotifyId} />
        <ArtistMerchContainer artistId={artistId}/>
      </div>
      <div className="w-[5%]"></div>
      <div className="border-black w-[40%] dark:border-primary ease-in duration-300">
        {/* POSTS */}
        <PostContainer />
      </div>
      <div className="w-[5%]"></div>
      <div id="eventTable" className="border-l w-4/12 ease-in duration-300">
        {/* EVENTS */}
        <ArtistEventTable events={events} h={"h-[14rem]"} page={'Artist'} />
        <AboutArtist name={artist.name} bio={artist.bio} image={artist.profilePic} />
      </div>
    </div>
  )
}

export default Artist