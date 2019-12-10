import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Profile = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      avatar: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  const { author, title } = data.site.siteMetadata

  return (
    <Link to={`/`} className="flex flex-col items-end">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        className="rounded-full border-black shadow"
      />
      <h1>{title}</h1>
    </Link>
  )
}

export default Profile
