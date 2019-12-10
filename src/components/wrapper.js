import React from 'react'

export default class Wrapper extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="relative container min-h-screen mx-auto px-4 text-gray-200 flex flex-col items-center justify-between max-w-6xl">
        {children}
      </div>
    )
  }
}
