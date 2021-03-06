import React from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDialog: false
    }
  }

  openModal(modal) {
    //document.getElementById(modal).showModal()
  }

  render() {
    return(
      <li className='mb-2 px-2 xl:mx-24 lg:mx-12 md:mx-0'>
          <div className='px-5 py-4 bg-lightgray dark:bg-darkgray shadow-md hover:shadow-lg dark:shadow-gray dark:shadow-sm rounded-lg transition ease-in duration-300'>
            <a className="" href={this.props.url} target="_blank" rel="noreferrer">
              <div className='p-2 dark:hover:bg-[#243447] rounded-xl transition ease-in duration-300'>
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
                <p className='text-darkgray dark:text-lightgray leading-snug xl:text-base lg:text-sm md:text-xs'>
                  {this.props.caption}
                </p>
              </div>
            </a>
            { this.props.image !== undefined ? (
              <a href={this.props.image} target="_blank" rel="noreferrer">
                <img className="rounded-lg p-4 w-full object-fill" src={this.props.image} alt={`img by ${this.props.artist}`} />
              {/* <PostDialog show={this.state.showDialog} image={this.props.image} artist={this.props.artist} /> */}
              </a>
            )
            :
            <div></div>
            }
          </div>
      </li>
    )
  }
}

export default Post