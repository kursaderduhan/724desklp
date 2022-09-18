import React from 'react'
import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Divider,
  AspectRatio,
  Container
} from '@chakra-ui/react'
export const Footer = () => {
  return (
    <VStack
      w={'full'}
      h={400}
      bgImage={'/footerBg.png'}
      flexDirection={'column'}
    >
      <Box
        pos='absolute'
        bottom={145}
        mr={10}
        w={'842px'}
        h={'473px'}
        overflow={'visible'}
      >
        <AspectRatio ratio={2 / 1}>
          <Image src={'/footerLogo.png'} alt={'desk'} />
        </AspectRatio>
      </Box>
      <Container maxW={'1200px'} centerContent >
        <Flex
          w={'full'}
          h={'full'} alignItems={"center"} alignSelf={"center"} py="50"
        >
          <VStack
            color={'white'}
            gap={2}
            h={'full'}
            justifyContent={'space-evenly'}
            w={'full'}
            textStyle={'normal'}
          >
            <Box w={'282px'}>
              <Image src={'/724DeskLogo.png'} w={135} h={42} alt={'deskLogo'} />
            </Box>
            <Text w={'282px'} fontSize={'sm'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deleniti eligendi explicabo. Similique ipsum qui impedit, quas
              quisquam sunt atque inventore quae ducimus corrupti, doloremque
              soluta iure, commodi dolorum asperiores.
            </Text>
            <HStack w={'282px'}>
              <Image
                src={'/facebook.png'}
                w={'18px'}
                h={'16px'}
                alt='facebook'
              />
              <Image
                src={'/instagram.png'}
                w={'18px'}
                h={'16px'}
                alt='ınstagram'
              />
              <Image
                src={'/bi-medium.png'}
                w={'18px'}
                h={'16px'}
                alt={'medium'}
              />
              <Image
                src={'/eva-twitter.png'}
                w={'18px'}
                h={'16px'}
                alt={'twitter'}
              />
            </HStack>
            <Text w={'282px'} fontSize={'xs'}>
              @ Copyright. All rights reserved.
            </Text>
          </VStack>
          <VStack color={'white'} w={'full'}>
            <Text w={282} fontSize={'lg'}>
              Content
            </Text>
            <Divider orientation='horizontal' w={282} />
            <HStack gap={25} w={282} textStyle={'footerText'}>
              <UnorderedList w={'full'}>
                <ListItem>Litepaper</ListItem>
                <ListItem>Tokenomics</ListItem>
                <ListItem>Medium</ListItem>
                <ListItem>Roadmap</ListItem>
                <ListItem>Team</ListItem>
              </UnorderedList>
              <UnorderedList
                display={'flex'}
                w={'full'}
                flexDirection={'column'}
                justifyContent={'flex-end'}
                alignSelf={'flex-start'}
              >
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Cookies Policy</ListItem>
                <ListItem>AIP Terms</ListItem>
                <ListItem>User Agreement</ListItem>
              </UnorderedList>
            </HStack>
          </VStack>
          <VStack color={'white'} alignSelf={'center'} w={'full'}>
            <Text w={282} fontSize={'lg'}>
              Quick Links
            </Text>
            <Divider orientation='horizontal' w={282} />
            <HStack gap={25} w={282} textStyle={'footerText'}>
              <UnorderedList w={'full'}>
                <ListItem>Airdrop Compaign</ListItem>
                <ListItem>Whitelisting Compaign</ListItem>
                <ListItem>Quick Links</ListItem>
                <ListItem>Community Channel</ListItem>
                <ListItem>Application Dashboard</ListItem>
              </UnorderedList>
              <UnorderedList
                display={'flex'}
                justifyContent={'flex-end'}
                alignSelf={'flex-start'}
              >
                <ListItem>Support</ListItem>
              </UnorderedList>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </VStack>
  )
}

export default Footer
