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
    <VStack px={130} py={'25'}>
      <Text fontWeight={'bold'} fontSize={'4xl'}>
        Tokenomics
      </Text>
      <Text>
        Platformumuzun token ekonomisi, uzmanlarımızı, yatırımcılarımızı,
        müşterilerimizi desteklemek ve korumaya yönelik olarak planlanmıştır.
        Tokenimize sahip olan kişilerin ellerindeki tokenlerin her zaman
        değerlenceği bir yapı oluşturulmuştur.
      </Text>
      <HStack w={'full'} justifyContent={'space-between'} gap={25}>
        <VStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='orange' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'orange'} textStyle={'normal'}>
                35%
              </Text>
              <Text textStyle={'normal'}>Platform</Text>
              <Text textStyle={'normal'}>
                Platformun işletilmesi ve gelir modelinin oturtulmasında
              </Text>
              <Text alignSelf={'flex-start'}>
                önemli bir görev yerine getirmiş olacaktır.
              </Text>
              <Divider color={'orange'} />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='red' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'red'} textStyle={'normal'}>
                16%
              </Text>
              <Text textStyle={'normal'}>Uzmanlar</Text>
              <Text textStyle={'normal'}>
                Proje bünyesinde yer alacak uzmanlara gelir oluşturması
              </Text>
              <Text alignSelf={'flex-start'}>için ayrılacak kısımdır.</Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='orange' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'orange'} textStyle={'normal'}>
                13%
              </Text>
              <Text textStyle={'normal'}>Reklam</Text>
              <Text textStyle={'normal'}>
                Reklam giderlerinin ve devamlılığının sağlanması için
              </Text>
              <Text alignSelf={'flex-start'}>
                ayrılacak bütçeyi oluşturacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <VStack pt={50}>
          <Flex
            boxSize={400}
            bgImage={'/tokenomics.png'}
            bgPos={'center'}
            bgSize={'cover'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <Text fontWeight={'bold'}>ÜRETİLECEK TOKEN</Text>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              100 M
            </Text>
          </Flex>
          <HStack>
            <Circle size='40px' bg='#4AA4F9' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'#4AA4F9'} textStyle={'normal'}>
                9%
              </Text>
              <Text textStyle={'normal'}>Yatırımcılar</Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren
              </Text>
              <Text alignSelf={'flex-start'}>
                içinde olan yatırımcılarımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <VStack>
          <HStack alignSelf={'flex-start'}>
            <Circle size='40px' bg='#8904DB' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'#8904DB'} textStyle={'normal'}>
                13%
              </Text>
              <Text textStyle={'normal'}>Takım</Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren
              </Text>
              <Text alignSelf={'flex-start'}>
                içinde olan takımımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='#41D334' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'#41D334'} textStyle={'normal'}>
                5%
              </Text>
              <Text textStyle={'normal'}>Partnerler</Text>
              <Text textStyle={'normal'}>
                Proje partnerlerine ayrılacak kısım olacaktır. Ayrılacak bu
              </Text>
              <Text>
                tokenler partnerin ne tür katkı sağladığına göre belirlenip
              </Text>
              <Text alignSelf={'flex-start'}>
                değerlendirilmesi sağlanacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='#0DA300' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'#0DA300'} textStyle={'normal'}>
                9%
              </Text>
              <Text textStyle={'normal'}>Kurucular</Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren{' '}
                <Text>içinde olan kurucularımıza ayrılan paydır.</Text>
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Flex
        bgImage={'/blueBg.png'}
        w={1250}
        h={350}
        bgSize={'cover'}
        bgPos={'center'}
        borderRadius={20}
      >
        <VStack
          w={'full'}
          color={'white'}
          px={100}
          py={55}
          alignItems={'flex-start'}
        >
          <Text color={'white'} fontSize={'2xl'}>
            DESK Token Metrics
          </Text>
          <HStack
            justifyContent={'space-between'}
            w={'full'}
            display={'flex'}
            h={'full'}
            alignItems={'center'}
          >
            <HStack h={'full'} gap={50}>
              <VStack fontSize={'md'} alignItems={'flex-start'}>
                <Text>Price:</Text>
                <Text>Ticker Symbol:</Text>
                <Text>Chain:</Text>
                <Text>Contract Address:</Text>
              </VStack>
              <VStack
                fontSize={'md'}
                fontWeight={'bold'}
                alignItems={'flex-start'}
              >
                <Text>$0.54</Text>
                <HStack>
                  <Image
                    src={'/deskCoin.png'}
                    alt={'desk-symbol'}
                    w={'6'}
                    h={'6'}
                  />
                  <Text>DESK</Text>
                </HStack>
                <HStack>
                  <Image src={'binance.png'} alt={'bep-20'} w={'6'} h={'6'} />
                  <Text>BSC (BEP-20)</Text>
                </HStack>
                <HStack>
                  <Text>0x86...5453</Text>
                  <IconButton
                    aria-label='share'
                    variant={'ghost'}
                    icon={<GrShare />}
                  />
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
              <VStack fontWeight={'bold'} fontSize={'md'}>
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
