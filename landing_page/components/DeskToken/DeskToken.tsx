import { HStack, VStack, Image, Text, Flex,Box } from '@chakra-ui/react'
import React, { memo } from 'react'

export const DeskToken = () => {
  return (
    <VStack bgImage={"/869.png"} py={50} gap={250}>
      <HStack pos={"relative"} justifyContent={"space-around"} w={"full"}  display={"flex"}>
        <Flex pos={"absolute"} w={"full"} >
          <Image src={'/2.gif'} alt={'2'} />
        </Flex>
        <Box w="250"></Box>
        <VStack color={"white"}>
          <Text fontWeight={'bold'} fontSize={"4xl"} alignSelf={"flex-start"}>Desk Token Nedir?</Text>
          <Text>
            Desk Token, yatırımcılarımızdan uzmanlarımıza, teknik ekibimizden{' '}
            <br /> müşterilerimize kadar herkesin kazanacağı ve işlem
            yapabileceği projemiz <br /> kapsamında oluşturduğumuz
            tokenimizdir..
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <VStack color={"white"}>
          <Text fontWeight={'bold'} fontSize={"4xl"} alignSelf={"flex-start"}>Desk Token Avantajları</Text>
          <Text>
            Yetkinlikleri platformumuzca onaylanmış uzmanlarımızla birçok
            kategoride <br /> kullanıcıların sorunlarına kaliteli çözümler
            üreteceğimizi garanti ediyoruz. <br /> Dünyanın her yerinden hizmet
            veren uzmanlarımız, kullanıcılar için farklı <br /> dillerde
            isabetli çözümler üreterek kullanıcıların problemlerini titizlikle{' '}
            <br /> çözüme ulaştırıyor.
          </Text>
        </VStack>
        <Image src={'/3.gif'} alt={'3'} />
      </HStack>
    </VStack>
  )
}

export default memo(DeskToken)
