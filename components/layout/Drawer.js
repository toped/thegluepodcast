import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Drawer } from '@blueprintjs/core'

const Styled_ = styled(Drawer)`

`

const _ = ({ children, ...props }) => (
  <Styled_ {...props}>
    {children}
  </Styled_>
)
_.propTypes = {
  /** Children elements will render inside the body of the drawer */
  children: PropTypes.node,
  /** Decides if close button appears within Drawer content */
  isCloseButtonShown: PropTypes.bool
}
_.defaultProps = {
  isCloseButtonShown: true
}

export default _
