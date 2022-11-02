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
import { GrShare } from 'react-icons/gr'

export const Tokenomics = () => {
  return (
    <VStack py={'50'} bg={"white"} color={"black"}>
      <Container maxW={"1200px"} centerContent> 
      <Text fontWeight={'bold'} fontSize={'4xl'}>
        Tokenomics
      </Text>
      <Text textAlign={'center'} textStyle={"normal"} color={"#666666"}>
        Platformumuzun token ekonomisi, uzmanlarımızı, yatırımcılarımızı,
        müşterilerimizi desteklemek ve korumaya yönelik olarak <br />{' '}
        planlanmıştır. Tokenimize sahip olan kişilerin ellerindeki tokenlerin
        her zaman değerlenceği bir yapı oluşturulmuştur.
      </Text>
      <HStack w={'full'} justifyContent={'space-between'} gap={25}>
        <VStack alignItems={'center'}>
          <HStack alignSelf={'flex-start'}>
            <Circle size = '20px' bg='orange' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'} textStyle={'normal'}>
              <Text color={'orange'} fontWeight={500}>
                35%
              </Text>
              <Text fontWeight={500}>
                Platform
              </Text>
              <Text color={"#666666"}>
                Platformun işletilmesi ve gelir modelinin oturtulmasında <br />{' '}
                önemli bir görev yerine getirmiş olacaktır.
              </Text>
              <Divider color={'orange'} style={{ color: 'black' }} />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size = '20px' bg='red' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'} textStyle={"normal"}>
              <Text color={'red'} fontWeight={500}>
                16%
              </Text>
              <Text fontWeight={500}>
                Uzmanlar
              </Text>
              <Text color={"#666666"}>
                Proje bünyesinde yer alacak uzmanlara gelir oluşturması <br />{' '}
                için ayrılacak kısımdır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='20px' bg='orange' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'orange'} fontWeight={500}>
                13%
              </Text>
              <Text textStyle={'normal'} fontWeight={500}>
                Reklam
              </Text>
              <Text textStyle={'normal'} color={"#666666"}>
                Reklam giderlerinin ve devamlılığının sağlanması için <br />{' '}
                ayrılacak bütçeyi oluşturacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <VStack pt={50} gap={{base:10,md:10,xl:5}}>
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
              fontSize={{ base: 'xs', md: 'md',lg:"lg", xl: 'lg' }}
            >
              ÜRETİLECEK TOKEN
            </Text>
            <Text fontWeight={500} fontSize={'4xl'}>
              100 M
            </Text>
          </Flex>
          <HStack>
            <Circle size = '20px' bg='#4AA4F9' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#4AA4F9'} fontWeight={500}>
                9%
              </Text>
              <Text textStyle={'normal'} fontWeight={500}>
                Yatırımcılar
              </Text>
              <Text textStyle={'normal'} color={"#666666"}>
                Projemizin geliştirme süreçlerinin en başından itibaren <br />{' '}
                içinde olan yatırımcılarımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <HStack alignSelf={'flex-start'}>
            <Circle size = '20px' bg='#8904DB' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#8904DB'} fontWeight={500}>
                13%
              </Text>
              <Text textStyle={'normal'} fontWeight={500}>
                Takım
              </Text>
              <Text textStyle={'normal'} color={"#666666"}>
                Projemizin geliştirme süreçlerinin en başından itibaren <br />{' '}
                içinde olan takımımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size = '20px' bg='#41D334' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#41D334'} fontWeight={500}>
                5%
              </Text>
              <Text textStyle={'normal'} fontWeight={500}>
                Partnerler
              </Text>
              <Text textStyle={'normal'} color={"#666666"}>
                Proje partnerlerine ayrılacak kısım olacaktır. Ayrılacak bu{' '}
                <br /> tokenler partnerin ne tür katkı sağladığına göre
                belirlenip <br /> değerlendirilmesi sağlanacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size = '20px' bg='#0DA300' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#0DA300'} fontWeight={500}>
                9%
              </Text>
              <Text textStyle={'normal'} fontWeight={500}>
                Kurucular
              </Text>
              <Text textStyle={'normal'} color={"#666666"}>
                Projemizin geliştirme süreçlerinin en başından itibaren <br />{' '}
                içinde olan kurucularımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Flex
        bgGradient={'linear-gradient(140.62deg, #2573BA 0%, #041860 98.26%)'}
        w={{ base: 550, md: 750, xl: 792 }}
        h={{ base: 250, md: 300, xl: 265 }}
        borderRadius={20}
      >
        <VStack
          w={'full'}
          color={'white'}
          px={{ base: 1, md: 10, xl: 100 }}
          py={{ base: 2, md: 30, xl: 55 }}
          alignItems={'flex-start'}
        >
          <Text color={'white'} fontSize={{ base: 'md', md: 'lg',lg:"lg",xl: 'xl' }} fontWeight={500}>
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
              <VStack fontSize={'xs'} alignItems={'flex-start'} color={"#F6F6F6"} fontWeight={400}>
                <Text>Price:</Text>
                <Text>Ticker Symbol:</Text>
                <Text>Chain:</Text>
                <Text>Contract Address:</Text>
              </VStack>
              <VStack
                fontSize={{ base: 'sm', md: 'sm',lg:"sm",xl:"sm" }}
                fontWeight={500}
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
                  <GrShare />
                </HStack>
              </VStack>
            </HStack>
            <HStack gap={5}>
              <VStack fontSize={'xs'} alignItems={'flex-start'} color={"#F6F6F6"} fontWeight={400}>
                <Text>Max Supply:</Text>
                <Text>Total Supply:</Text>
                <Text>Circulation Supply:</Text>
                <Text>Burned:</Text>
              </VStack>
              <VStack fontWeight={500} fontSize={{ base: 'sm', md: 'sm',lg:"sm",xl:"sm" }} alignItems={"flex-start"} >
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
