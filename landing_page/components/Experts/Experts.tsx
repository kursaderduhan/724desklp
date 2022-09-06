import React, { memo, ReactText } from 'react'
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
        bgPos={'center'}
        w={'full'}
        color={'black'}
        h={1000}
      >
        <Text fontWeight={'bold'} fontSize={'3xl'}>
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
        <Button colorScheme={'orange'}>Nasıl Uzman Olurum</Button>
      </VStack>
      <VStack>
        <Text fontWeight={'bold'} fontSize={'3xl'} alignSelf={'flex-start'}>
          Team
        </Text>
        <Text alignSelf={'flex-start'}>
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
      <VStack>
        <VStack w={'full'}>
          <Text fontWeight={'bold'} fontSize={'3xl'} alignSelf={'flex-start'}>
            Topluluk
          </Text>
          <Text alignSelf={'flex-start'}>
            Sosyal medya hesaplarımızı takip ederek son gelişmelerden haberdar
            olun.
          </Text>
        </VStack>
        <HStack gap={75} w={'full'}>
          <HStack w={350} h={150} boxShadow={'base'} pt={25} px={5}>
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

          <HStack w={350} h={150} boxShadow={'base'} pt={25} px={5}>
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

          <HStack w={350} h={150} boxShadow={'base'} pt={25} px={5}>
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

interface ProfileProps<> {
  ımage?: string
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
  children: ReactText
}

const ProfileContent = ({ children, ...rest }: ProfileLinkProps) => (
  <Center py={6}>
    <Box
      maxW={'320px'}
      w={350}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
    >
      <Avatar
        size={'xl'}
        src={''}
        // alt={'Avatar Alt'}
        mb={4}
        pos={'relative'}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
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
