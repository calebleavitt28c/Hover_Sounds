import React from 'react'
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
        user: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'https://twitter.com/coldplay/status/1508822711874863108',
        profile: 'https://pbs.twimg.com/profile_images/1417506973877211138/YIm7dOQH_400x400.jpg'
      },
      {
        id: 1,
        user: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108',
        profile: 'https://pbs.twimg.com/profile_images/1417506973877211138/YIm7dOQH_400x400.jpg'
      },
      {
        id: 2,
        user: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108',
        profile: 'https://pbs.twimg.com/profile_images/1417506973877211138/YIm7dOQH_400x400.jpg'
      },
      {
        id: 3,
        user: 'Coldplay',
        date: '03/29/2022',
        time: '9:05 AM',
        image: 'https://pbs.twimg.com/media/FPBqQAAX0AYO1oJ?format=jpg&name=4096x4096',
        caption: 'Thank you @Spotify ❤️🖤🤍',
        url: 'https://twitter.com/coldplay/status/1508822711874863108',
        profile: 'https://pbs.twimg.com/profile_images/1417506973877211138/YIm7dOQH_400x400.jpg'
      },
    ]
  
    const postItems = []
    
    let modal = 1000
    for (let post of posts) {
      postItems.push(
        <Post key={`image${post.id}`} modal={modal} id={post.id} user={post.user} profile={post.profile} artist={post.artist} date={post.date} time={post.time} image={post.image} caption={post.caption} url={post.url} />
      )
      modal++
    }
    
    return(
      <div className="flex flex-col h-full w-full">
        <ul className="max-h-full scrollbar-none scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
          {postItems}
        </ul>
      </div>
    )
  }
  
}

export default PostContainer