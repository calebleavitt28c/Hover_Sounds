import React from 'react'
import Post from './Post'
import EventRow from './EventRow'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      events: []
    }
  }
  render() {
    const postItems = []
    const eventItems = []

    for (let post of this.props.posts) {
      postItems.push(
        <Post profile={post.profile} name={post.name} image={post.image} caption={post.caption}></Post>
      )
    }

    for (let event of this.props.events) {
      eventItems.push(
        <EventRow artist={event.artist} venue={event.venue} date={event.date} time={event.time}></EventRow>
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
          <table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th class="px-6 py-3">Artist</th>
                <th class="px-6 py-3">Venue</th>
                <th class="px-6 py-3">Date</th>
                <th class="px-6 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {eventItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home