import React from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <li className='border-b'>
        <a className="grid grid-cols-12" href={this.props.url} target="_blank">
          <div className="col-span-2 flex border-r">
            <h1 className='text-md text-center m-auto'>{this.props.artist}</h1>
          </div>
          <div className="col-span-4 flex">
            <h1 className='text-sm text-center m-auto'>{this.props.caption}</h1>
          </div>
          <div className="col-span-5 flex">
            <img className="h-48 object-fill m-auto" src={this.props.image} alt={`img by ${this.props.artist}`}></img>
          </div>
          <div className="col-span-1 flex">
            <p className='text-xxs text-left my-auto'>{`${this.props.date} ${this.props.time}`}</p>
          </div>
        </a>
      </li>
    )
  }
}

export default Post