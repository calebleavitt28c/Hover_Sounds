import React, { useState } from 'react'
import Vibrant from 'node-vibrant'

class AboutArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      
      <div className="flex flex-col h-1/2">
        <div className='flex'>
          <img className="w-1/3 rounded-3xl mt-2 mx-2" src={this.props.image} alt={this.props.name} />
          <div className={`bg-lightgray w-2/3 mt-2 mr-2 rounded-3xl grid place-items-center`}>
            <h1 className="text-center text-2xl font-semibold uppercase tracking-widest">{this.props.name}</h1>
          </div>
        </div>
          <div className={`bg-lightgray h-full rounded-3xl mt-2 mx-2 grid place-items-center`}>
            <p className='block p-2 overflow-auto scrollbar-none text-xs uppercase tracking-widest'>{this.props.bio}</p>
          </div>
      </div>
    )
  }
}

export default AboutArtist