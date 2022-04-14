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
    const current = [

    ]
    


    if (this.props.selected === 'artists') {
      for (let [i, v] of this.props.topArtists.entries()) {
        current.push(
          <TopArtist key={`artist${i}`} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
          )
      }
    }
    else if (this.props.selected === 'venues') {
      //current = venues
      for (let [i, v] of this.props.topVenues.entries()) {
        current.push(
          <TopVenue key={v.id} id={v.id} place={i + 1} name={v.name} favorites={v.favorites} />
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