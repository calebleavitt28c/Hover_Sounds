import React, { useEffect, useState } from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'
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
  const [favorited, setFavorited] = useState(false)

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
    <div className="grid grid-cols-12 gap-4 p-4 h-full dark:bg-darkgray dark:text-lightgray ease-in duration-300">
      <div id="" className="col-span-3 ease-in duration-300">
        {/* merchandise + heart */}
        <ArtistHome name={artist.name} favorite={favorited} artistId={artistId} fanId={userId} spotifyId={artist.spotifyId} spotifyToken={'BQAFF5J6t7IZK6QibshYSg1wKJZ-eV4pWQ3s2GTJkUeVz24gw9mr0F57VuUufBCUfu8mN09q-NaydDIsJi6rSfgmIULt5MkSQzwRjYI40upQV7_QqUE_JCfRm-kuqewHdkwdl7RL1gVn1vtSbt68sFNPeVFO3yIBQ1p-ubslHgE'} />
        <ArtistMerchContainer artistId={artistId}/>
      </div>
      <div className="col-span-6 border-2 border-black dark:border-primary ease-in duration-300">
        {/* POSTS */}
        <PostContainer />
      </div>
      <div id="eventTable" className="col-span-3 ease-in duration-300">
        {/* EVENTS */}
        <EventTable events={events} h={"h-[14rem]"} page={'Artist'} />
        <AboutArtist name={artist.name} bio={artist.bio} image={'https://s1.ticketm.net/dam/a/742/52406a76-80d9-47a9-8c95-fabaa7a9d742_1531071_TABLET_LANDSCAPE_LARGE_16_9.jpg'}/>
      </div>
    </div>
  )
}

export default Artist