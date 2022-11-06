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
import "@fontsource/readex-pro"
export const Investor = () => {
  return (
    <VStack
      bgGradient={'linear-gradient(266.69deg, #2573BA 0%, #1A559C 97.2%, #041860 168.14%)'}
      color={'white'}
      w={'full'}
    >
      <Container maxW={'1200px'} py={'72px'}>
          <Flex flexDirection={"column"} alignItems={'flex-start'} alignSelf={"flex-start"} w={"100%"} justifyContent={"flex-start"} maxW={"792px"} >
            <Text textStyle={'resultServiceHead'} fontFamily={"Readex Pro"} color={'white'}>
              <span style={{color:"#F27C00",fontFamily:"poppins"}}>I</span>Yatırımcılar İçin
            </Text>
            <Text textStyle={"resultServiceText"} color={"#EAEAEA"}>
              Projemiz tohum yatırım toplama sürecindedir. Bu süreçteki yatırım
              miktarları ve değerleri birebir toplantılarla
              belirlenecektir.
            </Text>
            <Text textStyle={"resultServiceText"} color={"#EAEAEA"} pt={5}>
              Yatırımcılara Platform tokenimiz olan Desk token verilecek olup
              belirlenen takvimler kapsamında serbest bırakılacaktır.
            </Text>
          </Flex>
          <HStack
            w={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'} mt={"101px"}
          >
            <Flex pos={"relative"} w={"100%"} h={"100%"} bottom={200} right={55}>
            <Image
              src={'/iPad-Pro.png'}
              alt={'ipad'}
              alignSelf={'flex-start'} pos={"absolute"} 
            />
            </Flex>
            <VStack
              alignItems={'flex-start'} pt={50} w={"100%"}
            >
              <Text textStyle={"investorText"}>
                Neden 724 Desk?
              </Text>
              <UnorderedList spacing={"5px"} maxW={"588px"} fontSize={"14px"} lineHeight={"21px"} fontWeight={500} color={"#F6F6F6"} fontStyle={"normal"} letterSpacing={"0.15px"}>
                <ListItem>
                  Erken dönem yatırımcılarımız, projemiz tokenine daha uygun maliyetlerle sahip olmuş olacaklar.
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
       <Flex w={"100%"} justifyContent={"center"} pt={"136px"}>
        <Flex
          justifyContent={'center'}
          pt={"20px"} alignSelf={"center"}
          bg={'#164D8F'}
          overflow={'hidden'}
          w={'996px'} boxShadow={"md"}
          h={'654px'} borderRadius={"16px"}
        >
          <VStack
            alignItems={'flex-start'}
            textStyle={'normal'}
            w={'450px'}
            gap={5}
          >
            <Text textStyle={'investorText'} color={"#FFFFFF"}>
              İletişim Bilgilerimiz
            </Text>
              <Text color={'#D4D4D4'} textStyle={"resultServiceText"}>
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
                <Text alignSelf={'flex-start'} textStyle={'resultServiceText'} color={"#EAEAEA"}>
                  Telefon
                </Text>
                <Text fontSize={'15px'} textStyle={'resultServiceText'} color={"white"} lineHeight={"22px"}>+1 530 535 8035</Text>
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
                <Text alignSelf={'flex-start'} textStyle={'resultServiceText'} color={"#EAEAEA"}>
                  E-Posta
                </Text>
                <Text fontSize={'15px'} textStyle={'resultServiceText'} color={"white"} lineHeight={"22px"}>invesment@724desk.com</Text>
              </VStack>
            </HStack>
          </VStack>
          <VStack
            alignItems={'flex-start'}
            textStyle={'normal'}
            w={'450px'}
          >
            <Text textStyle={'investorText'} color={"#FFFFFF"}>
              Bize Ulaşın
            </Text>
            <Text textStyle={'resultServiceText'} color={'#D4D4D4'}>
              Lütfen İletişim Bilgilerinizi Yazınız.
            </Text>
            <Box w={'full'} pt={"32px"}>
              <FormLabel htmlFor='username' >
                <Text textStyle={"resultServiceText"} color={"#F6F6F6"}>Ad Soyad</Text>
              </FormLabel>
              <Input placeholder='Ad Soyad' type={'text'} _placeholder={{color:"white",textStyle:"resultServiceText"}}  bg={"#386CAC"}/>
            </Box>
            <Box alignItems={'flex-start'} w={'full'} pt={"24px"}>
              <FormLabel htmlFor='e-posta'>
                <Text textStyle={"resultServiceText"} color={"#F6F6F6"}>E-Posta</Text>
              </FormLabel>
              <Input placeholder='invesment@724desk.com' type={'email'}  bg={"#386CAC"} _placeholder={{color:"white",textStyle:"resultServiceText"}}/>
            </Box>
            <Box w={'full'} py={"24px"}>
              <FormLabel htmlFor=''>
                <Text textStyle={"resultServiceText"} color={"#F6F6F6"}>Açıklama</Text>
              </FormLabel>
              <Textarea
                  placeholder='Merhaba, 
                  Projenize yatırım yapmak istiyorum lütfen benimle iletişime geçebilir misiniz?'
                size={'lg'} bg={"#386CAC"}
                minW={'max-content'}
                resize={'none'}
                h={"195px"} _placeholder={{color:"white",textStyle:"resultServiceText"}}
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
              gap={2} h={"54px"}
            >
              <Text fontSize={"13px"} lineHeight={"20px"} fontWeight={500} letterSpacing={"0.5px"} fontStyle={"normal"} color={"white"}>Gönder</Text>
              <Image src={'/send.png'} alt={'send'} w={'19px'} h={'19px'} />
            </Button>
          </VStack>
          </Flex>
          </Flex>
      </Container>
    </VStack>
  )
}

export default memo(Investor)
