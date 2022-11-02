import {
  VStack,
  Text,
  HStack,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Flex,
  Stack,
  Container
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
      <Container centerContent maxW={'1200px'}>
        <VStack
          h={'full'}
          color={'white'}
          w={'full'}
          py={50}
          alignContent={'center'}
        >
          <Text textStyle={'roadMapHead'} alignSelf={'center'}>
            Proje İlerleme Süreci
          </Text>
          <Text
            alignSelf={'center'}
            textStyle={'normal'}
            color={'#F6F6F6'}
            fontWeight={400}
          >
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
              h={{ base: 750, md: 800, lg: 900, xl: 1100 }}
              pt={25}
            />
            <VStack
              zIndex={1}
              w={820}
              gap={{ base: 25, md: 50, lg: 50, xl: 75 }}
            >
              <Flex
                alignSelf={'flex-end'}
                pr={10}
                flexDirection={'row'}
                gap={3}
                alignItems={'start'}
              >
                <Image
                  alt={'q1'}
                  src={'/Q1.png'}
                  w={'32px'}
                  h={'31px'}
                  mt={3}
                />
                <Flex
                  alignSelf={'flex-start'}
                  alignItems={'flex-start'}
                  flexDirection={'row'}
                >
                  <Image
                    alt={'frame-icon'}
                    src={'Frame.png'}
                    w={'60px'}
                    h={'60px'}
                  />
                  <VStack color={'white'} textStyle={'roadHead'}>
                    <Flex alignSelf={'flex-start'} gap={2}>
                      <Text alignSelf={'flex-start'} fontWeight={500}>
                        1.Aşama
                      </Text>
                      <Text
                        fontSize={'sm'}
                        fontWeight={400}
                        alignSelf={'center'}
                      >
                        06/2021
                      </Text>
                    </Flex>
                    <Text fontWeight={500}>
                      Pazar Analizi ve Proje Üretim <br /> Aşaması
                    </Text>
                    <UnorderedList
                      alignSelf={'flex-start'}
                      pl={5}
                      color={'lightgray'}
                      textStyle={'normal'}
                      fontWeight={500}
                    >
                      <ListItem>Pazar Araştırması</ListItem>
                      <ListItem>Proje İçerik Aşaması</ListItem>
                      <ListItem>Marka Üretim Araştırması</ListItem>
                    </UnorderedList>
                  </VStack>
                </Flex>
              </Flex>

              {/*q2*/}
              <Box alignSelf={'flex-start'} pl={75}>
                <HStack alignSelf={'flex-start'}>
                  <VStack color={'white'}>
                    <HStack
                      w={350}
                      bg={'white'}
                      borderRadius={25}
                      justifyContent={'space-between'}
                    >
                      <Flex
                        pl={2}
                        gap='2'
                        alignItems='center'
                        textStyle={'roadHead'}
                      >
                        <Image
                          alt={'q2-l'}
                          src={'/ruler&pen.png'}
                          boxSize={6}
                        />
                        <Text color={'blue'} fontWeight={500}>
                          2.Aşama
                        </Text>
                        <Text color={'blue'} fontSize={'xs'} pt='1'>
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
                    <Text alignSelf={'center'} textStyle={'roadHead'}>
                      Arayüz Tasarımı Aşaması
                    </Text>
                    <UnorderedList
                      color={'lightgray'}
                      textStyle={'normal'}
                      fontWeight={500}
                    >
                      <ListItem>Arayüz Tasarımının Araştırması</ListItem>
                      <ListItem>Wireframe Oluşturma</ListItem>
                      <ListItem>Arayüz Tasarımı</ListItem>
                      <ListItem>Prototip Oluşturma</ListItem>
                    </UnorderedList>
                  </VStack>
                </HStack>
              </Box>
              {/*Q3*/}
              <Flex
                alignSelf={'flex-end'}
                flexDirection={'row'}
                gap={3}
                justifyContent={'flex-end'}
                w={'full'}
              >
                <Image
                  alt={'q3'}
                  src={'/Q3.png'}
                  w={'32px'}
                  h={'31px'}
                  alignSelf={'flex-start'}
                  mt={3}
                />
                <Flex>
                  <Image
                    alt={'frame-icon'}
                    src={'/q3Frame.png'}
                    w={'60px'}
                    h={'60px'}
                  />
                  <VStack color={'white'} textStyle={'roadHead'}>
                    <HStack alignSelf={'flex-start'}>
                      <Text alignSelf={'flex-start'}>3.Aşama</Text>
                      <Text fontSize={'sm'}>02/2022</Text>
                    </HStack>
                    <Text alignSelf={'flex-start'}>Kodlama Aşaması</Text>
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
              </Flex>

              {/*Q4*/}
              <Box alignSelf={'flex-start'} pl={75} w={'full'}>
                <Flex color={'white'} w={'full'} flexDirection={'column'}>
                  <Flex w={350} justifyContent={'space-between'}>
                    <Image
                      alt={'q2-l'}
                      src={'/q4Frame.png'}
                      w={'60px'}
                      h={'60px'}
                    />

                    <Stack
                      alignSelf={'flex-start'}
                      textStyle={'roadHead'}
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      w={'full'}
                      mt={3}
                    >
                      <HStack>
                        <Text fontWeight={500} fontSize={'19px'}>
                          4.Aşama
                        </Text>
                        <Text fontSize={'xs'} alignSelf={'center'}>
                          07.2022
                        </Text>
                      </HStack>
                      <Text
                        alignSelf={'flex-start'}
                        fontWeight={500}
                        fontSize={'19px'}
                      >
                        Analiz ve Test Aşaması
                      </Text>
                      <UnorderedList
                        color={'lightgray'}
                        textStyle={'normal'}
                        pl={5}
                      >
                        <ListItem>Arayüz Tasarımının Araştırılması</ListItem>
                        <ListItem>Wireframe Oluşturma</ListItem>
                        <ListItem>Arayüz Tasarımı</ListItem>
                        <ListItem>Prototip Oluşturma</ListItem>
                      </UnorderedList>
                    </Stack>

                    <Image
                      alt={'q4'}
                      src={'/Q4.png'}
                      w={'32px'}
                      h={'32px'}
                      mt={2}
                    />
                  </Flex>
                </Flex>
              </Box>
              {/*Q5*/}
              <Flex
                alignSelf={'flex-end'}
                flexDirection={'row'}
                gap={3}
                justifyContent={'flex-end'}
                w={'full'}
                pl={5}
              >
                <Image
                  alt={'q5'}
                  src={'/Q5.png'}
                  w={'32px'}
                  h={'31px'}
                  alignSelf={'flex-start'}
                  mt={2}
                />
                <Flex>
                  <Image
                    alt={'frame-icon'}
                    src={'/q5Frame.png'}
                    w={'60px'}
                    h={'60px'}
                    alignSelf={'flex-start'}
                  />
                  <VStack color={'white'} textStyle={'roadHead'}>
                    <HStack alignSelf={'flex-start'}>
                      <Text alignSelf={'flex-start'} fontWeight={500}>
                        5.Aşama
                      </Text>
                      <Text fontSize={'sm'}>01/2023</Text>
                    </HStack>
                    <Text alignSelf={'flex-start'} fontWeight={500}>
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
                </Flex>
              </Flex>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Flex>
  )
}

export default memo(RoadMap)
