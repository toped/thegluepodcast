import React from 'react'
import withApollo from '../components/apollo'
import { Layout } from '../components/layout'

const Home = () => (
  <Layout/>
)

export default withApollo({ ssr: true })(Home)
