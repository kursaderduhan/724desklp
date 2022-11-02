import { HStack, VStack, Image, Text, Flex,Box,Container } from '@chakra-ui/react'
import React, { memo } from 'react'

export const DeskToken = () => {
  return (
    <VStack bgGradient={"linear-gradient(266.69deg, #2573BA 0%, #1A559C 97.2%, #041860 168.14%)"} py={50}  >
      <Container centerContent maxW={"1200px"} gap={150}>
      <HStack pos={"relative"} justifyContent={"space-around"} w={"full"}  display={"flex"}>
        <Flex pos={"absolute"} w={"full"} >
          <Image src={'/2.gif'} alt={'2'} w={{base:300,md:350,lg:450,xl:550}}/>
        </Flex>
        <Box w={{base:550,md:500,lg:400,xl:588}}></Box>
        <VStack color={"white"} textStyle={"normal"}>
          <Text fontWeight={'bold'} textStyle={"headText"} alignSelf={"flex-start"}>Desk Token Nedir?</Text>
          <Text>
            Desk Token, yatırımcılarımızdan uzmanlarımıza, teknik ekibimizden
            <br /> müşterilerimize kadar herkesin kazanacağı ve işlem
            yapabileceği projemiz <br /> kapsamında oluşturduğumuz
            tokenimizdir..
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <VStack color={"white"} textStyle={"normal"}>
          <Text fontWeight={'bold'} textStyle={"headText"} alignSelf={"flex-start"}>Desk Token Avantajları</Text>
          <Text>
            Yetkinlikleri platformumuzca onaylanmış uzmanlarımızla birçok
            kategoride <br /> kullanıcıların sorunlarına kaliteli çözümler
            üreteceğimizi garanti ediyoruz. <br /> Dünyanın her yerinden hizmet
            veren uzmanlarımız, kullanıcılar için farklı <br /> dillerde
            isabetli çözümler üreterek kullanıcıların problemlerini titizlikle{' '}
            <br /> çözüme ulaştırıyor.
          </Text>
        </VStack>
        <Image src={'/3.gif'} alt={'3'} w={{base:250,md:350,lg:450, xl:550}}/>
        </HStack>
        </Container>
    </VStack>
  )
}

export default memo(DeskToken)
