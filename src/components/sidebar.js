import React from 'react'

class Sidebar extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="absolute top-0 left-0 bottom-0 right-auto h-full bg-black w-8 sm:relative sm:w-1/4 sm:bg-gray-800 sm:self-start">
        <div className="flex flex-col items-end justify-between absolute left-auto p-4 right-0 text-right top-0 sm:relative sm:mr-1">
          {children}
        </div>

        {/* Divider */}
        <div className="display-none sm:flex absolute top-0 right-0 bottom-0 items-center">
          <div className="h-40 bg-black w-1 rounded opacity-25"></div>
        </div>
      </div>
    )
  }
}

export default Sidebar
