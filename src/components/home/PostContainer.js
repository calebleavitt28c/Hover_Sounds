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
        user: 'Cinders',
        date: '04/26/2022',
        time: '12:05 AM',
        caption: 'How are yall enjoying our new album No Ones Home',
        url: 'https://twitter.com',
        profile: 'https://i.scdn.co/image/ab6761610000e5eb50c486fd11d05ad644fc81f0'
      },
      {
        id: 2,
        user: 'Bad Suns',
        date: '04/12/2022',
        time: '12:00 AM',
        caption: 'Coming to Utah in June!',
        url: 'https://twitter.com',
        profile: 'https://i.scdn.co/image/ab6761610000e5eb6c81985ab688765564a3cc7b'
      },
      {
        id: 3,
        user: 'Vacation Manor',
        date: '04/12/2022',
        time: '10:00 AM',
        image: 'https://variancemagazine.com/images/vacation-manor--48393.jpg',
        caption: 'New single coming out soon!',
        url: 'https://twitter.com',
        profile: 'https://i.scdn.co/image/ab6761610000e5eb703d9cbd838f322598d36c38'
      },
      {
        id: 4,
        user: 'Imagine Dragons',
        date: '04/15/2022',
        time: '11:00 AM',
        image: 'https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e',
        caption: 'Who wants new merch!?',
        url: 'https://twitter.com',
        profile: 'https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e'
      },
      {
        id: 5,
        user: 'Twenty One Pilots',
        date: '04/20/2022',
        time: '4:20 AM',
        caption: 'High notes hit different',
        image: 'https://i.scdn.co/image/ab6761610000e5eb196972172c37d934d9ca8093',
        url: 'https://twitter.com',
        profile: 'https://i.scdn.co/image/ab6761610000e5eb196972172c37d934d9ca8093'
      },
      {
        id: 6,
        user: 'Olivia Rodrigo',
        date: '04/27/2022',
        time: '6:00 PM',
        image: 'https://i.scdn.co/image/ab6761610000e5ebee954a3b5418065c2fe253fb',
        caption: 'Sour patch kids are fav...',
        url: 'https://twitter.com',
        profile: 'https://i.scdn.co/image/ab6761610000e5ebee954a3b5418065c2fe253fb'
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