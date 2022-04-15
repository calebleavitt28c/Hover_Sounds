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

  sunLow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brightness-low-fill" viewBox="0 0 16 16"><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/></svg>'
  sunHigh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'

  toggleTheme = () => {
    let themeBtn = document.getElementById('themeBtn')
    if (document.documentElement.classList.contains('dark')) {
      themeBtn.innerHTML = this.sunLow
      document.documentElement.classList = ''
      localStorage.theme = 'light'
    }
    else {
      themeBtn.innerHTML = this.sunHigh
      document.documentElement.classList = 'dark'
      localStorage.theme = 'dark'
    }
  }

  componentDidMount() {
    let themeBtn = document.getElementById('themeBtn')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeBtn.innerHTML = this.sunHigh
      document.documentElement.classList = 'dark'
      localStorage.theme = 'dark'
    }
    else {
      themeBtn.innerHTML = this.sunLow
      document.documentElement.classList = ''
      localStorage.theme = 'light'
    }
  }

  render() {
    return(
      <nav className="flex items-center justify-between flex-wrap bg-primary dark:bg-darkgray border-b-2 border-secondary dark:border-primary p-4 ease-in duration-300">
        <div className="flex items-center flex-shrink-0 text-secondary mr-6">
        <button className="inline-block text-xl px-4 py-2 leading-none border rounded text-primary bg-white dark:bg-secondary dark:text-lightgray dark:hover:bg-darkgray border-transparent hover:border-white hover:text-white hover:bg-secondary mt-4 lg:mt-0 ease-in duration-300">Hover Sounds</button>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white ease-in duration-300">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          </div>
          <div className="grid grid-cols-3">
            <button className="inline-block col-span-2 text-sm px-4 py-2 h-8 leading-none border rounded text-primary bg-white dark:bg-secondary dark:text-lightgray dark:hover:bg-darkgray border-transparent hover:border-white hover:text-white hover:bg-secondary mt-4 lg:mt-0 ease-in duration-300">
              User
            </button>
              <button id="themeBtn" 
                className="inline-block text-sm ml-2 leading-none text-white  dark:text-lightgray border-transparent hover:text-darkgray dark:hover:text-primary ease-in duration-300"
                onClick={this.toggleTheme}>
              </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header