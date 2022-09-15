import {
  VStack,
  HStack,
  Text,
  Image,
  Box,
  Stack,
  UnorderedList,
  ListItem,
  Flex
} from '@chakra-ui/react'
import React, { memo } from 'react'

export const ResultService = () => {
  return (
    <VStack w={'full'} pt={100} bg={"white"} color={"black"} >
      <HStack w={'full'} display={'flex'}>
        <VStack pt={75} pl={{base:10,md:20,lg:50,xl:220}} alignItems={'flex-start'} textStyle={"normal"}>
          <Text fontWeight={'bold'} textStyle={"headText"}>
            Çözüme anında ulaş
          </Text>
          <Text>
            Destek almak istediği hizmetin kategorisini seçerek işleme başlayan
            kullanıcılar, hizmet <br /> saatini, dilini ve kanalını kendi
            isteklerine göre belirleyerek günün her saatinde, o esnada <br />
            aktif olan uzmanlarımızdan profesyonel desteklerini alarak
            sorunlarının çözümlerine anında <br /> ulaşabilirler.
          </Text>
          <Text fontWeight={'bold'} textStyle={"headText"}>
            Kaliteli hizmet al
          </Text>
          <Text zIndex={1}>
            Yetkinlikleri platformumuzca onaylanmış uzmanlarımızla birçok
            kategoride kullanıcıların <br /> sorunlarına kaliteli çözümler
            üreteceğimizi garanti ediyoruz. Dünyanın her yerinden hizmet <br />
            veren uzmanlarımız, kullanıcılar için farklı dillerde isabetli
            çözümler üreterek kullanıcıların <br /> problemlerini titizlikle
            çözüme ulaştırıyor.
          </Text>
        </VStack>
        <Box
          position={'absolute'}
          justifyContent={'flex-end'}
          display={'flex'}
          w={'full'}
        >
          <Image
            src={'/resultImage.png'}
            alt={'resultImage'}
            w={{base:250,md:350,lg:450,xl:600}}
            mt={200}
          />
        </Box>
        <Box w="250"></Box>
      </HStack>
      <HStack gap={15} w={'full'} pt={150}>
        <Flex pos={'absolute'} w={850} h={800} justifyContent={'flex-start'}>
          <Image src={'/Ellipse-1.png'} alt={'font'} />
        </Flex>
        <HStack w={'full'} justifyContent={'center'}>
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
          <VStack alignItems={'flex-start'} zIndex={1}>
            <VStack alignItems={'flex-start'} textStyle={"normal"}>
              <Text fontWeight={'bold'} textStyle={"headText"}>
                Servislerimiz
              </Text>
              <Text color={"gray"}>Proje İçerisinde Sunduğumuz Servislerimiz</Text>
              <UnorderedList pl={5}>
                <ListItem>Destek Hizmetlerimiz</ListItem>
                <ListItem>Token Satıi Servisimiz</ListItem>
                <ListItem>Stake Servisimiz</ListItem>
                <ListItem>Ödeme Servislerimiz</ListItem>
                <ListItem>Kredi Yönetim Çözümlerimiz</ListItem>
              </UnorderedList>
            </VStack>
            <VStack alignItems={'flex-start'} textStyle={"normal"}>
              <Text fontWeight={'bold'} textStyle={"headText"}>
                724Desk in Avantajları
              </Text>
              <Text color={"gray"}>Projemizin diğer projeleri</Text>
              <Text>
                724Desk kendi alanında hizmet veren ilk projedir. Platformumuz
                aracılığıyla, <br /> kripto alanında sunduğumuz destekler ile
                kullanıcıların yaşadığı sorunları en <br /> kısa sürede en
                isabetli çözümler uygulayarak çözüme kavuşturuyoruz.
              </Text>
              <Text>
                Hizmetlerimiz tek bir kategoride sınırlı değildir. Telefonu
                arızalanan bir kişinin <br /> probleminden tutun, domain ile
                sunucu bağlantısının sağlanamadığı <br /> durumlarda da
                uzmanlarımıza ulaşarak çözüm sürecinizi başlatabilirsiniz.
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      <VStack pos={'relative'} pt={150} pb={100} px="2">
        <Flex
          pos={'absolute'}
          w={{base:600,md:700,lg:800,xl:900}}
          h={{base:600,md:700,lg:800,xl:900}}
          justifyContent={'flex-start'}
          top={0} mt={{base:100,md:100,lg:75,xl:50}}
        >
          <Image src={'/Ellipse-2.png'} alt={'font'} />
        </Flex>
        <VStack zIndex={1} textStyle={"normal"}>
        <Text fontWeight={'bold'} textStyle={"headText"}>
          Çözüm Kategorilerimiz
        </Text>
        <Text textAlign={'center'}>
          Belirlediğim sektörler için hizmet kategorilerimiz olacak. Bu
          kategoriler önceden belirlenip belli takvimlere göre alt yapıları{' '}
          <br />
          oluşturulup hizmete açılacak. Bu kategorilerden ilki Kripto kategorisi
          olacak. Ardından diğer kategorileri de sıra ile hizmete <br /> alıyor
          olacağız.
        </Text>
        <HStack>
          <VStack>
              <Image src={'/kripto.png'} alt={'kripto'} w={{base:12,md:14,lg:20,xl:24}} h={{base:12,md:14,lg:20,xl:24}} />
            <Text fontWeight={'bold'}>Kripto</Text>
            <Text textAlign={'center'}>
              Kripto kategorisinde bir çok alt başlıkta hizmet <br /> sunacağız.
            </Text>
            <HStack>
              <Image src={'/Group.png'} alt={'group'} w={4} h={4} />
              <Text>Defi, Chain, Wallet, Stake, Token</Text>
            </HStack>
          </VStack>
          <VStack>
            <Image src={'/bulut.png'} alt={'bulut'} w={{base:12,md:14,lg:20,xl:24}} h={{base:12,md:14,lg:20,xl:24}}  />
            <Text fontWeight={'bold'}>Bulut Servisler</Text>
            <Text textAlign={'center'}>
              Cloud Platformlar ve uygulamalar için destek <br /> sağlayacağız.
            </Text>
            <HStack>
              <Image src={'/Group.png'} alt={'group'} w={4} h={4} />
              <Text>Amazon Cloud, Azure Cloud, Docker, Hosting</Text>
            </HStack>
          </VStack>
          <VStack>
            <Image src={'/web.png'} alt={'web'} w={{base:12,md:14,lg:20,xl:24}} h={{base:12,md:14,lg:20,xl:24}}  />
            <Text fontWeight={'bold'}>Web Teknolojileri</Text>
            <Text textAlign={'center'}>
              Web üzerinde online olan tüm servisler için <br /> çözümler
              suanacağız.
            </Text>
            <HStack>
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
