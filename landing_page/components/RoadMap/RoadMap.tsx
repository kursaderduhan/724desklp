import {
  VStack,
  Text,
  HStack,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Flex,
  Stack,Container
} from '@chakra-ui/react'
import React, { memo } from 'react'

export const RoadMap = () => {
  return (
    <Flex
      w={'full'}
      h={{ md: 1200, xl: 1400 }}
      bgImage={'/bg.png'}
      bgPos={'center'}
      bgSize={'cover'}
    >
      <Container centerContent maxW={"1200px"}>
      <VStack
        h={'full'}
        color={'white'}
        w={'full'}
        py={50}    
        alignContent={'center'}
      >
        <Text
          textStyle={"roadMapHead"}
          alignSelf={'center'}
        >
          Proje İlerleme Süreci
        </Text>
          <Text alignSelf={'center'} textStyle={'normal'} color={"#F6F6F6"} fontWeight={400}>
          Proje çalışmaları, hazırlık süreçleri ve yayınlama süresi hakkında
          bilgiler
        </Text>
        <VStack
          w={'full'}
          flexDirection={'column'}
          alignSelf={'center'}
          pt={25}
        >
          <Image
            src={'/Stick.png'}
            alt={'stick'}
            pos={'absolute'}
            w={4}
            h={{base:750,md:800,lg:900,xl:1000}}
            pt={25}
          />
          <VStack zIndex={1} w={780} gap={5}>
            <Box alignSelf={'flex-end'} pr={55}>
              <Flex alignSelf={'flex-start'}>
                <Image alt={'q1'} src={'/Q1.png'} boxSize={8} mt={3} />
                <Image
                  alt={'frame-icon'}
                  src={'Frame.png'}
                  boxSize={16}
                  alignSelf={'flex-start'}
                />
                <VStack color={'white'} textStyle={"roadHead"}>
                  <Flex alignSelf={'flex-start'} gap={2}>
                    <Text alignSelf={'flex-start'}>
                      1.Aşama{' '}
                    </Text>
                    <Text fontSize={'sm'} alignSelf={'center'}>
                      06/2021
                    </Text>
                  </Flex>
                  <Text>
                    Pazar Analizi ve Proje Üretim <br /> Aşaması
                  </Text>
                  <UnorderedList
                    alignSelf={'flex-start'}
                    pl={5}
                    color={'lightgray'}
                    textStyle={'normal'}
                  >
                    <ListItem>Pazar Araştırması</ListItem>
                    <ListItem>Proje İçerik Aşaması</ListItem>
                    <ListItem>Marka Üretim Araştırması</ListItem>
                  </UnorderedList>
                </VStack>
              </Flex>
            </Box>
            {/*q2*/}
            <Box alignSelf={'flex-start'} pl={110}>
              <HStack alignSelf={'flex-start'}>
                <VStack color={'white'}>
                  <HStack
                    w={300}
                    bg={'white'}
                    borderRadius={25}
                    justifyContent={'space-between'}
                  >
                    <Flex pl={2} gap='2' alignItems='center' textStyle={"roadHead"}>
                      <Image alt={'q2-l'} src={'/ruler&pen.png'} boxSize={6} />
                      <Text color={'blue'} fontWeight={'bold'}>
                        2.Aşama
                      </Text>
                      <Text color={'blue'} fontSize={'xs'}>
                        08.2021
                      </Text>
                    </Flex>
                    <Image
                      alt={'q2'}
                      src={'/Q2.png'}
                      boxShadow={'sm'}
                      boxSize={10}
                    />
                  </HStack>
                  <Text alignSelf={'center'} textStyle={"roadHead"}>
                    Arayüz Tasarımı Aşaması
                  </Text>
                  <UnorderedList color={'lightgray'} textStyle={'normal'}>
                    <ListItem>Arayüz Tasarımının Araştırması</ListItem>
                    <ListItem>Wireframe Oluşturma</ListItem>
                    <ListItem>Arayüz Tasarımı</ListItem>
                    <ListItem>Prototip Oluşturma</ListItem>
                  </UnorderedList>
                </VStack>
              </HStack>
            </Box>
            {/*Q3*/}
            <Box alignSelf={'flex-end'} pl={4}>
              <HStack display={'flex'} justifyContent='center'>
                <Flex alignSelf={'flex-start'} gap='2'>
                  <Image
                    alt={'q1'}
                    src={'/Q3.png'}
                    boxSize={8}
                    alignSelf={'flex-start'}
                  />
                  <Flex
                    w={10}
                    h={10}
                    bg={'white'}
                    alignSelf={'flex-start'}
                    borderRadius={10}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Image alt={'frame-icon'} src={'code.png'} boxSize={8} />
                  </Flex>
                  <VStack color={'white'} textStyle={"roadHead"}>
                    <HStack alignSelf={'flex-start'}>
                      <Text alignSelf={'flex-start'} >
                        3.Aşama
                      </Text>
                      <Text fontSize={'sm'}>02/2022</Text>
                    </HStack>
                    <Text alignSelf={'flex-start'} >
                      Kodlama Aşaması
                    </Text>
                    <UnorderedList
                      pl={'5'}
                      color={'lightgray'}
                      textStyle={'normal'}
                    >
                      <ListItem>Tanıtım Web Sitelerinin Kodlanması</ListItem>
                      <ListItem>
                        Dashboard Sitesinin Back-end Kodlanması
                      </ListItem>
                      <ListItem>
                        Dashboard Sitesinin Front-end Kodlanması
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </Flex>
              </HStack>
            </Box>
            {/*Q4*/}
            <Box alignSelf={'flex-start'} pl={125}>
              <Flex color={'white'} w={'full'} flexDirection={'column'}>
                <HStack w={'full'} gap={25}>
                  <Flex
                    w={10}
                    h={10}
                    bg={'white'}
                    borderRadius={10}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Image alt={'q2-l'} src={'/square.png'} boxSize={8} />
                  </Flex>
                  <Flex gap={2} alignSelf={"flex-start"} textStyle={"roadHead"}>
                    <Text fontWeight={'bold'} >
                      4.Aşama
                    </Text>
                    <Text fontSize={'xs'} alignSelf={'center'}>
                      07.2022
                    </Text>
                  </Flex>
                  <Box>
                    <Image alt={'q4'} src={'/Q4.png'} boxSize={8} />
                  </Box>
                </HStack>
                <Text alignSelf={'flex-start'} textStyle={"roadHead"}>
                  Analiz ve Test Aşaması
                </Text>
                <UnorderedList color={'lightgray'} textStyle={'normal'}>
                  <ListItem>Arayüz Tasarımının Araştırması</ListItem>
                  <ListItem>Wireframe Oluşturma</ListItem>
                  <ListItem>Arayüz Tasarımı</ListItem>
                  <ListItem>Prototip Oluşturma</ListItem>
                </UnorderedList>
              </Flex>
            </Box>
            {/*Q5*/}
            <Box alignSelf={'flex-end'}>
              <HStack display={'flex'} justifyContent='center'>
                <HStack alignSelf={'flex-start'}>
                  <Image
                    alt={'q5'}
                    src={'/Q5.png'}
                    boxSize={8}
                    alignSelf={'flex-start'}
                    mt={1}
                  />
                  <Flex
                    w={10}
                    h={10}
                    bg={'white'}
                    alignSelf={'flex-start'}
                    borderRadius={10}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Image
                      alt={'frame-icon'}
                      src={'video-play.png'}
                      boxSize={8}
                    />
                  </Flex>
                  <VStack color={'white'} textStyle={"roadHead"}>
                    <HStack alignSelf={"flex-start"}>
                      <Text alignSelf={'flex-start'} >
                        5.Aşama
                      </Text>
                      <Text>01/2023</Text>
                    </HStack>
                    <Text alignSelf={'flex-start'}>
                      Yayınlama Aşaması
                    </Text>
                    <UnorderedList
                      pl={'5'}
                      color={'lightgray'}
                      textStyle={'normal'}
                    >
                      <ListItem>Tanıtım Web Sitelerinin Kodlanması</ListItem>
                      <ListItem>
                        Dashboard Sitesinin Back-end Kodlanması
                      </ListItem>
                      <ListItem>
                        Dashboard Sitesinin Front-end Kodlanması
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </HStack>
              </HStack>
            </Box>
          </VStack>
        </VStack>
        </VStack>
        </Container>
    </Flex>
  )
}

export default memo(RoadMap)
