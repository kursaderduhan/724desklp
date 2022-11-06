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
      h={"full"}
      bgGradient={
        'radial-gradient(86.81% 154.32% at 11.04% 62.82%, #2573BA 0%, #041860 100%)'
      }
      flexDirection={'column'}
    >
      <Box
        pos='absolute'
        bottom={205}
        mr={10}
        w={'842px'}
        h={'473px'}
        overflow={'visible'}
      >
        <AspectRatio ratio={2 / 1}>
          <Image src={'/footerLogo.png'} alt={'desk'} />
        </AspectRatio>
      </Box>
      <Container maxW={'1200px'} centerContent>
        <Flex
          w={'full'}
          h={'full'}
          alignItems={'center'}
          alignSelf={'center'}
          pt={'54px'} pb={"116px"}
        >
          <VStack
            color={'white'}
            gap={2}
            h={'full'}
            alignItems={'flex-start'}
            w={'full'}
          >
            <Box w={'282px'}>
              <Image src={'/724DeskLogo.png'} w={135} h={42} alt={'deskLogo'} />
            </Box>
            <Text maxW={'282px'} textStyle={'footerText'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deleniti eligendi explicabo. Similique ipsum qui impedit, quas
              quisquam sunt atque inventore quae ducimus corrupti, doloremque
              soluta iure, commodi dolorum asperiores.
            </Text>
            <HStack w={'282px'} gap={'25px'}>
              <Image
                src={'/facebook.png'}
                w={'24px'}
                h={'24px'}
                alt='facebook'
              />
              <Image
                src={'/instagram.png'}
                w={'24px'}
                h={'24px'}
                alt='ınstagram'
              />
              <Image
                src={'/bi-medium.png'}
                w={'24px'}
                h={'24px'}
                alt={'medium'}
              />
              <Image
                src={'/eva-twitter.png'}
                w={'24px'}
                h={'24px'}
                alt={'twitter'}
              />
            </HStack>
            <Text
              fontSize={'12px'}
              letterSpacing={'0.25px'}
              lineHeight={'150%'}
              fontWeight={400}
              fontStyle={'normal'}
              color={'white'}
              alignSelf={'flex-start'}
            >
              @ Copyright. All rights reserved.
            </Text>
          </VStack>
          <VStack color={'white'} w={'full'}>
            <Text w={282} textStyle={"investorText"} color={"white"}>
              Content
            </Text>
            <Divider orientation='horizontal' w={282} h={"1px"} opacity={0.5} bg={"white"} />
            <HStack gap={25} w={282}>
              <UnorderedList w={'full'} textStyle={'footerTextList'} spacing={"8px"}>
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
                alignSelf={'flex-start'} textStyle={'footerTextList'} spacing={"8px"}
              >
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Cookies Policy</ListItem>
                <ListItem>AIP Terms</ListItem>
                <ListItem>User Agreement</ListItem>
              </UnorderedList>
            </HStack>
          </VStack>
          <VStack color={'white'} alignSelf={'center'} w={'full'}>
            <Text w={282} textStyle={"investorText"} color={"white"}>
              Quick Links
            </Text>
            <Divider orientation='horizontal' w={282} h={"1px"} opacity={0.5} bg={"white"} />
            <HStack gap={25} w={282}>
              <UnorderedList w={'full'} textStyle={'footerTextList'} spacing={"8px"}>
                <ListItem>Airdrop Compaign</ListItem>
                <ListItem>Whitelisting Compaign</ListItem>
                <ListItem>Quick Links</ListItem>
                <ListItem>Community Channel</ListItem>
                <ListItem>Application Dashboard</ListItem>
              </UnorderedList>
              <UnorderedList
                display={'flex'}
                justifyContent={'flex-end'}
                alignSelf={'flex-start'} textStyle={'footerTextList'}
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
