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

export const Features = () => {
  return (
    <VStack py={50} bg={'white'} color={'black'}>
      <Box
        position={'absolute'}
        w={'full'}
        h={'full'}
        alignSelf={'flex-start'}
        justifyContent={'flex-end'}
        display={'flex'} mt={600}
      >
        <Image
          src={'/Ellipse.png'}
          alt={'orange'}
          w={{ base: 450, md: 600, lg: 750, xl: 1000 }}
          h={{ base: 500, md: 650, lg: 800, xl: 900 }}
        />
      </Box>

      <Container maxW={'1200px'} centerContent>
        <Text color={'#F27C00'} fontSize={'46px'}>
          Gelişmiş Kullanıcı ve Uzman Yönetim Paneli
        </Text>
        <Text textStyle={'headerText'} textAlign={'center'} color={'#666666'}>
          Kolay ve gelişmiş panelleriyle platformumuzda kullanıcıların aradığına
          ulaşması, destek alması <br /> ve uzmanların destek verme
          performansını en üst düzeye ulaşması için geliştirilmiştir.
        </Text>
        <Image
          src={'/tablet-telefon.png'}
          alt={'tablet-telefon'}
          w={'751px'}
          h={'510px'}
          pt={50}
          zIndex={1}
        />
        <VStack
          w={'full'}
          justifyContent={'space-around'}
          pos={'relative'}
          pb={150}
        >
          <HStack gap={{ base: 0, md: 2, lg: 6, xl: 10 }} zIndex={1}>
            <HStack>
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
              <VStack alignItems={'flex-start'} textStyle={'normal'}>
                <Text fontWeight={500} textStyle={'featuresHead'}>
                  Tüm ticket ve her türlü mesajlaşmalar tek <br /> bir ekrandan
                  yapılabilmekte
                </Text>
                <Text color={'#525252'}>
                  Gelişmiş gelen kutusu sayesinde; ticketlar, konuşmalar, <br />
                  sistem mesajları ve grup mesajları gibi farklı mesajlaşma{' '}
                  <br />
                  seçeneklerini tek bir panelden yönetilebilmekte.
                </Text>
                <Text color={'#525252'}>
                  Detaylı ve kolay panel kullanımıyla ticketların önceliği,
                  durumu,
                  <br /> aktifliği, kaynağı ve tarihi görüntülenebilir,
                  filtreleme yapılarak iş <br /> planı oluşturulabilir.
                </Text>
              </VStack>
            </HStack>
            <Image
              src={'/GelenKutusu.png'}
              alt={'gelenKutusu'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
          </HStack>

          <HStack gap={{ base: 0, md: 2, lg: 6, xl: 10 }} zIndex={1}>
            <Image
              src={'Takvim.png'}
              alt={'takvim'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
            <HStack alignItems={'flex-start'}>
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
                <Text fontWeight={500} textStyle={'featuresHead'}>
                  Takvim özelliği kullanılarak kategori
                  <br /> yöneticileri hem kendilerinin hem de <br />{' '}
                  uzmanlarının toplantı zamanlarını kontrol <br /> edebilir
                </Text>
                <Text color={'#525252'}>
                  Takvim bölümünde kullanıcılar zamanlarını yöneterek yaklaşan
                  <br /> toplantılarını görüntüleyebilir, katılımcıları görüp
                  iletişim <br /> kurabilirler.
                </Text>
                <Text color={'#525252'}>
                  Takvimini gören kullanıcılar daha rahat ve planlı deneyim{' '}
                  <br />
                  yaşarlar.
                </Text>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            gap={{ base: 0, md: 2, lg: 6, xl: 10 }}
            zIndex={1}
            pr={{ md: 2, lg: 4, xl: 4 }}
          >
            <Image
              src={'Proje.png'}
              alt={'takvim'}
              w={{ base: 250, md: 350, lg: 450, xl: 550 }}
            />
            <HStack alignItems={'flex-start'}>
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
                textStyle={'normal'}
              >
                <Text fontWeight={500} textStyle={'featuresHead'}>
                  Üst düzey ajanda kontrolü ve denetim
                </Text>
                <Text color={'#525252'}>
                  Mevcut projelerin iş akış durumu, hangi uzmana atandığı,{' '}
                  <br />
                  uzmanın işe başlangıç tarihi kontrol edilip düzenlenebilir.
                </Text>
                <Text color={'#525252'}>
                  Ayrıca, tüm projelerin listesi, seçilen projenin detayları,
                  proje <br /> taslak ve şablonları üzerinde çalışma imkanı
                  sağlayan <br /> arayüzümüzde bütün süreçler kolayca
                  yönetilebilir.
                </Text>
              </VStack>
            </HStack>
          </HStack>
          <HStack gap={{ base: 0, md: 2, lg: 6, xl: 10 }}>
            <HStack alignItems={'flex-start'}>
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
              <VStack alignItems={'flex-start'} textStyle={'normal'}>
                <Text fontWeight={500} textStyle={'featuresHead'}>
                  Müşteriler, çalışanlar veya diğer <br /> kullanıcılar
                  görüntülenebilir
                </Text>
                <Text color={'#525252'}>
                  Özenle hazırlanmış arayüz ile kullanıcıları görüntüleyip
                  onaylı
                  <br /> iletişim adresleri, mesajları, gelir durumları ve daha
                  birçok <br /> kullanıcı bilgisine kolayca ulaşılabilir.
                </Text>
                <Text color={'#525252'}>
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
          <Image
            src={'/vertical-features.png'}
            alt={'vertical-line'}
            alignSelf={'center'}
            w={4}
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
              bg={'white'}
            >
              <Image
                src={'/monitor.png'}
                alt={'screen'}
                w={{ base: '6', md: '8', xl: '10' }}
                h={{ base: '6', md: '8', xl: '10' }}
              />
            </Circle>
            <Text
              fontWeight={500}
              textStyle={'featuresHead'}
              textAlign={'center'}
            >
              Giriş seviyelerine göre düzenlenen <br /> arayüzler ile işlem
              tamamlama kolaylığı
            </Text>
            <Text textAlign={'center'} color={'#525252'}>
              İster uzman ister müşteri, yetki seviyelerine göre kullanıcıları
              farklı <br /> arayüzler bekler. Müşteri girişinde kullanıcılar
              kendileri için özenle <br /> hazırlanmış paneli kullanabilir,
              ihtiyacı olan her özelliğe bu <br /> panelde ulaşabilirler.
            </Text>
            <Text textAlign={'center'} color={'#525252'}>
              Uzman girişi yapıldığında kullanıcı, uzmanlara yönelik
              özelliklerden <br /> faydalanarak uzmanlık sürecini
              yönetebilirler.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </VStack>
  )
}

export default memo(Features)
