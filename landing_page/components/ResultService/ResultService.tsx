import {
  VStack,
  HStack,
  Text,
  Image,
  Box,
  Stack,
  UnorderedList,
  ListItem,
  Flex,
  Container
} from '@chakra-ui/react'
import React, { memo } from 'react'
import '@fontsource/readex-pro'
export const ResultService = () => {
  return (
    <VStack w={'full'} pt={'120px'} bg={'white'} color={'black'}>
      <HStack w={'100%'} justifyContent={"space-between"} alignItems={"center"} mt={75}>
          <Container maxW={'1200px'} alignItems={'flex-start'}>
            <VStack
              alignItems={'flex-start'}
              textStyle={'normal'}
              zIndex='1'
            >
              <Text textStyle={'resultServiceHead'} fontFamily='Readex Pro' color={"#333333"}>
                Çözüme anında ulaş
              </Text>
              <Text maxW={'690px'} textStyle={'resultServiceText'} color={"#666666"}>
                Destek almak istediği hizmetin kategorisini seçerek işleme
                başlayan kullanıcılar, hizmet saatini, dilini ve kanalını kendi
                isteklerine göre belirleyerek günün her saatinde, o esnada aktif
                olan uzmanlarımızdan profesyonel desteklerini alarak
                sorunlarının çözümlerine anında ulaşabilirler.
              </Text>
              <Text
                textStyle={'resultServiceHead'}
                fontFamily='Readex Pro'
                pt={'54px'} color={"#333333"}
              >
                Kaliteli hizmet al
              </Text>
              <Text zIndex={1} maxW={'690px'} textStyle={'resultServiceText'} color={"#666666"}>
                Yetkinlikleri platformumuzca onaylanmış uzmanlarımızla birçok
                kategoride kullanıcıların sorunlarına kaliteli çözümler
                üreteceğimizi garanti ediyoruz. Dünyanın her yerinden hizmet
                veren uzmanlarımız, kullanıcılar için farklı dillerde isabetli
                çözümler üreterek kullanıcıların problemlerini titizlikle çözüme
                ulaştırıyor.
              </Text>
            </VStack>
          </Container>
        <Flex position={'absolute'} justifyContent={'flex-end'} w={'full'}>
          <Image src={'/resultImage.png'} alt={'resultImage'} />
        </Flex>
      </HStack>
      <HStack gap={15} w={'full'} >
        <Flex pos={'absolute'} w={850} h={800} justifyContent={'flex-start'} pt={150}>
          <Image src={'/Ellipse-1.png'} alt={'font'} />
        </Flex>
        <Flex w={'full'} justifyContent={'center'} pt={"32px"}>
          <Flex w={550} h={750} overflow={'hidden'}>
            <Image
              src={'/phone-1.png'}
              alt={'phone-1'}
              w={250}
              h={450}
              zIndex={1}
            />
            <Image
              src={'/phone-2.png'}
              alt={'phone-2'}
              w={300}
              pos={'absolute'}
              zIndex={2}
              ml={150}
              mt={100}
            />
          </Flex>
          <VStack alignItems={'flex-start'} zIndex={1} pt={"140px"}>
            <VStack alignItems={'flex-start'}>
              <Text textStyle={'resultServiceHead'} color="black" fontFamily={"Readex Pro"}>
                Servislerimiz
              </Text>
              <Text color={'#959595'} textStyle={"resultServiceText"}>
                Proje İçerisinde Sunduğumuz Servislerimiz
              </Text>
              <UnorderedList pl={5} textStyle={"resultServiceText"} color={"#333333"} spacing={"16px"} pt={"32px"}>
                <ListItem>Destek Hizmetlerimiz</ListItem>
                <ListItem>Token Satış Servisimiz</ListItem>
                <ListItem>Stake Servisimiz</ListItem>
                <ListItem>Ödeme Servislerimiz</ListItem>
                <ListItem>Kredi Yönetim Çözümlerimiz</ListItem>
              </UnorderedList>
            </VStack>
            <VStack alignItems={'flex-start'} textStyle={'normal'} maxW={"588px"} pt={"120px"}>
              <Text textStyle={'resultServiceHead'} color="black" fontFamily={"Readex Pro"}>
                724Desk in Avantajları
              </Text>
              <Text color={'gray'} textStyle={"resultServiceText"}>Projemizin diğer projeleri</Text>
              <Text textStyle={"resultServiceText"} color={"#525252"} pt={"42px"}>
                724Desk kendi alanında hizmet veren ilk projedir. Platformumuz
                aracılığıyla, kripto alanında sunduğumuz destekler ile
                kullanıcıların yaşadığı sorunları en kısa sürede en
                isabetli çözümler uygulayarak çözüme kavuşturuyoruz.
              </Text>
              <Text textStyle={"resultServiceText"} color={"#525252"}>
                Hizmetlerimiz tek bir kategoride sınırlı değildir. Telefonu
                arızalanan bir kişinin probleminden tutun, domain ile
                sunucu bağlantısının sağlanamadığı durumlarda da
                uzmanlarımıza ulaşarak çözüm sürecinizi başlatabilirsiniz.
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </HStack>
      <VStack pos={'relative'} pt={"315px"} pb={"150px"} overflow={'hidden'}>
        <Flex
          pos={'absolute'}
          w={"1100px"}
          h={900}
          justifyContent={'center'}
          top={0}
          mt={200}
        >
          <Image src={'/Ellipse-2.png'} alt={'font'} />
        </Flex>
        <VStack zIndex={1}>
          <Text textStyle={'resultServiceHead'} color={"black"} fontFamily={"Readex Pro"}>
            Çözüm Kategorilerimiz
          </Text>
          <Text textAlign={'center'} textStyle={"resultServiceText"} maxW={"936px"} pt={"4px"}>
            Belirlediğim sektörler için hizmet kategorilerimiz olacak. Bu
            kategoriler önceden belirlenip belli takvimlere göre alt yapıları
            oluşturulup hizmete açılacak. Bu kategorilerden ilki Kripto
            kategorisi olacak. Ardından diğer kategorileri de sıra ile hizmete alıyor olacağız.
          </Text>
          <HStack pt={"54px"}>
            <VStack>
              <Image
                src={'/kripto.png'}
                alt={'kripto'}
                w={{ base: 12, md: 14, lg: 20, xl: 24 }}
                h={{ base: 12, md: 14, lg: 20, xl: 24 }}
              />
              <Text fontWeight={500} fontSize={"19px"} fontStyle={"normal"} letterSpacing={"0.15px"} lineHeight={"28px"}>Kripto</Text>
              <Text textAlign={'center'} maxW={"384px"} textStyle={"resultServiceText"} pt={"12px"}>
                Kripto kategorisinde bir çok alt başlıkta hizmet
                sunacağız.
              </Text>
              <HStack maxW={"384px"} textStyle={"resultServiceText"} pt={"8px"}>
                <Image src={'/Group.png'} alt={'group'} w={4} h={4} />
                <Text>Defi, Chain, Wallet, Stake, Token</Text>
              </HStack>
            </VStack>
            <VStack>
              <Image
                src={'/bulut.png'}
                alt={'bulut'}
                w={{ base: 12, md: 14, lg: 20, xl: 24 }}
                h={{ base: 12, md: 14, lg: 20, xl: 24 }}
              />
              <Text fontWeight={500} fontSize={"19px"} fontStyle={"normal"} letterSpacing={"0.15px"} lineHeight={"28px"}>Bulut Servisler</Text>
              <Text textAlign={'center'} maxW={"384px"} textStyle={"resultServiceText"} pt={"12px"}>
                Cloud Platformlar ve uygulamalar için destek
                sağlayacağız.
              </Text>
              <HStack maxW={"384px"} textStyle={"resultServiceText"} pt={"8px"}>
                <Image src={'/Group.png'} alt={'group'} w={4} h={4} />
                <Text>Amazon Cloud, Azure Cloud, Docker, Hosting</Text>
              </HStack>
            </VStack>
            <VStack>
              <Image
                src={'/web.png'}
                alt={'web'}
                w={{ base: 12, md: 14, lg: 20, xl: 24 }}
                h={{ base: 12, md: 14, lg: 20, xl: 24 }}
              />
              <Text fontWeight={500} fontSize={"19px"} fontStyle={"normal"} letterSpacing={"0.15px"} lineHeight={"28px"}>Web Teknolojileri</Text>
              <Text textAlign={'center'} maxW={"384px"} textStyle={"resultServiceText"} pt={"12px"}>
                Web üzerinde online olan tüm servisler için çözümler
                sunacağız.
              </Text>
              <HStack maxW={"384px"} textStyle={"resultServiceText"} pt={"8px"}>
                <Image src={'/Group.png'} alt={'group'} w={4} h={4} />
                <Text>Hosting, Yazılım Geliştirme, Domain, Güvenlik</Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default memo(ResultService)
