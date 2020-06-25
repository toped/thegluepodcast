import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Head from 'next/head'
import { Pane, Spinner, Heading } from 'evergreen-ui'
import Navbar from './Navbar'
import Footer from './Footer'
import { LoadingMessages } from '../../utils/models'

const Hero = styled.div`
  min-height: 20vh;
  align-content: center;
`

const _ = (props) => {
  const {
    navbar, footer, isLoading, loadingMessage, hero, breadcrumbs, content, title
  } = props
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col w-full h-screen content-between">
        {
          navbar
        }
        { hero
          && <Hero className="grid grid-cols-1">
            { hero }
          </Hero>
        }
        {
          breadcrumbs && <>{ breadcrumbs }</>
        }
        <div className={`flex flex-grow isLoading ${isLoading ? 'items-center justify-center' : ''}`}>
          {
            isLoading
              ? <Pane display="flex" flexDirection="column" alignItems="center">
                <Spinner/>
                <Heading marginY="1rem">
                  {
                    loadingMessage
                    || LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)]
                  }
                </Heading>
              </Pane>

              : <div className="flex p-10 grid grid-cols-1">
                {
                  content
                }
              </div>
          }
        </div>
        {
          footer
        }
      </div>
    </>
  )
}

_.propTypes = {
  /** Optional custom navbar */
  navbar: PropTypes.object,
  /** Optional custom footer */
  footer: PropTypes.object,
  hero: PropTypes.object,
  content: PropTypes.object,
  title: PropTypes.string,
  /** Breadcrumbs to be displayed */
  breadcrumbs: PropTypes.object,
  /** Indicates whether the layout is loading */
  isLoading: PropTypes.bool,
  /** Message to display while loading.
   * If one is not provided, a random message will be generated */
  loadingMessage: PropTypes.string
}
_.defaultProps = {
  navbar: <Navbar page="Deployments"/>,
  footer: <Footer/>,
  content: <div/>
}

export default _
