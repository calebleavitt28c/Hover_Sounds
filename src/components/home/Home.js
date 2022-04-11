import React from 'react'
import Post from './Post'
import TopContainer from './TopContainer'
import EventTable from './EventTable'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    const posts = [
      
    ]
    const postItems = []

    // for (let post of this.props.posts) {
    //   postItems.push(
    //     <Post profile={post.profile} name={post.name} image={post.image} caption={post.caption}></Post>
    //   )
    // }

    return(
      <div className="grid grid-cols-12 px-4">
        <div className="col-span-3">
          {/* top artists, events, venues */}
          <TopContainer />
        </div>
        <div className="col-span-6">
          {/* POSTS */}
          <ul>
            {postItems}
          </ul>
        </div>
        <div className="col-span-3">
          {/* EVENTS */}
          <EventTable />
        </div>
      </div>
    );
  }
}

export default Home