import React, { memo } from 'react'
import { HStack, VStack, Text, Button, Image, Flex } from '@chakra-ui/react'

export const Home = () => {
  return (
    <VStack h={'full'} w={'full'} bg={'#236DB4'} px={'120px'}>
      <HStack w={"full"} justifyContent={"space-between"}> 
        <VStack w={'full'} justifyContent={'flex-start'}>
          <VStack fontSize={60} justifyContent={"flex-start"} w={"full"}>
            <Text w={"full"} color={"white"}>Problemlerinize</Text>
            <HStack w={"full"}><Text color={"white"}> Anında </Text><Text color={"#F27C00"}>Çözüm</Text></HStack>
            <Text w={"full"} color={"#F27C00"}>Bulun</Text>
            </VStack>
          <Text w={450} alignSelf={"flex-start"}>
            724Desk; yaşadığınız her türlü probleme günün her saatinde anlık
            olarak, farklı zaman dilimlerinde birçok dili konuşan, dünyanın en
            iyi uzmanlarından destek alabileceğiniz bir platformdur.
          </Text>
          <HStack w={"full"}>
            <Button>Whitepaper</Button>
            <Image src={'36dp.png'} w={10} h={10} alt={'play'} />
          </HStack>
        </VStack>
        <Image src={'/1.gif'} w={549} h={549} alt={'deskIcon'} />
      </HStack>
      <Image src={'/timer.png'} alt={'homeTable'} />
      <Image src={'/Rectangle.png'} w={'40px'} h={'70px'} alt={'ıcon'} />
    </VStack>
  )
}

export default memo(Home)
