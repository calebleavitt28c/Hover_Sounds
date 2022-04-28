//import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import axios from 'axios'
import React from 'react'
import ArtistMerch from './ArtistMerch'

class ArtistMerchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.hoveringrecords.com/hover/store/${this.props.artistId}`)
      .then(response => {
        this.setState({ items: response.data.Items})
      })
  }

  render() {
    const allItems = []
  
    for (let item of this.state.items) {
      allItems.push(
        <ArtistMerch key={`merch${item.id}`} id={item.id} name={item.name} price={item.price} image={item.image} artistId={this.props.artistId}/>
      )
    }
    
    return(
        <ul className="mt-2 items-striped scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightgray overflow-y-scroll">
          {allItems}
        </ul>
    )
  }
}

export default ArtistMerchContainer