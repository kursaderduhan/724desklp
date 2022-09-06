import React, { memo } from 'react'
import { VStack, Text, Image, HStack, Stack } from '@chakra-ui/react'

export const Features = () => {
  return (
    <VStack>
      <Text color={'orange'} fontSize={'3xl'}>
        Gelişmiş Kullanıcı ve Uzman Yönetim Paneli
      </Text>
      <Text>
        Kolay ve gelişmiş panelleriyle platformumuzda kullanıcıların aradığına
        ulaşması, destek alması
      </Text>
      <Text>
        ve uzmanların destek verme performansını en üst düzeye ulaşması için
        geliştirilmiştir.
      </Text>
      <Image src={'/tablet-telefon.png'} alt={'tablet-telefon'} w={'1000px'} />
      <VStack
        w={'full'}
        justifyContent={'space-around'}
        bgImage={'/Ellipse.png'}
        bgSize={'cover'}
        bgPos={'right'}
      >
        <HStack>
          <Image src={'/ticket-2.png'} alt={'ticket'} w={12} h={12} />
          <VStack alignItems={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={'1xl'}>
              Tüm ticket ve her türlü mesajlaşmalar tek <br /> bir ekrandan
              yapılabilmekte
            </Text>
            <Text>
              Gelişmiş gelen kutusu sayesinde; ticketlar, konuşmalar, <br />{' '}
              sistem mesajları ve grup mesajları gibi farklı mesajlaşma <br />{' '}
              seçeneklerini tek bir panelden yönetilebilmekte.
            </Text>
            <Text>
              Detaylı ve kolay panel kullanımıyla ticketların önceliği, durumu,
              <br /> aktifliği, kaynağı ve tarihi görüntülenebilir, filtreleme
              yapılarak iş <br /> planı oluşturulabilir.
            </Text>
          </VStack>
          <Image src={'/GelenKutusu.png'} alt={'gelenKutusu'} w={550} />
        </HStack>
        <HStack>
          <Image src={'Takvim.png'} alt={'takvim'} w={550} />
          <HStack alignItems={'flex-start'}>
            <Image src={'calendar-edit.png'} alt={'calendar'} w={12} h={12} />
            <VStack alignSelf={'flex-start'} alignItems={'flex-start'}>
              <Text fontWeight={'bold'} fontSize={'1xl'}>
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

        <HStack>
          <Image src={'Proje.png'} alt={'takvim'} w={550} />
          <HStack alignItems={'flex-start'}>
            <Image src={'home-trend-up.png'} alt={'trend-up'} w={12} h={12} />
            <VStack alignSelf={'flex-start'} alignItems={'flex-start'}>
              <Text fontWeight={'bold'} fontSize={'1xl'}>
                Üst düzey ajanda kontrolü ve denetim
              </Text>
              <Text>
                Mevcut projelerin iş akış durumu, hangi uzmana atandığı, <br />{' '}
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
        <HStack>
          <Image src={'/profile-2user.png'} alt={'ticket'} w={12} h={12} />
          <VStack alignItems={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={'1xl'}>
              Müşteriler, çalışanlar veya diğer kullanıcılar görüntülenebilir
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
          <Image src={'/screen.png'} alt={'screen'} w={14} h={14} />
          <Text fontWeight={'bold'} fontSize={"1xl"} textAlign={"center"}>
            Giriş seviyelerine göre düzenlenen <br /> arayüzler ile işlem
            tamamlama kolaylığı
          </Text>
          <Text textAlign={"center"}>
            İster uzman ister müşteri, yetki seviyelerine göre kullanıcıları
            farklı <br /> arayüzler bekler. Müşteri girişinde kullanıcılar
            kendileri için özenle <br /> hazırlanmış paneli kullanabilir,
            ihtiyacı olan her özelliğe bu <br /> panelde ulaşabilirler.
          </Text>
          <Text textAlign={"center"}>
            Uzman girişi yapıldığında kullanıcı, uzmanlara yönelik özelliklerden{' '}
            <br /> faydalanarak uzmanlık sürecini yönetebilirler.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default memo(Features)
