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
  Image,
  Container
} from '@chakra-ui/react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import "@fontsource/readex-pro"
export const Experts = () => {
  return (
    <VStack bg={'#FAFAFA'} color={"black"} pt={"120px"}>
      <Flex
        flexDirection={'column'}
        align={'center'}
        bgImage={'/Mac.png'}
        bgSize={'cover'}
        w={'full'}
        color={'black'} bgPos={"center"}
        h={'961px'}
        textStyle={'normal'}
        justifyContent={'space-between'}
      >
        <VStack pt={"26px"}>
          <Text textStyle={"resultServiceHead"} color="black" fontFamily={"Readex Pro"}>
            Uzmanlar
          </Text>
          <Text textAlign={'center'} color={'#959595'} textStyle={"resultServiceText"} maxW={"1200px"}>
            Uzmanlarımız, kendi alanlarında nitelikli, her türlü müşteri
            taleplerini karşılayıp sonuçlandıracak olan ekiptir. Kendi
            belirledikleri saat aralıklarında çalışma olanağına sahip
            olan uzmanlarımız, sonuçlandırdıkları işlem başına bir ücret
            alırlar. Gösterdikleri performansa göre kalite puanları da kazanan
            uzmanlarımız, kalite puanlarına bağlı olarak platformumuzdan Desk Token
            elde ederek kendilerine ikinci bir gelir de sağlarlar.
          </Text>
        </VStack>
        <Flex w={'full'} justifyContent={'center'}>
          <Button
            bg={'#F27C00'}
            w={'250px'} fontWeight={500}
            color={'white'} fontStyle={"normal"} fontSize={"13px"} lineHeight={"20px"}
            _hover={{ opacity: 0.8 }} mb={"100px"} letterSpacing={"0.5px"}
          >
            Nasıl Uzman Olurum?
          </Button>
        </Flex>
      </Flex>
      <Container maxW={'1200px'} py={120}>
        <VStack>
          <Text textStyle={"resultServiceHead"} fontFamily={"Readex Pro"} color={"black"} alignSelf={'flex-start'}>
            Team
          </Text>
          <Text alignSelf={'flex-start'} textStyle={'resultServiceText'}>
            Projemizin gelişim sürecinde aktif görev alan takım üyelerimiz.
          </Text>
          <HStack pt={"42px"}>
            {Profile.map(profile => (
              <ProfileContent
                image={profile.image}
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
        <VStack pt={"120px"}>
          <VStack w={'full'} textStyle={'normal'}>
            <Text textStyle={"resultServiceHead"} fontFamily={"Readex Pro"} color={"black"} alignSelf={'flex-start'}>
              Topluluk
            </Text>
            <Text
              alignSelf={'flex-start'}
              textStyle={'resultServiceText'}
            >
              Sosyal medya hesaplarımızı takip ederek son gelişmelerden haberdar
              olun.
            </Text>
          </VStack>
          <HStack justifyContent={"space-between"} gap={"24px"} w={'full'} pt={"42px"}>
            <HStack
              w={'384px'}
              h={'167px'}
              boxShadow={'base'}
              p={'24px'}
              bg={'white'}
              borderRadius={10}
            >
              <Image
                src={'/telegram.png'}
                alt={'telegram'}
                w={'32px'}
                h={'32px'}
                alignSelf={'flex-start'}
              />
              <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
                <Text fontWeight={500} fontSize={'15px'} fontStyle={"normal"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                  Telegram Grubu
                </Text>
                <Text textStyle={'resultServiceText'} lineHeight={"150%"} color={'#525252'}>
                  Telegram grubumuza katılarak diğer üyelerimizle bilgi
                  alışverişi yapabilir, onlara soru sorabilir ve yeni sohbetler
                  başlatabilirsiniz.
                </Text>
              </VStack>
            </HStack>

            <HStack
              w={'384px'}
              h={'167px'}
              boxShadow={'base'}
              p={'24px'}
              bg={'white'}
              borderRadius={10}
            >
              <Image
                src={'/facebook-1.png'}
                alt={'facebook'}
                w={'32px'}
                h={'32px'}
                alignSelf={'flex-start'}
              />
              <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
                <Text fontWeight={500} fontSize={'15px'} fontStyle={"normal"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                  Facebook Grubu
                </Text>
                <Text textStyle={'resultServiceText'} lineHeight={"150%"} color={'#525252'}>
                  Facebook grubumuza dahil olarak son gelişmelerden haberdar
                  olabilirsiniz.
                </Text>
              </VStack>
            </HStack>

            <HStack
              w={'384px'}
              h={'167px'}
              boxShadow={'base'}
              p={'24px'}
              bg={'white'}
              borderRadius={10}
            >
              <Image
                src={'/discord.png'}
                alt={'discord'}
                w={'32px'}
                h={'32px'}
                alignSelf={'flex-start'}
              />
              <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
                <Text fontWeight={500} fontSize={'15px'} fontStyle={"normal"} letterSpacing={"0.15px"} lineHeight={"22px"}>
                  Discord Grubu
                </Text>
                <Text textStyle={'resultServiceText'} lineHeight={"150%"} color={'#525252'}>
                  Discord grubumuza katılarak diğer <br /> üyelerimiz ile sohbet
                  ederek bilgi <br /> alışverişinde bulunabilirsiniz.
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </VStack>
  )
}

export default memo(Experts)

interface ProfileProps {
  image: string
  name: string
  job: string
  link: string
  key: string
}

const Profile: Array<ProfileProps> = [
  {
    image: 'https://bit.ly/ryan-florence',
    name: 'Ahmet Hamdi Tanpınar',
    job: 'CEO and Entrepreneur',
    link: '',
    key: 'team-1'
  },
  {
    image: 'https://bit.ly/prosper-baba',
    name: 'Natalla Donald',
    job: 'CEO and Writer',
    link: '',
    key: 'team-2'
  },
  {
    image: 'https://bit.ly/code-beast',
    name: 'Susan Helen',
    job: 'CopyWriter',
    link: '',
    key: 'team-3'
  },
  {
    image: 'https://bit.ly/sage-adebayo',
    name: 'Fatih Demirkan',
    job: 'UI & UX Designer',
    link: '',
    key: 'team-4'
  }
]

interface ProfileLinkProps extends FlexProps {
  image: string
  name: string
  job: string
  link: string
  children: ReactNode
}

const ProfileContent = ({ children, ...rest }: ProfileLinkProps) => (
  <Center py={6}>
    <Box
      w={282}
      h={283}
      boxShadow={'sm'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
      color={'black'}
      transform={'auto'}
      _hover={{ scale: '1.04', opacity: '0.7', transition: '0.6s' }}
      bg={'white'} {...rest}
    >
      <Avatar size={'xl'} src={rest.image} mb={4} pos={'relative'} />
      <Heading fontSize={'2xl'}>{rest.name}</Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {rest.job}
      </Text>
      <IconButton aria-label='link' icon={<AiOutlineLinkedin />}>
        <Link href={rest.link} color={'blue.400'}></Link>
      </IconButton>
    </Box>
  </Center>
)
