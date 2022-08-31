import React from 'react'
import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Stack,
  Box,
  UnorderedList,
  ListItem,
  TabList,
  Divider
} from '@chakra-ui/react'
export const Footer = () => {
  return (
    <Flex
      w={'full'}
      h={'400px'}
      bg={'dark.100'}
      flexDirection={'column'}
      pos='relative'
    >
      {/* <Box pos={"absolute"} justifyContent={"center"} display={"flex"} w={"full"}>
        <Image src={'/footerLogo.png'} alt={'desk'} w={500}/>
        </Box> */}
      <HStack
        justifyContent={'space-evenly'}
        w={'full'}
        alignItems={'center'}
        h={'full'}
      >
        <VStack
          color={'white'}
          gap={2}
          justifyContent={'space-evenly'}
          w={'full'}
        >
          <Box w={'282px'}>
            <Image src={'/724DeskLogo.png'} w={135} h={42} alt={'deskLogo'} />
          </Box>
          <Text w={'282px'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            deleniti eligendi explicabo. Similique ipsum qui impedit, quas
            quisquam sunt atque inventore quae ducimus corrupti, doloremque
            soluta iure, commodi dolorum asperiores.
          </Text>
          <HStack w={'282px'}>
            <Image src={'/facebook.png'} w={8} h={8} alt='facebook' />
            <Image src={'/instagram.png'} w={8} h={8} alt='ınstagram' />
            <Image src={'/bi-medium.png'} w={8} h={8} alt={'medium'} />
            <Image src={'/eva-twitter.png'} w={8} h={8} alt={'twitter'} />
          </HStack>
          <Text w={'282px'}>@ Copyright. All rights reserved.</Text>
        </VStack>
        <VStack color={'white'} w={'full'}>
          <Text w={220}>Content</Text>
          <Divider orientation='horizontal' w={220} />

          <HStack w={220} gap={25}>
            <UnorderedList>
              <ListItem>Litepaper</ListItem>
              <ListItem>Tokenomics</ListItem>
              <ListItem>Medium</ListItem>
              <ListItem>Roadmap</ListItem>
              <ListItem>Team</ListItem>
            </UnorderedList>
            <UnorderedList alignSelf={'flex-start'}>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Cookies Policy</ListItem>
              <ListItem>AIP Terms</ListItem>
              <ListItem>User Agreement</ListItem>
            </UnorderedList>
          </HStack>
        </VStack>
        <VStack color={'white'} alignSelf={'center'} w={'full'}>
          <Text w={220}>
            Quick Links
          </Text>
          <Divider orientation='horizontal' w={220} />
          <HStack gap={25} w={220}>
            <UnorderedList>
              <ListItem>Airdrop Compaign</ListItem>
              <ListItem>Whitelisting Compaign</ListItem>
              <ListItem>Quick Links</ListItem>
              <ListItem>Community Channel</ListItem>
              <ListItem>Application Dashboard</ListItem>
            </UnorderedList>
            <UnorderedList alignSelf={'flex-start'}>
              <ListItem>Support</ListItem>
            </UnorderedList>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default Footer
