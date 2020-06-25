import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Navbar, Alignment } from '@blueprintjs/core'
import { Heading } from 'evergreen-ui'
import Link from 'next/link'
import Avatar from 'react-avatar'

const Container = styled(Navbar)`
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.1);
`

const NavbarLinks = [
  { name: 'Home', link: '/' },
  { name: 'Episodes', link: '/episodes' }
]

const _ = ({
  page, fixed, ...props
}) => (
  <Container {...props} fixedToTop={fixed}>
    <Navbar.Group align={Alignment.LEFT} className="pl-10">
      <Heading className="px-2">NextJS Template</Heading>
    </Navbar.Group>
    <Navbar.Group align={Alignment.LEFT} className="pl-4">
      {
        NavbarLinks.map(({ name, link }, i) => (
          <Link key={i} href={link}>
            <Heading className="px-2">{ name }</Heading>
          </Link>
        ))
      }
    </Navbar.Group>
  </Container>
)
_.propTypes = {
  page: PropTypes.string,
  /** Specifies whether positioning should be fixed or relative */
  fixed: PropTypes.bool
}

export default _
