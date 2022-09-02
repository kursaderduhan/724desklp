import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Layout from '@components/Layout/Layout'
import HomePage from '@components/HomePage/HomePage'
import RoadMap from '@components/RoadMap/RoadMap'
import Tokenomics from '@components/Tokenomics/Tokenomics'

const Home: NextPage = () => {
  return (
    <Flex>
      <Layout>
        <HomePage />
        <Tokenomics/>
        <RoadMap />
      </Layout>
    </Flex>
  )
}

export default Home
