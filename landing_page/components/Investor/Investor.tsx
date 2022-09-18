import React, { memo } from 'react'
import {
  VStack,
  HStack,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Box,
  Input,
  FormLabel,
  Textarea,
  Button,
  Flex,
  Container
} from '@chakra-ui/react'
export const Investor = () => {
  return (
    <VStack
      bgImage={'/ınvestorBg.png'}
      bgSize={'cover'}
      bgPos={'center'}
      color={'white'}
      w={'full'}
    >
      <Container maxW={'1200px'} centerContent  py={'100'}>
        <VStack
          alignItems={'flex-start'}
          textStyle={'normal'}
          color={'lightgray'}
        >
          <VStack alignItems={'flex-start'} >
            <Text fontWeight={'bold'} textStyle={'headText'} color={'white'}>
              Yatırımcılar İçin
            </Text>
            <Text>
              Projemiz tohum yatırım toplama sürecindedir. Bu süreçteki yatırım
              miktarları ve değerleri birebir <br /> toplantılarla
              belirlenecektir.
            </Text>
            <Text>
              Yatırımcılara Platform tokenimiz olan Desk token verilecek olup
              belirlenen takvimler kapsamında serbest <br /> bırakılacaktır.
            </Text>
          </VStack>

          <HStack
            w={'full'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'} 
          >
            <Image
              src={'/iPad-Pro.png'}
              alt={'ipad'}
              w={'588px'}
              h={'348px'}
              alignSelf={'flex-start'}
            />
            <VStack
              alignItems={'flex-start'}
              color={'lightgray'}
              textStyle={'normal'}
            >
              <Text fontWeight={'bold'} textStyle={'roadHead'} color={'white'}>
                Neden 724 Desk?
              </Text>
              <UnorderedList pl={5}>
                <ListItem>
                  Erken dönem yatırımcılarımız, projemiz tokenine daha uygun
                  maliyetlerle sahip olmuş olacaklar.
                </ListItem>
                <ListItem>
                  Projemiz gelirlerinden net pay elde edecekler.
                </ListItem>
                <ListItem>
                  Platformumuzun işletilmesinde oy hakları olacak.
                </ListItem>
                <ListItem>
                  Stake havuzlarımızdan yararlanarak pasif gelir elde
                  edebilecekler.
                </ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </VStack>
        <Flex
          justifyContent={'space-evenly'}
          py={50}
          bgImage={'/ınv-bg.png'}
          bgPos={'center'}
          bgSize={'cover'}
          overflow={'hidden'}
          w={'996px'}
          h={'600px'}
          px={50} 
        >
          <VStack
            alignItems={'flex-start'}
            textStyle={'normal'}
            w={'450px'}
            gap={5}
          >
            <Text fontWeight={'bold'} textStyle={'roadHead'}>
              İletişim Bilgilerimiz
            </Text>
            <Text color={'#D4D4D4'}>
              Bizimle İletişime Geçebileceğiniz Adresler.
            </Text>
            <HStack>
              <Image
                src={'/sms-tracking.png'}
                alt={'sms'}
                w={'32px'}
                h={'32px'}
              />
              <VStack>
                <Text alignSelf={'flex-start'} textStyle={'headerText'}>
                  Telefon
                </Text>
                <Text fontSize={'15px'}>+1 530 535 8035</Text>
              </VStack>
            </HStack>
            <HStack>
              <Image
                src={'/call-calling.png'}
                alt={'call'}
                w={'32px'}
                h={'32px'}
              />
              <VStack>
                <Text alignSelf={'flex-start'} textStyle={'headerText'}>
                  E-Posta
                </Text>
                <Text fontSize={'15px'}>invesment@724desk.com</Text>
              </VStack>
            </HStack>
          </VStack>
          <VStack
            alignItems={'flex-start'}
            textStyle={'normal'}
            gap={5}
            w={'450px'}
          >
            <Text fontWeight={'bold'} textStyle={'roadHead'}>
              Bize Ulaşın
            </Text>
            <Text textStyle={'headerText'} color={'#D4D4D4'}>
              Lütfen İletişim Bilgilerinizi Yazınız.
            </Text>
            <Box w={'full'}>
              <FormLabel htmlFor='username'>
                <Text textStyle={'headerText'}>Ad Soyad</Text>
              </FormLabel>
              <Input placeholder='Ad Soyad' type={'text'} />
            </Box>
            <Box alignItems={'flex-start'} w={'full'}>
              <FormLabel htmlFor='e-posta'>
                <Text textStyle={'headerText'}>E-Posta</Text>
              </FormLabel>
              <Input placeholder='invesment@724desk.com' type={'email'} />
            </Box>
            <Box w={'full'}>
              <FormLabel htmlFor=''>
                <Text textStyle={'headerText'}>Açıklama</Text>
              </FormLabel>
              <Textarea
                placeholder='Merhaba, '
                size={'lg'}
                minW={'max-content'}
                resize={'none'}
                bg={'transparent'}
                fontSize={{ base: 'sm', md: 'md' }}
                //   onKeyPress={() => setButton()}
                //   onChange={e => setContent(e.target.value)}
                //   value={content}
              ></Textarea>
            </Box>
            <Button
              bg={'#F27C00'}
              w={'full'}
              color={'white'}
              _hover={{ opacity: 0.8 }}
              gap={2}
            >
              <Text textStyle={'headerText'}>Gönder</Text>
              <Image src={'/send.png'} alt={'send'} w={'19px'} h={'19px'} />
            </Button>
          </VStack>
        </Flex>
      </Container>
    </VStack>
  )
}

export default memo(Investor)
