import React from 'react'
import TopArtist from './TopArtist'
import TopVenue from './TopVenue'
import TopEvent from './TopEvent'

class TopList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const temp = [
      {
        id: 0,
        name: 'Coldplay',
        favorites: 102
      },
      {
        id: 1,
        name: 'Kid Cudi',
        favorites: 54
      },
      {
        id: 2,
        name: 'The Brilliance',
        favorites: 52
      },
      {
        id: 3,
        name: 'John Williams',
        favorites: 43
      },
      {
        id: 4,
        name: 'Bazzi',
        favorites: 42
      },
      {
        id: 5,
        name: 'Logic',
        favorites: 37
      },
      {
        id: 6,
        name: 'Imagine Dragons',
        favorites: 30
      },
      {
        id: 7,
        name: 'Drake',
        favorites: 21
      },
      {
        id: 8,
        name: 'Post Malone',
        favorites: 10
      },
      {
        id: 9,
        name: 'Hans Zimmer',
        favorites: 5
      },
    ]
    const current = [

    ]
    


    if (this.props.selected === 'artists') {
      //current = artists
      for (let [i, v] of temp.entries()) {
        current.push(
          <TopArtist key={`artist${i}`} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
          )
      }
    }
    else if (this.props.selected === 'venues') {
      //current = venues
      for (let [i, v] of this.props.venues.entries()) {
        current.push(
          <TopVenue key={v.id} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
          )
      }
    }
    else if (this.props.selected === 'events') {
      //current = events
      for (let [i, v] of this.props.events.entries()) {
        current.push(
          <TopEvent key={v.id} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
          )
      }
    }
    return(
      <>
        <div className="grid grid-cols-6 p-2 border-b-2">
          <div className="col-span-1"></div>
            <div className="col-span-3 text-gray">
              <h3>Name</h3>
            </div>
            <div className="col-span-2 text-gray">
              <h1 className="text-center">Favorites</h1>
          </div>
        </div>
        <ul className="list-none divide-y divide-gray striped">
          {current}
        </ul>
      </>
    )
  }
}

export default TopList