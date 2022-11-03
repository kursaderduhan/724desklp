import React, { memo } from 'react'
import {
  HStack,
  VStack,
  Text,
  Button,
  Image,
  Flex,
  Container,
  Box,
  Icon
} from '@chakra-ui/react'
import Counter from './Counter'
import { RiVipDiamondLine } from 'react-icons/ri'

export const Home = () => {
  return (
    <VStack
      h={'1080px'}
      w={'full'}
      minW={'max-content'}
      bgGradient={
        'radial-gradient(86.81% 154.32% at 11.04% 62.82%, #2573BA 0%, #041860 100%)'
      }
      bgPos={'center'}
      bgSize={'cover'}
      cursor={'default'}
    >
      <Container maxW={'1200px'} centerContent>
        <HStack w={'full'} justifyContent={'space-between'}>
          <VStack w={'full'} justifyContent={'flex-start'} gap={"24px"} mt={"147px"}>
            <Text
              w={'full'}
              color={'white'}
              fontSize={{ base: 30, md: '54px' }}
              fontWeight={500}
              lineHeight={'69px'}
              letterSpacing={'-0.5px'}
            >
              Problemlerinize <br />
              Anında{' '}
              <span style={{ color: '#F27C00' }}>
                Çözüm <br />
                Bulun!
              </span>
            </Text>
            <Text
              alignSelf={'flex-start'}
              color={'white'}
              textStyle={'normal'}
              fontWeight={400}
            >
              724Desk; yaşadığınız her türlü probleme günün her saatinde anlık
              olarak,
              <br /> farklı zaman dilimlerinde birçok dili konuşan, dünyanın en
              iyi uzmanlarından <br /> destek alabileceğiniz bir platformdur.
            </Text>
            <HStack w={'full'}>
              <Button
                color={'#2C4EC6'}
                w={'156px'}
                h={'44px'}
                bg={'white'}
                gap={3}
                fontSize={'13px'}
                alignItems={'center'} fontWeight={500}
              >
                <Image
                  src={'/document-text.png'}
                  alt={'buttonIcon'}
                  w={'18px'}
                  h={'18px'}
                />
                Whitepaper
              </Button>
              <Image src={'36dp.png'} w={'36px'} h={'36px'} alt={'play'} />
            </HStack>
          </VStack>
          <Image
            src={'/1.gif'}
            w={{ base: 200, md: 549, lg: "549px", xl: "549px" }}
            h={{ base: 200, md: 549, lg: "549px", xl: "549px" }}
            alt={'deskIcon'}
          />
          
        </HStack>
        <Box
          w={'100%'}
          h={'250px'}
          bg={'#2C4EC6'}
          rounded={15} mt={"122px"}
          boxShadow={'dark-lg'}
          color={'white'}
          px={10}
        >
          <HStack h={'full'}>
            <VStack
              w='40%'
              h={'full'}
              justifyContent={'space-around'}
              display={'flex'}
              alignItems={'flex-start'}
              py={5}
            >
              <Text fontSize={'3xl'} fontWeight={400}>
                Public Sale Schadule
              </Text>
              <Counter />
            </VStack>
            <VStack w={'60%'} py={5} h={'full'}>
              <Text alignSelf={'flex-start'} fontSize={'24px'} fontWeight={500}>
                18.000.000 DEX Token
              </Text>
              <Text alignSelf={'flex-end'} fontSize={"13px"} fontWeight={500}>Hard Cap</Text>
              <Box w={'650px'} h={'20px'} bg={'#173194'} borderRadius={15}>
                <Box
                  w={'550px'}
                  h={'20px'}
                  bgGradient={
                    'linear-gradient(90deg, #768EE1 0%, #DDE4FF 100%)'
                  }
                  borderRadius={15}
                />
              </Box>
              <Text alignSelf={'flex-end'} fontSize={"13px"} fontWeight={500}>375K USD</Text>
              <Text alignSelf={'flex-start'} fontSize={'24px'} fontWeight={500}>
                1 DEX = 0.10 USD
              </Text>
              <Button
                color={'#2C4EC6'}
                alignSelf='flex-end'
                w={140}
                alignItems={'center'}
                bg={'#FFFFFF'}
              >
                <Icon w={6} h={6} mt={1}>
                  <RiVipDiamondLine />
                </Icon>
                <Text fontSize={'sm'} fontWeight={500}>Join Whitelist</Text>
              </Button>
            </VStack>
          </HStack>
        </Box>
        <Image
          src={'/scroll.gif'}
          w={{ base: '40px', md: '40px', lg: '40px', xl: '40px' }}
          h={{ base: '70px', md: '70px', lg: '70px', xl: '70px' }}
          alt={'ıcon'}
          mt={"32px"} 
        />
      </Container>
    </VStack>
  )
}

export default memo(Home)
