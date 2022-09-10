import React, { memo, ReactNode } from 'react'
import {
  Flex,
  Button,
  Link,
  Image,
  FlexProps,
  HStack,
  Text
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      bg={'dark.100'}
      color={'light.100'}
      minH={'65px'}
      px={{ md: '50', lg: '120px' }}
      align={'center'}
      w={'100vw'}
    >
      <Flex flex={{ base: 2 }} justifyContent={'space-between'} w={"full"} px={2}>
        <Image alt={'DeskIcon'} src={'/724DeskLogo.svg'} />
        <Flex
          alignItems={'center'}
          color={'white'} w={"full"} justifyContent={"center"}
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
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={400}
          bg={'dark.200'}
          _hover={{ opacity: 0.8 }}
          color={'white'}
          gap={1}
        >
          <Image
            src={'diamonds.png'}
            alt={'diamonds'}
            w={{ base: 4, md: 6 }}
            h={{ base: 4, md: 6 }}
          />
          Join Whitelist
        </Button>
      </Flex>
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
  <Text fontSize={{base:"xs",md:"md", xl:"md"}} >
    <Link href={rest.link}>{children}</Link>
  </Text>
)
