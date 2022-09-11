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
  IconButton
} from '@chakra-ui/react'
import { GrShare } from 'react-icons/gr'

export const Tokenomics = () => {
  return (
    <VStack px={{ base: 1, md: 10, xl: 130 }} py={'25'}>
      <Text fontWeight={'bold'} fontSize={'4xl'}>
        Tokenomics
      </Text>
      <Text textAlign={'center'} textStyle={"normal"}>
        Platformumuzun token ekonomisi, uzmanlarımızı, yatırımcılarımızı,
        müşterilerimizi desteklemek ve korumaya yönelik olarak <br />{' '}
        planlanmıştır. Tokenimize sahip olan kişilerin ellerindeki tokenlerin
        her zaman değerlenceği bir yapı oluşturulmuştur.
      </Text>
      <HStack w={'full'} justifyContent={'space-between'} gap={25}>
        <VStack alignItems={'center'}>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='orange' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'orange'} fontWeight={'bold'}>
                35%
              </Text>
              <Text textStyle={'normal'} fontWeight={'bold'}>
                Platform
              </Text>
              <Text textStyle={'normal'}>
                Platformun işletilmesi ve gelir modelinin oturtulmasında <br />{' '}
                önemli bir görev yerine getirmiş olacaktır.
              </Text>
              <Divider color={'orange'} style={{ color: 'black' }} />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='red' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'} textStyle={"normal"}>
              <Text color={'red'} fontWeight={'bold'}>
                16%
              </Text>
              <Text fontWeight={'bold'}>
                Uzmanlar
              </Text>
              <Text >
                Proje bünyesinde yer alacak uzmanlara gelir oluşturması <br />{' '}
                için ayrılacak kısımdır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='orange' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'orange'} fontWeight={'bold'}>
                13%
              </Text>
              <Text textStyle={'normal'} fontWeight={'bold'}>
                Reklam
              </Text>
              <Text textStyle={'normal'}>
                Reklam giderlerinin ve devamlılığının sağlanması için <br />{' '}
                ayrılacak bütçeyi oluşturacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <VStack pt={50} gap={{base:10,md:10,xl:5}}>
          <Flex
            boxSize={{ base: 200, md: 300, xl: 400 }}
            bgImage={'/tokenomics.png'}
            bgPos={'center'}
            bgSize={'cover'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            gap={2}
          >
            <Text
              fontWeight={'bold'}
              fontSize={{ base: 'xs', md: 'md', xl: 'xl' }}
            >
              ÜRETİLECEK TOKEN
            </Text>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              100 M
            </Text>
          </Flex>
          <HStack>
            <Circle size='40px' bg='#4AA4F9' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#4AA4F9'} fontWeight={'bold'}>
                9%
              </Text>
              <Text textStyle={'normal'} fontWeight={'bold'}>
                Yatırımcılar
              </Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren <br />{' '}
                içinde olan yatırımcılarımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='#8904DB' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#8904DB'} fontWeight={'bold'}>
                13%
              </Text>
              <Text textStyle={'normal'} fontWeight={'bold'}>
                Takım
              </Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren <br />{' '}
                içinde olan takımımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='#41D334' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#41D334'} fontWeight='bold'>
                5%
              </Text>
              <Text textStyle={'normal'} fontWeight={'bold'}>
                Partnerler
              </Text>
              <Text textStyle={'normal'}>
                Proje partnerlerine ayrılacak kısım olacaktır. Ayrılacak bu{' '}
                <br /> tokenler partnerin ne tür katkı sağladığına göre
                belirlenip <br /> değerlendirilmesi sağlanacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='#0DA300' alignSelf={'flex-start'} />
            <VStack alignItems={'flex-start'}>
              <Text color={'#0DA300'} fontWeight={'bold'}>
                9%
              </Text>
              <Text textStyle={'normal'} fontWeight={'bold'}>
                Kurucular
              </Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren <br />{' '}
                içinde olan kurucularımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Flex
        bgImage={'/blueBg.png'}
        w={{ base: 550, md: 750, xl: 1250 }}
        h={{ base: 250, md: 300, xl: 350 }}
        bgSize={'cover'}
        bgPos={'center'}
        borderRadius={20}
      >
        <VStack
          w={'full'}
          color={'white'}
          px={{ base: 1, md: 10, xl: 100 }}
          py={{ base: 2, md: 30, xl: 55 }}
          alignItems={'flex-start'}
        >
          <Text color={'white'} fontSize={{ base: 'md', md: 'lg', xl: '2xl' }}>
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
            <HStack h={'full'} gap={{ base: 3, md: 10, xl: 50 }}>
              <VStack fontSize={'md'} alignItems={'flex-start'}>
                <Text>Price:</Text>
                <Text>Ticker Symbol:</Text>
                <Text>Chain:</Text>
                <Text>Contract Address:</Text>
              </VStack>
              <VStack
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight={'bold'}
                alignItems={'flex-start'}
              >
                <Text>$0.54</Text>
                <HStack>
                  <Image
                    src={'/deskCoin.png'}
                    alt={'desk-symbol'}
                    w={{ base: 4, md: 4, lg: 6 }}
                    h={{ base: 4, md: 4, lg: 6 }}
                    fontSize={{ base: 'sm', md: 'md' }}
                  />
                  <Text fontSize={{ base: 'sm', md: 'md' }}>DESK</Text>
                </HStack>
                <HStack>
                  <Image
                    src={'binance.png'}
                    alt={'bep-20'}
                    w={{ base: 4, md: 4, lg: 6 }}
                    h={{ base: 4, md: 4, lg: 6 }}
                  />
                  <Text fontSize={{ base: 'sm', md: 'md' }}>BSC (BEP-20)</Text>
                </HStack>
                <HStack>
                  <Text fontSize={{ base: 'sm', md: 'md' }}>0x86...5453</Text>
                  <GrShare />
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <VStack fontSize={'md'} alignItems={'flex-start'}>
                <Text>Max Supply:</Text>
                <Text>Total Supply:</Text>
                <Text>Circulation Supply:</Text>
                <Text>Burned:</Text>
              </VStack>
              <VStack fontWeight={'bold'} fontSize={{ base: 'sm', md: 'md' }}>
                <Text>100 000 000</Text>
                <Text>14 284 526</Text>
                <Text>17 716 965</Text>
                <Text>21 061 298</Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default Tokenomics
