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
  Flex
} from '@chakra-ui/react'
export const Investor = () => {
  return (
    <VStack
      bgImage={'/ınvestorBg.png'}
      bgSize={'cover'}
      bgPos={'center'}
      color={'white'}
      w={'full'}
      px={150}
      py={20}
    >
      <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
        <Text fontWeight={'bold'} fontSize={'3xl'}>
          Yatırımcılar İçin
        </Text>
        <Text>
          Projemiz tohum yatırım toplama sürecindedir. Bu süreçteki yatırım
          miktarları ve değerleri birebir <br /> toplantılarla belirlenecektir.
        </Text>
        <Text>
          Yatırımcılara Platform tokenimiz olan Desk token verilecek olup
          belirlenen takvimler kapsamında serbest <br /> bırakılacaktır.
        </Text>
      </VStack>
      <HStack w={'full'} justifyContent={'space-around'}>
        <Image
          src={'/iPad-Pro.png'}
          alt={'ipad'}
          w={750}
          alignSelf={'flex-start'}
        />
        <VStack alignItems={'flex-start'}>
          <Text fontWeight={'bold'} fontSize={'2xl'}>
            Neden 724 Desk?
          </Text>
          <UnorderedList>
            <ListItem>
              Erken dönem yatırımcılarımız, projemiz tokenine daha uygun
              maliyetlerle <br />
              sahip olmuş olacaklar.
            </ListItem>
            <ListItem>Projemiz gelirlerinden net pay elde edecekler.</ListItem>
            <ListItem>
              Platformumuzun işletilmesinde oy hakları olacak.
            </ListItem>
            <ListItem>
              Stake havuzlarımızdan yararlanarak pasif gelir elde edebilecekler.
            </ListItem>
          </UnorderedList>
        </VStack>
      </HStack>
      <Flex
        gap={40}
        bgImage={'/ınv-bg.png'}
        bgPos={'center'}
        bgSize={'cover'}
        py={10}
        px={20}
        borderRadius={10}
      >
        <VStack alignItems={'flex-start'}>
          <Text fontWeight={'bold'} fontSize={'2xl'}>
            İletişim Bilgilerimiz
          </Text>
          <Text>Bizimle İletişime Geçebileceğiniz Adresler.</Text>
          <HStack>
            <Image src={'/sms-tracking.png'} alt={'sms'} w={10} h={10} />
            <VStack>
              <Text>Telefon</Text>
              <Text>+1 530 535 8035</Text>
            </VStack>
          </HStack>
          <HStack>
            <Image src={'/call-calling.png'} alt={'call'} w={10} h={10} />
            <VStack>
              <Text>E-Posta</Text>
              <Text>invesment@724desk.com</Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <Text fontWeight={'bold'} fontSize={'2xl'}>
            Bize Ulaşın
          </Text>
          <Text>Lütfen İletişim Bilgilerinizi Yazınız.</Text>
          <Box>
            <FormLabel htmlFor='username'>Ad Soyad</FormLabel>
            <Input placeholder='Ad Soyad' type={'text'} />
          </Box>
          <Box>
            <FormLabel htmlFor='e-posta'>E-Posta</FormLabel>
            <Input placeholder='invesment@724desk.com' type={'email'} />
          </Box>
          <Box>
            <FormLabel htmlFor=''>Açıklama</FormLabel>
            <Textarea
              placeholder='Merhaba, '
              size={'lg'}
              w={'full'}
              resize={'none'}
              bg={'transparent'}
              fontSize={{ base: 'sm', md: 'md' }}
              //   onKeyPress={() => setButton()}
              //   onChange={e => setContent(e.target.value)}
              //   value={content}
            ></Textarea>
          </Box>
          <Button colorScheme={'orange'} w={'full'}>
            Gönder
          </Button>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default memo(Investor)
