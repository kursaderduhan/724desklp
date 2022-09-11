import React, { memo, ReactNode, ReactText } from 'react'
import {
  Flex,
  Text,
  VStack,
  Button,
  FlexProps,
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Link,
  Badge,
  useColorModeValue,
  HStack,
  IconButton,
  Image
} from '@chakra-ui/react'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const Experts = () => {
  return (
    <VStack>
      <VStack
        bgImage={'/Mac.png'}
        bgSize={'cover'}
        w={'full'}
        color={'black'}
        h={1100} pt={50} textStyle={"normal"}
      >
        <Text fontWeight={'bold'} textStyle={"headText"}>
          Uzmanlar
        </Text>
        <Text textAlign={'center'}>
          Uzmanlarımız, kendi alanlarında nitelikli, her türlü müşteri
          taleplerini karşılayıp sonuçlandıracak olan ekiptir. Kendi
          belirledikleri saat aralıklarında çalışma <br /> olanağına sahip olan
          uzmanlarımız, sonuçlandırdıkları işlem başına bir ücret alırlar.
          Gösterdikleri performansa göre kalite puanları da kazanan
          uzmanlarımız,
          <br /> kalite puanlarına bağlı olarak platformumuzdan Desk Token elde
          ederek kendilerine ikinci bir gelir de sağlarlar.
        </Text>
      </VStack>
        <Button bg={'#F27C00'} color={"white"} _hover={{opacity:0.8}}>Nasıl Uzman Olurum?</Button>
      <VStack textStyle={"normal"}>
        <Text fontWeight={'bold'} textStyle={"headText"} alignSelf={'flex-start'}>
          Team
        </Text>
        <Text alignSelf={'flex-start'} color={"gray"}>
          Projemizin gelişim sürecinde aktif görev alan takım üyelerimiz.
        </Text>
        <HStack>
          {Profile.map(profile => (
            <ProfileContent
              // src={profile.ımage}
              name={profile.name}
              job={profile.job}
              link={profile.link}
              key={profile.key}
            >
              {profile.name}
            </ProfileContent>
          ))}
        </HStack>
      </VStack>
      <VStack py={100}>
        <VStack w={'full'} textStyle={"normal"}>
          <Text fontWeight={'bold'} textStyle={"headText"} alignSelf={'flex-start'}>
            Topluluk
          </Text>
          <Text alignSelf={'flex-start'} color={"gray"}>
            Sosyal medya hesaplarımızı takip ederek son gelişmelerden haberdar
            olun.
          </Text>
        </VStack>
        <HStack gap={120} w={'full'}>
          <HStack w={350} h={170} boxShadow={'base'} pt={25} px={5}>
            <Image
              src={'/telegram.png'}
              alt={'telegram'}
              w={12}
              h={12}
              alignSelf={'flex-start'}
            />
            <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
              <Text fontWeight={'bold'}>Telegram Grubu</Text>
              <Text>
                Telegram grubumuza katılarak diğer <br /> üyelerimizle bilgi
                alışverişi yapabilir, <br /> onlara soru sorabilir ve yeni
                sohbetler başlatabilirsiniz.
              </Text>
            </VStack>
          </HStack>

          <HStack w={350} h={170} boxShadow={'base'} pt={25} px={5}>
            <Image
              src={'/facebook-1.png'}
              alt={'facebook'}
              w={12}
              h={12}
              alignSelf={'flex-start'}
            />
            <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
              <Text fontWeight={'bold'}>Facebook Grubu</Text>
              <Text>
                Facebook grubumuza dahil olarak son <br /> gelişmelerden
                haberdar olabilirsiniz.
              </Text>
            </VStack>
          </HStack>

          <HStack w={350} h={170} boxShadow={'base'} pt={25} px={5}>
            <Image
              src={'/discord.png'}
              alt={'discord'}
              w={12}
              h={12}
              alignSelf={'flex-start'}
            />
            <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
              <Text fontWeight={'bold'}>Discord Grubu</Text>
              <Text>
                Discord grubumuza katılarak diğer <br /> üyelerimiz ile sohbet
                ederek bilgi <br /> alışverişinde bulunabilirsiniz.
              </Text>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default memo(Experts)

interface ProfileProps {
  ımage: string
  name: string
  job: string
  link: string
  key: string
}

const Profile: Array<ProfileProps> = [
  {
    ımage: '/binance.png',
    name: 'Ahmet Hamdi Tanpınar',
    job: 'CEO and Entrepreneur',
    link: '',
    key: 'team-1'
  },
  {
    ımage: '',
    name: 'Natalla Donald',
    job: 'CEO and Writer',
    link: '',
    key: 'team-2'
  },
  {
    ımage: '',
    name: 'Susan Helen',
    job: 'CopyWriter',
    link: '',
    key: 'team-3'
  },
  {
    ımage: '',
    name: 'Fatih Demirkan',
    job: 'UI & UX Designer',
    link: '',
    key: 'team-4'
  }
]

interface ProfileLinkProps extends FlexProps {
  //   ımage?: string
  name: string
  job: string
  link: string
  children: ReactNode
}

const ProfileContent = ({ children, ...rest }: ProfileLinkProps) => (
  <Center py={6}>
    <Box
      w={320}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'} color={"black"} transform={'auto'}
      _hover={{ scale: '1.04', opacity: '0.7',transition:"0.6s" }}

    >
      <Avatar
        size={'xl'}
        src={''}
        // alt={'Avatar Alt'}
        mb={4}
        pos={'relative'}
      />
      <Heading fontSize={'2xl'} >
        {rest.name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {rest.job}
      </Text>
      <IconButton aria-label='link' icon={<AiOutlineLinkedin />}>
        <Link href={rest.link} color={'blue.400'}></Link>
      </IconButton>
    </Box>
  </Center>
)
