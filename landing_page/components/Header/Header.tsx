import React, { memo, ReactNode } from 'react'
import {
  Flex,
  Button,
  Link,
  Image,
  FlexProps,
  HStack,
  Text,
  Container
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      bg='rgba(19,65,136,0.3)'
      color={'light.100'}
      w={"100%"}
      h={'65px'}
      pos={'fixed'}
      top={0}
      zIndex={4} align={"center"}
    >
      <Container maxW={'1200px'} >
        <Flex
          flex={{ base: 2 }}
          justifyContent={'space-between'}
          w={'full'}
          alignItems={'center'}
        >
          <Image
            alt={'DeskIcon'}
            src={'/724DeskLogo.svg'}
            w={'76px'}
            h={'24px'}
          />
          <Flex
            alignItems={'center'}
            color={'white'}
            w={'full'}
            justifyContent={'center'}
            gap={{ base: 1, md: 5, xl: 55 }}
          >
            {Links.map(link => (
              <NavLink key={link.key} name={link.name} link={link.link}>
                {link.name}
              </NavLink>
            ))}
          </Flex>
          <Button
            size={'md'}
            fontSize={'13px'}
            fontWeight={400}
            bg={'dark.200'}
            _hover={{ opacity: 0.8 }}
            color={'white'}
            gap={1}
            w={'148px'}
            h={'36px'}
          >
            <Image
              src={'diamonds.png'}
              alt={'diamonds'}
              w={'18px'}
              h={'18px'}
            />
            Join Whitelist
          </Button>
        </Flex>
      </Container>
    </Flex>
  )
}
export default memo(Header)

interface LinkProps {
  name: string
  link: string
  key: string
}

const Links: Array<LinkProps> = [
  { name: 'Home', link: '/', key: 'home' },
  { name: 'How it works', link: '', key: 'works' },
  { name: 'Features', link: '', key: 'features' },
  { name: 'Roadmap', link: '', key: 'roadmap' },
  { name: 'Token', link: '', key: 'token' },
  { name: 'Team', link: '', key: 'team' }
]

interface LinkItemProps extends FlexProps {
  name: string
  children: ReactNode
  link: string
}

const NavLink = ({ children, ...rest }: LinkItemProps) => (
  <Text textStyle={'headerText'}>
    <Link href={rest.link}>{children}</Link>
  </Text>
)
