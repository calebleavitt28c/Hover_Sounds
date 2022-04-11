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
        <div class="20% column">
          {/* top artists, events, venues */}

        </div>
        <div class="50% column">
          {/* POSTS */}
          <ul>
            {postItems}
          </ul>
        </div>
        <div class="30% column">
          {/* EVENTS */}
          <EventTable />
        </div>
      </div>
    );
  }
}

export default Home