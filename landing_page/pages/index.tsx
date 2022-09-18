import React from 'react'
import { Flex, Container,Box } from '@chakra-ui/react'
import { NextPage } from 'next'
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
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'} minW={'max-content'} h={"full"}>
      <Header />
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
      <Footer />
    </Flex>
  )
}

export default Home
