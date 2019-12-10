import React from 'react'
import { Link } from 'gatsby'

const parseLink = link =>
  link.href.match(/http(s)?:\/\//) ? (
    <a href={link.href}>{link.name}</a>
  ) : (
    <Link to={link.href}>{link.name}</Link>
  )

class Navigation extends React.Component {
  render() {
    const { links = [] } = this.props

    const items = links
      .map(parseLink)
      .map((link, index) => <li key={index}>{link}</li>)

    return <ul className="my-4">{items}</ul>
  }
}

export default Navigation
