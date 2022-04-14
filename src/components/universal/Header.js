import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      bio: '',
      address: '',
    }
  }
  render() {
    return(
      <nav className="flex items-center justify-between flex-wrap bg-primary border-b-2 border-secondary p-4">
        <div className="flex items-center flex-shrink-0 text-secondary mr-6">
        <button className="inline-block text-xl px-4 py-2 leading-none border rounded text-primary bg-white border-transparent hover:border-white hover:text-white hover:bg-secondary mt-4 lg:mt-0 ease-in duration-300">Hover Sounds</button>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white ease-in duration-300">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          </div>
          <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-primary bg-white border-transparent hover:border-white hover:text-white hover:bg-secondary mt-4 lg:mt-0 ease-in duration-300">
              User
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header