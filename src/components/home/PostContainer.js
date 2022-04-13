import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import Post from './Post'

class PostContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const posts = [
      {
        id: 0,
        artist: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108'
      },
      {
        id: 0,
        artist: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108'
      },
      {
        id: 0,
        artist: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108'
      },
      {
        id: 0,
        artist: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108'
      },
    ]
  
    const postItems = []
  
    for (let post of posts) {
      postItems.push(
        <Post key={`image${post.id}`} id={post.id} artist={post.artist} date={post.date} time={post.time} image={post.image} caption={post.caption} url={post.url} />
      )
    }
    
    return(
      <div className="">
        <ul className="posts-striped scrollbar-thin max-h-[35.85rem] scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
          {postItems}
        </ul>
      </div>
    )
  }
  
}

export default PostContainer