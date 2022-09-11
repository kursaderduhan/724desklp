import React, { memo } from 'react'
import {
  VStack,
  Text,
  Image,
  HStack,
  Stack,
  Circle,
  Box
} from '@chakra-ui/react'

export const Features = () => {
  return (
    <VStack py={50}>
      <Text color={'#F27C00'} fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }}>
        Gelişmiş Kullanıcı ve Uzman Yönetim Paneli
      </Text>
      <Text fontSize={{ base: '1xl', md: '', xl: '' }} textAlign={'center'}>
        Kolay ve gelişmiş panelleriyle platformumuzda kullanıcıların aradığına
        ulaşması, destek alması <br /> ve uzmanların destek verme performansını
        en üst düzeye ulaşması için geliştirilmiştir.
      </Text>
      <Image
        src={'/tablet-telefon.png'}
        alt={'tablet-telefon'}
        w={750}
        pt={50}
      />
      <VStack w={'full'} justifyContent={'space-around'} pos={'relative'} pb={150}>
        <Box
          position={'absolute'}
          w={'full'}
          h={"full"}
          alignSelf={'flex-start'}
          justifyContent={'flex-end'}
          display={'flex'}
        >
          <Image src={'/Ellipse.png'} alt={'orange'} w={1000} h={900} />
        </Box>

        <HStack gap={10} zIndex={1}>
          <HStack>
            <Circle
              size={{ base: '30px', md: '40px', xl: '60px' }}
              bg={'white'}
              alignSelf={'flex-start'}
              boxShadow={'md'}
            >
              <Image
                src={'/ticket-2.png'}
                alt={'ticket'}
                w={{ base: '6', md: '8', xl: '12' }}
                h={{ base: '6', md: '8', xl: '12' }}
              />
            </Circle>
            <VStack alignItems={'flex-start'}>
              <Text
                fontWeight={'bold'}
                fontSize={{ base: '1xl', md: '2xl', xl: '2xl' }}
              >
                Tüm ticket ve her türlü mesajlaşmalar tek <br /> bir ekrandan
                yapılabilmekte
              </Text>
              <Text>
                Gelişmiş gelen kutusu sayesinde; ticketlar, konuşmalar, <br />
                sistem mesajları ve grup mesajları gibi farklı mesajlaşma <br />
                seçeneklerini tek bir panelden yönetilebilmekte.
              </Text>
              <Text>
                Detaylı ve kolay panel kullanımıyla ticketların önceliği,
                durumu,
                <br /> aktifliği, kaynağı ve tarihi görüntülenebilir, filtreleme
                yapılarak iş <br /> planı oluşturulabilir.
              </Text>
            </VStack>
          </HStack>
          <Image src={'/gelenKutusu.png'} alt={'gelenKutusu'} w={550} />
        </HStack>

        <HStack gap={10} zIndex={1}>
          <Image src={'Takvim.png'} alt={'takvim'} w={550} />
          <HStack alignItems={'flex-start'}>
            <Circle
              size={'60px'}
              bg={'white'}
              alignSelf={'flex-start'}
              boxShadow={'md'}
            >
              <Image src={'calendar-edit.png'} alt={'calendar'} w={12} h={12} />
            </Circle>
            <VStack alignSelf={'flex-start'} alignItems={'flex-start'}>
              <Text fontWeight={'bold'} fontSize={'2xl'}>
                Takvim özelliği kullanılarak kategori
                <br /> yöneticileri hem kendilerinin hem de <br /> uzmanlarının
                toplantı zamanlarını kontrol <br /> edebilir
              </Text>
              <Text>
                Takvim bölümünde kullanıcılar zamanlarını yöneterek yaklaşan
                <br /> toplantılarını görüntüleyebilir, katılımcıları görüp
                iletişim <br /> kurabilirler.
              </Text>
              <Text>
                Takvimini gören kullanıcılar daha rahat ve planlı deneyim <br />
                yaşarlar.
              </Text>
            </VStack>
          </HStack>
        </HStack>

        <HStack gap={10} zIndex={1} pr={10}>
          <Image src={'Proje.png'} alt={'takvim'} w={550} />
          <HStack alignItems={'flex-start'}>
            <Circle
              size={'60px'}
              bg={'white'}
              alignSelf={'flex-start'}
              boxShadow={'md'}
            >
              <Image src={'home-trend-up.png'} alt={'trend-up'} w={12} h={12} />
            </Circle>
            <VStack alignSelf={'flex-start'} alignItems={'flex-start'}>
              <Text fontWeight={'bold'} fontSize={'2xl'}>
                Üst düzey ajanda kontrolü ve denetim
              </Text>
              <Text>
                Mevcut projelerin iş akış durumu, hangi uzmana atandığı, <br />
                uzmanın işe başlangıç tarihi kontrol edilip düzenlenebilir.
              </Text>
              <Text>
                Ayrıca, tüm projelerin listesi, seçilen projenin detayları,
                proje <br /> taslak ve şablonları üzerinde çalışma imkanı
                sağlayan <br /> arayüzümüzde bütün süreçler kolayca
                yönetilebilir.
              </Text>
            </VStack>
          </HStack>
        </HStack>
        <HStack gap={10}>
          <HStack alignItems={'flex-start'}>
            <Circle
              size={'60px'}
              bg={'white'}
              alignSelf={'flex-start'}
              boxShadow={'md'}
            >
              <Image src={'/profile-2user.png'} alt={'ticket'} w={12} h={12} />
            </Circle>
            <VStack alignItems={'flex-start'}>
              <Text fontWeight={'bold'} fontSize={'2xl'}>
                Müşteriler, çalışanlar veya diğer <br /> kullanıcılar
                görüntülenebilir
              </Text>
              <Text>
                Özenle hazırlanmış arayüz ile kullanıcıları görüntüleyip onaylı{' '}
                <br /> iletişim adresleri, mesajları, gelir durumları ve daha
                birçok <br /> kullanıcı bilgisine kolayca ulaşılabilir.
              </Text>
              <Text>
                Bunlara ek olarak, kullanıcıların bugüne kadar açmış oldukları{' '}
                <br /> ticket sayısı gibi değişkenler görüntülenebilir ve işlem
                yapılabilir.
              </Text>
            </VStack>
          </HStack>
          <Image src={'/kullanıcılar.png'} alt={'gelenKutusu'} w={550} />
        </HStack>
        <Image
          src={'/vertical-features.png'}
          alt={'vertical-line'}
          alignSelf={'center'}
          w={4}
        />
        <VStack>
          <Image src={'/Dashboard.png'} alt={'dashboard'} w={550} />
          <Circle
            size={'60px'}
            alignSelf={'center'}
            boxShadow={'md'}
            bg={'white'}
          >
            <Image src={'/monitor.png'} alt={'screen'} w={12} h={12} />
          </Circle>
          <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'center'}>
            Giriş seviyelerine göre düzenlenen <br /> arayüzler ile işlem
            tamamlama kolaylığı
          </Text>
          <Text textAlign={'center'}>
            İster uzman ister müşteri, yetki seviyelerine göre kullanıcıları
            farklı <br /> arayüzler bekler. Müşteri girişinde kullanıcılar
            kendileri için özenle <br /> hazırlanmış paneli kullanabilir,
            ihtiyacı olan her özelliğe bu <br /> panelde ulaşabilirler.
          </Text>
          <Text textAlign={'center'}>
            Uzman girişi yapıldığında kullanıcı, uzmanlara yönelik özelliklerden{' '}
            <br /> faydalanarak uzmanlık sürecini yönetebilirler.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default memo(Features)
