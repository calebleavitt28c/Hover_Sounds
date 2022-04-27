import React from 'react'

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
          <h1 className="w-2/3 text-center m-auto text-2xl font-semibold uppercase tracking-widest">{this.props.name}</h1>
        </div>
        <p className='block mt-2 px-2 overflow-auto text-sm uppercase tracking-widest'>{this.props.bio}</p>
      </div>
    );
  }
}

export default AboutArtist