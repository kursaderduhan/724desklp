import React, { memo } from 'react'
import {
  VStack,
  Text,
  Image,
  HStack,
  Stack,
  Circle,
  Box,
  Container
} from '@chakra-ui/react'
import '@fontsource/readex-pro'
export const Features = () => {
  return (
    <VStack pt={"120px"} bg={'white'} color={'black'} pb={"309px"}>
      <Box
        position={'absolute'}
        w={'full'}
        alignSelf={'flex-start'}
        justifyContent={'flex-end'}
        display={'flex'} mt={750} 
      >
        <Image
          src={'/Ellipse.png'}
          alt={'orange'}
          w={800}
          h={1000}
        />
      </Box>
      <Container maxW={'1200px'} centerContent>
        <Text color={'#F27C00'} fontSize={'46px'} fontWeight={400} lineHeight={"58px"} fontStyle={"normal"} fontFamily={"Readex Pro"}>
          Gelişmiş Kullanıcı ve Uzman Yönetim Paneli
        </Text>
        <Text fontSize={"14px"} lineHeight={"21px"} letterSpacing={"0.5px"} fontWeight={400} fontStyle={"normal"} textAlign={'center'} color={'#666666'}>
          Kolay ve gelişmiş panelleriyle platformumuzda kullanıcıların aradığına
          ulaşması, destek alması <br /> ve uzmanların destek verme
          performansını en üst düzeye ulaşması için geliştirilmiştir.
        </Text>
        <Image
          src={'/tablet-telefon.png'}
          alt={'tablet-telefon'}
          w={'751px'}
          h={'510px'}
          zIndex={1} mt={"54px"}
        />
        <VStack
          w={'full'}
          justifyContent={'space-around'}
          pos={'relative'}
          mt={"150px"} gap={"120px"}
        >
          <HStack zIndex={1} w={"100%"} justifyContent={"space-between"}>
            <HStack maxW={"561px"}>
              <Circle
                size={{ base: '30px', md: '40px', xl: '54px' }}
                bg={'white'}
                alignSelf={'flex-start'}
                boxShadow={'md'}
              >
                <Image
                  src={'/ticket-2.png'}
                  alt={'ticket'}
                  w={{ base: '6', md: '8', xl: '10' }}
                  h={{ base: '6', md: '8', xl: '10' }}
                />
              </Circle>
              <VStack alignItems={'flex-start'}>
                <Text fontWeight={500} textStyle={'featuresHead'}>
                  Tüm ticket ve her türlü mesajlaşmalar tek bir ekrandan
                  yapılabilmekte
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Gelişmiş gelen kutusu sayesinde; ticketlar, konuşmalar,
                  sistem mesajları ve grup mesajları gibi farklı mesajlaşma{' '}
                  seçeneklerini tek bir panelden yönetilebilmekte.
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Detaylı ve kolay panel kullanımıyla ticketların önceliği,
                  durumu, aktifliği, kaynağı ve tarihi görüntülenebilir,
                  filtreleme yapılarak iş planı oluşturulabilir.
                </Text>
              </VStack>
            </HStack>
            <Image
              src={'/GelenKutusu.png'}
              alt={'gelenKutusu'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
          </HStack>

          <HStack zIndex={1} justifyContent={"space-between"} w={"100%"}>
            <Image
              src={'Takvim.png'}
              alt={'takvim'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
            <HStack alignItems={'flex-start'} maxW={"561px"}>
              <Circle
                size={{ base: '30px', md: '40px', xl: '54px' }}
                bg={'white'}
                alignSelf={'flex-start'}
                boxShadow={'md'}
              >
                <Image
                  src={'calendar-edit.png'}
                  alt={'calendar'}
                  w={{ base: '6', md: '8', xl: '10' }}
                  h={{ base: '6', md: '8', xl: '10' }}
                />
              </Circle>
              <VStack
                alignSelf={'flex-start'}
                alignItems={'flex-start'}
                textStyle={'normal'}
              >
                <Text textStyle={'featuresHead'}>
                  Takvim özelliği kullanılarak kategori
                  yöneticileri hem kendilerinin hem de
                  uzmanlarının toplantı zamanlarını kontrol edebilir
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Takvim bölümünde kullanıcılar zamanlarını yöneterek yaklaşan
                  toplantılarını görüntüleyebilir, katılımcıları görüp
                  iletişim kurabilirler.
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Takvimini gören kullanıcılar daha rahat ve planlı deneyim
                  <br />
                  yaşarlar.
                </Text>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            zIndex={1}
            w={"100%"} justifyContent={"space-between"}
          >
            <Image
              src={'Proje.png'}
              alt={'takvim'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
            <HStack alignItems={'flex-start'}  maxW={"561px"} w={"100%"}>
              <Circle
                size={{ base: '30px', md: '40px', xl: '54px' }}
                bg={'white'}
                alignSelf={'flex-start'}
                boxShadow={'md'}
              >
                <Image
                  src={'home-trend-up.png'}
                  alt={'trend-up'}
                  w={{ base: '6', md: '8', xl: '10' }}
                  h={{ base: '6', md: '8', xl: '10' }}
                />
              </Circle>
              <VStack
                alignSelf={'flex-start'}
                alignItems={'flex-start'}
                textStyle={'normal'} w={"100%"} pr={10}
              >
                <Text textStyle={'featuresHead'}>
                  Üst düzey ajanda kontrolü ve denetim
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Mevcut projelerin iş akış durumu, hangi uzmana atandığı,{' '}
                  <br />
                  uzmanın işe başlangıç tarihi kontrol edilip düzenlenebilir.
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Ayrıca, tüm projelerin listesi, seçilen projenin detayları,
                  proje <br /> taslak ve şablonları üzerinde çalışma imkanı
                  sağlayan <br /> arayüzümüzde bütün süreçler kolayca
                  yönetilebilir.
                </Text>
              </VStack>
            </HStack>
          </HStack>
          <HStack gap={{ base: 0, md: 2, lg: 6, xl: 10 }} w={"100%"} justifyContent={"space-between"}>
            <HStack alignItems={'flex-start'} maxW={"561px"}>
              <Circle
                size={{ base: '30px', md: '40px', xl: '54px' }}
                bg={'white'}
                alignSelf={'flex-start'}
                boxShadow={'md'}
              >
                <Image
                  src={'/profile-2user.png'}
                  alt={'ticket'}
                  w={{ base: '6', md: '8', xl: '10' }}
                  h={{ base: '6', md: '8', xl: '10' }}
                />
              </Circle>
              <VStack alignItems={'flex-start'}>
                <Text textStyle={'featuresHead'}>
                  Müşteriler, çalışanlar veya diğer kullanıcılar
                  görüntülenebilir
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Özenle hazırlanmış arayüz ile kullanıcıları görüntüleyip
                  onaylı
                  <br /> iletişim adresleri, mesajları, gelir durumları ve daha
                  birçok <br /> kullanıcı bilgisine kolayca ulaşılabilir.
                </Text>
                <Text color={'#525252'} textStyle={"featuresText"}>
                  Bunlara ek olarak, kullanıcıların bugüne kadar açmış oldukları
                  <br /> ticket sayısı gibi değişkenler görüntülenebilir ve
                  işlem yapılabilir.
                </Text>
              </VStack>
            </HStack>
            <Image
              src={'/Kullanıcılar.png'}
              alt={'users'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
          </HStack>
          </VStack>
          <Image
            src={'/vertical-features.png'}
            alt={'vertical-line'}
            alignSelf={'center'}
            w={4} m={"40px"}
          />
          <VStack textStyle={'normal'}>
            <Image
              src={'/Dashboard.png'}
              alt={'dashboard'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
            <Circle
            size={{ base: '30px', md: '40px', xl: '54px' }}
            alignSelf={'center'}
            boxShadow={'md'}
            bg={'white'} mt={"24px"}
            >
              <Image
                src={'/monitor.png'}
                alt={'screen'}
                w={{ base: '6', md: '8', xl: '10' }}
                h={{ base: '6', md: '8', xl: '10' }}
              />
            </Circle>
            <Text
              textStyle={'featuresHead'}
              textAlign={'center'} maxW={"495px"} pt={"12px"}
            >
              Giriş seviyelerine göre düzenlenen arayüzler ile işlem
              tamamlama kolaylığı
            </Text>
            <Text textAlign={'center'} textStyle={"featuresText"} color={'#525252'} maxW={"495px"} pt={"24px"}>
              İster uzman ister müşteri, yetki seviyelerine göre kullanıcıları
              farklı arayüzler bekler. Müşteri girişinde kullanıcılar
              kendileri için özenle hazırlanmış paneli kullanabilir,
              ihtiyacı olan her özelliğe bu panelde ulaşabilirler.
            </Text>
            <Text textAlign={'center'} color={'#525252'} maxW={"495px"} textStyle={"featuresText"} pt={"12px"}>
              Uzman girişi yapıldığında kullanıcı, uzmanlara yönelik
              özelliklerden faydalanarak uzmanlık sürecini
              yönetebilirler.
            </Text>
          </VStack>
      </Container>
    </VStack>
  )
}

export default memo(Features)
