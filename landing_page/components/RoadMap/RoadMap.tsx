import {
  VStack,
  Text,
  HStack,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Flex,
  Stack
} from '@chakra-ui/react'
import React, { memo } from 'react'

export const RoadMap = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      bgImage={'/bg.png'}
      bgPos={'center'}
      bgSize={'cover'}
    >
    
      <Stack h={'full'} color={'white'} justifyContent={'center'} w={'full'} >
        <Text fontSize={'6xl'} alignSelf={"center"}>Proje İlerleme Süreci</Text>
        <Text alignSelf={"center"}>
          Proje çalışmaları, hazırlık süreçleri ve yayınlama süresi hakkında
          bilgiler
        </Text>
        <HStack display={'flex'} justifyContent='center'>
          <Box w={275}></Box>
          <VStack>
            <Image alt={'q1'} src={'/Q1.png'} boxSize={12} />
            <Image alt={'vertical-line'} src={'/vertical-line.png'} h={150} />
          </VStack>
          <HStack alignSelf={'flex-start'}>
            <Image
              alt={'frame-icon'}
              src={'Frame.png'}
              boxSize={12}
              alignSelf={'flex-start'}
            />
            <VStack color={'white'}>
              <Text alignSelf={'flex-start'}>1.Aşama 06/2021</Text>
              <Text>Pazar Analizi ve Proje Üretim Aşaması</Text>
              <UnorderedList alignSelf={'flex-start'} pl={5}>
                <ListItem>Pazar Araştırması</ListItem>
                <ListItem>Proje İçerik Aşaması</ListItem>
                <ListItem>Marka Üretim Araştırması</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </HStack>
        {/*q2*/}
        <HStack
          display={'flex'}
          justifyContent='center'
        >
          <HStack alignSelf={'flex-start'}>
            <VStack color={'white'}>
              <HStack
                w={250}
                bg={'white'}
                borderRadius={25}
                h={25}
                justifyContent={'space-between'}
              >
                <Flex pl={2} gap='2' alignItems='center'>
                  <Image
                    alt={'q2-l'}
                    src={'/ruler&pen.png'}
                    boxSize={6}
                  ></Image>
                  <Text color={'blue'} fontWeight={'bold'}>
                    2.Aşama
                  </Text>
                  <Text color={'blue'} fontSize={'xs'}>
                    08.2021
                  </Text>
                </Flex>
                <Image alt={'q2'} src={'/Q2.png'} boxSize={12} />
              </HStack>
              <Text>Arayüz Tasarımı Aşaması</Text>
              <UnorderedList>
                <ListItem>Arayüz Tasarımının Araştırması</ListItem>
                <ListItem>Wireframe Oluşturma</ListItem>
                <ListItem>Arayüz Tasarımı</ListItem>
                <ListItem>Prototip Oluşturma</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
          <Box w={2} h={275} bg={'black'}></Box>
          <Box w={250}></Box>
        </HStack>
        {/*Q3*/}
        <HStack display={'flex'} justifyContent='center'>
          <Box w={325}></Box>
          <VStack>
            <Image alt={'q1'} src={'/Q3.png'} boxSize={12} />
            <Box w={2} h={275} bg={'black'}></Box>
          </VStack>
          <HStack alignSelf={'flex-start'}>
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
            <VStack color={'white'}>
              <Text alignSelf={'flex-start'}>3.Aşama 02/2022</Text>
              <Text alignSelf={'flex-start'}>Kodlama Aşaması</Text>
              <UnorderedList pl={'5'}>
                <ListItem>Tanıtım Web Sitelerinin Kodlanması</ListItem>
                <ListItem>Dashboard Sitesinin Back-end Kodlanması</ListItem>
                <ListItem>Dashboard Sitesinin Front-end Kodlanması</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </HStack>
        {/*Q4*/}
        <HStack display={'flex'} justifyContent='center'>
          <HStack alignSelf={'flex-start'}>
            <VStack color={'white'}>
              <HStack>
                <Flex
                  w={10}
                  h={10}
                  bg={'white'}
                  borderRadius={10}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Image alt={'q2-l'} src={'/square.png'} boxSize={8}></Image>
                </Flex>
                <Text fontWeight={'bold'}>4.Aşama</Text>
                <Text fontSize={'xs'}>07.2022</Text>
                <Image alt={'q4'} src={'/Q4.png'} boxSize={12} />
              </HStack>
              <Text>Analiz ve Test Aşaması</Text>
              <UnorderedList>
                <ListItem>Arayüz Tasarımının Araştırması</ListItem>
                <ListItem>Wireframe Oluşturma</ListItem>
                <ListItem>Arayüz Tasarımı</ListItem>
                <ListItem>Prototip Oluşturma</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
          <Box w={2} h={275} bg={'black'}></Box>
          <Box w={225}></Box>
        </HStack>
        {/*Q5*/}
        <HStack display={'flex'} justifyContent='center'>
          <Box w={325}></Box>
          <VStack>
            <Image alt={'q1'} src={'/Q5.png'} boxSize={12} />
            <Box w={2} h={275} bg={'black'}></Box>
          </VStack>
          <HStack alignSelf={'flex-start'}>
            <Flex
              w={10}
              h={10}
              bg={'white'}
              alignSelf={'flex-start'}
              borderRadius={10}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image alt={'frame-icon'} src={'video-play.png'} boxSize={8} />
            </Flex>
            <VStack color={'white'}>
              <Text alignSelf={'flex-start'}>5.Aşama 01/2023</Text>
              <Text alignSelf={'flex-start'}>Yayınlama Aşaması</Text>
              <UnorderedList pl={'5'}>
                <ListItem>Tanıtım Web Sitelerinin Kodlanması</ListItem>
                <ListItem>Dashboard Sitesinin Back-end Kodlanması</ListItem>
                <ListItem>Dashboard Sitesinin Front-end Kodlanması</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </HStack>
        </Stack>
    </Flex>
  )
}

export default memo(RoadMap)
