import React from 'react'
import TopArtist from './TopArtist'
import TopVenue from './TopVenue'
import TopEvent from './TopEvent'

class TopList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'artists',
      artists: [],
      venues: [],
      events: [],

    }
  }
  render() {
    const current = []

    if (this.props.selected === 'artists') {
      //current = artists
      for (let [i, v] of this.props.artists.entries()) {
        current.push(
          <TopArtist place={i + 1} profile={v.profile} name={v.name} />
          )
      }
    }
    else if (this.props.selected === 'venues') {
      //current = venues
      for (let [i, v] of this.props.venues.entries()) {
        current.push(
          <TopVenue place={i + 1} name={v.name} />
          )
      }
    }
    else if (this.props.selected === 'events') {
      //current = events
      for (let [i, v] of this.props.events.entries()) {
        current.push(
          <TopEvent place={i + 1} profile={v.profile} name={v.name} />
          )
      }
    }
    return(
      <ol>
        {current}
      </ol>
    )
  }
}

export default TopList