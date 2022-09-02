import {
  VStack,
  Text,
  HStack,
  Box,
  Image,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import React, { memo } from 'react'

export const RoadMap = () => {
  return (
    <VStack bgImage={'/bg.png'} w={'full'} h={'full'} color={"light.100"} bgPos={"center"} bgSize={"cover"}>
      <Text>Proje İlerleme Süreci</Text>
      <Text>
        Proje çalışmaları, hazırlık süreçleri ve yayınlama süresü hakkında
        bilgiler
      </Text>
      <HStack display={"flex"} justifyContent="space-evenly">
        <Box></Box>
        <VStack>
                  <Image alt={'q1'} src={'/Q1.png'} boxSize={12} />
                  <Image alt={'vertical-line'} src={'/vertical-line.png'} h={150} />
        </VStack>
        <HStack>
                  <Image alt={'frame-icon'} src={'Frame.png'} boxSize={12} />
          <VStack color={"white"}>
            <Text>1.Aşama 06/2021</Text>
            <Text>Pazar Analizi ve Proje Üretim Aşaması</Text>
            <UnorderedList>
              <ListItem>Pazar Araştırması</ListItem>
              <ListItem>Proje İçerik Aşaması</ListItem>
              <ListItem>Marka Üretim Araştırması</ListItem>
            </UnorderedList>
          </VStack>
        </HStack>
      </HStack>
    </VStack>
  )
}

export default memo(RoadMap)
