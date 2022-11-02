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
      h={'full'}
      w={'full'}
      minW={'max-content'}
      bgGradient={'radial-gradient(86.81% 154.32% at 11.04% 62.82%, #2573BA 0%, #041860 100%)'}
      bgPos={'center'}
      bgSize={'cover'}
      py={50}
    >
      <Container maxW={'1200px'} centerContent>
        <HStack w={'full'} justifyContent={'space-between'} px={2}>
          <VStack w={'full'} justifyContent={'flex-start'} gap={5}>
            <VStack
              fontSize={{ base: 30, md: 60 }}
              justifyContent={'flex-start'}
              w={'full'}
            >
              <Text w={'full'} color={'white'}>
                Problemlerinize
              </Text>
              <HStack w={'full'}>
                <Text color={'white'}> Anında </Text>
                <Text color={'#F27C00'}>Çözüm</Text>
              </HStack>
              <Text w={'full'} color={'#F27C00'}>
                Bulun!
              </Text>
            </VStack>
            <Text alignSelf={'flex-start'} color={'white'} textStyle={'normal'}>
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
                alignItems={'center'}
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
            w={{ base: 200, md: 549, lg: 549, xl: 549 }}
            h={{ base: 200, md: 549, lg: 549, xl: 549 }}
            alt={'deskIcon'}
          />
        </HStack>
        <Box
          w={'1150px'}
          h={'250px'}
          bg={'#2C4EC6'}
          rounded={15}
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
              <Text fontSize={'3xl'}>Public Sale Schadule</Text>
              <Counter />
            </VStack>
            <VStack w={'60%'} py={5} h={"full"}>
              <Text alignSelf={'flex-start'} fontSize={'24px'}>
                18.000.000 DEX Token
              </Text>
              <Text alignSelf={'flex-end'}>Hard Cap</Text>
              <Box w={'650px'} h={'20px'} bg={'#173194'} borderRadius={15}>
                <Box w={'550px'} h={'20px'} bg={'white'} borderRadius={15} />
              </Box>
              <Text alignSelf={'flex-end'}>375K USD</Text>
              <Text alignSelf={'flex-start'} fontSize={'24px'}>
                1 DEX = 0.10 USD
              </Text>
              <Button
                color={'#2C4EC6'}
                alignSelf='flex-end'
                w={140}
                alignItems={"center"} 
              >
                <Icon w={6} h={6} mt={1}>
                  <RiVipDiamondLine />
                  </Icon>
                <Text fontSize={'sm'}>Join Whitelist</Text>
              </Button>
            </VStack>
          </HStack>
        </Box>
        <Image
          src={'/scroll.gif'}
          w={{ base: '40px', md: '40px', lg: '40px', xl: '40px' }}
          h={{ base: '70px', md: '70px', lg: '70px', xl: '70px' }}
          alt={'ıcon'}
          mt={10}
        />
      </Container>
    </VStack>
  )
}

export default memo(Home)
