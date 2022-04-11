import React from 'react'
import Post from './Post'
import EventTable from './EventTable'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  render() {

    const postItems = []

    for (let post of this.props.posts) {
      postItems.push(
        <Post profile={post.profile} name={post.name} image={post.image} caption={post.caption}></Post>
      )
    }

    return(
      <div>
        <div className="">
          {/* top artists, events, venues */}

        </div>
        <div className="">
          {/* POSTS */}
          <ul>
            {postItems}
          </ul>
        </div>
        <div className="">
          {/* EVENTS */}
          <EventTable />
        </div>
      </div>
    );
  }
}

export default Home