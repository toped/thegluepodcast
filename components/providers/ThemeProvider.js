import React, { createContext, useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { usePrevious } from '../../utils/functions'

const GlobalStyles = createGlobalStyle`
  
`

const Context = createContext('light')

const _ = ({ children }) => {
  const [state, setState] = useState('light')
  const prevState = usePrevious(state)

  useEffect(() => {
    if (document && prevState) document.body.classList.remove(prevState)
    if (document && state) document.body.classList.add(state)
  })

  return (
    <Context.Provider value={[state, setState]}>
      <GlobalStyles />
      <div className={state}>
        {children}
      </div>
    </Context.Provider>
  )
}
_.propTypes = {
  children: PropTypes.any
}

export default _
