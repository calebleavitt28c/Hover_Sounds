import React from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <li className='mb-2'>
        <a className="" href={this.props.url} target="_blank" rel="noreferrer">
          <div className='px-5 py-4 bg-lightgray dark:bg-darkgray shadow-md rounded-lg'>
            <div className="flex mb-4">
              <img className='w-12 h-12 rounded-full' src={this.props.profile} alt={this.props.user} />
              <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug text-black dark:text-lightgray">
                  {this.props.user}
                </span>
                <span className='block text-sm text-gray dark:text-gray font-light leading-snug'>
                  {`${this.props.date} ${this.props.time}`}
                </span>
              </div>
            </div>
            <p className='text-darkgray dark:text-lightgray leading-snug md:leading-normal'>
              {this.props.caption}
            </p>
            <img className="rounded-lg p-4 w-full object-fill" src={this.props.image} alt={`img by ${this.props.artist}`}></img>
            </div>
          </a>
      </li>
    )
  }
}

export default Post