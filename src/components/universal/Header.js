import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      bio: '',
      address: '',
      status: '/profile'
    }
  }

  dim = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>'
  bright = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'
  profile = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>'
  
  toggleTheme = () => {
    let themeBtn = document.getElementById('themeBtn')
    if (document.documentElement.classList.contains('dark')) {
      themeBtn.innerHTML = this.dim
      document.documentElement.classList = ''
      localStorage.theme = 'light'
    }
    else {
      themeBtn.innerHTML = this.bright
      document.documentElement.classList = 'dark'
      localStorage.theme = 'dark'
    }
  }

  componentDidMount() {
    if (this.props.status) {
      document.getElementById('profile').innerHTML = this.profile
      this.setState({ status: '/profile' })
    }
    let themeBtn = document.getElementById('themeBtn')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeBtn.innerHTML = this.bright
      // document.documentElement.classList = 'dark'
      localStorage.theme = 'dark'
    }
    else {
      themeBtn.innerHTML = this.dim
      // document.documentElement.classList = ''
      localStorage.theme = 'light'
    }
  }

  render() {
    const { status } = this.state
    return(
      <nav className="flex items-center h-[10vh] justify-between flex-wrap bg-primary dark:bg-darkgray border-b-2 border-secondary dark:border-lightgray px-4 py-2 ease-in duration-300">
        <div className="flex items-center flex-shrink-0 text-secondary mr-6">
          <Link 
          className="button button--aylen px-5 py-3 bg-secondary dark:bg-darkgray dark:hover:bg-black hover:bg-darkgray hover:text-white text-primary dark:text-lightgray relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
          // className="inline-block text-xl px-4 py-2 leading-none border rounded text-primary bg-white dark:bg-secondary dark:text-lightgray dark:hover:bg-darkgray border-transparent hover:border-white hover:text-white hover:bg-secondary mt-4 lg:mt-0 ease-in duration-300"
          to="/" >Hover Sounds</Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link id="store"
              to="/store"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary dark:text-lightgray hover:text-white dark:hover:text-white font-semibold uppercase tracking-widest mr-4 ease-in duration-300"
            >Store</Link>
          </div>
          <div className="grid grid-cols-2">
            
            
            <Link id="profile" 
              to={status} 
              className="inline-block text-sm ml-2 leading-none text-secondary  dark:text-lightgray border-transparent hover:text-white dark:hover:text-primary ease-in duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
            </Link>
            
            <button id="themeBtn" 
              className="inline-block text-sm ml-2 leading-none text-secondary dark:text-lightgray border-transparent hover:text-white dark:hover:text-primary ease-in duration-300"
              onClick={this.toggleTheme}>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header