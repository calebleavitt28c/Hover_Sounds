import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import TopContainer from './TopContainer'
import PostContainer from './PostContainer'
import EventTable from './EventTable'

import Pool from '../auth/UserPool'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topArtists: [],
      topVenues: [],

      events: []
    }
  }

  componentDidMount() {
    getSession()
      .then(session => {
        Cookies.set('userId', session.sub)
        Cookies.set('userType', session.profile)
      })
    axios.get('https://api.hoveringrecords.com/hover/artists')
      .then(response => {
        let data = response.data.Items
        localStorage.setItem('artists', JSON.stringify(data))
        data.sort((a, b) => (a.favorites < b.favorites) ? 1 : -1)
        this.setState({ topArtists: data.slice(0, 50) })
      })
    axios.get('https://api.hoveringrecords.com/hover/venues')
      .then(response => {
        let data = response.data.Items
        localStorage.setItem('venues', JSON.stringify(data))
        data.sort((a, b) => (a.favorites < b.favorites) ? 1 : -1)
        this.setState({ topVenues: data.slice(0, 50) })
      })
    axios.get('https://api.hoveringrecords.com/hover/events')
      .then(response => {
        let data = response.data.Items
        localStorage.setItem('events', JSON.stringify(data))
        data.sort((a, b) => new Date(a.date) - new Date(b.date))
        this.setState({ events: data })
      })
  }

  render() {
    return(
      <div className="flex gap-4 p-4 h-[80vh] dark:bg-darkgray dark:text-lightgray ease-in duration-300">
        <div id="topContainer" className="border-r w-3/12 border-black dark:border-lightgray">
          {/* top artists, events, venues */}
          <TopContainer topArtists={this.state.topArtists} topVenues={this.state.topVenues} />
        </div>
        <div className="border-black w-[50%] dark:border-lightgray">
          {/* POSTS */}
          <PostContainer />
        </div>
        <div id="eventTable" className="border-l w-4/12 border-black dark:border-lightgray">
          {/* EVENTS */}
          <EventTable events={this.state.events} page={'Home'} />
        </div>
      </div>
    );
  }
}

const getSession = async () => {
  return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
          user.getSession(async (err, session) => {
              if (err) {
                  reject()
              } else {
                  const attributes = await new Promise((resolve, reject) => {
                      user.getUserAttributes((err, attributes) => {
                          if (err) {
                              reject(err) 
                          } else {
                              const results = {}

                              for (let attribute of attributes) {
                                  const { Name, Value } = attribute
                                  results[Name] = Value
                              }
                              resolve(results)
                          }
                      })
                  })
                  resolve({ user, ...session, ...attributes })
              }
          })
      } else {
          reject()
      }
  })
}

export default Home