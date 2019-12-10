import React from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import Sidebar from './sidebar'
import Wrapper from './wrapper'
import Profile from './profile'
import ThemeSwitch from './theme-switch'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const links = [
      {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'Projects',
        href: '/projects',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
      {
        name: 'GitHub',
        href: 'https://github.com/stofi',
      },
    ]

    return (
      <Wrapper>
        <div className="flex flex-1 self-stretch">
          <Sidebar>
            <Profile name="Krystof Rainisch" imageSrc="./profile.png" />
            <Navigation links={links} />
            <a target="_blank" className="mb-4" href="https://github.com/stofi/blog">
              <pre className="text-xs">sourcecode</pre>
            </a>
            <ThemeSwitch/>
          </Sidebar>
          <main className="w-full p-4 mx-8 md:mx-0 md:w-3/4">{children}</main>
        </div>
      </Wrapper>
    )
  }
}

export default Layout
