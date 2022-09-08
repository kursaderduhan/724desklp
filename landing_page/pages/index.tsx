import React from 'react'
import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Layout from '@components/Layout/Layout'
import HomePage from '@components/HomePage/HomePage'
import RoadMap from '@components/RoadMap/RoadMap'
import Tokenomics from '@components/Tokenomics/Tokenomics'
import Features from '@components/Features/Features'
import DeskToken from '@components/DeskToken/DeskToken'
import ResultService from '@components/ResultService/ResultService'
import TokenCalendar from '@components/TokenCalendar/TokenCalendar'
import Experts from '@components/Experts/Experts'
import Investor from '@components/Investor/Investor'
import Exploring from '@components/Exploring/Exploring'

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex flexDirection={'column'} w={'full'}>
        <HomePage />
        <Tokenomics />
        <RoadMap />
        <Features />
        <DeskToken />
        <ResultService />
        <TokenCalendar />
        <Experts />
        <Investor />
        <Exploring />
      </Flex>
    </Layout>
  )
}

export default Home
