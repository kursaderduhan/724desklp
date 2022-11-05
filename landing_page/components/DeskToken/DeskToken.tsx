import {
  HStack,
  VStack,
  Image,
  Text,
  Flex,
  Box,
  Container
} from '@chakra-ui/react'
import React, { memo } from 'react'
import '@fontsource/readex-pro'
export const DeskToken = () => {
  return (
    <VStack
      bgGradient={
        'linear-gradient(266.69deg, #2573BA 0%, #1A559C 97.2%, #041860 168.14%)'
      }
    >
      <Container centerContent maxW={'1200px'}>
        <VStack>
          <HStack
            pos={'relative'}
            justifyContent={'space-between'}
            w={'full'} 
            
          >
            <Flex pos={'absolute'} w={'full'} mb={12}>
              <Image
                src={'/2.gif'}
                alt={'2'}
                w={{ base: 300, md: 350, lg: 450, xl: 550 }}
              />
            </Flex>
            <Box w={{ base: 550, md: 500, lg: 400, xl: 588 }}></Box>
            <VStack color={'white'} textStyle={'normal'} pt={'84px'}>
              <Text
                textStyle={'headerStyle'}
                alignSelf={'flex-start'}
                color='#F6F6F6'
              >
                Desk Token Nedir?
              </Text>
              <Text maxW={'500px'} textStyle='deskTokenText'>
                Desk Token, yatırımcılarımızdan uzmanlarımıza, teknik
                ekibimizden müşterilerimize kadar herkesin kazanacağı ve işlem
                yapabileceği projemiz kapsamında oluşturduğumuz tokenimizdir..
              </Text>
            </VStack>
          </HStack>
          <HStack pt={"136px"} pb={"72px"} w={"100%"} justifyContent={"space-between"}>
            <VStack color={'#F6F6F6'}>
              <Text textStyle={'headerStyle'} alignSelf={'flex-start'}>
                Desk Token Avantajları
              </Text>
              <Text textStyle='deskTokenText' maxW={'562px'}>
                Yetkinlikleri platformumuzca onaylanmış uzmanlarımızla birçok
                kategoride kullanıcıların sorunlarına kaliteli çözümler
                üreteceğimizi garanti ediyoruz. Dünyanın her yerinden hizmet
                veren uzmanlarımız, kullanıcılar için farklı dillerde isabetli
                çözümler üreterek kullanıcıların problemlerini titizlikle
                çözüme ulaştırıyor.
              </Text>
            </VStack>
            <Image
              src={'/3.gif'}
              alt={'3'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
          </HStack>
        </VStack>
      </Container>
    </VStack>
  )
}

export default memo(DeskToken)
