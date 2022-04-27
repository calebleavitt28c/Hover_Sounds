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
    <div className="flex gap-4 p-4 h-[80%] dark:bg-darkgray dark:text-lightgray ease-in duration-300">
      <div id="" className="border-r w-3/12 ease-in duration-300">
        {/* merchandise + heart */}
        <ArtistHome name={artist.name} favorite={favorited} artistId={artistId} fanId={userId} spotifyId={artist.spotifyId} spotifyToken={'BQAFF5J6t7IZK6QibshYSg1wKJZ-eV4pWQ3s2GTJkUeVz24gw9mr0F57VuUufBCUfu8mN09q-NaydDIsJi6rSfgmIULt5MkSQzwRjYI40upQV7_QqUE_JCfRm-kuqewHdkwdl7RL1gVn1vtSbt68sFNPeVFO3yIBQ1p-ubslHgE'} />
        <ArtistMerchContainer artistId={artistId}/>
      </div>
      <div className="border-x border-black w-6/12 dark:border-primary ease-in duration-300">
        {/* POSTS */}
        <PostContainer />
      </div>
      <div id="eventTable" className="border-l w-3/12 ease-in duration-300">
        {/* EVENTS */}
        <ArtistEventTable events={events} h={"h-[14rem]"} page={'Artist'} />
        <AboutArtist name={artist.name} bio={artist.bio} image={artist.profilePic}/>
      </div>
    </div>
  )
}

export default Artist