import React from 'react'
import PostContainer from '../home/PostContainer'
import EventTable from '../home/EventTable'
import ArtistHome from './ArtistHome'
import ArtistMerchContainer from './ArtistMerchContainer'
import AboutArtist from './AboutArtist'

import axios from 'axios'

class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      merch: [],
      posts: [],
      events: []
    }
  }

  componentDidMount() {
    // axios.get('https://api.hoveringrecords.com/hover/artists/{id}')
    //   .then(response => {
    //     let data = response.data.Items
    //     this.setState({ topArtists: data })
    //   })

    axios.get('https://api.hoveringrecords.com/hover/events/artist/a5d4gf-a5df4a-adfgaf2-dadf85d')
    .then(response => {
      let data = response.data.Items
      this.setState({ events: data })
    })
  }

  render() {
    let text = 'lorem ipsum a;djsfklllllllll lllllllllllllll lllllllllalsjdfl;k sjdf;lkajsdl;kf jal;ksdjflk;as djfl;k'
    return(
      <div className="grid grid-cols-12 gap-4 p-4 h-full dark:bg-darkgray dark:text-lightgray ease-in duration-300">
        <div id="" className="col-span-3 ease-in duration-300">
          {/* merchandise + heart */}
          <ArtistHome name={'Coldplay'} favorite={false} artistId="a5d4gf-a5df4a-adfgaf2-dadf85d" fanId="5e266c25-f705-4f91-9a48-a28c9583d95a"/>
          <ArtistMerchContainer />
        </div>
        <div className="col-span-6 border-2 border-black dark:border-primary ease-in duration-300">
          {/* POSTS */}
          <PostContainer />
        </div>
        <div id="eventTable" className="col-span-3 ease-in duration-300">
          {/* EVENTS */}
          <EventTable events={this.state.events} h={"h-[14rem]"} page={'Artist'} />
          <AboutArtist name={'Coldplay'} bio={text} image={'https://s1.ticketm.net/dam/a/742/52406a76-80d9-47a9-8c95-fabaa7a9d742_1531071_TABLET_LANDSCAPE_LARGE_16_9.jpg'}/>
        </div>
      </div>
    );
  }
}

export default Artist