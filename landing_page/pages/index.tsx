import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '@components/Layout/Layout'
import HomePage from '@components/HomePage/HomePage'

const Home: NextPage = () => {
  return (
    <Flex>
      <Layout>
        <HomePage/>
      </Layout>
</Flex>
     
  )
}

export default Home
