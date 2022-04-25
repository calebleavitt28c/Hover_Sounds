import axios from 'axios'
import React from 'react'

import Pool from '../auth/UserPool'

class VenueHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favorited: false,
    }
  }

  openHeart = '<svg class="bi bi-heart text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>'
  closedHeart = '<svg class="bi bi-heart-fill text-pink" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>'

  heartClick = () => {
    const { venueId, fanId } = this.props
    let favoriteBtn = document.getElementById('favoriteBtn')

    if (this.state.favorited) {
      favoriteBtn.innerHTML = this.openHeart
      favoriteBtn.classList.remove('filled')
      axios.post('https://api.hoveringrecords.com/hover/favorite', {
        table: 'venues',
        id: venueId,
        fanId: fanId,
        dir: '-'
      })
      .then(response => {

        console.log('unfavorited')
        this.setState({ favorited: false })
      })
    }
    else {
      favoriteBtn.innerHTML = this.closedHeart
      favoriteBtn.classList.add('filled')
      axios.post('https://api.hoveringrecords.com/hover/favorite', {
        table: 'venues',
        id: venueId,
        fanId: fanId,
        dir: '+'
      })
      .then(response => {

        console.log('favorited')
        this.setState({ favorited: true })
      })
    }
  }

  componentDidMount() {
    let favoriteBtn = document.getElementById('favoriteBtn')

    favoriteBtn.innerHTML = this.openHeart

    getSession()
      .then(session => {
        axios.get(`https://api.hoveringrecords.com/hover/fans/${session.sub}`)
        .then(response => {
          let data = response.data.Item
          if (data.hasOwnProperty('favVenues')) {
            if (data.favVenues.indexOf(this.props.venueId) > -1) {
              this.setState({ favorited: true })
              favoriteBtn.innerHTML = this.closedHeart
            }
          }
        })
      })
  }

  render() {
    return(
      <div className="flex items-center justify-between border-2 dark:border-primary">
          <h1 className="ml-2 text-xl text-center">{this.props.name}</h1>
          <div className="inline-block mt-2">
            <button id="favoriteBtn" 
              className="mr-2 ease-in duration-300 filled"
              onClick={this.heartClick}>
            </button>
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

export default VenueHome