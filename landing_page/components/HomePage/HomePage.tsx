import React, { memo } from 'react'
import { HStack, VStack, Text, Button, Image, Flex } from '@chakra-ui/react'

export const Home = () => {
  return (
    <VStack
      h={'full'}
      w={'full'}
      bgImage={'/homePageBg.png'}
      bgPos={'center'}
      bgSize={'cover'}
      px={{ base: 1, md: 30, lg: 120 }} pb={10}
    >
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
          <Text alignSelf={'flex-start'} color={'white'} textStyle={"normal"}> 
            724Desk; yaşadığınız her türlü probleme günün her saatinde anlık
            olarak,<br/> farklı zaman dilimlerinde birçok dili konuşan, dünyanın en
            iyi uzmanlarından <br/> destek alabileceğiniz bir platformdur.
          </Text>
          <HStack w={'full'}>
            <Button color={"#2C4EC6"} w={"156px"} h={"44px"} bg={"white"} gap={3} fontSize={"13px"} alignItems={"center"}> <Image src={"/document-text.png"} alt={"buttonIcon"} w={"18px"} h={"18px"}/>Whitepaper</Button>
            <Image src={'36dp.png'} w={"36px"} h={"36px"} alt={'play'} />
          </HStack>
        </VStack>
        <Image
          src={'/1.gif'}
          w={{ base: 200, md: 549,lg:549,xl:549 }}
          h={{ base: 200, md: 549,lg:549,xl:549 }}
          alt={'deskIcon'}
        />
      </HStack>
      <Image src={'/timer.png'} alt={'homeTable'} />
      <Image src={'/scroll.gif'} w={{ base: "40px", md: "40px",lg:"40px",xl:"40px" }} h={{base:"70px",md:"70px",lg:"70px",xl:"70px"}} alt={'ıcon'} />
    </VStack>
  )
}

export default memo(Home)
