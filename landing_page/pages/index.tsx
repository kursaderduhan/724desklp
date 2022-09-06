import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Layout from '@components/Layout/Layout'
import HomePage from '@components/HomePage/HomePage'
import RoadMap from '@components/RoadMap/RoadMap'
import Tokenomics from '@components/Tokenomics/Tokenomics'
import Features from '@components/Features/Features'
import DeskToken from '@components/DeskToken/DeskToken'
import ResultService from '@components/ResultService/ResultService'

const Home: NextPage = () => {
  return (
    <Flex>
      <Layout>
        <HomePage />
        <Tokenomics/>
        <RoadMap />
        <Features />
        <DeskToken />
        <ResultService/>
      </Layout>
    </Flex>
  )
}

export default Home
