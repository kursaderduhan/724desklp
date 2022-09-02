import React from 'react'
import {
  VStack,
  Text,
  HStack,
  Image,
  Box,
  Circle,
  Stack,
  Divider
} from '@chakra-ui/react'

export const Tokenomics = () => {
  return (
    <VStack px={130} py={'25'}>
      <Text fontWeight={'bold'}>Tokenomics</Text>
      <Text>
        Platformumuzun token ekonomisi, uzmanlarımızı, yatırımcılarımızı,
        müşterilerimizi desteklemek ve korumaya yönelik olarak planlanmıştır.
        Tokenimize sahip olan kişilerin ellerindeki tokenlerin her zaman
        değerlenceği bir yapı oluşturulmuştur.
      </Text>
      <HStack w={'full'} justifyContent={'space-evenly'} gap={25}>
        <VStack>
          <HStack>
            <Circle size='40px' bg='orange' alignSelf={'flex-start'} />
            <VStack>
              <Text color={'orange'} textStyle={'normal'}>
                35%
              </Text>
              <Text textStyle={'normal'}>Uzmanlar</Text>
              <Text textStyle={'normal'}>
                Proje bünyesinde yer alacak uzmanlara gelir oluşturması için
                ayrılacak kısımdır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='red' />
            <VStack>
              <Text color={'red'} textStyle={'normal'}>
                16%
              </Text>
              <Text textStyle={'normal'}>Platform</Text>
              <Text textStyle={'normal'}>
                Reklam giderlerinin ve devamlılığının sağlanması için ayrılacak
                bütçeyi oluşturacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='orange' />
            <VStack>
              <Text color={'orange'} textStyle={'normal'}>
                13%
              </Text>
              <Text textStyle={'normal'}>Platform</Text>
              <Text textStyle={'normal'}>
                Platformun işletilmesi ve gelir modelinin oturtulmasında önemli
                bir görev yerine getirmiş olacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </VStack>
        <Box>
          <Image
            alt={'tokenomics'}
            src={'/tokenomics.png'}
            w={'500'}
            h={'200'}
          />
        </Box>
        <Stack>
          <HStack>
            <Circle size='40px' bg='#8904DB' />
            <VStack>
              <Text color={'#8904DB'} textStyle={'normal'}>
                13%
              </Text>
              <Text textStyle={'normal'}>Takım</Text>
              <Text textDecorationLine={'underline'} textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren içinde
                olan takımımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='#41D334' />
            <VStack>
              <Text color={'#41D334'} textStyle={'normal'}>
                5%
              </Text>
              <Text textStyle={'normal'}>Platform</Text>
              <Text textStyle={'normal'}>
                Proje partnerlerine ayrılacak kısım olacaktır. Ayrılacak bu
                tokenler partnerin ne tür katkı sağladığına göre belirlenip
                değerlendirilmesi sağlanacaktır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
          <HStack>
            <Circle size='40px' bg='#0DA300' />
            <VStack>
              <Text color={'#0DA300'} textStyle={'normal'}>
                9%
              </Text>
              <Text textStyle={'normal'}>Platform</Text>
              <Text textStyle={'normal'}>
                Projemizin geliştirme süreçlerinin en başından itibaren içinde
                olan kurucularımıza ayrılan paydır.
              </Text>
              <Divider />
            </VStack>
          </HStack>
        </Stack>
      </HStack>
      <VStack>
        <HStack>
          <Circle size='40px' bg='#4AA4F9' alignSelf={'flex-start'} />
          <VStack>
            <Text color={'#4AA4F9'} textStyle={'normal'}>
              9%
            </Text>
            <Text textStyle={'normal'}>Yatırımcılar</Text>
            <Text textStyle={'normal'}>
              Projemizin geliştirme süreçlerinin en başından itibaren içinde
              olan yatırımcılarımıza ayrılan paydır.
            </Text>
            <Divider />
          </VStack>
        </HStack>
        <Image src={'/blueBg.png'} alt={'bgBlue'}></Image>
      </VStack>
    </VStack>
  )
}

export default Tokenomics
