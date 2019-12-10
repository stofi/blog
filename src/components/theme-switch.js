import React from 'react'

export default class ThemeSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkModePrefered: false,
      toggled: false
    }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  componentDidMount() {
    if (window) {
      const darkModePrefered = window.matchMedia("(prefers-color-scheme: dark)").matches
      this.setState( state => ({
        darkModePrefered,
        toggled: darkModePrefered
      }))
    }
  }

  toggleDarkMode() {
    const toggled = !this.state.toggled
    this.setState(state=> ({
      toggled
    }))
    if (this.state.darkModePrefered && toggled) {
      document.body.dataset.prefersColorScheme = ''
    } else if (toggled) {
      document.body.dataset.prefersColorScheme = 'dark'
    } else {
      document.body.dataset.prefersColorScheme = 'light'
    }
  }

  render() {
    const toggleStyle = this.state.toggled ? {
      left: '.25rem',
      right: 'auto'
    } : {
      left: 'auto',
      right: '.25rem'
    }
    return (
      <button onClick={this.toggleDarkMode} className="focus:outline-none relative h-6 rounded-full bg-gray-900 flex p-1 justify-between">
        <div className="text-xs mr-1 z-10 h-4 w-4 text-center">夜</div>
        <div className="text-xs z-10 h-4 w-4 text-center">天</div>
        <div style={toggleStyle} className="absolute h-4 w-4 rounded-full bg-gray-700 z-0"></div>
      </button>
    )
  }
}