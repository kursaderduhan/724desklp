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
      <Container maxW={'1200px'} centerContent px='50' py={"100"}>
        <VStack
          alignItems={'flex-start'}
          alignSelf={'center'}
          textStyle={'normal'}
          color={'lightgray'}
        >
          <VStack alignItems={"flex-start"}>
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
            justifyContent={'space-around'}
            alignItems={'center'}
            flexDirection={{ base: 'row', md: 'row', lg: 'row', xl: 'row' }}
          >
            <Image
              src={'/iPad-Pro.png'}
              alt={'ipad'}
              w={{ base: 400, md: 500, lg: 500, xl: 750 }}
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
                  maliyetlerle <br />
                  sahip olmuş olacaklar.
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
          gap={{ base: 2, md: 5, lg: 20, xl: 40 }}
          bgImage={'/ınv-bg.png'}
          bgPos={'center'}
          bgSize={'cover'}
          py={10}
          px={{ base: 2, md: 5, lg: 10, xl: 20 }}
          borderRadius={10}
        >
          <VStack alignItems={'flex-start'} textStyle={'normal'}>
            <Text fontWeight={'bold'} textStyle={'roadHead'}>
              İletişim Bilgilerimiz
            </Text>
            <Text color={'gray'}>
              Bizimle İletişime Geçebileceğiniz Adresler.
            </Text>
            <HStack>
              <Image src={'/sms-tracking.png'} alt={'sms'} w={10} h={10} />
              <VStack>
                <Text alignSelf={'flex-start'}>Telefon</Text>
                <Text>+1 530 535 8035</Text>
              </VStack>
            </HStack>
            <HStack>
              <Image src={'/call-calling.png'} alt={'call'} w={10} h={10} />
              <VStack>
                <Text alignSelf={'flex-start'}>E-Posta</Text>
                <Text>invesment@724desk.com</Text>
              </VStack>
            </HStack>
          </VStack>
          <VStack alignItems={'flex-start'} textStyle={'normal'}>
            <Text fontWeight={'bold'} textStyle={'roadHead'}>
              Bize Ulaşın
            </Text>
            <Text>Lütfen İletişim Bilgilerinizi Yazınız.</Text>
            <Box>
              <FormLabel htmlFor='username'>Ad Soyad</FormLabel>
              <Input placeholder='Ad Soyad' type={'text'} />
            </Box>
            <Box alignItems={'flex-start'}>
              <FormLabel htmlFor='e-posta'>E-Posta</FormLabel>
              <Input placeholder='invesment@724desk.com' type={'email'} />
            </Box>
            <Box>
              <FormLabel htmlFor=''>
                <Text>Açıklama</Text>
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
              Gönder
              <Image src={'/send.png'} alt={'send'} w={6} h={6} />
            </Button>
          </VStack>
        </Flex>
      </Container>
    </VStack>
  )
}

export default memo(Investor)
