import React from 'react'
import {
  VStack,
  Text,
  HStack,
  Image,
  Box,
  Circle,
  Stack,
  Divider,
  Flex,
  Icon,
  IconButton,
  Container
} from '@chakra-ui/react'
import { GrShareRounded } from 'react-icons/gr'
import "@fontsource/readex-pro"
export const Tokenomics = () => {
  return (
    <VStack py={'120px'} bg={"white"} color={"black"}>
      <Container maxW={"1200px"} centerContent> 
      <Text fontWeight={400} fontSize={'38px'} color={"black"} lineHeight={"48px"} fontFamily={"Readex Pro"} fontStyle={"normal"}>
        Tokenomics
      </Text>
      <Text textAlign={'center'} textStyle={"normal"} color={"#666666"} fontWeight={400} letterSpacing={"0.5px"} mt={"4px"}>
        Platformumuzun token ekonomisi, uzmanlarımızı, yatırımcılarımızı,
        müşterilerimizi desteklemek ve korumaya yönelik olarak
        planlanmıştır. Tokenimize sahip olan kişilerin ellerindeki tokenlerin
        her zaman değerlenceği bir yapı oluşturulmuştur.
      </Text>
      <Flex w={'full'} justifyContent={'space-between'} mt={"54px"} alignSelf={"flex-start"}>
        <VStack alignItems={'center'} gap={25}>
          <HStack alignSelf={'flex-start'} maxW={"326px"}>
            <Circle size = '20px' bg='orange' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'orange'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"} >
                35%
              </Text>
              <Text fontWeight={500} color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Platform
              </Text>
              <Text textStyle={"tokenomics"}>
                Platformun işletilmesi ve gelir modelinin oturtulmasında
                önemli bir görev yerine getirmiş olacaktır.
              </Text>
              <Divider h={"1px"} bg={"orange"} />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'} maxW={"326px"}>
            <Circle size = '20px' bg='red' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'red'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                16%
              </Text>
              <Text color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Uzmanlar
              </Text>
              <Text textStyle={"tokenomics"}>
                Proje bünyesinde yer alacak uzmanlara gelir oluşturması
                için ayrılacak kısımdır.
              </Text>
              <Divider h={"1px"} bg={"red"} />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'} maxW={"326px"}>
            <Circle size='20px' bg='#F9C74F' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#F9C74F'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                13%
              </Text>
              <Text color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Reklam
              </Text>
              <Text textStyle={"tokenomics"}>
                Reklam giderlerinin ve devamlılığının sağlanması için
                ayrılacak bütçeyi oluşturacaktır.
              </Text>
              <Divider h={"1px"} bg={"#F9C74F"} />
            </VStack>
          </HStack>
        </VStack>
        <VStack gap={{base:10,md:10,xl:5}}>
          <Flex
            boxSize={{ base: 200, md: 300,lg:384, xl: 384 }}
            bgImage={'/tokenomics.png'}
            bgPos={'center'}
            bgSize={'cover'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            gap={2}
          >
            <Text
                fontWeight={500}
                fontSize={"18.43px"} color={"#525252"} letterSpacing={"0.384px"} lineHeight={"150%"} fontStyle={"normal"}
            >
              ÜRETİLECEK TOKEN
            </Text>
            <Text fontWeight={500} fontSize={'35px'} lineHeight={"53px"} color={"black"} fontStyle={"normal"}>
              100 M
            </Text>
          </Flex>
          <HStack maxW={"326px"}>
            <Circle size = '20px' bg='#4AA4F9' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#4AA4F9'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                9%
              </Text>
              <Text color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Yatırımcılar
              </Text>
              <Text textStyle={"tokenomics"}>
                Projemizin geliştirme süreçlerinin en başından itibaren
                içinde olan yatırımcılarımıza ayrılan paydır.
              </Text>
              <Divider h={"1px"} bg={"#4AA4F9"} />
            </VStack>
          </HStack>
        </VStack>
        <VStack alignItems={'flex-start'} >
          <HStack alignSelf={'flex-start'} maxW={"326px"}>
            <Circle size = '20px' bg='#8904DB' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#8904DB'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                13%
              </Text>
              <Text color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Takım
              </Text>
              <Text textStyle={'tokenomics'} >
                Projemizin geliştirme süreçlerinin en başından itibaren
                içinde olan takımımıza ayrılan paydır.
              </Text>
              <Divider h={"1px"} bg={"#8904DB"} />
            </VStack>
          </HStack>
          <HStack maxW={"326px"}>
            <Circle size = '20px' bg='#41D334' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#41D334'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                5%
              </Text>
              <Text color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Partnerler
              </Text>
              <Text textStyle={'tokenomics'}>
                Proje partnerlerine ayrılacak kısım olacaktır. Ayrılacak bu
                tokenler partnerin ne tür katkı sağladığına göre
                belirlenip değerlendirilmesi sağlanacaktır.
              </Text>
                <Divider h={"1px"} bg={"#41D334"} />
            </VStack>
          </HStack>
          <HStack maxW={"326px"}>
            <Circle size = '20px' bg='#0DA300' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#0DA300'} fontWeight={500} fontSize={"15px"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                9%
              </Text>
              <Text color={"#333333"} fontSize={"13px"} letterSpacing={"0.1px"} lineHeight={"20px"}>
                Kurucular
              </Text>
              <Text textStyle={'tokenomics'}>
                Projemizin geliştirme süreçlerinin en başından itibaren
                içinde olan kurucularımıza ayrılan paydır.
              </Text>
              <Divider h={"1px"} bg={"#0DA300"} />
            </VStack>
          </HStack>
        </VStack>
      </Flex>
      <Flex
        bgGradient={'linear-gradient(140.62deg, #2573BA 0%, #041860 98.26%)'}
        w={{ base: 550, md: 750, xl: 792 }}
        h={{ base: 250, md: 300, xl: 265 }}
        borderRadius={20} mt={"54px"}
      >
        <VStack
          w={'full'}
          color={'white'}
          p={"32px"}
          alignItems={'flex-start'}
        >
            <Text color={'white'} fontSize={"19px"} fontStyle={"normal"} lineHeight={"28px"} letterSpacing={"0.15px"} fontWeight={500}>
            DESK Token Metrics
          </Text>
          <HStack
            justifyContent={{
              base: 'space-evenly',
              md: 'space-around',
              lg: 'space-between'
            }}
            w={'full'}
            display={'flex'}
            h={'full'}
            alignItems={'center'}
          >
            <HStack h={'full'} gap={{ base: 3, md: 10, xl: 21 }}>
              <VStack fontSize={'12px'} lineHeight={"150%"} alignItems={'flex-start'} color={"#F6F6F6"} fontWeight={400} opacity={"0.75"} gap={1}>
                <Text>Price:</Text>
                <Text>Ticker Symbol:</Text>
                <Text>Chain:</Text>
                <Text>Contract Address:</Text>
              </VStack>
              <VStack
                fontSize={"15px"} lineHeight={"22px"} fontStyle={"normal"}
                fontWeight={500} letterSpacing={"0.15px"}
                alignItems={'flex-start'}
              >
                <Text>$0.54</Text>
                <HStack fontSize={{ base: 'sm', md: 'sm',lg:"sm",xl:"sm" }}>
                  <Image
                    src={'/deskCoin.png'}
                    alt={'desk-symbol'}
                    w={{ base: 4, md: 4, lg:"20px",xl:"22px" }}
                    h={{ base: 4, md: 4, lg:"20px",xl:"22px" }}
                  />
                  <Text fontSize={{ base: 'sm', md: 'sm',lg:"sm",xl:"sm" }}>DESK</Text>
                </HStack>
                <HStack>
                  <Image
                    src={'binance.png'}
                    alt={'bep-20'}
                    w={{ base: 4, md: 4, lg:"20px",xl:"22px" }}
                    h={{ base: 4, md: 4, lg:"20px",xl:"22px" }}
                  />
                  <Text fontSize={{ base: 'sm', md: 'sm',lg:"sm",xl:"sm" }}>BSC (BEP-20)</Text>
                </HStack>
                <HStack>
                  <Text fontSize={{ base: 'sm', md: 'sm',lg:"sm",xl:"sm" }}>0x86...5453</Text>
                   <Icon as={GrShareRounded} />
                    {/* <GrShare style={{ color: "white" }} color={"white"} /> */}
                </HStack>
              </VStack>
            </HStack>
            <HStack gap={5}>
              <VStack fontSize={'12px'} gap={1} alignItems={'flex-start'} color={"#F6F6F6"} fontWeight={400} fontStyle={"normal"} opacity={"0.75"} letterSpacing={"0.25px"}>
                <Text>Max Supply:</Text>
                <Text>Total Supply:</Text>
                <Text>Circulation Supply:</Text>
                <Text>Burned:</Text>
              </VStack>
                <VStack fontWeight={500} fontSize={{ base: 'sm', md: 'sm', lg: "sm", xl: "sm" }} alignItems={"flex-start"}
                  letterSpacing={"0.15px"} lineHeight={"22px"} fontStyle={"normal"}
                >
                <Text>100 000 000</Text>
                <Text>14 284 526</Text>
                <Text>17 716 965</Text>
                <Text>21 061 298</Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
        </Flex>
        </Container>
    </VStack>
  )
}

export default Tokenomics
